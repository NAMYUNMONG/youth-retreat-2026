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

type TeamAssignment = {
  name: string;
  leader?: string;
  members: string[];
};

const volunteerTeams: TeamAssignment[] = [
  { name: "1", leader: "강서준", members: ["김예지", "박도현", "이나연", "최민석", "정유나"] },
  { name: "2", leader: "윤태현", members: ["한지민", "송준호", "오수아", "임재윤", "배하린"] },
  { name: "3", leader: "조현우", members: ["문서윤", "장민호", "신예린", "권도윤", "백지아"] },
  { name: "4", leader: "홍준혁", members: ["유채원", "노건우", "안서현", "서지훈", "황다인"] },
  { name: "5", leader: "김태윤", members: ["이가은", "박성민", "최예나", "정시온", "한수빈"] },
  { name: "6", leader: "이승현", members: ["김나윤", "박재현", "최하린", "정민규", "윤서아"] },
];

const communityTeams: TeamAssignment[] = [
  { name: "1", leader: "김민준", members: ["이서연", "박지훈", "최하은", "정우진", "한예린"] },
  { name: "2", leader: "이도윤", members: ["김서현", "박준서", "최유진", "정하람", "윤지우"] },
  { name: "3", leader: "박시우", members: ["김하윤", "이현우", "최서아", "강민재", "송예은"] },
  { name: "4", leader: "최지호", members: ["김다은", "이준혁", "박수빈", "정건우", "임채원"] },
];

function TeamRoster({ teams, vertical = false }: { teams: TeamAssignment[]; vertical?: boolean }) {
  return (
    <div className={`team-roster${vertical ? " team-roster--vertical" : ""}`}>
      {teams.map((team) => (
        <article className="team-roster-card" key={team.name}>
          <div className="team-roster-card__header">
            <strong>{team.name}</strong>
          </div>
          <dl className="team-roster-card__people">
            <div>
              <dd className="team-roster-card__leader">{team.leader || "미정"}</dd>
            </div>
            <div>
              <dd>{team.members.length > 0 ? <ul>{team.members.map((member) => <li key={member}>{member}</li>)}</ul> : <span className="team-roster-card__empty">추후 입력</span>}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

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
        <Accordion title="수련회 프로그램" icon={<RetreatInfoIcon kind="program" />}>
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
          <div className="team-structure">
            <p className="team-structure__intro">프로그램에 따라 서로 다른 팀으로 편성됩니다.</p>
            <div className="team-program-accordions">
              <Accordion title="봉사 프로그램" meta="3팀 또는 6팀">
                <div className="team-program-roster">
                  <TeamRoster teams={volunteerTeams} vertical />
                </div>
              </Accordion>
              <Accordion title="공동체 프로그램" meta="4팀">
                <div className="team-program-roster">
                  <TeamRoster teams={communityTeams} vertical />
                </div>
              </Accordion>
            </div>
          </div>
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
