# AGENTS.md - Instructions for Autonomous Coding Agents

Welcome to **Korean Presentation Skill** (`korean-presentation-skill`).

## Project Overview
An enterprise AI presentation skill that generates design-governed, **natively editable** PowerPoint (.pptx), vector PDF, and 1920×1080 slide images by **dynamically inventing domain-tailored design themes**.

Decks are built HTML-first: render → review → audit → convert. Nothing becomes a .pptx until the audit gate passes.

## Workflow
When asked to create a presentation:
1. Analyze the topic domain and craft a dedicated color scheme and canvas texture (e.g., Deep Cyber Cyan, Forest ESG Green, Luxury Gold, Clean Medical White, Fintech Navy, Gaming Violet, Academic Monochrome).
2. Choose from the 8 master layout components in `skills/korean-presentation-skill/references/layout_catalog.md`.
3. Apply strict Korean typography (-0.025em, keep-all, zero orphan words).
4. **Render and review first:**
   ```bash
   node skills/korean-presentation-skill/scripts/build_deck.js <deck.md> --out dist
   ```
   Open the generated `dist/<name>.preview.html` and actually look at it.
5. **Fix every `error` in the audit report.** Do not carry warnings forward without a reason.
6. **Only then convert:**
   ```bash
   node skills/korean-presentation-skill/scripts/build_deck.js <deck.md> --out dist --approve --pdf --png --safe-fonts
   ```
7. Confirm the result is genuinely editable, then run the suite:
   ```bash
   node skills/korean-presentation-skill/scripts/pptx_validator.js dist/<name>.pptx
   npm test
   ```

## Hard rules
- **Never ship a raster-only deck.** A .pptx whose slides are flattened background images is not editable, searchable, translatable, or screen-reader accessible. `pptx_validator.js` fails on this.
- **Never bypass the gate with `--force`** to make a build go green. Fix the finding.
- Do not insert blank lines inside `<div>` container tags (Marp parses them as paragraph breaks).
- `marp_compiler.js` is deprecated and only delegates to `build_deck.js`; call `build_deck.js` directly.
