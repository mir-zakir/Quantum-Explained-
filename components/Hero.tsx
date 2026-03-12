
import React from 'react';
import { ArrowDown, Instagram, Mail, Settings } from 'lucide-react';
import { useComplexity, ComplexityLevel } from '../context/ComplexityContext';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const { level, setLevel } = useComplexity();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const levels: ComplexityLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

  // Define words to be highlighted per level
  const highlights: Record<ComplexityLevel, string> = {
    Beginner: "UNSEEN UNIVERSE.",
    Intermediate: "QUANTUM DOMAIN.",
    Advanced: "WAVEFUNCTION."
  };

  const content = {
    Beginner: {
      title: "UNFOLD THE UNSEEN UNIVERSE.",
      desc: "The ultimate destination for curious minds exploring the fabric of existence. Quantum mechanics simplified visually."
    },
    Intermediate: {
      title: "NAVIGATE THE QUANTUM DOMAIN.",
      desc: "Deconstructing field theories and subatomic dynamics. Advanced visual logic for the modern research enthusiast."
    },
    Advanced: {
      title: "DECONSTRUCTING THE WAVEFUNCTION.",
      desc: "Ψ(x,t) — Exploring the probabilistic architecture of reality. Non-local entanglement and holographic insights."
    }
  };

  const renderTitle = (title: string, highlight: string) => {
    const parts = title.split(highlight);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-purple-400 glow-text-blue">
            {highlight}
          </span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Complexity Slider */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4 text-slate-500">
            <Settings size={14} className="animate-spin-slow" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Observer Mode</span>
          </div>
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  level === l ? 'bg-sky-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8 border border-sky-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Next Gen Science Education
        </div>
        
        <div className="min-h-[12rem] flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={level + 'title'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none"
            >
              {renderTitle(content[level].title, highlights[level])}
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p 
              key={level + 'desc'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {content[level].desc}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#newsletter" 
            onClick={(e) => scrollToSection(e, 'newsletter')}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-bold rounded-2xl hover:bg-sky-400 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5"
          >
            <Mail size={18} />
            Join The Singularity
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank"
            className="w-full sm:w-auto px-10 py-5 glass border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Instagram size={18} />
            Follow The Journey
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <a 
          href="#features" 
          onClick={(e) => scrollToSection(e, 'features')}
          className="text-slate-500 hover:text-white transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
