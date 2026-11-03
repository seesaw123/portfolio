import ProjectPreview from './ProjectPreview.jsx';

export default function FeaturedWork() {
  return (
    <section className="featured-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <p className="eyebrow section-eyebrow">01 / FEATURED WORK</p>
        <h2 className="section-title" id="work-title">Selected project.</h2>
        <p className="section-lead">Exploring complex ideas through approachable and interactive learning.</p>
        <article className="project-card">
          <ProjectPreview />
          <div className="project-content">
            <p className="eyebrow project-category">EDTECH <span>/</span> INTERACTIVE LEARNING</p>
            <h3>
              <a href="https://blocklab.study/" target="_blank" rel="noopener noreferrer">
                BlockLab.study
              </a>
            </h3>
            <p className="project-description">
              An interactive Bitcoin education platform designed to make blockchain
              concepts easier to understand through visual explanations, guided
              lessons, and hands-on learning experiences.
            </p>
            <a className="button button-dark project-button" href="https://blocklab.study/" target="_blank" rel="noopener noreferrer">
              Explore case study <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
