import { useCallback, useEffect, useState } from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import { DaySection } from "./components/DaySection";
import { Day3MeditationContent } from "./components/Day3MeditationContent";
import { Day2SermonContent } from "./components/Day2SermonContent";
import { Hero } from "./components/Hero";
import { NotePad } from "./components/NotePad";
import { PhotoShareCard } from "./components/PhotoShareCard";
import { ProgramCard } from "./components/ProgramCard";
import { ProgramIcon } from "./components/ProgramIcon";
import { RetreatInfo } from "./components/RetreatInfo";
import { SheetItem, SheetViewer } from "./components/SheetViewer";
import { SiteFooter } from "./components/SiteFooter";
import { TimeTable } from "./components/TimeTable";
import { Toast } from "./components/Toast";
import { WorshipCard } from "./components/WorshipCard";
import { retreatConfig } from "./config/retreat";

type Route = "home" | "about" | "day1" | "day2" | "day3" | "day1Sheets" | "day2Sheets" | "photos";

const routeMap: Record<string, Route> = {
  home: "home",
  about: "about",
  day1: "day1",
  day2: "day2",
  day3: "day3",
  "day1/sheets": "day1Sheets",
  "day2/sheets": "day2Sheets",
  photos: "photos",
};

const photoShareVisible = false;

