---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: #FAF9F6;
  --card-bg: #FFFFFF;
  --border-color: rgba(30, 27, 75, 0.15);
  --card-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  --text-title: #1E1B4B;
  --text-body: #312E81;
  --text-sub: #4338CA;
  --accent-1: #1E1B4B;
  --kicker-bg: rgba(30, 27, 75, 0.06);
  --kicker-border: rgba(30, 27, 75, 0.2);

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
<span class="kicker">COMPUTER SCIENCE RESEARCH</span>
<h1>
선형 복잡도 어텐션 메커니즘을 통한<br>
<span class="hl">O(N) 초경량 트랜스포머의 이론적 증명</span>
</h1>
<p class="lead" style="margin-top: 10px;">
소프트맥스 커널 테일러 급수 근사를 통해 정확도 손실 없이 100만 토큰 컨텍스트를 실시간 추론하는 기법
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">RESEARCH LAB</div>
<div class="meta-chip-val">서울대학교 AI연구원 • 딥러닝이론연구실</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">CONFERENCE</div>
<div class="meta-chip-val">NeurIPS 2026 Oral Paper • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">OPEN CODE & PAPER</div>
<div class="meta-chip-val">arxiv.org/abs/2608.linear-attn</div>
</div>
</div>
</div>

<!-- note: [오프닝] 100만 토큰을 선형 시간 복잡도 O(N)으로 처리하는 새로운 어텐션 이론을 발표합니다. -->

---

<!-- 2. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">THEORETICAL RESULTS</span>
<h2>1M 토큰 벤치마크 실험 결과</h2>
<p class="lead">Standard FlashAttention-3 대비 메모리 사용량 및 추론 지연시간 획기적 절감</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">O(N)</div>
<div class="card-title">시간 및 공간 복잡도</div>
<div class="card-desc">기존 트랜스포머의 O(N^2) 병목 완전 해결</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">1.2 GB</div>
<div class="card-title">100만 토큰 피크 메모리</div>
<div class="card-desc">기존 방식(48GB) 대비 97.5% 절감</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">99.8%</div>
<div class="card-title">Needle In A Haystack 회수율</div>
<div class="card-desc">초장문 문맥 정보 손실 0% 입증</div>
</div>
</div>
</div>

<!-- note: [이론 결과] O(N) 복잡도와 99.8% 검색 회수율을 입증하였습니다. -->

---

<!-- 3. Closing -->
<div>
<div class="slide-header">
<span class="kicker">CONCLUSION & REPO</span>
<h2>차세대 파운데이션 모델을 향하여</h2>
<p class="lead">사전 학습 가중치와 PyTorch/CUDA 커널 코드를 오픈소스로 전면 공개합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #1E1B4B; margin-bottom: 2px;">01. 오픈소스 커널 라이브러리 배포</div>
<div class="card-desc">Triton 및 FlashLinearAttention 공식 라이브러리 릴리즈 완료</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #4338CA;">
<div style="font-size: 0.92rem; font-weight: 800; color: #1E1B4B; margin-bottom: 2px;">02. 온디바이스 에지 디바이스 지원</div>
<div class="card-desc">모바일 NPU에서 128K 컨텍스트 실시간 디코딩 달성</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #1E1B4B; margin-bottom: 2px;">03. 글로벌 산학 협력 연구 확대</div>
<div class="card-desc">차세대 70B 모델 사전 학습을 위한 컴퓨트 클러스터 공동 활용</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">ACADEMIC DISCUSSION</div>
<div class="qa-title" style="color: #1E1B4B;">Q & A</div>
<div class="qa-desc">논문 연구 방법론 및 이론적 증명에 대한 질의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">ARXIV PAPER</div>
<div class="qa-meta-val-blue">arxiv.org/abs/2608.linear-attn</div>
<div class="qa-meta-label">CORRESPONDENCE</div>
<div class="qa-meta-val-white" style="color: #1E1B4B;">researcher@snu.ac.kr</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질의응답을 진행하겠습니다. -->
