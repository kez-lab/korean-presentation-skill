---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    
  --bg-main: radial-gradient(circle at 50% 15%, #F0FDFA 0%, #E6FFFA 100%);
  --card-bg: #FFFFFF;
  --border-color: rgba(14, 116, 144, 0.2);
  --card-shadow: 0 8px 24px rgba(8, 145, 178, 0.08);
  --text-title: #0F172A;
  --text-body: #334155;
  --text-sub: #64748B;
  --accent-1: #0891B2;
  --kicker-bg: rgba(8, 145, 178, 0.08);
  --kicker-border: rgba(8, 145, 178, 0.25);

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
<span class="kicker">PRECISION BIO-MEDICINE</span>
<h1>
단일 세포 유전체 분석 기반<br>
<span class="hl">차세대 정밀 면역항암 신약 플랫폼</span>
</h1>
<p class="lead" style="margin-top: 10px;">
환자 맞춤형 T세포 수용체(TCR) 레퍼토리 분석으로 불응성 고형암 타겟팅 효율을 극대화
</p>
</div>

<div class="cover-meta-grid">
<div class="cover-meta-chip">
<div class="meta-chip-label">INSTITUTE & LAB</div>
<div class="meta-chip-val">국립정밀의학연구센터 • 면역유전체Lab</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">CLINICAL SYMPOSIUM</div>
<div class="meta-chip-val">Bio-Korea Summit • 2026.08</div>
</div>
<div class="cover-meta-chip">
<div class="meta-chip-label">CLINICAL REPO</div>
<div class="meta-chip-val">precision-bio.org/single-cell</div>
</div>
</div>
</div>

<!-- note: [오프닝] 단일 세포 수준에서 암 미세환경을 분석하여 맞춤형 면역 치료제를 도출하는 플랫폼을 소개합니다. -->

---

<!-- 2. Flow -->
<div>
<div class="slide-header">
<span class="kicker">CLINICAL PIPELINE</span>
<h2>4단계 단일 세포 전사체 분석 및 표적 발굴 파이프라인</h2>
<p class="lead">환자 생검 조직 추출부터 인실리코(In Silico) 스크리닝까지 전 과정을 자동화합니다.</p>
</div>

<div class="grid-2">
<div class="main-card">
<div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-1); margin-bottom: 6px;">STEP 1 ~ 2: 세포 분리 및 시퀀싱</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>10x Genomics 기반 단일 세포 캡처 (99.5% 생존율)</li>
<li>초고심도 RNA-Seq 전사체 프로파일링 수행</li>
<li>환자당 100,000+ 개별 면역 세포 전수 분석</li>
</ul>
</div>

<div class="main-card">
<div style="font-size: 0.95rem; font-weight: 800; color: #0E7490; margin-bottom: 6px;">STEP 3 ~ 4: AI 타겟 예측 및 검증</div>
<ul class="clean-points" style="font-size: 0.78rem;">
<li>트랜스포머 기반 TCR-에피토프 결합 친화도 계산</li>
<li>환자 유래 오가노이드(PDO) 기반 실시간 효능 검증</li>
<li>신약 후보물질 도출 기간을 36개월 ➔ 6개월로 단축</li>
</ul>
</div>
</div>
</div>

<!-- note: [파이프라인] 4단계 자동화 파이프라인으로 타겟 발굴 시간을 6분의 1로 단축했습니다. -->

---

<!-- 3. Big Stats -->
<div>
<div class="slide-header-center">
<span class="kicker">CLINICAL EFFICACY</span>
<h2>전임상 동물 모델 및 오가노이드 검증 지표</h2>
<p class="lead">기존 면역관문억제제 대비 통계적으로 유의미한 암세포 사멸 효과 달성</p>
</div>

<div class="grid-3">
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">01</div>
<div class="stat-val">84.2%</div>
<div class="card-title">고형암 종양 체적 감소</div>
<div class="card-desc">췌장암/간암 PDX 마우스 모델 실증</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">02</div>
<div class="stat-val">6 개월</div>
<div class="card-title">리드 후보물질 발굴 기간</div>
<div class="card-desc">전통적 방식(36개월) 대비 83% 단축</div>
</div>
<div class="main-card" style="text-align: center; padding: 24px 18px;">
<div class="circle-badge" style="margin: 0 auto 8px auto;">03</div>
<div class="stat-val">0 건</div>
<div class="card-title">사이토카인 방출 증후군</div>
<div class="card-desc">정밀 표적화로 중대 독성 부작용 제로</div>
</div>
</div>
</div>

<!-- note: [임상 지표] 84.2%의 종양 감소율과 중대 독성 0건의 안전성을 확인했습니다. -->

---

<!-- 4. Closing -->
<div>
<div class="slide-header">
<span class="kicker">CONCLUSION & PARTNERSHIP</span>
<h2>정밀 항암 신약 개발의 새로운 표준</h2>
<p class="lead">글로벌 임상 진입을 위한 제약사 공동 연구 및 라이선스 아웃을 추진합니다.</p>
</div>

<div class="closing-box">
<div class="closing-left">
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #0F172A; margin-bottom: 2px;">01. 임상 1상 IND 신청 준비 완료</div>
<div class="card-desc">식약처 및 미국 FDA 사전 미팅 완료, 2027년 임상 1상 개시 예정</div>
</div>
<div class="main-card" style="border-left: 3.5px solid #0E7490;">
<div style="font-size: 0.92rem; font-weight: 800; color: #0F172A; margin-bottom: 2px;">02. 빅파마 공동 연구 계약 체결</div>
<div class="card-desc">글로벌 톱 10 제약사 2곳과 기술 이전 및 물질 검증 파트너십 가동</div>
</div>
<div class="main-card" style="border-left: 3.5px solid var(--accent-1);">
<div style="font-size: 0.92rem; font-weight: 800; color: #0F172A; margin-bottom: 2px;">03. 단일 세포 임상 데이터베이스 확장</div>
<div class="card-desc">누적 1,000만 단일 세포 전사체 데이터베이스를 바이오 생태계에 공유</div>
</div>
</div>

<div class="qa-box">
<div>
<div class="qa-kicker">CLINICAL Q&A</div>
<div class="qa-title" style="color: #0F172A;">Q & A</div>
<div class="qa-desc">연구 데이터 및 기술 이전 논의를 환영합니다.</div>
</div>
<div class="qa-meta-border">
<div class="qa-meta-label">RESEARCH HUB</div>
<div class="qa-meta-val-blue">precision-bio.org</div>
<div class="qa-meta-label">CLINICAL CONTACT</div>
<div class="qa-meta-val-white" style="color: #0F172A;">clinical@precision-bio.org</div>
</div>
</div>
</div>
</div>

<!-- note: [마무리] 경청해 주셔서 감사합니다. 질문을 받겠습니다. -->
