---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: #101012;
  --card-bg: #18181C;
  --border-color: rgba(229, 192, 123, 0.25);
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  --text-title: #F8F6F0;
  --text-body: #D4D4D8;
  --text-sub: #A1A1AA;
  --accent-1: #E5C07B;
  --kicker-bg: rgba(229, 192, 123, 0.1);
  --kicker-border: rgba(229, 192, 123, 0.3);

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
<span class="kicker">HAUTE HORLOGERIE & LUXURY</span>
<h1>
전통 장인정신과 디지털의 조화<br>
<span class="hl">하이엔드 럭셔리 브랜드 헤리티지</span>
</h1>
<p class="lead" style="margin-top: 10px;">
180년 전통의 기계식 무브먼트 장인정신을 디지털 고객 경험(CX)과 온체인 보증서로 계승하는 전략
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">BRAND & MAISON</div>
<div class="meta-chip-val">Maison de Haute Horlogerie</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">EXECUTIVE SESSION</div>
<div class="meta-chip-val">Luxury Global Keynote • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">DIGITAL HERITAGE</div>
<div class="meta-chip-val">maison-horlogerie.com/heritage</div>
</div>
</div>
</div>

<!-- note: [오프닝] 180년 브랜드 유산과 디지털 고객 경험의 융합 전략을 발표합니다. -->

---

<!-- 2. Pillars -->
<div>
<div class="slide-header-center">
<span class="kicker">CORE VALUES</span>
<h2>럭셔리 헤리티지를 지탱하는 3대 기둥</h2>
<p class="lead">시간이 흘러도 변치 않는 가치와 최상위 VIP를 위한 차별화된 경험</p>
</div>

<div class="grid-3">
<div class="main-card">
<div class="circle-badge">01</div>
<div class="card-title">장인 수작업 무브먼트</div>
<div class="card-desc">연간 단 500점만 한정 생산되는 마스터 워치메이커의 100% 핸드메이드 피니싱 공정.</div>
</div>
<div class="main-card">
<div class="circle-badge">02</div>
<div class="card-title">온체인 영구 디지털 보증</div>
<div class="card-desc">소유권 이력과 유지보수 기록을 위변조 불가능한 암호화 원장에 영구 기록.</div>
</div>
<div class="main-card">
<div class="circle-badge">03</div>
<div class="card-title">프라이빗 아틀리에 살롱</div>
<div class="card-desc">파리, 제네바, 서울 플래그십에서 1:1 맞춤형 비스포크 주문 서비스 제공.</div>
</div>
</div>
</div>

<!-- note: [핵심 가치] 장인정신, 영구 보증, 프라이빗 살롱의 3대 가치를 계승합니다. -->

---

<!-- 3. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">CLIENTILE METRICS</span>
<h2>2026 글로벌 VIP 고객 가치 지표</h2>
<p class="lead">타협 없는 품질과 희소성이 창출하는 독보적인 브랜드 로열티</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">96.4%</div>
<div class="card-title">VIP 고객 재구매율</div>
<div class="card-desc">3대째 이어지는 독보적 패밀리 신뢰도</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">180 Yrs</div>
<div class="card-title">무브먼트 연속 제조 역사</div>
<div class="card-desc">스위스 발레드주 본사 직영 아틀리에</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">100%</div>
<div class="card-title">제네바 실(Seal) 인증</div>
<div class="card-desc">세계 최고 권위의 정밀도 및 예술성 공인</div>
</div>
</div>
</div>

<!-- note: [지표] 96.4%의 재구매율과 180년의 무브먼트 역사를 보유하고 있습니다. -->

---

<!-- 4. Closing -->
<div>
<div class="slide-header">
<span class="kicker">EXECUTIVE SUMMARY</span>
<h2>영원한 가치를 향한 여정</h2>
<p class="lead">전통과 현대가 완벽한 조화를 이루는 미래 럭셔리 생태계를 함께 만듭니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 희소성 가치 극대화</div>
<div class="card-desc">철저한 수작업 한정 수량 관리로 리세일 밸류 및 소장 가치 1위 수성</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #F8F6F0;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 디지털 VIP 컨시어지 런칭</div>
<div class="card-desc">전용 프라이빗 앱을 통한 글로벌 무상 출장 점검 및 커미션 오더 지원</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 지속 가능한 친환경 골드 사용</div>
<div class="card-desc">100% 공정무역 채굴 및 재활용 귀금속만을 사용하는 에시컬 메종 완성</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">PRIVATE DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">메종 프라이빗 살롱 및 비즈니스 파트너십 논의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">HERITAGE ATELIER</div>
<div class="qa-meta-val-blue">maison-horlogerie.com</div>
<div class="qa-meta-label">VIP CONCIERGE</div>
<div class="qa-meta-val-white">concierge@maison-horlogerie.com</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 메종의 미래에 대한 질문을 받겠습니다. -->
