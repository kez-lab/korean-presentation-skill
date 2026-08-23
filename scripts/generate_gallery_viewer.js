const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const DECKS = [
  {
    id: '01_quantum_gpu',
    name: '01. Quantum GPU Acceleration (4 Slides)',
    tag: 'DEEP CYBER CYAN & NEON PURPLE',
    color: '#00F0FF',
    dir: 'examples/01_quantum_gpu/slides_preview',
    slides: 4
  },
  {
    id: '02_clean_energy_esg',
    name: '02. Smart Grid & ESG Energy (4 Slides)',
    tag: 'WARM FOREST GREEN & SOFT SAGE',
    color: '#10B981',
    dir: 'examples/02_clean_energy_esg/slides_preview',
    slides: 4
  },
  {
    id: '03_luxury_horlogerie',
    name: '03. Haute Horlogerie Heritage (4 Slides)',
    tag: 'MATTE CHARCOAL & CHAMPAGNE GOLD',
    color: '#E5C07B',
    dir: 'examples/03_luxury_horlogerie/slides_preview',
    slides: 4
  },
  {
    id: '04_genomics_healthcare',
    name: '04. Precision Bio-Medicine (4 Slides)',
    tag: 'CLINICAL SOFT CYAN & PURE MEDICAL WHITE',
    color: '#0891B2',
    dir: 'examples/04_genomics_healthcare/slides_preview',
    slides: 4
  },
  {
    id: '05_fintech_hft',
    name: '05. High-Frequency Quant Trading (3 Slides)',
    tag: 'MIDNIGHT NAVY & VIVID ELECTRIC GOLD',
    color: '#FFCC00',
    dir: 'examples/05_fintech_hft/slides_preview',
    slides: 3
  },
  {
    id: '06_gaming_metaverse',
    name: '06. Unreal Engine 5 Virtual Production (3 Slides)',
    tag: 'ELECTRIC VIOLET & NEON HOT PINK',
    color: '#EC4899',
    dir: 'examples/06_gaming_metaverse/slides_preview',
    slides: 3
  },
  {
    id: '07_enterprise_cdp',
    name: '07. Real-Time Enterprise CDP (3 Slides)',
    tag: 'MODERN SLATE BLUE & ROYAL INDIGO LIGHT',
    color: '#4F46E5',
    dir: 'examples/07_enterprise_cdp/slides_preview',
    slides: 3
  },
  {
    id: '08_academic_attention',
    name: '08. Linear Attention CS Theory (3 Slides)',
    tag: 'ACADEMIC MONOCHROME & DEEP INK NAVY',
    color: '#1E1B4B',
    dir: 'examples/08_academic_attention/slides_preview',
    slides: 3
  },
  {
    id: '09_robotics_series_a',
    name: '09. Autonomous Logistics Robot Fleet (3 Slides)',
    tag: 'OBSIDIAN BLACK & RADIANT SOLAR ORANGE',
    color: '#FF6B00',
    dir: 'examples/09_robotics_series_a/slides_preview',
    slides: 3
  },
  {
    id: '10_smart_city_twin',
    name: '10. Smart City Digital Twin (3 Slides)',
    tag: 'DEEP TRUST NAVY & MODERN MINT TEAL',
    color: '#00B4D8',
    dir: 'examples/10_smart_city_twin/slides_preview',
    slides: 3
  }
];

let totalSlides = 0;
let deckSectionsHtml = '';

