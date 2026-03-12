
import React from 'react';
import { Layout } from '../components/Layout';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="text-[12rem] font-bold tracking-tighter text-white/5 leading-none absolute z-0 select-none">404</h1>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Lost in the <span className="text-sky-400">Void</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-md mx-auto">
            The page you're looking for has collapsed into a singularity or never existed in this dimension.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-sky-400 transition-all"
          >
            <Home size={20} /> Return to Universe
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
