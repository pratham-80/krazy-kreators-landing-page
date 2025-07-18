import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();
  
  // Check if we're on the home page (hero section)
  const isHomePage = location.pathname === '/';

  const navItems: NavItem[] = [
    {
      label: 'Solutions',
      dropdown: [
        { label: 'Services', href: '#services' },
        { label: 'Product Categories', href: '#categories' }
      ]
    },
    {
      label: 'Portfolio',
      href: '#portfolio'
    },
    {
      label: 'Blogs',
      href: '#blogs'
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Educational Videos', href: '#videos' },
        { label: 'Guides', href: '#guides' },
        { label: 'Tech Pack', href: '#tech-pack' },
        { label: 'Fashion Reports', href: '#reports' }
      ]
    },
    {
      label: 'Company',
      dropdown: [
        { label: 'About', href: '#about' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Careers', href: '#careers' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        const dropdown = dropdownRefs.current[activeDropdown];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleKeyDown = (event: React.KeyboardEvent, label: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDropdownToggle(label);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || !isHomePage)
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/">
              <img 
                src="/Logo.svg" 
                alt="Krazy Kreators" 
                className="h-10 lg:h-12 w-auto cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div className="relative" ref={(el) => { dropdownRefs.current[item.label] = el; }}>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      onKeyDown={(e) => handleKeyDown(e, item.label)}
                      className={`text-sm lg:text-base font-medium transition-all duration-300 relative group flex items-center space-x-1 ${
                        (isScrolled || !isHomePage) ? 'text-gray-700 hover:text-gray-900' : 'text-gray-200 hover:text-white'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBB49A] transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50"
                        >
                          <div className="space-y-3">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => {
                              // Define images for each dropdown item
                              const getImageUrl = (label: string) => {
                                const imageMap: { [key: string]: string } = {
                                  // Solutions
                                  'Services': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=120&fit=crop&crop=center',
                                  'Product Categories': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=120&fit=crop&crop=center',
                                  

                                  
                                  // Resources
                                  'Educational Videos': '/images/educational-videos.jpg',
                                  'Guides': '/images/fashion-guides.jpg',
                                  'Tech Pack': '/images/tech-pack.jpg',
                                  'Fashion Reports': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=120&fit=crop&crop=center',
                                  
                                  // Company
                                  'About': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=120&fit=crop&crop=center',
                                  'Pricing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=120&fit=crop&crop=center',
                                  'Careers': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=120&fit=crop&crop=center',
                                };
                                return imageMap[label] || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=120&fit=crop&crop=center';
                              };

                              return (
                                <motion.a
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                                  className="group relative block h-24 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                  role="menuitem"
                                >
                                  {/* Background Image */}
                                  <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${getImageUrl(dropdownItem.label)})` }}
                                  />
                                  
                                  {/* Dark overlay for text readability */}
                                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                                  
                                  {/* Text overlay */}
                                  <div className="relative h-full flex items-center justify-center p-4">
                                    <span className="text-white font-semibold text-sm text-center leading-tight drop-shadow-lg">
                                      {dropdownItem.label}
                                    </span>
                                  </div>
                                  
                                  {/* Hover effect overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-[#CBB49A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  item.label === 'Blogs' ? (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -2 }}
                    >
                      <Link
                        to="/blogs"
                        className={`text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                          (isScrolled || !isHomePage) ? 'text-gray-700 hover:text-gray-900' : 'text-gray-200 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBB49A] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -2 }}
                      className={`text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                        (isScrolled || !isHomePage) ? 'text-gray-700 hover:text-gray-900' : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBB49A] transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  )
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <PrimaryButton size="sm">
              Get In Touch
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                (isScrolled || !isHomePage) ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                        aria-expanded={activeDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <motion.a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    item.label === 'Blogs' ? (
                      <Link
                        to="/blogs"
                        className="block text-gray-700 font-medium py-2 hover:text-[#CBB49A] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-gray-700 font-medium py-2 hover:text-[#CBB49A] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </motion.div>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <PrimaryButton size="md" className="w-full">
                  Get In Touch
                </PrimaryButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 