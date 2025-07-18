import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check, X, Search, MapPin, Building, Phone, Mail, User, MessageSquare } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    country: '',
    services: [] as string[],
    message: ''
  });
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  const services = [
    'Design',
    'Manufacturing',
    'End to End',
    'Consultation',
    'Other'
  ];

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const containerVariants = {
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
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#CBB49A]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#CBB49A]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#CBB49A] to-[#B8A589] rounded-full mb-6"
            >
              <MessageSquare className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-4 bg-gradient-to-r from-[#111111] to-[#333333] bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Ready to bring your fashion vision to life? Let's get started on your journey with Krazy Kreators.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2 text-[#CBB49A]" />
                  Your full name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-[#111111] placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#CBB49A]" />
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-[#111111] placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Phone and Company Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#CBB49A]" />
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-[#111111] placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="companyName" className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                  <Building className="w-4 h-4 mr-2 text-[#CBB49A]" />
                  Company/Brand name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-[#111111] placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                  placeholder="Your company or brand name"
                  required
                />
              </div>
            </div>

            {/* Address Field */}
            <div className="relative">
              <label htmlFor="address" className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#CBB49A]" />
                Address <span className="text-gray-400 font-normal ml-1">(Optional)</span>
              </label>
              <textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-[#111111] placeholder-gray-400 bg-gray-50/50 hover:bg-white resize-none"
                placeholder="Enter your address"
                rows={3}
              />
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#CBB49A]" />
                Country
              </label>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCountryOpen(!isCountryOpen)}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-left flex items-center justify-between bg-gray-50/50 hover:bg-white"
                >
                  <span className={formData.country ? 'text-[#111111]' : 'text-gray-400'}>
                    {formData.country || 'Select your country'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCountryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                  >
                    {/* Search Input */}
                    <div className="p-3 border-b border-gray-100">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          placeholder="Search countries..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent text-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Countries List */}
                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.map((country) => (
                        <button
                          key={country}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, country: country }));
                            setIsCountryOpen(false);
                            setCountrySearch('');
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 text-[#111111] border-b border-gray-50 last:border-b-0"
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Services Multi-Select */}
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-2">
                Services Needed
              </label>
              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-left flex items-center justify-between bg-gray-50/50 hover:bg-white min-h-[56px]"
                >
                  <div className="flex flex-wrap gap-2">
                    {formData.services.length > 0 ? (
                      formData.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#CBB49A]/20 to-[#B8A589]/20 text-[#111111] text-sm rounded-full border border-[#CBB49A]/30"
                        >
                          {service}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleServiceToggle(service);
                            }}
                            className="ml-2 hover:bg-[#CBB49A]/30 rounded-full p-0.5 transition-colors duration-200"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400">Select services you need</span>
                    )}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl"
                  >
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 text-[#111111] flex items-center justify-between border-b border-gray-50 last:border-b-0 first:rounded-t-xl last:rounded-b-xl"
                      >
                        <span>{service}</span>
                        {formData.services.includes(service) && (
                          <Check className="w-5 h-5 text-[#CBB49A]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-[#111111] mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-[#CBB49A]" />
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBB49A] focus:border-transparent transition-all duration-300 text-[#111111] placeholder-gray-400 bg-gray-50/50 hover:bg-white resize-none"
                placeholder="Tell us about your project or any specific requirements..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <PrimaryButton
              type="submit"
              size="lg"
              className="w-full"
            >
              Get Started
            </PrimaryButton>

            {/* Subtext */}
            <p className="text-center text-sm text-[#666666] mt-6">
              Once submitted, our team will reach out within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormSection; 