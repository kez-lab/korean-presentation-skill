# 기여 가이드

`korean-presentation-skill` 에 기여해 주셔서 감사합니다.

## 시작하기

```bash
git clone https://github.com/kez-lab/korean-presentation-skill.git
cd korean-presentation-skill
npm ci
npm test
```

Node 18 이상과 **Chrome 또는 Chromium** 이 필요합니다. 파이프라인이 헤드리스 브라우저에서 실제 레이아웃 좌표를 측정하기 때문입니다. 자동 탐색에 실패하면 `CHROME_PATH` 로 직접 지정할 수 있습니다.

```bash
export CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

## 핵심 원칙

이 저장소에는 타협하지 않는 규칙이 세 가지 있습니다.

**1. 래스터 덱은 절대 커밋하지 않습니다.**
슬라이드가 통짜 배경 이미지인 `.pptx` 는 편집·검색·번역·스크린리더 접근이 전부 불가능합니다. `pptx_validator.js` 가 이를 탐지해 실패시킵니다.

**2. 감사 게이트를 `--force` 로 우회하지 않습니다.**
`error` 가 뜨면 원인을 고칩니다. `--force` 는 파이프라인 자체를 디버깅할 때만 쓰는 탈출구입니다.

**3. 눈으로 먼저 확인합니다.**
`.preview.html` 을 실제로 열어보지 않고 PPTX 를 만들지 않습니다. 이 저장소가 HTML-First 로 재설계된 이유입니다.

## 작업 흐름

### 덱(예제/템플릿)을 수정할 때

```bash
# 1. 리뷰 단계 — HTML 프리뷰 + 감사만
node skills/korean-presentation-skill/scripts/build_deck.js examples/<id>/presentation.md --out dist

# 2. dist/presentation.preview.html 을 브라우저로 열어 확인하고 error 를 전부 해소

# 3. 산출물 재생성 후 검증
npm run build:examples
npm test
```

### 파이프라인 코드를 수정할 때

코드는 `skills/korean-presentation-skill/scripts/` 아래에 있습니다.

| 파일 | 책임 |
|------|------|
| `build_deck.js` | 2단계 CLI 오케스트레이션 |
| `lib/deck.js` | 마크다운 → 슬라이드 HTML + CSS + 스피커 노트 |
| `lib/browser.js` | 헤드리스 Chrome 탐색 및 페이지 수명 관리 |
| `lib/extract.js` | 렌더된 DOM → 도형·텍스트·이미지 디스플레이 리스트 |
| `lib/audit.js` | 거버넌스 규칙 검사 |
| `lib/pptx.js` | 디스플레이 리스트 → 네이티브 PPTX |
| `lib/constants.js` | 캔버스 좌표계, 폰트 폴백, 임계값 |

`lib/extract.js` 나 `lib/pptx.js` 를 건드렸다면 **반드시 실제 PowerPoint 또는 Keynote 에서 결과물을 열어 확인**해 주세요. 좌표·폰트 메트릭 문제는 XML 검사만으로는 드러나지 않습니다. macOS 라면 Quick Look 으로도 빠르게 볼 수 있습니다.

```bash
qlmanage -t -s 1600 -o /tmp dist/<name>.pptx
```

### 감사 규칙을 추가할 때

`lib/audit.js` 의 `auditDeck()` 에 추가하고, 다음을 함께 갖춰주세요.

- **`error` 는 실제로 결과물을 망가뜨리는 경우에만.** 그 외는 `warn` 또는 `info` 입니다.
- 오탐이 나지 않는지 예제 덱 14종 전체로 확인 (`npm test`).
- `README.md` 와 `SKILL.md` 의 규칙 표에 항목 추가.

## 커밋 및 PR

- 브랜치를 만들어 작업합니다. `master` 에 직접 커밋하지 않습니다.
- 커밋 메시지는 **무엇을 바꿨는지보다 왜 바꿨는지**를 먼저 씁니다.
- PR 을 열기 전에 `npm test` 가 통과하는지 확인해 주세요. CI 도 동일하게 검사합니다.

## 라이선스

기여하신 내용은 [MIT License](LICENSE) 로 배포됩니다.
