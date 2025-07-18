import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { id: 1, name: 'Badri Al Shihhi', logo: '/logos/badri-al-shihhi.png' },
  { id: 2, name: 'Las Loungewear', logo: '/logos/las-loungewear.png' },
  { id: 3, name: 'HY Official', logo: '/logos/hy-official.png' },
  { id: 4, name: 'Tilted Lotus', logo: '/logos/titled-lotus.png' },
  { id: 5, name: 'Drover', logo: '/logos/drover.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const ClientLogosSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-semibold text-left tracking-tight max-w-4xl text-[#111111]"
            >
              Empowering bold fashion brands — from startups to icons.
            </motion.h2>
            
            <motion.a
              href="#testimonials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#CBB49A] hover:text-[#B8A589] text-sm md:text-base font-medium mt-4 md:mt-0 hover:underline underline-offset-4 transition-colors duration-300"
            >
              → See Testimonials
            </motion.a>
          </div>

          {/* Logo Carousel */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex items-center space-x-24 md:space-x-32"
              animate={{
                x: isHovered ? 0 : [-100, 0],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {clientLogos.map((client) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: client.id * 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="h-12 w-24 bg-gray-200 flex items-center justify-center rounded">
                            <span class="text-gray-500 text-xs font-medium">${client.name}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client) => (
                <motion.div
                  key={`duplicate-${client.id}`}
                  className="flex-shrink-0"
                >
                  <div className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="h-12 w-24 bg-gray-200 flex items-center justify-center rounded">
                            <span class="text-gray-500 text-xs font-medium">${client.name}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogosSection; 