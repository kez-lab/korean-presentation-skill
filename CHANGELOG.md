# 변경 이력

이 프로젝트는 [Semantic Versioning](https://semver.org/lang/ko/) 을 따릅니다.

## [3.0.0] — 2026-09-06

HTML-First 파이프라인으로 엔진을 재설계하고, PPTX 산출물을 **네이티브 편집 가능** 형식으로 전환했습니다.

### 왜 (Breaking)

기존 PPTX 익스포트는 슬라이드마다 **배경 이미지 한 장과 빈 `<p:spTree>`** 를 기록했습니다. 겉보기는 슬라이드였지만 실제로는 그림 파일이라, 편집·검색·번역·스크린리더 접근이 전부 불가능했고 파일 크기는 약 6배였습니다. 자체 `pptx_extractor.js` 를 자체 산출물에 돌리면 `(No direct text found)` 가 나왔고, `npm test` 는 파일 존재 여부만 확인했기에 계속 통과 상태였습니다.

### Added

- **`build_deck.js`** — 2단계 파이프라인 CLI.
  - 기본: `<name>.preview.html` (전 슬라이드 실제 1280×720, 컨택트시트/전체폭 전환, 슬라이드별 이슈, 스피커 노트) 생성 후 감사.
  - `--approve`: 게이트 통과 시에만 PPTX 변환. `--strict` 는 warn 도 차단, `--force` 는 우회.
  - `--pdf` / `--png` / `--json` / `--safe-fonts` / `--font-map`.
- **감사 게이트 (12개 거버넌스 규칙)** — `canvas-overflow`, `low-contrast`, `empty-slide`, `korean-orphan`, `letter-spacing`, `word-break`, `font-too-small`, `unsafe-font`, `text-collision`, `vertical-imbalance`, `missing-notes`, `gradient-approximated`.
- **`scripts/build_examples.js`** — 예제 10종 + 템플릿 4종 일괄 재빌드.
- GitHub Actions CI, 이슈/PR 템플릿, 기여 가이드.

### Changed

- **PPTX 출력이 네이티브 도형·텍스트 프레임으로 전환.** 2슬라이드 덱 기준 421 KB → 66 KB, 편집 가능한 텍스트 프레임 0개 → 15~42개.
- **`verify_all.js` 가 실질 검증으로 전환.** 파일 존재 확인 대신 전 덱을 재렌더 → 감사 → 커밋된 PPTX 의 실제 텍스트 런 존재까지 확인 (40개 검사).
- **`pptx_validator.js`** 가 래스터 전용 덱을 탐지합니다. 임시 디렉터리도 작업 디렉터리 대신 OS 임시 영역을 사용합니다.
- PNG 출력이 정확히 1920×1080 으로 교정됐습니다.
- 의존성: `@marp-team/marp-cli` 제거, `@marp-team/marp-core` · `puppeteer-core` 직접 의존으로 전환.

### Fixed

감사 도입 직후 기존 예제 덱에서 발견된 **blocking 오류 20건**을 모두 수정했습니다.

- `01_quantum_gpu` — Marp 기본 테마가 비교표 셀을 흰색으로 칠하고 zebra 스트라이프를 넣어, 어두운 덱 위의 밝은 본문이 **1.16~1.23:1 대비로 사실상 보이지 않는 상태**였습니다. 표를 덱 자체 팔레트로 강제했습니다.
- `03_luxury_horlogerie`, `04_genomics_healthcare`, `07_enterprise_cdp` — 푸터·각주 텍스트가 2.4~2.6:1 대비였습니다. WCAG AA 를 만족하도록 수정했습니다.
- `package-lock.json` 이 변경된 `package.json` 과 어긋나 `npm ci` 가 실패하던 문제를 해결했습니다.

### Deprecated

- **`marp_compiler.js`** — `build_deck.js` 로 위임하는 셸로만 남았습니다. 신규 코드는 `build_deck.js` 를 직접 호출하세요.

---

## [2.4.0] 이전

초기 동적 테마 엔진, 10대 도메인 레이아웃, Marp 기반 컴파일 툴체인. 상세 내역은 [커밋 히스토리](https://github.com/kez-lab/korean-presentation-skill/commits/master)를 참고하세요.
