import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Lal Ded', path: '/about' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' }
  ];

  const visitorsToday = ['1', '2', '4', '8'];
  const totalVisitors = ['1', '5', '6', '4', '2'];

  return (
    <footer className="bg-[#2A080C] text-[#FFFDF8] relative overflow-hidden">
      
      {/* Subtle Abstract Wave Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#3D0C11] fill-current">
          <path d="M0,100 C20,80 50,20 100,50 L100,100 Z" opacity="0.5" />
          <path d="M0,50 C30,20 60,80 100,30 L100,100 L0,100 Z" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 pt-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] gap-12 lg:gap-8 pb-12">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col lg:pr-8 border-b lg:border-b-0 lg:border-r border-[var(--gold)]/20 pb-8 lg:pb-0">
            <div className="flex items-center gap-5 mb-6">
              <img src="/logo.png" alt="Lal Ded Logo" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl border-2 border-[var(--gold)]/50 shadow-md" />
              <div>
                <h3 className="font-heading text-3xl uppercase tracking-widest text-[#FFFDF8] leading-none mb-1 font-bold">Lal Ded</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#FFFDF8]/80 font-body mt-1">International Awards</p>
              </div>
            </div>
            
            <p className="text-[12px] leading-relaxed text-[#FFFDF8]/80 mb-8 font-medium max-w-xs italic">
              "Inspired by the Timeless Wisdom of Lal Ded"
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)]/50 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)]/50 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)]/50 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaYoutube size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)]/50 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                {/* X Logo (Twitter) SVG */}
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col lg:pl-4 border-b lg:border-b-0 lg:border-r border-[var(--gold)]/20 pb-8 lg:pb-0">
            <h4 className="text-[var(--gold)] font-heading text-sm uppercase tracking-[0.15em] mb-6 font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-[12px] text-[#FFFDF8]/80 hover:text-[var(--gold)] transition-colors w-fit font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Contact Info */}
          <div className="flex flex-col lg:pl-4 border-b lg:border-b-0 lg:border-r border-[var(--gold)]/20 pb-8 lg:pb-0">
            <h4 className="text-[var(--gold)] font-heading text-sm uppercase tracking-[0.15em] mb-6 font-semibold">Contact Info</h4>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="text-[var(--gold)] mt-0.5">
                  <FaMapMarkerAlt size={16} />
                </div>
                <p className="text-[12px] text-[#FFFDF8]/80 leading-relaxed font-medium">
                  Tagore Hall, 3R75+Q2W, Iqbal Park,<br />
                  Wazir Bagh, Srinagar,<br />
                  Jammu and Kashmir 190008
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[var(--gold)] mt-0.5">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="text-[12px] text-[#FFFDF8]/80 leading-relaxed font-medium flex flex-col gap-1">
                  <span>+91 99999 99999</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[var(--gold)] mt-0.5">
                  <FaEnvelope size={16} />
                </div>
                <div className="text-[12px] text-[#FFFDF8]/80 leading-relaxed font-medium flex flex-col gap-1">
                  <span>info@laldedawards.org</span>
                  <span>media@laldedawards.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Visitor Counter */}
          <div className="flex flex-col lg:pl-4 relative z-10">
            <h4 className="text-[var(--gold)] font-heading text-sm uppercase tracking-[0.15em] mb-6 font-semibold">Visitor Counter</h4>
            
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[11px] text-[#FFFDF8]/70 mb-3 font-medium">Visitors Today</p>
                <div className="flex gap-2">
                  {visitorsToday.map((digit, idx) => (
                    <div key={idx} className="w-8 h-10 bg-[#410810] rounded border border-[var(--gold)]/30 flex items-center justify-center text-[#FFFDF8] font-bold text-lg shadow-inner">
                      {digit}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#FFFDF8]/70 mb-3 font-medium">Total Visitors</p>
                <div className="flex gap-2">
                  {totalVisitors.map((digit, idx) => (
                    <div key={idx} className="w-8 h-10 bg-[#410810] rounded border border-[var(--gold)]/30 flex items-center justify-center text-[#FFFDF8] font-bold text-lg shadow-inner">
                      {digit}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[12px] text-[var(--gold)] mt-4 font-medium">
                Thank you for visiting!
              </p>
            </div>
          </div>

        </div>

        {/* Core Values */}
        <div className="border-t border-[var(--gold)]/20 py-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
            Wisdom &bull; Compassion &bull; Harmony &bull; Humanity
          </p>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-[var(--gold)]/20 bg-[#1D0508] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#FFFDF8]/60 font-medium">
            © 2026 Lal Ded International Awards. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-[#FFFDF8]/60 hover:text-[var(--gold)] transition-colors font-medium">Privacy Policy</a>
            <div className="w-px h-3 bg-[#FFFDF8]/30"></div>
            <a href="#" className="text-[11px] text-[#FFFDF8]/60 hover:text-[var(--gold)] transition-colors font-medium">Terms & Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
