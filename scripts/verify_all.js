#!/usr/bin/env node
'use strict';

/**
 * Build integrity suite.
 *
 * The previous version only checked that files existed, which is why a deck
 * with invisible table text and a raster-only PPTX could ship "green". This one
 * re-renders every example deck, audits the real laid-out geometry, and asserts
 * that the shipped PPTX is genuinely native.
 *
 *   node scripts/verify_all.js [--strict] [--only <id>]
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SCRIPTS = path.join(ROOT, 'skills', 'korean-presentation-skill', 'scripts');

const { renderDeck, buildMeasureHtml } = require(path.join(SCRIPTS, 'lib', 'deck'));
const { withPage } = require(path.join(SCRIPTS, 'lib', 'browser'));
const { extractFromPage } = require(path.join(SCRIPTS, 'lib', 'extract'));
const { auditDeck } = require(path.join(SCRIPTS, 'lib', 'audit'));
const { snapshotPptx, diffSnapshots } = require(path.join(SCRIPTS, 'lib', 'layout_snapshot'));

const argv = process.argv.slice(2);
const STRICT = argv.includes('--strict');
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;

const DOMAINS = fs
  .readdirSync(path.join(ROOT, 'examples'))
  .filter((d) => fs.existsSync(path.join(ROOT, 'examples', d, 'presentation.md')))
  .sort();

/** Every rule the auditor can emit. Keep in sync with lib/audit.js. */
const EXPECTED_RULES = [
  'canvas-overflow',
  'vertical-imbalance',
  'letter-spacing',
  'letter-spacing-extreme',
  'word-break',
  'word-break-root',
  'korean-orphan',
  'font-too-small',
  'unsafe-font',
  'low-contrast',
  'text-collision',
  'missing-notes',
  'thin-notes',
  'empty-slide',
  'gradient-approximated',
  'text-gradient-approximated',
];

const results = [];
let failures = 0;

function fail(scope, msg) {
  failures++;
  results.push({ ok: false, scope, msg });
}
function pass(scope, msg) {
  results.push({ ok: true, scope, msg });
}

