type RetreatInfoIconKind = "program" | "groups" | "packing";

export function RetreatInfoIcon({ kind }: { kind: RetreatInfoIconKind }) {
  if (kind === "program") {
    return (
      <svg className="retreat-info-icon retreat-info-icon--program" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M7 2v4M17 2v4M3 9h18M7 13h3M7 17h5M14.5 13.5l3 1.8-3 1.7v-3.5Z" />
      </svg>
    );
  }

  if (kind === "groups") {
    return (
      <svg className="retreat-info-icon retreat-info-icon--groups" viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M3.5 20c.5-4 2.3-6 5.5-6s5 2 5.5 6M14 15c.8-.8 1.7-1.2 2.9-1.2 2.3 0 3.7 1.5 4.1 4.5" />
      </svg>
    );
  }

  return (
    <svg className="retreat-info-icon retreat-info-icon--packing" viewBox="0 0 24 24">
      <path d="M7 8V6a5 5 0 0 1 10 0v2M6 8h12a2 2 0 0 1 2 2v10H4V10a2 2 0 0 1 2-2Z" />
      <path d="M8 12v8M16 12v8M9 8V6a3 3 0 0 1 6 0v2M9 14h6" />
    </svg>
  );
}
