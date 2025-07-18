import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, LayoutDashboard, Layers, ShoppingBag, Boxes } from 'lucide-react';
import { Card } from '../components/ui/card';

const features = [
  {
    icon: Users,
    title: "Design Team + PM",
    description: "Dedicated design team with your own project manager to keep everything on track.",
  },
  {
    icon: Eye,
    title: "Continuous Supervision",
    description: "We monitor your product journey from sketch to shipment — no blind spots.",
  },
  {
    icon: LayoutDashboard,
    title: "Client Dashboard",
    description: "Track your sales and purchase orders in real time with our custom dashboard.",
  },
  {
    icon: Layers,
    title: "No MOQ",
    description: "Start small. We don’t believe in minimums — we believe in momentum.",
  },
  {
    icon: ShoppingBag,
    title: "End-to-End Procurement",
    description: "We test, source, and procure so you avoid costly sourcing mistakes.",
  },
  {
    icon: Boxes,
    title: "Raw Material Inventory",
    description: "Stay cost-effective and season-ready with our inventory planning system.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const UniqueFeaturesSection: React.FC = () => (
  <section className="w-full bg-white py-24 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-16">
        What Makes Krazy Kreators Unique
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature) => (
          <motion.div 
            key={feature.title} 
            variants={card}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card className="bg-[#FAFAFA] rounded-2xl shadow-md hover:shadow-lg p-6 border border-transparent hover:border-[#CBB49A] transition-all duration-300">
              <div className="flex items-center justify-start">
                <span className="bg-[#CBB49A]/20 p-3 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#EF4C67]" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#111]">{feature.title}</h3>
                <p className="text-sm md:text-base text-neutral-600 mt-2">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default UniqueFeaturesSection; 