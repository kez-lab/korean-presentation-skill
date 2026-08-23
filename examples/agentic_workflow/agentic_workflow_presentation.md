---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    --bg-dark: #07090E;
    --card-surface: rgba(18, 24, 38, 0.88);
    --border-glass: rgba(255, 255, 255, 0.08);
    --text-pure: #FFFFFF;
    --text-sub: #94A3B8;
    --text-lead: #CBD5E1;
    --accent-cyan: #00F0FF;
    --accent-purple: #A78BFA;
    --accent-blue: #38BDF8;
    --accent-green: #34D399;
    --accent-gold: #FACC15;
    --accent-red: #F87171;
  }

  section {
    width: 1280px;
    height: 720px;
    padding: 44px 58px;
    background: radial-gradient(circle at 50% 15%, #131A29 0%, var(--bg-dark) 100%);
    color: var(--text-lead);
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 span.hl-cyan { color: var(--accent-cyan) !important; }
  h1 {
    font-size: 2.22rem;
    font-weight: 900;
    line-height: 1.26;
    color: var(--text-pure);
    margin-top: 10px;
    margin-bottom: 8px;
    letter-spacing: -0.035em;
  }

  h2 {
    font-size: 1.62rem;
    font-weight: 800;
    line-height: 1.3;
    color: var(--text-pure);
    margin-top: 6px;
    margin-bottom: 4px;
    letter-spacing: -0.03em;
  }

  .slide-header {
    margin-bottom: 24px;
  }

  .slide-header-center {
    text-align: center;
    margin-bottom: 24px;
  }

  .kicker {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-cyan);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: rgba(0, 240, 255, 0.12);
    border: 1px solid rgba(0, 240, 255, 0.28);
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

  .glass-card {
    background: var(--card-surface);
    border: 1px solid var(--border-glass);
    border-radius: 12px;
    padding: 18px 20px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
  }

  .card-title {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-pure);
    margin-bottom: 6px;
  }

  .card-desc {
    font-size: 0.82rem;
    color: var(--text-lead);
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
  }
  .badge-cyan { background: rgba(0, 240, 255, 0.2); color: var(--accent-cyan); border: 1px solid rgba(0, 240, 255, 0.5); }
  .badge-purple { background: rgba(167, 139, 250, 0.2); color: var(--accent-purple); border: 1px solid rgba(167, 139, 250, 0.5); }
  .badge-blue { background: rgba(56, 189, 248, 0.2); color: var(--accent-blue); border: 1px solid rgba(56, 189, 248, 0.5); }
  .badge-green { background: rgba(52, 211, 153, 0.2); color: var(--accent-green); border: 1px solid rgba(52, 211, 153, 0.5); }
  .badge-yellow { background: rgba(250, 204, 21, 0.2); color: var(--accent-gold); border: 1px solid rgba(250, 204, 21, 0.5); }
  .badge-red { background: rgba(248, 113, 113, 0.2); color: var(--accent-red); border: 1px solid rgba(248, 113, 113, 0.5); }

  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

  .cover-meta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
    margin-top: 28px;
  }
  .cover-meta-chip {
    background: rgba(18, 24, 38, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 12px 16px;
  }
  .meta-chip-label { font-size: 0.68rem; font-weight: 800; color: var(--accent-cyan); letter-spacing: 0.06em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: var(--text-pure); }

  .split-box {
    display: flex;
    align-items: stretch;
    height: 480px;
    box-sizing: border-box;
  }
  .split-left {
    width: 260px;
    flex-shrink: 0;
    margin-right: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .split-title { font-size: 1.62rem; font-weight: 900; color: var(--text-pure); margin-top: 4px; letter-spacing: -0.02em; }
  .split-right {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
  }

  .closing-box {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 18px;
    height: 430px;
    box-sizing: border-box;
  }
  .closing-left {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
  }
  .qa-box {
    background: var(--card-surface);
    border: 1px solid var(--border-glass);
    border-radius: 12px;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: var(--accent-cyan); letter-spacing: 0.08em; }
  .qa-title { font-size: 2.2rem; font-weight: 900; color: var(--text-pure); margin-top: 2px; margin-bottom: 6px; }
  .qa-desc { font-size: 0.8rem; color: var(--text-sub); line-height: 1.45; }
  .qa-meta-border { border-top: 1px solid var(--border-glass); padding-top: 12px; margin-top: 12px; }
  .qa-meta-label { font-size: 0.68rem; font-weight: 800; color: var(--text-sub); margin-top: 6px; margin-bottom: 1px; }
  .qa-meta-val-blue { font-size: 0.85rem; font-weight: 800; color: var(--accent-cyan); word-break: break-all; }
  .qa-meta-val-white { font-size: 0.82rem; font-weight: 700; color: var(--text-pure); }

  .flow-row {
    display: grid;
    grid-template-columns: 1fr 24px 1fr 24px 1fr 24px 1fr;
    align-items: center;
    margin-bottom: 20px;
  }
  .flow-step {
    background: var(--card-surface);
    border: 1px solid var(--border-glass);
    border-radius: 10px;
    padding: 12px 14px;
    text-align: center;
  }
  .flow-arr { color: var(--accent-cyan); font-size: 1.1rem; text-align: center; font-weight: 900; }

  .stat-val { font-size: 2.7rem; font-weight: 900; line-height: 1.05; margin-bottom: 8px; }
  .highlight-yellow { color: var(--accent-gold); }
  .highlight-cyan { color: var(--accent-cyan); }
  .highlight-green { color: var(--accent-green); }

  .clean-points { list-style: none; padding-left: 0; margin: 0; }
  .clean-points li { margin-bottom: 6px; line-height: 1.5; color: var(--text-lead); }
  .clean-points li strong { color: var(--text-pure); }

  footer { display: none; }
---

<!-- 1. Hero Cover Slide (3-Chip Glassmorphism Meta UX) -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">AUTONOMOUS AI ARCHITECTURE</span>
<h1>
단일 LLM의 한계를 넘어서는<br>
<span class="hl-cyan">자율형 멀티에이전트 오케스트레이션</span>
</h1>
<p class="lead" style="font-size: 1.05rem; color: #94A3B8; margin-top: 10px;">
복잡한 엔지니어링 태스크를 자율 분할 정복하고 자체 검증 루프로 완결하는 차세대 AI 시스템
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">PRESENTER & TEAM</div>
<div class="meta-chip-val">AI Systems Lab • Agent Platform</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SESSION & DATE</div>
<div class="meta-chip-val">AI Engineering Summit • 2026.08</div>
</div>
<div class="cover-meta-chip" style="border-color: rgba(0, 240, 255, 0.35);">
<div class="meta-chip-label" style="color: #00F0FF;">REPOSITORY & DOCS</div>
<div class="meta-chip-val" style="color: #38BDF8;">github.com/company/agent-platform</div>
</div>
</div>
</div>

<!-- note: [오프닝 멘트] 안녕하십니까, 오늘 발표를 맡은 AI 시스템 랩 에이전트 플랫폼 팀입니다. 오늘은 단일 거대언어모델의 한계를 극복하고 실전 엔지니어링 문제를 완결하는 자율형 멀티에이전트 오케스트레이션 아키텍처를 소개해 드리겠습니다. -->

---

<!-- 2. Asymmetric Split Agenda -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">AGENDA</span>
<div class="split-title">CONTENTS</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
단일 에이전트 한계부터<br>
실전 분산 아키텍처까지 4단계
</p>
</div>

<div style="margin-top: 24px;">
<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
<div style="width: 8px; height: 8px; border-radius: 50%; background: #6366F1;"></div>
<div style="height: 2px; width: 60px; background: rgba(99, 102, 241, 0.5);"></div>
</div>
<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
<div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-cyan);"></div>
<div style="height: 2px; width: 100px; background: rgba(0, 240, 255, 0.6);"></div>
</div>
<div style="display: flex; align-items: center; gap: 10px;">
<div style="width: 8px; height: 8px; border-radius: 50%; background: #6366F1;"></div>
<div style="height: 2px; width: 45px; background: rgba(99, 102, 241, 0.5);"></div>
</div>
</div>
</div>

<div class="split-right">
<div class="glass-card">
<div class="circle-badge badge-cyan">01</div>
<div class="card-title">단일 에이전트의 병목</div>
<div class="card-desc">• 컨텍스트 윈도우 오염 및 환각 누적<br>• 도구 호출 충돌 및 무한 루프 위험</div>
</div>
<div class="glass-card">
<div class="circle-badge badge-purple">02</div>
<div class="card-title">오케스트레이션 패러다임</div>
<div class="card-desc">• 역할 기반 서브에이전트 그래프 분할<br>• 격리된 워크스페이스 상태 머신 설계</div>
</div>
<div class="glass-card">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">4단계 자율 실행 루프</div>
<div class="card-desc">• 4단계 파이프라인(Plan/Exec/Reflect/Synth)<br>• 비전 및 단위 테스트 기반 자율 보정</div>
</div>
<div class="glass-card">
<div class="circle-badge badge-green">04</div>
<div class="card-title">실전 도입 성과 & 가치</div>
<div class="card-desc">• 태스크 완수율 94.8% 달성<br>• 토큰 비용 62% 절감 및 속도 개선</div>
</div>
</div>
</div>

<!-- note: [목차 안내] 오늘 세션은 단일 에이전트의 한계 진단, 오케스트레이션 설계 원칙, 4단계 자율 실행 파이프라인, 그리고 실전 벤치마크 성과 순으로 진행됩니다. -->

---

<!-- 3. Problem Statement (3 Cards) -->
<div>
<div class="slide-header-center">
<span class="kicker kicker-red" style="color: var(--accent-red); background: rgba(248, 113, 113, 0.12); border-color: rgba(248, 113, 113, 0.28);">PROBLEM STATEMENT</span>
<h2>단일 프롬프트 에이전트가 겪는 3대 치명적 병목</h2>
<p class="lead">복잡한 엔지니어링 작업을 단일 세션에 주입할 때 필연적으로 발생하는 시스템 실패 요인</p>
</div>

<div class="grid-3">
<div class="glass-card" style="border-top: 3.5px solid var(--accent-red);">
<div class="circle-badge badge-red">01</div>
<div class="card-title">컨텍스트 오염 (Context Drift)</div>
<div class="card-desc">
대화 기록과 방대한 도구 출력이 누적되면서 초기 시스템 지침을 망각하고 엉뚱한 환각을 생성함.
</div>
</div>

<div class="glass-card" style="border-top: 3.5px solid var(--accent-gold);">
<div class="circle-badge badge-yellow">02</div>
<div class="card-title">도구 호출 충돌 (Tool Conflict)</div>
<div class="card-desc">
수십 개의 MCP 도구가 한 컨텍스트에 노출되어 파라미터 오추론과 무한 재시도 루프에 빠짐.
</div>
</div>

<div class="glass-card" style="border-top: 3.5px solid var(--accent-blue);">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">결과물 자율 검증 부재</div>
<div class="card-desc">
코드 작성 후 실행 검증이나 시각적 레이아웃 감사 없이 종료하여 치명적 런타임 에러를 방치함.
</div>
</div>
</div>
</div>

<!-- note: [문제점 설명] 단일 컨텍스트에 수십 개의 도구와 수만 줄의 로그를 쏟아붓는 기존 방식은 컨텍스트 오염과 무한 루프를 유발하여 복잡한 태스크를 완수하지 못합니다. -->

---

<!-- 4. Paradigm Shift Quote -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
<div>
<span class="kicker">PARADIGM SHIFT</span>
<h2 style="color: var(--text-sub); font-weight: 600; font-size: 1.25rem;">우리는 에이전트 아키텍처의 패러다임을 바꿔야 합니다</h2>
</div>

<div style="background: rgba(18, 24, 38, 0.75); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 32px 36px; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);">
<div style="font-size: 1.75rem; color: var(--accent-cyan); font-weight: 900; line-height: 1.42; margin-bottom: 12px;">
“ 단일 모델에게 모든 것을 시키는 것이 아니라,<br>
<span style="color: var(--accent-gold);">전문화된 서브에이전트의 협업 그래프</span>로<br>
문제를 분할 정복하고 검증하는 것입니다. ”
</div>
<div style="font-size: 0.92rem; color: #94A3B8;">
자율 오케스트레이션 플랫폼의 핵심 아키텍처 철학
</div>
</div>

<div style="display: flex; justify-content: center; gap: 32px; color: var(--text-lead); font-size: 0.9rem;">
<span>✓ <strong>독립 워크스페이스 격리</strong></span>
<span>✓ <strong>도구 권한의 점진적 공개</strong></span>
<span>✓ <strong>자율 비전 및 테스트 루프</strong></span>
</div>
</div>

<!-- note: [패러다임 전환] 하나의 거대 모델에 모든 도구를 몰아넣지 않고, 역할을 작게 쪼개어 서브에이전트 간의 명확한 상태 머신으로 협업시키는 것이 오케스트레이션의 핵심입니다. -->

---

<!-- 5. Core 3 Pillars -->
<div>
<div class="slide-header">
<span class="kicker">CORE ROLES</span>
<h2>오케스트레이션을 완성하는 3대 핵심 에이전트 역할</h2>
<p class="lead">계획 수립부터 실행, 비전 검증까지 각 단계가 독립된 책임과 도구를 갖습니다.</p>
</div>

<div class="grid-3">
<div class="glass-card" style="border-top: 3.5px solid var(--accent-purple);">
<div class="circle-badge badge-purple">01</div>
<div class="card-title">ROUTER & PLANNER</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>전체 요구사항 분해 및 실행 계획 수립</li>
<li>도메인별 최적 서브에이전트 동적 할당</li>
<li>컨텍스트 예산 분배 및 의존성 제어</li>
</ul>
</div>

<div class="glass-card" style="border-top: 3.5px solid var(--accent-blue);">
<div class="circle-badge badge-blue">02</div>
<div class="card-title">SPECIALIZED WORKER</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>격리된 워크스페이스 내에서 코드 작성</li>
<li>최소 권한의 도구(MCP)만 주입받아 실행</li>
<li>중간 결과물을 표준 포맷으로 상위 보고</li>
</ul>
</div>

<div class="glass-card" style="border-top: 3.5px solid var(--accent-green);">
<div class="circle-badge badge-green">03</div>
<div class="card-title">CRITIC & EVALUATOR</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>단위 테스트 및 빌드 무결성 자동 검증</li>
<li>시각적 렌더링 이미지 레이아웃 감사</li>
<li>결함 발견 시 즉시 자율 수정 피드백 발행</li>
</ul>
</div>
</div>
</div>

<!-- note: [3대 역할] 플래너는 큰 그림을 그리고 자원을 배분하며, 워커는 격리된 환경에서 안전하게 작업을 수행하고, 크리틱은 최종 산출물의 무결성을 엄격히 감사합니다. -->

---

<!-- 6. Pipeline Flow -->
<div>
<div class="slide-header">
<span class="kicker">EXECUTION PIPELINE</span>
<h2>4단계 자율 실행 파이프라인 및 피드백 루프</h2>
<p class="lead">태스크 수립부터 자체 검증(Self-Correction)까지 끊김 없는 자율 피드백을 완성합니다.</p>
</div>

<div class="flow-row">
<div class="flow-step">
<div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800;">STEP 1</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Plan & Goal</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step">
<div style="font-size: 0.75rem; color: var(--accent-purple); font-weight: 800;">STEP 2</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Task Dispatch</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="background: rgba(30, 27, 75, 0.85); border: 1.5px solid var(--accent-blue);">
<div style="font-size: 0.75rem; color: var(--accent-blue); font-weight: 800;">STEP 3</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Exec & Reflect</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step">
<div style="font-size: 0.75rem; color: var(--accent-green); font-weight: 800;">STEP 4</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Final Verify</div>
</div>
</div>

<div class="grid-2">
<div class="glass-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-cyan); margin-bottom: 4px;">✓ 점진적 도구 공개 (Progressive Disclosure)</div>
<div style="font-size: 0.78rem; color: var(--text-lead); line-height: 1.5;">필요한 순간에만 도구 스키마를 로드하여 토큰 소모를 70% 이상 절감하고 정확도를 극대화</div>
</div>
<div class="glass-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-green); margin-bottom: 4px;">✓ 시각 비전 및 자율 보정 (Self-Healing)</div>
<div style="font-size: 0.78rem; color: var(--text-lead); line-height: 1.5;">렌더링된 PNG 이미지와 CI 테스트 로그를 자체 분석하여 무인 환경에서도 100% 무결점 인도</div>
</div>
</div>
</div>

<!-- note: [파이프라인 흐름] 4단계 자율 흐름을 통해 에이전트는 사람이 개입하지 않아도 목표를 달성할 때까지 자체 검증과 수정을 반복합니다. -->

---

<!-- 7. Big Stats Benchmark -->
<div>
<div class="slide-header-center">
<span class="kicker">BENCHMARK RESULTS</span>
<h2>오케스트레이션 도입으로 증명된 3대 정량 지표</h2>
<p class="lead">엔터프라이즈 복합 엔지니어링 벤치마크에서 기존 단일 에이전트 대비 압도적 우위 입증</p>
</div>

<div class="grid-3">
<div class="glass-card" style="border-top: 3.5px solid var(--accent-cyan); text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-cyan" style="margin: 0 auto 6px auto;">01</div>
<div class="stat-val highlight-cyan">94.8%</div>
<div class="card-title">복합 태스크 완수율</div>
<div class="card-desc">기존 단일 에이전트(41.2%) 대비 2.3배 향상</div>
</div>

<div class="glass-card" style="border-top: 3.5px solid var(--accent-gold); text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-yellow" style="margin: 0 auto 6px auto;">02</div>
<div class="stat-val highlight-yellow">62%</div>
<div class="card-title">토큰 소모 비용 절감</div>
<div class="card-desc">컨텍스트 격리 및 점진적 도구 공개 효과</div>
</div>

<div class="glass-card" style="border-top: 3.5px solid var(--accent-green); text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-green" style="margin: 0 auto 6px auto;">03</div>
<div class="stat-val highlight-green">0 Error</div>
<div class="card-title">빌드 및 런타임 무결성</div>
<div class="card-desc">자율 비전 감사 및 단위 테스트 전수 통과</div>
</div>
</div>
</div>

<!-- note: [정량 성과] 벤치마크 결과 복합 태스크 완수율이 94.8%로 급증하였고, 토큰 비용은 62% 절감되었으며 최종 빌드 에러는 0건으로 수렴하였습니다. -->

---

<!-- 8. Executive Closing & Q&A Hub -->
<div>
<div class="slide-header" style="margin-bottom: 16px;">
<span class="kicker">SUMMARY & NEXT STEPS</span>
<h2>핵심 요약 및 질의응답 (Q&A)</h2>
<p class="lead" style="margin-bottom: 0;">자율형 멀티에이전트 아키텍처로 엔터프라이즈 AI 엔지니어링의 표준을 수립하세요.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-cyan);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 서브에이전트 그래프 분할 정복</div>
<div class="card-desc">컨텍스트 오염 차단 및 도메인별 독립 에이전트 협업</div>
</div>

<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-gold);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 점진적 공개로 토큰 62% 절감</div>
<div class="card-desc">필요한 도구 스키마만 동적 주입하여 속도와 경제성을 동시에 확보</div>
</div>

<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-green);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 자율 비전 & 테스트 기반 무결점 완결</div>
<div class="card-desc">렌더링 이미지와 CI 테스트 로그를 자체 검증하여 무인 환경 100% 신뢰성 보장</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">OPEN FOR DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">에이전트 오케스트레이션 도입 및 아키텍처 논의를 환영합니다.</div>
</div>

<div class="qa-meta-border">
<div class="qa-meta-label">GITHUB & DOCS HUB</div>
<div class="qa-meta-val-blue">github.com/company/agent-platform</div>
<div class="qa-meta-label">CONTACT</div>
<div class="qa-meta-val-white">agent-platform@company.com</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리 멘트] 3가지 핵심 요약과 오픈소스 저장소 링크를 안내해 드립니다. 에이전트 시스템 도입에 대해 궁금하신 점이 있으시면 편하게 질문해 주시기 바랍니다. 경청해 주셔서 감사합니다. -->
