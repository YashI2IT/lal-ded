import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../../lib/animations';

export default function WhoWasLalDed() {
  // The grid of points was removed to match the updated text brief.
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Image Placeholder */}
          <motion.div 
            className="w-full lg:w-2/5"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full aspect-[4/5] bg-[#E8DDC9] rounded-t-[10rem] rounded-b-md border border-[var(--gold)]/20 relative overflow-hidden flex items-center justify-center shadow-inner">
               <img 
                 src="https://luminousemptiness.co.uk/wp-content/uploads/2024/07/Lal-20Ded.jpg" 
                 alt="Lal Ded" 
                 className="w-full h-full object-cover" 
                 loading="lazy" 
               />
               {/* Decorative border */}
               <div className="absolute inset-4 border border-solid border-[var(--gold)]/40 rounded-t-[9rem] rounded-b-sm pointer-events-none mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-3/5">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[var(--primary)] text-4xl md:text-5xl font-heading mb-4">
                Who was Lal Ded?
              </h2>
              
              <div className="flex items-center gap-4 mb-8 opacity-60">
                <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
                <div className="h-px w-16 bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
              </div>

              <div className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]/80 mb-12 space-y-4">
                <p>
                  <strong>Lal Ded</strong>, also known as Lalleshwari, is one of the greatest spiritual philosophers and mystic poets of Kashmir. Through her timeless Vakhs, she transcended divisions of religion, caste and social identity, offering a universal path of self-realisation, compassion, inner awakening and human unity.
                </p>
                <p>
                  For more than six centuries, her teachings have inspired seekers, scholars and ordinary people alike. Her life remains a living symbol of courage, wisdom, simplicity and spiritual freedom.
                </p>
                <p>
                  The Lal Ded International Awards seek to carry forward this timeless legacy by recognising individuals whose lives embody these universal values.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
