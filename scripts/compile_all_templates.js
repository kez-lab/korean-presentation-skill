const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const templates = [
  { file: '01_tech_dark_glass.md', name: 'Template_Tech_Dark_Glass' },
  { file: '02_business_clean_navy.md', name: 'Template_Business_Clean_Navy' },
  { file: '03_modern_light.md', name: 'Template_Modern_Light' },
  { file: '04_pitch_keynote_bold.md', name: 'Template_Pitch_Keynote_Bold' }
];

const tplDir = path.resolve(__dirname, '../templates');

templates.forEach(t => {
  const inMd = path.join(tplDir, t.file);
  const outPptx = path.join(tplDir, `${t.name}.pptx`);
  const outPdf = path.join(tplDir, `${t.name}.pdf`);
  const outImgDir = path.join(tplDir, `preview_${t.file.replace('.md', '')}`);

  if (!fs.existsSync(outImgDir)) fs.mkdirSync(outImgDir, { recursive: true });

  console.log(`\nCompiling ${t.file}...`);
  execSync(`npx @marp-team/marp-cli --no-stdin "${inMd}" -o "${outPptx}" --allow-local-files`, { stdio: ['ignore', 'inherit', 'inherit'] });
  execSync(`npx @marp-team/marp-cli --no-stdin "${inMd}" -o "${outPdf}" --allow-local-files`, { stdio: ['ignore', 'inherit', 'inherit'] });
  execSync(`npx @marp-team/marp-cli --no-stdin "${inMd}" --images png -o "${outImgDir}/slide.png" --allow-local-files`, { stdio: ['ignore', 'inherit', 'inherit'] });
  console.log(`✓ Built ${t.name} (PPTX, PDF, PNG)`);
});

console.log('\nAll 4 templates successfully compiled!');
