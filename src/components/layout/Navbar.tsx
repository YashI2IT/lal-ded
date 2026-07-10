import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Lal Ded', path: '/about' },
    { name: 'Awards', path: '/awards' }
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]/50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden border-2 border-[#C9A227]/40 group-hover:border-[#C9A227] transition-colors duration-500 flex-shrink-0 shadow-sm">
              <img 
                src="/logo.png" 
                alt="Lal Ded Logo" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col mt-1">
              <span className="font-heading text-3xl md:text-[32px] font-bold tracking-widest text-[#410810] uppercase leading-none">Lal Ded</span>
              <span className="font-body text-[10px] md:text-[11px] tracking-[0.2em] text-[#2A080C]/70 mt-1.5 uppercase font-medium">International Awards</span>
            </div>
          </Link>

          {/* Right Section: Nav + CTA */}
          <div className="flex items-center gap-12">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`relative font-heading text-[17px] tracking-wide transition-colors duration-300 group ${
                      isActive ? 'text-[#410810] font-bold' : 'text-[#2A080C] hover:text-[#410810]'
                    }`}
                  >
                    {link.name}
                    {/* Hover Underline Animation */}
                    <span 
                      className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#410810] transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link to="/contact" className="inline-block bg-[#410810] hover:bg-[#2A060A] text-[#C9A227] px-6 py-2.5 text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 border border-transparent hover:border-[#C9A227]/30 shadow-md">
                Register Interest
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </motion.nav>
  );
}
