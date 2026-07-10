import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

export default function GetInTouch() {
  const contactInfo = [
    { icon: FaPhoneAlt, title: "Phone", details: ["+91 80805 15136", "+91 96201 99881"] },
    { icon: FaEnvelope, title: "Email", details: ["editorndc@gmail.com"] },
    { icon: FaMapMarkerAlt, title: "Address", details: ["Tagore Hall, Iqbal Park,", "Wazir Bagh, Srinagar,", "Jammu & Kashmir - 190008"] },
    { icon: FaCalendarAlt, title: "Event Date", details: ["12 July 2026", "Sunday"] },
    { icon: FaClock, title: "Event Time", details: ["5:00 PM onwards"] }
  ];

  return (
    <section className="py-20 bg-[#FBF8F1]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
        
        {/* Title */}
        <motion.div 
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[var(--primary)] text-2xl font-heading mb-4 tracking-widest uppercase">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-px w-16 bg-[var(--gold)]"></div>
            <div className="w-2 h-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
            <div className="h-px w-16 bg-[var(--gold)]"></div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactInfo.map((info, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="bg-[#FBF8F1] border border-[var(--gold)]/30 rounded-xl p-8 flex flex-col items-center shadow-sm hover:border-[var(--gold)] hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] mb-6 bg-white shrink-0">
                <info.icon size={20} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-[var(--primary)] mb-4">
                {info.title}
              </h4>
              <div className="text-[10px] text-[var(--text)]/80 leading-relaxed font-medium">
                {info.details.map((detail, dIdx) => (
                  <p key={dIdx}>{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
