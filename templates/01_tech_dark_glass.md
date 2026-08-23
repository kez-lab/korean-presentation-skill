---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-dark: #0A0E17;
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

  h1 { font-size: 2.38rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.62rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.96rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 24px 0; }

  .slide-header { margin-bottom: 24px; }
  .slide-header-center { text-align: center; margin-bottom: 24px; }

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

  .border-top-cyan { border-top: 3.5px solid var(--accent-cyan) !important; }
  .border-top-purple { border-top: 3.5px solid var(--accent-purple) !important; }
  .border-top-blue { border-top: 3.5px solid var(--accent-blue) !important; }
  .border-top-green { border-top: 3.5px solid var(--accent-green) !important; }
  .border-top-red { border-top: 3.5px solid var(--accent-red) !important; }
  .border-top-yellow { border-top: 3.5px solid var(--accent-yellow) !important; }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }
  
  .split-box { display: flex; gap: 48px; align-items: center; justify-content: center; width: 100%; }
  .split-left { width: 260px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; }
  .split-title { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.08em; color: #FFF; margin: 6px 0 0 0; white-space: nowrap; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .cover-meta-grid { display: grid; grid-template-columns: 1.2fr 1fr 1.2fr; gap: 14px; width: 100%; margin-top: 20px; }
  .cover-meta-chip { background: linear-gradient(180deg, rgba(26, 35, 54, 0.75) 0%, rgba(18, 24, 38, 0.95) 100%); border: 1px solid rgba(255, 255, 255, 0.09); border-radius: 12px; padding: 12px 18px; display: flex; flex-direction: column; justify-content: center; }
  .meta-chip-label { font-size: 0.7rem; font-weight: 800; color: var(--accent-blue); letter-spacing: 0.05em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: #FFFFFF; }

  .flow-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
  .flow-step { background: linear-gradient(180deg, rgba(26, 35, 54, 0.7) 0%, rgba(18, 24, 38, 0.95) 100%); border: 1px solid rgba(255, 255, 255, 0.09); border-radius: 12px; padding: 16px 12px; text-align: center; flex: 1; }
  .flow-arr { color: var(--accent-blue); font-size: 1.3rem; font-weight: 800; }

  .stat-val { font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }

  .closing-box { display: flex; gap: 20px; align-items: stretch; width: 100%; }
  .closing-left { flex: 1.35; display: flex; flex-direction: column; gap: 10px; }
  .qa-box { background: linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 14px; padding: 18px 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: var(--accent-cyan); letter-spacing: 0.08em; margin-bottom: 2px; }
  .qa-title { font-size: 1.8rem; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin-bottom: 6px; }
  .qa-desc { font-size: 0.78rem; color: #94A3B8; line-height: 1.4; }
  .qa-meta-border { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px; margin-top: 10px; }
  .qa-meta-label { font-size: 0.68rem; color: #94A3B8; margin-bottom: 2px; }
  .qa-meta-val-blue { font-size: 0.84rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 6px; }
  .qa-meta-val-white { font-size: 0.84rem; color: #E2E8F0; }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.8rem; color: var(--text-light); line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }
  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Tech Hero Cover -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">ENGINEERING TECH SESSION</span>
<h1>
차세대 분산 시스템을 위한<br>
<span class="highlight-blue">고성능 이벤트 드라이븐 아키텍처</span>
</h1>
<p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
마이크로서비스 환경에서 데이터 일관성과 처리량을 동시에 확보하는 설계 패턴
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">PRESENTER & TEAM</div>
<div class="meta-chip-val">Backend Platform Team</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SESSION & DATE</div>
<div class="meta-chip-val">Tech Architecture • 2026.08</div>
</div>
<div class="cover-meta-chip" style="border-color: rgba(56, 189, 248, 0.3);">
<div class="meta-chip-label" style="color: var(--accent-cyan);">REPOSITORY & DOCS</div>
<div class="meta-chip-val" style="color: var(--accent-blue);">github.com/company/architecture</div>
</div>
</div>
</div>

<!-- note: [오프닝 멘트] 대규모 분산 환경에서 데이터 일관성과 처리량을 극대화하는 아키텍처 패턴을 공유합니다. -->

---

<!-- 2. Tech Agenda (Asymmetric Split) -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">AGENDA</span>
<div class="split-title">CONTENTS</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
동기 병목 극복부터<br>
프로덕션 튜닝까지 4단계
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
<div class="card-title">동기 호출의 병목 한계</div>
<div class="card-desc">
• REST 체인에 따른 연쇄 지연<br>
• 서비스 간 강한 결합도 위험<br>
• 부분 장애 시 전체 시스템 마비
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-purple">02</div>
<div class="card-title">이벤트 브로커 스트리밍</div>
<div class="card-desc">
• Kafka 파티셔닝 및 순서 보장<br>
• Idempotent Consumer 설계<br>
• Transactional Outbox 패턴
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">Saga 패턴 분산 트랜잭션</div>
<div class="card-desc">
• 오케스트레이션 vs 코레오그래피<br>
• 보상 트랜잭션(Compensation)<br>
• 최종 일관성(Eventual Consistency)
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-green">04</div>
<div class="card-title">모니터링 & 프로덕션 튜닝</div>
<div class="card-desc">
• OpenTelemetry 분산 추적<br>
• 컨슈머 랙 자동 오토스케일링<br>
• 데드레터 큐(DLQ) 장애 격리
</div>
</div>
</div>
</div>

<!-- note: [아젠다 안내] 1부 동기 병목 분석부터 4부 프로덕션 튜닝까지 4단계로 진행합니다. -->

---

<!-- 3. Problem Statement (3 Cards) -->
<div>
<div class="slide-header-center">
<span class="kicker kicker-red">SYSTEM BOTTLENECK</span>
<h2>동기식 REST API 체인이 초래하는 3대 구조적 위험</h2>
<p class="lead" style="margin-bottom: 0;">트래픽 폭증 시 단일 서비스 지연이 전체 마이크로서비스로 전파되어 연쇄 장애를 유발합니다.</p>
</div>

<div class="grid-3">
<div class="glass-card border-top-red">
<div class="circle-badge badge-red">01</div>
<div class="card-title">계단식 연쇄 장애 (Cascading)</div>
<div class="card-desc">
다운스트림 서비스의 지연이 업스트림 스레드 풀을 고갈시켜<br>
<strong style="color: #FFF;">전체 인프라 타임아웃 셧다운</strong>을 유발합니다.
</div>
</div>

<div class="glass-card border-top-yellow">
<div class="circle-badge badge-yellow">02</div>
<div class="card-title">2PC 분산 락 병목</div>
<div class="card-desc">
2단계 커밋(2PC)의 글로벌 락으로 인해<br>
<strong style="color: #FFF;">트랜잭션 지연시간 8배 증가</strong> 및 처리량 급락이 발생합니다.
</div>
</div>

<div class="glass-card border-top-blue">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">데이터 정합성 파편화</div>
<div class="card-desc">
네트워크 파티션 발생 시 롤백 실패로<br>
<strong style="color: #FFF;">DB 간 불일치 데이터 누적</strong> 및 복구 비용이 발생합니다.
</div>
</div>
</div>
</div>

<!-- note: [문제점 설명] 동기 호출 기반 마이크로서비스가 겪는 3대 치명적 병목을 설명합니다. -->

---

<!-- 4. Architecture & Pipeline (Horizontal Flow + Roles) -->
<div>
<div class="slide-header">
<span class="kicker">PIPELINE ARCHITECTURE</span>
<h2>이벤트 기반 비동기 스트리밍 및 Saga 오케스트레이션</h2>
<p class="lead" style="margin-bottom: 0;">이벤트를 불변 로그로 발행하고, 중앙 오케스트레이터를 통해 비동기 보상 트랜잭션을 제어합니다.</p>
</div>

<div class="flow-row">
<div class="flow-step">
<div style="font-size: 0.75rem; color: var(--accent-blue); font-weight: 800;">PRODUCER</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">주문 요청 접수</div>
<div style="font-size: 0.72rem; color: var(--text-slate); margin-top: 2px;">Outbox DB 적재</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="border-color: rgba(99, 102, 241, 0.4);">
<div style="font-size: 0.75rem; color: #818CF8; font-weight: 800;">CDC RELAY</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Debezium 캡처</div>
<div style="font-size: 0.72rem; color: var(--text-slate); margin-top: 2px;">Kafka 토픽 발행</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="background: rgba(30, 27, 75, 0.85); border: 1.5px solid #6366F1;">
<div style="font-size: 0.75rem; color: #A5B4FC; font-weight: 800;">SAGA ENGINE</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">단계별 상태 전이</div>
<div style="font-size: 0.72rem; color: #C7D2FE; margin-top: 2px;">결제/재고 이벤트</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="border-color: rgba(52, 211, 153, 0.4);">
<div style="font-size: 0.75rem; color: #34D399; font-weight: 800;">CONSUMER</div>
<div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">Idempotent 처리</div>
<div style="font-size: 0.72rem; color: var(--text-slate); margin-top: 2px;">최종 일관성 달성</div>
</div>
</div>

<div class="grid-2">
<div class="glass-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 4px;">✓ Transactional Outbox 패턴</div>
<div style="font-size: 0.78rem; color: var(--text-light); line-height: 1.5;">로컬 트랜잭션 내에서 비즈니스 데이터와 이벤트 테이블을 동시 커밋하여 메시지 유실 0% 달성</div>
</div>
<div class="glass-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: #34D399; margin-bottom: 4px;">✓ 자동 보상 트랜잭션(Compensation)</div>
<div style="font-size: 0.78rem; color: var(--text-light); line-height: 1.5;">중간 단계 실패 시 역순으로 롤백 이벤트를 발행하여 글로벌 락 없이 완벽한 최종 일관성 보장</div>
</div>
</div>
</div>

<!-- note: [아키텍처 파이프라인] Outbox 패턴과 Saga 엔진의 유기적 상호작용을 설명합니다. -->

---

<!-- 5. Benchmark Performance Stats (Big Stats) -->
<div>
<div class="slide-header-center">
<span class="kicker kicker-yellow">BENCHMARK RESULTS</span>
<h2>아키텍처 전환 후 달성한 3대 엔지니어링 성과</h2>
<p class="lead" style="margin-bottom: 0;">동일 하드웨어 스펙에서 동기 호출 대비 처리량 10배 증가 및 P99 응답시간 85% 단축</p>
</div>

<div class="grid-3">
<div class="glass-card border-top-yellow" style="text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-yellow" style="margin: 0 auto 6px auto;">01</div>
<div class="stat-val highlight-yellow">120K</div>
<div class="card-title">초당 트랜잭션 (TPS)</div>
<div class="card-desc">기존 12K TPS 대비 10배 처리량 확장 달성</div>
</div>

<div class="glass-card border-top-blue" style="text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-blue" style="margin: 0 auto 6px auto;">02</div>
<div class="stat-val highlight-cyan">18 ms</div>
<div class="card-title">P99 응답 지연시간</div>
<div class="card-desc">비동기 큐잉을 통해 클라이언트 체감 85% 단축</div>
</div>

<div class="glass-card border-top-purple" style="text-align: center; padding: 22px 18px;">
<div class="circle-badge badge-purple" style="margin: 0 auto 6px auto;">03</div>
<div class="stat-val highlight-purple">99.99%</div>
<div class="card-title">서비스 가용성 (SLA)</div>
<div class="card-desc">단일 서비스 장애 시에도 전체 중단 없는 격리 달성</div>
</div>
</div>
</div>

<!-- note: [성능 벤치마크] 초당 12만 TPS, P99 18ms, 99.99% 가용성 검증 결과를 발표합니다. -->

---

<!-- 6. Executive Closing & Q&A Hub -->
<div>
<div class="slide-header" style="margin-bottom: 16px;">
<span class="kicker">SUMMARY & NEXT STEPS</span>
<h2>핵심 요약 및 질의응답 (Q&A)</h2>
<p class="lead" style="margin-bottom: 0;">이벤트 기반 분산 아키텍처로 고가용성 엔터프라이즈 시스템을 구축하세요.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. Transactional Outbox로 유실 방지</div>
<div class="card-desc">DB 커밋과 메시지 발행을 원자적으로 묶어 100% 신뢰성 보장</div>
</div>
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-yellow);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. Saga 엔진 기반 분산 트랜잭션</div>
<div class="card-desc">글로벌 락 없는 보상 트랜잭션으로 시스템 전체 처리량 극대화</div>
</div>
<div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-purple);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. OpenTelemetry 기반 분산 가시성</div>
<div class="card-desc">이벤트 체인 전 구간 추적으로 장애 원인 1분 내 격리 및 해결</div>
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
<div class="qa-meta-val-blue">github.com/company/architecture</div>
<div class="qa-meta-label">CONTACT</div>
<div class="qa-meta-val-white">platform-lead@company.com</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리 멘트] 3가지 핵심 아키텍처 원칙과 GitHub 저장소 링크를 안내하며 세션을 마칩니다. 질문을 환영합니다. 감사합니다. -->
