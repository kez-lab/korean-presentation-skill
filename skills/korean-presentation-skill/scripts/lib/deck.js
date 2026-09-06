'use strict';

/**
 * Markdown deck -> slide HTML + CSS + speaker notes, via marp-core in-process.
 * `inlineSVG: false` is deliberate: it yields plain `<section id="N">` elements
 * whose geometry the auditor and the PPTX writer can measure directly.
 */

const fs = require('fs');
const path = require('path');
const { Marp } = require('@marp-team/marp-core');
const { SLIDE_W_PX, SLIDE_H_PX } = require('./constants');

const NOTE_PREFIX = /^\s*(?:_?notes?|speaker(?:[ _-]?notes?)?)\s*[:：]\s*/i;
/** Authoring scaffolding like `<!-- Slide 3: Hero Cover -->`, never spoken aloud. */
const LAYOUT_LABEL = /^\s*slide\s*\d+\s*[:：]/i;

/**
 * Pulls speaker notes out of a slide's HTML comments.
 * If any comment is explicitly tagged `note:` we take only those; otherwise we
 * fall back to Marp's convention that every comment is a presenter note, minus
 * the layout labels this project uses as section markers.
 */
function commentsToNotes(comments) {
  if (!comments || !comments.length) return '';
  const tagged = comments.filter((c) => NOTE_PREFIX.test(c));
  const source = tagged.length ? tagged : comments.filter((c) => !LAYOUT_LABEL.test(c));
  return source.map((c) => c.replace(NOTE_PREFIX, '').trim()).join('\n\n').trim();
}

function splitSections(html) {
  // marp-core emits sibling <section id="N"> blocks with inlineSVG disabled.
  const parts = [];
  const re = /<section[\s>]/g;
  const starts = [];
  let m;
  while ((m = re.exec(html)) !== null) starts.push(m.index);
  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1] : html.length;
    parts.push(html.slice(starts[i], end).trim());
  }
  return parts;
}

/** Loads a Marp markdown file and returns the pieces the pipeline needs. */
function renderDeck(inputMd, { themeDirs = [] } = {}) {
  const markdown = fs.readFileSync(inputMd, 'utf8');
  const marp = new Marp({
    html: true,
    inlineSVG: false,
    container: false,
    slideContainer: false,
    script: false,
    math: false,
  });

  for (const dir of themeDirs) {
    if (!dir || !fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.css')) continue;
      try {
        marp.themeSet.add(fs.readFileSync(path.join(dir, file), 'utf8'));
      } catch (err) {
        console.warn(`[deck] skipped theme ${file}: ${err.message}`);
      }
    }
  }

  const { html, css, comments } = marp.render(markdown);
  const sections = splitSections(html);

  const slides = sections.map((sectionHtml, i) => ({
    index: i + 1,
    html: sectionHtml,
    notes: commentsToNotes(comments[i]),
    rawComments: comments[i] || [],
  }));

  return { markdown, css, slides, sourcePath: path.resolve(inputMd) };
}

/**
 * Builds the reviewable HTML artifact. This is the human gate of the pipeline:
 * every slide is rendered at true 1280x720 with a contact-sheet / single-slide
 * toggle, so problems are seen before anything is converted to PPTX.
 */
