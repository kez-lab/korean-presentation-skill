#!/usr/bin/env node

/**
 * Korean Presentation Skill - Standalone Visual Gallery HTML Generator
 * Generates an interactive web gallery allowing users to view all slides in dark glassmorphism UI.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_FILE = path.join(ROOT_DIR, 'preview_gallery.html');

const DECKS = [
  {
    id: 'tech_dark',
    name: '01. Tech Dark Glass (테크 아키텍처)',
    tag: 'SYSTEM ARCHITECTURE',
    color: '#00F0FF',
    dir: 'templates/preview_01_tech_dark_glass',
    slides: 6
  },
  {
    id: 'biz_navy',
    name: '02. Business Clean Navy (기업 전략 / IR)',
    tag: 'ENTERPRISE STRATEGY',
    color: '#F59E0B',
    dir: 'templates/preview_02_business_clean_navy',
    slides: 6
  },
  {
    id: 'modern_light',
    name: '03. Modern Light (학술 / 백서)',
    tag: 'ACADEMIC RESEARCH',
    color: '#4F46E5',
    dir: 'templates/preview_03_modern_light',
    slides: 6
  },
  {
    id: 'pitch_bold',
    name: '04. Pitch Keynote Bold (스타트업 피치)',
    tag: 'SERIES A INVESTMENT',
    color: '#EAB308',
    dir: 'templates/preview_04_pitch_keynote_bold',
    slides: 6
  },
  {
    id: 'afsm_signature',
    name: 'AFSM Production Reference Deck (8 Slides)',
    tag: 'SIGNATURE PRODUCTION DECK',
    color: '#38BDF8',
    dir: 'examples/afsm/slides_preview',
    slides: 8
  }
];

let deckHtml = '';

DECKS.forEach(deck => {
  deckHtml += `
    <div class="deck-section" id="${deck.id}">
      <div class="deck-header">
        <span class="deck-tag" style="border-color: ${deck.color}; color: ${deck.color};">${deck.tag}</span>
        <h2>${deck.name}</h2>
      </div>
      <div class="slide-grid">
  `;

  for (let i = 1; i <= deck.slides; i++) {
    const numStr = String(i).padStart(3, '0');
    const imgPath = `${deck.dir}/slide.${numStr}.png`;
    deckHtml += `
      <div class="slide-card">
        <div class="slide-thumb-wrap">
          <img src="${imgPath}" alt="${deck.name} Slide ${i}" loading="lazy" onclick="openModal('${imgPath}')"/>
        </div>
        <div class="slide-caption">Slide ${i} / ${deck.slides}</div>
      </div>
    `;
  }

  deckHtml += `
      </div>
    </div>
  `;
});

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Korean Presentation Skill - Master Visual Showcase</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  <style>
    :root {
      --bg: #07090E;
      --card-bg: rgba(18, 24, 38, 0.85);
      --border: rgba(255, 255, 255, 0.08);
      --text: #F1F5F9;
      --text-dim: #94A3B8;
      --accent: #00F0FF;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Pretendard', sans-serif; letter-spacing: -0.025em; }
    body { background: var(--bg); color: var(--text); padding: 40px 24px; min-height: 100vh; }
    .container { max-width: 1360px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 48px; }
    .hero-badge { display: inline-block; padding: 4px 14px; background: rgba(0, 240, 255, 0.12); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 9999px; color: var(--accent); font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 12px; }
    h1 { font-size: 2.4rem; font-weight: 900; color: #FFF; margin-bottom: 8px; }
    .subtitle { color: var(--text-dim); font-size: 1.05rem; }
    .deck-section { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 28px; margin-bottom: 36px; box-shadow: 0 16px 36px rgba(0,0,0,0.4); }
    .deck-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
    .deck-tag { font-size: 0.72rem; font-weight: 800; padding: 2px 8px; border: 1px solid; border-radius: 4px; }
    .deck-header h2 { font-size: 1.35rem; font-weight: 800; color: #FFF; }
    .slide-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; }
    .slide-card { background: rgba(10, 14, 23, 0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; overflow: hidden; transition: transform 0.2s, border-color 0.2s; }
    .slide-card:hover { transform: translateY(-4px); border-color: rgba(0, 240, 255, 0.4); }
    .slide-thumb-wrap { width: 100%; aspect-ratio: 16/9; background: #000; overflow: hidden; cursor: pointer; }
    .slide-thumb-wrap img { width: 100%; height: 100%; object-fit: contain; }
    .slide-caption { padding: 10px 14px; font-size: 0.82rem; font-weight: 700; color: var(--text-dim); border-top: 1px solid var(--border); text-align: right; }
    
    /* Modal */
    #modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 999; justify-content: center; align-items: center; padding: 24px; }
    #modal img { max-width: 96vw; max-height: 94vh; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); border: 1px solid rgba(255,255,255,0.15); }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="hero-badge">AI Agent Presentation Engine</div>
      <h1>Korean Presentation Skill Master Showcase</h1>
      <p class="subtitle">한국어 타이포그래피 최적화 및 프로 UI/UX 거버넌스 기반 32개 슬라이드 전체 렌더링 갤러리</p>
    </header>

    ${deckHtml}
  </div>

  <div id="modal" onclick="closeModal()">
    <img id="modalImg" src="" alt="Enlarged Slide" />
  </div>

  <script>
    function openModal(src) {
      document.getElementById('modalImg').src = src;
      document.getElementById('modal').style.display = 'flex';
    }
    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(OUT_FILE, html, 'utf-8');
console.log(`✓ Master visual showcase generated: ${OUT_FILE}`);
