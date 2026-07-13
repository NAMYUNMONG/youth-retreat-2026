import { philippiansPassage } from "../config/retreat";

export function Hero() {
  return (
    <header id="home" className="hero page-section">
      <div className="hero__top">
        <span>미아중앙교회 청년부</span>
        <img
          className="hero__church-logo"
          src="/youth-retreat-2026/images/MIACC_CI_2-transparent.png"
          alt="미아중앙교회"
        />
      </div>
      <div className="sun" aria-hidden="true" />
      <div className="bubble bubble--one" aria-hidden="true" />
      <div className="bubble bubble--two" aria-hidden="true" />
      <div className="bubble bubble--three" aria-hidden="true" />
      <div className="wave wave--one" aria-hidden="true" />
      <div className="wave wave--two" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__badge">2026 청년부 여름수련회</p>
        <h1 className="hero__title" aria-label="염려 OFF, 기도 ON">
          <span className="hero__topic hero__topic--worry">염려</span>
          <span className="hero__topic hero__topic--prayer">기도</span>
          <span className="hero__big-o" aria-hidden="true" />
          <mark className="hero__switch hero__switch--off">FF</mark>
          <span className="hero__toggle hero__toggle--off" aria-hidden="true"><span /></span>
          <mark className="hero__switch hero__switch--on">N</mark>
          <span className="hero__toggle hero__toggle--on" aria-hidden="true"><span /></span>
        </h1>
        <p className="hero__copy">"염려를 멈추고, 기도를 시작하라"</p>
        <div className="hero__scripture" aria-label={philippiansPassage.ariaLabel}>
          <p className="hero__verse">{philippiansPassage.reference}</p>
          {philippiansPassage.verses.map((item) => <p className="hero__scripture-line" key={item.verse}><strong>{item.verse}</strong><span>{item.text}</span></p>)}
        </div>
      </div>
    </header>
  );
}
