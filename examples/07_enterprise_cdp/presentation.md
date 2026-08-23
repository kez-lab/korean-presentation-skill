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
    background: #FFFFFF;
    color: #1E293B;
    font-family: "Pretendard", sans-serif;
    letter-spacing: -0.025em;
    word-break: keep-all;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .saas-pill {
    display: inline-block;
    background: #EEF2FF;
    border: 1px solid #C7D2FE;
    color: #4F46E5;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 3px 12px;
    border-radius: 9999px;
  }
  h1 { font-size: 2.2rem; font-weight: 900; color: #0F172A; margin: 8px 0; }
  
  .saas-split {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 28px;
    align-items: center;
  }
  .accordion-item {
    border-left: 3px solid #E2E8F0;
    padding: 8px 0 8px 16px;
    margin-bottom: 12px;
  }
  .accordion-item.active {
    border-left-color: #4F46E5;
  }

  footer { display: none; }
---

<!-- Slide 1: Modern Linear SaaS Hero -->
<div>
  <span class="saas-pill">ENTERPRISE PLATFORM</span>
  <h1>옴니채널 고객 데이터 통합을 위한<br><span style="color: #4F46E5;">실시간 AI-Native CDP 플랫폼</span></h1>
</div>

<div class="saas-split">
  <div>
    <div class="accordion-item active">
      <div style="font-size: 0.95rem; font-weight: 800; color: #4F46E5;">01. 단일 고객 ID 실시간 매핑</div>
      <div style="font-size: 0.8rem; color: #64748B; margin-top: 2px;">결제, 웹로그, CS 상담 기록을 50ms 내 실시간 병합</div>
    </div>
    <div class="accordion-item">
      <div style="font-size: 0.95rem; font-weight: 800; color: #0F172A;">02. AI 자동 세그먼트 생성</div>
      <div style="font-size: 0.8rem; color: #64748B; margin-top: 2px;">이탈 확률 80% 이상 VIP 고객 자동 선별 및 트리거 발송</div>
    </div>
    <div class="accordion-item">
      <div style="font-size: 0.95rem; font-weight: 800; color: #0F172A;">03. 200+ 엔터프라이즈 커넥터</div>
      <div style="font-size: 0.8rem; color: #64748B; margin-top: 2px;">Salesforce, Snowflake, AWS와 노코드 즉시 연동</div>
    </div>
  </div>

  <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; text-align: center;">
    <div style="font-size: 0.75rem; color: #64748B; font-weight: 700;">PROVEN CONVERSION LIFT</div>
    <div style="font-size: 2.8rem; font-weight: 900; color: #4F46E5; margin: 4px 0;">+340%</div>
    <div style="font-size: 0.8rem; color: #0F172A; font-weight: 700;">80여 개 대기업 실증 완료</div>
  </div>
</div>

<!-- note: 리니어 스타일 모던 B2B SaaS 고객 데이터 플랫폼 소개입니다. -->

---

<!-- Slide 2: SaaS Architecture Pillars -->
<div>
  <span class="saas-pill">CORE VALUE PILLARS</span>
  <h2 style="font-size: 1.6rem; color: #0F172A; margin: 6px 0;">엔터프라이즈 성장을 견인하는 3대 아키텍처</h2>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 14px;">
  <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
    <div style="font-size: 0.95rem; font-weight: 800; color: #4F46E5; margin-bottom: 6px;">실시간 데이터 스트리밍</div>
    <div style="font-size: 0.8rem; color: #475569; line-height: 1.5;">초당 50만 건의 트래픽을 지연 없이 처리하는 Apache Flink 기반 분산 엔진</div>
  </div>

  <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
    <div style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 6px;">AI 행동 예측 세그먼트</div>
    <div style="font-size: 0.8rem; color: #475569; line-height: 1.5;">고객 생애 가치(LTV)와 이탈 확률을 실시간으로 추론하여 마케팅 자동화</div>
  </div>

  <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
    <div style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 6px;">글로벌 보안 컴플라이언스</div>
    <div style="font-size: 0.8rem; color: #475569; line-height: 1.5;">GDPR, SOC2 Type II, PIPA를 완벽히 준수하는 엔터프라이즈 암호화 체계</div>
  </div>
</div>

<div style="font-size: 0.75rem; color: #94A3B8; text-align: center; margin-top: 16px;">
  TRUSTED BY 80+ GLOBAL ENTERPRISES ACROSS FINTECH, COMMERCE, AND MOBILITY
</div>
