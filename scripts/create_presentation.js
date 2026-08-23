#!/usr/bin/env node

/**
 * Korean Presentation Skill - Interactive / CLI Slide Deck Generator
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TEMPLATES = {
  tech: '01_tech_dark_glass.md',
  business: '02_business_clean_navy.md',
  light: '03_modern_light.md',
  pitch: '04_pitch_keynote_bold.md',
};

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--theme' && args[i + 1]) params.theme = args[++i];
    else if (args[i] === '--title' && args[i + 1]) params.title = args[++i];
    else if (args[i] === '--author' && args[i + 1]) params.author = args[++i];
    else if (args[i] === '--out' && args[i + 1]) params.out = args[++i];
    else if (args[i] === '--compile') params.compile = true;
  }
  return params;
}

function printUsage() {
  console.log(`
Korean Presentation Skill - Deck Generator

사용법:
  node scripts/create_presentation.js [옵션]

옵션:
  --theme <tech|business|light|pitch>  사용할 템플릿 테마 (기본: tech)
  --title <제목>                       발표 메인 제목
  --author <발표자>                    발표자명 및 팀
  --out <파일명.md>                    생성할 출력 파일 경로 (기본: new_presentation.md)
  --compile                            생성 즉시 PPTX/PDF/PNG 일괄 컴파일

예시:
  node scripts/create_presentation.js --theme business --title "2026 AI 신사업 전략" --author "홍길동 팀장" --out business_strategy.md --compile
`);
}

function run() {
  const params = parseArgs();
  
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    printUsage();
    process.exit(0);
  }

  const theme = params.theme || 'tech';
  const templateFileName = TEMPLATES[theme] || TEMPLATES.tech;
  const templatePath = path.join(__dirname, '..', 'templates', templateFileName);
  const outPath = path.resolve(process.cwd(), params.out || 'new_presentation.md');

  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Template file not found at ${templatePath}`);
    process.exit(1);
  }

  let content = fs.readFileSync(templatePath, 'utf-8');

  // Replace Title & Author if provided
  if (params.title) {
    content = content.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>\n${params.title}\n</h1>`);
  }
  if (params.author) {
    content = content.replace(/<div class="meta-chip-val">[\s\S]*?<\/div>/, `<div class="meta-chip-val">${params.author}</div>`);
  }

  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`\n✓ New presentation deck created: ${outPath} (Theme: ${theme})`);

  if (params.compile) {
    console.log(`\nCompiling presentation with Marp CLI...`);
    const compilerScript = path.join(__dirname, '..', 'skills', 'korean-presentation-skill', 'scripts', 'marp_compiler.js');
    const outDir = path.dirname(outPath);
    const outBaseName = path.basename(outPath, path.extname(outPath));
    execSync(`node "${compilerScript}" "${outPath}" "${outDir}" "${outBaseName}"`, { stdio: 'inherit' });
  } else {
    console.log(`\n다음 명령어로 언제든 컴파일할 수 있습니다:`);
    console.log(`  node skills/korean-presentation-skill/scripts/marp_compiler.js ${path.basename(outPath)}\n`);
  }
}

run();
