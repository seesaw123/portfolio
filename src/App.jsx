import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';
import AboutExpertise from './components/AboutExpertise.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const showCertifications = new URLSearchParams(window.location.search).get('view') === 'certifications';

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header showCertifications={showCertifications} />
      <main id="main-content">
        {showCertifications ? (
          <Certifications />
        ) : (
          <>
            <Hero />
            <FeaturedWork />
            <AboutExpertise />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
