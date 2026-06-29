import { ReactNode } from "react";

type ProgramCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function ProgramCard({ eyebrow, title, description, children }: ProgramCardProps) {
  return (
    <article className="program-card">
      {eyebrow && <p className="program-card__eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      {description && <p className="muted">{description}</p>}
      {children}
    </article>
  );
}
