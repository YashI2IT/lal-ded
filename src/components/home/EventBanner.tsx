import { motion } from 'framer-motion';
import { scaleUp } from '../../lib/animations';

export default function EventBanner() {
  return (
    <section className="pt-16 pb-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="w-full rounded-[1.5rem] overflow-hidden shadow-xl"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <img
            src="image.png"
            alt="Event Banner"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
