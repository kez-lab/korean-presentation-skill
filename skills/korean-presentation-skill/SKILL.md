---
name: korean-presentation-skill
description: >-
  Use this skill any time a presentation, slide deck, pitch deck, .pptx, .potx, or .pdf is involved in any way —
  as input, output, or both. This includes: creating high-resolution, design-governed Korean and global presentations (.pptx, .pdf, .png);
  reading, extracting text, or analyzing slide layouts and speaker notes from any existing .pptx file;
  editing and updating existing decks; applying Korean typography optimization (-0.025em letter-spacing, keep-all, orphan protection),
  consulting-grade action titles, UI/UX methodologies (Gestalt, 8pt Grid, 60-30-10 Color Rule, Asymmetric Splits, Big Stats),
  Visual Center Equilibrium Gravity (prevents top-heavy clutter, balances vertical padding),
  Harmonious Inter-Component Spacing & Height Budgeting, and complete professional speaker notes.
---

# Korean Presentation Skill: Unified Pro Slide Deck Engine for AI Agents

`korean-presentation-skill`은 **프레젠테이션 생성(Create), 기존 덱 분석 및 텍스트 추출(Read & Extract), 편집 및 보정(Edit), XML 스키마 및 슬라이드 유효성 검증(Validate)**을 지원하는 엔터프라이즈급 AI 프레젠테이션 통합 스킬입니다.

한국어 환경의 고질적 문제인 **헐거운 자간, 어색한 음절 분절, 외톨이 조사 고립, 상단 쏠림(Top-Heavy Clutter), 복구 오류가 발생하는 손상된 PPTX**를 원천 차단하고, 8대 마스터 레이아웃과 듀얼 엔진(Marp CSS Grid + Native PptxGenJS)을 통해 글로벌 탑티어 수준의 슬라이드를 제작합니다.

---

## 1. 3대 핵심 작업 방식 (Core Operations)

| 작업 유형 | 권장 접근법 (Recommended Approach) | 주요 도구 및 명령어 |
| :--- | :--- | :--- |
| **1. 신규 덱 생성 (Create)** | 마크다운 8대 레이아웃 작성 ➔ Marp 컴파일러 일괄 빌드 (PPTX+PDF+PNG) 또는 PptxGenJS | `node skills/korean-presentation-skill/scripts/marp_compiler.js <file.md>` |
| **2. 기존 덱 읽기 및 추출 (Read)** | PPTX 내부 텍스트, 구조, 스피커 노트를 마크다운으로 즉시 역추출 | `node skills/korean-presentation-skill/scripts/pptx_extractor.js <file.pptx> [out.md]` |
| **3. 무결성 및 스키마 검증 (Validate)** | OOXML 구조, [Content_Types].xml, No-Hash Hex, 차트 바인딩 자동 감사 | `node skills/korean-presentation-skill/scripts/pptx_validator.js <file.pptx>` |

---

## 2. 엄격한 UI/UX & 한국어 타이포그래피 거버넌스

1. **한국어 타이포그래피 최적화 (Korean Typography Standard)**:
   - **음수 자간 (`letter-spacing: -0.025em`)**: 한글 글리프 특유의 헐거운 분산감을 잡고 텍스트 덩어리의 응집력을 극대화합니다.
   - **어절 보존 (`word-break: keep-all;`)**: 한글 단어가 음절 중간에서 어색하게 쪼개지지 않도록 강제합니다.
   - **외톨이 조사 방지**: 문장 끝의 조사("을/를", "이/가", "의", "에")나 1~2글자 단어가 다음 줄에 홀로 떨어지지 않도록 의미 단위 줄바꿈을 적용합니다.
   - **모듈러 행간**: 메인 타이틀 `1.28`, 섹션 제목 `1.32`, 본문 `1.55`.

2. **상단 쏠림 방지 및 수직 중앙 균형 (Visual Center Equilibrium)**:
   - 슬라이드 캔버스(1280×720)에서 무비판적인 `flex-start`로 인한 상단 쏠림(Top-Heavy Clutter)을 원천 금지합니다.
   - 슬라이드 기본 수직 정렬을 **`justify-content: center;`**로 설정하여 헤더와 본문 덩어리가 슬라이드 정중앙에 위치하도록 상하 여백(Breathing Zone)을 1:1 대칭으로 유지합니다.
   - 표지와 결론 슬라이드는 상하 양끝 배치를 위해 `style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;"`를 부여합니다.

