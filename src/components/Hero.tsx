export function Hero() {
  return (
    <header id="home" className="hero page-section">
      <div className="hero__top">
        <span>2026 YOUTH SUMMER RETREAT</span>
        <a href="#photos" className="top-photo-link" aria-label="사진공유 섹션으로 이동">
          사진공유
        </a>
      </div>
      <div className="sun" aria-hidden="true" />
      <div className="bubble bubble--one" aria-hidden="true" />
      <div className="bubble bubble--two" aria-hidden="true" />
      <div className="bubble bubble--three" aria-hidden="true" />
      <div className="wave wave--one" aria-hidden="true" />
      <div className="wave wave--two" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__badge">2026 여름수련회</p>
        <h1>
          염려 <mark>Off</mark>,<br />
          기도 <mark>On</mark>
        </h1>
        <p className="hero__copy">고민, 걱정, 두려움이 있을 때 기도의 자리로 나아가라!</p>
        <p className="hero__verse">빌립보서 4장 6–7절</p>
      </div>
    </header>
  );
}
