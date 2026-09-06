#!/usr/bin/env node
'use strict';

/**
 * Records the layout golden for every deck: the geometry read back out of the
 * generated .pptx.
 *
 *   node scripts/snapshot_decks.js [--check] [--only <id>]
 *
 * Without flags it rewrites the goldens — run it after an intentional change
 * and review the diff, which reads as "this shape moved 4px" rather than as an
 * opaque binary blob. `--check` compares instead of writing, and is what the
 * test suite calls.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SCRIPTS = path.join(ROOT, 'skills', 'korean-presentation-skill', 'scripts');
const { snapshotPptx, diffSnapshots } = require(path.join(SCRIPTS, 'lib', 'layout_snapshot'));

const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;

/** Every deck that ships a .pptx, paired with where its golden belongs. */
function targets() {
  const out = [];
  for (const id of fs.readdirSync(path.join(ROOT, 'examples')).sort()) {
    const pptx = path.join(ROOT, 'examples', id, 'Presentation.pptx');
    if (fs.existsSync(pptx)) out.push({ id, pptx, golden: path.join(ROOT, 'examples', id, 'Presentation.layout.json') });
  }
  const tplDir = path.join(ROOT, 'templates');
  if (fs.existsSync(tplDir)) {
    for (const f of fs.readdirSync(tplDir).sort()) {
      if (!/^Template_.*\.pptx$/.test(f)) continue;
      const id = path.basename(f, '.pptx');
      out.push({ id, pptx: path.join(tplDir, f), golden: path.join(tplDir, `${id}.layout.json`) });
    }
  }
  return out;
}

function run() {
  const list = targets().filter((t) => !ONLY || t.id === ONLY);
  let changed = 0;
  let missing = 0;
  const report = [];

  for (const t of list) {
    const current = snapshotPptx(t.pptx);

    if (!CHECK) {
      fs.writeFileSync(t.golden, JSON.stringify(current, null, 2) + '\n', 'utf8');
      const shapes = current.slides.reduce((n, s) => n + s.shapes.length, 0);
      report.push(`  recorded ${t.id} — ${current.slideCount} slides, ${shapes} shapes`);
      continue;
    }

    if (!fs.existsSync(t.golden)) {
      missing++;
      report.push(`  [MISSING] ${t.id} — no golden. Run: node scripts/snapshot_decks.js`);
      continue;
    }

    const golden = JSON.parse(fs.readFileSync(t.golden, 'utf8'));
    const diffs = diffSnapshots(golden, current);
    if (diffs.length) {
      changed++;
      report.push(`  [DRIFT] ${t.id} — ${diffs.length} difference(s)`);
      for (const d of diffs.slice(0, 8)) report.push(`      · ${d}`);
      if (diffs.length > 8) report.push(`      · …and ${diffs.length - 8} more`);
    } else {
      report.push(`  [OK] ${t.id} — layout matches golden`);
    }
  }

  console.log(report.join('\n'));

  if (!CHECK) {
    console.log(`\n${list.length} golden(s) recorded.`);
    return 0;
  }
  if (changed || missing) {
    console.error(
      `\n${changed} deck(s) drifted, ${missing} missing golden(s).` +
        '\nIf the change was intended, re-record with: node scripts/snapshot_decks.js'
    );
    return 1;
  }
  console.log(`\nAll ${list.length} deck layouts match their goldens.`);
  return 0;
}

if (require.main === module) process.exit(run());
module.exports = { run, targets };
