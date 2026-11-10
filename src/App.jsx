import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';
import AboutExpertise from './components/AboutExpertise.jsx';
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
        <section className="certifications-section container" id="certifications" aria-labelledby="certifications-title">
          <h2 id="certifications-title">Certifications</h2>
          <ul>
            <li>On-Chain Analysis for Beginners · Binance</li>
            <li>Crypto Risk Management · Binance</li>
          </ul>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
