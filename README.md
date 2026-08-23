<div align="center">

# Korean Presentation Skill

### 10대 도메인별 고유 레이아웃 & 한국어 타이포그래피 거버넌스 기반 AI 프레젠테이션 엔진

[![Antigravity Skill](https://img.shields.io/badge/Antigravity-AI_Agent_Skill-6366F1?style=for-the-badge&logo=google&logoColor=white)](https://github.com/google/antigravity)
[![Korean Typography](https://img.shields.io/badge/Korean_Typography-Pretendard_%7C_-0.025em-EC4899?style=for-the-badge)](skills/korean-presentation-skill/references/korean_typography_spacing_guide.md)
[![Marp CLI](https://img.shields.io/badge/Marp-Core_Compiler-0284C7?style=for-the-badge&logo=markdown&logoColor=white)](https://marp.app/)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA_7:1+-34D399?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-FACC15?style=for-the-badge)](LICENSE)

<br/>

[**10대 고유 구조 갤러리**](#1-10대-도메인-완전-차별화-레이아웃-쇼케이스-갤러리) •
[**동적 테마 엔진 원칙**](#2-동적-디자인-테마-창조-원칙-dynamic-theme-engine) •
[**한국어 타이포그래피 표준**](#3-한국어-타이포그래피-최적화-표준) •
[**CLI 도구 사용법**](#4-빠른-시작-및-cli-도구-사용법)

</div>

---

## 개요 (Overview)

`korean-presentation-skill`은 Google Antigravity, Claude Code, OpenAI Codex, Cursor 등 최신 자율형 AI 코딩 에이전트를 위해 개발된 프레젠테이션 생성 및 검증 통합 AI 스킬입니다.

**천편일률적인 카드 박스 복사를 완전히 지양합니다.** 주제의 성격에 따라 **터미널 CLI, 수평 타임라인, 스위스 에디토리얼 세리프, 임상 비교 매트릭스 테이블, 금융 L3 호가창, 사이버펑크 HUD, SaaS 아코디언, 논문 수식 조판, 볼드 피치, 관제 대시보드** 등 완전히 고유한 비주얼 컴포넌트와 레이아웃을 동적으로 창조합니다.

---

## 1. 10대 도메인 완전 차별화 레이아웃 쇼케이스 갤러리

> **Interactive Gallery**: 모든 슬라이드를 1920×1080 고화질 모달 줌으로 감상하려면 `npm run gallery`를 실행하여 `preview_gallery.html`을 열어보세요.

---

### 01. 양자 컴퓨팅 (Quantum DeepTech)
`CYBER TERMINAL` • `JETBRAINS MONO` • `#00F0FF CYAN` • [`소스 코드 보기`](examples/01_quantum_gpu/presentation.md)
* **비주얼 특징**: 터미널 타이틀바, 양자 회로 게이트 다이어그램, 1,200x 슈퍼컴 비교표

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/01_quantum_gpu/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 터미널 프롬프트 & 회로도 파이프라인</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/01_quantum_gpu/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 하드웨어 레지스터 벤치마크 비교표</b></sub>
</td>
</tr>
</table>

---

### 02. 친환경 스마트 그리드 (ESG CleanTech)
`EDITORIAL GREEN` • `HORIZONTAL TIMELINE` • `#10B981 EMERALD` • [`소스 코드 보기`](examples/02_clean_energy_esg/presentation.md)
* **비주얼 특징**: 에코 그린 캔버스, 2026~2030 단계별 수평 타임라인 바, 마일스톤 노드

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/02_clean_energy_esg/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 2030 탄소중립 Hero & 3대 핵심 지표</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/02_clean_energy_esg/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. '26 ➔ '28 ➔ '30 수평 로드맵 타임라인</b></sub>
</td>
</tr>
</table>

---

### 03. 하이엔드 럭셔리 워치메이킹 (Haute Horlogerie)
`SWISS HAUTE` • `CORMORANT GARAMOND SERIF` • `#E5C07B GOLD` • [`소스 코드 보기`](examples/03_luxury_horlogerie/presentation.md)
* **비주얼 특징**: Cormorant 대형 세리프 타이포그래피, 얇은 골드 헤어라인, 에디토리얼 인용구

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/03_luxury_horlogerie/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 대형 세리프 타이포그래피 에디토리얼 표지</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/03_luxury_horlogerie/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 장인 철학 인용구 & 2단 디테일</b></sub>
</td>
</tr>
</table>

---

### 04. 정밀 면역항암 신약 (Bio-Medicine)
`CLINICAL MATRIX` • `HIGH-CONTRAST LIGHT` • `#0284C7 BLUE` • [`소스 코드 보기`](examples/04_genomics_healthcare/presentation.md)
* **비주얼 특징**: 클리니컬 화이트 캔버스, 대조군 vs 치료법 임상 행렬 비교표(PASS/FAIL 뱃지)

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/04_genomics_healthcare/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 임상 프로토콜 헤더 & 3단 반응률 지표</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/04_genomics_healthcare/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 표준 치료법(SoC) 대비 임상 효능 비교 행렬</b></sub>
</td>
</tr>
</table>

---

### 05. 마이크로초 초저지연 HFT (Fintech Trading)
`BLOOMBERG TERMINAL` • `ROBOTO MONO` • `#FFCC00 GOLD` • [`소스 코드 보기`](examples/05_fintech_hft/presentation.md)
* **비주얼 특징**: 실시간 오더북 Depth 스트림, 티커 바, 380ns 틱투트레이드 파이프라인

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/05_fintech_hft/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 금융 티커 & L3 오더북 Depth 스트림</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/05_fintech_hft/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 나노초(ns) 3단계 틱투트레이드 파이프라인</b></sub>
</td>
</tr>
</table>

---

### 06. 언리얼 엔진 5 버추얼 프로덕션 (Gaming & VFX)
`CYBERPUNK HUD` • `ORBITRON NEON` • `#EC4899 PINK` • [`소스 코드 보기`](examples/06_gaming_metaverse/presentation.md)
* **비주얼 특징**: Orbitron 미래형 폰트, 사선 컷아웃 HUD 카드, 8K 120 FPS ICVFX 스펙

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/06_gaming_metaverse/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 사이버 HUD 카드 & 120 FPS 렌더링 지표</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/06_gaming_metaverse/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 실시간 ICVFX 3대 아키텍처 스택</b></sub>
</td>
</tr>
</table>

---

### 07. 실시간 엔터프라이즈 CDP (B2B SaaS)
`LINEAR SAAS` • `STEP ACCORDION` • `#4F46E5 INDIGO` • [`소스 코드 보기`](examples/07_enterprise_cdp/presentation.md)
* **비주얼 특징**: 3단계 수직 스텝 아코디언 바, 우측 데이터 리프트 박스(+340% CVR)

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/07_enterprise_cdp/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 인터랙티브 스텝 아코디언 UI & ROI 박스</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/07_enterprise_cdp/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 3대 엔터프라이즈 아키텍처 기둥</b></sub>
</td>
</tr>
</table>

---

### 08. O(N) 선형 어텐션 이론 (Academic Paper)
`LATEX PAPER` • `STIX TWO TEXT` • `#1E1B4B INK NAVY` • [`소스 코드 보기`](examples/08_academic_attention/presentation.md)
* **비주얼 특징**: NeurIPS 논문 헤더, Theorem 1 수식 박스, 1M 토큰 메모리 벤치마크 표

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/08_academic_attention/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 학술 논문 헤더 & Theorem 수식 조판 박스</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/08_academic_attention/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 1M 토큰 메모리 & 연산 복잡도 비교표</b></sub>
</td>
</tr>
</table>

---

### 09. 자율주행 물류 로봇 (Series A Pitch)
`GIANT IMPACT BOLD` • `MONTSERRAT` • `#FF6B00 ORANGE` • [`소스 코드 보기`](examples/09_robotics_series_a/presentation.md)
* **비주얼 특징**: 거대 볼드 수치($8.4M ARR, +420%), 1:1 Old Way vs Robotics-X 대조 박스

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/09_robotics_series_a/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 초대형 볼드 폰트 ARR 트랙션 표지</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/09_robotics_series_a/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 1:1 문제점(Old) vs 솔루션(New) 극적 대조</b></sub>
</td>
</tr>
</table>

---

### 10. 스마트시티 디지털 트윈 (GovTech)
`CIVIC DASHBOARD` • `4-WIDGET GRID` • `#38BDF8 MINT TEAL` • [`소스 코드 보기`](examples/10_smart_city_twin/presentation.md)
* **비주얼 특징**: 국토부 상황실 헤더, 4분할 실시간 관제 위젯, 3계층 국가 재난안전망 트리

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="examples/10_smart_city_twin/slides_preview/slide.001.png" width="100%"/><br/>
<sub><b>Slide 01. 4분할 실시간 상황실 관제 대시보드</b></sub>
</td>
<td width="50%" align="center">
<img src="examples/10_smart_city_twin/slides_preview/slide.002.png" width="100%"/><br/>
<sub><b>Slide 02. 3계층 통합 국가 재난안전망 인프라</b></sub>
</td>
</tr>
</table>

---

## 2. 동적 디자인 테마 창조 원칙 (Dynamic Theme Engine)

1. **도메인 심리학 기반 60-30-10 컬러 팔레트 창조**:
   - 60% 캔버스 베이스, 30% 카드/서피스, 10% 액센트 컬러를 주제에 맞게 자동 조색합니다.
2. **도메인 전용 비주얼 폼(Form) 동적 채택**:
   - 엔지니어링 ➔ 터미널 & 코드 블록
   - 로드맵 / 전략 ➔ 수평 타임라인
   - 럭셔리 / 브랜딩 ➔ 대형 세리프 에디토리얼
   - 의학 / 연구 ➔ 임상 비교 행렬 표
   - 금융 / 트레이딩 ➔ 오더북 Depth 터미널
   - 게임 / 미디어 ➔ 사이버 HUD
   - 학술 ➔ Theorem 수식 조판
   - 스타트업 피치 ➔ 자이언트 볼드 임팩트
3. **한국어 타이포그래피 최적화 표준**:
   - **음수 자간 (`letter-spacing: -0.025em`)**: 한글 폰트 특유의 헐거운 분산감을 잡고 응집력을 극대화합니다.
   - **어절 보존 (`word-break: keep-all;`)**: 음절 중간 단어 잘림을 원천 방지합니다.
   - **외톨이 조사 방지**: 문장 끝 조사("을/를", "이/가", "의")가 다음 줄에 홀로 떨어지지 않도록 정돈합니다.

---

## 3. 한국어 타이포그래피 최적화 표준

- **음수 자간 (`letter-spacing: -0.025em`)**: 정방형 한글 폰트의 헐거운 분산감을 제거하고 고밀도 텍스트 응집력을 제공합니다.
- **어절 보존 (`word-break: keep-all;`)**: 한글 단어가 음절 중간에서 부자연스럽게 잘리지 않도록 강제합니다.
- **외톨이 조사 고립 방지**: 문장 끝의 조사("은/는/이/가/을/를/의/에")가 다음 줄에 홀로 떨어지지 않도록 의미 단위 줄바꿈을 적용합니다.
- **모듈러 행간 스케일**: 메인 타이틀 `1.28`, 섹션 제목 `1.32`, 본문 `1.55`.

---

## 4. 빠른 시작 및 CLI 도구 사용법

### 1. 저장소 클론 및 패키지 설치
```bash
git clone https://github.com/kez-lab/korean-presentation-skill.git
cd korean-presentation-skill
npm install
```

### 2. 마크다운 일괄 컴파일 (PPTX + PDF + PNG)
```bash
# 임의의 마크다운 파일 직접 컴파일 (입력 파일, 출력 디렉토리, 산출물 파일명)
node skills/korean-presentation-skill/scripts/marp_compiler.js <input.md> [output_dir] [output_name]
```

### 3. 기존 PPTX 내용 및 스피커 노트 마크다운 역추출 (Extractor)
```bash
# 임의의 파워포인트 파일로부터 슬라이드별 본문 및 스피커 노트를 마크다운으로 추출
node skills/korean-presentation-skill/scripts/pptx_extractor.js <deck.pptx> [output.md]
```

### 4. PPTX 스키마 및 손상 방지 유효성 검증 (Validator)
```bash
# OOXML 구조, [Content_Types].xml, No-Hash Hex, 차트 바인딩 자동 감사
node skills/korean-presentation-skill/scripts/pptx_validator.js <deck.pptx>
```

### 5. 웹 갤러리 뷰어 생성 및 슬라이드 감상
```bash
# 10개 도메인 고유 구조 슬라이드를 모달 줌으로 넘겨볼 수 있는 웹 갤러리 생성
npm run gallery
# 생성된 preview_gallery.html 을 브라우저에서 열어 즉시 감상
```

### 6. 전체 빌드 자산 무결성 자동 검증 (Verification Suite)
```bash
npm test
```

---

## 라이선스

본 프로젝트는 [MIT License](LICENSE)에 따라 자유롭게 사용 및 수정할 수 있습니다.
