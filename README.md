# 2026 청년부 여름수련회 모바일 웹페이지

`염려 Off, 기도 On` 여름수련회 안내용 Vite + React + TypeScript 정적 웹페이지입니다.

## 설치 및 실행 방법

```bash
npm install
npm run dev
```

개발 서버가 실행되면 터미널에 표시되는 로컬 주소로 접속합니다. 모바일 확인은 브라우저 개발자 도구에서 360px, 390px, 430px 폭을 확인하면 됩니다.

## 빌드 방법

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 링크와 말씀 내용 수정 방법

예배 링크, 악보 링크, 설교 본문, 설교 주제, 사진공유방 링크는 `src/config/retreat.ts`에서 수정합니다.

```ts
export const retreatConfig = {
  day1: {
    playlistUrl: "찬양 콘티 링크",
    sheetUrl: "악보 링크",
    sermonPassage: "빌립보서 4장 6-7절",
    sermonTopic: "기도로 염려를 맡기는 삶",
  },
  day2: {
    playlistUrl: "찬양 콘티 링크",
    sheetUrl: "악보 링크",
    sermonPassage: "말씀 본문",
    sermonTopic: "설교 주제",
  },
  photos: {
    retreatUrl: "수련회 사진공유방 링크",
    volunteerUrl: "봉사활동 사진공유방 링크",
    programUrl: "기타 프로그램 사진공유방 링크",
  },
};
```

값이 빈 문자열이면 버튼 클릭 시 새 탭을 열지 않고 “링크 준비 중입니다.” 또는 “사진 링크 준비 중입니다.” 안내가 표시됩니다. 설교 본문과 주제가 비어 있으면 화면에는 “추후 업데이트 예정”으로 표시됩니다.

## 콘텐츠 편집 방법

주요 화면 구성은 `src/App.tsx`에서 관리합니다. 반복 UI는 `src/components/`에 분리되어 있습니다.

- `Hero.tsx`: 상단 타이틀 영역
- `RetreatInfo.tsx`: 수련회 기본 정보, 일정표, 조편성, 준비물 체크리스트
- `DaySection.tsx`: 날짜별 섹션 헤더
- `ProgramCard.tsx`: 프로그램 카드
- `WorshipCard.tsx`: 저녁 예배 카드
- `NotePad.tsx`: 자동 저장 노트
- `PhotoShareCard.tsx`: 사진공유방 카드
- `BottomNavigation.tsx`: 하단 고정 메뉴

## 자동 저장 항목

브라우저 `localStorage`에 아래 항목이 저장됩니다.

- 준비물 체크리스트: `retreat-packing-checklist`
- 7월 16일 말씀 노트: `day1-sermon-note`
- 7월 17일 강의 노트: `day2-lecture-note`
- 7월 17일 말씀 노트: `day2-sermon-note`
- 7월 18일 아침묵상 노트: `day3-meditation-note`

## 정적 배포 권장 방식

이 프로젝트는 로그인, 서버, DB가 없는 정적 웹페이지입니다. `npm run build` 후 생성되는 `dist/` 폴더를 GitHub Pages, Netlify, Vercel, Cloudflare Pages 같은 정적 호스팅에 배포하는 방식을 권장합니다.

이 저장소는 GitHub Pages 배포를 위해 `vite.config.ts`에 `base: "/youth-retreat-2026/"`가 설정되어 있고, `.github/workflows/deploy.yml` 워크플로가 `main` 브랜치 푸시마다 `dist/`를 배포합니다.

저장소 이름을 바꾸면 `vite.config.ts`의 `base` 값도 새 저장소명에 맞게 수정해야 합니다.
