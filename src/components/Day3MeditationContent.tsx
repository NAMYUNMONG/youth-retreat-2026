import { Accordion } from "./Accordion";
import { NotePad } from "./NotePad";

type MeditationItem = {
  title: string;
  text: string;
  scripture?: string;
};

const discernmentItems: MeditationItem[] = [
  {
    title: "자신의 뜻을 내려놓아라",
    text: "처음부터 내 생각과 원하는 결론을 붙들기보다, 하나님의 뜻을 따를 준비가 된 마음을 구합니다.",
  },
  {
    title: "감정을 믿지 마라",
    text: "느낌이나 순간적인 인상만으로 하나님의 뜻을 판단하지 않습니다.",
  },
  {
    title: "성령과 말씀을 의지하라",
    text: "하나님의 뜻은 말씀과 성령의 인도하심 안에서 분별되어야 합니다. 성령께서 인도하실 때에는 하나님의 말씀과 어긋나지 않습니다.",
  },
  {
    title: "상황을 고려하라",
    text: "주변 상황도 말씀과 기도 안에서 살피며, 하나님께서 열어가시는 길을 분별합니다.",
  },
  {
    title: "하나님의 뜻이 무엇인지 알려달라고 기도하라",
    text: "하나님의 뜻을 정확히 분별할 수 있도록 간절히 기도합니다. 결단 후에도 기도 가운데 평안이 지속된다면 하나님의 뜻으로 확신할 수 있습니다.",
  },
];

const prayerItems: MeditationItem[] = [
  {
    title: "예수님을 의지하라",
    text: "기도의 근거는 나의 의로움이나 열심이 아니라, 예수 그리스도의 공로와 중재입니다.",
    scripture: "요한복음 14:13-14 · 요한복음 15:16",
  },
  {
    title: "죄를 멀리하라",
    text: "알고 있는 죄를 품은 채 기도하지 않고, 하나님 앞에서 마음과 삶을 정직하게 돌이킵니다.",
    scripture: "시편 66:18",
  },
  {
    title: "믿음을 실천하라",
    text: "하나님께 나아가는 사람은 하나님이 살아계시며, 그분을 찾는 자들에게 상 주시는 분임을 믿어야 합니다.",
    scripture: "히브리서 11:6",
  },
  {
    title: "그분의 뜻에 따라서 간구하라",
    text: "기도의 동기를 점검하며, 이기적인 목적이 아니라 하나님의 뜻에 합한 기도를 드립니다.",
    scripture: "요한일서 5:14",
  },
  {
    title: "인내하며 기도하라",
    text: "농부가 추수의 때를 기다리듯, 기도하는 사람은 하나님의 때와 방법을 신뢰하며 응답을 기다립니다.",
    scripture: "야고보서 5:7",
  },
];

const questions = [
  "내가 요즘 가장 많이 염려하고 있는 것은 무엇인가요?",
  "그 문제 앞에서 하나님의 뜻보다 내 뜻을 더 붙들고 있지는 않았나요?",
  "말씀과 기도 안에서 다시 확인해야 할 하나님의 약속은 무엇인가요?",
  "오늘 하나님께 맡기기로 결단할 기도제목은 무엇인가요?",
  "수련회를 마치고 일상으로 돌아가서 계속 붙들 기도의 습관은 무엇인가요?",
];

function MeditationList({ items }: { items: MeditationItem[] }) {
  return (
    <ol className="meditation-list">
      {items.map((item) => (
        <li className="meditation-item" key={item.title}>
          <div className="meditation-item__header">
            <strong className="meditation-item__title">{item.title}</strong>
            {item.scripture && <span className="meditation-scripture">{item.scripture.split(" · ").map((verse) => <span key={verse}>{verse}</span>)}</span>}
          </div>
          <p className="meditation-item__text">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Day3MeditationContent() {
  return (
    <div className="meditation-content">
      <section className="meditation-intro">
        <h4>5만 번 응답받은 조지 뮬러의 기도</h4>
        <strong>염려를 내려놓고, 하나님의 뜻을 분별하며, 인내로 기도하는 아침</strong>
        <p>
          조지 뮬러는 자신의 필요와 사역의 문제를 사람에게 먼저 구하지 않고 하나님께 기도로 올려드렸던 사람입니다. 수련회의 마지막 아침, 우리도 고민과 걱정과 두려움을 하나님의 뜻 앞에 내려놓고 기도의 자리로 나아갑니다.
        </p>
      </section>

      <div className="meditation-accordions">
        <Accordion title="하나님의 뜻을 분별하는 법">
          <section className="meditation-section">
            <MeditationList items={discernmentItems} />
            <p className="meditation-application">오늘 내가 붙들고 있는 걱정이나 선택의 문제는 무엇인가요? 그 문제 앞에서 내가 내려놓아야 할 내 뜻은 무엇인가요?</p>
          </section>
        </Accordion>

        <Accordion title="응답받는 강력한 기도 방법">
          <section className="meditation-section">
            <MeditationList items={prayerItems} />
            <p className="meditation-application">내가 지금 인내하며 계속 기도해야 할 제목은 무엇인가요? 그 기도 안에서 하나님께 맡겨야 할 것은 무엇인가요?</p>
          </section>
        </Accordion>

        <Accordion title="오늘의 묵상 질문">
          <section className="meditation-questions" aria-label="오늘의 묵상 질문">
            {questions.map((question, index) => (
              <div className="meditation-question-card" key={question}>
                <span aria-hidden="true">{index + 1}</span>
                <p>{question}</p>
              </div>
            ))}
            <NotePad
              storageKey="day3-meditation-note"
              label="DAY 3 아침묵상 적용 노트"
              placeholder="오늘 아침 하나님께서 주신 마음, 내려놓아야 할 염려, 계속 붙들 기도제목을 적어보세요."
            />
          </section>
        </Accordion>
      </div>
    </div>
  );
}

