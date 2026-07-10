import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../../lib/animations';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex items-center bg-[#F3EFE9] min-h-[70vh]">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 80% 30%, #C9A227 0%, transparent 60%)',
        filter: 'blur(50px)'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <span className="text-[var(--primary)] font-heading text-3xl md:text-4xl mb-1 block">About</span>
              <h1 className="text-[var(--primary)] mb-4 font-normal text-7xl md:text-[100px] tracking-wide uppercase font-heading leading-none">
                LAL DED
              </h1>

              <div className="flex items-center gap-4 mb-6 opacity-60">
                <div className="h-px w-16 bg-[var(--gold)]"></div>
                {/* Simple Lotus-like geometric icon */}
                <svg className="w-5 h-5 text-[var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 3C12 3 7 9 7 14C7 16.7614 9.23858 19 12 19C14.7614 19 17 16.7614 17 14C17 9 12 3 12 3Z" />
                  <path d="M12 19C12 19 8 22 4 22" />
                  <path d="M12 19C12 19 16 22 20 22" />
                </svg>
                <div className="h-px w-16 bg-[var(--gold)]"></div>
              </div>

              <h2 className="font-heading italic text-[var(--gold)] mb-6 text-2xl md:text-3xl font-medium">
                The Mystic Poetess of Kashmir
              </h2>

              <p className="text-[15px] md:text-[16px] leading-relaxed text-[var(--text)]/80 max-w-md mb-8">
                A timeless voice of wisdom, compassion and universal truth whose teachings continue to illuminate hearts across the world.
              </p>

              {/* Decorative Lotus icon at bottom */}
              <div className="w-8 h-8 text-[var(--gold)] opacity-70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 3C12 3 6 8 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 8 12 3 12 3Z" />
                  <path d="M12 19C12 19 8 22 3 22" />
                  <path d="M12 19C12 19 16 22 21 22" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right: Lal Ded Image */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-[350px] md:w-[450px] lg:w-[550px]">
              <img
                src=""
                alt="Lal Ded"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
