import { motion } from 'framer-motion';
import { fadeUp, scaleUp } from '../../lib/animations';

export default function BookLaunch() {
  return (
    <section className="py-16 bg-[#FBF8F1] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Images */}
          <div className="w-full lg:w-5/12 flex items-center justify-center relative">
            <motion.div 
              className="w-48 md:w-64 relative z-10"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="/Screenshot 2026-07-10 132306.png" 
                alt="Lal Ded: The Mother of Kashmir Book Cover" 
                className="w-full h-auto drop-shadow-2xl rotate-3"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -right-4 md:-right-8 -bottom-8 w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 bg-gray-200"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="/Screenshot 2026-07-10 132326.png" // The author's image might be one of the screenshots. If not, it's a placeholder. 
                alt="Dr. Vaidehi Taman" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[var(--primary)] mb-2 text-sm uppercase tracking-[0.2em] font-semibold">
                Official Book Launch
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-6 leading-tight">
                Lal Ded – The Mother of Kashmir
              </h3>
              
              <p className="text-[var(--gold)] font-medium text-lg mb-6 italic font-heading">
                A Journey of Wisdom, Devotion and Self-Realisation
              </p>

              <div className="h-px w-16 bg-[var(--gold)] mb-6 opacity-60"></div>
              
              <p className="text-[14px] leading-relaxed mb-4 text-[var(--text)]/80">
                The inaugural ceremony will also mark the launch of the landmark book <strong>Lal Ded: The Mother of Kashmir</strong> by Dr. Vaidehi Taman.
              </p>
              <p className="text-[14px] leading-relaxed mb-8 text-[var(--text)]/80">
                The book presents the extraordinary life, philosophy and spiritual wisdom of Lal Ded, exploring her enduring influence on Kashmir's cultural heritage and humanity's shared spiritual traditions.
              </p>

              <button className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-none uppercase tracking-widest text-xs font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors">
                Know More
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
