# AGENTS.md - Instructions for Autonomous Coding Agents

Welcome to **Korean Presentation Skill** (`korean-presentation-skill`).

## Project Overview
An enterprise AI presentation skill that generates high-resolution, design-governed PowerPoint (.pptx), PDF (.pdf), and slide images (.png) by **dynamically inventing domain-tailored design themes**.

## Dynamic Theme Principles
When asked to create a presentation:
1. Analyze the topic domain and craft a dedicated color scheme and canvas texture (e.g., Deep Cyber Cyan, Forest ESG Green, Luxury Gold, Clean Medical White, Fintech Navy, Gaming Violet, Academic Monochrome).
2. Choose from the 8 master layout components in `skills/korean-presentation-skill/references/layout_catalog.md`.
3. Apply strict Korean typography (-0.025em, keep-all, zero orphan words).
4. Compile using `node skills/korean-presentation-skill/scripts/marp_compiler.js <file.md>`.
5. Verify zero clipping via vision tools and test with `npm test`.
