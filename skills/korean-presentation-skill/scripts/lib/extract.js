'use strict';

/**
 * Measures a rendered deck inside headless Chrome and returns, per slide, a
 * flat display list of boxes / text runs / images with exact geometry and
 * computed styles.
 *
 * Everything downstream (the auditor and the PPTX writer) consumes this same
 * structure, which is why the preview and the deliverable agree.
 */

/* eslint-disable no-undef -- the body of pageExtractor runs in the browser. */
function pageExtractor(SLIDE_W, SLIDE_H) {
  // Displays that own their own line box, and therefore their own PPTX text
  // frame. inline-block is included: badges and chips are authored that way and
  // need their own geometry (and their own background shape).
  const SPLIT_DISPLAY = /^(block|flex|grid|list-item|table|flow-root|table-row|table-cell|inline-block|inline-flex|inline-grid)/;

  function parseColor(str) {
    if (!str) return null;
    const m = str.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(/[,/]/).map((s) => parseFloat(s.trim()));
    const [r, g, b] = parts;
    const a = parts.length > 3 && !Number.isNaN(parts[3]) ? parts[3] : 1;
    if ([r, g, b].some(Number.isNaN)) return null;
    const hex = [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
    return { hex: hex.toUpperCase(), alpha: a, rgb: [r, g, b] };
  }

  /** Averages every colour stop in a CSS gradient into one solid approximation. */
  function gradientToSolid(bgImage) {
    if (!bgImage || bgImage === 'none' || !/gradient/i.test(bgImage)) return null;
    const stops = bgImage.match(/rgba?\([^)]+\)/g) || [];
    const parsed = stops.map(parseColor).filter((c) => c && c.alpha > 0.05);
    if (!parsed.length) return null;
    const n = parsed.length;
    const avg = [0, 1, 2].map((i) => Math.round(parsed.reduce((s, c) => s + c.rgb[i], 0) / n));
    const alpha = parsed.reduce((s, c) => s + c.alpha, 0) / n;
    return {
      hex: avg.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase(),
      alpha,
      rgb: avg,
      approximated: true,
      stops: n,
    };
  }

  function firstFont(family) {
    if (!family) return '';
    return family.split(',')[0].replace(/["']/g, '').trim();
  }

  function isRendered(el, cs) {
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    if (parseFloat(cs.opacity) < 0.05) return false;
    return true;
  }

  function edgeBorders(cs) {
    return ['Top', 'Right', 'Bottom', 'Left'].map((side) => {
      const w = parseFloat(cs['border' + side + 'Width']) || 0;
      const style = cs['border' + side + 'Style'];
      const color = parseColor(cs['border' + side + 'Color']);
      const visible = w > 0.4 && style !== 'none' && style !== 'hidden' && color && color.alpha > 0.05;
      return { side: side.toLowerCase(), width: w, style, color, visible };
    });
  }

  const sections = Array.prototype.slice.call(document.body.querySelectorAll(':scope > section'));

  return sections.map((section, sIdx) => {
    const base = section.getBoundingClientRect();
    const sectionCs = getComputedStyle(section);
    const boxes = [];
    const texts = [];
    const images = [];
    const warnings = [];
    let order = 0;

    const rel = (r) => ({
      x: Math.round((r.left - base.left) * 100) / 100,
      y: Math.round((r.top - base.top) * 100) / 100,
      w: Math.round(r.width * 100) / 100,
      h: Math.round(r.height * 100) / 100,
    });

    const slideBg = (() => {
      const solid = parseColor(sectionCs.backgroundColor);
      const grad = gradientToSolid(sectionCs.backgroundImage);
      if (grad) {
        warnings.push({ rule: 'gradient-approximated', message: 'Slide background gradient flattened to a solid fill in PPTX.' });
        return grad;
      }
      return solid && solid.alpha > 0.05 ? solid : { hex: 'FFFFFF', alpha: 1, rgb: [255, 255, 255] };
    })();

    function emitBoxes(el, cs, r) {
      const rr = rel(r);
      if (rr.w < 1 || rr.h < 1) return;

      const solid = parseColor(cs.backgroundColor);
      const grad = gradientToSolid(cs.backgroundImage);
      const fill = grad || (solid && solid.alpha > 0.03 ? solid : null);
      if (grad && el !== section) {
        warnings.push({ rule: 'gradient-approximated', message: 'Element gradient flattened to a solid fill (' + grad.stops + ' stops).' });
      }

      const borders = edgeBorders(cs);
      const visible = borders.filter((b) => b.visible);
      const uniform =
        visible.length === 4 &&
        visible.every((b) => Math.abs(b.width - visible[0].width) < 0.6 && b.color.hex === visible[0].color.hex);

      const radiusPx = Math.max(
        0,
        ...['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'].map(
          (k) => parseFloat(cs[k]) || 0
        )
      );

      if (fill || uniform) {
        boxes.push({
          kind: 'box',
          order: order++,
          rect: rr,
          fill: fill ? { hex: fill.hex, alpha: fill.alpha } : null,
          line: uniform ? { hex: visible[0].color.hex, alpha: visible[0].color.alpha, width: visible[0].width } : null,
          radiusPx,
          tag: el.tagName.toLowerCase(),
        });
      }

      // A partial border (the "top accent bar" pattern) becomes its own filled
      // sliver: PowerPoint shapes cannot carry per-edge outlines.
      if (!uniform) {
        for (const b of visible) {
          const bar = { ...rr };
          if (b.side === 'top') bar.h = b.width;
          else if (b.side === 'bottom') { bar.y = rr.y + rr.h - b.width; bar.h = b.width; }
          else if (b.side === 'left') bar.w = b.width;
          else { bar.x = rr.x + rr.w - b.width; bar.w = b.width; }
          boxes.push({
            kind: 'box',
            order: order++,
            rect: bar,
            fill: { hex: b.color.hex, alpha: b.color.alpha },
            line: null,
            radiusPx: 0,
            tag: el.tagName.toLowerCase() + ':border-' + b.side,
          });
        }
      }
    }

    function runStyle(el) {
      const cs = getComputedStyle(el);
      const color = parseColor(cs.color) || { hex: '000000', alpha: 1, rgb: [0, 0, 0] };
      const fontSize = parseFloat(cs.fontSize) || 16;
      let ls = cs.letterSpacing;
      const lsPx = !ls || ls === 'normal' ? 0 : parseFloat(ls) || 0;
      let lh = cs.lineHeight;
      const lhPx = !lh || lh === 'normal' ? fontSize * 1.2 : parseFloat(lh) || fontSize * 1.2;
      return {
        font: firstFont(cs.fontFamily),
        fontStack: cs.fontFamily,
        fontSize,
        bold: parseInt(cs.fontWeight, 10) >= 600 || cs.fontWeight === 'bold',
        italic: cs.fontStyle === 'italic',
        underline: /underline/.test(cs.textDecorationLine || cs.textDecoration || ''),
        strike: /line-through/.test(cs.textDecorationLine || cs.textDecoration || ''),
        color: color.hex,
        colorRgb: color.rgb,
        alpha: color.alpha,
        letterSpacingPx: lsPx,
        letterSpacingEm: fontSize ? lsPx / fontSize : 0,
        lineHeightPx: lhPx,
        lineHeightRatio: fontSize ? lhPx / fontSize : 1.2,
        align: cs.textAlign === 'start' ? 'left' : cs.textAlign === 'end' ? 'right' : cs.textAlign,
        transform: cs.textTransform,
        wordBreak: cs.wordBreak,
        clipsToText: cs.webkitBackgroundClip === 'text' || cs.backgroundClip === 'text',
      };
    }

    function applyTransform(text, transform) {
      if (transform === 'uppercase') return text.toUpperCase();
      if (transform === 'lowercase') return text.toLowerCase();
      return text;
    }

    /** Flattens an inline subtree into styled runs. */
    function collectRuns(nodes, inheritedEl, out) {
      for (const node of nodes) {
        if (node.nodeType === 3) {
          const raw = node.nodeValue.replace(/\s+/g, ' ');
          if (!raw.trim()) {
            if (out.length) out[out.length - 1].text += raw.endsWith(' ') ? ' ' : '';
            continue;
          }
          const st = runStyle(inheritedEl);
          out.push({ text: applyTransform(raw, st.transform), style: st });
        } else if (node.nodeType === 1) {
          const tag = node.tagName.toLowerCase();
          if (tag === 'br') {
            out.push({ text: '\n', style: runStyle(inheritedEl), lineBreak: true });
            continue;
          }
          const cs = getComputedStyle(node);
          if (!isRendered(node, cs)) continue;
          collectRuns(Array.prototype.slice.call(node.childNodes), node, out);
        }
      }
    }

    /** Content box of `el`, i.e. its rect minus border and padding. */
    function contentRect(el, cs, r) {
      const bl = parseFloat(cs.borderLeftWidth) || 0;
      const br = parseFloat(cs.borderRightWidth) || 0;
      const pl = parseFloat(cs.paddingLeft) || 0;
      const pr = parseFloat(cs.paddingRight) || 0;
      return {
        left: r.left + bl + pl,
        right: r.right - br - pr,
        width: Math.max(1, r.width - bl - br - pl - pr),
      };
    }

    function emitText(el, cs, r) {
      // Split direct children into contiguous inline groups so that an element
      // holding both text and block children still yields precise geometry.
      const groups = [];
      let cur = [];
      for (const node of Array.prototype.slice.call(el.childNodes)) {
        const isBlock = node.nodeType === 1 && SPLIT_DISPLAY.test(getComputedStyle(node).display);
        if (isBlock) {
          if (cur.length) groups.push(cur);
          cur = [];
        } else {
          cur.push(node);
        }
      }
      if (cur.length) groups.push(cur);

      for (const group of groups) {
        const hasText = group.some((n) => (n.nodeType === 3 ? n.nodeValue.trim() : n.textContent.trim()));
        if (!hasText) continue;

        const range = document.createRange();
        range.setStartBefore(group[0]);
        range.setEndAfter(group[group.length - 1]);
        const ink = range.getBoundingClientRect();
        // Cluster the per-fragment rects into visual lines so we know the real
        // line count without re-implementing line breaking.
        const rows = [];
        for (const rc of Array.prototype.slice.call(range.getClientRects())) {
          if (rc.width < 0.5 || rc.height < 0.5) continue;
          const row = rows.find((x) => Math.abs(x.top - rc.top) < Math.max(2, rc.height * 0.5));
          if (row) {
            row.top = Math.min(row.top, rc.top);
            row.bottom = Math.max(row.bottom, rc.bottom);
          } else {
            rows.push({ top: rc.top, bottom: rc.bottom });
          }
        }
        range.detach && range.detach();
        if (ink.height < 1) continue;

        const runs = [];
        collectRuns(group, el, runs);
        const merged = [];
        for (const run of runs) {
          const prev = merged[merged.length - 1];
          if (prev && !run.lineBreak && !prev.lineBreak && sameStyle(prev.style, run.style)) prev.text += run.text;
          else merged.push({ text: run.text, style: run.style, lineBreak: !!run.lineBreak });
        }
        trimRunEdges(merged);
        if (!merged.length || !merged.map((m) => m.text).join('').trim()) continue;

        const box = contentRect(el, cs, r);
        const base0 = merged[0].style;
        const lineHeightPx = Math.max.apply(null, merged.map((m) => m.style.lineHeightPx));
        const lineCount = Math.max(1, rows.length);
        // Horizontal extent comes from the container so PowerPoint wraps where
        // the browser did. Vertically we reconstruct the CSS line boxes: the ink
        // rect follows font ascent/descent, which overshoots whenever
        // line-height is tighter than normal (every big display number).
        const inkCenterY = ink.top + ink.height / 2;
        const boxH = lineCount * lineHeightPx;
        const rect = rel({
          left: box.left,
          top: inkCenterY - boxH / 2,
          width: box.width,
          height: boxH,
        });

        const inkRel = rel(ink);
        texts.push({
          kind: 'text',
          order: order++,
          rect,
          inkRect: inkRel,
          // Collision box: horizontal extent of the ink (so full-bleed
          // containers do not read as overlapping) with the corrected line-box
          // vertical extent.
          hitRect: { x: inkRel.x, w: inkRel.w, y: rect.y, h: rect.h },
          runs: merged.map((m) => ({ text: m.text, ...m.style })),
          plain: merged.map((m) => m.text).join(''),
          align: base0.align,
          lineHeightPx,
          lineHeightRatio: base0.lineHeightRatio,
          isListItem: cs.display === 'list-item',
          wordBreak: base0.wordBreak,
          lineCount,
          tag: el.tagName.toLowerCase(),
          clipsToText: base0.clipsToText,
          lines: measureLines(group),
          bgBehind: (() => {
            const bg = backgroundBehind(el);
            return { hex: bg.hex, rgb: bg.rgb };
          })(),
        });

        if (base0.clipsToText) {
          warnings.push({ rule: 'text-gradient-approximated', message: 'Gradient-clipped text rendered as a solid colour in PPTX.' });
        }
      }
    }

    /** First opaque-enough background painted behind `el` (its own or an ancestor's). */
    function backgroundBehind(el) {
      let node = el;
      while (node && node !== document.body) {
        const cs = getComputedStyle(node);
        const grad = gradientToSolid(cs.backgroundImage);
        if (grad && grad.alpha > 0.5) return grad;
        const solid = parseColor(cs.backgroundColor);
        if (solid && solid.alpha > 0.5) return solid;
        node = node.parentElement;
      }
      return slideBg;
    }

    /**
     * Recovers the visual lines of a text block, character by character, so
     * orphan detection works on what the reader actually sees rather than on an
     * estimate. Bounded by CHAR_BUDGET to keep large slides fast.
     */
    const CHAR_BUDGET = 1500;
    function measureLines(group) {
      // Bail out rather than return a truncated tail: orphan detection reads the
      // last line, and a half-measured block would produce a bogus finding.
      const total = group.reduce((n, node) => n + (node.textContent || node.nodeValue || '').length, 0);
      if (total > CHAR_BUDGET) return [];
      const lines = [];
      let budget = CHAR_BUDGET;
      const push = (top, ch) => {
        const line = lines.find((l) => Math.abs(l.top - top) < 4);
        if (line) line.text += ch;
        else lines.push({ top, text: ch });
      };
      const visit = (node) => {
        if (budget <= 0) return;
        if (node.nodeType === 3) {
          const value = node.nodeValue;
          for (let i = 0; i < value.length && budget > 0; i++) {
            budget--;
            const range = document.createRange();
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rc = range.getBoundingClientRect();
            range.detach && range.detach();
            if (rc.width === 0 && rc.height === 0) continue;
            push(Math.round(rc.top * 2) / 2, value[i]);
          }
        } else if (node.nodeType === 1) {
          if (node.tagName === 'BR') {
            lines.push({ top: (lines.length ? lines[lines.length - 1].top : 0) + 0.01, text: '' });
            return;
          }
          const cs = getComputedStyle(node);
          if (!isRendered(node, cs)) return;
          Array.prototype.forEach.call(node.childNodes, visit);
        }
      };
      group.forEach(visit);
      return lines
        .sort((a, b) => a.top - b.top)
        .map((l) => l.text.trim())
        .filter((t) => t.length);
    }

    /** Removes collapsed whitespace at the start/end of the block and each line. */
    function trimRunEdges(runs) {
      for (let i = 0; i < runs.length; i++) {
        const atStart = i === 0 || runs[i - 1].lineBreak;
        if (atStart) runs[i].text = runs[i].text.replace(/^\s+/, '');
        const atEnd = i === runs.length - 1 || runs[i + 1].lineBreak;
        if (atEnd) runs[i].text = runs[i].text.replace(/\s+$/, '');
      }
      for (let i = runs.length - 1; i >= 0; i--) {
        if (!runs[i].lineBreak && runs[i].text === '') runs.splice(i, 1);
      }
    }

    function sameStyle(a, b) {
      return (
        a.font === b.font && a.fontSize === b.fontSize && a.bold === b.bold && a.italic === b.italic &&
        a.color === b.color && a.underline === b.underline && a.strike === b.strike &&
        a.letterSpacingPx === b.letterSpacingPx
      );
    }

    function walk(el, captureText) {
      const cs = getComputedStyle(el);
      if (!isRendered(el, cs)) return;
      const r = el.getBoundingClientRect();

      if (el !== section) {
        if (el.tagName === 'IMG') {
          const rr = rel(r);
          if (rr.w >= 1 && rr.h >= 1) images.push({ kind: 'image', order: order++, rect: rr, src: el.currentSrc || el.src, alt: el.alt || '' });
          return;
        }
        // Every element contributes its background/border, including inline ones
        // such as badges and chips.
        emitBoxes(el, cs, r);
      }

      if (captureText) {
        const hasOwnText = Array.prototype.some.call(el.childNodes, (n) => n.nodeType === 3 && n.nodeValue.trim());
        const hasInlineChild = Array.prototype.some.call(
          el.childNodes,
          (n) => n.nodeType === 1 && n.tagName !== 'BR' && !SPLIT_DISPLAY.test(getComputedStyle(n).display) && n.textContent.trim()
        );
        if (hasOwnText || hasInlineChild) emitText(el, cs, r);
      }

      for (const child of Array.prototype.slice.call(el.children)) {
        if (child.tagName === 'BR') continue;
        // A child that owns its line box owns its text too; a purely inline
        // child was already folded into this element's runs, so we descend only
        // to collect its decoration.
        walk(child, SPLIT_DISPLAY.test(getComputedStyle(child).display));
      }
    }

    walk(section, true);

    // Content bounds tell the auditor whether anything spills off the canvas.
    const all = boxes.concat(texts).concat(images);
    const bounds = all.reduce(
      (acc, n) => ({
        top: Math.min(acc.top, n.rect.y),
        left: Math.min(acc.left, n.rect.x),
        right: Math.max(acc.right, n.rect.x + n.rect.w),
        bottom: Math.max(acc.bottom, n.rect.y + n.rect.h),
      }),
      { top: Infinity, left: Infinity, right: -Infinity, bottom: -Infinity }
    );

    return {
      index: sIdx + 1,
      background: slideBg,
      boxes,
      texts,
      images,
      warnings,
      bounds: all.length ? bounds : { top: 0, left: 0, right: 0, bottom: 0 },
      canvas: { w: SLIDE_W, h: SLIDE_H },
    };
  });
}
/* eslint-enable no-undef */

const { SLIDE_W_PX, SLIDE_H_PX } = require('./constants');

/** Runs the extractor against an already-loaded puppeteer page. */
async function extractFromPage(page) {
  return page.evaluate(pageExtractor, SLIDE_W_PX, SLIDE_H_PX);
}

module.exports = { extractFromPage, pageExtractor };
