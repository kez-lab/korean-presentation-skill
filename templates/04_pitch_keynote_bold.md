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
    --accent-blue: #38BDF8;
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

  h1 { font-size: 2.45rem !important; font-weight: 900 !important; color: #FFFFFF !important; line-height: 1.25 !important; letter-spacing: -0.035em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.68rem !important; font-weight: 900 !important; color: #FFFFFF !important; line-height: 1.3 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.98rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 24px 0; }

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

  .highlight-gold { color: var(--accent-gold) !important; }
  .highlight-blue { color: var(--accent-blue) !important; }
  .highlight-green { color: var(--accent-green) !important; }

  .pitch-card {
    background: linear-gradient(180deg, #181C2C 0%, #111420 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 22px 24px;
    box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .circle-badge {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    margin-bottom: 8px;
    flex-shrink: 0;
  }
  .badge-gold { background: rgba(251, 191, 36, 0.18); color: var(--accent-gold); border: 1px solid rgba(251, 191, 36, 0.4); }
  .badge-blue { background: rgba(56, 189, 248, 0.15); color: var(--accent-blue); border: 1px solid rgba(56, 189, 248, 0.4); }
  .badge-green { background: rgba(52, 211, 153, 0.15); color: var(--accent-green); border: 1px solid rgba(52, 211, 153, 0.4); }

  .border-top-gold { border-top: 3.5px solid var(--accent-gold) !important; }
  .border-top-blue { border-top: 3.5px solid var(--accent-blue) !important; }
  .border-top-green { border-top: 3.5px solid var(--accent-green) !important; }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; width: 100%; }

  .stat-giant { font-size: 3.0rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }

  .meta-bar {
    background: linear-gradient(180deg, #181C2C 0%, #111420 100%);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  .meta-items { display: flex; gap: 28px; font-size: 0.9rem; color: #94A3B8; }
  .meta-brand { color: var(--accent-gold); font-weight: 800; font-size: 0.92rem; }

  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Pitch Cover Slide -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">SERIES A INVESTMENT PITCH</span>
<h1>
AI 에이전트 워크플로우를 자동화하는<br>
<span class="highlight-gold">엔터프라이즈 오토노머스 플랫폼</span>
</h1>
<p class="lead" style="font-size: 1.12rem; color: #94A3B8; margin-top: 12px;">
반복적인 코딩 및 디자인 작업을 10배 빠르게 혁신하는 개발 생산성 솔루션
</p>
</div>

<div class="meta-bar">
<div class="meta-items">
<span>대표이사 / 파운더: 홍길동</span>
<span>투자 라운드: Series A ($5M Target)</span>
<span>IR Deck v2.4</span>
</div>
<div class="meta-brand">Confidential Pitch Deck</div>
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
<div class="pitch-card border-top-gold" style="text-align: center;">
<div class="circle-badge badge-gold" style="margin: 0 auto 6px auto;">01</div>
<div class="stat-giant highlight-gold">350+</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">도입 고객사 (B2B)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">글로벌 테크 유니콘 및 스타트업 중심 유기적 유입</div>
</div>

<div class="pitch-card border-top-blue" style="text-align: center;">
<div class="circle-badge badge-blue" style="margin: 0 auto 6px auto;">02</div>
<div class="stat-giant highlight-blue">$450K</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">현재 월간 매출 (MRR)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">매월 24%의 복합 성장률(MoM) 기반 고속 스케일업 달성</div>
</div>

<div class="pitch-card border-top-green" style="text-align: center;">
<div class="circle-badge badge-green" style="margin: 0 auto 6px auto;">03</div>
<div class="stat-giant highlight-green">$42B</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">글로벌 개발 도구 (TAM)</div>
<div style="font-size: 0.8rem; color: var(--text-slate); line-height: 1.5;">2028년까지 연평균 26.5% 성장하는 초거대 시장 선점</div>
</div>
</div>
</div>

<!-- note: [트랙션 발표] 현재 350개 이상의 B2B 고객사와 월 45만 달러 MRR을 달성하며 거대한 시장을 선점하고 있습니다. -->
