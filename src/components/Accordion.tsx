import { ReactNode, useId, useRef, useState } from "react";

type AccordionProps = {
  title: ReactNode;
  icon?: ReactNode;
  meta?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function Accordion({ title, icon, meta, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = () => {
    const willOpen = !open;
    setOpen(willOpen);

    if (!willOpen) return;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    });
  };

  return (
    <section ref={sectionRef} className="accordion">
      <h3>
        <button
          className="accordion__trigger"
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={toggle}
        >
          <span className="accordion__title">
            {icon && (
              <span className="accordion__leading-icon" aria-hidden="true">
                {icon}
              </span>
            )}
            {title}
          </span>
          <span className="accordion__trailing">
            {meta && <span className="accordion__meta">{meta}</span>}
            <span className="accordion__chevron" aria-hidden="true">
              {open ? "−" : "+"}
            </span>
          </span>
        </button>
      </h3>
      <div id={id} className="accordion__panel" hidden={!open}>
        {children}
      </div>
    </section>
  );
}
