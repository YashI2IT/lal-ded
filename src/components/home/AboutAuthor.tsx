import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../../lib/animations';
import { FaPenNib, FaHeart, FaBook, FaAward, FaMicrophone, FaStar } from 'react-icons/fa';

export default function AboutAuthor() {
  const points = [
    { icon: FaPenNib, text: "Founder Editor – Afternoon & The Democracy" },
    { icon: FaHeart, text: "Philanthropist & Social Reformer" },
    { icon: FaBook, text: "Author of several impactful books" },
    { icon: FaAward, text: "Newsmakers Achievers Awards Founder" },
    { icon: FaMicrophone, text: "TEDx Speaker" },
    { icon: FaStar, text: "Recognized by Forbes & World Book of Records" }
  ];

  return (
    <section className="py-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#FBF8F1] border border-[var(--border)] rounded-[2rem] overflow-hidden shadow-sm relative">

          <div className="flex flex-col lg:flex-row items-stretch">

            {/* Left: Portrait */}
            <motion.div
              className="w-full lg:w-[45%] relative h-[400px] lg:h-auto"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute inset-0">
                <img
                  src="/vaidehi.png"
                  alt="Dr. Vaidehi Taman"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)' // For desktop
                  }}
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <div className="w-full lg:w-[55%] p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="text-[var(--primary)] font-heading text-xl mb-1 block">About</span>
                <h2 className="text-[var(--gold)] font-heading italic text-5xl md:text-6xl mb-4 font-normal">
                  Dr. Vaidehi Taman
                </h2>
                <h3 className="text-[var(--text)]/80 italic font-heading text-xl md:text-2xl mb-6">
                  Editor, Author, Philanthropist & TEDx Speaker
                </h3>

                <div className="text-[14px] leading-relaxed text-[var(--text)]/80 mb-8 max-w-xl space-y-4">
                  <p>
                    Dr. Vaidehi Taman is an editor, author, journalist, philanthropist and TEDx speaker whose work bridges spirituality, culture, journalism and social commitment.
                  </p>
                  <p>
                    Through her writings and public initiatives, she has consistently promoted ethical journalism, Indian knowledge traditions and value-based leadership.
                  </p>
                  <p>
                    Her book <strong>Lal Ded: The Mother of Kashmir</strong> is a significant contribution towards bringing Lal Ded's timeless wisdom to contemporary readers across the world.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                  {points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] shrink-0 bg-transparent">
                        <point.icon size={10} />
                      </div>
                      <span className="text-[11px] font-body text-[var(--text)]/80 uppercase tracking-widest font-semibold">{point.text}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-none uppercase tracking-widest text-xs font-semibold hover:bg-[var(--gold)] transition-colors self-start">
                  Know More About Dr. Vaidehi Taman
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
