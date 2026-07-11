import { Accordion } from "./Accordion";

export type TimeTableItem = {
  time: string;
  title: string;
};

type TimeTableProps = {
  items: TimeTableItem[];
  day: "day1" | "day2" | "day3";
};

function ScheduleIcon() {
  return (
    <svg className="schedule-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function TimeTable({ items, day }: TimeTableProps) {
  if (items.length === 0) {
    return (
      <div className={`schedule schedule--${day}`}>
        <Accordion title="오늘의 일정" icon={<ScheduleIcon />}>
          <p className="notice">세부 시간표는 확정 후 업데이트됩니다.</p>
        </Accordion>
      </div>
    );
  }

  return (
    <div className={`schedule schedule--${day}`}>
      <Accordion title="오늘의 일정" icon={<ScheduleIcon />}>
        <ol className="time-table__list" aria-label="상세 일정">
          {items.map((item) => (
            <li key={`${item.time}-${item.title}`}>
              <time>{item.time}</time>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ol>
      </Accordion>
    </div>
  );
}
