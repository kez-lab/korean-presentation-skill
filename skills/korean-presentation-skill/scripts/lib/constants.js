'use strict';

/**
 * Korean Presentation Skill — shared geometry & governance constants.
 *
 * The deck canvas is authored at 1280x720 CSS px. PowerPoint's LAYOUT_WIDE is
 * 13.333in x 7.5in, so the mapping is exactly 96 px/in and 0.75 pt/px. Keeping
 * that relationship exact is what lets the HTML preview and the PPTX agree.
 */

const SLIDE_W_PX = 1280;
const SLIDE_H_PX = 720;
const PX_PER_IN = 96;
const PT_PER_PX = 0.75;

const SLIDE_W_IN = SLIDE_W_PX / PX_PER_IN; // 13.3333
const SLIDE_H_IN = SLIDE_H_PX / PX_PER_IN; // 7.5

const px2in = (px) => Math.round((px / PX_PER_IN) * 10000) / 10000;
const px2pt = (px) => Math.round(px * PT_PER_PX * 100) / 100;

/**
 * Fonts that render reliably on a stock Korean Windows/macOS PowerPoint.
 * Anything outside this list is web-only and will silently substitute on the
 * audience's machine, so the auditor flags it.
 */
const SAFE_FONTS = new Set([
  'Pretendard',
  'Malgun Gothic',
  '맑은 고딕',
  'Apple SD Gothic Neo',
  'Noto Sans KR',
  'Nanum Gothic',
  '나눔고딕',
  'Arial',
  'Helvetica',
  'Calibri',
  'Segoe UI',
  'Georgia',
  'Times New Roman',
  'Courier New',
  'Consolas',
]);

/**
 * Web-only faces mapped to something present on a stock Korean Windows/macOS
 * install. Applied only when --safe-fonts is passed: a deck rendered on a
 * machine that does have the real font should keep it.
 */
const SAFE_FONT_FALLBACKS = {
  Pretendard: 'Malgun Gothic',
  'Noto Sans KR': 'Malgun Gothic',
  'Nanum Gothic': 'Malgun Gothic',
  'Spoqa Han Sans Neo': 'Malgun Gothic',
  Montserrat: 'Arial',
  Inter: 'Segoe UI',
  Poppins: 'Segoe UI',
  Orbitron: 'Arial',
  'Roboto Mono': 'Consolas',
  'JetBrains Mono': 'Consolas',
  'IBM Plex Mono': 'Consolas',
  'Space Mono': 'Consolas',
  'Cormorant Garamond': 'Georgia',
  'Playfair Display': 'Georgia',
  Lora: 'Georgia',
  'Libre Baskerville': 'Georgia',
};

/** Korean typography governance thresholds (see references/korean_typography_spacing_guide.md). */
const GOVERNANCE = {
  /** Text below this rendered size is unreadable when projected. */
  minFontPx: 11,
  /**
   * Letter-spacing is checked at two levels, because CSS resolves an em value
   * once against the element that declares it and then inherits the resulting
   * px. A descendant's effective ratio therefore drifts with its own font-size
   * and is NOT an authoring error — measuring it against the standard produced
   * a flood of false positives.
   */
  letterSpacing: {
    /** What the slide root must declare. */
    declaredTargetEm: -0.025,
    declaredToleranceEm: 0.02,
    /** Per-block guard rails on the value that actually renders. */
    effectiveTightestEm: -0.08,
    effectiveLoosestEm: 0.05,
  },
  /** A trailing line of <= this many Korean chars is an orphan. */
  orphanMaxChars: 2,
  /** Content may not exceed the canvas by more than this many px. */
  overflowTolerancePx: 2,
  /** Visual Center Equilibrium: |topGap - bottomGap| / height must stay under this. */
  verticalImbalanceRatio: 0.28,
  /** WCAG AA for large text; body text is held to 4.5. */
  minContrastLarge: 3.0,
  minContrastBody: 4.5,
  /** Minimum share of slides that must carry speaker notes. */
  minNotesCoverage: 1.0,
};

module.exports = {
  SLIDE_W_PX,
  SLIDE_H_PX,
  SLIDE_W_IN,
  SLIDE_H_IN,
  PX_PER_IN,
  PT_PER_PX,
  px2in,
  px2pt,
  SAFE_FONTS,
  SAFE_FONT_FALLBACKS,
  GOVERNANCE,
};
