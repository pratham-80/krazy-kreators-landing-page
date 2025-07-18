import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Design',
    caption: 'From moodboards to market-ready designs.',
    image: '/design-card.jpg'
  },
  {
    id: 2,
    title: 'Manufacturing',
    caption: 'Quality production, ethical sourcing.',
    image: '/manufactring-card.jpg'
  },
  {
    id: 3,
    title: 'End-to-End',
    caption: 'All-in-one solutions for fashion startups.',
    image: '/end-to-end-card.jpg'
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

const cardVariants = {
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

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Intro Heading */}
          <motion.h2
            variants={cardVariants}
            className="text-2xl md:text-4xl font-semibold text-left tracking-tight max-w-5xl mb-24 text-[#111111]"
          >
            From concept sketch to runway-ready, our services power fashion startups every step of the way.
          </motion.h2>

          {/* Services Grid - Connected Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 8,
                  rotateX: 3,
                  z: 20
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="group relative overflow-hidden cursor-pointer transform-gpu"
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Service Card Background */}
                <div 
                  className="relative h-96 md:h-[500px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  {/* Black overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CBB49A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-20">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90">{service.caption}</p>
                    </div>
                  </div>
                </div>

                {/* Card Content (visible when not hovering) */}
                <div className="absolute inset-0 flex items-end p-6 group-hover:opacity-0 transition-opacity duration-300 z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 