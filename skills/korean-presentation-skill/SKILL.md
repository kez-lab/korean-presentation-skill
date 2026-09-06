---
name: korean-presentation-skill
description: >-
  Use this skill any time a presentation, slide deck, pitch deck, .pptx, .potx, or .pdf is involved in any way —
  as input, output, or both. Builds decks through an HTML-first pipeline: render to a reviewable HTML preview,
  audit the real laid-out geometry (overflow, contrast, Korean orphans, font safety), then convert the approved
  layout into a NATIVE, fully editable .pptx — real text frames and shapes, never flattened slide images.
  Dynamically creates tailored, context-aware design themes (colors, canvas mood, visual hierarchy) based on the
  topic domain (Tech, ESG, Luxury, Bio, Fintech, Gaming, SaaS, Academic, Pitch, Public, etc.). Applies strict Korean
  typography optimization (-0.025em letter-spacing, keep-all, orphan protection), consulting-grade action titles,
  Visual Center Equilibrium, and complete speaker notes. Also reads, extracts, and validates existing PPTX decks.
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

## 3. HTML-First 파이프라인 (v3의 핵심)

슬라이드를 곧바로 PPTX로 내보내지 않습니다. **먼저 HTML로 렌더링해 눈으로 확인하고, 기계 검수를 통과한 레이아웃만 PPTX로 변환**합니다.

```
markdown ──▶ ① HTML 프리뷰 ──▶ ② 감사 게이트 ──▶ ③ 네이티브 PPTX (+ PDF / PNG)
                (사람이 확인)     (기계가 차단)      (완전 편집 가능)
```

| 단계 | 산출물 | 목적 |
|------|--------|------|
| ① 렌더 | `<name>.preview.html` | 전 슬라이드를 실제 1280×720으로 렌더한 리뷰 페이지. 컨택트시트/전체폭 전환, 슬라이드별 이슈 목록, 스피커 노트를 한 화면에서 확인 |
| ② 감사 | 콘솔 리포트 + `<name>.audit.json` | 헤드리스 크롬으로 **실제 레이아웃 좌표를 측정**해 거버넌스 규칙 검사. `error`가 하나라도 있으면 변환을 차단 |
| ③ 변환 | `<name>.pptx` | 측정된 동일 레이아웃을 **네이티브 도형·텍스트 프레임**으로 기록 |

### 왜 바뀌었나
기존 경로(`marp-cli` PPTX 익스포트)는 슬라이드마다 **배경 이미지 1장과 빈 도형 트리**를 썼습니다. 즉 편집 불가, 검색 불가, 번역 불가, 스크린리더 접근 불가에 파일 크기는 6~7배였습니다. 새 경로는 동일한 디자인을 실제 텍스트로 기록합니다.

| | 기존 (marp-cli) | 현재 (build_deck) |
|---|---|---|
| 슬라이드 구성 | 배경 PNG 1장 | 네이티브 도형 + 텍스트 프레임 |
| 편집 가능한 텍스트 런 | 0개 | 슬라이드당 수십 개 |
| 2슬라이드 덱 크기 | ~421 KB | ~66 KB |
| 텍스트 추출 / 접근성 | 불가 | 가능 |

### 감사 규칙

