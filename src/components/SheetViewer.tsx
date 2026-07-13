import { useRef, useState } from "react";

export type SheetItem = {
  title: string;
  imageUrl: string;
};

type SheetViewerProps = {
  dayLabel: string;
  sheets: SheetItem[];
};

export function SheetViewer({ dayLabel, sheets }: SheetViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  if (sheets.length === 0) {
    return <p className="notice">악보가 준비 중입니다.</p>;
  }

  const currentSheet = sheets[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === sheets.length - 1;

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.2) return;

    if (deltaX < 0 && !isLast) setCurrentIndex((index) => index + 1);
    if (deltaX > 0 && !isFirst) setCurrentIndex((index) => index - 1);
  };

  return (
    <section className="sheet-viewer" aria-label={`${dayLabel} 악보 보기`}>
      <div className="sheet-viewer__header">
        <span>{currentIndex + 1}/{sheets.length}</span>
      </div>
      <div className="sheet-viewer__controls">
        <button
          type="button"
          className="button button--small button--ghost"
          onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
          disabled={isFirst}
          aria-label="이전 악보 보기"
        >
          이전
        </button>
        <span aria-live="polite">{currentSheet.title}</span>
        <button
          type="button"
          className="button button--small button--ghost"
          onClick={() => setCurrentIndex((index) => Math.min(index + 1, sheets.length - 1))}
          disabled={isLast}
          aria-label="다음 악보 보기"
        >
          다음
        </button>
      </div>
      <figure className="sheet-viewer__image-wrap" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <img src={currentSheet.imageUrl} alt={`${dayLabel} ${currentSheet.title} 악보`} loading="lazy" />
      </figure>
    </section>
  );
}
