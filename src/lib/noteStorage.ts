export const NOTE_STORAGE_KEYS = [
  "day1-sermon-note",
  "day2-meditation-note",
  "day2-lecture-note",
  "day2-sermon-note",
  "day3-meditation-note",
] as const;

export type NoteData = Record<string, string>;

export const NOTE_STORAGE_SYNC_EVENT = "retreat-note-storage-sync";

const canUseStorage = () => typeof window !== "undefined" && "localStorage" in window;

export function readAllNotes(): NoteData {
  if (!canUseStorage()) return {};

  return Object.fromEntries(
    NOTE_STORAGE_KEYS.map((key) => [key, window.localStorage.getItem(key) ?? ""]),
  );
}

export function writeAllNotes(notes: NoteData) {
  if (!canUseStorage()) return;

  NOTE_STORAGE_KEYS.forEach((key) => {
    const value = typeof notes[key] === "string" ? notes[key] : "";
    if (value) window.localStorage.setItem(key, value);
    else window.localStorage.removeItem(key);
  });

  window.dispatchEvent(new CustomEvent(NOTE_STORAGE_SYNC_EVENT));
}
