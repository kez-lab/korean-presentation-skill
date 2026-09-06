---
marp: true
theme: default
size: 16:9
paginate: false
style: |
  /* Deliberately non-compliant: this fixture exists so the test suite can prove
     every governance rule is still capable of firing. It is never shipped. */
  section {
    width: 1280px; height: 720px; padding: 40px;
    background: #FFFFFF; color: #111111;
    font-family: "Nonexistent Display", sans-serif;
    font-size: 20px;
    letter-spacing: 0.01em;   /* violates the declared -0.025em standard */
    word-break: normal;       /* violates keep-all */
    box-sizing: border-box;
    position: relative;
  }
  .cramped  { font-size: 12px; letter-spacing: -0.12em; }
  .loose    { font-size: 18px; letter-spacing: 0.09em; }
  .tiny     { font-size: 8px; }
  .faint    { color: #EFEFEF; }               /* ~1.1:1 on white */
  .overflow { position: absolute; left: 1180px; top: 640px; width: 300px; }
  .stack-a  { position: absolute; left: 300px; top: 300px; width: 260px; }
  .stack-b  { position: absolute; left: 310px; top: 306px; width: 260px; }
  .narrow   { width: 232px; font-size: 16px; }
---

<!-- note: 이 픽스처는 감사 규칙이 모두 발동 가능한지 검증하기 위한 합성 덱입니다. 배포용이 아닙니다. -->
<div>루트가 잘못된 자간과 word-break를 선언한 슬라이드입니다.</div>
<div class="cramped">지나치게 조밀한 한글 본문 자간을 확인하는 문장입니다.</div>
<div class="loose">지나치게 느슨한 한글 본문 자간을 확인하는 문장입니다.</div>
<div class="tiny">투사 시 판독이 불가능한 아주 작은 본문 크기입니다.</div>
<div class="faint">배경과 대비가 거의 없는 흐린 본문입니다.</div>
<div class="narrow">외톨이 조사가 마지막 줄에 홀로 떨어지는지 확인하는 문장의</div>
<div class="overflow">캔버스 밖으로 흘러넘치는 블록입니다.</div>
<div class="stack-a">서로 겹치는 텍스트 블록 A 입니다.</div>
<div class="stack-b">서로 겹치는 텍스트 블록 B 입니다.</div>

---

<div style="position:absolute; top:20px; left:40px; font-size:22px;">상단에만 내용이 몰린, 스피커 노트가 없는 슬라이드입니다.</div>

---

<!-- note: 그라디언트가 PPTX 단색으로 근사되는지 확인하는 슬라이드입니다. 이 덱은 감사 규칙 검증 전용이며 배포되지 않습니다. -->
<div style="background: linear-gradient(90deg, #4F46E5 0%, #EC4899 100%); padding: 24px; color: #FFFFFF; font-size: 20px;">
  그라디언트 배경 위의 본문입니다.
</div>
<div style="font-size: 34px; font-weight: 800; background: linear-gradient(90deg, #0EA5E9, #A855F7); -webkit-background-clip: text; background-clip: text; color: transparent;">
  그라디언트로 칠한 글자입니다.
</div>

---

<!-- note: 짧은 노트입니다. -->
<div style="width: 200px; height: 120px; background: #DDDDDD;"></div>
