import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import WhoWasLalDed from '../components/about/WhoWasLalDed';
import VisionMission from '../components/about/VisionMission';

export default function AboutLalDed() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <WhoWasLalDed />
        <VisionMission />
      </main>
      <Footer />
    </>
  );
}
