import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import EventBanner from '../components/home/EventBanner';
import AboutAuthor from '../components/home/AboutAuthor';
import EventInfo from '../components/home/EventInfo';
import BookLaunch from '../components/home/BookLaunch';
import NewsUpdates from '../components/home/NewsUpdates';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventBanner />
        <BookLaunch />
        <AboutAuthor />
        <EventInfo />
        <NewsUpdates />
      </main>
      <Footer />
    </>
  );
}
