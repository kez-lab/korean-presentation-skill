# Korean Presentation Skill: Master Layout Catalog (8대 핵심 컴포넌트)

본 문서는 AI 에이전트가 완벽한 프레젠테이션 슬라이드를 생성할 때 즉시 조합하여 사용할 수 있는 **검증된 8대 프로덕션 레이아웃 컴포넌트 레시피**를 제공합니다.

---

## 1. Hero & Cover Layout (3-Chip 글래스모피즘 표지)
- **적용 위치**: 슬라이드 01
- **레이아웃 특징**: `height: 100%; display: flex; flex-direction: column; justify-content: space-between;` 상하 완벽 대칭, 3-Chip 글래스 메타데이터 그리드

```html
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
  <div>
    <span class="kicker">CATEGORY BADGE</span>
    <h1>
      대제목 1행 의미 단위 줄바꿈<br>
      <span class="highlight-blue">핵심 강조 키워드 2행 완결</span>
    </h1>
    <p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
      슬라이드의 핵심 가치와 비전을 요약하는 1~2줄 서브타이틀
    </p>
  </div>

  <div class="cover-meta-grid">
    <div class="cover-meta-chip">
      <div class="meta-chip-label">PRESENTER & TEAM</div>
      <div class="meta-chip-val">홍길동 • Platform Lead Architect</div>
    </div>
    <div class="cover-meta-chip">
      <div class="meta-chip-label">SESSION & DATE</div>
      <div class="meta-chip-val">Tech Architecture • 2026.08</div>
    </div>
    <div class="cover-meta-chip" style="border-color: rgba(56, 189, 248, 0.35);">
      <div class="meta-chip-label" style="color: #00F0FF;">REPOSITORY & DOCS</div>
      <div class="meta-chip-val" style="color: #38BDF8;">github.com/company/repo</div>
    </div>
  </div>
</div>
```

---

## 2. Asymmetric Split Agenda (32:68 비대칭 2단 목차)
- **적용 위치**: 슬라이드 02
- **레이아웃 특징**: 좌측 고정 너비(260px) 타이틀 및 장식 라인 + 우측 2x2 글래스모피즘 카드

```html
<div class="split-box">
  <div class="split-left">
    <div>
      <span class="kicker">AGENDA</span>
      <div class="split-title">CONTENTS</div>
      <p class="lead" style="font-size: 0.88rem; margin-top: 8px; margin-bottom: 0; color: #94A3B8; line-height: 1.5;">
        문제 분석부터<br>
        실전 도입까지 4단계
      </p>
    </div>

    <div style="margin-top: 24px;">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
        <div style="width: 8px; height: 8px; border-radius: 50%; background: #6366F1;"></div>
        <div style="height: 2px; width: 60px; background: rgba(99, 102, 241, 0.5);"></div>
      </div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
        <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-blue);"></div>
        <div style="height: 2px; width: 100px; background: rgba(56, 189, 248, 0.6);"></div>
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
      <div class="card-title">챕터 1 제목</div>
      <div class="card-desc">• 3줄 요약 불릿</div>
    </div>
    <div class="glass-card">
      <div class="circle-badge badge-purple">02</div>
      <div class="card-title">챕터 2 제목</div>
      <div class="card-desc">• 3줄 요약 불릿</div>
    </div>
    <div class="glass-card">
      <div class="circle-badge badge-blue">03</div>
      <div class="card-title">챕터 3 제목</div>
      <div class="card-desc">• 3줄 요약 불릿</div>
    </div>
    <div class="glass-card">
      <div class="circle-badge badge-green">04</div>
      <div class="card-title">챕터 4 제목</div>
      <div class="card-desc">• 3줄 요약 불릿</div>
    </div>
  </div>
</div>
```

---

## 3. 3-Card High-Contrast Breakdown (3단 분석 카드)
- **적용 위치**: 문제 제기, 핵심 가치, 3대 필러
- **레이아웃 특징**: 상단 3.5px 컬러 보더 + 24px 네온 서클 뱃지 + 고대비 본문

