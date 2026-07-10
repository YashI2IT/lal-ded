import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export default function Awardees() {
  const awardees = [
    {
      name: "Placeholder Name",
      category: "International Award",
      citation: "\"For dedicating a lifetime to the pursuit of global peace and intercultural dialogue, reflecting the universal wisdom of Lal Ded.\"",
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    },
    {
      name: "Placeholder Name",
      category: "National Award",
      citation: "\"For exceptional contribution to India's cultural preservation and advancing value-based education for the youth.\"",
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    },
    {
      name: "Placeholder Name",
      category: "Regional Award",
      citation: "\"For exemplary dedication to community service and uplifting the marginalized communities in Jammu & Kashmir.\"",
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    }
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[var(--primary)] text-3xl font-heading mb-4 tracking-widest uppercase">
            Inaugural Awardees
          </h2>
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-px w-16 bg-[var(--gold)]"></div>
            <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
            <div className="h-px w-16 bg-[var(--gold)]"></div>
          </div>
          <p className="mt-6 text-[14px] text-[var(--text)]/80 max-w-2xl mx-auto">
            Honouring the distinguished recipients of the first Lal Ded International Awards 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {awardees.map((awardee, idx) => (
            <motion.div 
              key={idx}
              className="bg-[#FBF8F1] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-full aspect-[4/3] bg-gray-200 overflow-hidden relative">
                <img 
                  src={awardee.photo} 
                  alt={awardee.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[var(--primary)] text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-sm">
                  {awardee.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-heading text-[var(--primary)] mb-4">{awardee.name}</h3>
                <p className="text-[13px] leading-relaxed text-[var(--text)]/70 italic mb-6 flex-1">
                  {awardee.citation}
                </p>
                <button className="border border-[var(--primary)] text-[var(--primary)] px-6 py-2 uppercase tracking-widest text-[10px] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors self-start">
                  Read Full Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
