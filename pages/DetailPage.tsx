
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ChevronLeft, ShoppingCart, Zap, Clock, User, FileText } from 'lucide-react';
import { PRODUCTS, EBOOKS, COURSES, RESOURCES } from '../data/mockData';
import Toast from '../components/ui/Toast';

const DetailPage: React.FC<{ type: 'store' | 'ebooks' | 'courses' | 'resources' }> = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<any>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let found = null;
    if (type === 'store') found = PRODUCTS.find(p => p.id === id);
    if (type === 'ebooks') found = EBOOKS.find(e => e.id === id);
    if (type === 'courses') found = COURSES.find(c => c.id === id);
    if (type === 'resources') found = RESOURCES.find(r => r.id === id);
    
    if (!found) navigate('/404');
    else setItem(found);
  }, [id, type, navigate]);

  if (!item) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <ChevronLeft size={20} /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-sky-500/10 rounded-[3rem] blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
            <img 
              src={item.imageUrl} 
              alt={item.title || item.name} 
              className="relative w-full aspect-square object-cover rounded-[3rem] border border-white/10 shadow-2xl" 
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
               <span className="px-4 py-1 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest rounded-full border border-sky-500/20">
                 Coming Soon
               </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {item.title || item.name}
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {item.description || "The definitive resource for mastering this corner of the quantum world."}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="glass p-4 rounded-2xl border-white/5">
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Sector</div>
                <div className="text-white font-bold">{item.category || item.type || "Education"}</div>
              </div>
              {item.price && (
                <div className="glass p-4 rounded-2xl border-white/5">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Pricing</div>
                  <div className="text-white font-bold">${item.price}</div>
                </div>
              )}
              {item.duration && (
                <div className="glass p-4 rounded-2xl border-white/5">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Length</div>
                  <div className="text-white font-bold">{item.duration}</div>
                </div>
              )}
              {item.level && (
                <div className="glass p-4 rounded-2xl border-white/5">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Difficulty</div>
                  <div className="text-white font-bold">{item.level}</div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowToast(true)}
                className="px-10 py-5 bg-white text-slate-950 font-bold rounded-2xl hover:bg-sky-400 transition-all flex items-center justify-center gap-2"
              >
                <Zap size={20} fill="currentColor" /> Purchase Interest
              </button>
              <button 
                className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
              >
                Share Resource
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toast message="Payment integration coming soon!" isVisible={showToast} onClose={() => setShowToast(false)} />
    </Layout>
  );
};

export default DetailPage;
