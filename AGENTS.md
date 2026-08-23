# AGENTS.md - Instructions for Autonomous Coding Agents

Welcome to **Korean Presentation Skill** (`korean-presentation-skill`).

## Project Overview
An enterprise AI presentation skill that generates high-resolution, design-governed PowerPoint (.pptx), PDF (.pdf), and slide images (.png) from pure Markdown.

## Available Themes (`templates/`)
- `01_tech_dark_glass.md`: Developer deep dive, system architecture, dark glassmorphism.
- `02_business_clean_navy.md`: C-Level business strategy, executive IR, deep midnight navy.
- `03_modern_light.md`: Academic research paper, whitepaper, high-contrast light mode.
- `04_pitch_keynote_bold.md`: Series A startup pitch, keynote launch, electric gold.

## Standard Workflow for Agents
1. When asked to create a presentation, select an appropriate template from `templates/` or use `scripts/create_presentation.js`.
2. Follow the 8 master layout components in `skills/korean-presentation-skill/references/layout_catalog.md`.
3. Compile using `node skills/korean-presentation-skill/scripts/marp_compiler.js <file.md>`.
4. Inspect the generated images in `<output_dir>/slides_preview/` to ensure zero text clipping and proper margins.
5. Run `npm test` to verify asset integrity.
