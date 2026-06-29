import { ReactNode, useId, useState } from "react";

type AccordionProps = {
  title: string;
  icon?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function Accordion({ title, icon, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <section className="accordion">
      <h3>
        <button
          className="accordion__trigger"
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="accordion__title">
            {icon && <span aria-hidden="true">{icon}</span>}
            {title}
          </span>
          <span className="accordion__chevron" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div id={id} className="accordion__panel" hidden={!open}>
        {children}
      </div>
    </section>
  );
}
