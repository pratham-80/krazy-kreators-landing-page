import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "Drover",
    subtitle: "Cowboy Threads",
    location: "USA",
    description: "Drover teamed up with Krazy Kreators to bring their D2C fashion line to life — from digital storefront to sustainable packaging.",
    image: "/case/drover-coverimage.png",
    bgColor: "bg-gradient-to-br from-slate-50 to-gray-100",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Tilted Lotus",
    subtitle: "",
    location: "Houston",
    description: "We crafted a sophisticated digital identity for Tilted Lotus, transforming their luxury fashion brand into a compelling online presence that captures their unique aesthetic and cultural heritage.",
    image: "/case/titled-lotus-coverimage.png",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Las Loungewear",
    subtitle: "",
    location: "Florida",
    description: "We designed a cozy digital experience for Las Loungewear, bringing their comfortable and stylish loungewear collection to life with an intuitive e-commerce platform that reflects their relaxed yet sophisticated brand essence.",
    image: "/case/las-loungewear- coverimage.png",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-100",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "HY Official",
    subtitle: "",
    location: "Florida",
    description: "We elevated HY Official's streetwear brand with a bold digital presence, creating an immersive online experience that captures their urban aesthetic and connects with their global community of fashion-forward enthusiasts.",
    image: "/case/hy-official-coverimage.png",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "Badri Al Shihhi",
    subtitle: "",
    location: "Oman",
    description: "We crafted a sophisticated personal brand identity for Badri Al Shihhi, designing a digital presence that reflects their unique vision and establishes them as a leading voice in the fashion industry.",
    image: "/case/badriaalshihhi-coverimage.png",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
    textColor: "text-white"
  }
];

const CaseStudiesSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Function to determine if a card should be faded based on scroll position
  const getCardOpacity = (cardIndex: number) => {
    return {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    };
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: false, margin: "0px 0px -50% 0px" }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-16">
            Work that speaks volumes.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories. Bold impact. A look at how we help brands transform ideas into industry-ready creations.
          </p>
        </motion.div>

        {/* Case Studies Cards Container */}
        <div className="relative">
          {caseStudies.map((study, index) => (
                        <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              viewport={{ once: false, margin: "0px 0px -10% 0px" }}
              className={`relative mb-8 md:mb-12 ${index > 0 ? 'md:-mt-80 lg:-mt-96' : ''}`}
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                className={`rounded-3xl shadow-xl overflow-hidden ${study.bgColor} relative min-h-[500px] md:min-h-[600px]`}
                whileInView={{ 
                  opacity: 1,
                  transition: { duration: 0.5 }
                }}
                viewport={{ once: false, margin: "0px 0px -30% 0px" }}
                style={{
                  opacity: 0.7
                }}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  {study.image && (
                    <img
                      src={study.image}
                      alt={`${study.title} cover`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50" />
                </div>

                {/* Content Layer */}
                <motion.div 
                  className="relative z-10 p-8 md:p-12 lg:p-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false, margin: "0px 0px -10% 0px" }}
                >
                  <div className="max-w-4xl">
                    {/* Case Study Number */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-sm md:text-base font-medium text-white/80 mb-4"
                    >
                      Case Study {String(study.id).padStart(2, '0')}
                    </motion.div>

                    {/* Title and Location */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="flex items-baseline gap-4 mb-2"
                    >
                      <h3 className={`text-3xl md:text-5xl lg:text-6xl font-semibold ${study.textColor} leading-tight`}>
                        {study.title}
                      </h3>
                      <span className="text-sm md:text-base font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap self-center">
                        {study.location}
                      </span>
                    </motion.div>
                    
                    {/* Subtitle */}
                    {study.subtitle && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className={`text-lg md:text-xl ${study.textColor}/70 mb-6 font-medium`}
                      >
                        {study.subtitle}
                      </motion.p>
                    )}

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className={`text-base md:text-lg ${study.textColor}/80 max-w-2xl leading-relaxed`}
                    >
                      {study.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="mt-8"
                    >
                      <button className="inline-flex items-center px-6 py-3 bg-[#CBB49A] hover:bg-[#B8A589] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        View Case Study
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Brand Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="absolute top-8 right-8 md:top-12 md:right-12 z-20"
                >
                  <img
                    src={`/logos/${study.title.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={`${study.title} logo`}
                    className={`h-auto bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg ${index === caseStudies.length - 1 ? 'w-20 md:w-28' : 'w-16 md:w-20'}`}
                    onError={(e) => {
                      // Fallback to text if logo doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="${index === caseStudies.length - 1 ? 'w-20 md:w-28' : 'w-16 md:w-20'} bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <span class="text-gray-800 font-semibold text-xs">${study.title.toUpperCase()}</span>
                        </div>
                      `;
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, margin: "0px 0px -50% 0px" }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your fashion brand?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 