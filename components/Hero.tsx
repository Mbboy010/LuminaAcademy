import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=school"
          alt="Lumina Academy Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-400 text-brand-200 text-sm font-semibold tracking-wider mb-4 backdrop-blur-sm">
            EST. 1954
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Illuminating Minds, <br />
            <span className="text-brand-400">Inspiring Futures</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed">
            Lumina Academy is dedicated to nurturing intellectual curiosity, creativity, and character in a supportive and diverse community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="#admissions"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold transition-all flex items-center justify-center"
            >
              Virtual Tour
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
