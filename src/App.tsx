import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import PremiumCursor from './components/ui/PremiumCursor';
import Home from './pages/Home';
import AboutLalDed from './pages/AboutLalDed';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll>
          <Helmet>
            <title>Lal Ded International Awards 2026</title>
            <meta name="description" content="The official website for Lal Ded International Awards 2026. A luxury editorial experience." />
          </Helmet>
          
          <PremiumCursor />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutLalDed />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
