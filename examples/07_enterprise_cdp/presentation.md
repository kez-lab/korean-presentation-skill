---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #FFFFFF 0%, #F1F5F9 100%);
  --card-bg: #FFFFFF;
  --border-color: rgba(79, 70, 229, 0.2);
  --card-shadow: 0 8px 24px rgba(79, 70, 229, 0.06);
  --text-title: #0F172A;
  --text-body: #334155;
  --text-sub: #64748B;
  --accent-1: #4F46E5;
  --kicker-bg: rgba(79, 70, 229, 0.08);
  --kicker-border: rgba(79, 70, 229, 0.25);

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
<span class="kicker">ENTERPRISE SAAS PLATFORM</span>
<h1>
전사 옴니채널 고객 데이터를 하나로<br>
<span class="hl">차세대 실시간 엔터프라이즈 CDP</span>
</h1>
<p class="lead" style="margin-top: 10px;">
사일로화된 결제, 마케팅, 서비스 로그를 단일 고객 식별자(Single ID)로 실시간 통합 및 AI 세그먼트 생성
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">PRODUCT & TEAM</div>
<div class="meta-chip-val">Nexus CDP • Enterprise Solutions</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">PRODUCT KEYNOTE</div>
<div class="meta-chip-val">SaaS Leader Forum • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">DOCS & API</div>
<div class="meta-chip-val">nexus-cdp.com/enterprise</div>
</div>
</div>
</div>

<!-- note: [오프닝] 분산된 고객 데이터를 실시간 단일 뷰로 통합하는 엔터프라이즈 CDP 플랫폼을 발표합니다. -->

---

<!-- 2. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">BUSINESS ROI</span>
<h2>엔터프라이즈 고객사 도입 정량 성과</h2>
<p class="lead">금융, 이커머스, 모빌리티 분야 80여 개 대기업에서 검증된 비즈니스 임팩트</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">+340%</div>
<div class="card-title">타겟 마케팅 전환율(CVR)</div>
<div class="card-desc">실시간 행동 기반 AI 추천 메시지 발송</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">50 ms</div>
<div class="card-title">고객 프로필 실시간 업데이트</div>
<div class="card-desc">초당 50만 건 이벤트 스트리밍 처리</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">100%</div>
<div class="card-title">개인정보보호 규제 컴플라이언스</div>
<div class="card-desc">GDPR, PIPA 완벽 대응 동의 관리 탑재</div>
</div>
</div>
</div>

<!-- note: [성과] 전환율 340% 향상과 50ms 실시간 업데이트를 보장합니다. -->

---

<!-- 3. Closing -->
<div>
<div class="slide-header">
<span class="kicker">CONCLUSION & DEMO</span>
<h2>데이터 기반 성장의 가속화</h2>
<p class="lead">2주 완성 PoC를 통해 귀사의 마케팅 ROI를 직접 검증해 보세요.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #0F172A; margin-bottom: 2px;">01. 노코드 커넥터 200+ 제공</div>
<div class="card-desc">Salesforce, AWS, Snowflake, 카카오 알림톡 등 즉시 연동</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #2563EB;">
<div style="font-size: 0.92rem; font-weight: 800; color: #0F172A; margin-bottom: 2px;">02. 엔터프라이즈 전담 엔지니어 밀착 지원</div>
<div class="card-desc">데이터 파이프라인 설계부터 대시보드 구축까지 1:1 기술 지원</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #0F172A; margin-bottom: 2px;">03. 글로벌 1위 LTV 개선 솔루션</div>
<div class="card-desc">고객 이탈 예측 모델 내재화로 리텐션 35% 동반 상승</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">ENTERPRISE DEMO</div>
<div class="qa-title" style="color: #0F172A;">Q & A</div>
<div class="qa-desc">엔터프라이즈 솔루션 도입 문의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">PORTAL</div>
<div class="qa-meta-val-blue">nexus-cdp.com</div>
<div class="qa-meta-label">ENTERPRISE SALES</div>
<div class="qa-meta-val-white" style="color: #0F172A;">sales@nexus-cdp.com</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질문을 받겠습니다. -->
