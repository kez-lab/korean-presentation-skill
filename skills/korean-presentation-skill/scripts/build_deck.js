#!/usr/bin/env node
'use strict';

/**
 * Korean Presentation Skill — HTML-first deck pipeline.
 *
 *   markdown ──▶ HTML preview ──▶ audit gate ──▶ native PPTX (+ PDF / PNG)
 *
 * Stage 1 (default) renders the deck to a reviewable HTML page and audits the
 * real, laid-out geometry. Stage 2 (--approve) converts that same measured
 * layout into an editable PowerPoint file. Nothing reaches PPTX until the audit
 * passes, which is the point: problems are caught in the browser, where they
 * are cheap to fix.
 *
 * Usage:
 *   node build_deck.js <deck.md> [--out DIR] [--name BASE] [--approve]
 *                      [--strict] [--force] [--pdf] [--png] [--json]
 *                      [--font-map "Pretendard=Malgun Gothic"]
 */

const fs = require('fs');
const path = require('path');

const { renderDeck, buildPreviewHtml, buildMeasureHtml } = require('./lib/deck');
const { withPage } = require('./lib/browser');
const { extractFromPage } = require('./lib/extract');
const { auditDeck, formatReport } = require('./lib/audit');
const { writePptx } = require('./lib/pptx');
const { SLIDE_W_PX, SLIDE_H_PX, SLIDE_W_IN, SLIDE_H_IN, SAFE_FONT_FALLBACKS } = require('./lib/constants');

function parseArgs(argv) {
  const o = { flags: new Set(), input: null, out: null, name: null, fontMap: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') o.out = argv[++i];
    else if (a === '--name') o.name = argv[++i];
    else if (a === '--font-map') {
      for (const pair of String(argv[++i]).split(',')) {
        const [from, to] = pair.split('=').map((s) => s && s.trim());
        if (from && to) o.fontMap[from] = to;
      }
    } else if (a.startsWith('--')) o.flags.add(a.slice(2));
    else if (!o.input) o.input = a;
  }
  return o;
}

