---
name: korean-presentation-skill
description: >-
  Use this skill any time a presentation, slide deck, pitch deck, .pptx, .potx, or .pdf is involved in any way —
  as input, output, or both. Dynamically creates tailored, context-aware design themes (colors, canvas mood, visual hierarchy)
  based on the topic domain (Tech, ESG, Luxury, Bio, Fintech, Gaming, SaaS, Academic, Pitch, Public, etc.).
  Applies strict Korean typography optimization (-0.025em letter-spacing, keep-all, orphan protection),
  consulting-grade action titles, 8pt Modular Spacing, Visual Center Equilibrium Gravity (prevents top-heavy clutter),
  height budgeting, and complete professional speaker notes. Also reads, extracts, and validates existing PPTX decks.
---

# Korean Presentation Skill: Dynamic Theme Slide Deck Engine for AI Agents

`korean-presentation-skill`은 정형화된 고정 템플릿에 내용을 억지로 끼워 맞추지 않고, **발표 주제와 도메인(Tech, ESG, Luxury, Bio, Fintech, Gaming, B2B SaaS, Academic, Pitch, Public 등)의 성격에 맞춰 완전히 독창적인 디자인 테마(컬러 팔레트, 캔버스 질감, 카드 스타일, 시각 위계)를 동적으로 창조**하는 차세대 AI 프레젠테이션 엔진입니다.

동시에 한국어 타이포그래피 최적화(-0.025em 자간, 어절 보존, 외톨이 단어 방지)와 8대 마스터 레이아웃, 그리고 PPTX 읽기/생성/검증 툴체인을 통해 무결점 슬라이드를 완성합니다.

---

## 1. 소스 기반 동적 디자인 테마 창조 원칙 (Dynamic Context-Aware Theme Engine)

AI 에이전트는 발표 요청을 받으면 다음 4단계를 거쳐 주제에 가장 최적화된 고유 디자인 테마를 직접 설계합니다:

1. **도메인 심리학 기반 60-30-10 컬러 팔레트 창조**:
   - **딥테크 / AI**: Deep Midnight Cyber (`#040711`) + Hyper Neon Cyan (`#00F0FF`) / Violet (`#7928CA`)
   - **ESG / 친환경 / 바이오**: Organic Earth Forest (`#0C1E14`) + Soft Sage (`#10B981`) / Warm Sand
   - **럭셔리 / 하이엔드**: Matte Charcoal (`#121214`) + Champagne Gold (`#E5C07B`) / Ivory Light
   - **바이오 / 헬스케어**: Clinical Clean White/Cyan (`#F0FDFD`, `#0891B2`) + High-Contrast Slate
   - **핀테크 / 퀀트 금융**: Midnight Royal Navy (`#0A1128`) + Vivid Electric Gold (`#FFCC00`)
   - **엔터테인먼트 / 게이밍**: Electric Violet (`#0F051D`) + Neon Hot Pink (`#EC4899`, `#8B5CF6`)
   - **B2B 엔터프라이즈 SaaS**: Modern Clean Slate Light (`#F8FAFC`) + Royal Indigo (`#4F46E5`)
   - **학술 연구 / 논문**: Strict Monochrome Paper Off-White (`#FAF9F6`) + Deep Ink Navy (`#1E1B4B`)
   - **스타트업 피치**: Obsidian Black (`#080808`) + Radiant Solar Orange (`#FF6B00`)
   - **공공 정책 / 스마트시티**: Deep Trust Blue (`#0D1B2A`) + Clean Mint Teal (`#00B4D8`)

2. **캔버스 질감 & 카드 스타일 동적 설정**:
   - 다크 모드: 은은한 방사형 그라디언트(`radial-gradient`) + 1px 반투명 보더 + 모듈러 패딩.
   - 라이트 모드: 깨끗한 오프화이트 서피스 + 소프트 섀도우 + 고대비 인디고/블랙 텍스트.
   - 미니멀 럭셔리: 장식을 절제하고 극도로 정교한 얇은 골드 보더와 대형 타이포그래피 활용.

3. **엄격한 한국어 타이포그래피 거버넌스 (공통 적용)**:
   - **음수 자간 (`letter-spacing: -0.025em`)**: 한글 글리프의 분산감을 잡고 텍스트 응집력 극대화.
   - **어절 보존 (`word-break: keep-all;`)**: 음절 중간 단어 잘림 원천 방지.
   - **외톨이 단어(Orphan) 0%**: 1~2글자 조사나 단어가 다음 줄에 홀로 떨어지지 않도록 정돈.
   - **수직 중심 균형 (Visual Center Equilibrium)**: 상단 쏠림(Top-Heavy) 없이 1:1 대칭 여백 유지.

---

## 2. 8대 마스터 레이아웃 컴포넌트

발표 내용의 성격에 맞춰 검증된 레이아웃 블록을 자유롭게 조합합니다:
1. **Hero Cover**: 카테고리 뱃지 + 대형 타이틀 + 3-Chip 글래스 메타데이터 그리드
2. **Asymmetric Split Agenda**: 좌측 고정 타이틀 & 프로그레스 액센트 + 우측 2x2 카드 그리드
3. **High-Contrast Breakdown**: 3단 분석 카드 (상단 컬러 액센트 보더 + 서클 뱃지)
4. **Quote & Paradigm Shift**: 중앙 집중형 철학 인용구 + 하단 3대 체크포인트
5. **Core Pillars Breakdown**: 3대 핵심 기둥 카드 (역할/개념/원칙 분할)
6. **Horizontal Pipeline Flow**: 수평 프로세스 플로우 (STEP 1~4) + 하단 2열 상세 카드
7. **Big Stats Highlight**: 대형 정량 수치 지표 카드 ($12.5M, 94.8%, 0ms 등)
8. **Executive Closing & Q&A Hub**: 3대 핵심 테이크어웨이 + Q&A 및 공식 링크/컨택트 허브

---

## 3. 핵심 툴체인 및 CLI 명령어

```bash
# 1. 마크다운 컴파일 (PPTX + PDF + 1920x1080 PNG 일괄 동시 생성)
node skills/korean-presentation-skill/scripts/marp_compiler.js <input.md> [output_dir] [base_name]

# 2. 기존 PPTX 내용 및 스피커 노트 마크다운 역추출
node skills/korean-presentation-skill/scripts/pptx_extractor.js <input.pptx> [output.md]

# 3. 생성된 PPTX 스키마 및 손상 방지 유효성 검증
node skills/korean-presentation-skill/scripts/pptx_validator.js <input.pptx>

# 4. 웹 갤러리 뷰어 생성
npm run gallery

# 5. 전체 빌드 자산 무결성 테스트
npm test
```