| 규칙 | 수준 | 내용 |
|------|------|------|
| `canvas-overflow` | error | 콘텐츠가 1280×720 밖으로 넘쳐 PPTX에서 잘림 |
| `low-contrast` | error/warn | 실제로 뒤에 칠해진 배경 대비 WCAG AA 미달 |
| `empty-slide` | error | 텍스트·이미지가 전혀 없는 슬라이드 |
| `letter-spacing` | warn | **슬라이드 루트가 선언한** 자간이 -0.025em 기준에서 벗어남 |
| `letter-spacing-extreme` | warn | 실제 렌더된 자간이 판독 한계(-0.08em ~ +0.05em)를 벗어남 |
| `word-break-root` | warn | 슬라이드 루트에 `keep-all` 미선언 |
| `word-break` | warn | 개별 한글 블록에 `keep-all` 미적용 |
| `korean-orphan` | warn | 마지막 줄에 1~2글자 또는 조사만 홀로 남음 |
| `font-too-small` | warn | 11px 미만이라 투사 시 판독 불가 |
| `unsafe-font` | warn | PowerPoint 기본 환경에 없는 웹폰트 (`--safe-fonts`로 치환) |
| `text-collision` | warn | 텍스트 블록끼리 30% 이상 겹침 |
| `vertical-imbalance` | warn | 상·하 여백 차이가 캔버스의 28% 초과 |
| `missing-notes` / `thin-notes` | warn / info | 스피커 노트 없음 / 너무 짧음 |
| `gradient-approximated` | info | CSS 그라디언트가 PPTX 단색으로 근사됨 |

> **자간 규칙이 두 층인 이유**: CSS는 `em` 자간을 **선언한 요소에서 한 번만 px로 확정**한 뒤 자식에게 그 px를 상속합니다. 따라서 자식의 실효 비율은 자기 font-size에 따라 달라지며, 이는 작성자의 실수가 아닙니다. 초기 구현은 이 값을 기준과 직접 비교해 **오탐 130건(전체 경고의 78%)**을 만들었습니다. 지금은 선언값을 루트에서 한 번 검사하고, 개별 블록은 판독 한계만 지킵니다.

---

## 4. 핵심 툴체인 및 CLI 명령어

```bash
# ① 리뷰 단계 — HTML 프리뷰 + 감사 (PPTX는 만들지 않음)
node skills/korean-presentation-skill/scripts/build_deck.js <deck.md> --out dist

# ② 승인 단계 — 게이트 통과 시 네이티브 PPTX 생성
node skills/korean-presentation-skill/scripts/build_deck.js <deck.md> --out dist \
     --approve --pdf --png --safe-fonts

# 기존 PPTX 내용 및 스피커 노트 마크다운 역추출
node skills/korean-presentation-skill/scripts/pptx_extractor.js <input.pptx> [output.md]

# PPTX 스키마 + 편집 가능성 검증 (래스터 전용 덱을 탐지)
node skills/korean-presentation-skill/scripts/pptx_validator.js <input.pptx>

# 전체 예제/템플릿 일괄 재빌드 · 무결성 테스트 · 웹 갤러리
npm run build:examples
npm run snapshot          # 변환 결과 골든 재기록 (의도한 변경 후)
npm test                  # 감사 + 골든 비교 + 규칙 발동 여부까지 검증
npm run gallery
```

### 주요 옵션
| 옵션 | 설명 |
|------|------|
| `--approve` | 감사 게이트를 통과하면 PPTX 생성 |
| `--strict` | `warn`도 차단 대상으로 승격 |
| `--force` | 게이트 실패를 무시하고 강행 |
| `--pdf` / `--png` | 벡터 PDF(실제 텍스트) / 1920×1080 PNG 동시 생성 |
| `--json` | `<name>.audit.json` 기록 |
| `--safe-fonts` | 웹 전용 폰트를 PowerPoint 기본 탑재 서체로 치환 (Pretendard→Malgun Gothic 등) |
| `--font-map A=B` | 개별 폰트 치환. macOS 배포 시 `"Pretendard=Apple SD Gothic Neo"` |

### 에이전트 작업 순서
1. 도메인에 맞는 테마를 설계하고 마크다운 덱을 작성한다.
2. `build_deck.js <deck.md>`로 프리뷰를 만들고 **`.preview.html`을 실제로 열어 확인한다.**
3. 감사 리포트의 `error`를 **전부** 해소한다. `warn`도 근거 없이 남기지 않는다.
4. 통과 후 `--approve`로 PPTX를 생성하고, `pptx_validator.js`로 편집 가능성을 확인한다.
