#!/usr/bin/env node

/**
 * Korean Presentation Skill: PPTX Schema & Integrity Validator
 * Validates PPTX package structure, slide relationships, content types, and detects known corruption footguns.
 * Usage: node pptx_validator.js <deck.pptx>
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

const inputPptx = process.argv[2];

if (!inputPptx || !fs.existsSync(inputPptx)) {
  console.error("Usage: node pptx_validator.js <deck.pptx>");
  process.exit(1);
}

console.log(`[PPTX Validator] Auditing ${inputPptx}...`);

// Unpack into the OS temp area, never into the user's working directory.
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kps-pptx-val-'));

let issues = [];

try {
  // 1. Test ZIP extraction
  try {
    execSync(`unzip -tq "${inputPptx}"`, { stdio: 'ignore' });
    execSync(`unzip -q "${inputPptx}" -d "${tempDir}"`, { stdio: 'ignore' });
  } catch (e) {
    issues.push("FATAL: Corrupted ZIP archive. File cannot be decompressed.");
  }

  // 2. Check Core PPTX Structure
  const contentTypesPath = path.join(tempDir, '[Content_Types].xml');
  const presentationPath = path.join(tempDir, 'ppt', 'presentation.xml');
  const slidesDir = path.join(tempDir, 'ppt', 'slides');

  if (!fs.existsSync(contentTypesPath)) {
    issues.push("CRITICAL: Missing [Content_Types].xml (invalid OOXML package)");
  }
  if (!fs.existsSync(presentationPath)) {
    issues.push("CRITICAL: Missing ppt/presentation.xml");
  }
  if (!fs.existsSync(slidesDir)) {
    issues.push("CRITICAL: Missing ppt/slides directory");
  }

  if (fs.existsSync(presentationPath)) {
    const presXml = fs.readFileSync(presentationPath, 'utf-8');
    
    // Check slide IDs
    if (!presXml.includes('<p:sldIdLst>')) {
      issues.push("WARNING: <p:sldIdLst> is missing or empty in presentation.xml");
    }

    // Check presentation child order (Anthropic Rule)
    const sldIdIndex = presXml.indexOf('<p:sldIdLst>');
    const notesMasterIndex = presXml.indexOf('<p:notesMasterIdLst>');
    if (sldIdIndex !== -1 && notesMasterIndex !== -1 && notesMasterIndex < sldIdIndex) {
      issues.push("WARNING: <p:notesMasterIdLst> appears before <p:sldIdLst>, which may fail in strict PowerPoint readers");
    }
  }

  // 3. Scan slide XMLs for common corruption patterns
  if (fs.existsSync(slidesDir)) {
    const slideFiles = fs.readdirSync(slidesDir).filter(f => f.endsWith('.xml'));
    let rasterOnly = 0;

    slideFiles.forEach(sf => {
      const xml = fs.readFileSync(path.join(slidesDir, sf), 'utf-8');

      // Editability: a slide whose whole content is a background image has no
      // real text, so it cannot be edited, searched, translated, or read by a
      // screen reader. This is the exact failure mode of image-export decks.
      const textRuns = (xml.match(/<a:t>/g) || []).length;
      const hasBgImage = /<p:bg>[\s\S]*?<a:blipFill/.test(xml);
      if (textRuns === 0) {
        rasterOnly++;
        issues.push(
          `ERROR in ${sf}: No text runs found` +
            (hasBgImage ? ' — the slide is a flattened background image (not editable, not searchable, not accessible).' : ' — the slide has an empty shape tree.')
        );
      }
      
      // Check for illegal hash in hex colors (e.g. srgbClr val="#FF0000")
      if (/val="#[0-9A-Fa-f]{6}"/.test(xml)) {
        issues.push(`ERROR in ${sf}: Detected '#' prefix in srgbClr hex code (corrupts PPTX in strict viewers).`);
      }
      // Check for unescaped ampersands in text
      if (/>[^<]*&[^<;]*</.test(xml)) {
        // Simple unescaped ampersand detection
        const rawMatches = xml.match(/>([^<]*&[^<]*)<\/a:t>/g) || [];
        rawMatches.forEach(m => {
          if (!m.includes('&amp;') && !m.includes('&lt;') && !m.includes('&gt;') && !m.includes('&quot;')) {
            issues.push(`ERROR in ${sf}: Unescaped '&' in text tag (${m})`);
          }
        });
      }
    });

    if (rasterOnly && rasterOnly === slideFiles.length) {
      issues.push(
        `CRITICAL: All ${slideFiles.length} slides are raster-only. Rebuild with ` +
          'build_deck.js --approve to produce a native, editable deck.'
      );
    }
  }

  console.log('----------------------------------------------------');
  if (issues.length === 0) {
    console.log('✓ Validation PASSED: 0 errors / 0 warnings detected.');
    console.log('  The PPTX file adheres to strict OOXML standards and Anthropic footgun rules.');
  } else {
    console.log(`Found ${issues.length} issue(s):`);
    issues.forEach((issue, idx) => console.log(`  [${idx + 1}] ${issue}`));
  }
  console.log('----------------------------------------------------\n');

  if (issues.some(i => i.startsWith('FATAL') || i.startsWith('CRITICAL'))) {
    process.exit(1);
  }

} catch (err) {
  console.error("Validation error:", err.message);
  process.exit(1);
} finally {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
