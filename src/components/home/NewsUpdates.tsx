import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export default function NewsUpdates() {
  const newsItems = [
    {
      date: "10 June 2026",
      category: "Press Release",
      title: "Lal Ded International Awards Announced",
      excerpt: "The foundation officially announces the inaugural edition of the Lal Ded International Awards, celebrating global humanitarians."
    },
    {
      date: "25 June 2026",
      category: "Announcement",
      title: "Jury Panel Revealed",
      excerpt: "Eminent personalities from literature, social service, and academia join the jury panel for the upcoming awards."
    },
    {
      date: "05 July 2026",
      category: "Event Update",
      title: "Preparations in Full Swing at Tagore Hall",
      excerpt: "Srinagar prepares to host international delegates and dignitaries for the grand ceremony."
    }
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-[var(--primary)] font-heading text-xl mb-2 block">Latest</span>
          <h2 className="text-[var(--gold)] font-heading text-4xl md:text-5xl font-normal mb-6">
            News & Updates
          </h2>
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-px w-16 bg-[var(--gold)]"></div>
            <div className="w-2 h-2 rounded-full border border-[var(--gold)]"></div>
            <div className="h-px w-16 bg-[var(--gold)]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-[#FBF8F1] border border-[var(--border)] rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest text-[var(--gold)] font-bold">{item.category}</span>
                <div className="w-1 h-1 rounded-full bg-[var(--border)]"></div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--text)]/50">{item.date}</span>
              </div>
              <h3 className="text-[var(--primary)] font-heading text-xl mb-3 group-hover:text-[var(--gold)] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[var(--text)]/70">
                {item.excerpt}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <button className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-none uppercase tracking-widest text-xs font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors inline-flex items-center justify-center">
            View Media Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}
