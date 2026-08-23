---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-light: #F8FAFC;
    --card-bg: #FFFFFF;
    --card-border: #E2E8F0;
    --accent-indigo: #4F46E5;
    --accent-blue: #0284C7;
    --accent-emerald: #059669;
    --text-main: #0F172A;
    --text-muted: #64748B;
    --text-sub: #334155;
  }

  section {
    font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;
    background: radial-gradient(circle at 90% 10%, rgba(79, 70, 229, 0.05) 0%, transparent 40%),
                var(--bg-light);
    color: var(--text-main);
    padding: 44px 58px;
    word-break: keep-all;
    letter-spacing: -0.025em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
  }

  h1 { font-size: 2.38rem !important; font-weight: 800 !important; color: var(--text-main) !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.62rem !important; font-weight: 800 !important; color: var(--text-main) !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.96rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 24px 0; }

  .slide-header { margin-bottom: 24px; }
  .slide-header-center { text-align: center; margin-bottom: 24px; }

  .kicker {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 9999px;
    background: rgba(79, 70, 229, 0.1);
    color: var(--accent-indigo);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    border: 1px solid rgba(79, 70, 229, 0.25);
    margin-bottom: 8px;
    width: fit-content;
    flex-shrink: 0;
  }

  .highlight-indigo { color: var(--accent-indigo) !important; }
  .highlight-blue { color: var(--accent-blue) !important; }
  .highlight-green { color: var(--accent-emerald) !important; }

  .light-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 20px 22px;
    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
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
  .badge-indigo { background: rgba(79, 70, 229, 0.12); color: var(--accent-indigo); border: 1px solid rgba(79, 70, 229, 0.35); }
  .badge-blue { background: rgba(2, 132, 199, 0.12); color: var(--accent-blue); border: 1px solid rgba(2, 132, 199, 0.35); }
  .badge-green { background: rgba(5, 150, 105, 0.12); color: var(--accent-emerald); border: 1px solid rgba(5, 150, 105, 0.35); }

  .border-top-indigo { border-top: 3.5px solid var(--accent-indigo) !important; }
  .border-top-blue { border-top: 3.5px solid var(--accent-blue) !important; }
  .border-top-green { border-top: 3.5px solid var(--accent-emerald) !important; }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }

  .split-box { display: flex; gap: 48px; align-items: center; justify-content: center; width: 100%; }
  .split-left { width: 260px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; }
  .split-title { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.08em; color: var(--text-main); margin: 6px 0 0 0; white-space: nowrap; }
  .split-right { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .cover-meta-grid { display: grid; grid-template-columns: 1.2fr 1fr 1.2fr; gap: 14px; width: 100%; margin-top: 20px; }
  .cover-meta-chip { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px; padding: 12px 18px; box-shadow: 0 2px 10px -2px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; justify-content: center; }
  .meta-chip-label { font-size: 0.7rem; font-weight: 800; color: var(--accent-indigo); letter-spacing: 0.05em; margin-bottom: 2px; }
  .meta-chip-val { font-size: 0.88rem; font-weight: 700; color: var(--text-main); }

  .flow-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
  .flow-step { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 12px; text-align: center; flex: 1; box-shadow: 0 2px 8px -2px rgba(15, 23, 42, 0.05); }
  .flow-arr { color: var(--accent-indigo); font-size: 1.3rem; font-weight: 800; }

  .closing-box { display: flex; gap: 20px; align-items: stretch; width: 100%; }
  .closing-left { flex: 1.35; display: flex; flex-direction: column; gap: 10px; }
  .qa-box { background: var(--card-bg); border: 1.5px solid rgba(79, 70, 229, 0.35); border-radius: 14px; padding: 18px 20px; box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.08); flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
  .qa-kicker { font-size: 0.72rem; font-weight: 800; color: var(--accent-indigo); letter-spacing: 0.08em; margin-bottom: 2px; }
  .qa-title { font-size: 1.8rem; font-weight: 900; color: var(--text-main); line-height: 1.1; margin-bottom: 6px; }
  .qa-desc { font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; }
  .qa-meta-border { border-top: 1px solid var(--card-border); padding-top: 10px; margin-top: 10px; }
  .qa-meta-label { font-size: 0.68rem; color: var(--text-muted); margin-bottom: 2px; }
  .qa-meta-val-indigo { font-size: 0.84rem; font-weight: 700; color: var(--accent-indigo); margin-bottom: 6px; }
  .qa-meta-val-sub { font-size: 0.84rem; color: var(--text-sub); }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.8rem; color: var(--text-sub); line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }
  footer { font-size: 0.75rem; color: #94A3B8; bottom: 16px; }
---

<!-- 1. Academic & Research Cover Slide -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">CONFERENCE PAPER & RESEARCH</span>
<h1>
온디바이스 소형 언어 모델(sLLM)을 활용한<br>
<span class="highlight-indigo">실시간 한국어 문맥 추론 및 요약 엔진</span>
</h1>
<p class="lead" style="font-size: 1.12rem; color: var(--text-muted); margin-top: 12px;">
모바일 엣지 디바이스 환경에서 메모리 사용량 최적화와 추론 지연시간 단축에 관한 연구
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">AUTHORS & LAB</div>
<div class="meta-chip-val">인공지능연구소 자연어처리팀</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">SYMPOSIUM & SESSION</div>
<div class="meta-chip-val">2026 AI Symposium • Edge Track</div>
</div>
<div class="cover-meta-chip" style="border-color: rgba(79, 70, 229, 0.3);">
<div class="meta-chip-label" style="color: var(--accent-indigo);">PAPER REGISTRATION</div>
<div class="meta-chip-val" style="color: var(--accent-indigo);">Paper No. 2026-AI-088</div>
</div>
</div>
</div>

<!-- note: [학술 발표 오프닝] 모바일 온디바이스 환경에서 소형 언어 모델의 추론 성능을 극대화하기 위한 연구 결과를 발표합니다. -->

---

<!-- 2. Academic Agenda -->
<div class="split-box">
<div class="split-left">
<div>
<span class="kicker">PAPER OUTLINE</span>
<div class="split-title">CONTENTS</div>
<p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: var(--text-muted); line-height: 1.5;">
연구 배경부터<br>
실험 벤치마크까지 4챕터
</p>
</div>

<div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-indigo);"></div>
<div style="height: 2px; width: 60px; background: rgba(79, 70, 229, 0.4);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-blue);"></div>
<div style="height: 2px; width: 100px; background: rgba(2, 132, 199, 0.5);"></div>
</div>
<div style="display: flex; align-items: center; gap: 12px;">
<div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-indigo);"></div>
<div style="height: 2px; width: 45px; background: rgba(79, 70, 229, 0.4);"></div>
</div>
</div>
</div>

