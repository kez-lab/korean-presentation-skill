---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :root {
    --bg-navy: #080D1A;
    --card-surface: #0F172A;
    --card-border: rgba(255, 255, 255, 0.1);
    --accent-gold: #F59E0B;
    --accent-blue: #38BDF8;
    --accent-indigo: #818CF8;
    --accent-emerald: #10B981;
    --text-white: #FFFFFF;
    --text-slate: #94A3B8;
    --text-light: #E2E8F0;
  }

  section {
    font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;
    background: radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.07) 0%, transparent 45%),
                radial-gradient(circle at 15% 85%, rgba(245, 158, 11, 0.05) 0%, transparent 45%),
                var(--bg-navy);
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

  h1 { font-size: 2.55rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.28 !important; letter-spacing: -0.03em !important; margin: 12px 0 8px 0 !important; }
  h2 { font-size: 1.68rem !important; font-weight: 800 !important; color: #FFFFFF !important; line-height: 1.32 !important; letter-spacing: -0.025em !important; margin: 0 0 6px 0 !important; }
  .lead { font-size: 0.98rem; color: var(--text-slate); line-height: 1.5; margin: 0 0 26px 0; }

  .kicker {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 9999px;
    background: rgba(245, 158, 11, 0.15);
    color: var(--accent-gold);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    border: 1px solid rgba(245, 158, 11, 0.35);
    margin-bottom: 8px;
    width: fit-content;
    flex-shrink: 0;
  }

  .biz-card {
    background: linear-gradient(180deg, #131C31 0%, #0F172A 100%);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 22px 24px;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; }

  .stat-val { font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 6px; }
  .stat-gold { color: var(--accent-gold); }
  .stat-blue { color: var(--accent-blue); }
  .stat-green { color: var(--accent-emerald); }

  footer { font-size: 0.75rem; color: #475569; bottom: 16px; }
---

<!-- 1. Business Strategy Cover -->
<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
<div>
<span class="kicker">2026 STRATEGIC INITIATIVE</span>
<h1>
글로벌 엔터프라이즈 B2B 시장 확대를 위한<br>
<span style="color: var(--accent-gold);">AI 솔루션 사업화 및 성장 전략</span>
</h1>
<p class="lead" style="font-size: 1.15rem; color: #94A3B8; margin-top: 14px;">
수익성 극대화와 리텐션 강화를 위한 3대 핵심 로드맵 및 재무적 실행 계획
</p>
</div>

<div class="biz-card" style="padding: 14px 22px; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
<div style="display: flex; gap: 24px; font-size: 0.88rem; color: #94A3B8;">
<span>전략기획실 / 경영전략본부</span>
<span>보고일자: 2026.08</span>
<span>보안등급: 대외비 (Confidential)</span>
</div>
<div style="color: var(--accent-gold); font-weight: 800; font-size: 0.92rem;">Executive Strategy Deck</div>
</div>
</div>

<!-- note: [전략 보고 오프닝] 2026년 글로벌 B2B 시장 진출을 위한 AI 솔루션 사업화 전략과 실행 계획을 보고드립니다. -->

---

<!-- 2. Business KPI Big Stats -->
<div>
<div style="text-align: center; margin-bottom: 24px;">
<span class="kicker">KEY PERFORMANCE INDICATORS</span>
<h2>2026년 목표 재무 성과 및 핵심 마일스톤</h2>
<p class="lead" style="margin-bottom: 0;">ARR 3.2배 성장과 고객 획득 비용(CAC) 45% 절감을 통한 영업이익률 28% 달성</p>
</div>

<div class="grid-3">
<div class="biz-card" style="text-align: center; border-top: 3.5px solid var(--accent-gold);">
<div class="stat-val stat-gold">$12.5M</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">연간 반복 매출 (ARR)</div>
<div style="font-size: 0.82rem; color: var(--text-slate); line-height: 1.5;">북미 및 일본 엔터프라이즈 고객사 120개사 확보 목표</div>
</div>

<div class="biz-card" style="text-align: center; border-top: 3.5px solid var(--accent-blue);">
<div class="stat-val stat-blue">142%</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">순매출 유지율 (NRR)</div>
<div style="font-size: 0.82rem; color: var(--text-slate); line-height: 1.5;">계정 확장(Upsell) 및 크로스셀을 통한 LTV 극대화</div>
</div>

<div class="biz-card" style="text-align: center; border-top: 3.5px solid var(--accent-emerald);">
<div class="stat-val stat-green">28.4%</div>
<div style="font-size: 1.05rem; font-weight: 800; color: #FFF; margin-bottom: 6px;">목표 영업이익률</div>
<div style="font-size: 0.82rem; color: var(--text-slate); line-height: 1.5;">운영 자동화 파이프라인 도입을 통한 마진 구조 개선</div>
</div>
</div>
</div>

<!-- note: [성과 지표 설명] ARR 1,250만 달러, NRR 142%, 영업이익률 28.4% 달성을 핵심 KPI로 설정하였습니다. -->
