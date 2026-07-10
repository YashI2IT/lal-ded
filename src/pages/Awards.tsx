import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AwardsHero from '../components/awards/AwardsHero';
import AboutAwards from '../components/home/AboutAwards';
import AwardCategories from '../components/awards/AwardCategories';
import Awardees from '../components/awards/Awardees';

export default function Awards() {
  return (
    <>
      <Navbar />
      <main>
        <AwardsHero />
        <AboutAwards />
        <AwardCategories />
        <Awardees />
      </main>
      <Footer />
    </>
  );
}
