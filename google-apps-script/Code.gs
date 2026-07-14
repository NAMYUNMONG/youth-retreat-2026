const USERS_SHEET = "users";
const SECRET_PROPERTY = "BACKUP_SECRET";

function setupBackupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(USERS_SHEET);
  if (!sheet) sheet = spreadsheet.insertSheet(USERS_SHEET);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["userKey", "name", "data", "createdAt", "updatedAt"]);
    sheet.setFrozenRows(1);
  }

  const properties = PropertiesService.getScriptProperties();
  if (!properties.getProperty(SECRET_PROPERTY)) {
    properties.setProperty(SECRET_PROPERTY, Utilities.getUuid() + Utilities.getUuid());
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: "youth-retreat-note-backup" });
}

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const request = JSON.parse(event.postData.contents || "{}");
    const credentials = validateCredentials(request.name, request.pin);
    const sheet = getUsersSheet();
    const userKey = createUserKey(credentials.name, credentials.pin);
    const row = findUserRow(sheet, userKey);

    if (request.action === "start") {
      if (!row) return jsonResponse({ ok: true, exists: false });
      const account = readAccount(sheet, row);
      return jsonResponse({ ok: true, exists: true, notes: account.notes, updatedAt: account.updatedAt });
    }

    if (request.action === "register") {
      if (row) return jsonResponse({ ok: false, message: "이미 등록된 사용자입니다." });
      const now = new Date().toISOString();
      const notes = sanitizeNotes(request.data);
      sheet.appendRow([userKey, credentials.name, JSON.stringify(notes), now, now]);
      return jsonResponse({ ok: true, notes: notes, updatedAt: now });
    }

    if (!row) return jsonResponse({ ok: false, message: "사용자 정보를 찾을 수 없습니다." });

    if (request.action === "upload") {
      const now = new Date().toISOString();
      const notes = sanitizeNotes(request.data);
      sheet.getRange(row, 3).setValue(JSON.stringify(notes));
      sheet.getRange(row, 5).setValue(now);
      return jsonResponse({ ok: true, notes: notes, updatedAt: now });
    }

    if (request.action === "download") {
      const account = readAccount(sheet, row);
      return jsonResponse({ ok: true, notes: account.notes, updatedAt: account.updatedAt });
    }

    return jsonResponse({ ok: false, message: "알 수 없는 요청입니다." });
  } catch (error) {
    return jsonResponse({ ok: false, message: error.message || "요청 처리에 실패했습니다." });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function getUsersSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SHEET);
  if (!sheet) throw new Error("setupBackupSheet를 먼저 실행해 주세요.");
  return sheet;
}

function validateCredentials(name, pin) {
  const cleanName = String(name || "").trim();
  const cleanPin = String(pin || "").trim();
  if (!cleanName) throw new Error("이름을 입력해 주세요.");
  if (!/^\d{4}$/.test(cleanPin)) throw new Error("비밀번호는 숫자 4자리여야 합니다.");
  return { name: cleanName, pin: cleanPin };
}

function createUserKey(name, pin) {
  const secret = PropertiesService.getScriptProperties().getProperty(SECRET_PROPERTY);
  if (!secret) throw new Error("setupBackupSheet를 먼저 실행해 주세요.");
  const signature = Utilities.computeHmacSha256Signature(name + "\n" + pin, secret);
  return Utilities.base64EncodeWebSafe(signature);
}

function findUserRow(sheet, userKey) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;
  const match = sheet.getRange(2, 1, lastRow - 1, 1).createTextFinder(userKey).matchEntireCell(true).findNext();
  return match ? match.getRow() : 0;
}

function readAccount(sheet, row) {
  const values = sheet.getRange(row, 1, 1, 5).getValues()[0];
  let notes = {};
  try { notes = JSON.parse(values[2] || "{}"); } catch (error) { notes = {}; }
  return { notes: sanitizeNotes(notes), updatedAt: String(values[4] || "") };
}

function sanitizeNotes(data) {
  const allowedKeys = [
    "day1-sermon-note",
    "day2-meditation-note",
    "day2-lecture-note",
    "day2-sermon-note",
    "day3-meditation-note",
  ];
  const source = data && typeof data === "object" ? data : {};
  return allowedKeys.reduce(function (notes, key) {
    notes[key] = String(source[key] || "").slice(0, 20000);
    return notes;
  }, {});
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
