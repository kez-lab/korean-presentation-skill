# 한국어 타이포그래피, 여백 및 고대비 가이드 (Korean Typography & Spacing Standard)

본 문서는 AI 에이전트가 한국어 및 글로벌 슬라이드를 작성할 때 준수해야 하는 **극상 수준의 타이포그래피, 어절 보존, 행간/자간, 수직 중앙 균형 및 컬러 매트릭스 거버넌스**를 정의합니다.

---

## 1. 한국어 타이포그래피 최적화 4대 원칙

### 1.1 음수 자간 (`letter-spacing: -0.025em`)
- 한글 폰트는 글리프 구조상 정방형 박스 구조를 가지므로 기본 자간(0)에서 텍스트가 헐겁게 벌어져 가독성이 저하됩니다.
- **표준 규격**: 모든 섹션 및 카드에 반드시 `letter-spacing: -0.025em;` (타이틀은 `-0.03em ~ -0.035em`)을 적용하여 고밀도 응집력을 확보합니다.

### 1.2 어절 보존 (`word-break: keep-all;`)
- 한글 단어가 음절 중간(예: `아키텍/처`)에서 어색하게 줄바꿈되지 않도록 `word-break: keep-all;`을 전역 선언합니다.

### 1.3 외톨이 글자/조사 고립 방지 (Orphan Protection)
- 문장 끝의 단어(예: `중`, `등`)나 조사(`을/를`, `이/가`, `은/는`, `의`, `에`)가 다음 줄에 1~2글자로 홀로 떨어지는 현상을 원천 방지합니다.
- **해결 패턴**:
  - H1 대제목은 글자 수에 맞추어 `2.35rem ~ 2.45rem`로 설정하고 의미 단위 `<br>`로 2줄 완결.
  - 본문 카드는 2~3줄 내에서 문맥이 완결되도록 어휘를 다듬음 (예: `스케일업 진행 중` ➔ `기반 고속 스케일업 달성`).

### 1.4 모듈러 폰트 스케일 (Typography Hierarchy)
- **H1 메인 타이틀**: `2.35rem ~ 2.45rem` (font-weight: 800~900, line-height: 1.25~1.28)
- **H2 섹션 타이틀**: `1.62rem ~ 1.68rem` (font-weight: 800~900, line-height: 1.3~1.32)
- **리드 문구 (.lead)**: `0.96rem ~ 0.98rem` (line-height: 1.5, color: `#94A3B8`)
- **카드 타이틀**: `0.98rem ~ 1.05rem` (font-weight: 800)
- **카드 본문**: `0.78rem ~ 0.82rem` (line-height: 1.55, color: `#94A3B8` ~ `#E2E8F0`)
- **빅 스탯 수치**: `2.8rem ~ 3.2rem` (font-weight: 900, line-height: 1.0)

---

## 2. 레이아웃 & 컴포넌트 여백 표준 (Spacing Budgeting)

### 2.1 Visual Center Equilibrium (수직 중앙 균형)
- 슬라이드 캔버스(1280×720)의 가용 높이(640px) 내에서 콘텐츠가 상단에 쏠리지 않도록 `justify-content: center`를 기본으로 채택합니다.
- 표지와 결론 CTA 슬라이드는 상하 양끝 배치를 위해 `style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;"`를 부여합니다.

### 2.2 8pt 모듈러 스페이싱
- **슬라이드 외곽 패딩**: `padding: 44px 58px`
- **헤더-본문 분리 마진**: `margin-bottom: 24px`
- **카드 내부 패딩 (Breathing Room)**: `padding: 20px 22px` 또는 `22px 24px`
- **그리드 간격 (Gutter)**: `gap: 16px ~ 18px`

### 2.3 비대칭 2단 분할 (32:68 Asymmetric Split) 안전 규칙
- 좌측 타이틀 영역 너비: `260px` (flex-shrink: 0)
- 좌우 안전 여백(Gutter): `gap: 48px`
- 우측 2x2 카드 그리드: `flex-grow: 1`
- ➔ 좌측 타이틀 단어(`CONTENTS`)가 우측 카드에 의해 잘리는 클리핑 버그 0% 보장.

---

## 3. 다크 글래스모피즘 & 24px 네온 서클 뱃지 시스템

