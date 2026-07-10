import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactFormMap() {
  return (
    <section className="py-12 bg-[#FBF8F1]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* FIND US */}
          <motion.div 
            className="bg-[#F3EFE9] border border-[var(--gold)]/30 rounded-xl p-8 lg:p-12 shadow-sm flex flex-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-8">
              <h3 className="font-heading text-sm tracking-widest uppercase font-semibold text-[var(--primary)] mb-4">
                Find Us
              </h3>
              <div className="flex items-center justify-center gap-4 opacity-60">
                <div className="h-px w-12 bg-[var(--gold)]"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
                <div className="h-px w-12 bg-[var(--gold)]"></div>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-lg overflow-hidden border border-[var(--border)] relative bg-gray-200">
               {/* Embed Google Map iframe pointing to Srinagar Tagore Hall as requested in design */}
               <iframe 
                 src="https://maps.google.com/maps?q=Tagore%20Hall,%203R75%2BQ2W,%20Iqbal%20Park,%20Wazir%20Bagh,%20Srinagar,%20Jammu%20and%20Kashmir%20190008&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Tagore Hall, Srinagar Map"
               ></iframe>
            </div>
          </motion.div>

          {/* SEND US A MESSAGE */}
          <motion.div 
            className="bg-[#F3EFE9] border border-[var(--gold)]/30 rounded-xl p-8 lg:p-12 shadow-sm flex flex-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-8">
              <h3 className="font-heading text-sm tracking-widest uppercase font-semibold text-[var(--primary)] mb-4">
                Send Us A Message
              </h3>
              <div className="flex items-center justify-center gap-4 opacity-60">
                <div className="h-px w-12 bg-[var(--gold)]"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
                <div className="h-px w-12 bg-[var(--gold)]"></div>
              </div>
            </div>

            <form className="flex flex-col gap-4 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#FBF8F1] border border-[var(--border)] rounded-md px-4 py-3 text-[11px] font-body text-[var(--text)] placeholder-[var(--text)]/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#FBF8F1] border border-[var(--border)] rounded-md px-4 py-3 text-[11px] font-body text-[var(--text)] placeholder-[var(--text)]/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#FBF8F1] border border-[var(--border)] rounded-md px-4 py-3 text-[11px] font-body text-[var(--text)] placeholder-[var(--text)]/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-[#FBF8F1] border border-[var(--border)] rounded-md px-4 py-3 text-[11px] font-body text-[var(--text)] placeholder-[var(--text)]/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
              </div>
              
              <textarea 
                placeholder="Your Message" 
                rows={6}
                className="w-full bg-[#FBF8F1] border border-[var(--border)] rounded-md px-4 py-3 text-[11px] font-body text-[var(--text)] placeholder-[var(--text)]/50 focus:outline-none focus:border-[var(--gold)] transition-colors resize-none flex-1"
              ></textarea>

              <button 
                type="button"
                className="bg-[#410810] text-white px-8 py-3 rounded-none uppercase tracking-widest text-[10px] font-semibold hover:bg-[var(--gold)] transition-colors shadow-md mt-2 flex items-center justify-center gap-2 self-start"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
