import { motion } from 'framer-motion';
import { fadeUp, scaleUp } from '../../lib/animations';

export default function AboutAwards() {
  return (
    <section className="py-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#FBF8F1] border border-[var(--border)] rounded-[2rem] overflow-hidden shadow-sm relative px-10 py-16">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Content */}
            <motion.div 
              className="w-full max-w-4xl text-center mx-auto"
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[var(--primary)] mb-4 text-4xl md:text-5xl font-heading font-normal">
                About the Awards
              </h2>
              
              <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
                <div className="h-px w-16 bg-[var(--gold)]"></div>
                <div className="w-2 h-2 rounded-full border border-[var(--gold)]"></div>
                <div className="h-px w-16 bg-[var(--gold)]"></div>
              </div>

              <div className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]/80 space-y-6">
                <p>
                  The Lal Ded International Awards have been instituted to recognise extraordinary individuals whose work reflects the timeless values represented by Lal Ded.
                </p>
                <p>
                  The awards honour excellence in service to humanity across diverse fields including spirituality, education, literature, culture, peace-building, social transformation, public service and human welfare.
                </p>
                <p>
                  Beyond recognition, the awards aspire to create a global platform that encourages dialogue, compassion, wisdom and shared human values.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