<div class="split-right">
<div class="light-card">
<div class="circle-badge badge-indigo">01</div>
<div class="card-title" style="color: var(--text-main);">연구 배경 및 당면 과제</div>
<div class="card-desc" style="color: var(--text-muted);">
• 엣지 디바이스 하드웨어 제약<br>
• 한국어 토크나이저 메모리 오버헤드<br>
• 저지연 스트리밍 구현 한계
</div>
</div>

<div class="light-card">
<div class="circle-badge badge-blue">02</div>
<div class="card-title" style="color: var(--text-main);">경량화 아키텍처 설계</div>
<div class="card-desc" style="color: var(--text-muted);">
• 4-bit AWQ 활성화 양자화<br>
• 동적 KV Cache Pruning 기법<br>
• 모바일 NPU 연산 최적화 파이프라인
</div>
</div>

<div class="light-card">
<div class="circle-badge badge-green">03</div>
<div class="card-title" style="color: var(--text-main);">실험 결과 및 정량 분석</div>
<div class="card-desc" style="color: var(--text-muted);">
• Ko-Harness 벤치마크 평가<br>
• TTFT 및 토큰 생성 속도 측정<br>
• 전력 소모 및 RAM 점유율 비교
</div>
</div>

<div class="light-card">
<div class="circle-badge badge-indigo">04</div>
<div class="card-title" style="color: var(--text-main);">결론 및 향후 연구 방향</div>
<div class="card-desc" style="color: var(--text-muted);">
• 온디바이스 멀티모달 확장 방안<br>
• 연속 학습(Continual Learning)<br>
• 오픈소스 모델 가중치 공개 계획
</div>
</div>
</div>
</div>

