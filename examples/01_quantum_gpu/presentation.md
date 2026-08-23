---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #0A0D1A 0%, #030408 100%);
  --card-bg: rgba(14, 20, 38, 0.9);
  --border-color: rgba(0, 240, 255, 0.2);
  --card-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
  --text-title: #FFFFFF;
  --text-body: #CBD5E1;
  --text-sub: #94A3B8;
  --accent-1: #00F0FF;
  --kicker-bg: rgba(0, 240, 255, 0.12);
  --kicker-border: rgba(0, 240, 255, 0.35);

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
<span class="kicker">QUANTUM ACCELERATION</span>
<h1>
양자-GPU 하이브리드 기반<br>
<span class="hl">초고속 분산 연산 가속 아키텍처</span>
</h1>
<p class="lead" style="margin-top: 10px;">
NISQ 시대의 물리적 큐비트 한계를 상온 GPU 텐서 코어로 보정하는 혁신적 분산 프레임워크
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">PRESENTER & TEAM</div>
<div class="meta-chip-val">양자 컴퓨팅 연구소 • Quantum HPC Team</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SESSION & DATE</div>
<div class="meta-chip-val">DeepTech Summit 2026 • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">REPOSITORY & DOCS</div>
<div class="meta-chip-val">github.com/quantum-lab/qgpu-core</div>
</div>
</div>
</div>

<!-- note: [오프닝] 상온 양자 오류를 극복하고 대규모 시뮬레이션을 가속하는 Q-GPU 하이브리드 아키텍처를 발표합니다. -->

---

<!-- 2. Split Agenda -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">AGENDA</span>
<div class="split-title">CONTENTS</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px;">물리적 큐비트 한계 극복 로드맵</p>
</div>
<div style="margin-top: 24px;">
<div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-1); margin-bottom: 8px;"></div>
<div style="width: 80px; height: 2px; background: rgba(0, 240, 255, 0.5);"></div>
</div>
</div>

<div class="split-right">
<div class="main-card">
<div class="circle-badge">01</div>
<div class="card-title">양자 노이즈 병목</div>
<div class="card-desc">• 결맞음 시간(Coherence) 한계<br>• 게이트 오류율 0.1% 벽 돌파</div>
</div>
<div class="main-card">
<div class="circle-badge">02</div>
<div class="card-title">GPU 텐서 보정 엔진</div>
<div class="card-desc">• 실시간 텐서 네트워크 역전파<br>• 분산 파이프라인 동기화</div>
</div>
<div class="main-card">
<div class="circle-badge">03</div>
<div class="card-title">실증 벤치마크 성과</div>
<div class="card-desc">• 신약 분자 도킹 속도 1,200배 가속<br>• 유효 큐비트 연산 정밀도 99.98%</div>
</div>
<div class="main-card">
<div class="circle-badge">04</div>
<div class="card-title">도입 전략 및 Q&A</div>
<div class="card-desc">• 온프레미스 HPC 클러스터 연동<br>• 글로벌 엔터프라이즈 지원 체계</div>
</div>
</div>
</div>

<!-- note: [아젠다] 4단계로 나누어 양자 노이즈 극복과 실증 성과를 설명하겠습니다. -->

---

<!-- 3. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">KEY ACHIEVEMENTS</span>
<h2>분산 양자 연산 가속의 3대 정량 지표</h2>
<p class="lead">기존 최고 성능 슈퍼컴퓨팅 대비 100배 이상의 연산 효율성 입증</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">1,200x</div>
<div class="card-title">분자 도킹 연산 속도</div>
<div class="card-desc">기존 Classical HPC 대비 압도적 단축</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">99.98%</div>
<div class="card-title">양자 오류 보정 정밀도</div>
<div class="card-desc">실시간 GPU 텐서 오케스트레이션 결과</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">0.4 ms</div>
<div class="card-title">노드 간 인터커넥트 지연</div>
<div class="card-desc">RoCEv2 기반 초저지연 통신망 구축</div>
</div>
</div>
</div>

<!-- note: [성과] 1200배 속도 향상과 99.98% 오류 보정을 달성했습니다. -->

---

<!-- 4. Closing -->
<div>
<div class="slide-header">
<span class="kicker">SUMMARY & NEXT STEPS</span>
<h2>핵심 요약 및 질의응답 (Q&A)</h2>
<p class="lead">양자-GPU 분산 가속으로 차세대 계산 과학의 지평을 넓힙니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 하이브리드 연산 모델 확립</div>
<div class="card-desc">양자 회로와 고성능 GPU 클러스터의 실시간 동기화 완료</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #A78BFA;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 1,200배 빠른 분자 시뮬레이션</div>
<div class="card-desc">신약 및 배터리 소재 개발 기간을 수년에서 수주일로 단축</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #34D399;">
<div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 글로벌 연구 생태계 개방</div>
<div class="card-desc">오픈소스 SDK 및 클라우드 테스트베드 공식 릴리즈</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">OPEN DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">양자 가속기 도입 및 연구 협업을 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">RESEARCH REPO</div>
<div class="qa-meta-val-blue">github.com/quantum-lab/qgpu-core</div>
<div class="qa-meta-label">CONTACT</div>
<div class="qa-meta-val-white">contact@quantum-hpc.org</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질문을 받겠습니다. -->
