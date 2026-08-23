---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #132A1C 0%, #08140D 100%);
  --card-bg: rgba(18, 42, 28, 0.9);
  --border-color: rgba(52, 211, 153, 0.25);
  --card-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
  --text-title: #FFFFFF;
  --text-body: #D1FAE5;
  --text-sub: #A7F3D0;
  --accent-1: #10B981;
  --kicker-bg: rgba(16, 185, 129, 0.15);
  --kicker-border: rgba(16, 185, 129, 0.4);

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
<span class="kicker">ESG & CLEAN ENERGY</span>
<h1>
2030 탄소중립 실현을 위한<br>
<span class="hl">지능형 재생에너지 스마트 그리드</span>
</h1>
<p class="lead" style="margin-top: 10px;">
풍력 및 태양광의 발전 변동성을 AI 가상발전소(VPP)와 대용량 ESS로 능동 제어하는 친환경 솔루션
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">PRESENTER & TEAM</div>
<div class="meta-chip-val">친환경에너지전략원 • 스마트그리드TF</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SESSION & DATE</div>
<div class="meta-chip-val">글로벌 ESG 에너지 포럼 • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">REPOSITORY & DOCS</div>
<div class="meta-chip-val">esg-energy.org/smartgrid-2030</div>
</div>
</div>
</div>

<!-- note: [오프닝] 2030 탄소중립을 위한 지능형 재생에너지 분산 전력망 모델을 소개합니다. -->

---

<!-- 2. Breakdown -->
<div>
<div class="slide-header-center">
<span class="kicker">CHALLENGE & SOLUTION</span>
<h2>재생에너지 전력망 안정을 위한 3대 핵심 해법</h2>
<p class="lead">발전 출력 제한(Curtailment)을 제로화하고 송배전 효율을 극대화합니다.</p>
</div>

<div class="grid-3">
<div class="main-card">
<div class="circle-badge">01</div>
<div class="card-title">AI 기상 예측 VPP</div>
<div class="card-desc">위성 데이터와 국지 기상 수치 예보를 결합하여 시간대별 발전량을 98.2% 정확도로 예측.</div>
</div>
<div class="main-card">
<div class="circle-badge">02</div>
<div class="card-title">차세대 하이브리드 ESS</div>
<div class="card-desc">LFP 및 바나듐 레독스 흐름 전지를 하이브리드로 결합하여 충방전 수명을 20년으로 연장.</div>
</div>
<div class="main-card">
<div class="circle-badge">03</div>
<div class="card-title">실시간 P2P 전력 거래</div>
<div class="card-desc">블록체인 분산 원장 기반으로 잉여 전력을 인근 산업단지에 직거래하는 P2P 마켓 구축.</div>
</div>
</div>
</div>

<!-- note: [핵심 해법] 3대 해법으로 발전 제약을 해소하고 전력망을 안정화합니다. -->

---

<!-- 3. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">ENVIRONMENTAL IMPACT</span>
<h2>2030년 목표 친환경 정량 성과 지표</h2>
<p class="lead">실증 단지 구축을 통해 검증된 탄소 저감 및 에너지 효율 개선 성과</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">-48.5%</div>
<div class="card-title">온실가스 배출량 감축</div>
<div class="card-desc">석탄 화력 발전 대체 효과 검증</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">98.2%</div>
<div class="card-title">발전량 예측 정확도</div>
<div class="card-desc">AI 기상 모델링 기반 계통 안정화</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">0 %</div>
<div class="card-title">신재생 출력 제어율</div>
<div class="card-desc">대용량 ESS 연계를 통한 낭비 차단</div>
</div>
</div>
</div>

<!-- note: [정량 지표] 온실가스 48.5% 감축과 출력 제어 0%를 달성할 것입니다. -->

---

<!-- 4. Closing -->
<div>
<div class="slide-header">
<span class="kicker">CONCLUSION & CONTACT</span>
<h2>지속 가능한 미래를 위한 에너지 전환</h2>
<p class="lead">글로벌 탄소 국경세 대응 및 친환경 산업 생태계 확장에 동참하세요.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. RE100 완벽 이행 보장</div>
<div class="card-desc">국내외 주요 수출 기업의 RE100 인증을 100% 충족하는 전력 공급망 완비</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #34D399;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 분산 전력 인프라 표준화</div>
<div class="card-desc">지자체 및 공공기관 맞춤형 마이크로그리드 표준 패키지 배포</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #A7F3D0;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 글로벌 친환경 투자 유치</div>
<div class="card-desc">녹색채권 및 ESG 펀드 연계를 통한 1조 원 규모 인프라 펀딩 추진</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">ESG DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">스마트 그리드 구축 및 지자체 협력 문의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">PROJECT PORTAL</div>
<div class="qa-meta-val-blue">esg-energy.org/inquiry</div>
<div class="qa-meta-label">DIRECT INQUIRY</div>
<div class="qa-meta-val-white">grid-team@esg-energy.org</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 깨끗한 미래를 위한 질의응답 시간을 갖겠습니다. 감사합니다. -->
