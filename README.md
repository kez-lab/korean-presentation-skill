# 🎨 Presentation Master (Pro UI/UX Slide Deck Engine)

[![Antigravity Skill](https://img.shields.io/badge/Antigravity-Skill-6366F1?style=for-the-badge&logo=google&logoColor=white)](https://github.com/google/antigravity)
[![Marp Core](https://img.shields.io/badge/Marp-CLI_Engine-0284C7?style=for-the-badge&logo=markdown&logoColor=white)](https://marp.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-34D399?style=for-the-badge)](LICENSE)

> **컨설팅·빅테크 기업 수준의 프레젠테이션을 순수 마크다운으로 설계하고, 원클릭으로 PPTX, 벡터 PDF, 1920×1080 고화질 프리뷰 이미지로 컴파일하는 엔터프라이즈 프레젠테이션 디자인 엔진입니다.**

---

## 🏛️ 5대 핵심 디자인 거버넌스 (Design Governance)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                        PRESENTATION MASTER FRAMEWORK                         │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ 1. Visual Center Equilibrium │ 상단 쏠림 방지, 1:1 수직 중앙 대칭 여백 밸런스  │
│ 2. Korean Typography         │ -0.025em 음수 자간, keep-all 어절 보존, 조사 고립 방지│
│ 3. Dark Glassmorphism        │ 60-30-10 룰 + 24px 네온 마이크로 뱃지 컬러 코딩 │
│ 4. Harmonious 8pt Spacing    │ 20px 22px 카드 패딩, 28px 계층 분리 마진      │
│ 5. Zero-Collision Layout     │ 가림/클리핑/겹침 0%의 반응형 높이 예산제 설계 │
└──────────────────────────────┴───────────────────────────────────────────────┘
```

### 1. Visual Center Equilibrium (수직 중앙 밸런스)
- 무비판적인 `flex-start`로 인한 상단 쏠림(Top-Heavy Clutter)을 원천 배제하고, 슬라이드 캔버스의 **수직 중심축(Visual Center Axis)**을 기준으로 콘텐츠 덩어리가 정중앙에 안착하도록 설계하여 상하 여백(Breathing Zone)이 1:1 대칭을 이룹니다.

### 2. 한국어 타이포그래피 최적화 (Korean Typography Standard)
- **음수 자간 (`letter-spacing: -0.025em`)**: 정방형 한글 폰트의 시각적 분산감을 완벽히 제거하고 글자 간 응집도를 극대화합니다.
- **어절 보존 (`word-break: keep-all;`)**: 단어가 음절 중간에서 어색하게 쪼개지지 않습니다.
- **외톨이 조사 고립 방지**: 문장 끝의 조사("을/를", "이/가")가 다음 줄에 홀로 떨어지지 않도록 의미 단위 줄바꿈을 적용합니다.

### 3. 다크 글래스모피즘 & 24px 네온 뱃지 (Color & Surface Matrix)
- **Surface**: `linear-gradient(180deg, rgba(26, 35, 54, 0.7) 0%, rgba(18, 24, 38, 0.95) 100%)`
- **Micro Badges**: 시안(`#00F0FF`), 퍼플(`#A78BFA`), 블루(`#38BDF8`), 그린(`#34D399`), 옐로우(`#FACC15`), 레드(`#F87171`) 24px 반투명 원형 뱃지 체계.
- **Typography Scale**: 타이틀 `2.6rem` | 섹션 제목 `1.68rem` | 카드 제목 `0.98rem` | 카드 본문 `0.78rem` 정밀 위계.

### 4. 8pt 그리드 & 넉넉한 카드 여백 (Breathing Room)
- 카드 내부 `padding: 20px 22px` 및 그리드 `gap: 16px ~ 18px`를 유지하여 텍스트가 카드 경계에 답답하게 꽉 차지 않고 시원하게 호흡합니다.

---

## 📂 프로젝트 구조 (Repository Structure)

```
radiant-meitner/
├── skills/
│   └── presentation-master/           # Antigravity 스킬 메인 패키지
│       ├── SKILL.md                   # 스킬 메인 지침 및 거버넌스
│       ├── references/                # 디자인 시스템 & 가이드라인 레퍼런스
│       │   ├── gravity_spacing_occlusion_guide.md # 수직 밸런스 & 여백 표준
│       │   ├── korean_typography_spacing_guide.md # 한국어 타이포 가이드
│       │   ├── ui_ux_methodologies.md             # UI/UX 인지 심리학 원칙
│       │   ├── layout_catalog.md                  # 20+ 레이아웃 카탈로그
│       │   ├── design_systems.md                  # 컬러/글리프 토큰
│       │   └── storytelling_framework.md          # 5단 내러티브 구조
│       └── scripts/
│           ├── marp_compiler.js       # PPTX + PDF + PNG 통합 컴파일러
│           └── slide_engine.py        # 파이썬 슬라이드 보조 스크립트
├── examples/
│   └── afsm/                          # 실전 적용 예제 (AFSM 8-Slide Deck)
│       ├── afsm_presentation.md       # 마크다운 원본 소스
│       ├── Afsm_Presentation.pptx     # 100% 네이티브 파워포인트 원본
│       ├── Afsm_Presentation.pdf      # 벡터 인쇄용 PDF
│       └── slides_preview/            # 1920x1080 고해상도 슬라이드 렌더링 이미지
├── package.json
└── README.md
```

---

## 🚀 빠른 시작 및 빌드 가이드 (Quick Start)

### 종속성 설치
```bash
npm install
```

### 슬라이드 일괄 컴파일 (PPTX + PDF + PNG)
```bash
# 기본 AFSM 슬라이드 빌드
npm run build:afsm

# 또는 임의의 마크다운 파일 직접 컴파일
node skills/presentation-master/scripts/marp_compiler.js <input.md> <output_dir> [base_name]
```

---

## 🖼️ 슬라이드 갤러리 (AFSM Presentation Preview)

| Slide 01. Hero Cover | Slide 02. Agenda Split |
|:---:|:---:|
| ![Slide 1](slides_preview/slide.001.png) | ![Slide 2](slides_preview/slide.002.png) |
| **Slide 03. Problem Statement** | **Slide 04. Paradigm Shift Quote** |
| ![Slide 3](slides_preview/slide.003.png) | ![Slide 4](slides_preview/slide.004.png) |
| **Slide 05. Core 3 Pillars** | **Slide 06. UDF Data Flow** |
| ![Slide 5](slides_preview/slide.005.png) | ![Slide 6](slides_preview/slide.006.png) |
| **Slide 07. Key Engineering Stats** | **Slide 08. Summary & CTA** |
| ![Slide 7](slides_preview/slide.007.png) | ![Slide 8](slides_preview/slide.008.png) |

---

## 📝 라이선스

This project is licensed under the [MIT License](LICENSE).
