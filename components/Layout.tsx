
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarField from './StarField';
import Toast from './ui/Toast';

interface LayoutProps {
  children: React.ReactNode;
}

const DATA_TAGS = [
  "ℏ = 1.054e-34 J·s",
  "c = 299,792,458 m/s",
  "G = 6.674e-11 m³/kg·s²",
  "k_B = 1.38e-23 J/K",
  "m_e = 9.109e-31 kg",
  "λ = h/p",
  "E = mc²",
  "iℏ ∂/∂t Ψ = Ĥ Ψ"
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setIsToastVisible(true);
  };

  return (
    <div className="relative min-h-screen selection:bg-sky-500 selection:text-slate-950">
      <StarField />
      
      {/* Blueprint Grid Overlay */}
      <div className="fixed inset-0 z-[-1] blueprint-grid pointer-events-none"></div>
      
      {/* Mesh Background */}
      <div className="fixed inset-0 z-[-2] mesh-bg opacity-30"></div>

      {/* Floating Data Tags */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {DATA_TAGS.map((tag, i) => (
          <div 
            key={i}
            className="absolute text-[9px] font-mono text-sky-500/20 whitespace-nowrap animate-float-tag"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </div>
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />
    </div>
  );
};

export default Layout;