```css
/* 24px 마이크로 네온 서클 뱃지 */
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
.badge-cyan   { background: rgba(0, 240, 255, 0.15); color: #00F0FF; border: 1px solid rgba(0, 240, 255, 0.4); }
.badge-purple { background: rgba(167, 139, 250, 0.15); color: #A78BFA; border: 1px solid rgba(167, 139, 250, 0.4); }
.badge-blue   { background: rgba(56, 189, 248, 0.15); color: #38BDF8; border: 1px solid rgba(56, 189, 248, 0.4); }
.badge-green  { background: rgba(52, 211, 153, 0.15); color: #34D399; border: 1px solid rgba(52, 211, 153, 0.4); }
.badge-gold   { background: rgba(245, 158, 11, 0.18); color: #F59E0B; border: 1px solid rgba(245, 158, 11, 0.4); }

/* 상단 3.5px 컬러 보더 */
.border-top-cyan   { border-top: 3.5px solid #00F0FF !important; }
.border-top-purple { border-top: 3.5px solid #A78BFA !important; }
.border-top-blue   { border-top: 3.5px solid #38BDF8 !important; }
.border-top-green  { border-top: 3.5px solid #34D399 !important; }
.border-top-gold   { border-top: 3.5px solid #F59E0B !important; }
```

---

## 4. 메타데이터 바 수평 정렬 규칙 (Meta-Bar)

Marp 마크다운 파서가 `<div>` 내부 줄바꿈을 문단(`<p>`)으로 치환하는 것을 방지하기 위해, 한 줄 메타데이터 바는 다음 클래스 구조를 준수합니다:

```html
<div class="meta-bar">
  <div class="meta-items">
    <span>작성자: Backend Platform Team</span>
    <span>일자: 2026.08</span>
    <span>분류: System Architecture</span>
  </div>
  <div class="meta-brand">github.com/company/architecture</div>
</div>
```

---

## 5. 첫장(Cover Hero) 및 마지막 장(Closing Q&A Hub) 프리미엄 UX 표준

### 5.1 첫장 표지: 3-Chip 글래스모피즘 메타데이터 그리드 (`.cover-meta-grid`)
단순 텍스트 나열이나 이모지 사용을 금지하고, 3개 분할 글래스 카드 그리드로 발표자, 세션, 자료 링크를 위계화합니다.

```html
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
  <div>
    <span class="kicker">ENGINEERING TECH SESSION</span>
    <h1>
      대제목 1행 의미 단위 줄바꿈<br>
      <span class="highlight-blue">핵심 키워드 강조 2행 완결</span>
    </h1>
    <p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
      슬라이드의 핵심 가치와 비전을 요약하는 1~2줄 서브타이틀
    </p>
  </div>

  <div class="cover-meta-grid">
    <div class="cover-meta-chip">
      <div class="meta-chip-label">PRESENTER & TEAM</div>
      <div class="meta-chip-val">홍길동 • Backend Platform Lead</div>
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

### 5.2 마지막 장: Closing & Q&A Hub 비대칭 분할 (`.closing-box`)
발표 요약 3대 테이크어웨이(좌측 60%)와 Q&A / 공식 링크 / 컨택트(우측 40%)를 한 화면에서 완벽하게 제공합니다.

```html
<div>
  <div class="slide-header" style="margin-bottom: 16px;">
    <span class="kicker">SUMMARY & NEXT STEPS</span>
    <h2>핵심 요약 및 질의응답 (Q&A)</h2>
    <p class="lead" style="margin-bottom: 0;">슬라이드 핵심 메시지를 마무리하고 다음 액션을 안내합니다.</p>
  </div>

  <div class="closing-box">
    <!-- Left: 3 Key Takeaways -->
    <div class="closing-left">
      <div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-blue);">
        <div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">01. 상호 배타적 Phase 정의</div>
        <div class="card-desc">유효하지 않은 상태 조합을 컴파일 타임에 원천 차단</div>
      </div>
      <div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-yellow);">
        <div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">02. 부작용(Side-Effect) Command 격리</div>
        <div class="card-desc">전이 판단과 외부 작업을 분리하여 0ms 단위 테스트 달성</div>
      </div>
      <div class="glass-card" style="padding: 12px 16px; border-left: 3.5px solid var(--accent-purple);">
        <div style="font-size: 0.92rem; font-weight: 800; color: #FFF; margin-bottom: 2px;">03. Mermaid 다이어그램 자동 동기화</div>
        <div class="card-desc">코드 기반 상태 다이어그램으로 설계와 구현의 100% 일치 보장</div>
      </div>
    </div>

    <!-- Right: Q&A and Contact Hub -->
    <div class="qa-box">
      <div>
        <div class="qa-kicker">OPEN FOR DISCUSSION</div>
        <div class="qa-title">Q & A</div>
        <div class="qa-desc">궁금하신 점이나 아키텍처 도입 논의를 환영합니다.</div>
      </div>
      <div class="qa-meta-border">
        <div class="qa-meta-label">GITHUB & DOCS HUB</div>
        <div class="qa-meta-val-blue">github.com/company/repo</div>
        <div class="qa-meta-label">CONTACT</div>
        <div class="qa-meta-val-white">engineer@company.com</div>
      </div>
    </div>
  </div>
</div>
```
