import { useCallback, useEffect, useState } from "react";
import { NOTE_STORAGE_SYNC_EVENT } from "../lib/noteStorage";

type NotePadProps = {
  storageKey: string;
  placeholder: string;
  label: string;
};

const canUseStorage = () => typeof window !== "undefined" && "localStorage" in window;

export function NotePad({ storageKey, placeholder, label }: NotePadProps) {
  const [value, setValue] = useState(() => {
    if (!canUseStorage()) return "";
    return window.localStorage.getItem(storageKey) ?? "";
  });
  const [status, setStatus] = useState("자동 저장 대기 중");

  useEffect(() => {
    if (!canUseStorage()) return;
    const loadSaved = () => {
      setValue(window.localStorage.getItem(storageKey) ?? "");
      setStatus("저장된 노트를 불러왔습니다.");
    };
    window.addEventListener(NOTE_STORAGE_SYNC_EVENT, loadSaved);
    return () => window.removeEventListener(NOTE_STORAGE_SYNC_EVENT, loadSaved);
  }, [storageKey]);

  useEffect(() => {
    if (!canUseStorage()) return;
    window.localStorage.setItem(storageKey, value);
    if (value) setStatus("자동 저장되었습니다.");
  }, [storageKey, value]);

  const save = useCallback(() => {
    if (!canUseStorage()) return;
    window.localStorage.setItem(storageKey, value);
    setStatus("저장되었습니다.");
  }, [storageKey, value]);

  const clear = useCallback(() => {
    setValue("");
    if (canUseStorage()) window.localStorage.removeItem(storageKey);
    setStatus("노트를 지웠습니다.");
  }, [storageKey]);

  return (
    <div className="note-pad">
      <label className="sr-only" htmlFor={storageKey}>
        {label}
      </label>
      <textarea
        id={storageKey}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="note-pad__footer">
        <span>{status}</span>
        <div className="note-pad__actions">
          <button type="button" className="button button--small" onClick={save}>
            저장하기
          </button>
          <button type="button" className="button button--small button--ghost" onClick={clear}>
            지우기
          </button>
        </div>
      </div>
    </div>
  );
}
