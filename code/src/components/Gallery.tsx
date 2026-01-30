import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const Gallery = () => {
  return (
    <section id="gallery" className="section-container relative z-10">
      <AnimatedSection className="text-center mb-16">
        <h2 className="section-title mb-4">GALLERY</h2>
        <p className="section-description">A glimpse into your orbital future</p>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="aspect-video bg-card/50 border border-white/10 rounded-xl flex flex-col items-center justify-center text-muted-foreground/30 group hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <ImageIcon size={48} className="mb-4 group-hover:text-primary/30 transition-colors" />
            <p className="text-sm uppercase tracking-widest">Awaiting Content</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
