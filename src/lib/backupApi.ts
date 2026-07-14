import { NoteData } from "./noteStorage";

export type Credentials = { name: string; pin: string };

type StartResult = {
  exists: boolean;
  notes?: NoteData;
  updatedAt?: string;
};

type BackupResult = {
  notes: NoteData;
  updatedAt: string;
};

type MockAccount = Credentials & BackupResult;

const API_URL = import.meta.env.VITE_BACKUP_API_URL?.trim();
const MOCK_STORAGE_KEY = "retreat-online-backup-mock";

function normalize(credentials: Credentials): Credentials {
  return { name: credentials.name.trim(), pin: credentials.pin.trim() };
}

function validate(credentials: Credentials) {
  if (!credentials.name) throw new Error("이름을 입력해 주세요.");
  if (!/^\d{4}$/.test(credentials.pin)) throw new Error("비밀번호는 숫자 4자리로 입력해 주세요.");
}

function readMockAccounts(): MockAccount[] {
  try {
    return JSON.parse(window.localStorage.getItem(MOCK_STORAGE_KEY) ?? "[]") as MockAccount[];
  } catch {
    return [];
  }
}

function writeMockAccounts(accounts: MockAccount[]) {
  window.localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(accounts));
}

async function request<T>(action: string, credentials: Credentials, data?: NoteData): Promise<T> {
  const clean = normalize(credentials);
  validate(clean);

  if (!API_URL) return mockRequest<T>(action, clean, data);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...clean, data }),
  });

  if (!response.ok) throw new Error("온라인 저장소에 연결하지 못했습니다.");
  const result = await response.json();
  if (!result.ok) throw new Error(result.message ?? "요청을 처리하지 못했습니다.");
  return result as T;
}

async function mockRequest<T>(action: string, credentials: Credentials, data?: NoteData): Promise<T> {
  await new Promise((resolve) => window.setTimeout(resolve, 250));
  const accounts = readMockAccounts();
  const index = accounts.findIndex((account) => account.name === credentials.name && account.pin === credentials.pin);

  if (action === "start") {
    const account = accounts[index];
    return ({ exists: Boolean(account), notes: account?.notes, updatedAt: account?.updatedAt } as T);
  }

  if (action === "register") {
    if (index >= 0) throw new Error("이미 등록된 사용자입니다.");
    const updatedAt = new Date().toISOString();
    accounts.push({ ...credentials, notes: data ?? {}, updatedAt });
    writeMockAccounts(accounts);
    return ({ notes: data ?? {}, updatedAt } as T);
  }

  if (index < 0) throw new Error("사용자 정보를 찾을 수 없습니다.");

  if (action === "upload") {
    accounts[index] = { ...accounts[index], notes: data ?? {}, updatedAt: new Date().toISOString() };
    writeMockAccounts(accounts);
  }

  return ({ notes: accounts[index].notes, updatedAt: accounts[index].updatedAt } as T);
}

export const backupApi = {
  isMock: !API_URL,
  start: (credentials: Credentials) => request<StartResult>("start", credentials),
  register: (credentials: Credentials, notes: NoteData) => request<BackupResult>("register", credentials, notes),
  upload: (credentials: Credentials, notes: NoteData) => request<BackupResult>("upload", credentials, notes),
  download: (credentials: Credentials) => request<BackupResult>("download", credentials),
};
