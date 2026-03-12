
import React from 'react';
import SectionHeader from './SectionHeader';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Voice of the Community" 
          subtitle="Trusted by leading academics and aspiring engineers globally."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-sky-500/20 rounded-full flex items-center justify-center">
                <span className="text-sky-400 font-bold">“</span>
              </div>
              <p className="text-slate-300 italic mb-8 relative z-10">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-sky-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
