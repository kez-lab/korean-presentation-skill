---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-navy: #080D1A;
    --card-surface: #0F172A;
    --card-border: rgba(255, 255, 255, 0.1);
    --accent-gold: #F59E0B;
    --accent-blue: #38BDF8;
    --accent-indigo: #818CF8;
    --accent-emerald: #10B981;
    --text-white: #FFFFFF;
    --text-slate: #94A3B8;
    --text-light: #E2E8F0;
  }

  section {
    font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;
    background: radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.07) 0%, transparent 45%),
                radial-gradient(circle at 15% 85%, rgba(245, 158, 11, 0.05) 0%, transparent 45%),
                var(--bg-navy);
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

  h1 { font-size: 2.38rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.62rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.96rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 24px 0; }

  .slide-header { margin-bottom: 24px; }
  .slide-header-center { text-align: center; margin-bottom: 24px; }

  .kicker {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 9999px;
    background: rgba(245, 158, 11, 0.15);
    color: var(--accent-gold);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    border: 1px solid rgba(245, 158, 11, 0.35);
    margin-bottom: 8px;
    width: fit-content;
    flex-shrink: 0;
  }

  .highlight-gold { color: var(--accent-gold) !important; }
  .highlight-blue { color: var(--accent-blue) !important; }
  .highlight-green { color: var(--accent-emerald) !important; }

  .biz-card {
    background: linear-gradient(180deg, #131C31 0%, #0F172A 100%);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 20px 22px;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.3);
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
  .badge-gold { background: rgba(245, 158, 11, 0.15); color: var(--accent-gold); border: 1px solid rgba(245, 158, 11, 0.4); }
  .badge-blue { background: rgba(56, 189, 248, 0.15); color: var(--accent-blue); border: 1px solid rgba(56, 189, 248, 0.4); }
  .badge-green { background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); border: 1px solid rgba(16, 185, 129, 0.4); }

  .border-top-gold { border-top: 3.5px solid var(--accent-gold) !important; }
  .border-top-blue { border-top: 3.5px solid var(--accent-blue) !important; }
  .border-top-green { border-top: 3.5px solid var(--accent-emerald) !important; }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }

  .split-box { display: flex; gap: 48px; align-items: center; justify-content: center; width: 100%; }
  .split-left { width: 260px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; }
  .split-title { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.08em; color: #FFF; margin: 6px 0 0 0; white-space: nowrap; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .cover-meta-grid { display: grid; grid-template-columns: 1.2fr 1fr 1.2fr; gap: 14px; width: 100%; margin-top: 20px; }
  .cover-meta-chip { background: linear-gradient(180deg, #131C31 0%, #0F172A 100%); border: 1px solid var(--card-border); border-radius: 12px; padding: 12px 18px; display: flex; flex-direction: column; justify-content: center; }
  .meta-chip-label { font-size: 0.7rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.05em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: #FFFFFF; }

  .stat-val { font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }

  .closing-box { display: flex; gap: 20px; align-items: stretch; width: 100%; }
  .closing-left { flex: 1.35; display: flex; flex-direction: column; gap: 10px; }
  .qa-box { background: linear-gradient(180deg, #131C31 0%, #0F172A 100%); border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 14px; padding: 18px 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.08em; margin-bottom: 2px; }
  .qa-title { font-size: 1.8rem; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin-bottom: 6px; }
  .qa-desc { font-size: 0.78rem; color: #94A3B8; line-height: 1.4; }
  .qa-meta-border { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px; margin-top: 10px; }
  .qa-meta-label { font-size: 0.68rem; color: #94A3B8; margin-bottom: 2px; }
  .qa-meta-val-gold { font-size: 0.84rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 6px; }
  .qa-meta-val-white { font-size: 0.84rem; color: #E2E8F0; }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.8rem; color: var(--text-light); line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }
  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Business Strategy Cover -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">2026 STRATEGIC INITIATIVE</span>
<h1>
글로벌 엔터프라이즈 B2B 시장 확대를 위한<br>
<span class="highlight-gold">AI 솔루션 사업화 및 성장 전략</span>
</h1>
<p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
수익성 극대화와 리텐션 강화를 위한 3대 핵심 로드맵 및 재무적 실행 계획
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">DIVISION & OWNER</div>
<div class="meta-chip-val">경영전략본부 / 전략기획실</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">REPORT DATE</div>
<div class="meta-chip-val">2026.08 • Q3 Executive Review</div>
</div>
<div class="cover-meta-chip" style="border-color: rgba(245, 158, 11, 0.35);">
<div class="meta-chip-label" style="color: var(--accent-gold);">CONFIDENTIALITY</div>
<div class="meta-chip-val" style="color: var(--accent-gold);">대외비 (Confidential)</div>
</div>
</div>
</div>

<!-- note: [전략 보고 오프닝] 2026년 글로벌 B2B 시장 확대를 위한 사업화 전략과 실행 계획을 보고드립니다. -->

---

<!-- 2. Business Agenda -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">STRATEGY AGENDA</span>
<div class="split-title">ROADMAP</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
시장 진입부터<br>
수익성 가속화까지 4단계
</p>
</div>

<div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-gold);"></div>
<div style="height: 2px; width: 60px; background: rgba(245, 158, 11, 0.5);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-blue);"></div>
<div style="height: 2px; width: 100px; background: rgba(56, 189, 248, 0.6);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-gold);"></div>
<div style="height: 2px; width: 45px; background: rgba(245, 158, 11, 0.5);"></div>
</div>
</div>
</div>

<div class="split-right">
<div class="biz-card">
<div class="circle-badge badge-gold">01</div>
<div class="card-title">시장 기회 및 목표 KPI</div>
<div class="card-desc">
• 글로벌 AI 솔루션 시장 동향<br>
• 2026 연간 반복 매출(ARR) 목표<br>
• 고객 유지율(NRR) 극대화 모델
</div>
</div>

<div class="biz-card">
<div class="circle-badge badge-blue">02</div>
<div class="card-title">GTM 및 파트너십 전략</div>
<div class="card-desc">
• 북미/일본 거점 엔터프라이즈 침투<br>
• 탑티어 클라우드 MSP 협력 체계<br>
• PoC 전환율 65% 달성 방안
</div>
</div>

<div class="biz-card">
<div class="circle-badge badge-green">03</div>
<div class="card-title">유닛 이코노믹스 최적화</div>
<div class="card-desc">
• 고객 획득 비용(CAC) 45% 절감<br>
• LTV/CAC 비율 4.5x 달성<br>
• 세일즈 사이클 90일 단축
</div>
</div>

<div class="biz-card">
<div class="circle-badge badge-gold">04</div>
<div class="card-title">재무 계획 및 실행 과제</div>
<div class="card-desc">
• 분기별 R&D 투자 배분 계획<br>
• 흑자 전환(BEP) 시점 가속화<br>
• 조직 확장 및 핵심 인재 영입
</div>
</div>
</div>
</div>

<!-- note: [목차 보고] 시장 기회 분석부터 재무적 실행 계획까지 4개 핵심 파트로 나누어 보고드립니다. -->

---

<!-- 3. Business KPI Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">KEY PERFORMANCE INDICATORS</span>
<h2>2026년 목표 재무 성과 및 핵심 마일스톤</h2>
<p class="lead" style="margin-bottom: 0;">ARR 3.2배 성장과 고객 획득 비용(CAC) 45% 절감을 통한 영업이익률 28.4% 달성</p>
</div>

<div class="grid-3">
<div class="biz-card border-top-gold" style="text-align: center;">
<div class="circle-badge badge-gold" style="margin: 0 auto 6px auto;">01</div>
<div class="stat-val highlight-gold">$12.5M</div>
<div style="font-size: 1.02rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">연간 반복 매출 (ARR)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">북미 및 일본 엔터프라이즈 고객사 120개사 확보 목표</div>
</div>

<div class="biz-card border-top-blue" style="text-align: center;">
<div class="circle-badge badge-blue" style="margin: 0 auto 6px auto;">02</div>
<div class="stat-val highlight-blue">142%</div>
<div style="font-size: 1.02rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">순매출 유지율 (NRR)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">계정 확장(Upsell) 및 크로스셀을 통한 LTV 극대화</div>
</div>

<div class="biz-card border-top-green" style="text-align: center;">
<div class="circle-badge badge-green" style="margin: 0 auto 6px auto;">03</div>
<div class="stat-val highlight-green">28.4%</div>
<div style="font-size: 1.02rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">목표 영업이익률</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">운영 자동화 파이프라인 도입을 통한 마진 구조 개선</div>
</div>
</div>
</div>

<!-- note: [핵심 지표] ARR 1,250만 달러, NRR 142%, 영업이익률 28.4% 달성을 핵심 목표로 설정하였습니다. -->

---

<!-- 4. GTM Funnel Strategy -->
<div>
<div class="slide-header">
<span class="kicker">GTM FUNNEL</span>
<h2>엔터프라이즈 시장 공략을 위한 3단계 세일즈 퍼널</h2>
<p class="lead" style="margin-bottom: 0;">리드 발굴부터 유료 전환, 계정 확장까지 체계화된 B2B 파이프라인을 가동합니다.</p>
</div>

<div class="grid-3">
<div class="biz-card border-top-gold">
<div class="circle-badge badge-gold">01</div>
<div style="font-size: 1.02rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">STAGE 1: Inbound Lead</div>
<ul class="clean-points">
<li>기술 백서 및 솔루션 데모 배포</li>
<li>빅테크 컨퍼런스 스폰서십 참여</li>
<li>월 450+ 검증된 리드(MQL) 확보</li>
</ul>
</div>

<div class="biz-card border-top-blue">
<div class="circle-badge badge-blue">02</div>
<div style="font-size: 1.02rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">STAGE 2: Fast-Track PoC</div>
<ul class="clean-points">
<li>2주 완성 맞춤형 프로토타입 검증</li>
<li>전담 솔루션 아키텍트 밀착 기술지원</li>
<li>PoC 완료 후 본 계약 전환율 65%</li>
</ul>
</div>

<div class="biz-card border-top-green">
<div class="circle-badge badge-green">03</div>
<div style="font-size: 1.02rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">STAGE 3: Land & Expand</div>
<ul class="clean-points">
<li>전사 부서 단위 라이선스 확장</li>
<li>연간 계약 전환 시 다년 할인 제공</li>
<li>평균 계약 규모(ACV) 2.4배 증대</li>
</ul>
</div>
</div>
</div>

<!-- note: [GTM 전략] 3단계 퍼널을 통해 PoC 전환율 65%와 계정 확장을 가속화합니다. -->

---

<!-- 5. Unit Economics & ROI -->
<div>
<div class="slide-header-center">
<span class="kicker">UNIT ECONOMICS</span>
<h2>수익성 지표 개선 및 투자 대비 성과 (ROI)</h2>
<p class="lead" style="margin-bottom: 0;">세일즈 자동화 및 고객 성공(CS) 프로세스 내재화로 고수익성 비즈니스 모델 완성</p>
</div>

<div class="grid-2">
<div class="biz-card" style="padding: 20px 22px;">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 6px;">✓ 고객 획득 및 회수 기간 (Payback)</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>고객 획득 비용(CAC): <strong>$14.5K ➔ $7.9K (45% 절감)</strong></li>
<li>CAC 투자금 회수 기간: <strong>14개월 ➔ 6.5개월 단축</strong></li>
<li>세일즈 리드 타임: <strong>평균 45일 내 본 계약 체결</strong></li>
</ul>
</div>

<div class="biz-card" style="padding: 20px 22px;">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-emerald); margin-bottom: 6px;">✓ 고객 생애 가치 (LTV / CAC Ratio)</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>고객 생애 가치(LTV): <strong>평균 $38,000 달성</strong></li>
<li>LTV / CAC 비율: <strong>4.8x (SaaS 벤치마크 3.0x 상회)</strong></li>
<li>연간 로고 이탈률(Churn): <strong>1.8% 미만 극저치 유지</strong></li>
</ul>
</div>
</div>
</div>

<!-- note: [유닛 이코노믹스] CAC 회수 기간 6.5개월과 LTV/CAC 4.8배 달성으로 높은 수익성을 확보했습니다. -->

---

<!-- 6. Executive Closing & Action Hub -->
<div>
<div class="slide-header" style="margin-bottom: 16px;">
<span class="kicker">EXECUTIVE SUMMARY</span>
<h2>핵심 결론 및 질의응답 (Q&A)</h2>
<p class="lead" style="margin-bottom: 0;">차별화된 제품 경쟁력과 실행력을 바탕으로 2026년 목표 ARR $12.5M을 달성하겠습니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="biz-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-gold);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 글로벌 엔터프라이즈 GTM 선점</div>
<div style="font-size: 0.76rem; color: #94A3B8; margin-top: 2px;">북미 및 일본 거점 120개 고객사 확보로 ARR 3.2배 견인</div>
</div>
<div class="biz-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 유닛 이코노믹스 고도화</div>
<div style="font-size: 0.76rem; color: #94A3B8; margin-top: 2px;">CAC 45% 절감 및 LTV/CAC 4.8x 달성으로 영업이익률 28.4% 확보</div>
</div>
<div class="biz-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-emerald);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 지속 가능한 NRR 142% 달성</div>
<div style="font-size: 0.76rem; color: #94A3B8; margin-top: 2px;">부서 단위 확장 및 크로스셀 파이프라인으로 장기 락인 효과 극대화</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">EXECUTIVE DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">사업화 전략 및 재무 실행 계획에 대한 질의응답을 진행합니다.</div>
</div>

<div class="qa-meta-border">
<div class="qa-meta-label">STRATEGY DIVISION</div>
<div class="qa-meta-val-gold">경영전략본부 / 전략기획실</div>
<div class="qa-meta-label">EXECUTIVE CONTACT</div>
<div class="qa-meta-val-white">strategy@enterprise.com</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리 보고] 3대 핵심 실행 과제를 요약하며 보고를 마칩니다. 질문해 주시면 답변드리겠습니다. 경청해 주셔서 감사합니다. -->
