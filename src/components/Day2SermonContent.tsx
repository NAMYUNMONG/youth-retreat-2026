type SermonPoint = { title: string; text: string; image?: string; scripture?: string };
type SermonSection = { title: string; text: string; points: SermonPoint[]; application: string };

const sections: SermonSection[] = [
  { title: "1. 왜 우리의 삶에는 염려가 많은가?", text: "우리의 삶에는 염려가 끊이지 않습니다. 외부의 영적 공격, 우리 안의 악한 본성, 그리고 육신의 한계가 우리를 계속 불안하게 만듭니다.", points: [
    { title: "공중 권세 잡은 자", text: "세상의 흐름과 영적 공격은 우리의 마음을 흔들고 염려하게 만듭니다.", image: "바닷물" },
    { title: "악한 본성", text: "우리 안의 죄성과 자기중심성은 하나님보다 상황을 더 크게 보게 만듭니다.", image: "잔디밭" },
    { title: "육신의 한계", text: "인간은 연약하고 유한한 존재이기에 미래와 죽음, 한계 앞에서 염려할 수밖에 없습니다.", image: "70이요 강건하면 80" },
  ], application: "나는 요즘 무엇 때문에 가장 많이 염려하고 있나요? 그 염려의 뿌리는 어디에 있나요?" },
  { title: "2. 평강의 본질은 무엇인가? 평강은 어떻게 임하는가?", text: "성경이 말하는 평강은 단순히 문제가 없는 상태가 아닙니다. 하나님께서 주시는 샬롬이며, 하나님과의 관계 안에서 주어지는 온전함입니다.", points: [
    { title: "평강은 무엇인가?", text: "평강은 샬롬입니다. 전쟁이 없는 평화만이 아니라, 번영과 안녕과 온전함이 담긴 하나님의 선물입니다." },
    { title: "평강은 어디에서 오는가?", text: "평강은 내가 만들어내는 감정이 아니라 하나님께서 주시는 것입니다.", scripture: "빌립보서 1:2" },
    { title: "평강은 어떻게 임하는가?", text: "평강은 하나님과의 관계에서 주어집니다. 나의 뜻이 아니라 하나님의 뜻이 이루어질 때 참된 평강이 임합니다.", scripture: "사무엘상 16:5" },
  ], application: "내가 원하는 일이 이루어지는 것과 하나님의 뜻이 이루어지는 것 중, 나는 무엇을 더 평강의 조건으로 삼고 있나요?" },
  { title: "3. 무엇을 기도해야 하는가?", text: "평강을 누리기 위해서는 기도해야 합니다. 그러나 기도는 단순히 내가 원하는 것을 얻기 위한 수단이 아니라, 하나님의 뜻을 구하고 그 뜻에 나를 맞추어가는 자리입니다.", points: [
    { title: "하나님의 뜻이 이루어지기를 기도하라", text: "먼저 하나님의 나라와 의를 구하는 기도가 필요합니다.", scripture: "마태복음 6:33" },
    { title: "하나님의 뜻은 말씀을 통해 알 수 있다", text: "기록된 하나님의 말씀인 성경을 통해 하나님의 뜻을 분별합니다.", scripture: "데살로니가전서 5:16-18 · 데살로니가전서 4:3" },
    { title: "신앙 양심이 알려주는 대로 행하라", text: "믿음으로 행하지 않는 모든 것은 죄입니다. 말씀과 기도 안에서 양심이 깨닫게 하는 방향을 따라야 합니다.", scripture: "로마서 14:23" },
  ], application: "지금 내가 기도해야 할 것은 내 뜻의 성취인가요, 하나님의 뜻의 성취인가요?" },
];

const questions = ["내 마음을 가장 자주 흔드는 염려는 무엇인가요?", "그 염려를 지금까지 나는 어떤 방식으로 해결하려고 했나요?", "하나님께 아뢰지 못하고 혼자 붙들고 있던 문제는 무엇인가요?", "내가 구해야 할 하나님의 뜻은 무엇인가요?", "오늘 밤 하나님께 맡기기로 결단할 기도제목은 무엇인가요?"];

export function Day2SermonContent() {
  return <div className="sermon-content">
    <section className="sermon-intro"><p>빌립보서 4장 6-7절</p><h4>염려 OFF, 기도 ON</h4><div className="sermon-flow" aria-label="염려에서 기도를 거쳐 평강으로 이어지는 흐름"><span className="sermon-flow__chip">염려</span><span className="sermon-flow__arrow" aria-hidden="true">→</span><span className="sermon-flow__chip">기도</span><span className="sermon-flow__arrow" aria-hidden="true">→</span><span className="sermon-flow__chip">평강</span></div><strong>염려가 많은데, 어떻게 평강을 누릴 수 있을까?</strong><p>염려와 평강 사이에는 기도가 있습니다. 염려를 붙들고 사는 것이 아니라, 모든 일을 하나님께 아뢰는 자리로 나아갈 때 하나님의 평강이 우리의 마음과 생각을 지켜주십니다.</p></section>
    {sections.map((section) => <section className="sermon-section" key={section.title}><h4 className="sermon-section__title">{section.title}</h4><p className="sermon-section__intro">{section.text}</p><ol className="sermon-point-list">{section.points.map((point) => <li className="sermon-point" key={point.title}><strong className="sermon-point__title">{point.title}</strong><p className="sermon-point__text">{point.text}</p>{point.image && <span className="sermon-image-metaphor">비유 · {point.image}</span>}{point.scripture && <span className="sermon-scripture">{point.scripture}</span>}</li>)}</ol><p className="sermon-application">{section.application}</p></section>)}
    <section className="sermon-summary"><h4>오늘 말씀 정리</h4><p>염려를 끄는 방법은 문제를 잊는 것이 아니라, 모든 일을 하나님께 아뢰는 기도의 자리로 나아가는 것입니다. 그때 하나님께서 주시는 평강이 우리의 마음과 생각을 지켜주십니다.</p><div>{["염려 OFF", "기도 ON", "하나님의 평강", "하나님의 뜻", "말씀과 양심"].map((item) => <span key={item}>{item}</span>)}</div></section>
    <section className="sermon-questions" aria-labelledby="sermon-questions-title"><h4 id="sermon-questions-title" className="sermon-section__title">설교를 들으며 생각해볼 질문</h4>{questions.map((question, index) => <div key={question}><span>{index + 1}</span><p>{question}</p></div>)}</section>
  </div>;
}

