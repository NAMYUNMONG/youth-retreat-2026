import { NotePad } from "./NotePad";
import { ProgramCard } from "./ProgramCard";
import { ProgramIcon } from "./ProgramIcon";
import { SheetItem } from "./SheetViewer";

type WorshipCardProps = {
  dayLabel: string;
  time: string;
  playlistUrl: string;
  sheetUrl: string;
  sermonPassage: string;
  sermonTopic: string;
  sheets?: SheetItem[];
  sheetPageHref?: string;
  noteKey: string;
  onEmptyLink: (message: string) => void;
};

const notePlaceholder = "설교를 들으며 마음에 남은 말씀과 기도제목을 적어보세요.";

export function WorshipCard({
  dayLabel,
  time,
  playlistUrl,
  sheetUrl,
  sermonPassage,
  sermonTopic,
  sheets = [],
  sheetPageHref,
  noteKey,
  onEmptyLink,
}: WorshipCardProps) {
  const openLink = (url: string) => {
    if (!url) {
      onEmptyLink("링크 준비 중입니다.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openSheets = () => {
    if (sheets.length > 0 && sheetPageHref) {
      window.location.hash = sheetPageHref.replace(/^#/, "");
      return;
    }

    openLink(sheetUrl);
  };

  return (
    <ProgramCard eyebrow={dayLabel} title="저녁 예배" icon={<ProgramIcon kind="worship" />} time={time}>
      <dl className="sermon-meta">
        <div className="sermon-meta__praise">
          <dt>찬양</dt>
          <dd>
            <div className="button-row sermon-meta__actions">
              <button
                type="button"
                className="button button--secondary button--small"
                onClick={() => openLink(playlistUrl)}
                aria-label={`${dayLabel} 찬양 플레이리스트 열기`}
              >
                찬양 플레이리스트
              </button>
              <button
                type="button"
                className="button button--secondary button--small"
                onClick={openSheets}
                aria-label={`${dayLabel} 악보 열기`}
              >
                악보 열기
              </button>
            </div>
          </dd>
        </div>
        <div>
          <dt>설교 말씀 본문</dt>
          <dd>{sermonPassage || "추후 업데이트 예정"}</dd>
        </div>
        <div>
          <dt>설교 주제</dt>
          <dd>{sermonTopic || "추후 업데이트 예정"}</dd>
        </div>
      </dl>
      <NotePad storageKey={noteKey} label={`${dayLabel} 말씀 노트`} placeholder={notePlaceholder} />
    </ProgramCard>
  );
}
