import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedHeroText: React.FC = () => {
  const words = ["brands", "collections", "cultures", "statements", "movements", "runways"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
        <div className="mb-2">Some ideas become</div>
        <div className="relative h-[1.2em] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[#CBB49A] font-bold"
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroText; 