function buildPreviewHtml(deck, { title = 'Deck Preview', audit = null } = {}) {
  const findings = audit ? audit.findingsBySlide || {} : {};

  const slideBlocks = deck.slides
    .map((s) => {
      const f = findings[s.index] || [];
      const errs = f.filter((x) => x.level === 'error').length;
      const warns = f.filter((x) => x.level === 'warn').length;
      const status = errs ? 'error' : warns ? 'warn' : 'ok';
      const badge = errs
        ? `${errs} error${errs > 1 ? 's' : ''}${warns ? ` · ${warns} warn` : ''}`
        : warns
        ? `${warns} warn${warns > 1 ? 's' : ''}`
        : 'clean';
      const issueList = f.length
        ? `<ul class="kps-issues">${f
            .map((x) => `<li class="lv-${x.level}"><b>${escapeHtml(x.rule)}</b> ${escapeHtml(x.message)}</li>`)
            .join('')}</ul>`
        : '';
      const notes = s.notes
        ? `<div class="kps-notes"><h4>Speaker notes</h4><p>${escapeHtml(s.notes).replace(/\n/g, '<br>')}</p></div>`
        : '<div class="kps-notes kps-notes-missing"><h4>Speaker notes</h4><p>— none —</p></div>';

      return `<article class="kps-item" data-status="${status}" data-slide="${s.index}">
  <header class="kps-bar">
    <span class="kps-num">${String(s.index).padStart(2, '0')}</span>
    <span class="kps-badge kps-${status}">${badge}</span>
  </header>
  <div class="kps-stage"><div class="kps-canvas">${s.html}</div></div>
  ${issueList}
  ${notes}
</article>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
/* ---- deck styles emitted by marp-core ---- */
${deck.css}
/* ---- review chrome (never reaches the PPTX) ---- */
:root { color-scheme: dark; }
body.kps-review {
  margin: 0; background: #0b0d12; color: #cbd5e1;
  font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
  letter-spacing: -0.02em;
}
.kps-top {
  position: sticky; top: 0; z-index: 50; display: flex; align-items: center; gap: 16px;
  padding: 14px 28px; background: rgba(10,12,18,.92); backdrop-filter: blur(8px);
  border-bottom: 1px solid #1e2432;
}
.kps-top h1 { font-size: 15px; margin: 0; color: #f1f5f9; font-weight: 700; }
.kps-top .kps-sum { font-size: 12px; color: #94a3b8; }
.kps-top .kps-sum b.err { color: #f87171; }
.kps-top .kps-sum b.warn { color: #fbbf24; }
.kps-top .kps-sum b.ok { color: #34d399; }
.kps-top .kps-actions { margin-left: auto; display: flex; gap: 8px; }
.kps-top button {
  font: inherit; font-size: 12px; padding: 6px 12px; border-radius: 6px; cursor: pointer;
  background: #161b26; color: #cbd5e1; border: 1px solid #2a3348;
}
.kps-top button[aria-pressed="true"] { background: #2563eb; border-color: #3b82f6; color: #fff; }
.kps-list { padding: 28px; display: grid; gap: 32px; }
body.kps-fit .kps-list { grid-template-columns: repeat(auto-fill, minmax(560px, 1fr)); }
.kps-item { background: #11151f; border: 1px solid #1e2432; border-radius: 12px; overflow: hidden; }
.kps-item[data-status="error"] { border-color: #7f1d1d; }
.kps-item[data-status="warn"]  { border-color: #78350f; }
body.kps-only-issues .kps-item[data-status="ok"] { display: none; }
.kps-bar { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid #1e2432; }
.kps-num { font-variant-numeric: tabular-nums; font-weight: 800; color: #64748b; font-size: 12px; }
.kps-badge { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
.kps-ok    { background: #052e21; color: #34d399; }
.kps-warn  { background: #3a2606; color: #fbbf24; }
.kps-error { background: #431111; color: #f87171; }
/* The stage keeps each slide at its true 1280x720 and scales it down visually,
   so measurements taken later match exactly what is shown here. */
.kps-stage { width: 100%; overflow: hidden; background: #05070c; }
.kps-canvas {
  width: ${SLIDE_W_PX}px; height: ${SLIDE_H_PX}px;
  transform-origin: top left; transform: scale(var(--kps-scale, 1));
}
.kps-canvas > section {
  width: ${SLIDE_W_PX}px !important; height: ${SLIDE_H_PX}px !important;
  margin: 0 !important; overflow: hidden;
}
.kps-issues { margin: 0; padding: 12px 18px; list-style: none; border-top: 1px solid #1e2432; font-size: 12px; }
.kps-issues li { padding: 3px 0; }
.kps-issues li.lv-error b { color: #f87171; }
.kps-issues li.lv-warn b  { color: #fbbf24; }
.kps-issues li.lv-info b  { color: #60a5fa; }
.kps-notes { padding: 12px 18px; border-top: 1px solid #1e2432; font-size: 12px; line-height: 1.6; }
.kps-notes h4 { margin: 0 0 6px; font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: #64748b; }
.kps-notes p { margin: 0; color: #94a3b8; }
.kps-notes-missing p { color: #f87171; }
@media print {
  .kps-top, .kps-issues, .kps-notes, .kps-bar { display: none !important; }
  body.kps-review { background: #fff; }
  .kps-list { padding: 0; gap: 0; display: block; }
  .kps-item { border: 0; border-radius: 0; }
  .kps-canvas { transform: none !important; }
}
</style>
</head>
<body class="kps-review kps-fit">
<div class="kps-top">
  <h1>${escapeHtml(title)}</h1>
  <span class="kps-sum" id="kps-sum"></span>
  <div class="kps-actions">
    <button id="kps-view" aria-pressed="true">Contact sheet</button>
    <button id="kps-filter" aria-pressed="false">Issues only</button>
  </div>
</div>
<main class="kps-list">
${slideBlocks}
</main>
<script>
(function () {
  var body = document.body;
  var stages = Array.prototype.slice.call(document.querySelectorAll('.kps-stage'));

  function rescale() {
    stages.forEach(function (stage) {
      var canvas = stage.querySelector('.kps-canvas');
      var scale = stage.clientWidth / ${SLIDE_W_PX};
      canvas.style.setProperty('--kps-scale', scale);
      stage.style.height = Math.round(${SLIDE_H_PX} * scale) + 'px';
    });
  }
  window.addEventListener('resize', rescale);
  rescale();

  var counts = { error: 0, warn: 0, ok: 0 };
  document.querySelectorAll('.kps-item').forEach(function (el) {
    counts[el.dataset.status] = (counts[el.dataset.status] || 0) + 1;
  });
  document.getElementById('kps-sum').innerHTML =
    document.querySelectorAll('.kps-item').length + ' slides · ' +
    '<b class="err">' + counts.error + ' error</b> · ' +
    '<b class="warn">' + counts.warn + ' warn</b> · ' +
    '<b class="ok">' + counts.ok + ' clean</b>';

  var viewBtn = document.getElementById('kps-view');
  viewBtn.addEventListener('click', function () {
    var fit = body.classList.toggle('kps-fit');
    viewBtn.setAttribute('aria-pressed', String(fit));
    viewBtn.textContent = fit ? 'Contact sheet' : 'Full width';
    requestAnimationFrame(rescale);
  });

  var filterBtn = document.getElementById('kps-filter');
  filterBtn.addEventListener('click', function () {
    var on = body.classList.toggle('kps-only-issues');
    filterBtn.setAttribute('aria-pressed', String(on));
    requestAnimationFrame(rescale);
  });
})();
</script>
</body>
</html>`;
}

/**
 * A stripped document holding only the slides — no review chrome, no scaling.
 * The auditor and the PPTX writer measure this so their numbers describe the
 * real slide, not the preview's transform.
 */
function buildMeasureHtml(deck) {
  return `<!DOCTYPE html>
<html lang="ko"><head><meta charset="utf-8"><title>measure</title>
<style>
${deck.css}
html, body { margin: 0; padding: 0; background: #fff; }
/* Pin the canvas but leave display and overflow to the deck's own CSS so
   the auditor sees real, unclipped overflow. */
body > section {
  width: ${SLIDE_W_PX}px !important;
  height: ${SLIDE_H_PX}px !important;
  margin: 0 !important;
  overflow: visible !important;
}
</style></head>
<body>
${deck.slides.map((s) => s.html).join('\n')}
</body></html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

module.exports = { renderDeck, buildPreviewHtml, buildMeasureHtml, escapeHtml };
