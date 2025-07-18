import React from 'react';
import { motion } from 'framer-motion';

const DroverCaseStudy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full md:w-[70%] mx-auto"
    >
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden relative">
        {/* Cover Image */}
        <div className="relative h-64 w-full">
          <img
            src="/case/drover-coverimage.png"
            alt="Drover Fashion Collection"
            className="w-full h-full object-cover rounded-t-3xl"
            onError={(e) => {
              // Fallback to a placeholder if image doesn't load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-sm">Drover Cover Image</p>
                  </div>
                </div>
              `;
            }}
          />
          
          {/* Company Logo Overlay */}
          <div className="absolute bottom-4 left-4">
            <img
              src="/logos/drover.png"
              alt="Drover Logo"
              className="w-28 h-auto bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg"
              onError={(e) => {
                // Fallback to text if logo doesn't load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-28 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <span class="text-gray-800 font-semibold text-sm">DROVER</span>
                  </div>
                `;
              }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-10">
          {/* Project Title (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Case Study
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-700 text-base md:text-lg leading-relaxed mb-8"
          >
            Drover teamed up with Krazy Kreators to bring their D2C fashion line to life — from digital storefront to sustainable packaging.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="inline-flex items-center rounded-full px-5 py-2 bg-black text-white hover:bg-neutral-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DroverCaseStudy; 