<!-- note: [아젠다 발표] 연구 배경부터 경량화 기법, 벤치마크 검증까지 순서대로 발표하겠습니다. -->

---

<!-- 3. Experimental Results (3 Cards) -->
<div>
<div class="slide-header-center">
<span class="kicker">EXPERIMENTAL RESULTS</span>
<h2>3대 핵심 연구 성과 및 벤치마크 검증</h2>
<p class="lead" style="margin-bottom: 0;">양자화(Quantization)와 캐시 최적화를 통해 기존 모델 대비 처리 속도 3.4배 향상</p>
</div>

<div class="grid-3">
<div class="light-card border-top-indigo">
<div class="circle-badge badge-indigo">01</div>
<div style="font-size: 0.98rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">추론 지연시간 68% 단축</div>
<ul class="clean-points">
<li>KV 캐시 프루닝(Pruning) 기법 적용</li>
<li>첫 토큰 생성(TTFT) 42ms 달성</li>
<li>초당 38.5 토큰 실시간 스트리밍</li>
</ul>
</div>

<div class="light-card border-top-blue">
<div class="circle-badge badge-blue">02</div>
<div style="font-size: 0.98rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">RAM 점유율 1.8GB 유지</div>
<ul class="clean-points">
<li>4-bit AWQ 양자화로 압축률 극대화</li>
<li>모바일 저전력 LPDDR5X 완벽 지원</li>
<li>백그라운드 메모리 누수 0% 달성</li>
</ul>
</div>

<div class="light-card border-top-green">
<div class="circle-badge badge-green">03</div>
<div style="font-size: 0.98rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">한국어 문해력 94.2점</div>
<ul class="clean-points">
<li>Ko-Harness 종합 평가 기준 준수</li>
<li>전문 도메인 용어 오역률 1.2% 미만</li>
<li>환각 현상(Hallucination) 78% 억제</li>
</ul>
</div>
</div>
</div>

<!-- note: [연구 성과] 추론 속도, 메모리 절감, 한국어 정확도 3개 지표를 모두 충족했습니다. -->

---

<!-- 4. Optimization Pipeline -->
<div>
<div class="slide-header">
<span class="kicker">OPTIMIZATION PIPELINE</span>
<h2>온디바이스 배포를 위한 3단계 모델 경량화 파이프라인</h2>
<p class="lead" style="margin-bottom: 0;">가중치 압축부터 캐시 압축, 하드웨어 가속기 오프로딩까지 유기적으로 연결됩니다.</p>
</div>

<div class="flow-row">
<div class="flow-step">
<div style="font-size: 0.75rem; color: var(--accent-indigo); font-weight: 800;">STEP 1: AWQ</div>
<div style="font-size: 0.94rem; font-weight: 700; color: var(--text-main); margin-top: 2px;">4-bit 가중치 양자화</div>
<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">정확도 손실 0.3% 미만</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="border-color: rgba(2, 132, 199, 0.4);">
<div style="font-size: 0.75rem; color: var(--accent-blue); font-weight: 800;">STEP 2: KV PRUNING</div>
<div style="font-size: 0.94rem; font-weight: 700; color: var(--text-main); margin-top: 2px;">동적 토큰 압축</div>
<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">컨텍스트 메모리 60% 절감</div>
</div>
<div class="flow-arr">➔</div>
<div class="flow-step" style="border-color: rgba(5, 150, 105, 0.4);">
<div style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 800;">STEP 3: NPU RUNTIME</div>
<div style="font-size: 0.94rem; font-weight: 700; color: var(--text-main); margin-top: 2px;">모바일 칩셋 가속</div>
<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">배터리 전력 소모 55% 개선</div>
</div>
</div>

