import React from 'react';
import Section from './ui/Section';
import { SCHOOL_STATS } from '../constants';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <div className="bg-brand-900 py-16 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <Section className="relative z-10 !py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {SCHOOL_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-400 mb-2 font-serif">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-brand-100 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Stats;
