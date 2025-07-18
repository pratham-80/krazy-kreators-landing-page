import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const AboutSection: React.FC = () => {
  const stats = [
    {
      number: '20+',
      caption: 'brands launched successfully'
    },
    {
      number: '8+',
      caption: 'years of industry experience'
    },
    {
      number: '300+',
      caption: 'designs prototyped & produced'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-left"
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-semibold text-left tracking-tight max-w-5xl mb-16 text-[#111111]"
          >
            At Krazy Kreators, we bring fashion visions to life through design, prototyping, and sustainable manufacturing partnerships.
          </motion.h2>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#111111] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-[#666666] font-medium">
                  {stat.caption}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More About Us Link */}
          <motion.div
            variants={itemVariants}
            className="text-left mt-10"
          >
            <Button
              variant="link"
              className="text-[#CBB49A] hover:text-[#B8A589] text-base font-medium p-0 h-auto hover:underline underline-offset-4"
            >
              More About Us →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 