<div class="grid-2">
<div class="light-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-indigo); margin-bottom: 4px;">✓ 활성화 인식 양자화 (Activation-aware Weight Quantization)</div>
<div style="font-size: 0.78rem; color: var(--text-sub); line-height: 1.5;">중요 가중치 채널을 보존하여 4-bit 환경에서도 한국어 문맥 추론 능력을 99% 이상 유지</div>
</div>
<div class="light-card" style="padding: 16px 20px;">
<div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-emerald); margin-bottom: 4px;">✓ NPU 하드웨어 친화적 커널 퓨전 (Kernel Fusion)</div>
<div style="font-size: 0.78rem; color: var(--text-sub); line-height: 1.5;">메모리 I/O 병목을 제거하여 모바일 디바이스의 발열과 전력 소모를 대폭 억제</div>
</div>
</div>
</div>

<!-- note: [파이프라인] AWQ, KV Pruning, NPU 가속의 3단계 파이프라인 구조를 설명합니다. -->

---

<!-- 5. Comparative Evaluation Matrix -->
<div>
<div class="slide-header-center">
<span class="kicker">ABLATION STUDY</span>
<h2>기존 온디바이스 모델 대비 성능 비교 매트릭스</h2>
<p class="lead" style="margin-bottom: 0;">동일한 3B 파라미터 규모에서 기존 최고 성능 모델 대비 모든 지표에서 유의미한 우위 입증</p>
</div>

<div class="grid-2">
<div class="light-card" style="padding: 20px 22px;">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-indigo); margin-bottom: 6px;">✓ 추론 속도 및 반응성 (Latency & Throughput)</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>첫 토큰 생성(TTFT): <strong>140ms ➔ 42ms (68% 단축)</strong></li>
<li>초당 생성 토큰 수: <strong>11.2 ➔ 38.5 tokens/s</strong></li>
<li>최대 컨텍스트 길이: <strong>8K 토큰 무손실 지원</strong></li>
</ul>
</div>

<div class="light-card" style="padding: 20px 22px;">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-emerald); margin-bottom: 6px;">✓ 자원 효율성 및 정확도 (Efficiency & Quality)</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>피크 메모리 사용량: <strong>5.4GB ➔ 1.8GB (66% 절감)</strong></li>
<li>Ko-Harness 벤치마크: <strong>88.4점 ➔ 94.2점 달성</strong></li>
<li>시간당 배터리 소모율: <strong>4.2% 수준 극저치 유지</strong></li>
</ul>
</div>
</div>
</div>

<!-- note: [비교 평가] 처리 지연시간 68% 단축과 메모리 66% 절감의 뛰어난 정량적 성과를 강조합니다. -->

---

<!-- 6. Academic Closing & Q&A Hub -->
<div>
<div class="slide-header" style="margin-bottom: 16px;">
<span class="kicker">CONCLUSION & REPO</span>
<h2>결론 및 질의응답 (Q&A)</h2>
<p class="lead" style="margin-bottom: 0;">소형 언어 모델의 엣지 배포 가능성을 확인하였으며, 오픈소스 모델 가중치를 공개합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="light-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-indigo);">
<div style="font-size: 0.92rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">01. 4-bit AWQ + KV 캐시 프루닝 실증</div>
<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 2px;">정확도 저하 없이 메모리 66% 절감 및 모바일 RAM 1.8GB 유지</div>
</div>
<div class="light-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
<div style="font-size: 0.92rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">02. 실시간 스트리밍 38.5 tok/s 달성</div>
<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 2px;">첫 토큰 지연시간 42ms로 온디바이스 실시간 UX 완벽 지원</div>
</div>
<div class="light-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-emerald);">
<div style="font-size: 0.92rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">03. 오픈 연구 생태계 기여</div>
<div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 2px;">사전 학습된 한국어 가중치 및 양자화 파이프라인 공개</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">ACADEMIC DISCUSSION</div>
<div class="qa-title">Q & A</div>
<div class="qa-desc">논문 연구 방법론 및 벤치마크에 대한 질의응답을 진행합니다.</div>
</div>

<div class="qa-meta-border">
<div class="qa-meta-label">OPEN RESEARCH REPO</div>
<div class="qa-meta-val-indigo">github.com/ai-lab/edge-sllm</div>
<div class="qa-meta-label">CORRESPONDING AUTHOR</div>
<div class="qa-meta-val-sub">lead-researcher@ailab.org</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리 발표] 연구 결론을 요약하고 오픈소스 저장소를 안내합니다. 질문해 주시면 성실히 답변드리겠습니다. 감사합니다. -->