```html
<div>
  <div class="slide-header-center">
    <span class="kicker kicker-red">PROBLEM STATEMENT</span>
    <h2>상위 핵심 메시지 한 줄 선언</h2>
    <p class="lead" style="margin-bottom: 0;">상세 배경 및 문제의 본질을 설명하는 리드 문구</p>
  </div>

  <div class="grid-3">
    <div class="glass-card border-top-red">
      <div class="circle-badge badge-red">01</div>
      <div class="card-title">위험 요인 1</div>
      <div class="card-desc">설명 문장 (외톨이 단어 방지)</div>
    </div>
    <div class="glass-card border-top-yellow">
      <div class="circle-badge badge-yellow">02</div>
      <div class="card-title">위험 요인 2</div>
      <div class="card-desc">설명 문장 (외톨이 단어 방지)</div>
    </div>
    <div class="glass-card border-top-blue">
      <div class="circle-badge badge-blue">03</div>
      <div class="card-title">위험 요인 3</div>
      <div class="card-desc">설명 문장 (외톨이 단어 방지)</div>
    </div>
  </div>
</div>
```

---

## 4. Horizontal Pipeline & 2-Col Roles (파이프라인 & 역할 분담)
- **적용 위치**: 아키텍처 플로우, GTM 퍼널, 데이터 스트리밍

```html
<div>
  <div class="slide-header">
    <span class="kicker">PIPELINE FLOW</span>
    <h2>비동기 처리 파이프라인 및 아키텍처 흐름</h2>
    <p class="lead" style="margin-bottom: 0;">단계별 데이터 이동 및 컴포넌트 간 상호작용</p>
  </div>

  <div class="flow-row">
    <div class="flow-step">
      <div style="font-size: 0.75rem; color: var(--accent-blue); font-weight: 800;">STEP 1</div>
      <div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">입력 접수</div>
    </div>
    <div class="flow-arr">➔</div>
    <div class="flow-step">
      <div style="font-size: 0.75rem; color: #818CF8; font-weight: 800;">STEP 2</div>
      <div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">이벤트 릴레이</div>
    </div>
    <div class="flow-arr">➔</div>
    <div class="flow-step" style="background: rgba(30, 27, 75, 0.85); border: 1.5px solid #6366F1;">
      <div style="font-size: 0.75rem; color: #A5B4FC; font-weight: 800;">STEP 3</div>
      <div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">상태 전이</div>
    </div>
    <div class="flow-arr">➔</div>
    <div class="flow-step">
      <div style="font-size: 0.75rem; color: #34D399; font-weight: 800;">STEP 4</div>
      <div style="font-size: 0.94rem; font-weight: 700; color: #FFF; margin-top: 2px;">작업 완료</div>
    </div>
  </div>

  <div class="grid-2">
    <div class="glass-card" style="padding: 16px 20px;">
      <div style="font-size: 0.9rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 4px;">✓ 컴포넌트 A의 책임</div>
      <div style="font-size: 0.78rem; color: var(--text-light); line-height: 1.5;">설명 문구</div>
    </div>
    <div class="glass-card" style="padding: 16px 20px;">
      <div style="font-size: 0.9rem; font-weight: 800; color: #34D399; margin-bottom: 4px;">✓ 컴포넌트 B의 책임</div>
      <div style="font-size: 0.78rem; color: var(--text-light); line-height: 1.5;">설명 문구</div>
    </div>
  </div>
</div>
```

---

## 5. Comparative Evaluation Matrix (비교 평가 매트릭스)
- **적용 위치**: 벤치마크, Before/After, 유닛 이코노믹스

```html
<div>
  <div class="slide-header-center">
    <span class="kicker">BENCHMARK</span>
    <h2>기존 방식 대비 정량적 성능 개선 매트릭스</h2>
    <p class="lead" style="margin-bottom: 0;">객관적인 실험 데이터 및 핵심 지표 대조</p>
  </div>

  <div class="grid-2">
    <div class="glass-card" style="padding: 20px 22px;">
      <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-blue); margin-bottom: 6px;">✓ 속도 및 반응성 지표</div>
      <ul class="clean-points" style="font-size: 0.78rem;">
        <li>초기 지연시간(TTFT): <strong>140ms ➔ 42ms (68% 단축)</strong></li>
        <li>초당 처리량: <strong>11.2 ➔ 38.5 tokens/s (3.4배 향상)</strong></li>
        <li>최대 컨텍스트 길이: <strong>8K 토큰 무손실 지원</strong></li>
      </ul>
    </div>

    <div class="glass-card" style="padding: 20px 22px;">
      <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-emerald); margin-bottom: 6px;">✓ 자원 효율성 지표</div>
      <ul class="clean-points" style="font-size: 0.78rem;">
        <li>메모리 점유율: <strong>5.4GB ➔ 1.8GB (66% 절감)</strong></li>
        <li>정확도 벤치마크: <strong>88.4점 ➔ 94.2점 달성</strong></li>
        <li>배터리 소모율: <strong>시간당 4.2% 수준 극저치 유지</strong></li>
      </ul>
    </div>
  </div>
</div>
```

