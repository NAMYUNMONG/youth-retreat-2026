import { ReactNode } from "react";

type DaySectionProps = {
  id: string;
  day: string;
  date: string;
  summary: string;
  children: ReactNode;
};

export function DaySection({ id, day, date, summary, children }: DaySectionProps) {
  return (
    <section id={id} className="page-section day-section">
      <div className="day-header">
        <span>{day}</span>
        <h2>{date}</h2>
        <p>{summary}</p>
      </div>
      <div className="section-stack">{children}</div>
    </section>
  );
}
