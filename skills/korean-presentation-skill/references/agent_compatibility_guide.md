# Global AI Agent Compatibility Guide (Claude Code, OpenAI Codex, Antigravity, Cursor)

본 문서는 `korean-presentation-skill`을 **Google Antigravity**, **Anthropic Claude Code**, **OpenAI Codex / ChatGPT**, **Cursor / Windsurf** 등 다양한 글로벌 자율형 AI 코딩 에이전트에 통합하여 사용하는 표준 가이드를 제공합니다.

---

## 1. 지원 AI 에이전트 생태계 매트릭스

| 에이전트 환경 | 스킬 설정 경로 / 방식 | 지원 포맷 | 주요 워크플로우 |
| :--- | :--- | :---: | :--- |
| **Google Antigravity** | `~/.gemini/config/skills/korean-presentation-skill/` | PPTX, PDF, PNG | SKILL.md 자동 로드 + 자체 비전 도구(`view_file`) 자율 검증 |
| **Anthropic Claude Code** | `.claude/skills/pptx.md` or `CLAUDE.md` | PPTX, PDF, PNG | 4단계 워크플로우 (Brainstorm ➔ Outline ➔ Draft ➔ Visual Audit) |
| **OpenAI Codex / CLI** | `AGENTS.md` / `system_prompt` | PPTX, PDF, PNG | 높이 예산제(Height Budgeting) 기반 텍스트 자동 제약 |
| **Cursor / Windsurf** | `.cursorrules` / `.windsurfrules` | PPTX, PDF, PNG | 인라인 마크다운 슬라이드 작성 및 원클릭 CLI 빌드 |

---

## 2. Claude Code 연동 설정 (`CLAUDE.md` / `.claude/skills/`)

Claude Code 환경에서 본 스킬을 사용할 수 있도록 프로젝트 루트에 `CLAUDE.md`를 제공하거나 `.claude/skills/korean-presentation-skill.md`로 심볼릭 링크를 연결합니다.

### Claude Code 시스템 지침 요약:
1. **템플릿 우선 법칙 (Template-First Principle)**: 사용자가 프레젠테이션 생성을 요청하면 임의로 레이아웃을 발명하지 않고 `templates/` 디렉토리의 4개 공식 템플릿 또는 `layout_catalog.md`의 8대 마스터 컴포넌트를 기반으로 골격을 잡습니다.
2. **4단계 반복 생성 루프 (4-Step Iteration Loop)**:
   - **Step 1 (Storyline & Outline)**: 발표 주제에 대한 핵심 메시지와 아젠다 4단계를 먼저 도출.
   - **Step 2 (Marp Markdown Drafting)**: 한국어 타이포그래피(-0.025em, keep-all, 외톨이 단어 방지)를 적용하여 마크다운 작성.
   - **Step 3 (Multi-Format Compilation)**: `node skills/korean-presentation-skill/scripts/marp_compiler.js`로 PPTX, PDF, PNG 생성.
   - **Step 4 (Visual Self-Correction)**: 생성된 `slides_preview/slide.*.png` 이미지를 확인하여 텍스트 클리핑 및 여백을 자체 검증하고 필요시 마크다운 수정 후 재빌드.

---

## 3. OpenAI Codex / GPT 에이전트 연동 설정 (`AGENTS.md`)

OpenAI Codex 에이전트가 코드 생성 및 마크다운 작성을 수행할 때 준수해야 할 제약 조건:
- **글자 수 예산제 (Character Budgeting)**:
  - 메인 타이틀: 최대 24자 이내 (2행 완결)
  - 서브타이틀(Lead): 최대 45자 이내 (1~2행)
  - 카드 본문 불릿: 항목당 최대 35자 이내 (1행 완결 원칙)
- **HTML 블록 내 빈 줄(Blank Line) 금지**: Marp 파서 버그를 방지하기 위해 컨테이너 `<div>` 태그 내부에는 빈 줄을 두지 않고 연속 작성.

---

## 4. 원클릭 범용 CLI 인터페이스

모든 AI 에이전트는 터미널 도구(Bash / Exec)를 통해 다음 표준 CLI를 호출하여 프레젠테이션을 생성 및 관리합니다:

```bash
# 1. 새 프레젠테이션 생성 (Scaffolder)
node scripts/create_presentation.js --theme <tech|business|light|pitch> --title "<제목>" --author "<발표자>" --out <파일명.md> --compile

# 2. 컴파일 (PPTX + PDF + PNG)
node skills/korean-presentation-skill/scripts/marp_compiler.js <파일명.md>

# 3. 브라우저 갤러리 뷰어 생성
npm run gallery

# 4. 무결성 테스트
npm test
```
