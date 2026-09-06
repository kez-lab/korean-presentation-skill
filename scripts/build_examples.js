#!/usr/bin/env node
'use strict';

/**
 * Rebuilds every shipped deck through the HTML-first pipeline:
 *   preview HTML + audit  →  native PPTX + vector PDF + 1920x1080 PNGs
 *
 *   node scripts/build_examples.js [--templates] [--force] [--only <id>]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'skills', 'korean-presentation-skill', 'scripts', 'build_deck.js');

const argv = process.argv.slice(2);
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;
const FORCE = argv.includes('--force');
const WITH_TEMPLATES = argv.includes('--templates');

const targets = [];

for (const id of fs.readdirSync(path.join(ROOT, 'examples')).sort()) {
  const md = path.join(ROOT, 'examples', id, 'presentation.md');
  if (!fs.existsSync(md)) continue;
  targets.push({ id, md, outDir: path.join(ROOT, 'examples', id), name: 'Presentation' });
}

if (WITH_TEMPLATES) {
  const tplDir = path.join(ROOT, 'templates');
  const map = {
    '01_tech_dark_glass.md': 'Template_Tech_Dark_Glass',
    '02_business_clean_navy.md': 'Template_Business_Clean_Navy',
    '03_modern_light.md': 'Template_Modern_Light',
    '04_pitch_keynote_bold.md': 'Template_Pitch_Keynote_Bold',
  };
  for (const [file, name] of Object.entries(map)) {
    const md = path.join(tplDir, file);
    if (fs.existsSync(md)) {
      targets.push({ id: name, md, outDir: tplDir, name, imgDir: `preview_${file.replace('.md', '')}` });
    }
  }
}

let failed = 0;
for (const t of targets) {
  if (ONLY && t.id !== ONLY) continue;
  console.log(`\n${'─'.repeat(68)}\n▸ ${t.id}\n${'─'.repeat(68)}`);
  // --safe-fonts on the shipped artifacts: the PDF and PNGs embed the real
  // webfonts, so those stay pixel-faithful, while the PPTX stays readable on a
  // machine that has never installed Pretendard or Montserrat.
  const args = [BUILD, t.md, '--out', t.outDir, '--name', t.name, '--approve', '--pdf', '--png', '--json', '--safe-fonts'];
  if (FORCE) args.push('--force');
  const res = spawnSync(process.execPath, args, { stdio: 'inherit' });
  if (res.status !== 0) {
    failed++;
    continue;
  }
  // Templates keep their historical preview_<template> image folder name.
  if (t.imgDir) {
    const from = path.join(t.outDir, 'slides_preview');
    const to = path.join(t.outDir, t.imgDir);
    if (fs.existsSync(from)) {
      fs.rmSync(to, { recursive: true, force: true });
      fs.renameSync(from, to);
    }
  }
}

console.log(`\n${targets.length - failed}/${targets.length} decks built${failed ? ` · ${failed} failed` : ''}`);
process.exit(failed ? 1 : 0);