3. **다크 글래스모피즘 & 24px 네온 서클 뱃지 시스템**:
   - 60% 딥 다크 캔버스(`radial-gradient` + `#0A0E17`), 30% 글래스모피즘 표면(`rgba(18, 24, 38, 0.95)`), 10% 네온 액센트(시안 `#00F0FF`, 퍼플 `#A78BFA`, 블루 `#38BDF8`, 그린 `#34D399`, 옐로우 `#FACC15`, 레드 `#F87171`).
   - 24px 원형 반투명 네온 서클 뱃지로 시각적 앵커 포인트를 제공합니다.

4. **계층 간 조화로운 간격 시스템 (Harmonious Modular Spacing)**:
   - **헤더와 본문 사이 간격**: `margin-bottom: 24px`로 충분한 시각적 호흡을 분리합니다.
   - **카드 내부 패딩**: `padding: 20px 22px`로 텍스트가 꽉 차지 않고 시원한 여백(Breathing Room)을 제공합니다.
   - **그리드 간격**: `gap: 16px ~ 18px`로 명확한 시각적 구분선을 형성합니다.

5. **첫장 및 마지막 장 프리미엄 UX**:
   - **첫장 (Hero Cover)**: 3-Chip 글래스모피즘 메타데이터 그리드 (`.cover-meta-grid`)를 적용하여 발표자, 세션, 저장소 링크를 배치합니다.
   - **마지막 장 (Closing Hub)**: 3대 핵심 요약(좌측 60%)과 Q&A 및 연락처/자료 허브(우측 40%)의 비대칭 2단 분할 레이아웃을 적용합니다.

6. **전문 발표 대본(Speaker Notes) 필수 수록**:
   - 모든 슬라이드에 `<!-- note: ... -->` 구문으로 구어체 발표 대본을 작성합니다.

---

## 3. CLI 도구 모음 및 실행 예시

```bash
# 1. 신규 덱 생성 (스캐폴더)
node scripts/create_presentation.js --theme <tech|business|light|pitch> --title "제목" --author "발표자" --out deck.md --compile

# 2. 마크다운 컴파일 (PPTX + PDF + 1920x1080 PNG 일괄 동시 생성)
node skills/korean-presentation-skill/scripts/marp_compiler.js <input.md> [output_dir] [base_name]

# 3. 기존 PPTX 내용 및 스피커 노트 마크다운 추출
node skills/korean-presentation-skill/scripts/pptx_extractor.js <input.pptx> [output.md]

# 4. 생성된 PPTX 스키마 무결성 검증
node skills/korean-presentation-skill/scripts/pptx_validator.js <input.pptx>

# 5. 웹 갤러리 뷰어 생성
npm run gallery

# 6. 전체 43개 빌드 자산 전수 무결성 테스트
npm test
```

### 참조 레퍼런스 문서
- [Anthropic 공식 PPTX 스킬 융합 및 듀얼 엔진 가이드](references/anthropic_pptx_skill_synthesis.md)
- [글로벌 AI 에이전트 호환성 가이드 (Claude, Codex, Antigravity, Cursor)](references/agent_compatibility_guide.md)
- [완성형 8대 마스터 레이아웃 카탈로그](references/layout_catalog.md)
- [한국어 타이포그래피, 여백 및 고대비 가이드](references/korean_typography_spacing_guide.md)
- [시각적 중앙 밸런스, 컴포넌트 여백 및 상단 쏠림 방지 가이드](references/gravity_spacing_occlusion_guide.md)
- [UI/UX 방법론 및 인지 심리학 원칙](references/ui_ux_methodologies.md)
- [컬러 & 글래스모피즘 디자인 시스템](references/design_systems.md)
- [5단계 액션 타이틀 스토리텔링 프레임워크](references/storytelling_framework.md)
