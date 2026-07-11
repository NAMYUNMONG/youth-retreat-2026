import { Accordion } from "./Accordion";
import { RetreatInfoIcon } from "./RetreatInfoIcon";

const checklistItems = [
  "개인 준비물 공지 확인",
  "성경책 및 필기구",
  "개인 위생용품",
  "추가 안내사항 확인",
];

export function RetreatInfo() {
  return (
    <section id="about" className="page-section">
      <div className="section-heading">
        <span>ABOUT</span>
        <h2>수련회에 대해서</h2>
      </div>

      <div className="info-card">
        <div className="info-grid">
          <div>
            <p>목표</p>
            <strong>고민, 걱정, 두려움이 있을 때 기도의 자리로 나아가라!</strong>
          </div>
          <div>
            <p>일시</p>
            <strong>2026년 7월 16–18일 (목–토)</strong>
          </div>
          <div>
            <p>장소</p>
            <strong className="retreat-location">
              <span className="retreat-location__text">
                인천 무의교회 <span className="retreat-location__address">(인천 중구 소무의로 30)</span>
              </span>
              <a
                className="retreat-location__map-link"
                href="https://naver.me/xdjoQdGo"
                target="_blank"
                rel="noreferrer"
                aria-label="인천 무의교회 지도에서 보기"
                title="지도에서 보기"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6.08 7-13a7 7 0 1 0-14 0c0 6.92 7 13 7 13Z" />
                  <circle cx="12" cy="8" r="2.5" />
                </svg>
              </a>
            </strong>
          </div>
        </div>
      </div>

      <div className="section-stack">
        <Accordion title="수련회 프로그램" icon={<RetreatInfoIcon kind="program" />} defaultOpen>
          <ul className="timeline-list">
            <li>
              <strong>7/16 목</strong>
              <span>교회 출발 · 개회예배 · 아이스브레이킹 · 가정 방문 봉사 · 신앙 프로그램 · 저녁 집회</span>
            </li>
            <li>
              <strong>7/17 금</strong>
              <span>아침묵상 · 장로님 간증 · 체육대회 · 팀별 나눔 · 저녁 집회</span>
            </li>
            <li>
              <strong>7/18 토</strong>
              <span>아침묵상 · 폐회예배 · 뒷정리 · 점심식사 · 교회 복귀</span>
            </li>
          </ul>
        </Accordion>

        <Accordion title="수련회 조편성" icon={<RetreatInfoIcon kind="groups" />}>
          <p className="notice">조편성과 조별 리더 정보가 확정되면 업데이트됩니다.</p>
        </Accordion>

        <Accordion title="수련회 준비물" icon={<RetreatInfoIcon kind="packing" />}>
          <ul className="checklist" aria-label="수련회 준비물 목록">
            {checklistItems.map((item) => (
              <li key={item} className="checklist__item">
                {item}
              </li>
            ))}
          </ul>
        </Accordion>
      </div>
    </section>
  );
}
