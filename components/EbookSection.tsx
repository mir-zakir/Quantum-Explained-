
import React from 'react';
import { BookOpen, CheckCircle, Download } from 'lucide-react';

const EbookSection: React.FC = () => {
  return (
    <section id="ebook" className="py-24 container mx-auto px-4 overflow-hidden scroll-mt-24">
      <div className="glass p-8 md:p-16 rounded-[3rem] border border-white/10 flex flex-col lg:flex-row items-center gap-16 relative">
        {/* Glow effect behind book */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Ebook Mockup Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
          <div className="relative group transition-transform duration-700 hover:rotate-y-12">
            <div className="w-64 h-96 md:w-80 md:h-[30rem] bg-gradient-to-br from-sky-400 to-purple-600 rounded-r-2xl shadow-2xl flex flex-col p-8 text-slate-950 overflow-hidden border-l-8 border-slate-900">
               <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Visual Guide</div>
               <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">THE QUANTUM HANDBOOK</h3>
               <div className="mt-auto flex items-center gap-2">
                 <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center font-bold text-sky-400 text-xs">Q</div>
                 <span className="font-bold text-xs">QUANTUM EXPLAINED</span>
               </div>
               {/* Decorative lines */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rotate-45 translate-x-16 -translate-y-16"></div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none rounded-r-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            <BookOpen size={14} />
            Digital Masterpiece
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Visualizing the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">Impossible.</span>
          </h2>
          
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Stop struggling with abstract equations. Our flagship visual handbook breaks down 
            complex quantum concepts into intuitive diagrams that stick.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "150+ Interactive visual diagrams",
              "Subatomic particle cheat sheets",
              "Intuitive guide to Wave-Particle Duality",
              "Curated research roadmap for students"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-400">
                <CheckCircle size={18} className="text-sky-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-bold rounded-xl hover:bg-sky-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-white/5">
            <Download size={20} />
            Download Sample Chapter
          </button>
          <p className="mt-4 text-xs text-slate-500 text-center sm:text-left">
            Available in PDF and EPUB. High-resolution print-ready files included.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
