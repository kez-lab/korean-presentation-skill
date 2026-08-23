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
    padding: 48px 60px;
    background: #0B1911;
    color: #D1FAE5;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .badge-pill {
    display: inline-block;
    background: #064E3B;
    border: 1px solid #10B981;
    color: #34D399;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  h1 { font-size: 2.2rem; font-weight: 900; color: #ECFDF5; margin: 8px 0; }
  
  /* Horizontal Timeline */
  .timeline-bar {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin-top: 24px;
  }
  .timeline-line {
    position: absolute;
    top: 20px;
    left: 40px;
    right: 40px;
    height: 3px;
    background: #064E3B;
    z-index: 1;
  }
  .timeline-step {
    position: relative;
    z-index: 2;
    background: #132E20;
    border: 1px solid #059669;
    border-radius: 12px;
    padding: 20px;
  }
  .timeline-year {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #10B981;
    color: #064E3B;
    font-weight: 900;
    border-radius: 50%;
    margin-bottom: 12px;
    font-size: 0.85rem;
  }
  .step-title { font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px; }
  .step-desc { font-size: 0.8rem; color: #A7F3D0; line-height: 1.5; }

  footer { display: none; }
---

<!-- Slide 1: Editorial Clean Cover -->
<div>
  <span class="badge-pill">ESG ROADMAP 2030</span>
  <h1>지능형 재생에너지 전력망과<br><span style="color: #34D399;">2030 탄소중립 실현 로드맵</span></h1>
  <p style="color: #A7F3D0; font-size: 0.95rem; margin-top: 8px;">
    풍력·태양광의 간헐성을 AI 가상발전소(VPP)와 대용량 ESS로 능동 제어하는 친환경 에너지 전환
  </p>
</div>

<div style="display: flex; gap: 32px; border-top: 1px solid #064E3B; padding-top: 20px;">
  <div>
    <div style="font-size: 0.72rem; color: #6EE7B7; font-weight: 800;">TARGET EMISSIONS</div>
    <div style="font-size: 1.8rem; font-weight: 900; color: #FFF;">-48.5% GHG</div>
  </div>
  <div style="width: 1px; background: #064E3B;"></div>
  <div>
    <div style="font-size: 0.72rem; color: #6EE7B7; font-weight: 800;">GRID RELIABILITY</div>
    <div style="font-size: 1.8rem; font-weight: 900; color: #FFF;">99.999%</div>
  </div>
  <div style="width: 1px; background: #064E3B;"></div>
  <div>
    <div style="font-size: 0.72rem; color: #6EE7B7; font-weight: 800;">RE100 COMPLIANCE</div>
    <div style="font-size: 1.8rem; font-weight: 900; color: #34D399;">100% MATCH</div>
  </div>
</div>

<!-- note: 재생에너지 2030 탄소중립 로드맵의 비전과 3대 정량 목표입니다. -->

---

<!-- Slide 2: Horizontal Timeline 3 Steps -->
<div>
  <span class="badge-pill">3-PHASE EXECUTION</span>
  <h2 style="font-size: 1.6rem; font-weight: 800; color: #FFF; margin-top: 6px;">2026 ~ 2030 단계별 전력망 전환 타임라인</h2>
</div>

<div class="timeline-bar">
  <div class="timeline-step">
    <div class="timeline-year">'26</div>
    <div class="step-title">Phase 1: VPP 인프라 구축</div>
    <div class="step-desc">• AI 기상 예측 모델링 도입<br>• 서해안 풍력 단지 100MW 실증<br>• 계통 연계 인허가 완료</div>
  </div>

  <div class="timeline-step">
    <div class="timeline-year">'28</div>
    <div class="step-title">Phase 2: 하이브리드 ESS 확장</div>
    <div class="step-desc">• LFP + 바나듐 레독스 500MWh 배치<br>• P2P 분산 전력 거래 마켓 오픈<br>• 산업단지 RE100 직공급 개시</div>
  </div>

  <div class="timeline-step" style="border-color: #34D399; background: #1B3D2B;">
    <div class="timeline-year" style="background: #34D399;">'30</div>
    <div class="step-title">Phase 3: 100% 탄소중립 그리드</div>
    <div class="step-desc">• 전국 17개 시도 통합 계통망 완성<br>• 신재생 출력 제어율 0% 달성<br>• 연간 1,200만 톤 온실가스 감축</div>
  </div>
</div>

<div style="text-align: right; font-size: 0.75rem; color: #6EE7B7;">
  * 국가 탄소중립녹색성장 기본계획 및 전력수급기본계획 연계
</div>

<!-- note: 2026년부터 2030년까지 3단계에 걸친 전력망 전환 타임라인입니다. -->
