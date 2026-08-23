---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-dark: #07090E;
    --card-surface: #111420;
    --card-border: rgba(251, 191, 36, 0.2);
    --accent-gold: #FBBF24;
    --accent-blue: #38BDF8;
    --accent-green: #34D399;
    --text-white: #FFFFFF;
    --text-slate: #94A3B8;
  }

  section {
    font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;
    background: radial-gradient(circle at 90% 10%, rgba(251, 191, 36, 0.08) 0%, transparent 45%),
                var(--bg-dark);
    color: var(--text-white);
    padding: 44px 58px;
    word-break: keep-all;
    letter-spacing: -0.025em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
  }

  h1 { font-size: 2.45rem !important; font-weight: 900 !important; color: #FFFFFF !important; line-height: 1.25 !important; letter-spacing: -0.035em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.68rem !important; font-weight: 900 !important; color: #FFFFFF !important; line-height: 1.3 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.98rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 24px 0; }

  .slide-header { margin-bottom: 24px; }
  .slide-header-center { text-align: center; margin-bottom: 24px; }

  .kicker {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 9999px;
    background: rgba(251, 191, 36, 0.18);
    color: var(--accent-gold);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: 1px solid rgba(251, 191, 36, 0.4);
    margin-bottom: 8px;
    width: fit-content;
    flex-shrink: 0;
  }

  .highlight-gold { color: var(--accent-gold) !important; }
  .highlight-blue { color: var(--accent-blue) !important; }
  .highlight-green { color: var(--accent-green) !important; }

  .pitch-card {
    background: linear-gradient(180deg, #181C2C 0%, #111420 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 20px 22px;
    box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .circle-badge {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    margin-bottom: 8px;
    flex-shrink: 0;
  }
  .badge-gold { background: rgba(251, 191, 36, 0.18); color: var(--accent-gold); border: 1px solid rgba(251, 191, 36, 0.4); }
  .badge-blue { background: rgba(56, 189, 248, 0.15); color: var(--accent-blue); border: 1px solid rgba(56, 189, 248, 0.4); }
  .badge-green { background: rgba(52, 211, 153, 0.15); color: var(--accent-green); border: 1px solid rgba(52, 211, 153, 0.4); }

  .border-top-gold { border-top: 3.5px solid var(--accent-gold) !important; }
  .border-top-blue { border-top: 3.5px solid var(--accent-blue) !important; }
  .border-top-green { border-top: 3.5px solid var(--accent-green) !important; }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; width: 100%; }

  .split-box { display: flex; gap: 48px; align-items: center; justify-content: center; width: 100%; }
  .split-left { width: 260px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; }
  .split-title { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.08em; color: #FFF; margin: 6px 0 0 0; white-space: nowrap; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .cover-meta-grid { display: grid; grid-template-columns: 1.2fr 1fr 1.2fr; gap: 14px; width: 100%; margin-top: 20px; }
  .cover-meta-chip { background: linear-gradient(180deg, #181C2C 0%, #111420 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 12px 18px; display: flex; flex-direction: column; justify-content: center; }
  .meta-chip-label { font-size: 0.7rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.05em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: #FFFFFF; }

  .stat-giant { font-size: 3.0rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }

  .closing-box { display: flex; gap: 20px; align-items: stretch; width: 100%; }
  .closing-left { flex: 1.35; display: flex; flex-direction: column; gap: 10px; }
  .qa-box { background: linear-gradient(180deg, #181C2C 0%, #111420 100%); border: 1.5px solid rgba(251, 191, 36, 0.4); border-radius: 14px; padding: 18px 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.08em; margin-bottom: 2px; }
  .qa-title { font-size: 1.8rem; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin-bottom: 6px; }
  .qa-desc { font-size: 0.78rem; color: #94A3B8; line-height: 1.4; }
  .qa-meta-border { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px; margin-top: 10px; }
  .qa-meta-label { font-size: 0.68rem; color: #94A3B8; margin-bottom: 2px; }
  .qa-meta-val-gold { font-size: 0.84rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 6px; }
  .qa-meta-val-white { font-size: 0.84rem; color: #E2E8F0; }

  .quote-container {
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(18, 24, 38, 0.9) 100%);
    border: 1.5px solid rgba(251, 191, 36, 0.35);
    border-radius: 16px;
    padding: 30px 40px;
    text-align: center;
    margin: 16px 0;
  }
  .quote-text { font-size: 1.85rem; color: #FFF !important; font-weight: 800; line-height: 1.35; margin-bottom: 10px; }
  .quote-highlight { color: #FBBF24 !important; }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.8rem; color: #E2E8F0; line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }
  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Pitch Cover Slide -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">SERIES A INVESTMENT PITCH</span>
<h1>
AI 에이전트 워크플로우를 자동화하는<br>
<span class="highlight-gold">엔터프라이즈 오토노머스 플랫폼</span>
</h1>
<p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
반복적인 코딩 및 디자인 작업을 10배 빠르게 혁신하는 개발 생산성 솔루션
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">FOUNDER & CEO</div>
<div class="meta-chip-val">홍길동 • Founder & CEO</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">INVESTMENT ROUND</div>
<div class="meta-chip-val">Series A ($5M Target)</div>
</div>
<div class="cover-meta-chip" style="border-color: rgba(251, 191, 36, 0.35);">
<div class="meta-chip-label" style="color: var(--accent-gold);">IR DECK VERSION</div>
<div class="meta-chip-val" style="color: var(--accent-gold);">Confidential IR Deck v2.4</div>
</div>
</div>
</div>

<!-- note: [피치 오프닝] 개발자의 업무 생산성을 10배 이상 끌어올리는 차세대 AI 에이전트 플랫폼을 소개합니다. -->

---

<!-- 2. Pitch Deck Outline -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">PITCH OUTLINE</span>
<div class="split-title">STORYLINE</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
시장 문제부터<br>
투자 제안까지 4챕터
</p>
</div>

<div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-gold);"></div>
<div style="height: 2px; width: 60px; background: rgba(251, 191, 36, 0.5);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-blue);"></div>
<div style="height: 2px; width: 100px; background: rgba(56, 189, 248, 0.6);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-gold);"></div>
<div style="height: 2px; width: 45px; background: rgba(251, 191, 36, 0.5);"></div>
</div>
</div>
</div>

<div class="split-right">
<div class="pitch-card">
<div class="circle-badge badge-gold">01</div>
<div class="card-title">시장의 거대한 문제 (Problem)</div>
<div class="card-desc">
• 엔지니어 인건비 상승 및 생산성 한계<br>
• 레거시 코드 유지보수 비용 폭증<br>
• 개발 파이프라인의 수동 병목
</div>
</div>

<div class="pitch-card">
<div class="circle-badge badge-blue">02</div>
<div class="card-title">독점적 솔루션 (Solution)</div>
<div class="card-desc">
• 자율형 AI 코딩 서브에이전트 군단<br>
• 정적 분석 기반 무결점 코드 검증<br>
• IDE 및 CLI 네이티브 완벽 통합
</div>
</div>

<div class="pitch-card">
<div class="circle-badge badge-green">03</div>
<div class="card-title">폭발적 트랙션 (Traction)</div>
<div class="card-desc">
• 글로벌 350+ B2B 유료 고객사<br>
• 월간 반복 매출(MRR) $450K 달성<br>
• 매월 24% MoM 고속 스케일업
</div>
</div>

<div class="pitch-card">
<div class="circle-badge badge-gold">04</div>
<div class="card-title">비즈니스 모델 & 투자 계획</div>
<div class="card-desc">
• 시트당 구독료 + 토큰 하이브리드 BM<br>
• Series A $5M 펀딩 라운드 오픈<br>
• 글로벌 마케팅 및 엔지니어링 확장
</div>
</div>
</div>
</div>

<!-- note: [아젠다 피치] 문제 정의부터 제품 솔루션, 폭발적 성장 트랙션, 투자 제안까지 설명하겠습니다. -->

---

<!-- 3. Pitch Traction & Market Size -->
<div>
<div class="slide-header-center">
<span class="kicker">TRACTION & MARKET SIZE</span>
<h2>런칭 6개월 만에 입증된 폭발적인 시장 수요</h2>
<p class="lead" style="margin-bottom: 0;">글로벌 350+ 개발팀 도입 및 월간 반복 매출(MRR) 24% 지속 성장</p>
</div>

<div class="grid-3">
<div class="pitch-card border-top-gold" style="text-align: center;">
<div class="circle-badge badge-gold" style="margin: 0 auto 6px auto;">01</div>
<div class="stat-giant highlight-gold">350+</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">도입 고객사 (B2B)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">글로벌 테크 유니콘 및 스타트업 중심 유기적 유입</div>
</div>

<div class="pitch-card border-top-blue" style="text-align: center;">
<div class="circle-badge badge-blue" style="margin: 0 auto 6px auto;">02</div>
<div class="stat-giant highlight-blue">$450K</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">현재 월간 매출 (MRR)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">매월 24%의 복합 성장률(MoM) 기반 고속 스케일업 달성</div>
</div>

<div class="pitch-card border-top-green" style="text-align: center;">
<div class="circle-badge badge-green" style="margin: 0 auto 6px auto;">03</div>
<div class="stat-giant highlight-green">$42B</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">글로벌 개발 도구 (TAM)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">2028년까지 연평균 26.5% 성장하는 초거대 시장 선점</div>
</div>
</div>
</div>

<!-- note: [트랙션 피치] 현재 350개 이상의 B2B 고객사와 월 45만 달러 MRR을 달성하며 폭발적으로 성장하고 있습니다. -->

---

<!-- 4. Product Paradigm Shift -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
<div>
<span class="kicker">PARADIGM SHIFT</span>
<h2 style="color: var(--text-slate); font-weight: 600; font-size: 1.25rem;">단순 AI 어시스턴트를 넘어선 완전 자율형 개발 파이프라인</h2>
</div>

<div class="quote-container">
<div class="quote-text">
“ 단순 코드 추천이 아닌,<br>
<span class="quote-highlight">기획 분석부터 배포까지 스스로 수행하는</span><br>
자율형 AI 소프트웨어 엔지니어 군단 ”
</div>
<div style="font-size: 0.92rem; color: #94A3B8;">
개발자가 비즈니스 핵심 로직에만 집중할 수 있는 오토노머스 환경 구축
</div>
</div>

<div style="display: flex; justify-content: center; gap: 32px; color: #E2E8F0; font-size: 0.9rem;">
<span>✓ <strong>코드 작성 속도 10x 가속</strong></span>
<span>✓ <strong>PR 리뷰 시간 80% 단축</strong></span>
<span>✓ <strong>회귀 버그 발생률 0% 수렴</strong></span>
</div>
</div>

<!-- note: [제품 비전] 단순 자동 완성을 넘어 기획부터 배포까지 스스로 수행하는 자율형 엔지니어링 군단입니다. -->

---

<!-- 5. Business Model & Growth Flywheel -->
<div>
<div class="slide-header-center">
<span class="kicker">BUSINESS MODEL</span>
<h2>하이브리드 과금 체계와 강력한 성장 플라이휠</h2>
<p class="lead" style="margin-bottom: 0;">개발자 1인당 월간 고정 구독료와 사용량 기반 토큰 모델의 결합으로 NRR 155% 달성</p>
</div>

<div class="grid-2">
<div class="pitch-card" style="padding: 22px 24px;">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 8px;">✓ B2B 엔터프라이즈 구독 (SaaS)</div>
<div style="font-size: 0.82rem; color: #E2E8F0; line-height: 1.6;">
• 시트당 구독료: <strong>$49/월 (연간 계약 기준)</strong><br>
• 온프레미스 보안 격리 에디션: <strong>계정당 $120K/년</strong><br>
• 계약 유지율(Gross Retention): <strong>98.5%</strong>
</div>
</div>

<div class="pitch-card" style="padding: 22px 24px;">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-green); margin-bottom: 8px;">✓ 사용량 기반 토큰 과금 (Usage-Based)</div>
<div style="font-size: 0.82rem; color: #E2E8F0; line-height: 1.6;">
• 고난도 리팩토링 및 CI 자동 빌드 토큰 종량제<br>
• 엔터프라이즈 월평균 추가 과금: <strong>기본료의 1.8배</strong><br>
• 순매출 유지율(NRR): <strong>155% (최상위 SaaS 지표)</strong>
</div>
</div>
</div>
</div>

<!-- note: [비즈니스 모델] 시트당 구독과 토큰 종량제의 결합으로 155% NRR을 기록하고 있습니다. -->

---

<!-- 6. Pitch Closing & Investment Ask Hub -->
<div>
<div class="slide-header" style="margin-bottom: 16px;">
<span class="kicker">INVESTMENT ASK</span>
<h2>투자 제안 및 질의응답 (Q&A)</h2>
<p class="lead" style="margin-bottom: 0;">Series A $5M 라운드를 통해 글로벌 엔지니어링 시장의 지배적 리더로 도약합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="pitch-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-gold);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. Series A $5M 펀딩 목표</div>
<div style="font-size: 0.76rem; color: #94A3B8; margin-top: 2px;">R&D AI 연구진 20명 확보 및 북미 세일즈 거점 설립</div>
</div>
<div class="pitch-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 2027년 목표 ARR $20M 달성</div>
<div style="font-size: 0.76rem; color: #94A3B8; margin-top: 2px;">포춘 500 기업 15% 침투 및 글로벌 개발자 100만 명 확보</div>
</div>
<div class="pitch-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-green);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 독보적인 기술 해자(Moat) 구축</div>
<div style="font-size: 0.76rem; color: #94A3B8; margin-top: 2px;">자체 멀티에이전트 오케스트레이션 특허 8건 출원 완료</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">INVESTOR RELATIONS</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">투자 라운드 및 비즈니스 실적에 관한 논의를 환영합니다.</div>
</div>

<div class="qa-meta-border">
<div class="qa-meta-label">INVESTOR DATA ROOM</div>
<div class="qa-meta-val-gold">ir.autonomous-agent.io</div>
<div class="qa-meta-label">FOUNDER DIRECT CONTACT</div>
<div class="qa-meta-val-white">founder@autonomous-agent.io</div>
</div>
</div>
</div>
</div>

<!-- note: [피치 마무리] 500만 달러 Series A 투자를 통해 글로벌 1위 플랫폼으로 도약하겠습니다. 투자자 여러분의 질문을 환영합니다. 감사합니다. -->