/** A native deck has real text runs; a raster export has none. */
function inspectPptx(pptxPath) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kps-verify-'));
  try {
    execFileSync('unzip', ['-qo', pptxPath, '-d', tmp], { stdio: 'ignore' });
    const slidesDir = path.join(tmp, 'ppt', 'slides');
    if (!fs.existsSync(slidesDir)) return { slides: 0, textRuns: 0, media: 0 };
    const slideFiles = fs.readdirSync(slidesDir).filter((f) => f.endsWith('.xml'));
    let textRuns = 0;
    for (const f of slideFiles) {
      textRuns += (fs.readFileSync(path.join(slidesDir, f), 'utf8').match(/<a:t>/g) || []).length;
    }
    const mediaDir = path.join(tmp, 'ppt', 'media');
    const media = fs.existsSync(mediaDir) ? fs.readdirSync(mediaDir).length : 0;
    return { slides: slideFiles.length, textRuns, media };
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

async function main() {
  const line = '='.repeat(68);
  console.log(line);
  console.log(' Korean Presentation Skill — Build Integrity Suite');
  console.log(line + '\n');

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kps-suite-'));
  const themeDirs = [path.join(ROOT, 'themes')];

  for (const id of DOMAINS) {
    if (ONLY && id !== ONLY) continue;
    const scope = id;
    const mdPath = path.join(ROOT, 'examples', id, 'presentation.md');

    let audit;
    try {
      const deck = renderDeck(mdPath, { themeDirs });
      const measurePath = path.join(tmpDir, `${id}.html`);
      fs.writeFileSync(measurePath, buildMeasureHtml(deck), 'utf8');
      const measured = await withPage(measurePath, (page) => extractFromPage(page));
      audit = auditDeck(measured, deck.slides, { strict: STRICT });
    } catch (err) {
      fail(scope, `render/audit threw: ${err.message}`);
      continue;
    }

    const { error, warn } = audit.counts;
    if (audit.passed) {
      pass(scope, `audit clean — ${audit.slideCount} slides, ${warn} warn`);
    } else {
      fail(scope, `audit gate BLOCKED — ${error} error, ${warn} warn`);
      for (const f of audit.findings.filter((x) => x.level === 'error' || (STRICT && x.level === 'warn')).slice(0, 6)) {
        console.log(`      · slide ${f.slide} ${f.rule}: ${f.message.split('\n')[0]}`);
      }
    }

    const pptxPath = path.join(ROOT, 'examples', id, 'Presentation.pptx');
    if (!fs.existsSync(pptxPath)) {
      fail(scope, 'Presentation.pptx is missing');
    } else {
      const info = inspectPptx(pptxPath);
      if (info.textRuns === 0) {
        fail(scope, `Presentation.pptx has 0 text runs across ${info.slides} slides (raster-only, not editable)`);
      } else {
        pass(scope, `pptx native — ${info.slides} slides, ${info.textRuns} text runs, ${info.media} embedded images`);
      }
    }

    // Layout regression: the geometry that actually landed in the OOXML, against
    // a committed golden. This is what protects lib/extract.js and lib/pptx.js —
    // a unit slip there still yields a valid file that merely looks wrong.
    const goldenPath = path.join(ROOT, 'examples', id, 'Presentation.layout.json');
    if (!fs.existsSync(pptxPath)) {
      // already reported above
    } else if (!fs.existsSync(goldenPath)) {
      fail(scope, 'Presentation.layout.json golden is missing — run: node scripts/snapshot_decks.js');
    } else {
      const diffs = diffSnapshots(JSON.parse(fs.readFileSync(goldenPath, 'utf8')), snapshotPptx(pptxPath));
      if (diffs.length) {
        fail(scope, `layout drifted from golden — ${diffs.length} difference(s)`);
        for (const d of diffs.slice(0, 5)) console.log(`      · ${d}`);
      } else {
        pass(scope, 'layout matches golden');
      }
    }

    for (const rel of ['Presentation.pdf', 'Presentation.preview.html']) {
      const p = path.join(ROOT, 'examples', id, rel);
      if (fs.existsSync(p)) pass(scope, `${rel} (${(fs.statSync(p).size / 1024).toFixed(0)} KB)`);
      else fail(scope, `${rel} is missing`);
    }
  }

  // A rule that can no longer fire is a silently disabled rule. The fixture is a
  // deliberately non-compliant deck; every rule the auditor knows about must
  // still trigger on it.
  if (!ONLY) {
    const scope = 'governance rules';
    const fixture = path.join(ROOT, 'tests', 'fixtures', 'governance_violations.md');
    if (!fs.existsSync(fixture)) {
      fail(scope, 'tests/fixtures/governance_violations.md is missing');
    } else {
      try {
        const deck = renderDeck(fixture, { themeDirs });
        const measurePath = path.join(tmpDir, 'fixture.html');
        fs.writeFileSync(measurePath, buildMeasureHtml(deck), 'utf8');
        const measured = await withPage(measurePath, (page) => extractFromPage(page));
        const fired = new Set(auditDeck(measured, deck.slides).findings.map((f) => f.rule));
        const absent = EXPECTED_RULES.filter((r) => !fired.has(r));
        if (absent.length) fail(scope, `${absent.length} rule(s) never fired on the violation fixture: ${absent.join(', ')}`);
        else pass(scope, `all ${EXPECTED_RULES.length} rules fire on the violation fixture`);
      } catch (err) {
        fail(scope, `fixture audit threw: ${err.message}`);
      }
    }
  }

  fs.rmSync(tmpDir, { recursive: true, force: true });

  let current = null;
  for (const r of results) {
    if (r.scope !== current) {
      current = r.scope;
      console.log(`\n  ${current}`);
    }
    console.log(`    [${r.ok ? 'PASS' : 'FAIL'}] ${r.msg}`);
  }

  console.log('\n' + line);
  console.log(` ${results.filter((r) => r.ok).length} passed · ${failures} failed${STRICT ? ' (strict)' : ''}`);
  console.log(line + '\n');
  process.exit(failures ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
