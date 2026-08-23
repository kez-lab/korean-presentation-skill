---
name: presentation-master
description: >-
  Creates high-quality, beautifully designed PowerPoint presentations (.pptx), print-ready PDFs (.pdf),
  and verified slide images (.png) tailored to any topic.
  Applies consulting-grade action titles, UI/UX methodologies (Gestalt, 8pt Grid, 60-30-10 Color Rule, Asymmetric Splits, Big Stats),
  Visual Center Equilibrium Gravity (prevents top-heavy clutter, balances vertical padding),
  Harmonious Inter-Component Spacing & Height Budgeting,
  Korean typography optimization (-0.025em letter-spacing, keep-all, orphan prevention),
  and complete professional speaker notes.
---

# Presentation Master: Pro UI/UX Slide Deck Engine

`presentation-master`는 **글로벌 UI/UX 디자인 방법론(게슈탈트 인지 심리학, 8pt 그리드, 60-30-10 컬러 룰)**, **수직 중앙 밸런스(Visual Center Equilibrium - 상단 쏠림 방지)**, **조화로운 컴포넌트 간 여백 및 비중 분배(Harmonious Modular Spacing)**, **한국어 타이포그래피 최적화**를 철저히 준수하여 프로 디자이너 수준의 극상 프레젠테이션을 제작하는 Antigravity 전용 스킬입니다.

---

## 🏛️ 엄격한 UI/UX & 레이아웃 거버넌스

1. **상단 쏠림 방지 및 수직 중앙 균형 (Visual Center Equilibrium)**:
   - 슬라이드 캔버스에서 무비판적으로 `justify-content: flex-start`를 적용하여 모든 요소가 상단 천장에 붙는 현상(Top-Heavy Clutter)을 원천 금지합니다.
   - 슬라이드 기본 수직 정렬을 **`justify-content: center;`**로 설정하여 헤더와 본문 덩어리가 슬라이드 정중앙에 위치하도록 상하 여백(Breathing Zone)을 1:1 대칭으로 유지합니다.

2. **계층 간 조화로운 간격 시스템 (Harmonious Modular Spacing)**:
   - **헤더와 본문 사이 간격**: `margin-bottom: 28px ~ 36px`로 충분한 시각적 호흡 분리.
   - **헤더 내부 간격**: Kicker 배지와 Title 사이 `margin-bottom: 10px`, Title과 Lead 사이 `margin-bottom: 8px`.
   - **카드 내부 패딩**: `padding: 22px 24px`로 텍스트가 꽉 차서 답답하지 않은 쾌적한 여백 제공.
   - **그리드 간격**: `gap: 16px ~ 20px`로 요소 간 명확한 구분선 형성.

3. **시각적 비중 & 비대칭 분할 (Proportions & Asymmetric Split)**:
   - 목차 슬라이드 등에서 좌측 28% (제목 + 서브타이틀 + 인포그래픽 노드) : 우측 72% (2x2 카드 그리드) 분할과 48px 이상의 안전 Gutter를 유지하여 클리핑과 겹침을 0%로 통제합니다.

4. **한국어 타이포그래피 최적화 (Korean Typography)**:
   - **음수 자간 (`letter-spacing: -0.025em`)**: 글자 간 응집력과 가독성 극대화.
   - **어절 보존 (`word-break: keep-all;`)**: 단어가 음절 중간에서 쪼개지지 않음.
   - **외톨이 조사 방지**: 문장 끝 조사가 홀로 줄바꿈되지 않도록 의미 단위 줄바꿈.
   - **모듈러 행간**: 타이틀 `1.28`, 본문 `1.55`.

5. **고대비 컬러 매트릭스 (WCAG AAA 준수)**:
   - 60% 딥 다크 캔버스(`radial-gradient` + `#0A0E17`), 30% 글래스모피즘 표면(`rgba(18, 24, 38, 0.95)`), 10% 네온 액센트(시안, 옐로우, 퍼플, 그린).
   - 본문 텍스트 `#E2E8F0` ~ `#FFFFFF`로 저대비 흐릿함 100% 원천 차단.

6. **전문 발표 대본(Speaker Notes) 필수 수록**:
   - 모든 슬라이드에 `<!-- note: ... -->` 구문으로 구어체 발표 대본 작성.

---

## 🛠️ 컴파일 & 자체 검증 파이프라인

```bash
# Marp Compiler 실행 (PPTX + PDF + 1920x1080 PNG 이미지 일괄 동시 생성)
node ~/.gemini/config/skills/presentation-master/scripts/marp_compiler.js <input.md> <output_dir> [base_name]
```

### 📚 참조 레퍼런스 문서
- [시각적 중앙 밸런스, 컴포넌트 여백 및 상단 쏠림 방지 가이드](references/gravity_spacing_occlusion_guide.md)
- [한국어 타이포그래피, 여백 및 고대비 가이드](references/korean_typography_spacing_guide.md)
- [UI/UX 방법론 및 인지 심리학 원칙](references/ui_ux_methodologies.md)
- [완성형 레이아웃 및 컴포넌트 카탈로그](references/layout_catalog.md)
