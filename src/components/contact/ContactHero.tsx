import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../../lib/animations';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex items-center bg-[#F3EFE9] min-h-[60vh]">
      {/* Background Texture / Scene */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 80% 30%, #E8DDC9 0%, transparent 60%), radial-gradient(circle at 20% 80%, #C9A227 0%, transparent 50%)',
        filter: 'blur(40px)'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left: Lal Ded Statue Placeholder */}
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-[250px] md:w-[350px] aspect-[4/3] flex items-center justify-center">
               <img 
                 src="/Screenshot 2026-07-10 132745.png" 
                 alt="Contact Hero" 
                 className="w-full h-auto object-contain drop-shadow-2xl"
                 style={{
                   maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
                   WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
                 }}
               />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="text-[var(--primary)] mb-2 font-normal text-6xl md:text-8xl tracking-wide font-heading leading-none">
                Contact Us
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 opacity-60">
                <div className="h-px w-16 bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
                <div className="h-px w-16 bg-[var(--gold)]"></div>
              </div>

              <h2 className="font-heading italic text-[var(--gold)] mb-6 text-2xl md:text-3xl font-medium">
                We would love to hear from you.
              </h2>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]/80 max-w-sm mx-auto lg:mx-0 mb-8 font-semibold">
                For any inquiries, collaborations, nominations or general information, please reach out to us.
              </p>

              {/* Decorative Lotus */}
              <div className="w-8 h-8 text-[var(--gold)] opacity-70 mx-auto lg:mx-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 3C12 3 6 8 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 8 12 3 12 3Z"/>
                  <path d="M12 19C12 19 8 22 3 22" />
                  <path d="M12 19C12 19 16 22 21 22" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
