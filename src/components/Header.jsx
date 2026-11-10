const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: './?view=certifications', isCertifications: true },
];

export default function Header({ showCertifications }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={showCertifications ? './' : '#top'} aria-label="Saw — portfolio home">saw</a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map(({ label, href, isCertifications }) => (
              <li key={href}>
                <a
                  className="nav-link"
                  href={showCertifications && !isCertifications ? `./${href}` : href}
                  aria-current={showCertifications && isCertifications ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
