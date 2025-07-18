import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, User, Share2, ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blogs Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-24 left-8 z-40"
      >
        <Link
          to="/blogs"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Blogs</span>
        </Link>
      </motion.div>

      {/* Header Section */}
      <motion.header
        style={{ y }}
        className="relative h-[70vh] min-h-[500px] flex items-end"
      >
        {/* Featured Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center"
            alt="Sustainable Manufacturing"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-5xl mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Mike Chen</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>February 10, 2025</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Sustainable Manufacturing: The Green Revolution in Fashion
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
              How eco-conscious practices are reshaping the industry and creating a more responsible future for fashion production.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Introduction */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Sustainability isn't just a buzzword anymore—it's a business imperative. As consumers become more environmentally conscious, fashion brands are under increasing pressure to adopt sustainable manufacturing practices. From eco-friendly materials to zero-waste production, the green revolution is reshaping the industry in profound ways.
              </p>

              {/* Pull Quote */}
              <motion.blockquote
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="border-l-4 border-[#ED7424] pl-8 py-4 my-12 bg-gradient-to-r from-[#FFF9F4] to-white rounded-r-lg"
              >
                <p className="text-2xl font-semibold text-gray-800 italic leading-relaxed">
                  "The future of fashion isn't just about style—it's about responsibility. Every decision we make in manufacturing has a ripple effect on our planet."
                </p>
                <cite className="text-sm text-gray-600 mt-4 block">— Industry Expert</cite>
              </motion.blockquote>

              {/* Section 1 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Environmental Impact of Traditional Manufacturing</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Traditional fashion manufacturing has long been associated with significant environmental damage. The industry is responsible for approximately 10% of global carbon emissions, with textile production alone contributing to water pollution and excessive waste generation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  From the cultivation of raw materials to the final product, each step in the traditional manufacturing process leaves an environmental footprint. Cotton farming, for instance, requires vast amounts of water and pesticides, while synthetic fiber production releases harmful chemicals into the atmosphere.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Environmental Challenges:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-[#ED7424] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Water consumption and pollution from dyeing processes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-[#ED7424] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Carbon emissions from transportation and production</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-[#ED7424] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Textile waste ending up in landfills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-[#ED7424] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Chemical pollution from synthetic materials</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* Section 2 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovations Driving Sustainable Change</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The fashion industry is witnessing a remarkable transformation as innovative technologies and practices emerge to address environmental concerns. These advancements are not just reducing harm—they're creating new opportunities for efficiency and creativity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gradient-to-br from-[#FDEDD7] to-[#FAD6AE] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly Materials</h3>
                    <p className="text-gray-700">
                      From organic cotton to recycled polyester, sustainable materials are becoming more accessible and cost-effective than ever before.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FAD6AE] to-[#F6B97B] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Zero-Waste Production</h3>
                    <p className="text-gray-700">
                      Advanced cutting techniques and pattern optimization are minimizing fabric waste and maximizing resource efficiency.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Digital technologies are playing a crucial role in this transformation. 3D design software allows designers to create and test garments virtually, reducing the need for physical prototypes. AI-powered supply chain optimization helps manufacturers reduce waste and improve efficiency.
                </p>
              </motion.section>

              {/* Section 3 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Case for Sustainability</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond environmental responsibility, sustainable manufacturing practices are proving to be sound business decisions. Companies that embrace green practices are seeing improved brand perception, increased customer loyalty, and often, reduced operational costs.
                </p>

                <div className="border-l-4 border-[#F19146] pl-6 py-4 my-8">
                  <p className="text-lg text-gray-700 italic">
                    "Sustainable practices aren't just good for the planet—they're good for business. Our customers are increasingly making purchasing decisions based on environmental impact, and companies that adapt are seeing significant competitive advantages."
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The financial benefits extend beyond customer perception. Energy-efficient manufacturing processes often result in lower utility costs. Waste reduction programs can significantly decrease material expenses. And as regulations around environmental impact become stricter, early adopters of sustainable practices are better positioned to comply with future requirements.
                </p>
              </motion.section>

              {/* Section 4 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Ahead: The Future of Green Fashion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  As we look to the future, sustainable manufacturing will become the standard rather than the exception. The fashion industry is on the cusp of a complete transformation, driven by consumer demand, technological innovation, and environmental necessity.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The next decade will likely see the widespread adoption of circular fashion models, where garments are designed to be recycled or biodegraded at the end of their lifecycle. We'll see more brands embracing transparency, allowing consumers to trace the environmental impact of their purchases from raw material to final product.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The green revolution in fashion isn't just about saving the planet—it's about creating a more thoughtful, responsible, and ultimately, more beautiful industry. As manufacturers, designers, and consumers, we all have a role to play in this transformation.
                </p>
              </motion.section>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="sticky top-32 space-y-6"
            >
              {/* Share Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-3">
                  <button className="p-2 bg-[#ED7424] text-white rounded-full hover:bg-[#F19146] transition-colors duration-200">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-[#ED7424] text-white rounded-full hover:bg-[#F19146] transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-[#ED7424] text-white rounded-full hover:bg-[#F19146] transition-colors duration-200">
                    <Facebook className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-gradient-to-br from-[#FFF9F4] to-[#FDEDD7] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Mike Chen"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Mike Chen</p>
                    <p className="text-sm text-gray-600">Sustainability Expert</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Mike is a leading voice in sustainable fashion manufacturing, with over 15 years of experience in eco-friendly production practices.
                </p>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="bg-gradient-to-r from-[#FFF9F4] to-[#FDEDD7] py-16"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how sustainable practices can revolutionize your fashion production process.
          </p>
          <button className="bg-gradient-to-r from-[#CBB49A] to-[#433838] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Let's Talk Sustainability
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPost; 