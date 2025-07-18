import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeroText from './AnimatedHeroText';
import PrimaryButton from './ui/PrimaryButton';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const scrollVariants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Animated Hero Text */}
        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <AnimatedHeroText />
        </motion.div>

        {/* CTA Button with hover scale animation */}
        <motion.div
          variants={itemVariants}
          className="inline-block"
          whileHover={{ scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <PrimaryButton
            size="lg"
            className="text-base md:text-lg px-8 py-4"
          >
            Start Your Collection
          </PrimaryButton>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        variants={scrollVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white text-center select-none"
      >
        <div className="relative w-24 h-24">
          {/* Circular text path */}
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <defs>
              <path
                id="scrollCircle"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
            </defs>
            <text className="text-xs font-medium tracking-wider">
              <textPath href="#scrollCircle" startOffset="0%">
                SCROLL DOWN SCROLL
              </textPath>
            </text>
          </svg>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 