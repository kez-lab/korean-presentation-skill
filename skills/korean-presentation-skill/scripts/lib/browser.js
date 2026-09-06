'use strict';

/**
 * Headless Chrome access for the audit and PPTX stages.
 * Uses puppeteer-core against a browser already on the machine so the skill
 * never has to download a second Chromium.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer-core');

function candidateBrowsers() {
  const home = os.homedir();
  const list = [];

  if (process.env.CHROME_PATH) list.push(process.env.CHROME_PATH);
  if (process.env.PUPPETEER_EXECUTABLE_PATH) list.push(process.env.PUPPETEER_EXECUTABLE_PATH);

  if (process.platform === 'darwin') {
    list.push('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome');
    list.push('/Applications/Chromium.app/Contents/MacOS/Chromium');
    list.push('/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge');
    list.push('/Applications/Brave Browser.app/Contents/MacOS/Brave Browser');
  } else if (process.platform === 'win32') {
    list.push('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe');
    list.push('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe');
    list.push('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe');
  } else {
    list.push('/usr/bin/google-chrome');
    list.push('/usr/bin/google-chrome-stable');
    list.push('/usr/bin/chromium');
    list.push('/usr/bin/chromium-browser');
    list.push('/snap/bin/chromium');
  }

  // Playwright / puppeteer download caches, newest build first.
  const caches = [
    path.join(home, 'Library', 'Caches', 'ms-playwright'),
    path.join(home, '.cache', 'ms-playwright'),
    path.join(home, '.cache', 'puppeteer'),
  ];
  for (const cache of caches) {
    if (!fs.existsSync(cache)) continue;
    const dirs = fs
      .readdirSync(cache)
      .filter((d) => /^(chromium|chrome)[-_]/.test(d))
      .sort()
      .reverse();
    for (const d of dirs) {
      const base = path.join(cache, d);
      list.push(path.join(base, 'chrome-mac-arm64', 'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing'));
      list.push(path.join(base, 'chrome-mac', 'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing'));
      list.push(path.join(base, 'chrome-headless-shell-mac-arm64', 'chrome-headless-shell'));
      list.push(path.join(base, 'chrome-headless-shell-mac-x64', 'chrome-headless-shell'));
      list.push(path.join(base, 'chrome-linux', 'chrome'));
      list.push(path.join(base, 'chrome-linux64', 'chrome'));
      list.push(path.join(base, 'chrome-win64', 'chrome.exe'));
    }
  }

  return list;
}

function findBrowser() {
  for (const p of candidateBrowsers()) {
    try {
      if (p && fs.existsSync(p)) return p;
    } catch (_) {
      /* unreadable candidate, keep looking */
    }
  }
  return null;
}

async function launch() {
  const executablePath = findBrowser();
  if (!executablePath) {
    throw new Error(
      'No Chrome/Chromium found. Install Google Chrome, or set CHROME_PATH to a browser executable.'
    );
  }
  return puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none', '--allow-file-access-from-files'],
  });
}

/**
 * Opens `htmlPath`, waits for webfonts + layout to settle, and hands the page
 * to `fn`. Always closes the browser.
 */
async function withPage(htmlPath, fn, { viewport } = {}) {
  const browser = await launch();
  try {
    const page = await browser.newPage();
    await page.setViewport(viewport || { width: 1280, height: 720, deviceScaleFactor: 2 });
    await page.goto('file://' + path.resolve(htmlPath), { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(() => document.fonts && document.fonts.ready);
    // One more frame so late webfont metrics land before we measure.
    await new Promise((r) => setTimeout(r, 350));
    return await fn(page);
  } finally {
    await browser.close();
  }
}

module.exports = { launch, withPage, findBrowser };