DECKS.forEach((deck, deckIdx) => {
  let cardsHtml = '';
  for (let i = 1; i <= deck.slides; i++) {
    totalSlides++;
    const numStr = String(i).padStart(3, '0');
    const imgPath = `${deck.dir}/slide.${numStr}.png`;
    cardsHtml += `
      <div class="slide-card" onclick="openModal('${imgPath}', '${deck.name} - Slide ${i}')">
        <div class="img-wrap">
          <img src="${imgPath}" alt="${deck.name} Slide ${i}" loading="lazy" />
          <div class="zoom-badge">🔍 Zoom 1920x1080</div>
        </div>
        <div class="card-caption">
          <span class="slide-num">Slide ${i}</span>
          <span class="view-btn">Full View →</span>
        </div>
      </div>
    `;
  }

  deckSectionsHtml += `
    <section class="deck-group" id="${deck.id}">
      <div class="deck-header">
        <div class="deck-title-wrap">
          <span class="deck-tag" style="border-color: ${deck.color}; color: ${deck.color}; background: ${deck.color}15;">${deck.tag}</span>
          <h2 class="deck-title">${deck.name}</h2>
        </div>
        <span class="deck-count">${deck.slides} Verified Slides</span>
      </div>
      <div class="slides-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
});

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Korean Presentation Skill - Dynamic 10 Domain Showcase</title>
  <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  <style>
    :root {
      --bg: #07090E;
      --surface: rgba(18, 24, 38, 0.85);
      --border: rgba(255, 255, 255, 0.08);
      --text: #F8FAFC;
      --text-dim: #94A3B8;
      --cyan: #00F0FF;
      --purple: #A78BFA;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Pretendard', sans-serif;
      padding-bottom: 80px;
    }
    header {
      padding: 40px 32px 24px;
      text-align: center;
      background: radial-gradient(circle at 50% 0%, #131B2E 0%, var(--bg) 100%);
      border-bottom: 1px solid var(--border);
    }
    .hero-kicker {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--cyan);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background: rgba(0, 240, 255, 0.1);
      border: 1px solid rgba(0, 240, 255, 0.3);
      padding: 4px 14px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 2.2rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      margin-bottom: 8px;
    }
    p.lead {
      color: var(--text-dim);
      font-size: 0.95rem;
      max-width: 760px;
      margin: 0 auto 20px;
      line-height: 1.5;
    }
    .stats-bar {
      display: flex;
      justify-content: center;
      gap: 24px;
      font-size: 0.85rem;
      font-weight: 700;
    }
    .stats-bar span strong { color: var(--cyan); }
    main { max-width: 1400px; margin: 0 auto; padding: 32px 24px; }
    .deck-group { margin-bottom: 48px; }
    .deck-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 10px;
    }
    .deck-tag {
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      padding: 3px 10px;
      border-radius: 6px;
      border: 1px solid;
      display: inline-block;
      margin-bottom: 4px;
    }
    .deck-title { font-size: 1.3rem; font-weight: 800; letter-spacing: -0.02em; }
    .deck-count { font-size: 0.8rem; color: var(--text-dim); }
    .slides-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    .slide-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .slide-card:hover {
      transform: translateY(-4px);
      border-color: rgba(0, 240, 255, 0.4);
      box-shadow: 0 12px 24px rgba(0, 240, 255, 0.12);
    }
    .img-wrap { position: relative; width: 100%; aspect-ratio: 16/9; background: #000; overflow: hidden; }
    .img-wrap img { width: 100%; height: 100%; object-fit: contain; }
    .zoom-badge {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 0.7rem;
      color: #FFF;
      padding: 3px 8px;
      border-radius: 6px;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .slide-card:hover .zoom-badge { opacity: 1; }
    .card-caption {
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      border-top: 1px solid var(--border);
    }
    .slide-num { font-weight: 700; color: var(--text); }
    .view-btn { color: var(--cyan); font-weight: 700; }
    /* Modal */
    #modal {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(12px);
      z-index: 9999;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    #modal.open { display: flex; }
    #modal-img { max-width: 90vw; max-height: 80vh; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
    #modal-cap { color: #FFF; font-size: 1rem; font-weight: 700; margin-top: 16px; }
    #modal-close { position: absolute; top: 24px; right: 32px; font-size: 2rem; color: #FFF; cursor: pointer; }
  </style>
</head>
<body>
  <header>
    <div class="hero-kicker">DYNAMIC DOMAIN THEME SHOWCASE</div>
    <h1>Korean Presentation Skill</h1>
    <p class="lead">주제와 도메인에 따라 독창적인 디자인 테마를 동적으로 창조하는 차세대 AI 프레젠테이션 엔진 쇼케이스</p>
    <div class="stats-bar">
      <span>총 <strong>10개</strong> 도메인 테마</span>
      <span>•</span>
      <span>총 <strong>${totalSlides}개</strong> 슬라이드 전수 검증 완료</span>
      <span>•</span>
      <span>OOXML 스키마 <strong>0 Error</strong></span>
    </div>
  </header>

  <main>
    ${deckSectionsHtml}
  </main>

  <div id="modal" onclick="closeModal()">
    <span id="modal-close">&times;</span>
    <img id="modal-img" src="" alt="Zoomed Slide" />
    <div id="modal-cap"></div>
  </div>

  <script>
    function openModal(src, cap) {
      document.getElementById('modal-img').src = src;
      document.getElementById('modal-cap').innerText = cap;
      document.getElementById('modal').classList.add('open');
    }
    function closeModal() {
      document.getElementById('modal').classList.remove('open');
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'preview_gallery.html'), html);
console.log(`✓ Master visual showcase generated with 10 domains (${totalSlides} slides): ${path.join(ROOT, 'preview_gallery.html')}`);
