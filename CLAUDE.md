# CLAUDE.md - Guidelines for Claude Code

This project is the official repository for **Korean Presentation Skill (`korean-presentation-skill`)**, a state-of-the-art presentation engine that **dynamically creates tailored, domain-specific design themes** with Korean typography optimization and multi-format slide generation (PPTX, PDF, PNG).

## Core Theme Strategy: Dynamic & Context-Aware
- **Do NOT force a rigid, static template.** Analyze the user's domain (DeepTech, ESG Green, Luxury Gold, Bio Medical, Fintech HFT, Gaming, B2B SaaS Light, Academic Paper, Robotics Pitch, Smart City) and create a unique 60-30-10 color palette, canvas mood, and card style tailored to the content.
- Combine the 8 master layout components (`layout_catalog.md`) to form a coherent, stunning visual narrative.

## Build & Test Commands
- **Run Full Integrity Test Suite**: `npm test`
- **Compile Any Markdown Deck**: `node skills/korean-presentation-skill/scripts/marp_compiler.js <path-to-deck.md>`
- **Extract Text & Notes from PPTX**: `node skills/korean-presentation-skill/scripts/pptx_extractor.js <file.pptx> [out.md]`
- **Validate PPTX OOXML Schema**: `node skills/korean-presentation-skill/scripts/pptx_validator.js <file.pptx>`
- **Generate Web Showcase Gallery**: `npm run gallery`

## Core Governance & Typography Rules
1. **Korean Typography Standard**: Always use `letter-spacing: -0.025em;` and `word-break: keep-all;`. Zero orphan words/particles on separate lines.
2. **Visual Center Equilibrium**: Avoid top-heavy clutter; default vertical alignment is `justify-content: center;`.
3. **Marp Container Rule**: Do NOT insert blank lines inside `<div>` container tags.
