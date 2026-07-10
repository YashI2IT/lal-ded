import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../../lib/animations';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden flex items-center bg-[var(--background)]">
      {/* Texture / Leaves Simulation */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, #C9A227 0%, transparent 40%), radial-gradient(circle at 10% 80%, #E8DDC9 0%, transparent 50%)',
        filter: 'blur(40px)'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Lal Ded Illustration */}
          <motion.div
            className="w-full lg:w-[45%] relative flex justify-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-[300px] md:w-[400px] lg:w-[500px]">
              <img
                src="/logo.png"
                alt="Lal Ded"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-10">

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 text-center lg:text-left">
              <h1 className="text-[var(--primary)] mb-2 font-normal text-6xl md:text-8xl tracking-wide uppercase font-heading">
                LAL DED
              </h1>
              <h2 className="text-[var(--text)] mb-6 text-xl md:text-2xl uppercase tracking-[0.2em] font-body font-medium">
                International Awards 2026
              </h2>

              <h3 className="font-heading italic text-[var(--text)] mb-6 text-2xl md:text-3xl max-w-xl mx-auto lg:mx-0 font-medium">
                Honouring Lives that Reflect Wisdom, Compassion and Service to Humanity
              </h3>

              <div className="mb-8 text-sm text-[var(--text)]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p className="mb-3">
                  Inspired by the timeless wisdom and universal message of Lal Ded, the Lal Ded International Awards honour individuals whose lives and work have advanced humanity through compassion, spiritual wisdom, education, culture, peace, dialogue and selfless service.
                </p>
                <p>
                  The awards celebrate those who transcend boundaries and inspire society through their enduring contribution to human values.
                </p>
              </div>

              {/* Decorative separator */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 opacity-60">
                <div className="h-px w-16 bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full border border-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]"></div>
                <div className="h-px w-16 bg-[var(--gold)]"></div>
              </div>

              {/* Event Cards */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-6 border-y border-[var(--border)] py-6">
                <div className="flex items-center gap-3">
                  <div className="text-[var(--gold)]">
                    <FaCalendarAlt size={24} />
                  </div>
                  <div className="text-left">
                    <span className="block font-body font-semibold text-sm text-[var(--text)]">12 July 2026</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--text)]/60">Inaugural Ceremony</span>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-[var(--border)]"></div>

                <div className="flex items-center gap-3">
                  <div className="text-[var(--gold)]">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div className="text-left">
                    <span className="block font-body font-semibold text-sm text-[var(--text)]">Tagore Hall</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--text)]/60">Srinagar, J&K</span>
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="mb-10 text-center lg:text-left">
                <div className="mb-5">
                  <span className="block text-[10px] uppercase tracking-widest text-[var(--gold)] font-bold mb-1">Chief Guest</span>
                  <p className="text-sm font-semibold text-[var(--text)]">Hon'ble Lieutenant Governor of Jammu & Kashmir</p>
                  <p className="text-sm font-bold text-[var(--primary)] mt-1">Shri Manoj Sinha</p>
                  <p className="text-[10px] text-[var(--text)]/60 italic mt-0.5">(Invited/Confirmed)</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[var(--gold)] font-bold mb-1">Distinguished Guest</span>
                    <p className="text-sm font-semibold text-[var(--text)]">Shri Vinay Sahastrabuddhe</p>
                    <p className="text-[11px] text-[var(--text)]/70">Former MP, Rajyasabha</p>
                  </div>
                  <div className="hidden sm:block w-px bg-[var(--border)]"></div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[var(--gold)] font-bold mb-1">Distinguished Guest</span>
                    <p className="text-sm font-semibold text-[var(--text)]">Mrs Nilophar Khan</p>
                    <p className="text-[11px] text-[var(--text)]/70">VC Kashmir University</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <a href="#awards" className="bg-[var(--primary)] text-white px-8 py-3 rounded-none uppercase tracking-widest text-xs font-semibold hover:bg-[var(--gold)] transition-colors text-center">
                  Explore the Awards
                </a>
                <a href="#event" className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-none uppercase tracking-widest text-xs font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors text-center">
                  Event Details
                </a>
              </div>
            </motion.div>

            {/* Floating Book Cover on the right */}
            <motion.div
              className="absolute -right-16 md:-right-24 top-0 lg:top-auto lg:bottom-0 w-32 md:w-56 pointer-events-none hidden md:block"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <img
                src="/Screenshot 2026-07-10 132306.png"
                alt="Lal Ded Book"
                className="w-full h-auto drop-shadow-2xl rotate-12"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
