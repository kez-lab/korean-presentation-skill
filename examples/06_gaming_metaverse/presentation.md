---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #1A0B2E 0%, #080314 100%);
  --card-bg: rgba(26, 11, 46, 0.88);
  --border-color: rgba(236, 72, 153, 0.25);
  --card-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);
  --text-title: #FFFFFF;
  --text-body: #F1F5F9;
  --text-sub: #C084FC;
  --accent-1: #EC4899;
  --kicker-bg: rgba(236, 72, 153, 0.15);
  --kicker-border: rgba(236, 72, 153, 0.4);

  }

  section {
    width: 1280px;
    height: 720px;
    padding: 44px 58px;
    background: var(--bg-main);
    color: var(--text-body);
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 span.hl { color: var(--accent-1) !important; }
  h1 {
    font-size: 2.22rem;
    font-weight: 900;
    line-height: 1.26;
    color: var(--text-title);
    margin-top: 10px;
    margin-bottom: 8px;
    letter-spacing: -0.035em;
  }

  h2 {
    font-size: 1.62rem;
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-title);
    margin-top: 6px;
    margin-bottom: 4px;
    letter-spacing: -0.03em;
  }

  .slide-header { margin-bottom: 24px; }
  .slide-header-center { text-align: center; margin-bottom: 24px; }

  .kicker {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-1);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: var(--kicker-bg);
    border: 1px solid var(--kicker-border);
    padding: 3px 10px;
    border-radius: 9999px;
    margin-bottom: 2px;
  }

  .lead {
    font-size: 0.94rem;
    color: var(--text-sub);
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
  }

  .main-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 18px 20px;
    box-shadow: var(--card-shadow);
    box-sizing: border-box;
  }

  .card-title {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-title);
    margin-bottom: 6px;
  }

  .card-desc {
    font-size: 0.82rem;
    color: var(--text-body);
    line-height: 1.55;
  }

  .circle-badge {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.74rem;
    font-weight: 900;
    margin-bottom: 10px;
    background: var(--kicker-bg);
    color: var(--accent-1);
    border: 1px solid var(--kicker-border);
  }

  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

  .cover-meta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
    margin-top: 28px;
  }
  .cover-meta-chip {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 12px 16px;
  }
  .meta-chip-label { font-size: 0.68rem; font-weight: 800; color: var(--accent-1); letter-spacing: 0.06em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: var(--text-title); }

  .split-box { display: flex; align-items: stretch; height: 480px; box-sizing: border-box; }
  .split-left { width: 260px; flex-shrink: 0; margin-right: 48px; display: flex; flex-direction: column; justify-content: space-between; }
  .split-title { font-size: 1.62rem; font-weight: 900; color: var(--text-title); margin-top: 4px; letter-spacing: -0.02em; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 16px; }

  .closing-box { display: grid; grid-template-columns: 1.4fr 1fr; gap: 18px; height: 430px; box-sizing: border-box; }
  .closing-left { display: flex; flex-direction: column; gap: 12px; justify-content: space-between; }
  .qa-box { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 18px 20px; display: flex; flex-direction: column; justify-content: space-between; }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: var(--accent-1); letter-spacing: 0.08em; }
  .qa-title { font-size: 2.2rem; font-weight: 900; color: var(--text-title); margin-top: 2px; margin-bottom: 6px; }
  .qa-desc { font-size: 0.8rem; color: var(--text-sub); line-height: 1.45; }
  .qa-meta-border { border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px; }
  .qa-meta-label { font-size: 0.68rem; font-weight: 800; color: var(--text-sub); margin-top: 6px; margin-bottom: 1px; }
  .qa-meta-val-blue { font-size: 0.85rem; font-weight: 800; color: var(--accent-1); word-break: break-all; }
  .qa-meta-val-white { font-size: 0.82rem; font-weight: 700; color: var(--text-title); }

  .stat-val { font-size: 2.7rem; font-weight: 900; line-height: 1.05; margin-bottom: 8px; color: var(--accent-1); }
  .clean-points { list-style: none; padding-left: 0; margin: 0; }
  .clean-points li { margin-bottom: 6px; line-height: 1.5; color: var(--text-body); }
  .clean-points li strong { color: var(--text-title); }

  
  footer { display: none; }
---

<!-- 1. Hero -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">NEXT-GEN VIRTUAL PRODUCTION</span>
<h1>
언리얼 엔진 5 기반 실시간<br>
<span class="hl">인터랙티브 버추얼 프로덕션 엔진</span>
</h1>
<p class="lead" style="margin-top: 10px;">
영화 및 트리플A 게임 제작 파이프라인을 실시간 인카메라 VFX(ICVFX)와 생성형 AI로 혁신
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">STUDIO & TECH</div>
<div class="meta-chip-val">메타버스 크리에이티브 랩 • VP팀</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">CREATIVE KEYNOTE</div>
<div class="meta-chip-val">Unreal Fest 2026 • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SHOWCASE REPO</div>
<div class="meta-chip-val">unreal-vp.io/engine-core</div>
</div>
</div>
</div>

<!-- note: [오프닝] 실시간 LED 월과 언리얼 엔진 5 기반의 차세대 버추얼 프로덕션 파이프라인을 소개합니다. -->

---

<!-- 2. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">PRODUCTION EFFICIENCY</span>
<h2>버추얼 프로덕션 도입 3대 혁신 지표</h2>
<p class="lead">기존 그린스크린 후반 작업 대비 제작비 70% 절감 및 실시간 렌더링 품질 완성</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">120 FPS</div>
<div class="card-title">8K 실시간 렌더링 프레임</div>
<div class="card-desc">Lumen & Nanite 하드웨어 레이트레이싱</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">-72%</div>
<div class="card-title">후반 CG 합성 제작 기간</div>
<div class="card-desc">인카메라 VFX로 촬영 현장에서 즉시 완결</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">100%</div>
<div class="card-title">모션캡처 실시간 동기화</div>
<div class="card-desc">지연시간 4ms 미만 극저지연 트래킹</div>
</div>
</div>
</div>

<!-- note: [성과] 120FPS 8K 렌더링과 72%의 후반 작업 기간 단축을 달성했습니다. -->

---

<!-- 3. Closing -->
<div>
<div class="slide-header">
<span class="kicker">COLLABORATION & Q&A</span>
<h2>차세대 디지털 콘텐츠의 미래</h2>
<p class="lead">글로벌 스튜디오 및 게임 개발사와의 공동 프로젝트를 제안합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 올인원 LED 볼륨 스튜디오 구축</div>
<div class="card-desc">상암/판교 스튜디오 내 직경 20m 360도 LED 월 상시 가동</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #8B5CF6;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 생성형 AI 배경 에셋 자동 생성</div>
<div class="card-desc">프롬프트 입력만으로 3D 포토리얼리즘 배경 씬 10분 내 인제스트</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 글로벌 영화제 기술상 출품</div>
<div class="card-desc">버추얼 프로덕션 기반 장편 SF 영화 제작 및 공식 개봉 예정</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">STUDIO DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">스튜디오 대관 및 기술 파트너십 문의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">SHOWCASE</div>
<div class="qa-meta-val-blue">unreal-vp.io</div>
<div class="qa-meta-label">DIRECT CONTACT</div>
<div class="qa-meta-val-white">studio@unreal-vp.io</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질문을 받겠습니다. -->
