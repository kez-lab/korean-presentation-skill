---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-dark: #07090E;
    --card-surface: #111420;
    --card-border: rgba(251, 191, 36, 0.2);
    --accent-gold: #FBBF24;
    --accent-white: #FFFFFF;
    --accent-red: #F87171;
    --accent-green: #34D399;
    --text-white: #FFFFFF;
    --text-slate: #94A3B8;
  }

  section {
    font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;
    background: radial-gradient(circle at 90% 10%, rgba(251, 191, 36, 0.08) 0%, transparent 45%),
                var(--bg-dark);
    color: var(--text-white);
    padding: 44px 58px;
    word-break: keep-all;
    letter-spacing: -0.025em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
  }

  h1 { font-size: 2.7rem !important; font-weight: 900 !important; color: #FFFFFF !important; line-height: 1.25 !important; letter-spacing: -0.035em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.75rem !important; font-weight: 900 !important; color: #FFFFFF !important; line-height: 1.3 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 1.02rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 26px 0; }

  .kicker {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 9999px;
    background: rgba(251, 191, 36, 0.18);
    color: var(--accent-gold);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: 1px solid rgba(251, 191, 36, 0.4);
    margin-bottom: 8px;
    width: fit-content;
    flex-shrink: 0;
  }

  .pitch-card {
    background: linear-gradient(180deg, #181C2C 0%, #111420 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px 26px;
    box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; width: 100%; }

  .stat-giant { font-size: 3.2rem; font-weight: 900; line-height: 1; color: var(--accent-gold); margin-bottom: 6px; }
  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Pitch Cover Slide -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">SERIES A INVESTMENT PITCH</span>
<h1>
AI 에이전트 워크플로우를 자동화하는<br>
<span style="color: var(--accent-gold);">엔터프라이즈 오토노머스 플랫폼</span>
</h1>
<p class="lead" style="font-size: 1.18rem; color: #94A3B8; margin-top: 14px;">
반복적인 코딩 및 디자인 작업을 10배 빠르게 혁신하는 개발 생산성 솔루션
</p>
</div>

<div class="pitch-card" style="padding: 16px 24px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; border-color: var(--card-border);">
<div style="display: flex; gap: 28px; font-size: 0.92rem; color: #94A3B8;">
<span>대표이사 / 파운더: 홍길동</span>
<span>투자 라운드: Series A ($5M Target)</span>
<span>IR Deck v2.4</span>
</div>
<div style="color: var(--accent-gold); font-weight: 800; font-size: 0.95rem;">Confidential Pitch Deck</div>
</div>
</div>

<!-- note: [피치 오프닝] 개발자의 업무 생산성을 10배 이상 끌어올리는 차세대 AI 에이전트 플랫폼을 소개합니다. -->

---

<!-- 2. Pitch Traction & Market Size -->
<div>
<div style="text-align: center; margin-bottom: 24px;">
<span class="kicker">TRACTION & MARKET SIZE</span>
<h2>런칭 6개월 만에 입증된 폭발적인 시장 수요</h2>
<p class="lead" style="margin-bottom: 0;">글로벌 350+ 개발팀 도입 및 월간 반복 매출(MRR) 24% 지속 성장</p>
</div>

<div class="grid-3">
<div class="pitch-card" style="text-align: center; border-top: 4px solid var(--accent-gold);">
<div class="stat-giant">350+</div>
<div style="font-size: 1.15rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">도입 고객사 (B2B Teams)</div>
<div style="font-size: 0.85rem; color: var(--text-slate); line-height: 1.5;">글로벌 테크 유니콘 및 테크 스타트업 중심 유기적 유입</div>
</div>

<div class="pitch-card" style="text-align: center; border-top: 4px solid #38BDF8;">
<div class="stat-giant" style="color: #38BDF8;">$450K</div>
<div style="font-size: 1.15rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">현재 월간 매출 (MRR)</div>
<div style="font-size: 0.85rem; color: var(--text-slate); line-height: 1.5;">매월 24%의 복합 성장률(MoM)로 고속 스케일업 진행 중</div>
</div>

<div class="pitch-card" style="text-align: center; border-top: 4px solid var(--accent-green);">
<div class="stat-giant" style="color: var(--accent-green);">$42B</div>
<div style="font-size: 1.15rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">글로벌 개발 도구 시장 (TAM)</div>
<div style="font-size: 0.85rem; color: var(--text-slate); line-height: 1.5;">2028년까지 연평균 26.5% 성장하는 초거대 시장 선점</div>
</div>
</div>
</div>

<!-- note: [트랙션 발표] 현재 350개 이상의 B2B 고객사와 월 45만 달러 MRR을 달성하며 거대한 시장을 선점하고 있습니다. -->
