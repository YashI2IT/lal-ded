import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function FollowVisitor() {
  const visitorsToday = ['1', '2', '4', '8'];
  const totalVisitors = ['1', '5', '6', '4', '2'];

  return (
    <section className="py-12 bg-[#FBF8F1] pb-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          
          {/* FOLLOW US */}
          <motion.div 
            className="bg-[#F3EFE9] border border-[var(--gold)]/30 rounded-xl p-8 shadow-sm flex flex-col items-center justify-center text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-heading text-sm tracking-widest uppercase font-semibold text-[var(--primary)] mb-4">
              Follow Us
            </h3>
            <div className="flex items-center justify-center gap-4 opacity-60 mb-6">
              <div className="h-px w-12 bg-[var(--gold)]"></div>
              <div className="w-1.5 h-1.5 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
              <div className="h-px w-12 bg-[var(--gold)]"></div>
            </div>

            <p className="text-[12px] text-[var(--text)]/80 mb-8 font-medium">
              Stay connected with us on social media
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaYoutube size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300">
                {/* X Logo (Twitter) simple SVG */}
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* VISITOR COUNTER */}
          <motion.div 
            className="bg-[#F3EFE9] border border-[var(--gold)]/30 rounded-xl p-8 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-heading text-sm tracking-widest uppercase font-semibold text-[var(--primary)] mb-4 relative z-10">
              Visitor Counter
            </h3>
            <div className="flex items-center justify-center gap-4 opacity-60 mb-8 relative z-10">
              <div className="h-px w-12 bg-[var(--gold)]"></div>
              <div className="w-1.5 h-1.5 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
              <div className="h-px w-12 bg-[var(--gold)]"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
              
              <div className="flex flex-col items-center">
                <span className="text-[var(--gold)] font-heading text-sm uppercase tracking-widest mb-3">Visitors Today</span>
                <div className="flex gap-2">
                  {visitorsToday.map((digit, idx) => (
                    <div key={idx} className="w-8 h-10 bg-[#410810] rounded border border-[var(--gold)]/30 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {digit}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-[var(--gold)]/30"></div>

              <div className="flex flex-col items-center">
                <span className="text-[var(--gold)] font-heading text-sm uppercase tracking-widest mb-3">Total Visitors</span>
                <div className="flex gap-2">
                  {totalVisitors.map((digit, idx) => (
                    <div key={idx} className="w-8 h-10 bg-[#410810] rounded border border-[var(--gold)]/30 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {digit}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <p className="font-heading italic text-[var(--gold)] mt-8 text-lg relative z-10">
              Thank you for visiting!
            </p>

            {/* Decorative Lotus */}
            <div className="w-8 h-8 text-[var(--gold)] opacity-70 mx-auto mt-4 relative z-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3C12 3 6 8 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 8 12 3 12 3Z"/>
                <path d="M12 19C12 19 8 22 3 22" />
                <path d="M12 19C12 19 16 22 21 22" />
              </svg>
            </div>
            
          </motion.div>

        </div>

      </div>
    </section>
  );
}
