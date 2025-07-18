import { motion } from "framer-motion";
import { Button } from '../components/ui/button';
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the{" "}
            <span className="text-[#CBB49A]">Difference?</span>
          </h2>
          
          <p className="text-lg text-white/90 mb-6">
            Transform your fashion brand with cutting-edge technology.
          </p>

          <Button 
            size="lg"
            className="bg-[#CBB49A] hover:bg-[#B8A589] text-white font-semibold px-6 py-3 text-base rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 