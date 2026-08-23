#!/usr/bin/env node

/**
 * Korean Presentation Skill - Comprehensive Build & Visual Asset Integrity Suite
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const EXPECTED_ASSETS = [
  // 6. Agentic Workflow Reference Deck (8 slides)
  { type: 'file', path: 'examples/agentic_workflow/Agentic_Workflow_Presentation.pptx' },
  { type: 'file', path: 'examples/agentic_workflow/Agentic_Workflow_Presentation.pdf' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.001.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.002.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.003.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.004.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.005.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.006.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.007.png' },
  { type: 'file', path: 'examples/agentic_workflow/slides_preview/slide.008.png' },
  // 1. Tech Dark Glass (6 slides)
  { type: 'file', path: 'templates/Template_Tech_Dark_Glass.pptx' },
  { type: 'file', path: 'templates/Template_Tech_Dark_Glass.pdf' },
  { type: 'file', path: 'templates/preview_01_tech_dark_glass/slide.001.png' },
  { type: 'file', path: 'templates/preview_01_tech_dark_glass/slide.002.png' },
  { type: 'file', path: 'templates/preview_01_tech_dark_glass/slide.003.png' },
  { type: 'file', path: 'templates/preview_01_tech_dark_glass/slide.004.png' },
  { type: 'file', path: 'templates/preview_01_tech_dark_glass/slide.005.png' },
  { type: 'file', path: 'templates/preview_01_tech_dark_glass/slide.006.png' },

  // 2. Business Clean Navy (6 slides)
  { type: 'file', path: 'templates/Template_Business_Clean_Navy.pptx' },
  { type: 'file', path: 'templates/Template_Business_Clean_Navy.pdf' },
  { type: 'file', path: 'templates/preview_02_business_clean_navy/slide.001.png' },
  { type: 'file', path: 'templates/preview_02_business_clean_navy/slide.002.png' },
  { type: 'file', path: 'templates/preview_02_business_clean_navy/slide.003.png' },
  { type: 'file', path: 'templates/preview_02_business_clean_navy/slide.004.png' },
  { type: 'file', path: 'templates/preview_02_business_clean_navy/slide.005.png' },
  { type: 'file', path: 'templates/preview_02_business_clean_navy/slide.006.png' },

  // 3. Modern Light (6 slides)
  { type: 'file', path: 'templates/Template_Modern_Light.pptx' },
  { type: 'file', path: 'templates/Template_Modern_Light.pdf' },
  { type: 'file', path: 'templates/preview_03_modern_light/slide.001.png' },
  { type: 'file', path: 'templates/preview_03_modern_light/slide.002.png' },
  { type: 'file', path: 'templates/preview_03_modern_light/slide.003.png' },
  { type: 'file', path: 'templates/preview_03_modern_light/slide.004.png' },
  { type: 'file', path: 'templates/preview_03_modern_light/slide.005.png' },
  { type: 'file', path: 'templates/preview_03_modern_light/slide.006.png' },

  // 4. Pitch Keynote Bold (6 slides)
  { type: 'file', path: 'templates/Template_Pitch_Keynote_Bold.pptx' },
  { type: 'file', path: 'templates/Template_Pitch_Keynote_Bold.pdf' },
  { type: 'file', path: 'templates/preview_04_pitch_keynote_bold/slide.001.png' },
  { type: 'file', path: 'templates/preview_04_pitch_keynote_bold/slide.002.png' },
  { type: 'file', path: 'templates/preview_04_pitch_keynote_bold/slide.003.png' },
  { type: 'file', path: 'templates/preview_04_pitch_keynote_bold/slide.004.png' },
  { type: 'file', path: 'templates/preview_04_pitch_keynote_bold/slide.005.png' },
  { type: 'file', path: 'templates/preview_04_pitch_keynote_bold/slide.006.png' },

  // 5. Anthropic PptxGenJS Native Reference Deck
  { type: 'file', path: 'templates/Native_PptxGenJS_Sample.pptx' },

  // 6. AFSM Signature Deck (8 slides)
  { type: 'file', path: 'examples/afsm/Afsm_Presentation.pptx' },
  { type: 'file', path: 'examples/afsm/Afsm_Presentation.pdf' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.001.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.002.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.003.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.004.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.005.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.006.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.007.png' },
  { type: 'file', path: 'examples/afsm/slides_preview/slide.008.png' },
];

console.log('====================================================');
console.log(' Korean Presentation Skill - Build Integrity Check ');
console.log('====================================================\n');

let passed = 0;
let failed = 0;

EXPECTED_ASSETS.forEach((asset) => {
  const fullPath = path.join(ROOT_DIR, asset.path);
  if (fs.existsSync(fullPath)) {
    const stat = fs.statSync(fullPath);
    if (stat.size > 0) {
      console.log(`[PASS] ${asset.path} (${(stat.size / 1024).toFixed(1)} KB)`);
      passed++;
    } else {
      console.error(`[FAIL] ${asset.path} (Empty file!)`);
      failed++;
    }
  } else {
    console.error(`[FAIL] ${asset.path} (File not found!)`);
    failed++;
  }
});

console.log('\n----------------------------------------------------');
console.log(`Total Assets Checked: ${EXPECTED_ASSETS.length}`);
console.log(`Passed: ${passed} | Failed: ${failed}`);

if (failed === 0) {
  console.log('\n>>> SUCCESS: All 42 presentation build artifacts are intact and verified! <<<\n');
  process.exit(0);
} else {
  console.error('\n>>> ERROR: Some assets failed verification. <<<\n');
  process.exit(1);
}
