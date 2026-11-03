export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          DIGITAL INNOVATION
        </p>
        <h1 className="hero-title" id="hero-title">Hi, I’m Saw.</h1>
        <div className="hero-statement">
          <p>Connecting ideas.</p>
          <p className="text-orange">Creating impact.</p>
        </div>
        <div className="orange-rule hero-rule" aria-hidden="true" />
        <p className="hero-description">
          I connect business challenges with practical digital solutions. Through research,
          data and technology, I create meaningful digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">→</span></a>
          <a className="button button-outline" href="#about">About me <span aria-hidden="true">→</span></a>
        </div>
        <p className="hero-keywords">BUSINESS <span>·</span> DATA <span>·</span> TECHNOLOGY</p>
      </div>
    </section>
  );
}
