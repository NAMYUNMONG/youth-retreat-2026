export type TimeTableItem = {
  time: string;
  title: string;
};

type TimeTableProps = {
  items: TimeTableItem[];
};

export function TimeTable({ items }: TimeTableProps) {
  if (items.length === 0) {
    return (
      <article className="time-table">
        <h3>타임테이블</h3>
        <p className="notice">세부 시간표는 확정 후 업데이트됩니다.</p>
      </article>
    );
  }

  return (
    <article className="time-table">
      <div className="time-table__header">
        <span>TIME TABLE</span>
        <h3>타임테이블</h3>
      </div>
      <ol className="time-table__list" aria-label="상세 일정">
        {items.map((item) => (
          <li key={`${item.time}-${item.title}`}>
            <time>{item.time}</time>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ol>
    </article>
  );
}
