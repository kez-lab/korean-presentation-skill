#!/usr/bin/env node

/**
 * Korean Presentation Skill: PPTX Content & Speaker Notes Extractor
 * Extracts slide text, titles, and speaker notes from any .pptx presentation into structured Markdown.
 * Usage: node pptx_extractor.js <input.pptx> [output.md]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputPptx = process.argv[2];
const outputMd = process.argv[3];

if (!inputPptx || !fs.existsSync(inputPptx)) {
  console.error("Usage: node pptx_extractor.js <input.pptx> [output.md]");
  process.exit(1);
}

// Temporary extraction directory
const tempDir = path.join(process.cwd(), '.temp_pptx_extract');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

try {
  // Unzip PPTX
  execSync(`unzip -q "${inputPptx}" -d "${tempDir}"`, { stdio: 'ignore' });

  const slidesDir = path.join(tempDir, 'ppt', 'slides');
  const notesDir = path.join(tempDir, 'ppt', 'notesSlides');

  if (!fs.existsSync(slidesDir)) {
    console.error("Error: Invalid PPTX structure (no ppt/slides directory found).");
    process.exit(1);
  }

  const slideFiles = fs.readdirSync(slidesDir)
    .filter(f => /^slide\d+\.xml$/.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);
      return numA - numB;
    });

  let markdownOutput = `# Extracted Presentation: ${path.basename(inputPptx)}\n\n`;

  slideFiles.forEach((slideFile, index) => {
    const slideNum = index + 1;
    const slideXml = fs.readFileSync(path.join(slidesDir, slideFile), 'utf-8');

    // Extract text elements from <a:t>
    const textMatches = slideXml.match(/<a:t>([\s\S]*?)<\/a:t>/g) || [];
    const textLines = textMatches.map(t => t.replace(/<\/?a:t>/g, '').trim()).filter(Boolean);

    markdownOutput += `## Slide ${slideNum}\n\n`;
    if (textLines.length > 0) {
      // First line as title if prominent
      markdownOutput += `### ${textLines[0]}\n\n`;
      for (let i = 1; i < textLines.length; i++) {
        markdownOutput += `- ${textLines[i]}\n`;
      }
      markdownOutput += '\n';
    } else {
      markdownOutput += `*(No direct text found - may contain images or shapes)*\n\n`;
    }

    // Check for Speaker Notes
    const noteFile = `notesSlide${slideNum}.xml`;
    const notePath = path.join(notesDir, noteFile);
    if (fs.existsSync(notePath)) {
      const noteXml = fs.readFileSync(notePath, 'utf-8');
      const noteMatches = noteXml.match(/<a:t>([\s\S]*?)<\/a:t>/g) || [];
      const noteTexts = noteMatches.map(t => t.replace(/<\/?a:t>/g, '').trim()).filter(Boolean);
      // Filter out slide number text
      const filteredNotes = noteTexts.filter(t => !/^\d+$/.test(t));
      if (filteredNotes.length > 0) {
        markdownOutput += `<!-- Speaker Notes:\n${filteredNotes.join(' ')}\n-->\n\n`;
      }
    }

    markdownOutput += `---\n\n`;
  });

  if (outputMd) {
    fs.writeFileSync(outputMd, markdownOutput, 'utf-8');
    console.log(`✓ Presentation content successfully extracted to: ${outputMd}`);
  } else {
    console.log(markdownOutput);
  }

} catch (err) {
  console.error("Error extracting PPTX:", err.message);
  process.exit(1);
} finally {
  // Clean up temp dir
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
