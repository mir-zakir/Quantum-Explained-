
import React from 'react';
import SectionHeader from './SectionHeader';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { STORE_PRODUCTS } from '../constants';

const StoreSection: React.FC = () => {
  return (
    <section id="store" className="py-24 relative scroll-mt-24">
      {/* Grid background subtler for store */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <SectionHeader 
            title="Cosmic Laboratory" 
            subtitle="Wearable science and aesthetic research tools for the modern explorer."
            align="left"
          />
          <a href="#" className="flex items-center gap-2 text-sky-400 font-bold group mb-12 md:mb-20">
            View All Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STORE_PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 glass border-white/5">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                  {product.category}
                </div>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl">
                  <ShoppingBag size={20} />
                </button>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-sky-400 transition-colors">{product.name}</h4>
                <div className="flex items-center gap-1 text-sky-400">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold">5.0</span>
                </div>
              </div>
              {/* Fixed: prepended $ to display numeric price correctly */}
              <p className="text-slate-400 font-medium">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Brand Banner */}
        <div className="mt-20 p-8 glass rounded-3xl border border-sky-500/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">Premium Quality Only</h3>
            <p className="text-slate-400 text-sm">Sustainable materials, ethically sourced, and scientifically accurate designs.</p>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-400">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Cotton</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-400">Global</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Shipping</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-400">24/7</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
