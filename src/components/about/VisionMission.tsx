import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export default function VisionMission() {
  return (
    <section className="py-20 bg-[#F3EFE9]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="bg-[#FBF8F1] border border-[var(--gold)]/30 rounded-3xl p-10 md:p-16 shadow-sm relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Decorative background element */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[var(--gold)]/20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full border border-[var(--gold)]/20 pointer-events-none mix-blend-overlay"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-[var(--primary)] text-4xl md:text-5xl font-heading mb-6">
              Our Vision
            </h2>
            <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
              <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
              <div className="h-px w-16 bg-[var(--gold)]"></div>
              <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
            </div>

            <div className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]/80 space-y-6 text-left md:text-center">
              <p>
                The Lal Ded International Awards represent the beginning of a much larger journey.
              </p>
              <p>
                The long-term vision is to establish the <strong>Lal Ded International Centre for Education and Research</strong>, dedicated to preserving and promoting Lal Ded's timeless wisdom through education, research, publications, dialogue and cultural exchange.
              </p>
              <p>
                The Centre aims to become a global platform for scholars, spiritual leaders, researchers, artists, educators and young minds committed to peace, compassion and shared human values.
              </p>
              <p>
                Future initiatives will include research fellowships, publications, international conferences, translations of Lal Ded's Vakhs, digital archives and educational programmes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
