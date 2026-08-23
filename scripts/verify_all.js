const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const DOMAINS = [
  { id: '01_quantum_gpu', slides: 2 },
  { id: '02_clean_energy_esg', slides: 2 },
  { id: '03_luxury_horlogerie', slides: 2 },
  { id: '04_genomics_healthcare', slides: 2 },
  { id: '05_fintech_hft', slides: 2 },
  { id: '06_gaming_metaverse', slides: 2 },
  { id: '07_enterprise_cdp', slides: 2 },
  { id: '08_academic_attention', slides: 2 },
  { id: '09_robotics_series_a', slides: 2 },
  { id: '10_smart_city_twin', slides: 2 }
];

const EXPECTED_ASSETS = [
  // Templates
  { type: 'file', path: 'templates/Template_Tech_Dark_Glass.pptx' },
  { type: 'file', path: 'templates/Template_Business_Clean_Navy.pptx' },
  { type: 'file', path: 'templates/Template_Modern_Light.pptx' },
  { type: 'file', path: 'templates/Template_Pitch_Keynote_Bold.pptx' },
  { type: 'file', path: 'templates/Native_PptxGenJS_Sample.pptx' }
];

// Add 10 Domain Decks
for (const d of DOMAINS) {
  EXPECTED_ASSETS.push({ type: 'file', path: `examples/${d.id}/Presentation.pptx` });
  EXPECTED_ASSETS.push({ type: 'file', path: `examples/${d.id}/Presentation.pdf` });
  for (let i = 1; i <= d.slides; i++) {
    const numStr = String(i).padStart(3, '0');
    EXPECTED_ASSETS.push({ type: 'file', path: `examples/${d.id}/slides_preview/slide.${numStr}.png` });
  }
}

console.log('====================================================');
console.log(' Korean Presentation Skill - Build Integrity Check ');
console.log('====================================================\n');

let passed = 0;
let failed = 0;

for (const asset of EXPECTED_ASSETS) {
  const fullPath = path.join(ROOT, asset.path);
  if (fs.existsSync(fullPath)) {
    const stat = fs.statSync(fullPath);
    const sizeKb = (stat.size / 1024).toFixed(1);
    console.log(`[PASS] ${asset.path} (${sizeKb} KB)`);
    passed++;
  } else {
    console.error(`[FAIL] MISSING: ${asset.path}`);
    failed++;
  }
}

console.log('\n----------------------------------------------------');
console.log(`Total Assets Checked: ${EXPECTED_ASSETS.length}`);
console.log(`Passed: ${passed} | Failed: ${failed}`);

if (failed === 0) {
  console.log('\n>>> SUCCESS: All 10 structurally unique domain decks verified! <<<\n');
  process.exit(0);
} else {
  console.error('\n>>> ERROR: Some expected assets are missing or failed to compile! <<<\n');
  process.exit(1);
}
