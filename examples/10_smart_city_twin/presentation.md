---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #0B1E36 0%, #040A12 100%);
  --card-bg: rgba(11, 30, 54, 0.9);
  --border-color: rgba(0, 180, 216, 0.25);
  --card-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
  --text-title: #FFFFFF;
  --text-body: #E0F2FE;
  --text-sub: #7DD3FC;
  --accent-1: #00B4D8;
  --kicker-bg: rgba(0, 180, 216, 0.15);
  --kicker-border: rgba(0, 180, 216, 0.35);

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
<span class="kicker">NATIONAL SMART CITY & GOVTECH</span>
<h1>
도시 전역 실시간 3D 가상화<br>
<span class="hl">스마트시티 디지털 트윈 재난 관제 플랫폼</span>
</h1>
<p class="lead" style="margin-top: 10px;">
IoT 센서와 실시간 지하 매설물 GIS 데이터를 통합하여 침수, 화재, 교통 혼잡을 5분 전 사전 예측
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">AGENCY & DEPT</div>
<div class="meta-chip-val">국토교통부 • 스마트도시기획단</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">PUBLIC SYMPOSIUM</div>
<div class="meta-chip-val">스마트국토 엑스포 • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">GOV PORTAL</div>
<div class="meta-chip-val">smartcity.go.kr/digital-twin</div>
</div>
</div>
</div>

<!-- note: [오프닝] 도시 안전과 재난 예방을 위한 실시간 3D 디지털 트윈 관제 체계를 보고드립니다. -->

---

<!-- 2. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">CITIZEN SAFETY METRICS</span>
<h2>지자체 실증 사업 3대 핵심 성과</h2>
<p class="lead">서울 및 세종 스마트시티 시범 단지 2년 운영 결과 검증된 재난 대응력 향상</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">5 분전</div>
<div class="card-title">돌발 침수 사전 골든타임 확보</div>
<div class="card-desc">수위 센서 AI 시뮬레이션 기반 자동 경보</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">-41%</div>
<div class="card-title">소방차 긴급 출동 소요 시간</div>
<div class="card-desc">실시간 신호등 우선 제어 시스템 연동</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">100%</div>
<div class="card-title">지하 인프라 가시화율</div>
<div class="card-desc">상하수도/가스관 정밀 3D 모델링 완비</div>
</div>
</div>
</div>

<!-- note: [성과] 골든타임 5분 확보와 긴급 출동 시간 41% 단축을 달성했습니다. -->

---

<!-- 3. Closing -->
<div>
<div class="slide-header">
<span class="kicker">POLICY CONCLUSION</span>
<h2>더 안전하고 스마트한 도시의 미래</h2>
<p class="lead">전국 226개 지자체로 디지털 트윈 재난 관제 표준 플랫폼 보급을 확대합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 국가 재난안전망 연계 표준화</div>
<div class="card-desc">소방, 경찰, 지자체 상황실을 하나의 실시간 3D 관제맵으로 통합</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #38BDF8;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 오픈 API 공공 데이터 개방</div>
<div class="card-desc">민간 내비게이션 및 배달 플랫폼과 도로 통제 정보 실시간 공유</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. K-스마트시티 글로벌 수출</div>
<div class="card-desc">동남아 및 중동 주요 신도시 대상 디지털 트윈 솔루션 패키지 수출</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">PUBLIC POLICY DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">스마트시티 실증 및 공공 기술 협력 질의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">GOVERNMENT PORTAL</div>
<div class="qa-meta-val-blue">smartcity.go.kr</div>
<div class="qa-meta-label">PUBLIC INQUIRY</div>
<div class="qa-meta-val-white">digital-twin@korea.kr</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질문을 받겠습니다. -->
