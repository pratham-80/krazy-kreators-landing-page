import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  image: string;
  readTime: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories: Category[] = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'ecommerce', name: 'Ecommerce', count: 4 },
    { id: 'digital-marketing', name: 'Digital Marketing', count: 3 },
    { id: 'fashion-tech', name: 'Fashion Tech', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Why your e-commerce store needs a website revamp",
      excerpt: "Picture this: A customer visits your store, browses, and leaves without making a purchase. Sound familiar? In today's digital-first world, your website is often the first (and sometimes only) impression customers have of your brand. A dated, slow, or confusing website can drive potential customers away faster than you can say 'shopping cart'.",
      category: "Ecommerce",
      author: "Jane Doe",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&crop=center",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Beyond Clicks and Followers: The New Digital Marketing Imperative",
      excerpt: "The silent revolution in marketing is here. As we move into 2025, the landscape of digital marketing is undergoing a fundamental shift. It's no longer about chasing vanity metrics or building follower counts. The new imperative is about creating meaningful connections, driving real business outcomes, and building sustainable growth strategies.",
      category: "Digital Marketing",
      author: "John Smith",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "February 22, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&crop=center",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Future of Fashion Manufacturing: AI and Automation",
      excerpt: "The fashion industry is on the brink of a technological revolution. From AI-powered design tools to automated production lines, the way we create, manufacture, and distribute fashion is changing rapidly. This transformation isn't just about efficiency—it's about sustainability, customization, and meeting the demands of a new generation of consumers.",
      category: "Fashion Tech",
      author: "Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      date: "February 18, 2025",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=300&fit=crop&crop=center",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Sustainable Manufacturing: The Green Revolution in Fashion",
      excerpt: "Sustainability isn't just a buzzword anymore—it's a business imperative. As consumers become more environmentally conscious, fashion brands are under increasing pressure to adopt sustainable manufacturing practices. From eco-friendly materials to zero-waste production, the green revolution is reshaping the industry.",
      category: "Manufacturing",
      author: "Mike Chen",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      date: "February 10, 2025",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop&crop=center",
      readTime: "8 min read"
    }
  ];

  const recentPosts = blogPosts.slice(0, 3);

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().replace(' ', '-') === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Ecommerce': 'bg-blue-100 text-blue-800',
      'Digital Marketing': 'bg-purple-100 text-purple-800',
      'Fashion Tech': 'bg-pink-100 text-pink-800',
      'Manufacturing': 'bg-green-100 text-green-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
            Ideas Worth Sharing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Dive into the world of fashion-tech innovation. From e-commerce strategies to sustainable manufacturing, 
            we share the insights that drive the industry forward.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden group cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {post.id === 4 ? (
                      <Link to="/blogs/sustainable-manufacturing">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CBB49A] transition-colors duration-300 cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CBB49A] transition-colors duration-300 cursor-pointer">
                        {post.title}
                      </h3>
                    )}
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                            <span>•</span>
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-80 space-y-8"
          >
            {/* Category Filter */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
              
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg bg-white text-left hover:border-gray-300 transition-colors duration-200"
                >
                  <span className="text-gray-700">
                    {categories.find(cat => cat.id === selectedCategory)?.name || 'All Posts'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                          selectedCategory === category.id ? 'bg-gray-50 text-[#CBB49A]' : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex space-x-3 group cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#CBB49A] transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 