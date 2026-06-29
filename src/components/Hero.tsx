export function Hero() {
  return (
    <header id="home" className="hero page-section">
      <div className="hero__top">
        <span>미아중앙감리교회 청년부</span>
      </div>
      <div className="sun" aria-hidden="true" />
      <div className="bubble bubble--one" aria-hidden="true" />
      <div className="bubble bubble--two" aria-hidden="true" />
      <div className="bubble bubble--three" aria-hidden="true" />
      <div className="wave wave--one" aria-hidden="true" />
      <div className="wave wave--two" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__badge">2026 청년부 여름수련회</p>
        <h1 className="hero__title">
          <span className="hero__topic hero__topic--worry">염려</span>
          <span className="hero__topic hero__topic--prayer">기도</span>
          <span className="hero__big-o" aria-hidden="true">
            O
          </span>
          <mark className="hero__switch hero__switch--off">FF,</mark>
          <mark className="hero__switch hero__switch--on">N</mark>
        </h1>
        <p className="hero__copy">염려를 멈추고, 기도를 시작하라</p>
        <div className="hero__scripture" aria-label="빌립보서 4장 6절부터 7절">
          <p className="hero__verse">빌립보서 4장 6–7절</p>
          <p className="hero__scripture-line">
            <strong>6절,</strong>
            <span>
              아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께
              아뢰라
            </span>
          </p>
          <p className="hero__scripture-line">
            <strong>7절,</strong>
            <span>
              그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을
              지키시리라
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
