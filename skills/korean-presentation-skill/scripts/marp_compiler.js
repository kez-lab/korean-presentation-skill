#!/usr/bin/env node
'use strict';

/**
 * DEPRECATED — kept so existing commands keep working.
 *
 * The original implementation shelled out to marp-cli, whose PPTX export writes
 * one flattened background image per slide with an empty shape tree: no
 * editable text, no search, no screen-reader access, and ~7x the file size.
 *
 * This shim forwards to the HTML-first pipeline, which produces the same
 * artifacts with native, editable PPTX text. Prefer calling build_deck.js
 * directly so you get the review + audit stage.
 *
 * Usage: node marp_compiler.js <input.md> [output_dir] [base_name]
 */

const path = require('path');
const { spawnSync } = require('child_process');

const [input, outDir, baseName] = process.argv.slice(2);

if (!input) {
  console.error('Usage: node marp_compiler.js <input.md> [output_dir] [base_name]');
  process.exit(1);
}

console.warn(
  '[deprecated] marp_compiler.js now delegates to build_deck.js.\n' +
    '             Use:  node build_deck.js <deck.md> --out DIR            (review stage)\n' +
    '                   node build_deck.js <deck.md> --out DIR --approve  (emit PPTX)\n'
);

const args = [path.join(__dirname, 'build_deck.js'), input, '--approve', '--pdf', '--png', '--force'];
if (outDir) args.push('--out', outDir);
if (baseName) args.push('--name', baseName);

const res = spawnSync(process.execPath, args, { stdio: 'inherit' });
process.exit(res.status === null ? 1 : res.status);
