import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactHero from '../components/contact/ContactHero';
import GetInTouch from '../components/contact/GetInTouch';
import OfficeAddress from '../components/contact/OfficeAddress';
import ContactFormMap from '../components/contact/ContactFormMap';
import FollowVisitor from '../components/contact/FollowVisitor';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <GetInTouch />
        <OfficeAddress />
        <ContactFormMap />
        <FollowVisitor />
      </main>
      <Footer />
    </>
  );
}
