import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';
import AboutExpertise from './components/AboutExpertise.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedWork />
        <AboutExpertise />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
