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
          title="아이스브레이킹 프로그램"
          icon={<ProgramIcon kind="icebreaker" />}
          time="13:30–15:00"
          description="프로그램 안내와 진행 순서는 확정 후 업데이트됩니다."
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
      <DaySection id="day2" day="DAY 2" date="7월 17일 금요일" summary="장로님과의 대화, 체육대회와 팀별 나눔으로 이어지는 중심 일정">
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
          title="장로님 간증"
          icon={<ProgramIcon kind="testimony" />}
          time="10:00–12:00"
        >
          <p className="program-accordion__meta">
            진행: <strong>장로님과의 대화</strong>
          </p>
          <p className="muted">신앙과 삶에 관한 이야기를 함께 나누는 시간입니다.</p>
          <NotePad
            storageKey="day2-lecture-note"
            label="DAY 2 토크토크 정리 노트"
            placeholder="대화에서 기억하고 싶은 내용, 질문, 적용점을 자유롭게 적어보세요."
          />
        </ProgramCard>
        <ProgramCard
          eyebrow="TEAM"
          title="체육대회 및 팀별 나눔"
          icon={<ProgramIcon kind="team" />}
          time="14:00–18:00"
          description="체육대회 후 카페에서 기도제목과 질문을 팀별로 나눕니다."
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
          description="마지막 아침, 하나님께서 주신 마음을 조용히 되새깁니다."
        >
          <Day3MeditationContent />
          <NotePad
            storageKey="day3-meditation-note"
            label="DAY 3 아침묵상 적용 노트"
            placeholder="오늘 아침 하나님께서 주신 마음, 내려놓아야 할 염려, 계속 붙들 기도제목을 적어보세요."
          />
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
