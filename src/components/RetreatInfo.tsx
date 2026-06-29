import { useEffect, useState } from "react";
import { Accordion } from "./Accordion";

const checklistItems = [
  "개인 준비물 공지 확인",
  "성경책 및 필기구",
  "개인 위생용품",
  "추가 안내사항 확인",
];

const checklistKey = "retreat-packing-checklist";

export function RetreatInfo() {
  const [checked, setChecked] = useState<boolean[]>(() => checklistItems.map(() => false));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(checklistKey);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setChecked(checklistItems.map((_, index) => Boolean(parsed[index])));
    } catch {
      window.localStorage.removeItem(checklistKey);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(checklistKey, JSON.stringify(checked));
  }, [checked]);

  return (
    <section id="about" className="page-section">
      <div className="section-heading">
        <span>ABOUT</span>
        <h2>수련회에 대해서</h2>
      </div>

      <div className="info-card">
        <div className="info-card__main">
          <p>수련회 주제</p>
          <h3>염려 Off, 기도 On</h3>
          <p>고민, 걱정, 두려움이 있을 때 기도의 자리로 나아가라!</p>
        </div>
        <div className="info-grid">
          <div>
            <span aria-hidden="true">○</span>
            <p>목표</p>
            <strong>기도의 자리로 나아가기</strong>
          </div>
          <div>
            <span aria-hidden="true">◷</span>
            <p>일시</p>
            <strong>2026년 7월 16–18일 (목–토)</strong>
          </div>
          <div>
            <span aria-hidden="true">⌖</span>
            <p>장소</p>
            <strong>인천 무의감리교회</strong>
          </div>
        </div>
      </div>

      <div className="section-stack">
        <Accordion title="수련회 일정표" icon="~" defaultOpen>
          <p className="notice">세부 시간표는 확정 후 업데이트됩니다.</p>
          <ul className="timeline-list">
            <li>
              <strong>7/16 목</strong>
              <span>아이스브레이킹 · 저녁 예배</span>
            </li>
            <li>
              <strong>7/17 금</strong>
              <span>아침묵상 · 강의 · 체육대회 · 저녁 예배</span>
            </li>
            <li>
              <strong>7/18 토</strong>
              <span>아침묵상 · 마무리 일정</span>
            </li>
          </ul>
        </Accordion>

        <Accordion title="수련회 조편성" icon="◇">
          <p className="notice">조편성과 조별 리더 정보가 확정되면 업데이트됩니다.</p>
        </Accordion>

        <Accordion title="수련회 준비물" icon="✓">
          <div className="checklist" role="group" aria-label="수련회 준비물 체크리스트">
            {checklistItems.map((item, index) => (
              <label key={item} className="checklist__item">
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() =>
                    setChecked((current) =>
                      current.map((value, currentIndex) => (currentIndex === index ? !value : value)),
                    )
                  }
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <nav className="day-link-panel" aria-label="날짜별 일정 바로가기">
            <p>날짜별 자세한 일정 보기</p>
            <div className="day-link-panel__buttons">
              <a href="#day1" aria-label="DAY 1 7월 16일 일정으로 이동">
                <strong>DAY 1</strong>
                <span>7/16 목</span>
              </a>
              <a href="#day2" aria-label="DAY 2 7월 17일 일정으로 이동">
                <strong>DAY 2</strong>
                <span>7/17 금</span>
              </a>
              <a href="#day3" aria-label="DAY 3 7월 18일 일정으로 이동">
                <strong>DAY 3</strong>
                <span>7/18 토</span>
              </a>
            </div>
          </nav>
        </Accordion>
      </div>
    </section>
  );
}
