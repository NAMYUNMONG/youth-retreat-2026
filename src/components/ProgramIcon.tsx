export type ProgramIconKind = "icebreaker" | "meditation" | "testimony" | "team" | "volunteer" | "worship";

export function ProgramIcon({ kind }: { kind: ProgramIconKind }) {
  if (kind === "icebreaker") {
    return (
      <svg className="program-icon" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M3.5 19c.5-3.2 2.1-5 4.5-5s4 1.8 4.5 5M11.5 19c.5-3.2 2.1-5 4.5-5s4 1.8 4.5 5" />
        <path d="m12 3 .5 1.3L14 5l-1.5.7L12 7l-.5-1.3L10 5l1.5-.7L12 3Z" />
      </svg>
    );
  }

  if (kind === "meditation") {
    return (
      <svg className="program-icon" viewBox="0 0 24 24">
        <path d="M4 7.5c3.2-.7 5.8.1 8 2.2 2.2-2.1 4.8-2.9 8-2.2V19c-3.2-.7-5.8.1-8 2.2C9.8 19.1 7.2 18.3 4 19V7.5Z" />
        <path d="M12 9.7V21M12 3v2M7.5 4.5 9 6M16.5 4.5 15 6" />
      </svg>
    );
  }

  if (kind === "testimony") {
    return (
      <svg className="program-icon" viewBox="0 0 24 24">
        <rect x="8" y="3" width="8" height="13" rx="4" />
        <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" />
      </svg>
    );
  }

  if (kind === "team") {
    return (
      <svg className="program-icon" viewBox="0 0 24 24">
        <path d="M7 4h10v3.5a5 5 0 0 1-10 0V4ZM9 18h6M12 12.5V18M5 6H3v1.5A3.5 3.5 0 0 0 6.5 11M19 6h2v1.5a3.5 3.5 0 0 1-3.5 3.5" />
        <path d="M8 21h8" />
      </svg>
    );
  }

  if (kind === "volunteer") {
    return (
      <svg className="program-icon" viewBox="0 0 24 24">
        <path d="M12 9.5 9.8 7.3a3 3 0 0 0-4.2 4.2L12 18l6.4-6.5a3 3 0 0 0-4.2-4.2L12 9.5Z" />
        <path d="M3 17.5h3.2l2.2 2h6.8c1.1 0 2-.9 2-2M6.2 17.5l2-2h4.2c1 0 1.8.8 1.8 1.8v.2H10" />
      </svg>
    );
  }

  return (
    <svg className="program-icon" viewBox="0 0 24 24">
      <path d="M9 18V6l10-2v12" />
      <ellipse cx="6.5" cy="18" rx="2.5" ry="2" />
      <ellipse cx="16.5" cy="16" rx="2.5" ry="2" />
      <path d="M9 9.5 19 7.5" />
    </svg>
  );
}
