'use strict';

/**
 * Turns the governance rules in SKILL.md and references/ into machine checks
 * against the measured slide geometry. This is the gate between "rendered HTML"
 * and "convert to PPTX".
 */

const { SLIDE_W_PX, SLIDE_H_PX, GOVERNANCE, SAFE_FONTS } = require('./constants');

const HANGUL = /[가-힣ᄀ-ᇿ㄰-㆏]/;
/** Josa / short connectives that must never be stranded on their own line. */
const KOREAN_PARTICLE = /^(은|는|이|가|을|를|의|에|와|과|도|로|으로|만|께|부터|까지|에서|에게|이다|입니다|한다|합니다)$/;

function srgb(c) {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
function luminance(rgb) {
  return 0.2126 * srgb(rgb[0]) + 0.7152 * srgb(rgb[1]) + 0.0722 * srgb(rgb[2]);
}
function contrastRatio(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
}
function hexToRgb(hex) {
  const h = String(hex).replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
function overlapArea(a, b) {
  const w = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const h = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  return w > 0 && h > 0 ? w * h : 0;
}
const short = (s, n = 34) => (s.length > n ? s.slice(0, n) + '…' : s);

/**
 * @param {Array} slides   extractor output
 * @param {Array} deckSlides  renderDeck() slides (for notes)
 */
function auditDeck(slides, deckSlides, opts = {}) {
  const strict = !!opts.strict;
  const findings = [];
  const add = (slide, level, rule, message, detail) =>
    findings.push({ slide, level, rule, message, detail: detail || null });

  slides.forEach((s, i) => {
    const n = s.index;
    const notes = (deckSlides[i] && deckSlides[i].notes) || '';

    /* ---- 1. Canvas overflow: content spilling outside 1280x720 ---- */
    const tol = GOVERNANCE.overflowTolerancePx;
    const b = s.bounds;
    const spill = [];
    if (b.top < -tol) spill.push(`top ${Math.round(-b.top)}px`);
    if (b.left < -tol) spill.push(`left ${Math.round(-b.left)}px`);
    if (b.right > SLIDE_W_PX + tol) spill.push(`right ${Math.round(b.right - SLIDE_W_PX)}px`);
    if (b.bottom > SLIDE_H_PX + tol) spill.push(`bottom ${Math.round(b.bottom - SLIDE_H_PX)}px`);
    if (spill.length) {
      add(n, 'error', 'canvas-overflow', `Content spills off the canvas (${spill.join(', ')}). It will be clipped in PPTX.`);
    }

    /* ---- 2. Visual Center Equilibrium: no top-heavy clutter ---- */
    if (s.texts.length || s.boxes.length) {
      const topGap = Math.max(0, b.top);
      const bottomGap = Math.max(0, SLIDE_H_PX - b.bottom);
      const imbalance = Math.abs(topGap - bottomGap) / SLIDE_H_PX;
      if (imbalance > GOVERNANCE.verticalImbalanceRatio) {
        add(
          n,
          'warn',
          'vertical-imbalance',
          `Top/bottom margins differ by ${Math.round(imbalance * 100)}% of the canvas (top ${Math.round(topGap)}px vs bottom ${Math.round(bottomGap)}px). Re-centre for Visual Center Equilibrium.`
        );
      }
    }

    /* ---- 3. The slide's declared Korean typography ---- */
    if (s.root && s.texts.some((t) => HANGUL.test(t.plain))) {
      const ls = GOVERNANCE.letterSpacing;
      const declared = s.root.letterSpacingEm;
      if (Math.abs(declared - ls.declaredTargetEm) > ls.declaredToleranceEm) {
        add(
          n,
          'warn',
          'letter-spacing',
          `Slide root declares ${declared.toFixed(3)}em letter-spacing (${s.root.letterSpacingDeclared || 'normal'} at a ${s.root.fontSizePx}px root); the Korean standard is ${ls.declaredTargetEm}em.`
        );
      }
      if (s.root.wordBreak !== 'keep-all') {
        add(n, 'warn', 'word-break-root', 'Slide root is missing word-break: keep-all; set it on `section` so every block inherits it.');
      }
    }

    /* ---- 4-8. Per-text-block rules ---- */
    const seenFonts = new Set();
    s.texts.forEach((t) => {
      const label = short(t.plain.trim());
      const korean = HANGUL.test(t.plain);

      t.runs.forEach((r) => {
        // 3. Readability floor
        if (r.fontSize < GOVERNANCE.minFontPx) {
          add(n, strict ? 'error' : 'warn', 'font-too-small', `"${label}" renders at ${r.fontSize.toFixed(1)}px (< ${GOVERNANCE.minFontPx}px) and will be unreadable when projected.`);
        }
        // 4. Fonts that silently substitute on the audience's machine
        if (r.font && !SAFE_FONTS.has(r.font) && !seenFonts.has(r.font)) {
          seenFonts.add(r.font);
          add(n, 'warn', 'unsafe-font', `Font "${r.font}" is not installed on stock PowerPoint and will be substituted. Add a safe fallback.`);
        }
      });

      const base = t.runs[0];
      if (korean) {
        // 5. Guard rails on what actually renders. The declared value is checked
        //    once per slide (below); here we only catch spacing that is genuinely
        //    cramped or loose enough to hurt Korean legibility, whatever caused it.
        const ls = GOVERNANCE.letterSpacing;
        if (base.letterSpacingEm < ls.effectiveTightestEm) {
          add(n, 'warn', 'letter-spacing-extreme', `"${label}" renders at ${base.letterSpacingEm.toFixed(3)}em on ${base.fontSize.toFixed(1)}px text — tighter than ${ls.effectiveTightestEm}em and cramped for Hangul. Set letter-spacing on this block directly.`);
        } else if (base.letterSpacingEm > ls.effectiveLoosestEm) {
          add(n, 'warn', 'letter-spacing-extreme', `"${label}" renders at +${base.letterSpacingEm.toFixed(3)}em, which breaks 어절 cohesion in Hangul.`);
        }
        // 6. word-break: keep-all
        if (t.wordBreak !== 'keep-all') {
          add(n, 'warn', 'word-break', `"${label}" is missing word-break: keep-all, so Korean words can break mid-syllable.`);
        }
        // 7. Orphans: a stranded tail line
        const lines = t.lines || [];
        if (lines.length > 1) {
          const last = lines[lines.length - 1];
          if (last && HANGUL.test(last) && (last.length <= GOVERNANCE.orphanMaxChars || KOREAN_PARTICLE.test(last))) {
            add(n, 'warn', 'korean-orphan', `"${label}" strands "${last}" alone on its last line. Rebalance the break or widen the container.`);
          }
        }
      }

      // 8. Contrast against whatever is actually painted behind the text
      if (t.bgBehind && base) {
        const ratio = contrastRatio(hexToRgb(base.color), t.bgBehind.rgb);
        const isLarge = base.fontSize >= 24 || (base.fontSize >= 18.66 && base.bold);
        const floor = isLarge ? GOVERNANCE.minContrastLarge : GOVERNANCE.minContrastBody;
        if (ratio < floor) {
          add(n, ratio < floor * 0.7 ? 'error' : 'warn', 'low-contrast', `"${label}" has ${ratio}:1 contrast on #${t.bgBehind.hex} (needs ${floor}:1).`);
        }
      }
    });

    /* ---- 9. Overlapping text blocks ---- */
    for (let a = 0; a < s.texts.length; a++) {
      for (let c = a + 1; c < s.texts.length; c++) {
        const ta = s.texts[a];
        const tb = s.texts[c];
        // hitRect narrows to the ink horizontally (full-bleed containers
        // legitimately share horizontal space) while keeping the corrected
        // line-box height, so tight line-heights do not read as collisions.
        const ra = ta.hitRect || ta.inkRect;
        const rb = tb.hitRect || tb.inkRect;
        const area = overlapArea(ra, rb);
        if (!area) continue;
        const smaller = Math.min(ra.w * ra.h, rb.w * rb.h);
        if (smaller > 0 && area / smaller > 0.3) {
          add(n, 'warn', 'text-collision', `"${short(ta.plain.trim(), 22)}" and "${short(tb.plain.trim(), 22)}" overlap by ${Math.round((area / smaller) * 100)}%.`);
        }
      }
    }

    /* ---- 10. Speaker notes ---- */
    if (!notes.trim()) {
      add(n, 'warn', 'missing-notes', 'No speaker notes. Add an HTML comment starting with "note:" to this slide.');
    } else if (notes.trim().length < 40) {
      add(n, 'info', 'thin-notes', `Speaker notes are only ${notes.trim().length} characters; aim for a full spoken paragraph.`);
    }

    /* ---- 11. Fidelity losses reported by the extractor ---- */
    const seenWarn = new Set();
    (s.warnings || []).forEach((w) => {
      if (seenWarn.has(w.rule)) return;
      seenWarn.add(w.rule);
      add(n, 'info', w.rule, w.message);
    });

    /* ---- 12. Empty slide ---- */
    if (!s.texts.length && !s.images.length) {
      add(n, 'error', 'empty-slide', 'Slide contains no text or images.');
    }
  });

  const findingsBySlide = {};
  for (const f of findings) (findingsBySlide[f.slide] = findingsBySlide[f.slide] || []).push(f);

  const counts = {
    error: findings.filter((f) => f.level === 'error').length,
    warn: findings.filter((f) => f.level === 'warn').length,
    info: findings.filter((f) => f.level === 'info').length,
  };

  return {
    slideCount: slides.length,
    counts,
    findings,
    findingsBySlide,
    /** The gate: errors always block; warnings block only under --strict. */
    passed: counts.error === 0 && (!strict || counts.warn === 0),
    strict,
  };
}

function formatReport(audit) {
  const lines = [];
  const bar = '─'.repeat(64);
  lines.push(bar);
  lines.push(` Deck audit · ${audit.slideCount} slides`);
  lines.push(bar);

  if (!audit.findings.length) {
    lines.push(' No findings. Deck is clean.');
  } else {
    const bySlide = audit.findingsBySlide;
    for (const key of Object.keys(bySlide).sort((a, b) => a - b)) {
      lines.push('');
      lines.push(` Slide ${String(key).padStart(2, '0')}`);
      for (const f of bySlide[key]) {
        const tag = f.level === 'error' ? 'ERROR' : f.level === 'warn' ? 'WARN ' : 'INFO ';
        lines.push(`   [${tag}] ${f.rule}: ${f.message}`);
      }
    }
  }

  lines.push('');
  lines.push(bar);
  lines.push(` ${audit.counts.error} error · ${audit.counts.warn} warn · ${audit.counts.info} info`);
  lines.push(` Gate: ${audit.passed ? 'PASS' : 'BLOCKED'}${audit.strict ? ' (strict)' : ''}`);
  lines.push(bar);
  return lines.join('\n');
}

module.exports = { auditDeck, formatReport, contrastRatio };