const USAGE = `
Korean Presentation Skill — HTML-first deck pipeline

  node build_deck.js <deck.md> [options]

  Stage 1 (default)   render the reviewable HTML preview + run the audit
  Stage 2 (--approve) convert the audited layout into a native, editable PPTX

Options
  --out DIR        output directory            (default: alongside the markdown)
  --name BASE      output basename             (default: markdown filename)
  --approve        emit the PPTX once the audit gate passes
  --pdf            also emit a vector PDF (real text, not images)
  --png            also emit 1920x1080 slide PNGs
  --strict         treat warnings as blocking
  --force          emit even when the gate fails
  --json           write <name>.audit.json
  --quiet          only print the summary line
  --safe-fonts     substitute web-only fonts with faces PowerPoint always has
  --font-map A=B   remap a specific font (wins over --safe-fonts)
`;

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.input || opts.flags.has('help')) {
    console.log(USAGE);
    process.exit(opts.input ? 0 : 1);
  }
  if (!fs.existsSync(opts.input)) {
    console.error(`Input not found: ${opts.input}`);
    process.exit(1);
  }

  const input = path.resolve(opts.input);
  const outDir = path.resolve(opts.out || path.dirname(input));
  const baseName = opts.name || path.basename(input, path.extname(input));
  const quiet = opts.flags.has('quiet');
  const log = (...a) => !quiet && console.log(...a);
  fs.mkdirSync(outDir, { recursive: true });

  const themeDirs = [
    path.resolve(process.cwd(), 'themes'),
    path.resolve(__dirname, '../../../themes'),
  ];

  /* ---------- 1. Render ---------- */
  log(`[1/4] Rendering ${path.basename(input)} …`);
  const deck = renderDeck(input, { themeDirs });
  log(`      ${deck.slides.length} slides`);

  /* ---------- 2. Measure the real layout in headless Chrome ---------- */
  log('[2/4] Measuring laid-out geometry …');
  const measurePath = path.join(outDir, `.${baseName}.measure.html`);
  fs.writeFileSync(measurePath, buildMeasureHtml(deck), 'utf8');

  let measured;
  let renderArtifacts = {};
  try {
    // 1.5x of the 1280x720 canvas gives exactly 1920x1080 slide PNGs.
    const viewport = { width: SLIDE_W_PX, height: SLIDE_H_PX, deviceScaleFactor: 1.5 };
    measured = await withPage(measurePath, async (page) => {
      const slides = await extractFromPage(page);

      if (opts.flags.has('pdf')) {
        const pdfPath = path.join(outDir, `${baseName}.pdf`);
        await page.pdf({
          path: pdfPath,
          width: `${SLIDE_W_IN}in`,
          height: `${SLIDE_H_IN}in`,
          printBackground: true,
          pageRanges: `1-${deck.slides.length}`,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        });
        renderArtifacts.pdf = pdfPath;
      }

      if (opts.flags.has('png')) {
        const imgDir = path.join(outDir, 'slides_preview');
        fs.mkdirSync(imgDir, { recursive: true });
        const sections = await page.$$('body > section');
        for (let i = 0; i < sections.length; i++) {
          await sections[i].screenshot({
            path: path.join(imgDir, `slide.${String(i + 1).padStart(3, '0')}.png`),
          });
        }
        renderArtifacts.png = imgDir;
      }

      return slides;
    }, { viewport });
  } finally {
    fs.existsSync(measurePath) && fs.unlinkSync(measurePath);
  }

  /* ---------- 3. Audit gate ---------- */
  log('[3/4] Auditing …');
  const audit = auditDeck(measured, deck.slides, { strict: opts.flags.has('strict') });

  const previewPath = path.join(outDir, `${baseName}.preview.html`);
  fs.writeFileSync(
    previewPath,
    buildPreviewHtml(deck, { title: `${baseName} — review`, audit }),
    'utf8'
  );

  if (!quiet) console.log('\n' + formatReport(audit) + '\n');

  if (opts.flags.has('json')) {
    const jsonPath = path.join(outDir, `${baseName}.audit.json`);
    // Relative so the record is reproducible across machines.
    const deckRel = path.relative(process.cwd(), input) || path.basename(input);
    fs.writeFileSync(jsonPath, JSON.stringify({ deck: deckRel, ...audit }, null, 2), 'utf8');
    log(`      audit json → ${jsonPath}`);
  }

  log(`      review → file://${previewPath}`);

  /* ---------- 4. Convert (only on approval) ---------- */
  if (!opts.flags.has('approve')) {
    log('\n[4/4] Preview stage only. Open the HTML above; when it looks right, re-run with --approve.');
    process.exit(audit.passed ? 0 : 1);
  }

  if (!audit.passed && !opts.flags.has('force')) {
    console.error(
      `[4/4] BLOCKED: ${audit.counts.error} error(s)` +
        (audit.strict ? ` and ${audit.counts.warn} warning(s)` : '') +
        ' must be fixed first. Re-run with --force to override.'
    );
    process.exit(1);
  }

  log('[4/4] Writing native PPTX …');
  const pptxPath = path.join(outDir, `${baseName}.pptx`);
  const fontMap = opts.flags.has('safe-fonts')
    ? { ...SAFE_FONT_FALLBACKS, ...opts.fontMap }
    : opts.fontMap;
  const stats = await writePptx(measured, deck.slides, pptxPath, { fontMap, title: baseName });

  const kb = (fs.statSync(pptxPath).size / 1024).toFixed(1);
  console.log(`\nPPTX  → ${pptxPath} (${kb} KB)`);
  console.log(`        ${stats.textFrames} editable text frames · ${stats.shapes} shapes · ${stats.images} images · ${stats.characters} characters`);
  if (renderArtifacts.pdf) console.log(`PDF   → ${renderArtifacts.pdf}`);
  if (renderArtifacts.png) console.log(`PNG   → ${renderArtifacts.png}/slide.*.png`);
  console.log(`HTML  → ${previewPath}`);
  process.exit(0);
}

main().catch((err) => {
  console.error('\n[build_deck] ' + (err && err.stack ? err.stack : err));
  process.exit(1);
});
