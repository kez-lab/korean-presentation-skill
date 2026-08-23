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

  h1 { font-size: 2.55rem !important; font-weight: 800 !important; color: var(--text-main) !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.68rem !important; font-weight: 800 !important; color: var(--text-main) !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.98rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 26px 0; }

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

  .light-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 22px 24px;
    box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }

  .stat-val { font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }
  .stat-indigo { color: var(--accent-indigo); }
  .stat-blue { color: var(--accent-blue); }
  .stat-green { color: var(--accent-emerald); }

  ul.clean-points { margin: 6px 0 0 0; padding-left: 16px; font-size: 0.82rem; color: var(--text-sub); line-height: 1.55; }
  ul.clean-points li { margin-bottom: 4px; }
  footer { font-size: 0.75rem; color: #94A3B8; bottom: 16px; }
---

<!-- 1. Academic & Research Cover Slide -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">CONFERENCE PAPER & RESEARCH</span>
<h1>
온디바이스 소형 언어 모델(sLLM)을 활용한<br>
<span style="color: var(--accent-indigo);">실시간 한국어 문맥 추론 및 요약 엔진</span>
</h1>
<p class="lead" style="font-size: 1.15rem; color: var(--text-muted); margin-top: 14px;">
모바일 엣지 디바이스 환경에서 메모리 사용량 최적화와 추론 지연시간 단축에 관한 연구
</p>
</div>

<div class="light-card" style="padding: 14px 22px; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
<div style="display: flex; gap: 24px; font-size: 0.88rem; color: var(--text-muted);">
<span>발표자: 인공지능연구소 자연어처리팀</span>
<span>학술대회: 2026 AI Research Symposium</span>
<span>세션: Edge Intelligence</span>
</div>
<div style="color: var(--accent-indigo); font-weight: 800; font-size: 0.92rem;">Paper No. 2026-AI-088</div>
</div>
</div>

<!-- note: [학술 발표 오프닝] 모바일 온디바이스 환경에서 소형 언어 모델의 추론 성능을 극대화하기 위한 연구 결과를 발표합니다. -->

---

<!-- 2. Research Findings 3 Cards -->
<div>
<div style="text-align: center; margin-bottom: 24px;">
<span class="kicker">EXPERIMENTAL RESULTS</span>
<h2>3대 핵심 연구 성과 및 벤치마크 검증</h2>
<p class="lead" style="margin-bottom: 0;">양자화(Quantization)와 캐시 최적화를 통해 기존 모델 대비 처리 속도 3.4배 향상</p>
</div>

<div class="grid-3">
<div class="light-card" style="border-top: 3.5px solid var(--accent-indigo);">
<div style="font-size: 0.8rem; font-weight: 800; color: var(--accent-indigo); margin-bottom: 4px;">01. LATENCY REDUCTION</div>
<div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">추론 지연시간 68% 단축</div>
<ul class="clean-points">
<li>KV 캐시 프루닝(Pruning) 기법 적용</li>
<li>첫 토큰 생성(TTFT) 42ms 달성</li>
<li>초당 38.5 토큰 실시간 스트리밍</li>
</ul>
</div>

<div class="light-card" style="border-top: 3.5px solid var(--accent-blue);">
<div style="font-size: 0.8rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 4px;">02. MEMORY FOOTPRINT</div>
<div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">RAM 점유율 1.8GB 유지</div>
<ul class="clean-points">
<li>4-bit AWQ 양자화로 압축률 극대화</li>
<li>모바일 저전력 LPDDR5X 완벽 지원</li>
<li>백그라운드 메모리 누수 0% 달성</li>
</ul>
</div>

<div class="light-card" style="border-top: 3.5px solid var(--accent-emerald);">
<div style="font-size: 0.8rem; font-weight: 800; color: var(--accent-emerald); margin-bottom: 4px;">03. BENCHMARK ACCURACY</div>
<div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">한국어 문해력 94.2점</div>
<ul class="clean-points">
<li>Ko-Harness 종합 평가 기준 준수</li>
<li>전문 도메인 용어 오역률 1.2% 미만</li>
<li>환각 현상(Hallucination) 78% 억제</li>
</ul>
</div>
</div>
</div>

<!-- note: [성과 발표] 지연시간 단축, 메모리 최적화, 한국어 평가 점수 3개 핵심 지표를 성공적으로 달성했습니다. -->
