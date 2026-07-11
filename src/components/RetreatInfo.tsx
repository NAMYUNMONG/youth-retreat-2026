import { Accordion } from "./Accordion";
import { RetreatInfoIcon } from "./RetreatInfoIcon";

const checklistItems = [
  { label: "성경책 및 필기구" },
  {
    label: "개인 위생용품",
    children: ["수건", "치약 및 칫솔", "바디워시 및 샴푸"],
  },
  { label: "여벌 의류", children: ["속옷 및 양말"] },
  { label: "개인 전자용품", children: ["휴대전화 충전기", "헤어드라이어"] },
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
              <strong>7월 16일 목요일</strong>
              <span>개회예배 · 아이스브레이킹 · 봉사 활동 · 신앙 프로그램 · 저녁 예배</span>
            </li>
            <li>
              <strong>7월 17일 금요일</strong>
              <span>아침묵상 · 간증 시간 · 공동체 게임 · 나눔 · 저녁 예배</span>
            </li>
            <li>
              <strong>7월 18일 토요일</strong>
              <span>아침묵상 · 폐회예배</span>
            </li>
          </ul>
        </Accordion>

        <Accordion title="수련회 조편성" icon={<RetreatInfoIcon kind="groups" />}>
          <p className="notice">조편성과 조별 리더 정보가 확정되면 업데이트됩니다.</p>
        </Accordion>

        <Accordion title="수련회 준비물" icon={<RetreatInfoIcon kind="packing" />}>
          <ul className="checklist" aria-label="수련회 준비물 목록">
            {checklistItems.map((item) => (
              <li key={item.label} className="checklist__item">
                <span>{item.label}</span>
                {item.children && (
                  <ul className="checklist__subitems">
                    {item.children.map((child) => <li key={child}>{child}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Accordion>
      </div>
    </section>
  );
}
