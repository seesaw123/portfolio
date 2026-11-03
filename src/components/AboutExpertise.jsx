/** Mirrors the CURRENT Figma section. Previously deleted skill lists are intentionally omitted. */
export default function AboutExpertise() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow section-eyebrow">02 / ABOUT &amp; EXPERTISE</p>
        <div className="about-statement" id="skills">
          <h2 id="about-title">
            Creating technology that makes learning clearer<br className="about-desktop-break" /> and more accessible.
          </h2>
        </div>
        <aside className="education-card" aria-labelledby="education-card-title">
          <div className="education-accent" aria-hidden="true" />
          <div className="education-left">
            <div className="education-topline">
              <span className="education-emblem" aria-hidden="true">
                <img src="/assets/learning-focus-icon-background.svg" alt="" />
                <span>✦</span>
              </span>
              <span className="eyebrow">EDTECH <span className="divider-slash">/</span> EDUCATOR COLLABORATION</span>
            </div>
            <h3 id="education-card-title">Let’s make learning<br />more accessible.</h3>
          </div>
          <p className="education-description">
            Many of my ideas begin with education. If you're a teacher,
            educator, or building an education-focused business, I'd love
            to contribute my experience in digital learning and practical technology.
          </p>
        </aside>
      </div>
    </section>
  );
}
