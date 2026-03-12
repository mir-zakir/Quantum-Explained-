
import React from 'react';
import SectionHeader from './SectionHeader';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 container mx-auto px-4 relative scroll-mt-24">
      <SectionHeader 
        title="Explore The Cosmos" 
        subtitle="Bridging the gap between complex theoretical physics and everyday intuition."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, i) => (
          <motion.div 
            key={feature.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.15)"
            }}
            className="glass p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all cursor-default group"
          >
            <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
