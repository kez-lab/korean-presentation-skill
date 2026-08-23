# Component Spacing, Visual Gravity & Harmonious Proportion Guide

본 문서는 프레젠테이션 슬라이드에서 **상단 쏠림(Top-Heavy Clutter)을 방지하고, 슬라이드 캔버스 전체의 시각적 균형축(Visual Center Axis)에 맞춘 수직/수평 여백 및 중력(Gravity) 제어 표준**입니다.

---

## 1. 상단 쏠림 방지: Visual Center Equilibrium (기본 수직 중앙 정렬)

슬라이드 캔버스(1280px × 720px)에서 `justify-content: flex-start`를 무비판적으로 사용하면, 모든 콘텐츠가 상단 천장에 다닥다닥 붙고 하단이 휑하게 비는 **상단 쏠림 결함**이 발생합니다.

```
[결함: Top-Heavy Clutter]               [개선: Harmonious Center Equilibrium]
┌────────────────────────────────┐      ┌────────────────────────────────┐
│ [Header]                       │      │                                │ 70px Breathing Zone
│ [Main Content Cards]           │      │ [Header Zone]                  │
│                                │      │   ↕ Inter-Section Margin: 32px │
│ (하단이 휑하게 비어 불안정함)    │      │ [Main Content Cards Zone]      │
│                                │      │                                │ 70px Breathing Zone
└────────────────────────────────┘      └────────────────────────────────┘
```

### 전역 규칙 (Golden Rules)
1. **수직 중앙 밸런스 (`justify-content: center`)**:
   - 콘텐츠 덩어리 전체(헤더 + 본문 카드/다이어그램)가 슬라이드 캔버스의 정중앙에 위치하여 상단 여백과 하단 여백이 1:1로 완벽한 대칭을 이룹니다.
2. **명확한 계층 간격 (Inter-Tier Spacing)**:
   - **헤더와 본문 사이**: `margin-bottom: 28px ~ 36px` (충분한 시각적 단락 분리)
   - **Kicker 배지와 Title 사이**: `margin-bottom: 10px`
   - **Title과 Lead-in 사이**: `margin-bottom: 8px`
3. **카드/그리드 자체 높이 확보**:
   - 2x2 목차, 3단 카드, 빅 스탯 카드의 높이를 캔버스 비중에 맞게 안정적인 높이(`height: 380px ~ 420px`)로 확보하여 왜소해 보이지 않게 설계합니다.

---

## 2. 슬라이드 유형별 Visual Gravity 매트릭스

| 슬라이드 유형 | Gravity 모드 | CSS 레이아웃 구조 | 조화로운 여백 규격 |
|:---|:---|:---|:---|
| **목차 (Agenda Split)** | `Center Balance` | `display: flex; align-items: center; justify-content: center; gap: 48px;` | 좌우 분할 블록 전체가 슬라이드 정중앙에 플로팅 |
| **문제점 / 3대 모델 (3 Cards)** | `Center Stack` | `display: flex; flex-direction: column; justify-content: center;` | 헤더와 3단 카드가 하나의 덩어리로 정중앙 정렬 |
| **UDF 흐름도 / 파이프라인** | `Center Flow` | `display: flex; flex-direction: column; justify-content: center;` | 헤더 - 4단계 다이어그램 - 2단 요약 카드가 균등 분배 |
| **철학 / 인용구 (Quote)** | `Center Focus` | `justify-content: center; align-items: center; text-align: center;` | 캔버스 정중앙에 100% 집중 |
| **표지 / 결론 (Cover / CTA)** | `Space-Between` | `justify-content: space-between; height: 100%;` | 상단 타이틀과 하단 메타/CTA 바가 상하 양끝 지탱 |

---

## 3. 컴포넌트 간 상호 간격(Gutter) 정밀 표준

- **그리드 열 간격 (Column Gap)**: `gap: 16px ~ 20px`
- **카드 내부 여백 (Card Inner Padding)**: `padding: 22px 24px`
- **리스트 불릿 간격 (List Item Spacing)**: `margin-bottom: 6px`, `line-height: 1.55`
- **뱃지 내부 패딩 (Badge Padding)**: `padding: 5px 14px`
