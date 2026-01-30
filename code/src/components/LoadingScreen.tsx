import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="flex items-center gap-3 text-primary mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Star className="w-12 h-12" />
            </motion.div>
            <span className="text-4xl font-bold tracking-wider">jasX</span>
          </motion.div>

          <div className="relative w-48 h-48 flex items-center justify-center">
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-primary"
              animate={{
                boxShadow: [
                  '0 0 15px hsl(var(--primary) / 0.5)',
                  '0 0 35px hsl(var(--primary) / 0.8)',
                  '0 0 15px hsl(var(--primary) / 0.5)',
                ],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const orbitSize = 60 + i * 30;
              const duration = 2.5 + i * 1.5;
              const startRotation = (i * 137.5) % 360; // Use golden angle for pseudo-random distribution
              return (
                <div key={`orbit-system-${i}`} className="absolute flex items-center justify-center">
                  <div 
                    className="absolute rounded-full border border-primary/10"
                    style={{ width: orbitSize, height: orbitSize }}
                  />
                  <motion.div
                    className="absolute"
                    style={{ width: orbitSize, height: orbitSize }}
                    initial={{ rotate: startRotation }}
                    animate={{ rotate: startRotation + 360 }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-primary left-1/2 -translate-x-1/2"
                      style={{ top: 0 }}
                      animate={{ 
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

          <motion.p
            className="mt-8 text-muted-foreground text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Preparing for launch...
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
