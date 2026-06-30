import { ReactNode } from "react";
import { Accordion } from "./Accordion";

type ProgramCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function ProgramCard({ title, description, children }: ProgramCardProps) {
  return (
    <Accordion title={title}>
      <div className="program-accordion__content">
        {description && <p className="muted">{description}</p>}
        {children}
      </div>
    </Accordion>
  );
}
