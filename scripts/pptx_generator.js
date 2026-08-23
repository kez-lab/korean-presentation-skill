#!/usr/bin/env node

/**
 * Korean Presentation Skill: Native PptxGenJS Generator
 * Built with full adherence to Anthropic's Official PPTX Skill Guidelines & Footguns Avoidance.
 */

const fs = require('fs');
const path = require('path');
const pptxgen = require('pptxgenjs');

function createSampleDeck(outputPath = 'native_deck.pptx') {
  const pres = new pptxgen();

  // 1. Mandatory Anthropic Rule: Set Layout Wide (16:9 13.3" x 7.5")
  pres.layout = 'LAYOUT_WIDE';

  // 2. Color Palette (Anthropic Rule: Never use '#', never use 8-char hex)
  const COLORS = {
    bgDark: '0A0E17',
    cardBg: '121826',
    border: '2A344A',
    textWhite: 'FFFFFF',
    textMuted: '94A3B8',
    accentCyan: '00F0FF',
    accentBlue: '38BDF8',
    accentPurple: 'A78BFA',
    accentGold: 'FACC15',
    accentGreen: '34D399',
  };

  // --- SLIDE 1: Hero Cover ---
  const slide1 = pres.addSlide();
  slide1.background = { color: COLORS.bgDark };

  // Category Kicker
  slide1.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.2,
    w: 2.4,
    h: 0.4,
    rectRadius: 0.2,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentCyan, width: 1 },
  });
  slide1.addText('ANDROID ARCHITECTURE', {
    x: 0.8,
    y: 1.2,
    w: 2.4,
    h: 0.4,
    fontSize: 10,
    bold: true,
    color: COLORS.accentCyan,
    align: 'center',
    valign: 'middle',
    margin: 0,
  });

  // Main Title
  slide1.addText('ViewModel에 흩어진 화면 흐름을\n상태 머신(FSM)으로 묶는 Afsm', {
    x: 0.8,
    y: 1.8,
    w: 11.5,
    h: 2.0,
    fontSize: 32,
    bold: true,
    color: COLORS.textWhite,
    fontFace: 'Pretendard',
    lineSpacingMultiple: 1.2,
    margin: 0,
  });

  // Subtitle
  slide1.addText('Boolean 지옥을 넘어 순수 Kotlin으로 구축하는 예측 가능하고 안전한 화면 아키텍처', {
    x: 0.8,
    y: 4.0,
    w: 11.5,
    h: 0.6,
    fontSize: 15,
    color: COLORS.textMuted,
    fontFace: 'Pretendard',
    margin: 0,
  });

  // 3-Chip Metadata Grid (Anthropic & Korean Presentation Skill UX)
  const chips = [
    { label: 'PRESENTER & TEAM', val: '홍길동 • Architecture Lead', x: 0.8 },
    { label: 'SESSION & DATE', val: 'Tech Deep Dive • 2026.08', x: 4.8 },
    { label: 'REPOSITORY & DOCS', val: 'github.com/kez-lab/afsm', x: 8.8 },
  ];

  chips.forEach((chip) => {
    slide1.addShape(pres.ShapeType.roundRect, {
      x: chip.x,
      y: 5.4,
      w: 3.7,
      h: 1.1,
      rectRadius: 0.15,
      fill: { color: COLORS.cardBg },
      line: { color: COLORS.border, width: 1 },
    });
    slide1.addText(
      [
        { text: chip.label + '\n', options: { fontSize: 9, bold: true, color: COLORS.accentCyan } },
        { text: chip.val, options: { fontSize: 11, bold: true, color: COLORS.textWhite } },
      ],
      {
        x: chip.x + 0.2,
        y: 5.5,
        w: 3.3,
        h: 0.9,
        valign: 'middle',
        margin: 0,
      }
    );
  });

  // Anthropic Rule: Add speaker notes via API, not slide textbox
  slide1.addNotes('안녕하십니까, 오늘 발표를 맡은 안드로이드 아키텍처 팀 홍길동입니다. 오늘은 ViewModel 상태 관리의 한계를 극복하는 Afsm 프레임워크를 소개해 드리겠습니다.');

  // --- SLIDE 2: Native Big Stats & Chart ---
  const slide2 = pres.addSlide();
  slide2.background = { color: COLORS.bgDark };

  slide2.addText('엔지니어링 도입 성과 및 벤치마크', {
    x: 0.8,
    y: 0.8,
    w: 11.5,
    h: 0.8,
    fontSize: 26,
    bold: true,
    color: COLORS.textWhite,
    fontFace: 'Pretendard',
    margin: 0,
  });

  // Stat Card 1
  slide2.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.8,
    w: 3.6,
    h: 4.8,
    rectRadius: 0.15,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.accentGold, width: 1.5 },
  });
  slide2.addText(
    [
      { text: '0 ms\n', options: { fontSize: 36, bold: true, color: COLORS.accentGold } },
      { text: 'Mock-Free 단위 테스트\n\n', options: { fontSize: 14, bold: true, color: COLORS.textWhite } },
      { text: '• Repository Mock 필요 없음\n', options: { fontSize: 11, color: COLORS.textMuted, bullet: true } },
      { text: '• Dispatcher 없이 즉시 전이 검증\n', options: { fontSize: 11, color: COLORS.textMuted, bullet: true } },
      { text: '• CI 빌드 파이프라인 0ms 검증', options: { fontSize: 11, color: COLORS.textMuted, bullet: true } },
    ],
    {
      x: 1.1,
      y: 2.1,
      w: 3.0,
      h: 4.2,
      margin: 0,
    }
  );

  // Native Chart (Anthropic Rule: Native PowerPoint chart with styled palette)
  const chartData = [
    {
      name: '기존 ViewModel',
      labels: ['테스트 시간(ms)', '회귀 버그(건)', '상태 파편화(개)'],
      values: [450, 24, 18],
    },
    {
      name: 'Afsm FSM 도입',
      labels: ['테스트 시간(ms)', '회귀 버그(건)', '상태 파편화(개)'],
      values: [0, 0, 1],
    },
  ];

  slide2.addChart(pres.ChartType.bar, chartData, {
    x: 4.8,
    y: 1.8,
    w: 7.7,
    h: 4.8,
    showTitle: true,
    title: '아키텍처 도입 전/후 정량 지표 비교',
    titleColor: COLORS.textWhite,
    titleFontSize: 13,
    chartColors: [COLORS.accentPurple, COLORS.accentCyan],
    catAxisLabelColor: COLORS.textMuted,
    valAxisLabelColor: COLORS.textMuted,
    valGridLine: { color: COLORS.border, size: 0.5 },
    catGridLine: { style: 'none' },
    showValue: true,
    dataLabelPosition: 'outEnd',
    dataLabelColor: COLORS.textWhite,
  });

  slide2.addNotes('두 번째 슬라이드에서는 Afsm 도입으로 인한 정량적 성과를 네이티브 차트로 보여드립니다. 테스트 속도가 0ms로 단축되었습니다.');

  // Save Deck
  pres.writeFile({ fileName: outputPath }).then((fileName) => {
    console.log(`✓ Native PPTX successfully generated via PptxGenJS: ${fileName}`);
  });
}

const targetOut = process.argv[2] || 'templates/Native_PptxGenJS_Sample.pptx';
createSampleDeck(targetOut);
