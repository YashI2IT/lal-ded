import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { FaGlobe, FaFlag, FaMapMarkerAlt } from 'react-icons/fa';

export default function AwardCategories() {
  const tiers = [
    { 
      icon: FaGlobe, 
      title: "International Award", 
      desc: "Presented to a global leader or visionary whose work has made a profound international impact in promoting peace, human welfare or spiritual wisdom." 
    },
    { 
      icon: FaFlag, 
      title: "National Award", 
      desc: "Presented to an eminent Indian personality for exceptional contribution to national integration, culture, education or social transformation." 
    },
    { 
      icon: FaMapMarkerAlt, 
      title: "Regional Award (J&K)", 
      desc: "Presented to an outstanding individual from Jammu & Kashmir who has demonstrated exemplary dedication to the region's cultural preservation, education or community service." 
    }
  ];

  return (
    <section className="py-20 bg-[#FBF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        <motion.div 
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[var(--primary)] text-3xl font-heading mb-4 tracking-widest uppercase">
            Award Categories
          </h2>
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-px w-16 bg-[var(--gold)]"></div>
            <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
            <div className="h-px w-16 bg-[var(--gold)]"></div>
          </div>
          <p className="mt-6 text-[14px] text-[var(--text)]/80 max-w-2xl mx-auto">
            The Awards are presented in three tiers, honouring excellence and service to humanity at global, national, and regional levels.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="bg-white border border-[var(--border)] rounded-2xl p-10 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-full border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] mb-6 bg-[#FBF8F1] group-hover:bg-[var(--gold)] group-hover:text-white transition-colors duration-300">
                <tier.icon size={24} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-[var(--primary)] uppercase tracking-widest mb-4">
                {tier.title}
              </h4>
              <p className="text-[13px] text-[var(--text)]/70 leading-relaxed text-center">
                {tier.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
