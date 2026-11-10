const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Saw — back to top">saw</a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a className="nav-link" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
