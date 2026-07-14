# Google Sheets 온라인 백업 연결

## 로컬 테스트

`.env` 파일이 없거나 `VITE_BACKUP_API_URL`이 비어 있으면 브라우저 `localStorage`를 서버처럼 사용합니다. Google 설정 없이 등록, 백업, 불러오기, 로그아웃 흐름을 테스트할 수 있습니다.

## Google Apps Script 연결

1. 테스트용 Google Spreadsheet를 생성합니다.
2. `확장 프로그램 > Apps Script`를 엽니다.
3. `Code.gs`의 내용을 Apps Script 편집기에 붙여 넣고 저장합니다.
4. 편집기 상단에서 `setupBackupSheet`를 선택하고 한 번 실행합니다.
5. Google 권한 요청을 승인합니다.
6. `배포 > 새 배포 > 웹 앱`을 선택합니다.
7. `다음 사용자 자격으로 실행`은 관리자 계정, `액세스 권한`은 모든 사용자로 설정합니다.
8. `/exec`로 끝나는 웹 앱 URL을 복사합니다.
9. 프로젝트 루트에 `.env.local`을 만들고 아래와 같이 설정합니다.

```env
VITE_BACKUP_API_URL=https://script.google.com/macros/s/배포_ID/exec
```

10. Vite 개발 서버를 다시 시작합니다.

Apps Script 코드를 변경한 후에는 `배포 관리`에서 새 버전으로 배포해야 실제 웹 앱에 반영됩니다.
