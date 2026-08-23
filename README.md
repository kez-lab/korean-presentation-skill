<div align="center">

# 🪄 Korean Presentation Master (AI Agent Skill)

### Autonomous AI Agent Skill for Generating Korean Typography-Optimized, Consulting-Grade Presentations (.pptx), Print-Ready PDFs (.pdf), and Verified Slide Renders (.png)

[![Antigravity Skill](https://img.shields.io/badge/Antigravity-AI_Agent_Skill-6366F1?style=for-the-badge&logo=google&logoColor=white)](https://github.com/google/antigravity)
[![Korean Typography](https://img.shields.io/badge/Korean_Typography-Pretendard_%7C_-0.025em-EC4899?style=for-the-badge)](references/korean_typography_spacing_guide.md)
[![Marp CLI](https://img.shields.io/badge/Marp-Core_Compiler-0284C7?style=for-the-badge&logo=markdown&logoColor=white)](https://marp.app/)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA_7:1+-34D399?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-FACC15?style=for-the-badge)](LICENSE)

<br/>

[**Live Slide Gallery**](#-verified-output-showcase) •
[**Korean Typography Engine**](#-korean-typography-governance) •
[**AI Agent Workflow**](#-how-ai-agents-use-this-skill) •
[**Design System**](#-5-pillars-of-pro-design-governance) •
[**Quick Start**](#-quick-start--cli-usage)

</div>

---

## 🌟 What is Korean Presentation Master?

**`korean-presentation-master`** is a specialized **AI Agent Skill** built for autonomous AI coding assistants (Google Antigravity, Claude Code, Cursor, Windsurf, AutoGPT).

Most AI presentation generators fail when dealing with non-Latin scripts, resulting in **loose glyph tracking, awkward mid-word breaks, isolated trailing particles (orphans), top-heavy layout clutter, and corrupted PPTX recovery errors**. 

**Korean Presentation Master** solves this by embedding **deep Korean typography engineering (`-0.025em` tracking, `word-break: keep-all;`, particle isolation protection)** and **executive UI/UX design methodologies (Gestalt, 8pt Grid, 60-30-10 Color Rule, Visual Center Equilibrium)** directly into the LLM agent's generative pipeline.

### 📦 3 Production Deliverables per Run:
1. 📊 **100% Native Editable PowerPoint (`.pptx`)**: Native vector text/shapes with **0% repair or corruption errors**.
2. 📄 **Print-Ready Vector PDF (`.pdf`)**: Ultra-crisp typography for executive reporting and client distribution.
3. 🖼️ **1920×1080 High-Res Screenshots (`.png`)**: Enables autonomous visual inspection and self-correction by the AI agent via multimodal vision tools.

---

## 🇰🇷 Korean Typography Governance

Korean fonts often suffer from visual dispersion due to square glyph metrics. `korean-presentation-master` strictly enforces:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              KOREAN TYPOGRAPHY MATRIX                                  │
├──────────────────────────┬─────────────────────────────────────────────────────────────┤
│ Negative Letter Spacing  │ letter-spacing: -0.025em for dense, cohesive text blocks    │
│ Word-Break Preservation  │ word-break: keep-all; prevents awkward character-level cuts │
│ Trailing Particle Guard  │ Semantic wrapping stops isolated particles (은/는/이/가/을/를)│
│ Pro Font Hierarchy       │ Pretendard / Apple SD Gothic Neo font stack                 │
│ Modular Line Heights     │ Title: 1.28 | Section: 1.32 | Body: 1.55                    │
└──────────────────────────┴─────────────────────────────────────────────────────────────┘
```

---

## 🤖 How AI Agents Use This Skill

```mermaid
flowchart LR
    A[User Prompt] --> B[AI Agent with korean-presentation-master]
    B --> C[Draft Markdown with Korean Typography & UI/UX]
    C --> D[Compile via marp_compiler.js]
    D --> E[Multi-Format Deliverables]
    E --> E1[100% Native .pptx]
    E --> E2[Vector .pdf]
    E --> E3[1920x1080 .png]
    E3 --> F[AI Vision Tool view_file]
    F -->|Self-Correction & Quality Gate| G[Flawless Presentation Delivered]
```

1. **Rule Enforcement**: The AI Agent references [`korean_typography_spacing_guide.md`](skills/korean-presentation-master/references/korean_typography_spacing_guide.md) and [`layout_catalog.md`](skills/korean-presentation-master/references/layout_catalog.md) to generate structured Marp markdown.
2. **Autonomous Visual Inspection Loop**: After compilation, the AI Agent invokes its `view_file` vision tool on `slides_preview/slide.*.png` to inspect spacing, padding, text overlapping, and visual center balance.

---

## 🏛️ 5 Pillars of Pro Design Governance

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                 DESIGN GOVERNANCE MATRIX                                │
├──────────────────────────────┬──────────────────────────────────────────────────────────┤
│ 1. Visual Center Equilibrium │ Eliminates top-heavy clutter; 1:1 vertical padding balance│
│ 2. Korean Typography Core    │ -0.025em tracking, keep-all preservation, orphan guard    │
│ 3. Dark Glassmorphism        │ 60-30-10 rule + 24px neon micro-badges for instant focus │
│ 4. Harmonious 8pt Spacing    │ 20px 22px card padding, 26px tier-separation margin      │
│ 5. Anti-Occlusion Layout     │ 0% overlap/clipping guaranteed via strict height budgets │
└──────────────────────────────┴──────────────────────────────────────────────────────────┘
```

### 1. ⚖️ Visual Center Equilibrium (Balanced Vertical Gravity)
- Replaces naive top-alignment (`flex-start`) with **`justify-content: center`**.
- Content blocks float naturally along the **Visual Center Axis**, establishing balanced 1:1 top/bottom breathing zones.

### 2. 🔮 Dark Glassmorphism & 24px Micro-Badges
- **Surface**: `linear-gradient(180deg, rgba(26, 35, 54, 0.7) 0%, rgba(18, 24, 38, 0.95) 100%)` with `1px rgba(255, 255, 255, 0.09)` border.
- **Micro-Badges**: 24px circular translucent badges (`01`, `02`, `03`) with neon accents (Cyan `#00F0FF`, Purple `#A78BFA`, Blue `#38BDF8`, Green `#34D399`, Yellow `#FACC15`, Red `#F87171`).
- **WCAG AAA Compliance**: High-contrast text palette (`#FFFFFF` to `#E2E8F0`) ensures flawless legibility.

### 3. 📐 8pt Grid & Breathing Room
- Generous card padding (`padding: 20px 22px`) and grid gutters (`gap: 16px ~ 20px`) prevent crowded text blocks.

### 4. 🛡️ Zero-Collision Layout (Anti-Occlusion)
- All slides strictly budget height within the **640px usable viewport** (1280×720 canvas), eliminating vertical clipping and overflow.

---

## 🖼️ Verified Output Showcase

*Live renders generated by `korean-presentation-master` for the **AFSM (Android Finite State Machine)** technical session:*

<table width="100%">
<tr>
<td width="50%" align="center">
<img src="slides_preview/slide.001.png" alt="Slide 01: Hero Cover" width="100%"/><br/>
<b>Slide 01. Hero Cover</b><br/>
<sub>Between Gravity • Bold Korean Title Hierarchy • Glassmorphic Metadata Pill</sub>
</td>
<td width="50%" align="center">
<img src="slides_preview/slide.002.png" alt="Slide 02: Agenda Split" width="100%"/><br/>
<b>Slide 02. Agenda (32:68 Asymmetric Split)</b><br/>
<sub>Anti-Clipping 48px Gutter • 2x2 Glassmorphism Cards with Neon Badges</sub>
</td>
</tr>
<tr>
<td width="50%" align="center">
<img src="slides_preview/slide.003.png" alt="Slide 03: Problem Statement" width="100%"/><br/>
<b>Slide 03. Problem Statement</b><br/>
<sub>Red/Yellow/Blue Top Accents • High-Contrast Numbering • 3-Card Grid</sub>
</td>
<td width="50%" align="center">
<img src="slides_preview/slide.004.png" alt="Slide 04: Paradigm Shift Quote" width="100%"/><br/>
<b>Slide 04. Paradigm Shift Quote</b><br/>
<sub>Center Focus Gravity • Cyan & Gold Neon Highlights • Feature Checklist</sub>
</td>
</tr>
<tr>
<td width="50%" align="center">
<img src="slides_preview/slide.005.png" alt="Slide 05: Core 3 Pillars" width="100%"/><br/>
<b>Slide 05. Core Architecture 3 Pillars</b><br/>
<sub>Purple/Blue/Green Signature Borders • Modular Bullet Points • 24px Badges</sub>
</td>
<td width="50%" align="center">
<img src="slides_preview/slide.006.png" alt="Slide 06: UDF Flow Pipeline" width="100%"/><br/>
<b>Slide 06. UDF Data Flow Pipeline</b><br/>
<sub>Horizontal 4-Step Pipeline • Arrow Connectors • 2-Row Role Division</sub>
</td>
</tr>
<tr>
<td width="50%" align="center">
<img src="slides_preview/slide.007.png" alt="Slide 07: Key Engineering Stats" width="100%"/><br/>
<b>Slide 07. Big Stats & Metrics</b><br/>
<sub>0ms Yellow • 100% Cyan • 0 Error Purple • Giant KPI Typography</sub>
</td>
<td width="50%" align="center">
<img src="slides_preview/slide.008.png" alt="Slide 08: Summary & CTA" width="100%"/><br/>
<b>Slide 08. Summary & Call-To-Action</b><br/>
<sub>3 Takeaway Cards • Interactive GitHub & Q&A Action Banner</sub>
</td>
</tr>
</table>

---

## 📦 Project & Skill Structure

```
korean-presentation-master/
├── 📁 skills/korean-presentation-master/  # AI Agent Skill Package
│   ├── 📜 SKILL.md                       # Agent System Prompt & Governance Rules
│   ├── 📁 references/                    # Engineering Reference Guides
│   │   ├── korean_typography_spacing_guide.md # Hangul Typography & Spacing Guide (-0.025em)
│   │   ├── gravity_spacing_occlusion_guide.md # Visual Center & Spacing Standards
│   │   ├── ui_ux_methodologies.md             # Gestalt & Cognitive Principles
│   │   ├── layout_catalog.md                  # 20+ Verified Layout Recipes
│   │   ├── design_systems.md                  # Color & Surface Tokens
│   │   └── storytelling_framework.md          # 5-Stage Executive Narrative Framework
│   └── 📁 scripts/
│       ├── marp_compiler.js               # PPTX + PDF + 1920x1080 PNG Batch Compiler
│       └── slide_engine.py                # Python Slide Orchestration Utility
│
├── 📁 examples/afsm/                      # Reference Production Deck
│   ├── afsm_presentation.md               # Source Markdown
│   ├── Afsm_Presentation.pptx             # Native PPTX (0% Corruption)
│   ├── Afsm_Presentation.pdf              # Vector PDF
│   └── slides_preview/                    # 1920x1080 PNG Images
│
├── 📄 package.json                       # CLI Build Scripts
├── 📄 LICENSE                             # MIT License
└── 📄 README.md                           # Documentation Hub
```

---

## 💻 Quick Start & CLI Usage

### 1. Installation
```bash
git clone https://github.com/kez-lab/presentation-master.git
cd presentation-master
npm install
```

### 2. Build Presentation (PPTX + PDF + PNG)
```bash
# Compile AFSM Example Deck
npm run build:afsm

# Or compile any custom markdown presentation
node skills/korean-presentation-master/scripts/marp_compiler.js <input.md> <output_dir> [output_base_name]
```

---

## 🧩 Install as an AI Agent Skill

To install **Korean Presentation Master** into your **Google Antigravity** environment:

```bash
# Copy skill into Antigravity user config
mkdir -p ~/.gemini/config/skills/korean-presentation-master
cp -r skills/korean-presentation-master/* ~/.gemini/config/skills/korean-presentation-master/
```

Now prompt your agent:
> *"Create an 8-slide presentation in Korean explaining [Your Topic] using the korean-presentation-master skill with pro UI/UX design governance."*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
