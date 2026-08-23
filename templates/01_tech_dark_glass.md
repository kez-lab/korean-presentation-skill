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

  h1 { font-size: 2.6rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.68rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.98rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 26px 0; }

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
  .card-desc { font-size: 0.78rem; color: #94A3B8; line-height: 1.5; }

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

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }
  .split-box { display: flex; gap: 48px; align-items: center; justify-content: center; width: 100%; }
  .split-left { width: 260px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; }
  .split-title { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.08em; color: #FFF; margin: 6px 0 0 0; white-space: nowrap; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.8rem; color: var(--text-light); line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }
  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Tech Cover Slide -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">ENGINEERING TECH SESSION</span>
<h1>
차세대 분산 시스템을 위한<br>
<span style="color: #38BDF8;">고성능 이벤트 드라이븐 아키텍처</span>
</h1>
<p class="lead" style="font-size: 1.15rem; color: #94A3B8; margin-top: 14px;">
마이크로서비스 환경에서 데이터 일관성과 처리량을 동시에 확보하는 설계 패턴
</p>
</div>

<div class="glass-card" style="padding: 14px 22px; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
<div style="display: flex; gap: 24px; font-size: 0.88rem; color: #94A3B8;">
<span>작성자: Backend Platform Team</span>
<span>일자: 2026.08</span>
<span>분류: System Architecture</span>
</div>
<div style="color: #38BDF8; font-weight: 800; font-size: 0.92rem;">github.com/company/architecture</div>
</div>
</div>

<!-- note: [오프닝 멘트] 대규모 트래픽 환경에서 데이터 정합성을 유지하기 위한 이벤트 드라이븐 아키텍처 설계 전략을 공유합니다. -->

---

<!-- 2. Tech Agenda Slide -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">AGENDA</span>
<div class="split-title">CONTENTS</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
기존 아키텍처 한계부터<br>
실전 프로덕션 적용까지
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
<div class="card-title">동기 호출의 한계와 병목</div>
<div class="card-desc">
• REST API 체인에 따른 연쇄 장애<br>
• 서비스 간 강한 결합도 문제<br>
• 네트워크 지연시간 누적
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-purple">02</div>
<div class="card-title">이벤트 브로커와 스트리밍</div>
<div class="card-desc">
• Kafka 기반 파티셔닝 전략<br>
• Idempotent Consumer 설계<br>
• Outbox 패턴을 통한 트랜잭션 보장
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-blue">03</div>
<div class="card-title">Saga 패턴 분산 트랜잭션</div>
<div class="card-desc">
• 오케스트레이션 vs 코레오그래피<br>
• 보상 트랜잭션(Compensation) 정의<br>
• 최종 일관성(Eventual Consistency)
</div>
</div>

<div class="glass-card">
<div class="circle-badge badge-green">04</div>
<div class="card-title">모니터링 및 성능 튜닝</div>
<div class="card-desc">
• OpenTelemetry 분산 추적<br>
• 컨슈머 랙 지표 자동 스케일링<br>
• 장애 격리 및 데드레터 큐 운영
</div>
</div>
</div>
</div>

<!-- note: [목차 안내] 동기 호출의 병목 현상부터 Saga 패턴 분산 트랜잭션 구현까지 단계별로 살펴보겠습니다. -->
