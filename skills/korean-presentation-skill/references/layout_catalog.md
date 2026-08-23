# Presentation Master: Pro Layout & Component Catalog

본 문서는 시각적 무게중심(Visual Gravity), 완벽한 여백, 폰트 스케일, 안티 클리핑 규칙을 준수한 **슬라이드 유형별 완성형 레이아웃 레시피**입니다.

---

## 1. Hero & Cover Layout (표지)
* **Visual Gravity**: `gravity-between`
```html
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
  <div>
    <span class="kicker">CATEGORY BADGE</span>
    <h1>메인 타이틀 한 줄을<br><span style="color: var(--accent-blue);">핵심 키워드</span>와 함께 선언</h1>
    <p class="lead">청중이 얻어갈 핵심 가치를 한눈에 보여주는 서브타이틀</p>
  </div>
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.09); border-radius: 12px; padding: 14px 22px; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; gap: 24px; font-size: 0.88rem; color: var(--text-slate);">
      <span>👤 <strong>Presenter / Team</strong></span>
      <span>📅 <strong>2026.08</strong></span>
    </div>
    <div style="color: var(--accent-blue); font-weight: 800; font-size: 0.9rem;">org / repository</div>
  </div>
</div>
```

---

## 2. Asymmetric Agenda Layout (목차)
* **Visual Gravity**: 비대칭 분할 (좌측 28% : 우측 72%, Gutter 36px)
* **Anti-Clipping Rule**: 좌측 제목은 `font-size: 1.6rem ~ 1.7rem`, `white-space: nowrap;`으로 카드 뒤로 숨는 현상 100% 방지.
* **카드 스타일**: 둔탁한 솔리드 컬러 대신 세련된 다크 글래스모피즘 (`var(--card-dark)`) + 미세 컬러 뱃지.
```html
<div class="split-box">
  <div class="split-left">
    <div>
      <span class="kicker">AGENDA</span>
      <div class="split-title">CONTENTS</div>
      <p class="lead" style="font-size: 0.86rem; margin-top: 6px;">전체 4단계 핵심 흐름</p>
    </div>
    <div style="margin-top: 16px;">
      <!-- SVG Connecting Node Dots & Lines -->
    </div>
  </div>
  <div class="split-right">
    <div class="slate-card agenda-card">
      <div class="circle-badge badge-blue">01</div>
      <div class="agenda-title">섹션 제목</div>
      <div class="agenda-desc">• 상세 내용 3줄</div>
    </div>
    <!-- 02, 03, 04 카드 -->
  </div>
</div>
```

---

## 3. Numbered Problem Cards (문제점)
* **Visual Gravity**: `gravity-top`
* **Card Padding**: `padding: 18px 20px`
```html
<div class="grid-3">
  <div class="slate-card card-danger">
    <div style="font-size: 1.3rem; font-weight: 900; color: var(--accent-red); margin-bottom: 2px;">01</div>
    <div style="font-size: 1.05rem; font-weight: 800; margin-bottom: 6px; color: #FFF;">문제점 1</div>
    <div style="font-size: 0.82rem; color: var(--text-light); line-height: 1.5;">설명</div>
  </div>
  <!-- 02, 03 카드 -->
</div>
```

---

## 4. Quote Hero (철학/인용구)
* **Visual Gravity**: `gravity-center`
```html
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
  <div><span class="kicker">PARADIGM SHIFT</span></div>
  <div class="quote-container">
    <div style="font-size: 1.9rem; color: var(--accent-blue); font-weight: 800; line-height: 1.38;">
      “ 핵심 철학 인용구 ”
    </div>
  </div>
  <div style="display: flex; justify-content: center; gap: 32px; font-size: 0.9rem;">
    <span>✓ <strong>포인트 1</strong></span>
  </div>
</div>
```
