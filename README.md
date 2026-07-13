# 2026 청년부 여름수련회 모바일 웹페이지

`염려 Off, 기도 On` 2026 미아중앙교회 청년부 여름수련회를 위한 Vite + React + TypeScript 정적 웹 애플리케이션입니다.

- 공개 페이지: https://namyunmong.github.io/youth-retreat-2026/
- 운영 기간: 2026년 7월 16일–18일
- 주요 환경: 모바일 우선, GitHub Pages

## 주요 기능

- 수련회 소개, 일정, 준비물 체크리스트
- 봉사 프로그램과 공동체 프로그램의 팀별 명단
- DAY 1–3 프로그램과 일정 아코디언
- DAY 1·2 저녁예배 송리스트와 악보 뷰어
- 악보 이전·다음 버튼, 모바일 좌우 스와이프
- DAY 2 설교 본문, 설교 내용, 삶의 적용 아코디언
- DAY 3 아침묵상, 묵상 질문, 기도제목 입력
- 노트와 준비물 체크 상태의 브라우저 자동 저장

## 설치 및 로컬 실행

```bash
npm install
npm run dev
```

기본 Vite 주소로 실행한 경우 접속 경로는 다음과 같습니다.

```text
http://127.0.0.1:5173/youth-retreat-2026/
```

모바일 화면은 Chromium 기반 브라우저의 개발자 도구에서 `Ctrl + Shift + M`으로 기기 툴바를 열고 360px, 390px, 430px 폭을 확인합니다.

## 빌드

```bash
npm run build
```

`tsc --noEmit`으로 타입을 검사한 뒤 Vite가 `dist/`에 정적 배포 파일을 생성합니다. 배포 결과를 로컬에서 확인하려면 다음을 사용합니다.

```bash
npm run preview
```

## 콘텐츠 수정

### 일정, 설교, 송리스트, 악보

[`src/config/retreat.ts`](src/config/retreat.ts)에서 관리합니다.

- `schedule`: DAY 1–3 시간표
- `day1`, `day2`: 설교 본문, 설교 주제, 악보 목록
- `sheets[].title`: 찬양 아코디언에 보이는 송리스트
- `sheets[].imageUrl`: 악보 이미지 경로
- `photos`: 사진 공유 링크

악보 이미지는 `public/sheets/day1/`, `public/sheets/day2/`에 보관합니다. 파일을 추가한 뒤 `sheets` 배열에 곡 제목과 경로를 등록해야 합니다.

### 조편성

[`src/components/RetreatInfo.tsx`](src/components/RetreatInfo.tsx)의 `volunteerTeams`, `communityTeams` 배열을 수정합니다.

```ts
{ name: "1", leader: "리더 이름", members: ["팀원 1", "팀원 2", "팀원 3", "팀원 4", "팀원 5"] }
```

### 설교와 묵상 내용

- `src/components/Day2SermonContent.tsx`: DAY 2 저녁예배 설교와 삶의 적용
- `src/components/Day3MeditationContent.tsx`: DAY 3 아침묵상과 묵상 질문
- `src/components/Hero.tsx`: 홈 화면 상단

## 주요 컴포넌트

- `Accordion.tsx`: 공용 아코디언과 초기 접힘 상태
- `WorshipCard.tsx`: DAY 1·2 저녁예배, 찬양, 설교 메타 정보
- `SheetViewer.tsx`: 악보 순서, 이전·다음, 터치 스와이프
- `NotePad.tsx`: `localStorage` 기반 자동 저장 노트
- `RetreatInfo.tsx`: 수련회 정보, 조편성, 준비물
- `BottomNavigation.tsx`: 하단 고정 네비게이션

## 자동 저장 키

| 항목 | `localStorage` 키 |
| --- | --- |
| 준비물 체크리스트 | `retreat-packing-checklist` |
| DAY 1 말씀 노트 | `day1-sermon-note` |
| DAY 2 간증 노트 | `day2-lecture-note` |
| DAY 2 삶의 적용 | `day2-sermon-note` |
| DAY 3 아침묵상 노트 | `day3-meditation-note` |

## GitHub Pages 배포

`vite.config.ts`에 `base: "/youth-retreat-2026/"`가 설정되어 있습니다. `.github/workflows/deploy.yml`은 `main` 브랜치에 푸시될 때마다 다음 순서로 배포합니다.

1. 의존성 설치
2. TypeScript 검사 및 Vite 빌드
3. `dist/` 아티팩트 업로드
4. GitHub Pages 배포

저장소 이름을 변경하면 `vite.config.ts`의 `base` 값과 README의 공개 URL도 함께 수정해야 합니다.
