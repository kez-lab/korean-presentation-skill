---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,700;1,400&family=Pretendard:wght@600;900&display=swap');

  section {
    width: 1280px;
    height: 720px;
    padding: 44px 64px;
    background: #FAF9F6;
    color: #1E1B4B;
    font-family: 'STIX Two Text', serif;
    letter-spacing: -0.01em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .paper-header {
    border-bottom: 1.5px solid #1E1B4B;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 700;
  }
  h1 { font-family: 'Pretendard', sans-serif; font-size: 1.95rem; font-weight: 900; color: #1E1B4B; margin: 8px 0; }
  
  .theorem-box {
    background: #F1F0EA;
    border-left: 4px solid #1E1B4B;
    padding: 12px 18px;
    margin: 12px 0;
    font-size: 0.85rem;
  }

  footer { display: none; }
---

<!-- Slide 1: Academic Paper Layout -->
<div class="paper-header">
  <span>NEURIPS 2026 ORAL PRESENTATION</span>
  <span>ARXIV: 2608.01248 [CS.LG]</span>
</div>

<div>
  <h1>선형 시간 복잡도 어텐션을 통한<br><span style="color: #4338CA;">O(N) 초경량 트랜스포머의 이론적 증명</span></h1>
  <div style="font-size: 0.85rem; color: #4338CA; font-weight: 700; margin-top: 4px;">
    서울대학교 AI연구원 • 딥러닝 이론 연구실
  </div>

  <div class="theorem-box">
    <strong>Theorem 1 (Linear Convergence).</strong> Let \( \phi(x) \) be the kernel feature map with Taylor expansion order \( k \). Then the attention matrix multiplication satisfies:
    <div style="text-align: center; margin: 8px 0; font-size: 1.05rem; font-weight: 700;">
      \( \text{Time Complexity} = O(N \cdot d^2) \ll O(N^2 \cdot d) \)
    </div>
    with zero loss on 1,000,000 token context retrieval.
  </div>
</div>

<div style="display: flex; justify-content: space-between; border-top: 1px solid #D4D2C9; padding-top: 8px; font-size: 0.72rem; color: #64748B;">
  <span>Keywords: Linear Attention, Kernel Approximation, Long-Context LLMs</span>
  <span>Correspondence: theory@snu.ac.kr</span>
</div>

<!-- note: NeurIPS 오럴 논문의 이론적 증명과 선형 복잡도 수식 설명입니다. -->

---

<!-- Slide 2: Academic Benchmark Matrix -->
<div class="paper-header">
  <span>EXPERIMENTAL EVALUATION</span>
  <span>TABLE 2: 1M CONTEXT RETRIEVAL ACCURACY</span>
</div>

<div style="margin: 8px 0;">
  <h2 style="font-family: 'Pretendard'; font-size: 1.5rem; color: #1E1B4B;">기존 방식 대비 연산 복잡도 및 메모리 비교</h2>
</div>

<div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; font-size: 0.8rem;">
  <div>
    <table style="width: 100%; border-collapse: collapse; border-top: 2px solid #1E1B4B; border-bottom: 2px solid #1E1B4B;">
      <thead>
        <tr style="border-bottom: 1px solid #1E1B4B;">
          <th style="padding: 6px; text-align: left;">MODEL</th>
          <th style="padding: 6px;">TIME</th>
          <th style="padding: 6px;">MEMORY</th>
          <th style="padding: 6px;">ACCURACY</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 6px;">FlashAttn-3</td>
          <td style="padding: 6px; text-align: center;">O(N^2)</td>
          <td style="padding: 6px; text-align: center;">48.2 GB</td>
          <td style="padding: 6px; text-align: center;">99.9%</td>
        </tr>
        <tr>
          <td style="padding: 6px; font-weight: 700; color: #4338CA;">Ours (Linear)</td>
          <td style="padding: 6px; text-align: center; font-weight: 700; color: #4338CA;">O(N)</td>
          <td style="padding: 6px; text-align: center; font-weight: 700; color: #4338CA;">1.2 GB (-97%)</td>
          <td style="padding: 6px; text-align: center; font-weight: 700; color: #4338CA;">99.8%</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="theorem-box" style="margin: 0; font-size: 0.78rem;">
    <strong>Remark 2.1.</strong> The memory reduction enables full fine-tuning of a 70B parameter model on a single 8x H100 node with sequence length \( N = 10^6 \).
  </div>
</div>

<div style="font-size: 0.72rem; color: #64748B;">
  * Evaluated on synthetic Needle-In-A-Haystack benchmark with Llama-3 architecture.
</div>
