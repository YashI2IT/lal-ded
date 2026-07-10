import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export default function AwardsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex items-center bg-[#F3EFE9] min-h-[70vh]">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, #E8DDC9 0%, transparent 60%), radial-gradient(circle at 80% 80%, #C9A227 0%, transparent 50%)',
        filter: 'blur(50px)'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="text-[var(--primary)] mb-4 font-normal text-6xl md:text-8xl tracking-wide uppercase font-heading leading-none">
                LAL DED
              </h1>
              <h2 className="text-[var(--text)] mb-6 text-xl md:text-2xl uppercase tracking-[0.2em] font-body font-medium">
                International Awards 2026
              </h2>

              <h3 className="font-heading italic text-[var(--gold)] mb-8 text-2xl md:text-3xl font-medium">
                Honouring Lives that Reflect<br />Wisdom, Compassion and Service to Humanity
              </h3>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 opacity-60">
                <div className="h-px w-16 bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full border border-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full border border-[var(--gold)]"></div>
                <div className="h-px w-16 bg-[var(--gold)]"></div>
              </div>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]/80 max-w-lg mx-auto lg:mx-0 font-semibold">
                Recognising individuals whose lives and work<br />have advanced humanity through wisdom, compassion,<br />spiritual wisdom, education, culture, peace and selfless service.
              </p>
            </motion.div>
          </div>

          {/* Right: Trophy Placeholder */}
          {/* <motion.div 
            className="w-full lg:w-[45%] relative flex justify-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          > */}
          {/* <div className="relative w-[300px] md:w-[400px] aspect-[3/4] flex items-center justify-center"> */}
          {/* As we don't have the trophy image in the public folder, we use a beautifully styled CSS placeholder resembling the gold trophy */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#E8DDC9]/40 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center"> */}
          {/* Trophy Body */}
          {/* <div className="w-48 h-64 bg-gradient-to-br from-[#FFDF73] via-[#C9A227] to-[#8A6D1C] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_20px_50px_rgba(201,162,39,0.3)] border-4 border-[#FFF5D1] flex items-center justify-center p-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 rounded-full blur-xl"></div>
                  <div className="relative z-10 w-full h-full border border-[#FFF5D1]/50 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] flex items-center justify-center">
                     <span className="font-heading italic text-[#FFF5D1] text-lg opacity-80">Trophy Image</span>
                  </div>
                </div> */}
          {/* Trophy Base */}
          {/* <div className="w-56 h-12 bg-gradient-to-b from-[#C9A227] to-[#5B0F18] rounded-t-xl mt-4 shadow-2xl flex flex-col items-center justify-center border-t-2 border-[#FFDF73]">
                  <span className="font-heading text-[#FFF5D1] text-sm uppercase tracking-widest leading-none">Lal Ded</span>
                  <span className="text-[#FFF5D1]/70 text-[8px] uppercase tracking-widest mt-1">International Awards</span>
                </div>
              </div>
            </div>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
}
