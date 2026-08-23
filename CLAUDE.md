# CLAUDE.md - Guidelines for Claude Code

This project is the official repository for **Korean Presentation Skill (`korean-presentation-skill`)**, a state-of-the-art presentation engine optimized for Korean typography, UI/UX methodologies, and multi-format slide generation (PPTX, PDF, PNG).

## Build & Test Commands
- **Run Full Integrity Test Suite**: `npm test`
- **Build All 4 Domain Templates**: `npm run build:templates`
- **Build Example Presentation (AFSM)**: `npm run build:example`
- **Compile Any Markdown Deck**: `node skills/korean-presentation-skill/scripts/marp_compiler.js <path-to-deck.md>`
- **Create New Presentation**: `node scripts/create_presentation.js --theme <tech|business|light|pitch> --title "<Title>" --author "<Author>" --out <file.md> --compile`
- **Generate Web Showcase Gallery**: `npm run gallery`

## Core Governance & Rules
1. **Korean Typography Standard**:
   - Always use `letter-spacing: -0.025em;` and `word-break: keep-all;`.
   - Never allow orphan words/particles ("은/는/이/가/을/를/의/에", 1~2 hanging syllables) on separate lines.
2. **Visual Center Equilibrium**:
   - Avoid top-heavy clutter; default slide vertical alignment is `justify-content: center;`.
   - For hero covers and closing slides, use `style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;"`.
3. **Marp Container Rule**:
   - Do NOT insert blank lines inside `<div>` container tags to prevent Marp parser layout fragmentation.
4. **4-Step AI Workflow**:
   - 1. Outline Storyline & Agenda ➔ 2. Draft Marp Markdown ➔ 3. Compile (PPTX+PDF+PNG) ➔ 4. Visually Inspect PNGs and correct any defects.
