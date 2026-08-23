---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700;900&family=Pretendard:wght@600;900&display=swap');

  section {
    width: 1280px;
    height: 720px;
    padding: 36px 44px;
    background: #060A14;
    color: #E2E8F0;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mono { font-family: 'Roboto Mono', monospace; }
  .ticker-bar {
    background: #0F172A;
    border-bottom: 2px solid #FFCC00;
    padding: 6px 14px;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.75rem;
  }
  .up { color: #10B981; }
  .down { color: #EF4444; }
  
  .hft-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 12px;
  }
  .orderbook-box {
    background: #0B1120;
    border: 1px solid #1E293B;
    border-radius: 6px;
    padding: 14px;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.75rem;
  }

  footer { display: none; }
---

<!-- Slide 1: Terminal Header & Orderbook Depth -->
<div class="ticker-bar">
  <span><strong>ALPHA HFT TERMINAL</strong> // CME:NQ1! <span class="up">▲ 19,842.50 (+1.42%)</span></span>
  <span>LATENCY: <strong style="color: #FFCC00;">380 ns</strong> | STATUS: <span class="up">ACTIVE ARB</span></span>
</div>

<div>
  <div style="font-size: 0.72rem; color: #FFCC00; font-weight: 800; font-family: 'Roboto Mono'; margin-top: 10px;">FPGA TICK-TO-TRADE PIPELINE</div>
  <h1 style="font-size: 2.1rem; font-weight: 900; color: #FFFFFF !important; margin: 4px 0;">나노초 초저지연 알고리즘 트레이딩 엔진</h1>
</div>

<div class="hft-grid">
  <div class="orderbook-box">
    <div style="color: #94A3B8; font-weight: 700; margin-bottom: 8px; border-bottom: 1px solid #1E293B; padding-bottom: 4px;">L3 ORDERBOOK DEPTH STREAM</div>
    <div style="display: flex; justify-content: space-between; color: #10B981; margin-bottom: 3px;"><span>BID 19,842.25 [142 LOTS]</span><span>0.12 μs</span></div>
    <div style="display: flex; justify-content: space-between; color: #10B981; margin-bottom: 3px;"><span>BID 19,842.00 [380 LOTS]</span><span>0.18 μs</span></div>
    <div style="display: flex; justify-content: space-between; color: #EF4444; margin-bottom: 3px;"><span>ASK 19,842.50 [98 LOTS]</span><span>0.09 μs</span></div>
  </div>

  <div style="background: #0F172A; border-radius: 6px; padding: 18px; display: flex; flex-direction: column; justify-content: space-around;">
    <div>
      <div style="font-size: 0.72rem; color: #94A3B8; font-family: 'Roboto Mono';">ANNUALIZED SHARPE RATIO</div>
      <div style="font-size: 2.2rem; font-weight: 900; color: #FFCC00; font-family: 'Roboto Mono';">4.28 SR</div>
    </div>
    <div>
      <div style="font-size: 0.72rem; color: #94A3B8; font-family: 'Roboto Mono';">DAILY VOLUME PROCESSED</div>
      <div style="font-size: 1.4rem; font-weight: 800; color: #FFF; font-family: 'Roboto Mono';">$4,850,000,000</div>
    </div>
  </div>
</div>

<!-- note: FPGA 기반 380나노초 초저지연 트레이딩 엔진의 호가창 처리 구조입니다. -->

---

<!-- Slide 2: Microsecond Tick Pipeline -->
<div class="ticker-bar">
  <span><strong>EXECUTION LATENCY BREAKDOWN</strong> // FIBER OPTIC VS DIRECT FPGA</span>
  <span style="color: #FFCC00;">TARGET &lt; 500 ns</span>
</div>

<div>
  <h2 style="font-size: 1.5rem; color: #FFF; margin: 6px 0;">3단계 하드웨어 직접 가속 틱투트레이드 파이프라인</h2>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-top: 10px;">
  <div style="background: #0B1120; border: 1px solid #1E293B; border-top: 3px solid #10B981; padding: 14px; border-radius: 6px; font-family: 'Roboto Mono';">
    <div style="font-size: 0.72rem; color: #10B981;">PHASE 1: PACKET INGEST</div>
    <div style="font-size: 1.4rem; font-weight: 900; color: #FFF; margin: 4px 0;">90 ns</div>
    <div style="font-size: 0.75rem; color: #94A3B8;">Solarflare 커널 바이패스</div>
  </div>

  <div style="background: #0B1120; border: 1px solid #1E293B; border-top: 3px solid #FFCC00; padding: 14px; border-radius: 6px; font-family: 'Roboto Mono';">
    <div style="font-size: 0.72rem; color: #FFCC00;">PHASE 2: FPGA ARB CALC</div>
    <div style="font-size: 1.4rem; font-weight: 900; color: #FFF; margin: 4px 0;">180 ns</div>
    <div style="font-size: 0.75rem; color: #94A3B8;">C++23 템플릿 메타 계산</div>
  </div>

  <div style="background: #0B1120; border: 1px solid #1E293B; border-top: 3px solid #38BDF8; padding: 14px; border-radius: 6px; font-family: 'Roboto Mono';">
    <div style="font-size: 0.72rem; color: #38BDF8;">PHASE 3: DMA ORDER OUT</div>
    <div style="font-size: 1.4rem; font-weight: 900; color: #FFF; margin: 4px 0;">110 ns</div>
    <div style="font-size: 0.75rem; color: #94A3B8;">거래소 전용선 즉시 체결</div>
  </div>
</div>

<div style="font-family: 'Roboto Mono'; font-size: 0.72rem; color: #64748B;">
  * Total Round-Trip: 380 ns (World Record Benchmark, 2026.08)
</div>
