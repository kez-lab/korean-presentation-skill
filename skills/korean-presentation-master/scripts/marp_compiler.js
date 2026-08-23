#!/usr/bin/env node
/**
 * Marp Compiler for Presentation Master Skill.
 * Compiles a Markdown presentation into PPTX, PDF, and high-resolution slide PNG images.
 * Usage: node marp_compiler.js <input.md> <output_dir> [base_name]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputMd = process.argv[2];
const outputDir = process.argv[3] || process.cwd();
const baseName = process.argv[4] || path.basename(inputMd, path.extname(inputMd));

if (!inputMd || !fs.existsSync(inputMd)) {
  console.error("Usage: node marp_compiler.js <input.md> <output_dir> [base_name]");
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const pptxPath = path.join(outputDir, `${baseName}.pptx`);
const pdfPath = path.join(outputDir, `${baseName}.pdf`);
const imgDir = path.join(outputDir, 'slides_preview');
fs.mkdirSync(imgDir, { recursive: true });

console.log(`[PresentationMaster] Compiling ${inputMd}...`);

// 1. Generate PPTX
execSync(`npx @marp-team/marp-cli --no-stdin "${inputMd}" -o "${pptxPath}" --allow-local-files`, { stdio: ['ignore', 'inherit', 'inherit'] });
// 2. Generate PDF
execSync(`npx @marp-team/marp-cli --no-stdin "${inputMd}" -o "${pdfPath}" --allow-local-files`, { stdio: ['ignore', 'inherit', 'inherit'] });
// 3. Generate PNG images
execSync(`npx @marp-team/marp-cli --no-stdin "${inputMd}" --images png -o "${imgDir}/slide.png" --allow-local-files`, { stdio: ['ignore', 'inherit', 'inherit'] });

console.log(`\n🎉 Build complete!`);
console.log(`- PPTX: ${pptxPath}`);
console.log(`- PDF:  ${pdfPath}`);
console.log(`- PNGs: ${imgDir}/slide.*.png`);