---

## 6. Big Stats Highlight (대형 KPI 지표)
- **적용 위치**: 핵심 성과, 투자 트랙션, SLA

```html
<div>
  <div class="slide-header-center">
    <span class="kicker">KEY METRICS</span>
    <h2>2026년 달성 핵심 성과 지표</h2>
    <p class="lead" style="margin-bottom: 0;">객관적 수치로 증명하는 독보적인 성장세</p>
  </div>

  <div class="grid-3">
    <div class="glass-card border-top-yellow" style="text-align: center; padding: 22px 18px;">
      <div class="circle-badge badge-yellow" style="margin: 0 auto 6px auto;">01</div>
      <div class="stat-val highlight-yellow">$12.5M</div>
      <div class="card-title">연간 반복 매출 (ARR)</div>
      <div class="card-desc">북미/일본 엔터프라이즈 120개사 확보</div>
    </div>
    <div class="glass-card border-top-blue" style="text-align: center; padding: 22px 18px;">
      <div class="circle-badge badge-blue" style="margin: 0 auto 6px auto;">02</div>
      <div class="stat-val highlight-cyan">142%</div>
      <div class="card-title">순매출 유지율 (NRR)</div>
      <div class="card-desc">부서 확장 및 크로스셀 파이프라인 가동</div>
    </div>
    <div class="glass-card border-top-green" style="text-align: center; padding: 22px 18px;">
      <div class="circle-badge badge-green" style="margin: 0 auto 6px auto;">03</div>
      <div class="stat-val highlight-green">28.4%</div>
      <div class="card-title">목표 영업이익률</div>
      <div class="card-desc">운영 자동화 기반 고수익성 모델 완성</div>
    </div>
  </div>
</div>
```

---

## 7. Quote & Paradigm Shift (중앙 집중형 인용구)
- **적용 위치**: 문제 본질 전환, 철학 선언

```html
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
      프레임워크의 핵심 아키텍처 철학
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 32px; color: var(--text-light); font-size: 0.9rem;">
    <span>✓ <strong>상호 배타적 단계 정의</strong></span>
    <span>✓ <strong>허용된 이벤트만 처리</strong></span>
    <span>✓ <strong>외부 작업 격리</strong></span>
  </div>
</div>
```

---

## 8. Executive Closing & Q&A Hub (결론 및 Q&A 허브)
- **적용 위치**: 슬라이드 마지막 장
- **레이아웃 특징**: 좌측 3대 핵심 요약(60%) + 우측 Q&A 및 공식 링크/컨택트(40%)

```html
<div>
  <div class="slide-header" style="margin-bottom: 16px;">
    <span class="kicker">SUMMARY & NEXT STEPS</span>
    <h2>핵심 요약 및 질의응답 (Q&A)</h2>
    <p class="lead" style="margin-bottom: 0;">슬라이드 핵심 메시지를 마무리하고 다음 액션을 안내합니다.</p>
  </div>

  <div class="closing-box">
    <div class="closing-left">
      <div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
        <div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 첫 번째 핵심 요약</div>
        <div class="card-desc">간결하고 명확한 설명 문장</div>
      </div>
      <div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-yellow);">
        <div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 두 번째 핵심 요약</div>
        <div class="card-desc">간결하고 명확한 설명 문장</div>
      </div>
      <div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-purple);">
        <div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. 세 번째 핵심 요약</div>
        <div class="card-desc">간결하고 명확한 설명 문장</div>
      </div>
    </div>

    <div class="qa-box">
      <div>
        <div class="qa-kicker">OPEN FOR DISCUSSION</div>
        <div class="qa-title">Q & A</div>
        <div class="qa-desc">궁금하신 점이나 도입 논의를 환영합니다.</div>
      </div>
      <div class="qa-meta-border">
        <div class="qa-meta-label">GITHUB & DOCS HUB</div>
        <div class="qa-meta-val-blue">github.com/company/repo</div>
        <div class="qa-meta-label">CONTACT</div>
        <div class="qa-meta-val-white">presenter@company.com</div>
      </div>
    </div>
  </div>
</div>
```
