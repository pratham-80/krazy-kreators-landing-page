import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import ClientLogosSection from './components/ClientLogosSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import UniqueFeaturesSection from './components/UniqueFeaturesSection';
import ComparisonSection from './components/ComparisonSection';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import LeadFormSection from './components/LeadFormSection';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutSection />
              <VideoSection />
              <ServicesSection />
              <ClientLogosSection />
              <UniqueFeaturesSection />
              <ComparisonSection />
              <CTASection />
              <CaseStudiesSection />
              <TestimonialsSection />
              <FAQSection />
              <LeadFormSection />
              <Footer />
            </>
          } />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/sustainable-manufacturing" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
