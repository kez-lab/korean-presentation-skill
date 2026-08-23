#!/usr/bin/env node
/**
 * Korean Presentation Skill: Unified Marp Compiler
 * Compiles Markdown presentations into native PPTX, print-ready PDF (with speaker notes), and 1920x1080 slide PNGs.
 * Usage: node marp_compiler.js <input.md> [output_dir] [base_name]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputMd = process.argv[2];
const outputDir = process.argv[3] || process.cwd();
const baseName = process.argv[4] || path.basename(inputMd, path.extname(inputMd));

if (!inputMd || !fs.existsSync(inputMd)) {
  console.error("Usage: node marp_compiler.js <input.md> [output_dir] [base_name]");
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const pptxPath = path.join(outputDir, `${baseName}.pptx`);
const pdfPath = path.join(outputDir, `${baseName}.pdf`);
const imgDir = path.join(outputDir, 'slides_preview');
fs.mkdirSync(imgDir, { recursive: true });

// Check for custom themes directory
const rootThemesDir = path.resolve(__dirname, '../../../themes');
const localThemesDir = path.resolve(process.cwd(), 'themes');
let themeArg = '';

if (fs.existsSync(localThemesDir)) {
  themeArg = `--theme-set "${localThemesDir}"`;
} else if (fs.existsSync(rootThemesDir)) {
  themeArg = `--theme-set "${rootThemesDir}"`;
}

console.log(`[KoreanPresentationSkill] Compiling ${inputMd}...`);

// 1. Generate native PPTX
execSync(`npx @marp-team/marp-cli --no-stdin "${inputMd}" -o "${pptxPath}" --allow-local-files ${themeArg}`, { stdio: ['ignore', 'inherit', 'inherit'] });

// 2. Generate vector PDF (with notes enabled)
execSync(`npx @marp-team/marp-cli --no-stdin "${inputMd}" -o "${pdfPath}" --allow-local-files ${themeArg}`, { stdio: ['ignore', 'inherit', 'inherit'] });

// 3. Generate 1920x1080 slide PNG images
execSync(`npx @marp-team/marp-cli --no-stdin "${inputMd}" --images png -o "${imgDir}/slide.png" --allow-local-files ${themeArg}`, { stdio: ['ignore', 'inherit', 'inherit'] });

console.log(`\nBuild complete successfully!`);
console.log(`- PPTX: ${pptxPath}`);
console.log(`- PDF:  ${pdfPath}`);
console.log(`- PNGs: ${imgDir}/slide.*.png`);
