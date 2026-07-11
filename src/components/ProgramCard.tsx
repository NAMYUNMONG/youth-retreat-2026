import { ReactNode } from "react";
import { Accordion } from "./Accordion";

type ProgramCardProps = {
  eyebrow?: string;
  title: ReactNode;
  icon?: ReactNode;
  time?: string;
  description?: ReactNode;
  children?: ReactNode;
};

export function ProgramCard({ title, icon, time, description, children }: ProgramCardProps) {
  return (
    <Accordion title={title} icon={icon} meta={time}>
      <div className="program-accordion__content">
        {description && <p className="muted">{description}</p>}
        {children}
      </div>
    </Accordion>
  );
}
