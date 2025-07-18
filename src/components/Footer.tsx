import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Palette, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Palette, href: '#', label: 'Portfolio' },
  ];

  const quickLinks = [
    { href: '#', label: 'About' },
    { href: '#', label: 'Case Studies' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Contact' },
  ];

  const services = [
    { href: '#', label: 'Design' },
    { href: '#', label: 'Sampling' },
    { href: '#', label: 'Production' },
    { href: '#', label: 'Tech Packs' },
  ];

  return (
    <footer className="bg-[#121212] text-[#F5F5F5]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          
          {/* Column 1: Logo & Tagline */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center mb-4"
              >
                <img 
                  src="/Logo.svg" 
                  alt="Krazy Kreators" 
                  className="h-10 w-auto"
                />
              </motion.div>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Design. Sample. Produce. Zero MOQ.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-[#A0A0A0] hover:text-[#CBB49A] transition-colors duration-300 text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBB49A] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div 
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a 
                    href={service.href} 
                    className="text-[#A0A0A0] hover:text-[#CBB49A] transition-colors duration-300 text-sm relative group"
                  >
                    {service.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBB49A] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Stay Connected */}
          <motion.div 
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Connected</h4>
            
            {/* Email */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="w-5 h-5 text-[#CBB49A]" />
                <span className="text-sm text-[#A0A0A0]">Email:</span>
              </div>
              <a 
                href="mailto:hello@krazykreators.com" 
                className="text-sm text-[#F5F5F5] hover:text-[#CBB49A] transition-colors duration-300"
              >
                hello@krazykreators.com
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-sm text-[#A0A0A0] mb-4">Follow us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-[#333333] hover:border-[#CBB49A] rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-[#A0A0A0] group-hover:text-[#CBB49A] transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-sm text-[#A0A0A0]">
              © {currentYear} Krazy Kreators. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#A0A0A0] hover:text-[#CBB49A] transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-[#333333]">|</span>
              <a href="#" className="text-[#A0A0A0] hover:text-[#CBB49A] transition-colors duration-300">
                Terms & Conditions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 