---
name: korean-presentation-skill
description: >-
  Creates high-quality, beautifully designed Korean and global PowerPoint presentations (.pptx), print-ready PDFs (.pdf),
  and verified slide images (.png) tailored to any topic.
  Applies Korean typography optimization (-0.025em letter-spacing, keep-all, orphan protection),
  consulting-grade action titles, UI/UX methodologies (Gestalt, 8pt Grid, 60-30-10 Color Rule, Asymmetric Splits, Big Stats),
  Visual Center Equilibrium Gravity (prevents top-heavy clutter, balances vertical padding),
  Harmonious Inter-Component Spacing & Height Budgeting,
  and complete professional speaker notes.
---

# Korean Presentation Skill: Pro UI/UX Slide Deck Engine for AI Agents

`korean-presentation-skill`은 **한국어 타이포그래피 최적화(Pretendard 폰트, -0.025em 음수 자간, word-break: keep-all, 외톨이 조사 고립 방지)**, **글로벌 UI/UX 디자인 방법론(게슈탈트 인지 심리학, 8pt 그리드, 60-30-10 컬러 룰)**, **수직 중앙 밸런스(Visual Center Equilibrium - 상단 쏠림 방지)**, **조화로운 컴포넌트 간 여백 및 비중 분배(Harmonious Modular Spacing)**를 철저히 준수하여 프로 디자이너 수준의 극상 프레젠테이션을 제작하는 Antigravity 전용 AI 에이전트 스킬입니다.

---

## 🏛️ 엄격한 UI/UX & 한국어 타이포그래피 거버넌스

1. **한국어 타이포그래피 최적화 (Korean Typography Standard)**:
   - **음수 자간 (`letter-spacing: -0.025em`)**: 한글 글리프 특유의 헐거운 분산감을 잡고 텍스트 덩어리의 응집력을 극대화.
   - **어절 보존 (`word-break: keep-all;`)**: 한글 단어가 음절 중간에서 어색하게 쪼개지지 않도록 강제.
   - **외톨이 조사 방지**: 문장 끝의 조사("을/를", "이/가", "의", "에")가 다음 줄에 홀로 떨어지지 않도록 의미 단위 줄바꿈 적용.
   - **모듈러 행간**: 메인 타이틀 `1.28`, 섹션 제목 `1.32`, 본문 `1.55`.

2. **상단 쏠림 방지 및 수직 중앙 균형 (Visual Center Equilibrium)**:
   - 슬라이드 캔버스(1280×720)에서 무비판적인 `flex-start`로 인한 상단 쏠림(Top-Heavy Clutter)을 원천 금지합니다.
   - 슬라이드 기본 수직 정렬을 **`justify-content: center;`**로 설정하여 헤더와 본문 덩어리가 슬라이드 정중앙에 위치하도록 상하 여백(Breathing Zone)을 1:1 대칭으로 유지합니다.

3. **다크 글래스모피즘 & 24px 네온 서클 뱃지 시스템**:
   - 60% 딥 다크 캔버스(`radial-gradient` + `#0A0E17`), 30% 글래스모피즘 표면(`rgba(18, 24, 38, 0.95)`), 10% 네온 액센트(시안 `#00F0FF`, 퍼플 `#A78BFA`, 블루 `#38BDF8`, 그린 `#34D399`, 옐로우 `#FACC15`, 레드 `#F87171`).
   - 24px 원형 반투명 네온 서클 뱃지로 시각적 앵커 포인트 제공.

4. **계층 간 조화로운 간격 시스템 (Harmonious Modular Spacing)**:
   - **헤더와 본문 사이 간격**: `margin-bottom: 24px ~ 28px`로 충분한 시각적 호흡 분리.
   - **카드 내부 패딩**: `padding: 20px 22px`로 텍스트가 꽉 차지 않고 시원한 여백(Breathing Room) 제공.
   - **그리드 간격**: `gap: 16px ~ 20px`로 명확한 시각적 구분선 형성.

5. **전문 발표 대본(Speaker Notes) 필수 수록**:
   - 모든 슬라이드에 `<!-- note: ... -->` 구문으로 구어체 발표 대본 작성.

---

## 🛠️ 컴파일 & 자체 검증 파이프라인

```bash
# Marp Compiler 실행 (PPTX + PDF + 1920x1080 PNG 이미지 일괄 동시 생성)
node skills/korean-presentation-skill/scripts/marp_compiler.js <input.md> <output_dir> [base_name]
```

### 📚 참조 레퍼런스 문서
- [한국어 타이포그래피, 여백 및 고대비 가이드](references/korean_typography_spacing_guide.md)
- [시각적 중앙 밸런스, 컴포넌트 여백 및 상단 쏠림 방지 가이드](references/gravity_spacing_occlusion_guide.md)
- [UI/UX 방법론 및 인지 심리학 원칙](references/ui_ux_methodologies.md)
- [완성형 레이아웃 및 컴포넌트 카탈로그](references/layout_catalog.md)
- [컬러 & 글래스모피즘 디자인 시스템](references/design_systems.md)
- [5단계 액션 타이틀 스토리텔링 프레임워크](references/storytelling_framework.md)
