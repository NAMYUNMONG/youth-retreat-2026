import { ReactNode } from "react";
import { NotePad } from "./NotePad";
import { ProgramCard } from "./ProgramCard";
import { ProgramIcon } from "./ProgramIcon";
import { SheetItem } from "./SheetViewer";

type WorshipCardProps = {
  dayLabel: string;
  time: string;
  sheetUrl: string;
  sermonPassage: string;
  sermonTopic: string;
  topicFirst?: boolean;
  sermonVerses?: readonly { verse: string; text: string }[];
  sheets?: SheetItem[];
  sheetPageHref?: string;
  noteKey: string;
  onEmptyLink: (message: string) => void;
  children?: ReactNode;
  noteLabel?: string;
  notePlaceholder?: string;
  showNotePad?: boolean;
};

const defaultNotePlaceholder = "설교를 들으며 마음에 남은 말씀과 기도제목을 적어보세요.";

export function WorshipCard({ dayLabel, time, sheetUrl, sermonPassage, sermonTopic, topicFirst = false, sermonVerses = [], sheets = [], sheetPageHref, noteKey, onEmptyLink, children, noteLabel, notePlaceholder = defaultNotePlaceholder, showNotePad = true }: WorshipCardProps) {
  const openLink = (url: string) => {
    if (!url) { onEmptyLink("링크 준비 중입니다."); return; }
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const openSheets = () => {
    if (sheets.length > 0 && sheetPageHref) { window.location.hash = sheetPageHref.replace(/^#/, ""); return; }
    openLink(sheetUrl);
  };

  const passageMeta = <div className="sermon-meta__passage"><dt>설교 말씀 본문</dt><dd>{sermonVerses.length > 0 ? <details><summary>{sermonPassage}</summary><div className="sermon-passage-verses">{sermonVerses.map((item) => <p key={item.verse}><strong>{item.verse}</strong><span>{item.text}</span></p>)}</div></details> : sermonPassage || "추후 업데이트 예정"}</dd></div>;

  return <ProgramCard eyebrow={dayLabel} title="저녁예배" icon={<ProgramIcon kind="worship" />} time={time}>
    <dl className="sermon-meta">
      <div className="sermon-meta__praise">
        <details className="sermon-praise-accordion">
          <summary>
            <span className="sermon-praise-accordion__title">찬양</span>
            <button type="button" className="button button--secondary button--small sermon-praise-accordion__sheet-button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); openSheets(); }} aria-label={`${dayLabel} 악보 보기`}>악보 보기</button>
          </summary>
          <div className="sermon-praise-content">
            {sheets.length > 0 ? <ol className="sermon-song-list">{sheets.map((sheet) => <li key={sheet.title}>{sheet.title}</li>)}</ol> : <p className="muted">송리스트는 추후 업데이트됩니다.</p>}
          </div>
        </details>
      </div>
      {topicFirst ? <>
        <div><dt>설교 주제</dt><dd>{sermonTopic || "추후 업데이트 예정"}</dd></div>
        {passageMeta}
      </> : <>
        {passageMeta}
        <div><dt>설교 주제</dt><dd>{sermonTopic || "추후 업데이트 예정"}</dd></div>
      </>}
    </dl>
    {children}
    {showNotePad && <NotePad storageKey={noteKey} label={noteLabel ?? `${dayLabel} 말씀 노트`} placeholder={notePlaceholder} />}
  </ProgramCard>;
}
