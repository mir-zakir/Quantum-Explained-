
import React from 'react';
import { Instagram, Youtube, Twitter, Github } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#' + id);
      // Timeout to wait for navigation to home before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white flex items-center justify-center font-bold text-xs uppercase">Q</div>
              <span className="font-heading font-bold text-2xl tracking-tighter uppercase italic">Quantum Explained</span>
            </div>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              Decoding the fundamental systems of reality. A dedicated portal for subatomic research, astrophysics, and advanced computational insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Navigation</h4>
              <ul className="space-y-4 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                <li><a href="#features" onClick={(e) => handleSectionLink(e, 'features')} className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#ebook" onClick={(e) => handleSectionLink(e, 'ebook')} className="hover:text-white transition-colors">Archive</a></li>
                <li><a href="#store" onClick={(e) => handleSectionLink(e, 'store')} className="hover:text-white transition-colors">Collection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Social</h4>
              <ul className="space-y-4 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Quantum Explained. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
