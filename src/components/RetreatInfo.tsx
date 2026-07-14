import { Accordion } from "./Accordion";
import { RetreatInfoIcon } from "./RetreatInfoIcon";

const checklistItems = [
  { label: "성경책 및 필기구" },
  {
    label: "개인 위생용품",
    children: ["수건", "치약 및 칫솔", "바디워시 및 샴푸", "썬크림"],
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
  { name: "1", leader: "김인용", members: ["구광해"] },
  { name: "2", leader: "이성민", members: ["서성원", "성원경"] },
  { name: "3", leader: "김태현", members: ["이주혁"] },
  { name: "4", leader: "남윤성", members: ["이예나", "정승은"] },
  { name: "5", leader: "유은정", members: ["김민정1", "김민정2"] },
  { name: "6", leader: "김은설", members: ["박시온", "이신혁"] },
];

const communityTeams: TeamAssignment[] = [
  { name: "1", leader: "이성민", members: ["서성원", "성원경", "김민정1", "김예소"] },
  { name: "2", leader: "김인용", members: ["구광해", "이주혁", "장승리", "고은유"] },
  { name: "3", leader: "김태현", members: ["이예나", "정승은", "김민정2", "이희주", "김정윤"] },
  { name: "4", leader: "남윤성", members: ["박시온", "김은설", "김민서", "이신혁"] },
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

export function RetreatInfo({ limited = false }: { limited?: boolean }) {
  return (
    <section id="about" className="page-section">
      {!limited && <div className="section-heading">
        <span>ABOUT</span>
        <h2>수련회에 대해서</h2>
      </div>}

      {!limited && <div className="info-card">
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
      </div>}

      <div className="section-stack">
        <Accordion title="수련회 프로그램" icon={<RetreatInfoIcon kind="program" />}>
          <ul className="timeline-list">
            <li>
              <strong>7/16</strong>
              <span>개회예배 · 공동체 프로그램 · 봉사활동 · 신앙 프로그램 · 저녁예배</span>
            </li>
            <li>
              <strong>7/17</strong>
              <span>아침묵상 · 간증 시간 · 공동체 프로그램 · 저녁예배</span>
            </li>
            <li>
              <strong>7월 18일 토요일</strong>
              <span>아침묵상 · 폐회예배</span>
            </li>
          </ul>
        </Accordion>

        {!limited && <Accordion title="수련회 조편성" icon={<RetreatInfoIcon kind="groups" />}>
          <div className="team-structure">
            <div className="team-program-accordions">
              <Accordion title="봉사활동" meta="6조">
                <div className="team-program-roster">
                  <TeamRoster teams={volunteerTeams} vertical />
                </div>
              </Accordion>
              <Accordion title="공동체 프로그램" meta="4조">
                <div className="team-program-roster">
                  <TeamRoster teams={communityTeams} vertical />
                </div>
              </Accordion>
            </div>
          </div>
        </Accordion>}

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