const getRoute = (): Route => {
  if (typeof window === "undefined") return "home";
  const route = window.location.hash.replace(/^#\/?/, "") || "home";
  return routeMap[route] ?? "home";
};

function PageTop({
  label,
  title,
  backHref = "#/",
  backLabel = "홈으로",
  showBack = true,
  compact = false,
}: {
  label: string;
  title: string;
  backHref?: string;
  backLabel?: string;
  showBack?: boolean;
  compact?: boolean;
}) {
  return (
    <header className={`subpage-top${compact ? " subpage-top--compact" : ""}`}>
      {showBack && (
        <a href={backHref} aria-label={`${backLabel} 이동`}>
          {backLabel}
        </a>
      )}
      <span>{label}</span>
      <h1>{title}</h1>
    </header>
  );
}

function Day1Page({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <DaySection id="day1" day="DAY 1" date="7월 16일 목요일" summary="개회예배와 봉사, 신앙 프로그램으로 시작하는 첫날">
        <TimeTable items={retreatConfig.schedule.day1} day="day1" />
        <ProgramCard
          eyebrow="ICE BREAKING"
          title="아이스브레이킹"
          icon={<ProgramIcon kind="icebreaker" />}
          time="13:30–15:00"
        >
          <section className="program-item-list" aria-label="DAY 1 아이스브레이킹 프로그램">
            <ol>
              <li><span>나 사용 설명서</span></li>
              <li><span>우리조 TMI 카드</span></li>
              <li><span>수련회 키워드 경매</span></li>
            </ol>
          </section>
        </ProgramCard>
        <ProgramCard
          eyebrow="VOLUNTEER"
          title="봉사활동"
          icon={<ProgramIcon kind="volunteer" />}
          time="15:00–16:30"
          description={
            <>
              팀을 나누어 어르신 가정을 방문하여 봉사활동을 진행합니다.
              <br />
              아래 가이드라인을 따라 봉사활동을 진행해 주세요.
            </>
          }
        >
          <section className="volunteer-guidelines" aria-label="DAY 1 봉사활동 가이드라인">
            <ol>
              <li><span>가이드라인 1</span></li>
              <li><span>가이드라인 2</span></li>
              <li><span>가이드라인 3</span></li>
            </ol>
          </section>
        </ProgramCard>
        <ProgramCard
          eyebrow="PRAYER"
          title={
            <span>
              신앙프로그램
              <br />
              (손바닥 기도)
            </span>
          }
          icon={<ProgramIcon kind="meditation" />}
          time="16:30–18:00"
          description="손바닥 기도를 통해 기도제목을 돌아보고 서로를 위해 함께 기도합니다."
        />
        <WorshipCard
          dayLabel="DAY 1"
          time="20:00–22:00"
          playlistUrl={retreatConfig.day1.playlistUrl}
          sheetUrl={retreatConfig.day1.sheetUrl}
          sermonPassage={retreatConfig.day1.sermonPassage}
          sermonTopic={retreatConfig.day1.sermonTopic}
          sheets={retreatConfig.day1.sheets}
          sheetPageHref="#/day1/sheets"
          noteKey="day1-sermon-note"
          onEmptyLink={showToast}
        />
      </DaySection>
    </>
  );
}

function Day2Page({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <DaySection id="day2" day="DAY 2" date="7월 17일 금요일" summary="장로님과의 대화, 공동체 게임과 팀별 나눔으로 이어지는 중심 일정">
        <TimeTable items={retreatConfig.schedule.day2} day="day2" />
        <ProgramCard
          eyebrow="MORNING"
          title="아침묵상"
          icon={<ProgramIcon kind="meditation" />}
          time="08:00–10:00"
          description="아침묵상 본문과 나눔 가이드는 추후 업데이트됩니다."
        />
        <ProgramCard
          eyebrow="SESSION"
          title="간증 시간"
          icon={<ProgramIcon kind="testimony" />}
          time="10:00–12:00"
        >
          <p className="program-accordion__meta">
            간증자: <strong>고광현 장로</strong>
          </p>
          <NotePad
            storageKey="day2-lecture-note"
            label="DAY 2 토크토크 정리 노트"
            placeholder="대화에서 기억하고 싶은 내용, 질문, 적용점을 자유롭게 적어보세요."
          />
        </ProgramCard>
        <ProgramCard
          eyebrow="TEAM"
          title="공동체 게임"
          icon={<ProgramIcon kind="team" />}
          time="14:00–16:00"
        >
          <section className="program-item-list" aria-label="DAY 2 공동체 게임 프로그램">
            <ol>
              <li><span>방석 뒤집기</span></li>
              <li><span>성경 OX 퀴즈</span></li>
              <li><span>이구동성</span></li>
              <li><span>몸으로 말해요</span></li>
              <li><span>초성 퀴즈</span></li>
              <li><span>1초 찬양</span></li>
              <li><span>AI 성경 그림 맞추기</span></li>
            </ol>
          </section>
        </ProgramCard>
        <ProgramCard
          eyebrow="SHARING"
          title="팀별 나눔"
          icon={<ProgramIcon kind="team" />}
          time="16:00–18:00"
          description="카페에서 기도제목과 질문을 팀별로 나눕니다."
        />
        <WorshipCard
          dayLabel="DAY 2"
          time="20:00–22:00"
          playlistUrl={retreatConfig.day2.playlistUrl}
          sheetUrl={retreatConfig.day2.sheetUrl}
          sermonPassage={retreatConfig.day2.sermonPassage}
          sermonTopic={retreatConfig.day2.sermonTopic}
          sheets={retreatConfig.day2.sheets}
          sheetPageHref="#/day2/sheets"
          noteKey="day2-sermon-note"
          onEmptyLink={showToast}
          noteLabel="DAY 2 저녁예배 설교 노트"
          notePlaceholder="염려를 하나님께 아뢰며, 오늘 말씀을 통해 깨달은 것과 기도제목을 적어보세요."
        >
          <Day2SermonContent />
        </WorshipCard>
      </DaySection>
    </>
  );
}

function SheetPage({
  dayLabel,
  title,
  backHref,
  sheets,
}: {
  dayLabel: string;
  title: string;
  backHref: string;
  sheets: SheetItem[];
}) {
  return (
    <>
      <PageTop label="WORSHIP SHEETS" title={title} backHref={backHref} backLabel={`${dayLabel}으로`} />
      <section className="page-section">
        <SheetViewer dayLabel={dayLabel} sheets={sheets} />
      </section>
    </>
  );
}

function Day3Page() {
  return (
    <>
      <DaySection id="day3" day="DAY 3" date="7월 18일 토요일" summary="수련회를 마무리하며 받은 마음을 정리하는 아침">
        <TimeTable items={retreatConfig.schedule.day3} day="day3" />
        <ProgramCard
          eyebrow="CLOSING MORNING"
          title="아침묵상"
          icon={<ProgramIcon kind="meditation" />}
          time="08:00–10:00"
        >
          <Day3MeditationContent />
          <NotePad
            storageKey="day3-meditation-note"
            label="DAY 3 아침묵상 적용 노트"
            placeholder="오늘 아침 하나님께서 주신 마음, 내려놓아야 할 염려, 계속 붙들 기도제목을 적어보세요."
          />
        </ProgramCard>
        <ProgramCard
          eyebrow="CLOSING WORSHIP"
          title="폐회예배"
          icon={<ProgramIcon kind="worship" />}
          time="10:00–11:00"
          description="함께 예배드리며 수련회 일정을 마무리합니다."
        />
        <ProgramCard
          eyebrow="PALM PRAYER"
          title="손바닥 기도"
          icon={<ProgramIcon kind="meditation" />}
          time="10:00–11:00"
          description="손가락을 하나씩 짚으며 각 기도 제목을 두고 함께 기도합니다."
        >
          <section className="prayer-topics" aria-labelledby="day3-prayer-topics-title">
            <h3 id="day3-prayer-topics-title">DAY 3 손바닥 기도 제목</h3>
            <ol>
              <li><span>기도 제목 1</span></li>
              <li><span>기도 제목 2</span></li>
              <li><span>기도 제목 3</span></li>
              <li><span>기도 제목 4</span></li>
              <li><span>기도 제목 5</span></li>
            </ol>
          </section>
        </ProgramCard>
      </DaySection>
    </>
  );
}

function PhotosPage({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <PageTop label="PHOTO SHARE" title="사진공유방" showBack={false} compact />
      <section id="photos" className="page-section photos-section">
        <div className="photo-grid">
          <PhotoShareCard
            title="수련회 사진공유방"
            description="예배, 조별 활동, 공동체의 순간을 함께 모아봅니다."
            url={retreatConfig.photos.retreatUrl}
            onEmptyLink={() => showToast("사진 링크 준비 중입니다.")}
          />
          <PhotoShareCard
            title="봉사활동 사진공유방"
            description="섬김과 봉사의 현장을 기록하는 공간입니다."
            url={retreatConfig.photos.volunteerUrl}
            onEmptyLink={() => showToast("사진 링크 준비 중입니다.")}
          />
          <PhotoShareCard
            title="기타 프로그램 사진공유방"
            description="레크리에이션과 특별 프로그램 사진을 확인합니다."
            url={retreatConfig.photos.programUrl}
            onEmptyLink={() => showToast("사진 링크 준비 중입니다.")}
          />
        </div>
      </section>
    </>
  );
}

function App() {
  const [toast, setToast] = useState("");
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const updateRoute = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  const showToast = useCallback((message: string) => {
    setToast("");
    window.setTimeout(() => setToast(message), 10);
  }, []);

  const renderPage = () => {
    if (route === "about") {
      return (
        <>
          <PageTop label="RETREAT INFO" title="수련회 안내" />
          <RetreatInfo />
        </>
      );
    }

    if (route === "day1") return <Day1Page showToast={showToast} />;
    if (route === "day2") return <Day2Page showToast={showToast} />;
    if (route === "day3") return <Day3Page />;
    if (route === "day1Sheets") {
      return <SheetPage dayLabel="DAY 1" title="DAY 1 악보" backHref="#/day1" sheets={retreatConfig.day1.sheets} />;
    }
    if (route === "day2Sheets") {
      return <SheetPage dayLabel="DAY 2" title="DAY 2 악보" backHref="#/day2" sheets={retreatConfig.day2.sheets} />;
    }
    if (photoShareVisible && route === "photos") return <PhotosPage showToast={showToast} />;

    return (
      <>
        <Hero />
        <RetreatInfo />
      </>
    );
  };

  return (
    <>
      <main className="app-shell">
        {renderPage()}
        {route !== "home" && <SiteFooter />}
      </main>
      <BottomNavigation currentRoute={route === "day1Sheets" ? "day1" : route === "day2Sheets" ? "day2" : route} />
      <Toast message={toast} onClose={() => setToast("")} />
    </>
  );
}

export default App;
