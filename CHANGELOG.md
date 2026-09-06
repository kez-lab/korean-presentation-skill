# 변경 이력

이 프로젝트는 [Semantic Versioning](https://semver.org/lang/ko/) 을 따릅니다.

## [3.1.0] — 2026-09-06

감사의 신호 대 잡음을 고치고, 변환 계층에 회귀 안전망을 추가했습니다.

### Fixed

- **`letter-spacing` 규칙이 오탐 130건을 만들고 있었습니다** — 전체 경고 167건의 78%. CSS 는 `em` 자간을 **선언한 요소에서 한 번만 px 로 확정**한 뒤 자식에게 그 px 를 상속하므로, 자식의 실효 비율은 자기 font-size 에 따라 달라집니다 (`-0.03em × 29px = -0.87px` → 13.6px 자식에서 `-0.064em`). 이는 작성자의 실수가 아닌데 규칙이 위반으로 보고하고 있었습니다. 경고가 130건씩 쏟아지면 리포트를 아무도 읽지 않게 되므로, 게이트라는 개념 자체가 무력해집니다.
  규칙을 두 층으로 분리했습니다 — `letter-spacing` 은 **슬라이드 루트의 선언값**을 한 번 검사하고, 새 `letter-spacing-extreme` 은 실제 렌더된 자간이 판독 한계(-0.08em ~ +0.05em)를 벗어날 때만 발동합니다. 예제 10덱 기준 findings 는 약 140건에서 41건으로 줄었고, 남은 것은 전부 실제 문제입니다.
- `build_examples.js --only` 사용 시 빌드 개수를 전체 개수로 잘못 표기하던 문제.

### Added

- **레이아웃 골든 스냅샷** — 생성된 `.pptx` 에서 도형 기하를 다시 읽어 `examples/<id>/Presentation.layout.json` 골든과 비교합니다. `lib/extract.js` 와 `lib/pptx.js` 는 CSS 픽셀을 EMU·포인트·도형 adjust 비율로 옮기는데, 단위를 틀려도 파일은 멀쩡히 열리고 모양만 무너져 스키마 검사로는 잡히지 않습니다. 개발 중 실제로 발생했던 `rectRadius` 단위 버그(인치 대신 비율 전달)를 재현해, 이 검사가 `corner adjust 49988 → 122070` 으로 즉시 잡아내는 것을 확인했습니다.
  - `npm run snapshot` / `npm run snapshot:check`
  - 도형 개수·텍스트·색상·폰트 크기·wrap 모드·모서리 반경은 정확히 비교하고, 좌표는 폰트 메트릭 차이를 흡수하도록 2px 허용치를 둡니다.
- **거버넌스 규칙 발동 픽스처** — `tests/fixtures/governance_violations.md` 는 의도적으로 모든 규칙을 위반하는 합성 덱입니다. `npm test` 가 16개 규칙이 전부 발동하는지 확인하므로, 규칙이 조용히 죽는 일이 없습니다.
- `word-break-root` 규칙 — 루트 `section` 의 `keep-all` 선언 여부.

### Changed

- `npm test` 검사 항목이 40개에서 51개로 늘었습니다 (덱별 골든 비교 + 규칙 발동 검증).

---

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
