import { FormEvent, useEffect, useState } from "react";
import { backupApi, Credentials } from "../lib/backupApi";
import { readAllNotes, writeAllNotes } from "../lib/noteStorage";

const SESSION_KEY = "retreat-online-user";

function formatBackupTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const period = date.getHours() < 12 ? "AM" : "PM";
  const hour = String(date.getHours() % 12 || 12).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return { date: `${year}.${month}.${day}`, time: `${period} ${hour}:${minute}` };
}

function readSession(): Credentials | null {
  try {
    return JSON.parse(window.localStorage.getItem(SESSION_KEY) ?? "null") as Credentials | null;
  } catch {
    return null;
  }
}

export function OnlineBackup({ onMessage }: { onMessage: (message: string) => void }) {
  const [credentials, setCredentials] = useState<Credentials>(() => readSession() ?? { name: "", pin: "" });
  const [user, setUser] = useState<Credentials | null>(() => readSession());
  const [showLogin, setShowLogin] = useState(() => !readSession());
  const [pendingRegistration, setPendingRegistration] = useState(false);
  const [busy, setBusy] = useState(false);
  const [updatedAt, setUpdatedAt] = useState("");
  const backupTime = formatBackupTime(updatedAt);

  useEffect(() => {
    if (!user) return;
    void loadOnline(user, false);
  }, []);

  const rememberUser = (nextUser: Credentials) => {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    setShowLogin(false);
    window.location.hash = "#/";
  };

  const loadOnline = async (target: Credentials, confirmOverwrite: boolean) => {
    if (confirmOverwrite && !window.confirm("온라인 내용으로 현재 기기의 노트를 변경할까요?")) return;
    setBusy(true);
    try {
      const result = await backupApi.download(target);
      writeAllNotes(result.notes);
      setUpdatedAt(result.updatedAt);
      onMessage("온라인 내용을 복원했습니다.");
    } catch (error) {
      onMessage(error instanceof Error ? error.message : "복원에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  };

  const submitLogin = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      const clean = { name: credentials.name.trim(), pin: credentials.pin.trim() };
      const result = await backupApi.start(clean);
      if (!result.exists) {
        setCredentials(clean);
        setPendingRegistration(true);
        return;
      }

      rememberUser(clean);
      if (result.notes) writeAllNotes(result.notes);
      setUpdatedAt(result.updatedAt ?? "");
      onMessage(`${clean.name}님, 저장된 내용을 불러왔습니다.`);
    } catch (error) {
      onMessage(error instanceof Error ? error.message : "로그인에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  };

  const register = async () => {
    setBusy(true);
    try {
      const result = await backupApi.register(credentials, readAllNotes());
      rememberUser(credentials);
      setPendingRegistration(false);
      setUpdatedAt(result.updatedAt);
      onMessage("새 사용자로 등록했습니다.");
    } catch (error) {
      onMessage(error instanceof Error ? error.message : "등록에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  };

  const upload = async () => {
    if (!user) return;
    setBusy(true);
    try {
      const result = await backupApi.upload(user, readAllNotes());
      setUpdatedAt(result.updatedAt);
      onMessage("현재 노트를 온라인에 백업했습니다.");
    } catch (error) {
      onMessage(error instanceof Error ? error.message : "백업에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  };

  const logout = () => {
    window.localStorage.removeItem(SESSION_KEY);
    setUser(null);
    setCredentials({ name: "", pin: "" });
    setShowLogin(true);
    onMessage("사용자 변경 화면으로 이동했습니다. 기기의 노트는 유지됩니다.");
  };

  return (
    <>
      {user && (
        <aside className="online-backup" aria-label="온라인 백업">
          <strong className="online-backup__user">{user.name}</strong>
          {backupApi.isMock ? (
            <span className="online-backup__timestamp">로컬 테스트</span>
          ) : backupTime ? (
            <span className="online-backup__timestamp">
              <span>마지막 백업</span>
              <time dateTime={updatedAt}>
                <b>{backupTime.date}</b>
                <small>{backupTime.time}</small>
              </time>
            </span>
          ) : (
            <span className="online-backup__timestamp">온라인 연결</span>
          )}
          <button type="button" onClick={upload} disabled={busy}>백업</button>
          <button type="button" onClick={() => void loadOnline(user, true)} disabled={busy}>복원</button>
          <button type="button" className="online-backup__logout" onClick={logout} disabled={busy}>사용자 변경</button>
        </aside>
      )}

      {showLogin && (
        <div className="account-gate" role="dialog" aria-modal="true" aria-labelledby="account-gate-title">
          <form className="account-gate__card" onSubmit={submitLogin}>
            <span id="account-gate-title">2026 청년부 수련회</span>
            <p>이름과 4자리 비밀번호로 작성 내용을 저장하고 불러옵니다.<br />타인에게는 보이지 않습니다.</p>
            {backupApi.isMock && <p className="account-gate__mock">현재는 이 브라우저에만 저장되는 로컬 테스트 모드입니다.</p>}
            <label>
              이름
              <input value={credentials.name} onChange={(event) => setCredentials({ ...credentials, name: event.target.value })} autoComplete="name" maxLength={30} required />
            </label>
            <label>
              4자리 비밀번호
              <input value={credentials.pin} onChange={(event) => setCredentials({ ...credentials, pin: event.target.value.replace(/\D/g, "").slice(0, 4) })} type="password" inputMode="numeric" pattern="\d{4}" autoComplete="current-password" required />
            </label>
            <button type="submit" className="account-gate__submit" disabled={busy}>{busy ? "확인 중…" : "시작하기"}</button>
          </form>
        </div>
      )}

      {pendingRegistration && (
        <div className="account-gate account-gate--confirm" role="alertdialog" aria-modal="true">
          <div className="account-gate__card">
            <h2>새 사용자 등록</h2>
            <p><strong>{credentials.name}</strong>으로 저장된 정보가 없습니다. 새 사용자로 등록할까요?</p>
            <div className="account-gate__confirm-actions">
              <button type="button" className="account-gate__submit" onClick={() => void register()} disabled={busy}>등록하기</button>
              <button type="button" onClick={() => setPendingRegistration(false)} disabled={busy}>다시 입력</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
