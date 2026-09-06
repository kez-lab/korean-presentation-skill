'use strict';

/**
 * Reads the geometry back OUT of a generated .pptx.
 *
 * This is the regression net for the conversion layer. `lib/extract.js` and
 * `lib/pptx.js` translate CSS pixels into EMU, points and shape adjust
 * fractions, and a unit mistake anywhere in that chain still produces a
 * structurally valid file that merely looks wrong — the kind of defect no
 * schema check catches. Snapshotting what actually landed in the OOXML, and
 * diffing it against a committed golden, does catch it.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const EMU_PER_IN = 914400;

function attr(xml, name) {
  const m = xml.match(new RegExp(`${name}="([^"]*)"`));
  return m ? m[1] : null;
}

function parseShape(xml) {
  const off = xml.match(/<a:off\s+x="(-?\d+)"\s+y="(-?\d+)"\s*\/>/);
  const ext = xml.match(/<a:ext\s+cx="(\d+)"\s+cy="(\d+)"\s*\/>/);
  if (!off || !ext) return null;

  // Fill and line live in <p:spPr>. Scoping to it matters: a text frame's first
  // solidFill is the run colour, which would otherwise masquerade as the shape
  // fill and make the snapshot lie about what is painted.
  const spPr = (xml.match(/<p:spPr>[\s\S]*?<\/p:spPr>/) || [''])[0];
  const prst = attr(spPr.match(/<a:prstGeom[^>]*>/)?.[0] || '', 'prst');
  const adj = spPr.match(/<a:gd\s+name="adj"\s+fmla="val (\d+)"/);
  const lnBlock = spPr.match(/<a:ln[^>]*>[\s\S]*?<\/a:ln>/) || spPr.match(/<a:ln[^>]*\/>/);
  const beforeLine = lnBlock ? spPr.slice(0, spPr.indexOf(lnBlock[0])) : spPr;
  const solid = beforeLine.match(/<a:solidFill><a:srgbClr val="([0-9A-Fa-f]{6})"/);
  const lnColor = lnBlock ? (lnBlock[0].match(/<a:srgbClr val="([0-9A-Fa-f]{6})"/) || [])[1] : null;
  const lnW = lnBlock ? attr(lnBlock[0], 'w') : null;

  const body = xml.match(/<a:bodyPr[^>]*>/);
  const runs = [];
  for (const rm of xml.matchAll(/<a:r>([\s\S]*?)<\/a:r>/g)) {
    const r = rm[1];
    const t = (r.match(/<a:t>([\s\S]*?)<\/a:t>/) || [])[1] || '';
    runs.push({
      sz: Number(attr(r, 'sz')) || null,
      b: attr(r, 'b') === '1' ? 1 : 0,
      i: attr(r, 'i') === '1' ? 1 : 0,
      spc: Number(attr(r, 'spc')) || 0,
      color: (r.match(/<a:solidFill><a:srgbClr val="([0-9A-Fa-f]{6})"/) || [])[1] || null,
      font: (r.match(/<a:latin typeface="([^"]*)"/) || [])[1] || null,
      text: t.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'),
    });
  }

  const lnSpc = xml.match(/<a:lnSpc><a:spcPts val="(\d+)"\/><\/a:lnSpc>/);
  const para = xml.match(/<a:pPr[^>]*>/);

  return {
    kind: runs.length ? 'text' : 'shape',
    x: Number(off[1]),
    y: Number(off[2]),
    cx: Number(ext[1]),
    cy: Number(ext[2]),
    prst,
    adj: adj ? Number(adj[1]) : null,
    fill: solid ? solid[1] : null,
    line: lnColor ? { color: lnColor, w: Number(lnW) || 0 } : null,
    wrap: body ? attr(body[0], 'wrap') : null,
    anchor: body ? attr(body[0], 'anchor') : null,
    align: para ? attr(para[0], 'algn') : null,
    lnSpc: lnSpc ? Number(lnSpc[1]) : null,
    runs,
  };
}

/** Unpacks `pptxPath` and returns a comparable description of every slide. */
function snapshotPptx(pptxPath) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kps-snap-'));
  try {
    execFileSync('unzip', ['-qo', pptxPath, '-d', tmp], { stdio: 'ignore' });
    const slidesDir = path.join(tmp, 'ppt', 'slides');
    const files = fs
      .readdirSync(slidesDir)
      .filter((f) => /^slide\d+\.xml$/.test(f))
      .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

    const slides = files.map((f, i) => {
      const xml = fs.readFileSync(path.join(slidesDir, f), 'utf8');
      const shapes = [];
      for (const m of xml.matchAll(/<p:sp>([\s\S]*?)<\/p:sp>/g)) {
        const parsed = parseShape(m[1]);
        if (parsed) shapes.push(parsed);
      }
      const pics = [...xml.matchAll(/<p:pic>([\s\S]*?)<\/p:pic>/g)].length;
      const bg = (xml.match(/<p:bg>[\s\S]*?<a:srgbClr val="([0-9A-Fa-f]{6})"/) || [])[1] || null;
      return { index: i + 1, background: bg, pictures: pics, shapes };
    });

    return { slideCount: slides.length, slides };
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

/**
 * Compares a snapshot against its golden.
 *
 * Coordinates get a tolerance: text geometry depends on font metrics, and the
 * decks load webfonts, so a byte-exact match across machines is not a promise
 * we can keep. Everything discrete — shape counts, text content, colours, font
 * sizes, wrap mode, corner-radius adjust — is compared exactly, which is where
 * unit bugs and dropped elements actually show up.
 */
function diffSnapshots(golden, current, { tolerance = EMU_PER_IN / 48 } = {}) {
  const diffs = [];
  const near = (a, b) => Math.abs((a || 0) - (b || 0)) <= tolerance;

  if (golden.slideCount !== current.slideCount) {
    diffs.push(`slide count ${golden.slideCount} → ${current.slideCount}`);
    return diffs;
  }

  golden.slides.forEach((gs, i) => {
    const cs = current.slides[i];
    const at = `slide ${gs.index}`;
    if (gs.background !== cs.background) diffs.push(`${at}: background #${gs.background} → #${cs.background}`);
    if (gs.pictures !== cs.pictures) diffs.push(`${at}: picture count ${gs.pictures} → ${cs.pictures}`);
    if (gs.shapes.length !== cs.shapes.length) {
      diffs.push(`${at}: shape count ${gs.shapes.length} → ${cs.shapes.length}`);
      return;
    }

    gs.shapes.forEach((g, j) => {
      const c = cs.shapes[j];
      const where = `${at} shape ${j}`;
      const label = (g.runs[0] && g.runs[0].text.slice(0, 20)) || g.prst || g.kind;

      if (g.kind !== c.kind) diffs.push(`${where} (${label}): kind ${g.kind} → ${c.kind}`);
      if (g.prst !== c.prst) diffs.push(`${where} (${label}): geometry ${g.prst} → ${c.prst}`);
      // Exact: an adjust value is a pure unit computation, never font-dependent.
      if (g.adj !== c.adj) diffs.push(`${where} (${label}): corner adjust ${g.adj} → ${c.adj}`);
      if (g.fill !== c.fill) diffs.push(`${where} (${label}): fill ${g.fill} → ${c.fill}`);
      if (JSON.stringify(g.line) !== JSON.stringify(c.line)) diffs.push(`${where} (${label}): line ${JSON.stringify(g.line)} → ${JSON.stringify(c.line)}`);
      if (g.wrap !== c.wrap) diffs.push(`${where} (${label}): wrap ${g.wrap} → ${c.wrap}`);
      if (g.anchor !== c.anchor) diffs.push(`${where} (${label}): anchor ${g.anchor} → ${c.anchor}`);
      if (g.align !== c.align) diffs.push(`${where} (${label}): align ${g.align} → ${c.align}`);
      if (g.lnSpc !== c.lnSpc) diffs.push(`${where} (${label}): line spacing ${g.lnSpc} → ${c.lnSpc}`);

      for (const k of ['x', 'y', 'cx', 'cy']) {
        if (!near(g[k], c[k])) {
          const dpx = Math.round((((c[k] || 0) - (g[k] || 0)) / EMU_PER_IN) * 96);
          diffs.push(`${where} (${label}): ${k} moved ${dpx > 0 ? '+' : ''}${dpx}px`);
        }
      }

      if (g.runs.length !== c.runs.length) {
        diffs.push(`${where} (${label}): run count ${g.runs.length} → ${c.runs.length}`);
        return;
      }
      g.runs.forEach((gr, k) => {
        const cr = c.runs[k];
        for (const f of ['text', 'sz', 'b', 'i', 'spc', 'color', 'font']) {
          if (gr[f] !== cr[f]) diffs.push(`${where} run ${k}: ${f} ${JSON.stringify(gr[f])} → ${JSON.stringify(cr[f])}`);
        }
      });
    });
  });

  return diffs;
}

module.exports = { snapshotPptx, diffSnapshots, EMU_PER_IN };
