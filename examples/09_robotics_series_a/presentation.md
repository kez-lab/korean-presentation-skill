---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: #080808;
  --card-bg: #141414;
  --border-color: rgba(255, 107, 0, 0.25);
  --card-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
  --text-title: #FFFFFF;
  --text-body: #E5E5E5;
  --text-sub: #A3A3A3;
  --accent-1: #FF6B00;
  --kicker-bg: rgba(255, 107, 0, 0.12);
  --kicker-border: rgba(255, 107, 0, 0.35);

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
<span class="kicker">SERIES A INVESTMENT DECK</span>
<h1>
완전 무인 물류의 혁신<br>
<span class="hl">자율주행 군집 로봇 플릿 오케스트레이션</span>
</h1>
<p class="lead" style="margin-top: 10px;">
1,000대 이상의 로봇이 센티미터 단위 정밀도로 충돌 없이 협업하는 차세대 물류 풀필먼트 플랫폼
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">COMPANY & FOUNDER</div>
<div class="meta-chip-val">로보틱스X • 대표이사 김태호</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">INVESTMENT ROUND</div>
<div class="meta-chip-val">Series A $10M • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">DATA ROOM</div>
<div class="meta-chip-val">robotics-x.ai/investor</div>
</div>
</div>
</div>

<!-- note: [오프닝] 1,000대 군집 로봇을 실시간 관제하는 시리즈 A 투자 피치를 발표합니다. -->

---

<!-- 2. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">TRACTION & METRICS</span>
<h2>폭발적인 트랙션과 검증된 유닛 이코노믹스</h2>
<p class="lead">국내 대형 이커머스 및 글로벌 3PL 물류센터 12곳에 양산 로봇 2,500대 상용 배치</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">$8.4M</div>
<div class="card-title">연간 반복 매출 (ARR)</div>
<div class="card-desc">전년 대비 420% 수직 상승 성장세</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">99.99%</div>
<div class="card-title">군집 주행 무사고 안전율</div>
<div class="card-desc">누적 1,500만 km 자율주행 데이터 축적</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">8 개월</div>
<div class="card-title">고객사 설비 투자 회수(ROI)</div>
<div class="card-desc">인건비 60% 절감으로 도입 즉시 이익 실현</div>
</div>
</div>
</div>

<!-- note: [트랙션] 연매출 8.4M 달러와 420% 성장률로 시장을 선점하고 있습니다. -->

---

<!-- 3. Closing -->
<div>
<div class="slide-header">
<span class="kicker">INVESTMENT ASK</span>
<h2>글로벌 물류 로보틱스의 유니콘으로 도약</h2>
<p class="lead">이번 Series A $10M 라운드를 통해 북미 및 유럽 거점 물류센터 확장에 나섭니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 북미 현지 법인 설립 및 인허가</div>
<div class="card-desc">실리콘밸리 거점 개소 및 UL 안전 인증 100% 획득 완료</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #FFA143;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 차세대 VLA(비전-언어-행동) 모델 탑재</div>
<div class="card-desc">로봇 스스로 미배치된 신규 물품을 인지하고 피킹하는 자율 지능 고도화</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 2028년 IPO 상장 목표</div>
<div class="card-desc">연간 ARR $50M 달성을 통한 글로벌 나스닥 직상장 로드맵 추진</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">INVESTOR RELATIONS</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">투자 라운드 및 데이터룸 실사 논의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">DATA ROOM</div>
<div class="qa-meta-val-blue">robotics-x.ai/ir</div>
<div class="qa-meta-label">FOUNDER DIRECT</div>
<div class="qa-meta-val-white">ceo@robotics-x.ai</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 투자자 여러분의 질문을 받겠습니다. -->
