---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Pretendard:wght@700;900&display=swap');

  section {
    width: 1280px;
    height: 720px;
    padding: 44px 50px;
    background: #0D021A;
    color: #F3E8FF;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hud-tag {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.75rem;
    color: #EC4899;
    letter-spacing: 0.15em;
    border: 1px solid #EC4899;
    padding: 4px 10px;
    display: inline-block;
  }
  h1 { font-size: 2.2rem; font-weight: 900; color: #FFF; margin: 8px 0; }
  
  .hud-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
  .hud-card {
    background: rgba(30, 10, 55, 0.85);
    border: 2px solid #8B5CF6;
    border-radius: 4px;
    padding: 16px;
    position: relative;
  }
  .hud-card::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 12px;
    height: 12px;
    background: #EC4899;
  }

  footer { display: none; }
---

<!-- Slide 1: Cyberpunk HUD Hero -->
<div>
  <div class="hud-tag">UNREAL ENGINE 5.4 // ICVFX PIPELINE</div>
  <h1>실시간 버추얼 프로덕션<br><span style="color: #EC4899;">8K 120FPS 차세대 렌더링 엔진</span></h1>
  <p style="color: #C084FC; font-size: 0.95rem; margin-top: 4px;">
    Nanite와 Lumen을 결합한 영화급 인카메라 시각효과(VFX) 스튜디오 아키텍처
  </p>
</div>

<div class="hud-grid">
  <div class="hud-card">
    <div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #EC4899;">RENDER LATENCY</div>
    <div style="font-family: 'Orbitron'; font-size: 1.8rem; font-weight: 900; color: #FFF; margin: 4px 0;">3.8 ms</div>
    <div style="font-size: 0.75rem; color: #D8B4FE;">Genlock 카메라 완벽 동기화</div>
  </div>

  <div class="hud-card" style="border-color: #EC4899;">
    <div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #C084FC;">POST-PROD COST</div>
    <div style="font-family: 'Orbitron'; font-size: 1.8rem; font-weight: 900; color: #EC4899; margin: 4px 0;">-72%</div>
    <div style="font-size: 0.75rem; color: #D8B4FE;">현장 즉시 최종 픽셀 완성</div>
  </div>

  <div class="hud-card">
    <div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #8B5CF6;">LED VOLUME</div>
    <div style="font-family: 'Orbitron'; font-size: 1.8rem; font-weight: 900; color: #FFF; margin: 4px 0;">360° 20m</div>
    <div style="font-size: 0.75rem; color: #D8B4FE;">상암 초대형 볼륨 스튜디오</div>
  </div>
</div>

<!-- note: 언리얼 엔진 5 기반 실시간 버추얼 프로덕션 HUD 스펙입니다. -->

---

<!-- Slide 2: Cyberpunk Tech Stack -->
<div>
  <div class="hud-tag">CORE ARCHITECTURE // NANITE & LUMEN</div>
  <h2 style="font-size: 1.6rem; color: #FFF; margin: 6px 0;">실시간 3D 버추얼 프로덕션 3대 파이프라인</h2>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
  <div class="hud-card" style="border-color: #EC4899;">
    <div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #EC4899;">01. ICVFX SYNC</div>
    <div style="font-size: 0.95rem; font-weight: 800; color: #FFF; margin: 4px 0;">인카메라 시각효과</div>
    <div style="font-size: 0.78rem; color: #C084FC;">카메라 시점에 맞춘 배경 원근 실시간 왜곡 렌더링</div>
  </div>

  <div class="hud-card" style="border-color: #8B5CF6;">
    <div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #8B5CF6;">02. AI ASSET GEN</div>
    <div style="font-size: 0.95rem; font-weight: 800; color: #FFF; margin: 4px 0;">생성형 3D 에셋</div>
    <div style="font-size: 0.78rem; color: #C084FC;">프롬프트 기반 초고해상도 3D 공간 10분 내 인제스트</div>
  </div>

  <div class="hud-card" style="border-color: #EC4899;">
    <div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #EC4899;">03. OPTICAL TRACK</div>
    <div style="font-size: 0.95rem; font-weight: 800; color: #FFF; margin: 4px 0;">초정밀 모션 트래킹</div>
    <div style="font-size: 0.78rem; color: #C084FC;">0.01mm 오차 미만 광학식 센서 트래킹 융합</div>
  </div>
</div>

<div style="font-family: 'Orbitron'; font-size: 0.72rem; color: #8B5CF6; text-align: right;">
  SYSTEM STATUS: ONLINE // ZERO LATENCY PIPELINE
</div>
