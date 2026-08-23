---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

  section {
    width: 1280px;
    height: 720px;
    padding: 44px 56px;
    background: #F8FAFC;
    color: #334155;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .clin-badge {
    display: inline-block;
    background: #E0F2FE;
    color: #0284C7;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 4px;
  }
  h1 { font-size: 2.1rem; font-weight: 900; color: #0F172A; margin: 6px 0; }
  
  .matrix-table {
    width: 100%;
    border-collapse: collapse;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    font-size: 0.8rem;
  }
  .matrix-table th { background: #0F172A; color: #FFF; padding: 12px 14px; text-align: left; font-weight: 800; }
  .matrix-table td { padding: 12px 14px; border-bottom: 1px solid #F1F5F9; }
  .tag-pass { background: #DCFCE7; color: #15803D; font-weight: 800; padding: 2px 8px; border-radius: 4px; }
  .tag-fail { background: #FEE2E2; color: #B91C1C; font-weight: 800; padding: 2px 8px; border-radius: 4px; }

  footer { display: none; }
---

<!-- Slide 1: Clinical Clean Hero -->
<div>
  <span class="clin-badge">CLINICAL PROTOCOL v3.4</span>
  <h1>단일 세포 전사체 분석 기반<br><span style="color: #0284C7;">정밀 면역항암 바이오마커 행렬</span></h1>
  <p style="color: #64748B; font-size: 0.95rem; margin-top: 6px;">
    불응성 고형암 환자 500례 대상 10x Genomics 단일 세포 RNA 시퀀싱 임상 결과
  </p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
  <div style="background: #FFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; border-top: 3px solid #0284C7;">
    <div style="font-size: 0.72rem; color: #64748B; font-weight: 700;">TOTAL CELLS PROFILED</div>
    <div style="font-size: 1.6rem; font-weight: 900; color: #0F172A;">12,500,000+</div>
  </div>
  <div style="background: #FFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; border-top: 3px solid #10B981;">
    <div style="font-size: 0.72rem; color: #64748B; font-weight: 700;">ORR (OBJECTIVE RESPONSE)</div>
    <div style="font-size: 1.6rem; font-weight: 900; color: #10B981;">84.2%</div>
  </div>
  <div style="background: #FFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; border-top: 3px solid #6366F1;">
    <div style="font-size: 0.72rem; color: #64748B; font-weight: 700;">SEVERE CRS RATE</div>
    <div style="font-size: 1.6rem; font-weight: 900; color: #6366F1;">0.0% (Zero)</div>
  </div>
</div>

<!-- note: 단일 세포 유전체 분석 기반 정밀 면역항암 플랫폼의 임상 지표입니다. -->

---

<!-- Slide 2: Clinical Matrix Comparison Table -->
<div>
  <span class="clin-badge">BENCHMARK COMPARISON</span>
  <h2 style="font-size: 1.4rem; color: #0F172A; margin: 4px 0 10px 0;">기존 표준 치료법(SoC) 대비 임상 효능 비교 행렬</h2>
</div>

<table class="matrix-table">
  <thead>
    <tr>
      <th>CLINICAL PARAMETER</th>
      <th>STANDARD SOC (CHEMO)</th>
      <th>1ST GEN IMMUNOTHERAPY</th>
      <th>OUR SINGLE-CELL PLATFORM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Target Specificity</strong></td>
      <td><span class="tag-fail">Non-Specific</span></td>
      <td>Moderate (PD-L1 Only)</td>
      <td><span class="tag-pass">Single-Cell TCR Precision</span></td>
    </tr>
    <tr>
      <td><strong>Solid Tumor ORR</strong></td>
      <td>21.4%</td>
      <td>38.2%</td>
      <td><span class="tag-pass">84.2% (p &lt; 0.001)</span></td>
    </tr>
    <tr>
      <td><strong>Grade 3/4 Toxicity</strong></td>
      <td><span class="tag-fail">46.8%</span></td>
      <td>18.5%</td>
      <td><span class="tag-pass">1.2% (Ultra-Safe)</span></td>
    </tr>
  </tbody>
</table>

<div style="font-size: 0.72rem; color: #94A3B8;">
  * Multi-center Phase II trial prospective cohort (N=520, 2024-2026)
</div>

<!-- note: 기존 화학요법 및 1세대 면역항암제 대비 월등한 반응률과 안전성 비교표입니다. -->
