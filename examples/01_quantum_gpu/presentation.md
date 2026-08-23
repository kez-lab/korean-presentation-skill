---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');

  section {
    width: 1280px;
    height: 720px;
    padding: 40px 50px;
    background: #050811;
    color: #94A3B8;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mono { font-family: 'JetBrains Mono', monospace; }
  .term-header {
    background: #0E1626;
    border: 1px solid #1E293B;
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #38BDF8;
  }
  .term-dots { display: flex; gap: 6px; margin-right: 12px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #EF4444; }
  .dot-yellow { background: #F59E0B; }
  .dot-green { background: #10B981; }

  .term-body {
    background: #080D1A;
    border: 1px solid #1E293B;
    border-radius: 8px;
    padding: 20px 24px;
    flex-grow: 1;
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .prompt { color: #00F0FF; font-weight: 700; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; }
  h1.term-title { font-size: 2.2rem; font-weight: 900; color: #FFF; margin: 8px 0; letter-spacing: -0.03em; }
  
  .circuit-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 16px;
    margin-top: 12px;
  }
  .circuit-box {
    background: #040711;
    border: 1px dashed #00F0FF;
    border-radius: 6px;
    padding: 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #38BDF8;
  }
  .circuit-line { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .gate { background: #1E293B; border: 1px solid #00F0FF; color: #FFF; padding: 2px 8px; border-radius: 4px; font-weight: 700; }
  
  footer { display: none; }
---

<!-- Slide 1: Terminal Hero -->
<div class="term-header">
  <div class="term-dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
  <span>root@quantum-hpc:~# ./launch_qgpu_cluster.sh --qubits 128 --nodes 64</span>
</div>

<div class="term-body">
  <div>
    <div class="prompt">[INIT] QUANTUM ACCELERATOR v4.2 LOADED</div>
    <h1 class="term-title">양자-GPU 하이브리드<br><span style="color: #00F0FF;">초고속 분산 연산 가속 엔진</span></h1>
    <p style="color: #94A3B8; font-size: 0.95rem; margin-top: 4px;">
      물리 큐비트 노이즈를 텐서 코어 실시간 역전파로 보정하는 HPC 아키텍처
    </p>
  </div>

  <div class="circuit-grid">
    <div class="circuit-box">
      <div style="color: #A78BFA; font-weight: 700; margin-bottom: 8px;">// QUANTUM CIRCUIT PIPELINE</div>
      <div class="circuit-line"><span>|q0⟩ ──</span><span class="gate">H</span><span>──────</span><span class="gate">●</span><span>──────</span><span class="gate">X</span><span>── [OUT]</span></div>
      <div class="circuit-line"><span>|q1⟩ ──────</span><span class="gate">X</span><span>──</span><span class="gate">RZ</span><span>──</span><span class="gate">●</span><span>── [OUT]</span></div>
    </div>
    <div style="background: #0E1626; border-radius: 6px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
      <div style="font-size: 0.72rem; color: #38BDF8; font-family: 'JetBrains Mono';">BENCHMARK STATUS</div>
      <div style="font-size: 1.8rem; font-weight: 900; color: #00F0FF; font-family: 'JetBrains Mono';">1,200x SPEEDUP</div>
      <div style="font-size: 0.75rem; color: #94A3B8;">Classical HPC Supercomputer 대비</div>
    </div>
  </div>
</div>

<!-- note: 양자 터미널 기반 분산 가속 엔진의 아키텍처와 성능 지표를 설명합니다. -->

---

<!-- Slide 2: Table & Registers -->
<div class="term-header">
  <div class="term-dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
  <span>root@quantum-hpc:~# qgpu-bench --compare classical_baseline</span>
</div>

<div class="term-body">
  <div>
    <div class="prompt">[ANALYSIS] HARDWARE REGISTER & PERFORMANCE TABLE</div>
    <h2 style="font-size: 1.5rem; color: #FFF; margin: 4px 0 12px 0;">분산 양자 시뮬레이션 지표 비교표</h2>
  </div>

  <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #E2E8F0;">
    <thead>
      <tr style="border-bottom: 2px solid #00F0FF; text-align: left;">
        <th style="padding: 10px; color: #38BDF8;">METRIC</th>
        <th style="padding: 10px; color: #94A3B8;">CLASSICAL HPC</th>
        <th style="padding: 10px; color: #A78BFA;">NISQ STANDALONE</th>
        <th style="padding: 10px; color: #00F0FF;">Q-GPU HYBRID (OURS)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #1E293B;">
        <td style="padding: 10px; font-weight: 700;">Coherence Time</td>
        <td style="padding: 10px;">N/A (Simulated)</td>
        <td style="padding: 10px;">120 μs (Drift)</td>
        <td style="padding: 10px; color: #00F0FF; font-weight: 700;">Infinite (Corrected)</td>
      </tr>
      <tr style="border-bottom: 1px solid #1E293B;">
        <td style="padding: 10px; font-weight: 700;">Gate Error Rate</td>
        <td style="padding: 10px;">0.00%</td>
        <td style="padding: 10px;">0.35% (High)</td>
        <td style="padding: 10px; color: #00F0FF; font-weight: 700;">0.01% (Tensor Backprop)</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: 700;">128-Qubit Exec</td>
        <td style="padding: 10px;">48.2 Hours</td>
        <td style="padding: 10px;">Failed (Noise)</td>
        <td style="padding: 10px; color: #00F0FF; font-weight: 700;">2.4 Minutes (1,200x)</td>
      </tr>
    </tbody>
  </table>
  
  <div style="font-size: 0.72rem; color: #64748B; font-family: 'JetBrains Mono';">
    * Tested on 64x NVIDIA H100 GPU Cluster with Quantum Tensor Backpropagation v4.2
  </div>
</div>

<!-- note: 클래시컬 HPC 및 단독 NISQ 대비 1200배 빠른 처리 속도 비교표입니다. -->
