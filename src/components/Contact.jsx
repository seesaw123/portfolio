const social = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sawnyanlintun',
    icon: '/assets/linkedin-logo.svg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/nyanlintun.nyan.9',
    icon: '/assets/facebook-logo.svg',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-box">
        <p className="eyebrow contact-eyebrow">03 / GET IN TOUCH</p>
        <h2 id="contact-title">Let’s build something meaningful.</h2>
        <p className="contact-description">
          I'm interested in opportunities where business, data and technology come together.
        </p>
        <div className="contact-actions" id="social-links">
          {/* The Figma file does not specify an email address. This CTA links to the available contact methods. */}
          <a className="button button-orange" href="https://www.linkedin.com/in/sawnyanlintun" target="_blank" rel="noopener noreferrer">
            Get in touch <span aria-hidden="true">→</span>
          </a>
          {social.map(({ label, href, icon }) => (
            <a className="social-button" key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open my ${label} profile`}>
              <img src={icon} alt="" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
