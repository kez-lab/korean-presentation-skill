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
    padding: 38px 48px;
    background: #071322;
    color: #E0F2FE;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gov-header {
    background: #0C2138;
    border: 1px solid #1E3A5F;
    border-radius: 6px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.78rem;
    font-weight: 700;
  }
  h1 { font-size: 1.95rem; font-weight: 900; color: #FFF; margin: 6px 0; }
  
  .dash-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 12px;
    margin-top: 8px;
  }
  .dash-widget {
    background: #0A1B30;
    border: 1px solid #16365C;
    border-radius: 8px;
    padding: 12px 16px;
  }
  .status-tag { background: #0284C7; color: #FFF; font-size: 0.68rem; font-weight: 800; padding: 2px 6px; border-radius: 4px; }

  footer { display: none; }
---

<!-- Slide 1: Public Dashboard Layout -->
<div class="gov-header">
  <span>🏛️ 국토교통부 스마트도시기획단</span>
  <span>실시간 국가 재난 안전망 관제 현황 : <strong style="color: #38BDF8;">정상 가동 중</strong></span>
</div>

<div>
  <h1>전국 지자체 연계 실시간 3D<br><span style="color: #38BDF8;">스마트시티 디지털 트윈 재난 관제</span></h1>
</div>

<div class="dash-grid">
  <div class="dash-widget">
    <div style="display: flex; justify-content: space-between;"><span style="font-size: 0.72rem; color: #7DD3FC;">침수 사전 감지 골든타임</span><span class="status-tag">5분 전 경보</span></div>
    <div style="font-size: 1.5rem; font-weight: 900; color: #FFF; margin-top: 4px;">100% 자동 통제</div>
  </div>

  <div class="dash-widget">
    <div style="display: flex; justify-content: space-between;"><span style="font-size: 0.72rem; color: #7DD3FC;">긴급 소방 출동 단축</span><span class="status-tag" style="background: #10B981;">-41% 시간 절감</span></div>
    <div style="font-size: 1.5rem; font-weight: 900; color: #FFF; margin-top: 4px;">신호등 우선 제어</div>
  </div>

  <div class="dash-widget">
    <div style="display: flex; justify-content: space-between;"><span style="font-size: 0.72rem; color: #7DD3FC;">지하 매설물 3D 가시화</span><span class="status-tag">100% 완비</span></div>
    <div style="font-size: 1.5rem; font-weight: 900; color: #FFF; margin-top: 4px;">상하수도·가스관 맵</div>
  </div>

  <div class="dash-widget">
    <div style="display: flex; justify-content: space-between;"><span style="font-size: 0.72rem; color: #7DD3FC;">전국 지자체 보급</span><span class="status-tag" style="background: #6366F1;">226개 시군구</span></div>
    <div style="font-size: 1.5rem; font-weight: 900; color: #FFF; margin-top: 4px;">K-스마트시티 표준</div>
  </div>
</div>

<!-- note: 공공 스마트시티 대시보드 형태의 4분할 실시간 관제 슬라이드입니다. -->

---

<!-- Slide 2: Gov Infrastructure Architecture -->
<div class="gov-header">
  <span>🏛️ 국가 스마트시티 디지털 트윈 인프라 체계</span>
  <span style="color: #38BDF8;">전국 226개 지자체 통합 연계</span>
</div>

<div>
  <h2 style="font-size: 1.45rem; color: #FFF; margin: 6px 0;">3계층 통합 재난 관제 및 대시민 안전망</h2>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;">
  <div class="dash-widget">
    <div style="font-size: 0.85rem; font-weight: 800; color: #38BDF8; margin-bottom: 4px;">LAYER 1: 센서 & GIS</div>
    <div style="font-size: 0.78rem; color: #BAE6FD; line-height: 1.5;">IoT 수위계, 지능형 CCTV, 3D 지하 매설물 데이터 수집</div>
  </div>

  <div class="dash-widget">
    <div style="font-size: 0.85rem; font-weight: 800; color: #10B981; margin-bottom: 4px;">LAYER 2: AI 시뮬레이션</div>
    <div style="font-size: 0.78rem; color: #BAE6FD; line-height: 1.5;">강우량에 따른 침수 확산 5분 전 예측 및 대피 경로 자동 산출</div>
  </div>

  <div class="dash-widget">
    <div style="font-size: 0.85rem; font-weight: 800; color: #6366F1; margin-bottom: 4px;">LAYER 3: 자동 현장 제어</div>
    <div style="font-size: 0.78rem; color: #BAE6FD; line-height: 1.5;">차수벽 자동 가동, 소방차 우선 신호 제어, 내비게이션 우회 전송</div>
  </div>
</div>

<div style="font-size: 0.72rem; color: #7DD3FC; text-align: center;">
  * 국토교통부 스마트시티 국가 전략 과제 (2024-2027)
</div>
