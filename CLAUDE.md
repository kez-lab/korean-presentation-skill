# CLAUDE.md - Guidelines for Claude Code

This project is the official repository for **Korean Presentation Skill (`korean-presentation-skill`)**, a state-of-the-art presentation engine that **dynamically creates tailored, domain-specific design themes** with Korean typography optimization and multi-format slide generation (PPTX, PDF, PNG).

## Core Theme Strategy: Dynamic & Context-Aware
- **Do NOT force a rigid, static template.** Analyze the user's domain (DeepTech, ESG Green, Luxury Gold, Bio Medical, Fintech HFT, Gaming, B2B SaaS Light, Academic Paper, Robotics Pitch, Smart City) and create a unique 60-30-10 color palette, canvas mood, and card style tailored to the content.
- Combine the 8 master layout components (`layout_catalog.md`) to form a coherent, stunning visual narrative.

## Build Pipeline: HTML First, Then PPTX
Decks are never exported straight to PowerPoint. Render to HTML, look at it, pass the audit, *then* convert:

1. **Review stage** — `node skills/korean-presentation-skill/scripts/build_deck.js <deck.md> --out dist`
   Produces `dist/<name>.preview.html` and a governance audit of the real laid-out geometry. Open the HTML.
2. **Fix every `error`** the audit reports. Do not use `--force` to get past the gate.
3. **Approve stage** — `... build_deck.js <deck.md> --out dist --approve --pdf --png --safe-fonts`
   Emits a native, fully editable `.pptx` (real shapes and text frames — never flattened slide images).

## Build & Test Commands
- **Run Full Integrity Test Suite**: `npm test` (re-renders every deck, audits it, and asserts the committed PPTX has real text)
- **Rebuild All Example Decks**: `npm run build:examples`
- **Extract Text & Notes from PPTX**: `node skills/korean-presentation-skill/scripts/pptx_extractor.js <file.pptx> [out.md]`
- **Validate PPTX Schema & Editability**: `node skills/korean-presentation-skill/scripts/pptx_validator.js <file.pptx>`
- **Generate Web Showcase Gallery**: `npm run gallery`
- `marp_compiler.js` is deprecated and only delegates to `build_deck.js`.

## Core Governance & Typography Rules
1. **Korean Typography Standard**: Always use `letter-spacing: -0.025em;` and `word-break: keep-all;`. Zero orphan words/particles on separate lines.
2. **Visual Center Equilibrium**: Avoid top-heavy clutter; default vertical alignment is `justify-content: center;`.
3. **Marp Container Rule**: Do NOT insert blank lines inside `<div>` container tags.
4. **Never Ship a Raster Deck**: a `.pptx` whose slides are background images is not editable, searchable, or accessible. `pptx_validator.js` fails on it.
