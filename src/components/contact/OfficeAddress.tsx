import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../../lib/animations';

export default function OfficeAddress() {
  return (
    <section className="py-12 bg-[#FBF8F1]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="bg-[#F3EFE9] border border-[var(--gold)]/30 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          
          {/* Left: Image Placeholder */}
          <motion.div 
            className="w-full md:w-1/2 aspect-[16/9] md:aspect-auto bg-gray-200 relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
             <div 
               className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl1teD9JKk6gomgn7UgsjXVd07enMJPVi3mxw6y-BufUZu14r2qINz2jwRCQ64btf5zHgWlvq701uIK8-6hO0gIWXkw3NtWYsRhtBVlsFWATkQkBYwN6DxoLGzu47MKitW1Q0gVei7SlA=s1360-w1360-h1020-r')" }}
             >
             </div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 p-12 lg:p-20 flex flex-col items-center justify-center text-center">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-heading text-sm tracking-widest uppercase font-semibold text-[var(--primary)] mb-4">
                Office Address
              </h3>
              
              <div className="flex items-center justify-center gap-4 opacity-60 mb-8">
                <div className="h-px w-12 bg-[var(--gold)]"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-[var(--gold)] bg-[var(--gold)]"></div>
                <div className="h-px w-12 bg-[var(--gold)]"></div>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl text-[var(--primary)] mb-6">
                Lal Ded International Awards
              </h2>

              <p className="text-[12px] md:text-[13px] text-[var(--text)]/80 leading-relaxed font-medium mb-8">
                Tagore Hall, 3R75+Q2W, Iqbal Park,<br />
                Wazir Bagh, Srinagar,<br />
                Jammu and Kashmir 190008
              </p>

              <div className="flex flex-col gap-3 text-[12px] md:text-[13px] text-[var(--text)]/80 font-medium mb-10">
                <p>
                  <strong className="text-[var(--primary)] uppercase tracking-widest text-[10px]">General Enquiries:</strong><br/>
                  <a href="mailto:info@laldedawards.org" className="hover:text-[var(--gold)] transition-colors">info@laldedawards.org</a>
                </p>
                <p>
                  <strong className="text-[var(--primary)] uppercase tracking-widest text-[10px]">Media & Press:</strong><br/>
                  <a href="mailto:media@laldedawards.org" className="hover:text-[var(--gold)] transition-colors">media@laldedawards.org</a>
                </p>
                <p>
                  <strong className="text-[var(--primary)] uppercase tracking-widest text-[10px]">Phone:</strong><br/>
                  <a href="tel:+919999999999" className="hover:text-[var(--gold)] transition-colors">+91 99999 99999</a>
                </p>
              </div>

              {/* Decorative Lotus */}
              <div className="w-10 h-10 text-[var(--gold)] opacity-80 mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 3C12 3 6 8 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 8 12 3 12 3Z"/>
                  <path d="M12 19C12 19 8 22 3 22" />
                  <path d="M12 19C12 19 16 22 21 22" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
