---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #0F1B38 0%, #060B18 100%);
  --card-bg: rgba(15, 27, 56, 0.88);
  --border-color: rgba(255, 204, 0, 0.25);
  --card-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
  --text-title: #FFFFFF;
  --text-body: #E2E8F0;
  --text-sub: #94A3B8;
  --accent-1: #FFCC00;
  --kicker-bg: rgba(255, 204, 0, 0.12);
  --kicker-border: rgba(255, 204, 0, 0.35);

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
<span class="kicker">QUANTITATIVE TRADING</span>
<h1>
마이크로초 단위 초저지연<br>
<span class="hl">FPGA 기반 HFT 알고리즘 엔진</span>
</h1>
<p class="lead" style="margin-top: 10px;">
글로벌 파생상품 및 암호화폐 거래소 대상 L3 호가창 실시간 분석 및 나노초 주문 실행 체계
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">TRADING DESK</div>
<div class="meta-chip-val">Alpha Quant Partners • Core HFT</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">INVESTOR SESSION</div>
<div class="meta-chip-val">Quant Finance Forum • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">TERMINAL DOCS</div>
<div class="meta-chip-val">alpha-quant.io/engine-docs</div>
</div>
</div>
</div>

<!-- note: [오프닝] 나노초 단위 주문 처리와 실시간 리스크 헤징을 제공하는 FPGA HFT 엔진을 소개합니다. -->

---

<!-- 2. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">PERFORMANCE METRICS</span>
<h2>초저지연 주문 체결 및 수익성 정량 지표</h2>
<p class="lead">하드웨어 가속과 초병렬 C++23 커널을 통한 글로벌 마켓 리더십 확보</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">380 ns</div>
<div class="card-title">엔드투엔드 주문 지연시간</div>
<div class="card-desc">패킷 파싱부터 주문 발송까지 1마이크로초 미만</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">4.2 Sharpe</div>
<div class="card-title">연환산 샤프 지수</div>
<div class="card-desc">시장 중립형 마켓 메이킹 전략의 극저변동성</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">$4.8B</div>
<div class="card-title">일평균 거래 대금</div>
<div class="card-desc">CME, Eurex, 바이낸스 주요 페어 유동성 공급</div>
</div>
</div>
</div>

<!-- note: [지표] 380나노초 지연시간과 샤프지수 4.2를 달성했습니다. -->

---

<!-- 3. Closing -->
<div>
<div class="slide-header">
<span class="kicker">CONCLUSION & CONTACT</span>
<h2>차세대 금융 인프라의 기술적 도약</h2>
<p class="lead">기관 투자자를 위한 무위험 차익거래 및 유동성 공급 파트너십을 제안합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 하드웨어 전용 틱투트레이드 파이프라인</div>
<div class="card-desc">OS 커널 바이패스(Solarflare OpenOnload) 및 FPGA Direct DMA 완성</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #00F0FF;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 0.001% 미만 슬리피지 보장</div>
<div class="card-desc">급격한 시장 변동성 상황에서도 100% 견고한 서킷브레이커 리스크 방어</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 글로벌 코로케이션 서버 확장</div>
<div class="card-desc">시카고, 런던, 도쿄, 싱가포르 거래소 IDC 내 최단거리 전용선 직결 완료</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">INSTITUTIONAL Q&A</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">기관 LP 유동성 제휴 및 투자 논의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">PORTAL</div>
<div class="qa-meta-val-blue">alpha-quant.io</div>
<div class="qa-meta-label">TRADING DESK</div>
<div class="qa-meta-val-white">quant-desk@alpha-quant.io</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질문을 받겠습니다. -->
