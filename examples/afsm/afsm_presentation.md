---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-dark: #0A0E17;
    --card-dark: #121826;
    --card-glass: rgba(18, 24, 38, 0.95);
    --card-border: rgba(255, 255, 255, 0.09);
    --accent-blue: #38BDF8;
    --accent-cyan: #00F0FF;
    --accent-yellow: #FACC15;
    --accent-purple: #A78BFA;
    --accent-green: #34D399;
    --accent-red: #F87171;
    --text-white: #FFFFFF;
    --text-slate: #94A3B8;
    --text-light: #E2E8F0;
  }

  section {
    font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;
    background: radial-gradient(circle at 90% 10%, rgba(56, 189, 248, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 10% 90%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
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

  /* Typography */
  h1 { font-size: 2.42rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.62rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.96rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 24px 0; }

  /* Header Container */
  .slide-header { margin-bottom: 24px; }
  .slide-header-center { text-align: center; margin-bottom: 24px; }

  /* Kicker Badges */
  .kicker {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 9999px;
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent-blue);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    border: 1px solid rgba(56, 189, 248, 0.35);
    margin-bottom: 8px;
    width: fit-content;
    flex-shrink: 0;
  }
  .kicker-red { background: rgba(248, 113, 113, 0.15); color: var(--accent-red); border-color: rgba(248, 113, 113, 0.35); }
  .kicker-yellow { background: rgba(250, 204, 21, 0.15); color: var(--accent-yellow); border-color: rgba(250, 204, 21, 0.35); }

  .highlight-cyan { color: var(--accent-cyan) !important; }
  .highlight-blue { color: var(--accent-blue) !important; }
  .highlight-yellow { color: var(--accent-yellow) !important; }
  .highlight-purple { color: var(--accent-purple) !important; }
  .highlight-green { color: var(--accent-green) !important; }

  /* Unified Glassmorphism Card System */
  .glass-card {
    background: linear-gradient(180deg, rgba(26, 35, 54, 0.7) 0%, rgba(18, 24, 38, 0.95) 100%);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 14px;
    padding: 20px 22px;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .card-title { font-size: 0.98rem; font-weight: 800; color: #FFFFFF; margin-bottom: 6px; letter-spacing: -0.02em; }
  .card-desc { font-size: 0.78rem; color: #94A3B8; line-height: 1.55; }

  /* 24px Micro Neon Badges */
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
  .badge-cyan { background: rgba(0, 240, 255, 0.15); color: var(--accent-cyan); border: 1px solid rgba(0, 240, 255, 0.4); }
  .badge-purple { background: rgba(167, 139, 250, 0.15); color: var(--accent-purple); border: 1px solid rgba(167, 139, 250, 0.4); }
  .badge-blue { background: rgba(56, 189, 248, 0.15); color: var(--accent-blue); border: 1px solid rgba(56, 189, 248, 0.4); }
  .badge-green { background: rgba(52, 211, 153, 0.15); color: var(--accent-green); border: 1px solid rgba(52, 211, 153, 0.4); }
  .badge-red { background: rgba(248, 113, 113, 0.15); color: var(--accent-red); border: 1px solid rgba(248, 113, 113, 0.4); }
  .badge-yellow { background: rgba(250, 204, 21, 0.15); color: var(--accent-yellow); border: 1px solid rgba(250, 204, 21, 0.4); }

  /* Top Border Accents */
  .border-top-red { border-top: 3.5px solid var(--accent-red) !important; }
  .border-top-yellow { border-top: 3.5px solid var(--accent-yellow) !important; }
  .border-top-blue { border-top: 3.5px solid var(--accent-blue) !important; }
  .border-top-purple { border-top: 3.5px solid var(--accent-purple) !important; }
  .border-top-green { border-top: 3.5px solid var(--accent-green) !important; }

  /* Grid Layouts */
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }

  /* Slide 2: Asymmetric Split */
  .split-box { display: flex; gap: 48px; align-items: center; justify-content: center; width: 100%; }
  .split-left { width: 260px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; }
  .split-title { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.08em; color: #FFF; margin: 6px 0 0 0; white-space: nowrap; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  /* Cover Meta Grid (Hero Slide) */
  .cover-meta-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.2fr;
    gap: 14px;
    width: 100%;
    margin-top: 20px;
  }
  .cover-meta-chip {
    background: linear-gradient(180deg, rgba(26, 35, 54, 0.75) 0%, rgba(18, 24, 38, 0.95) 100%);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    padding: 12px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .meta-chip-label { font-size: 0.7rem; font-weight: 800; color: var(--accent-blue); letter-spacing: 0.05em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: #FFFFFF; }

      /* Closing Slide Specifics */
  .qa-box { background: linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 14px; padding: 18px 20px; display: flex; flex-direction: column; justify-content: space-between; }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: #00F0FF; letter-spacing: 0.08em; margin-bottom: 2px; }
  .qa-title { font-size: 1.8rem; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin-bottom: 6px; }
  .qa-desc { font-size: 0.78rem; color: #94A3B8; line-height: 1.4; }
  .qa-meta-border { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px; margin-top: 10px; }
  .qa-meta-label { font-size: 0.68rem; color: #94A3B8; margin-bottom: 2px; }
  .qa-meta-val-blue { font-size: 0.84rem; font-weight: 700; color: #38BDF8; margin-bottom: 6px; }
  .qa-meta-val-white { font-size: 0.84rem; color: #E2E8F0; }

  /* Closing Slide Classes */
  .closing-box { display: flex; gap: 20px; align-items: stretch; width: 100%; }
  .closing-left { flex: 1.35; display: flex; flex-direction: column; gap: 10px; }
  .closing-right { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }

  .closing-split {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 20px;
    width: 100%;
    align-items: stretch;
  }
  .closing-card {
    background: linear-gradient(180deg, rgba(26, 35, 54, 0.7) 0%, rgba(18, 24, 38, 0.95) 100%);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 14px;
    padding: 18px 20px;
  }

  /* Flow Steps */
  .flow-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
  .flow-step { background: linear-gradient(180deg, rgba(26, 35, 54, 0.7) 0%, rgba(18, 24, 38, 0.95) 100%); border: 1px solid rgba(255, 255, 255, 0.09); border-radius: 12px; padding: 16px 12px; text-align: center; flex: 1; }
  .flow-arr { color: var(--accent-blue); font-size: 1.3rem; font-weight: 800; }

  /* Big Stat Values */
  .stat-val { font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }
  .stat-yellow { color: var(--accent-yellow) !important; }
  .stat-cyan { color: var(--accent-cyan) !important; }
  .stat-purple { color: var(--accent-purple) !important; }

  /* Quote Container */
  .quote-container {
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(18, 24, 38, 0.9) 100%);
    border: 1.5px solid rgba(56, 189, 248, 0.28);
    border-radius: 16px;
    padding: 34px 44px;
    text-align: center;
    margin: 20px 0;
    box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.35);
  }
  .quote-text { font-size: 1.95rem; color: #38BDF8 !important; font-weight: 800; line-height: 1.38; margin-bottom: 14px; }
  .quote-highlight { color: #FACC15 !important; }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.8rem; color: var(--text-light); line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }

  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Hero Cover Slide (Premium 3-Chip Meta UX) -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">ANDROID ARCHITECTURE SERIES</span>
<h1>
ViewModel에 흩어진 화면 흐름을<br>
<span class="highlight-blue">상태 머신(FSM)으로 묶는 Afsm</span>
</h1>
<p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
Boolean 지옥을 넘어 순수 Kotlin으로 구축하는 예측 가능하고 안전한 화면 아키텍처
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">PRESENTER & TEAM</div>
<div class="meta-chip-val">Kez Lab • Android Architecture Team</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SESSION & DATE</div>
<div class="meta-chip-val">Tech Deep Dive • 2026.08</div>
</div>
<div class="cover-meta-chip" style="border-color: rgba(56, 189, 248, 0.3);">
<div class="meta-chip-label" style="color: var(--accent-cyan);">OPEN SOURCE HUB</div>
<div class="meta-chip-val" style="color: var(--accent-blue);">github.com/kez-lab/afsm</div>
</div>
</div>
</div>

<!-- note: [오프닝 멘트] 안드로이드 개발자라면 누구나 한 번쯤 겪는 Boolean 상태 폭발 문제를 순수 Kotlin FSM으로 해결하는 Afsm 라이브러리를 소개합니다. -->

---

<!-- 2. Contents Slide (Asymmetric Center Balance Split) -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">AGENDA</span>
<div class="split-title">CONTENTS</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
ViewModel 한계 극복부터<br>
Afsm 실전 적용까지의 4단계
</p>
</div>

<div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: #6366F1;"></div>
<div style="height: 2px; width: 60px; background: rgba(99, 102, 241, 0.5);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-blue);"></div>
<div style="height: 2px; width: 100px; background: rgba(56, 189, 248, 0.6);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: #6366F1;"></div>
<div style="height: 2px; width: 45px; background: rgba(99, 102, 241, 0.5);"></div>
</div>
</div>
</div>

<div class="split-right">
<div class="glass-card">
<div class="circle-badge badge-cyan">01</div>
<div class="card-title">Boolean 지옥과 한계</div>
<div class="card-desc">
• 기능 추가에 따른 상태 조합 폭발<br>
• 코루틴 비동기 분기 파편화<br>
• 회귀 버그 유발 위험
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-purple">02</div>
<div class="card-title">Afsm 3대 핵심 모델</div>
<div class="card-desc">
• State (Phase + Data 결합)<br>
• Event (방금 발생한 사실)<br>
• Command (Host 요청 작업)
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">협업 아키텍처</div>
<div class="card-desc">
• 순수 머신과 ViewModel의 분업<br>
• 단방향 데이터 흐름(UDF) 보장<br>
• 부작용 없는 전이 함수 설계
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-green">04</div>
<div class="card-title">테스트 & 도입 가이드</div>
<div class="card-desc">
• Mock 없는 0ms 순수 단위 테스트<br>
• Mermaid 다이어그램 자동 동기화<br>
• 상태 머신 적용 판단 기준
</div>
</div>
</div>
</div>

<!-- note: [목차 안내] 1부 문제점부터 4부 도입 기준까지 4개 핵심 파트로 나누어 설명합니다. -->

---

<!-- 3. Problem Statement (Unified Glassmorphism 3 Cards) -->
<div>
<div class="slide-header-center">
<span class="kicker kicker-red">PROBLEM STATEMENT</span>
<h2>Boolean이 하나씩 추가될수록 화면의 흐름은 사라집니다</h2>
<p class="lead" style="margin-bottom: 0;">개별 변수는 맞아 보이지만, 한 화면에 모아 놓으면 절대 공존할 수 없는 무효 상태가 발생합니다.</p>
</div>

<div class="grid-3">
<div class="glass-card border-top-red">
<div class="circle-badge badge-red">01</div>
<div class="card-title">상태 조합 폭발</div>
<div class="card-desc">
<strong style="color: #FFF;">isSaving && isSaved</strong> 같은 무효 상태가 동시에 참이 됨.<br>
<span style="font-size: 0.76rem; color: var(--text-slate); margin-top: 4px; display: inline-block;">변수 N개 시 2^N개 경우의 수를 개발자가 머리로 외워야 함</span>
</div>
</div>

<div class="glass-card border-top-yellow">
<div class="circle-badge badge-yellow">02</div>
<div class="card-title">비동기 분기 파편화</div>
<div class="card-desc">
중복 클릭 방지, 재시도, 늦게 도착한 응답 처리가 여러 함수로 분산.<br>
<span style="font-size: 0.76rem; color: var(--text-slate); margin-top: 4px; display: inline-block;">코드 한 줄씩은 맞는데 전체 흐름 파악 곤란</span>
</div>
</div>

<div class="glass-card border-top-blue">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">높은 테스트 비용</div>
<div class="card-desc">
단순 비즈니스 분기 하나 검증하려 해도 Repository Mock 필수.<br>
<span style="font-size: 0.76rem; color: var(--text-slate); margin-top: 4px; display: inline-block;">TestDispatcher 및 코루틴 타이밍 의존</span>
</div>
</div>
</div>
</div>

<!-- note: [문제점 설명] Boolean 중심의 ViewModel이 겪는 3대 구조적 한계입니다. -->

---

<!-- 4. Key Paradigm Shift (Center Focus Quote with Dual Highlights) -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
<div>
<span class="kicker">PARADIGM SHIFT</span>
<h2 style="color: var(--text-slate); font-weight: 600; font-size: 1.25rem;">우리는 질문을 근본적으로 바꿔야 합니다</h2>
</div>

<div class="quote-container">
<div class="quote-text">
“ 상태 값을 어떻게 잘 바꿀까? 가 아니라,<br>
<span class="quote-highlight">현재 단계에서 이 이벤트를 받아도 되는가?</span> 를<br>
코드에 그대로 드러내는 것입니다. ”
</div>
<div style="font-size: 0.92rem; color: #94A3B8;">
Afsm (Android Finite State Machine)의 핵심 설계 철학
</div>
</div>

<div style="display: flex; justify-content: center; gap: 32px; color: var(--text-light); font-size: 0.9rem;">
<span>✓ <strong>상호 배타적 Phase 정의</strong></span>
<span>✓ <strong>허용된 Event만 처리</strong></span>
<span>✓ <strong>외부 작업은 Command로 격리</strong></span>
</div>
</div>

<!-- note: [패러다임 전환] 상태 값 변경 중심에서 이벤트 수용 가능 여부 중심으로의 철학 전환을 강조합니다. -->

---

<!-- 5. Core Concepts 3 Pillars (Unified Glassmorphism Pillars) -->
<div>
<div class="slide-header">
<span class="kicker">CORE ARCHITECTURE</span>
<h2>Afsm의 3대 공개 타입: State, Event, Command</h2>
<p class="lead" style="margin-bottom: 0;">화면의 단계, 일어난 사실, 앞으로 할 외부 작업을 엄격히 분리합니다.</p>
</div>

<div class="grid-3">
<div class="glass-card border-top-purple">
<div class="circle-badge badge-purple">01</div>
<div class="card-title" style="color: var(--accent-purple);">STATE (Phase + Data)</div>
<ul class="clean-points">
<li><strong>Phase</strong>: Editing, Saving, Saved 단일 단계</li>
<li><strong>Data</strong>: Title, Error 등 비즈니스 데이터</li>
<li>상호 배타적 단계로 무효 조합 원천 차단</li>
</ul>
</div>

<div class="glass-card border-top-blue">
<div class="circle-badge badge-blue">02</div>
<div class="card-title" style="color: var(--accent-blue);">EVENT (방금 일어난 일)</div>
<ul class="clean-points">
<li>사용자 액션 (SaveClicked, TitleChanged)</li>
<li>비동기 결과 (SaveCompleted, Failed)</li>
<li>머신은 순수 동기 함수로 다음 전이 결정</li>
</ul>
</div>

<div class="glass-card border-top-green">
<div class="circle-badge badge-green">03</div>
<div class="card-title" style="color: var(--accent-green);">COMMAND (요청할 외부 작업)</div>
<ul class="clean-points">
<li>Repository 호출 등 부작용 작업 명세서</li>
<li>머신 내부에서 suspend 호출 금지</li>
<li>승인된 전이에서만 Host에 작업 요청</li>
</ul>
</div>
</div>
</div>

<!-- note: [핵심 개념] 3개 타입의 역할을 컬러 코딩으로 명확히 구분합니다. -->

---

<!-- 6. Architecture & Data Flow Diagram (Unified Glassmorphism Flow) -->
<div>
<div class="slide-header">
<span class="kicker">UDF FLOW</span>
<h2>순수 머신과 ViewModel의 단방향 데이터 흐름</h2>
<p class="lead" style="margin-bottom: 0;">Afsm은 ViewModel을 대체하지 않고, 비즈니스 전이 규칙만 순수 Kotlin으로 가져옵니다.</p>
</div>

<!-- Horizontal Flow -->
<div class="flow-row">
<div class="flow-step">
<div style="font-size: 0.75rem; color: var(--accent-blue); font-weight: 800;">COMPOSE UI</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">사용자 입력</div>
<div style="font-size: 0.72rem; color: var(--text-slate); margin-top: 2px;">save()</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="border-color: rgba(99, 102, 241, 0.4);">
<div style="font-size: 0.75rem; color: #818CF8; font-weight: 800;">VIEWMODEL</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Event 발송</div>
<div style="font-size: 0.72rem; color: var(--text-slate); margin-top: 2px;">host.send()</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="background: rgba(30, 27, 75, 0.85); border: 1.5px solid #6366F1;">
<div style="font-size: 0.75rem; color: #A5B4FC; font-weight: 800;">KOTLIN MACHINE</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">동기 전이 & Command</div>
<div style="font-size: 0.72rem; color: #C7D2FE; margin-top: 2px;">transitionTo</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="border-color: rgba(52, 211, 153, 0.4);">
<div style="font-size: 0.75rem; color: #34D399; font-weight: 800;">REPOSITORY</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">비동기 작업 실행</div>
<div style="font-size: 0.72rem; color: var(--text-slate); margin-top: 2px;">결과 Event 반환</div>
</div>
</div>

<div class="grid-2">
<div class="glass-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 4px;">✓ 순수 Kotlin Machine의 책임</div>
<div style="font-size: 0.78rem; color: var(--text-light); line-height: 1.5;">현재 단계에서 허용되는 이벤트인지 검증하고 새 State와 Command를 결정 (0ms 테스트 가능)</div>
</div>
<div class="glass-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: #34D399; margin-bottom: 4px;">✓ ViewModel (Host)의 책임</div>
<div style="font-size: 0.78rem; color: var(--text-light); line-height: 1.5;">Android 생명주기 소유, StateFlow 노출, Command 수신 후 실제 Repository 호출</div>
</div>
</div>
</div>

<!-- note: [아키텍처 흐름] UDF 파이프라인과 순수 머신/ViewModel의 명확한 역할 분담을 보여줍니다. -->

---

<!-- 7. Engineering Values (Unified Glassmorphism 3 Big Stats) -->
<div>
<div class="slide-header-center">
<span class="kicker kicker-yellow">KEY ADVANTAGES</span>
<h2>Afsm 도입으로 얻는 3대 엔지니어링 가치</h2>
<p class="lead" style="margin-bottom: 0;">가장 빠르고 가벼운 단위 테스트부터 CI 레벨의 다이어그램 검증까지 지원합니다.</p>
</div>

<div class="grid-3">
<div class="glass-card border-top-yellow" style="text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-yellow" style="margin: 0 auto 6px auto;">01</div>
<div class="stat-val stat-yellow">0 ms</div>
<div class="card-title">Mock-Free 단위 테스트</div>
<div class="card-desc">Repository Mock이나 TestDispatcher 없이 원하는 State와 Event를 넣고 즉시 전이 검증</div>
</div>

<div class="glass-card border-top-blue" style="text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-blue" style="margin: 0 auto 6px auto;">02</div>
<div class="stat-val stat-cyan">100%</div>
<div class="card-title">코드 기반 Mermaid 생성</div>
<div class="card-desc">실행되는 머신 코드에서 상태 다이어그램이 자동 생성되며, CI에서 코드-설계 일치 검증</div>
</div>

<div class="glass-card border-top-purple" style="text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-purple" style="margin: 0 auto 6px auto;">03</div>
<div class="stat-val stat-purple">0 Error</div>
<div class="card-title">부작용(Side-Effect) 격리</div>
<div class="card-desc">모든 외부 작업을 Command로 격리하여 중복 실행이나 상태 오염을 원천 차단</div>
</div>
</div>
</div>

<!-- note: [엔지니어링 가치] 0ms 테스트, 100% 다이어그램 일치, 0 Error 격리의 가치를 설명합니다. -->

---

<!-- 8. Executive Closing & Q&A Hub Slide (Re-engineered UX) -->
<div>
<div class="slide-header" style="margin-bottom: 16px;">
<span class="kicker">SUMMARY & NEXT STEPS</span>
<h2>핵심 요약 및 질의응답 (Q&A)</h2>
<p class="lead" style="margin-bottom: 0;">복잡한 화면 흐름을 상태 머신으로 표준화하여 견고한 안드로이드 앱을 구축하세요.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 상호 배타적 Phase 정의</div>
<div class="card-desc">유효하지 않은 Boolean 상태 조합을 컴파일 타임에 원천 차단</div>
</div>
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-yellow);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 부작용(Side-Effect) Command 격리</div>
<div class="card-desc">전이 판단과 외부 작업을 분리하여 Mock 없는 0ms 단위 테스트 달성</div>
</div>
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-purple);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. Mermaid 다이어그램 자동 동기화</div>
<div class="card-desc">코드 기반 상태 다이어그램으로 설계와 구현의 100% 일치 자동 검증</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">OPEN FOR DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">궁금하신 점이나 아키텍처 도입 논의를 환영합니다.</div>
</div>

<div class="qa-meta-border">
<div class="qa-meta-label">GITHUB & DOCS HUB</div>
<div class="qa-meta-val-blue">github.com/kez-lab/afsm</div>
<div class="qa-meta-label">CONTACT</div>
<div class="qa-meta-val-white">kejprogramer0909@gmail.com</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리 멘트] 3가지 핵심 요약과 공식 GitHub 저장소 링크를 안내하며 발표를 마무리합니다. 질문이 있으시면 편하게 말씀해 주세요. 경청해 주셔서 감사합니다. -->
