const lessons = [
  { label: 'UNDERSTAND', symbol: '₿', icon: '/assets/learning-icon-dark.svg' },
  { label: 'EXPLORE', symbol: '→', icon: '/assets/learning-icon-orange.svg', warm: true },
  { label: 'PRACTICE', symbol: '⌘', icon: '/assets/learning-icon-dark.svg' },
];

/** An editable React/CSS reproduction of the browser mockup in the Figma project card. */
export default function ProjectPreview() {
  return (
    <div className="project-art" aria-label="BlockLab.study learning interface illustration">
      <div className="project-art-accent" aria-hidden="true" />
      <div className="project-browser">
        <div className="browser-toolbar">
          <div className="browser-dots" aria-hidden="true">
            <img src="/assets/browser-dot-orange.svg" alt="" />
            <img src="/assets/browser-dot-gray.svg" alt="" />
            <img src="/assets/browser-dot-gray.svg" alt="" />
          </div>
          <span>blocklab.study</span>
        </div>
        <div className="browser-main">
          <h3>Learn Bitcoin.</h3>
          <p>Learn how Bitcoin works through<br className="desktop-break" /> interactive lessons and simulations.</p>
          <div className="lesson-cards">
            {lessons.map(({ label, symbol, icon, warm }) => (
              <div className={`lesson-card${warm ? ' lesson-card-warm' : ''}`} key={label}>
                <span className="lesson-icon" aria-hidden="true">
                  <img src={icon} alt="" />
                  <span>{symbol}</span>
                </span>
                <span className="lesson-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
