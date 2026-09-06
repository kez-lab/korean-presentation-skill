'use strict';

/**
 * Writes the measured display list out as a NATIVE PowerPoint deck: real
 * shapes, real text frames, real speaker notes.
 *
 * This is the difference from the old Marp export, which wrote one flat
 * background image per slide and an empty shape tree — nothing editable,
 * nothing searchable, nothing accessible.
 */

const fs = require('fs');
const path = require('path');
const PptxGenJS = require('pptxgenjs');
const { px2in, px2pt, SLIDE_W_IN, SLIDE_H_IN } = require('./constants');

const clampAlpha = (a) => Math.max(0, Math.min(100, Math.round((1 - (a == null ? 1 : a)) * 100)));

function fillOf(node) {
  if (!node.fill) return { type: 'none' };
  const transparency = clampAlpha(node.fill.alpha);
  return transparency > 0 ? { color: node.fill.hex, transparency } : { color: node.fill.hex };
}

function lineOf(node) {
  if (!node.line) return { type: 'none' };
  const opts = { color: node.line.hex, width: Math.max(0.25, px2pt(node.line.width)) };
  const transparency = clampAlpha(node.line.alpha);
  if (transparency > 0) opts.transparency = transparency;
  return opts;
}

/** CSS runs -> PptxGenJS rich-text array, folding <br> into breakLine. */
function toRichText(text, fontMap) {
  const out = [];
  for (const run of text.runs) {
    if (run.text === '\n') {
      if (out.length) out[out.length - 1].options.breakLine = true;
      else out.push({ text: '', options: { breakLine: true } });
      continue;
    }
    if (!run.text) continue;
    const face = fontMap[run.font] || run.font || undefined;
    const options = {
      fontSize: Math.max(1, px2pt(run.fontSize)),
      bold: !!run.bold,
      italic: !!run.italic,
      color: run.color,
      breakLine: false,
    };
    if (face) options.fontFace = face;
    if (run.underline) options.underline = { style: 'sng' };
    if (run.strike) options.strike = 'sngStrike';
    if (Math.abs(run.letterSpacingPx) > 0.05) options.charSpacing = px2pt(run.letterSpacingPx);
    if (run.alpha != null && run.alpha < 0.98) options.transparency = clampAlpha(run.alpha);
    out.push({ text: run.text, options });
  }
  if (out.length) out[out.length - 1].options.breakLine = false;
  return out.length ? out : [{ text: text.plain || ' ', options: {} }];
}

function imageInput(src) {
  if (!src) return null;
  if (src.startsWith('data:')) return { data: src };
  if (src.startsWith('file://')) {
    const p = decodeURIComponent(src.replace('file://', ''));
    return fs.existsSync(p) ? { path: p } : null;
  }
  if (/^https?:/.test(src)) return { path: src };
  return fs.existsSync(src) ? { path: src } : null;
}

/**
 * @param {Array}  slides      extractor output
 * @param {Array}  deckSlides  renderDeck() slides (source of speaker notes)
 * @param {string} outPath     destination .pptx
 */
async function writePptx(slides, deckSlides, outPath, opts = {}) {
  const fontMap = opts.fontMap || {};
  const pres = new PptxGenJS();

  // Anthropic PPTX rule: 16:9 wide, and never a '#' in a colour value.
  pres.defineLayout({ name: 'KPS_WIDE', width: SLIDE_W_IN, height: SLIDE_H_IN });
  pres.layout = 'KPS_WIDE';
  pres.author = opts.author || 'korean-presentation-skill';
  pres.title = opts.title || path.basename(outPath, '.pptx');
  pres.subject = opts.subject || 'Generated from an audited HTML preview';

  const stats = { shapes: 0, textFrames: 0, images: 0, characters: 0 };

  slides.forEach((s, i) => {
    const slide = pres.addSlide();
    slide.background = { color: s.background ? s.background.hex : 'FFFFFF' };

    // One display list, painted in DOM order, so layering matches the browser.
    const nodes = []
      .concat(s.boxes.map((b) => ({ ...b, kind: 'box' })))
      .concat(s.texts.map((t) => ({ ...t, kind: 'text' })))
      .concat(s.images.map((m) => ({ ...m, kind: 'image' })))
      .sort((a, b) => a.order - b.order);

    for (const node of nodes) {
      const r = node.rect;
      const geom = { x: px2in(r.x), y: px2in(r.y), w: px2in(Math.max(1, r.w)), h: px2in(Math.max(1, r.h)) };

      if (node.kind === 'box') {
        const fill = fillOf(node);
        const line = lineOf(node);
        if (fill.type === 'none' && line.type === 'none') continue;
        const radiusIn = px2in(Math.min(node.radiusPx || 0, Math.min(r.w, r.h) / 2));
        if (radiusIn > 0.01) {
          slide.addShape(pres.ShapeType.roundRect, {
            ...geom,
            fill,
            line,
            // rectRadius is in inches; PptxGenJS converts it to the shape's
            // adjust fraction. radiusPx was already clamped to half the short
            // side so the fraction can never exceed 50%.
            rectRadius: radiusIn,
          });
        } else {
          slide.addShape(pres.ShapeType.rect, { ...geom, fill, line });
        }
        stats.shapes++;
        continue;
      }

      if (node.kind === 'image') {
        const input = imageInput(node.src);
        if (!input) continue;
        slide.addImage({ ...input, ...geom, altText: node.alt || undefined });
        stats.images++;
        continue;
      }

      const rich = toRichText(node, fontMap);
      const align = node.align || 'left';
      // Horizontal slack absorbs Chrome-vs-PowerPoint font-metric drift. It is
      // added on the side the text grows toward, so the visual anchor (the left
      // edge of left-aligned text, the centre of centred text) never moves.
      // Single-line blocks get more, because their container is usually
      // shrink-to-fit and has no spare room at all.
      const slack = node.lineCount > 1 ? 2 : Math.max(6, r.w * 0.08);
      const padL = align === 'right' ? slack : align === 'center' ? slack : 2;
      const padR = align === 'left' ? slack : align === 'center' ? slack : 2;
      const textOpts = {
        ...geom,
        x: px2in(r.x - padL),
        w: px2in(Math.max(1, r.w + padL + padR)),
        align,
        valign: 'top',
        margin: 0,
        isTextBox: true,
        // A block the browser laid out on one line must stay on one line. Its
        // container is often shrink-to-fit, so any font-metric difference in
        // PowerPoint would otherwise push the tail onto a second line.
        wrap: node.lineCount > 1,
        fit: 'none',
        // Exact point spacing rather than a multiple: PowerPoint's "single"
        // spacing is font-metric dependent and would drift from the CSS.
        lineSpacing: px2pt(node.lineHeightPx),
      };
      if (node.isListItem) textOpts.bullet = true;
      slide.addText(rich, textOpts);
      stats.textFrames++;
      stats.characters += (node.plain || '').length;
    }

    const notes = (deckSlides[i] && deckSlides[i].notes) || '';
    if (notes.trim()) slide.addNotes(notes);
  });

  fs.mkdirSync(path.dirname(path.resolve(outPath)), { recursive: true });
  await pres.writeFile({ fileName: outPath });
  return stats;
}

module.exports = { writePptx };
