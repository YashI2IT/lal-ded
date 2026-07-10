import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function EventInfo() {
  return (
    <section className="py-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8">
          
          {/* Left: Event Information */}
          <motion.div 
            className="bg-[#FBF8F1] border border-[var(--border)] rounded-[2rem] pt-0 p-10 relative mt-4 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold shadow-md whitespace-nowrap">
              Event Information
            </div>

            <h3 className="text-[var(--primary)] text-2xl font-heading text-center mt-6 mb-10 font-normal">
              Inaugural Ceremony
            </h3>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="text-[var(--gold)]">
                  <FaCalendarAlt size={22} />
                </div>
                <div>
                  <span className="block font-body font-semibold text-sm text-[var(--text)]">12 July 2026</span>
                  <span className="text-[11px] uppercase tracking-widest text-[var(--text)]/60">Sunday</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-[var(--gold)]">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div>
                  <span className="block font-body font-semibold text-sm text-[var(--text)]">Tagore Hall</span>
                  <span className="text-[11px] uppercase tracking-widest text-[var(--text)]/60">Srinagar, Jammu & Kashmir</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-[var(--gold)]">
                  <FaClock size={22} />
                </div>
                <div>
                  <span className="block font-body font-semibold text-sm text-[var(--text)]">5:00 PM onwards</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Programme Highlights */}
          <motion.div 
            className="bg-[#FBF8F1] border border-[var(--border)] rounded-[2rem] pt-0 p-10 relative mt-4 shadow-sm flex flex-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white px-8 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold shadow-md whitespace-nowrap z-10">
              Programme Highlights
            </div>

            <div className="pt-8 flex-1">
              <ul className="flex flex-col gap-5">
                {[
                  "Foundation of a new tradition honouring exemplary lives inspired by Lal Ded's values.",
                  "Presentation of the inaugural Lal Ded International, National and Regional Awards.",
                  "Launch of the book Lal Ded: The Mother of Kashmir.",
                  "Cultural presentations celebrating Kashmir's spiritual heritage.",
                  "Addresses by distinguished guests and awardees."
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="text-[var(--gold)] mt-1 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></div>
                    </div>
                    <span className="text-[13px] leading-relaxed text-[var(--text)]/80 font-medium">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
