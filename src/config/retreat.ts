export const philippiansPassage = {
  reference: "빌립보서 4장 6–7절",
  ariaLabel: "빌립보서 4장 6절부터 7절",
  verses: [
    { verse: "6절,", text: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라" },
    { verse: "7절,", text: "그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라" },
  ],
} as const;

export const jeremiahPassage = {
  reference: "예레미야 33장 2–3절",
  ariaLabel: "예레미야 33장 2절부터 3절",
  verses: [
    { verse: "2절,", text: "일을 행하시는 여호와, 그것을 만들며 성취하시는 여호와, 그의 이름을 여호와라 하는 이가 이와 같이 이르시도다" },
    { verse: "3절,", text: "너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 은밀한 일을 네게 보이리라" },
  ],
} as const;

export const jeremiahOpeningPassage = {
  reference: "예레미야 29장 11–13절",
  ariaLabel: "예레미야 29장 11절부터 13절",
  verses: [
    { verse: "11절,", text: "여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라" },
    { verse: "12절,", text: "너희가 내게 부르짖으며 내게 와서 기도하면 내가 너희들의 기도를 들을 것이요" },
    { verse: "13절,", text: "너희가 온 마음으로 나를 구하면 나를 찾을 것이요 나를 만나리라" },
  ],
} as const;

export const retreatConfig = {
  schedule: {
    day1: [
      { time: "10:00 - 13:00", title: "무의교회로 출발 · 이동 중 점심식사" },
      { time: "13:00 - 13:30", title: "개회예배" },
      { time: "13:30 - 15:00", title: "아이스브레이킹" },
      { time: "15:00 - 16:30", title: "어르신 가정 방문 봉사" },
      { time: "16:30 - 18:00", title: "신앙 프로그램 (손바닥 기도)" },
      { time: "18:00 - 20:00", title: "저녁식사" },
      { time: "20:00 - 22:00", title: "저녁예배" },
      { time: "22:00 - 23:00", title: "야식 및 취침" },
    ],
    day2: [
      { time: "08:00 - 10:00", title: "아침묵상 · 아침식사" },
      { time: "10:00 - 12:00", title: "간증 시간" },
      { time: "12:00 - 14:00", title: "점심식사" },
      { time: "14:00 - 16:00", title: "공동체 게임" },
      { time: "16:00 - 18:00", title: "팀별 나눔" },
      { time: "18:00 - 20:00", title: "저녁식사" },
      { time: "20:00 - 22:00", title: "저녁예배" },
      { time: "22:00 - 23:00", title: "야식 및 취침" },
    ],
    day3: [
      { time: "08:00 - 10:00", title: "아침묵상 · 아침식사" },
      { time: "10:00 - 11:00", title: "폐회예배 · 손바닥 기도" },
      { time: "11:00 - 12:00", title: "뒷정리" },
      { time: "12:00 - 13:00", title: "점심식사" },
      { time: "13:00 - 15:00", title: "교회로 복귀" },
    ],
  },
  day1: {
    sheetUrl: "",
    sermonPassage: jeremiahPassage.reference,
    sermonTopic: "기도, 문제 해결의 시작",
    sheets: [
      {
        title: "주를 바라보며",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_01.PNG",
      },
      {
        title: "감사함으로",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_02.PNG",
      },
      {
        title: "주 안에서 기뻐해",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_03.PNG",
      },
      {
        title: "믿음 따라",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_04.PNG",
      },
      {
        title: "불을 내려주소서",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_05.PNG",
      },
      {
        title: "주님의 마음 있는 곳",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_06.PNG",
      },
      {
        title: "시선",
        imageUrl: "/youth-retreat-2026/sheets/day1/260716_07.PNG",
      },
    ],
  },
  day2: {
    sheetUrl: "",
    sermonPassage: philippiansPassage.reference,
    sermonTopic: "염려 OFF, 기도 ON",
    sheets: [
      {
        title: "부르신 곳에서",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_01.PNG",
      },
      {
        title: "태산을 넘어 험곡에 가도",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_02.PNG",
      },
      {
        title: "멈출 수 없네",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_03.PNG",
      },
      {
        title: "우리 주 안에서 노래하며",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_04.PNG",
      },
      {
        title: "WAKE",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_05.PNG",
      },
      {
        title: "그가 내 안에",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_06.PNG",
      },
      {
        title: "주가 보이신 생명의 길",
        imageUrl: "/youth-retreat-2026/sheets/day2/260717_07.PNG",
      },
    ],
  },
  photos: {
    retreatUrl: "",
    volunteerUrl: "",
    programUrl: "",
  },
};
