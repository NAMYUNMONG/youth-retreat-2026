import { NotePad } from "./NotePad";
import { ProgramCard } from "./ProgramCard";

type WorshipCardProps = {
  dayLabel: string;
  playlistUrl: string;
  sheetUrl: string;
  sermonPassage: string;
  sermonTopic: string;
  noteKey: string;
  onEmptyLink: (message: string) => void;
};

const notePlaceholder = "설교를 들으며 마음에 남은 말씀과 기도제목을 적어보세요.";

export function WorshipCard({
  dayLabel,
  playlistUrl,
  sheetUrl,
  sermonPassage,
  sermonTopic,
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

  return (
    <ProgramCard eyebrow={dayLabel} title="저녁 예배">
      <div className="button-row">
        <button
          type="button"
          className="button"
          onClick={() => openLink(playlistUrl)}
          aria-label={`${dayLabel} 찬양 콘티 플레이리스트 열기`}
        >
          찬양 콘티 플레이리스트
        </button>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => openLink(sheetUrl)}
          aria-label={`${dayLabel} 악보 열기`}
        >
          악보 열기
        </button>
      </div>
      <dl className="sermon-meta">
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
