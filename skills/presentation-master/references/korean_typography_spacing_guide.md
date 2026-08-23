# Korean Typography, Spacing & Color Harmony Guide

본 문서는 한국어 프레젠테이션 제작 시 발생하는 **텍스트 겹침, 줄바꿈 단어 잘림, 저대비 가독성 저하, 답답한 카드 여백** 문제를 근본적으로 해결하기 위한 표준 가이드라인입니다.

---

## 1. 한국어 타이포그래피 4대 원칙 (Korean Typography Rules)

한글은 자모가 결합된 정방형 글리프 특성을 가지므로, 영문 기본 설정을 그대로 사용하면 글자가 흩어져 보이고 가독성이 떨어집니다.

1. **음수 자간 (Letter-spacing: -0.02em ~ -0.03em)**:
   - 한글 제목과 본문 모두에 `-0.02em`에서 `-0.03em`의 미세한 음수 자간을 적용하여 글자의 응집력과 가독성을 극대화합니다.
2. **어절 보존 (word-break: keep-all)**:
   - `word-break: keep-all;`을 전역 적용하여 단어가 자모나 음절 중간에서 끊어지지 않고, 온전한 단어 단위로 줄바꿈되도록 합니다.
3. **외톨이 조사 방지 (Preventing Orphan Particles)**:
   - 문장 끝의 조사("은/는", "이/가", "을/를")나 짧은 단어가 홀로 다음 줄로 넘어가지 않도록, 의미 단위로 `<br>` 줄바꿈을 수동 배치합니다.
4. **모듈러 행간 (Line-height Modular Ratio)**:
   - **대형 타이틀 (H1/H2)**: `line-height: 1.25 ~ 1.3;` (너무 넓으면 제목이 흩어짐)
   - **본문 및 리스트 (Body/List)**: `line-height: 1.55 ~ 1.65;` (충분한 시선 이동 공간 확보)
   - **서브 리드인 (Lead-in)**: `line-height: 1.4 ~ 1.5;`

---

## 2. 텍스트 겹침 & 클리핑 원천 방지 (Anti-Overlap System)

1. **상대 단위와 유연한 높이 (Flexible Heights)**:
   - 카드와 컨테이너에 고정 픽셀 높이(`height: 200px`)를 주는 대신, `min-height` 또는 `flex: 1`과 내부 `padding`을 사용하여 텍스트 길이에 따라 자연스럽게 늘어나도록 합니다.
2. **Kicker 배지와 제목 사이 간격**:
   - Kicker 뱃지 하단에 반드시 `margin-bottom: 8px ~ 12px;`을 부여하여 제목 텍스트와 절대 겹치지 않도록 보호합니다.
3. **Flexbox 자동 축소 방지 (flex-shrink: 0)**:
   - 고유 너비를 가져야 하는 요소(예: 좌측 30% 타이틀 영역, 숫자 배지, 아이콘)에는 반드시 `flex-shrink: 0;`을 선언하여 내용물이 찌그러지지 않게 합니다.

---

## 3. 카드 패딩 & 8pt 여백 시스템 (Card Padding & Spacing)

프레젠테이션의 고급스러움은 **여백(Breathing Room)**에서 나옵니다. 카드가 텍스트로 꽉 차서 답답해 보이지 않도록 넉넉한 내부 여백을 적용합니다.

```
┌──────────────────────────────────────────────────────────┐
│ Slide Canvas Padding: 42px 56px (Safe Margins)           │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Card Container                                     │  │
│  │ Padding: 20px 24px (Large) / 16px 20px (Standard) │  │
│  │                                                    │  │
│  │  [Badge / Tag]                                     │  │
│  │  ↕ Margin-bottom: 8px                              │  │
│  │  [Card Header / Title]                             │  │
│  │  ↕ Margin-bottom: 10px                             │  │
│  │  [Body Text / Point List]                          │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ↔ Grid Gap: 16px ~ 20px                                 │
└──────────────────────────────────────────────────────────┘
```

* **슬라이드 외곽 안전 여백**: `padding: 40px 56px`
* **카드 내부 패딩**: `padding: 20px 24px` (최소 `16px 20px` 이상 유지)
* **카드 간 Gutter (Gap)**: `gap: 16px` (3단 그리드) / `gap: 20px` (2단 그리드)
* **리스트 항목 간격**: `li { margin-bottom: 6px; }`

---

## 4. 고대비 컬러 매트릭스 (High-Contrast Color Harmony)

WCAG AAA 기준(명도 대비 7:1 이상)을 충족하여 어떤 빔프로젝터나 모니터에서도 선명하게 읽히는 배색을 사용합니다.

### Dark Tech Pro Palette
* **Canvas Background**: `#0A0E17` (Deep Obsidian Dark)
* **Surface / Card Background**: `#131B2E` (Navy Slate) / `rgba(19, 27, 46, 0.85)` 글래스모피즘
* **Card Border**: `1px solid rgba(255, 255, 255, 0.09)` ~ `1.5px solid rgba(56, 189, 248, 0.35)`
* **Primary Text (순백색)**: `#FFFFFF` (100% Contrast)
* **Secondary Text (고대비 슬레이트)**: `#94A3B8` ~ `#CBD5E1` (어두운 회색 절대 금지)
* **Accent Colors**:
  - **Electric Blue**: `#38BDF8` (정보, 메인 액센트, UDF 플로우)
  - **Neon Cyan**: `#00F0FF` (기술적 하이라이트)
  - **Vibrant Yellow**: `#FACC15` (주의, 핵심 가치, 빅 스탯)
  - **Deep Violet / Purple**: `#A78BFA` (아키텍처, 상태)
  - **Emerald Green**: `#34D399` (성공, 결과, 데이터 계층)
  - **Coral Red**: `#F87171` (문제점, 경고)
