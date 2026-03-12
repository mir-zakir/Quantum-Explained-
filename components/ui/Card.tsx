
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star } from 'lucide-react';

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  price?: string | number;
  badge?: string;
  basePath: string;
}

const Card: React.FC<CardProps> = ({ id, title, subtitle, imageUrl, price, badge = "Coming Soon", basePath }) => {
  return (
    <div className="group relative glass p-4 rounded-3xl border border-white/5 hover:border-sky-500/20 transition-all hover:-translate-y-2">
      {/* Coming Soon Badge */}
      <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-sky-500/20 border border-sky-500/30 backdrop-blur-md rounded-full">
        <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">{badge}</span>
      </div>

      <Link to={`${basePath}/${id}`} className="block relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-white font-bold flex items-center gap-2">View Details <ExternalLink size={16} /></span>
        </div>
      </Link>
      
      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-white group-hover:text-sky-400 transition-colors line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 text-sky-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold">5.0</span>
          </div>
        </div>
        <p className="text-slate-400 text-sm mb-4 line-clamp-1">{subtitle}</p>
        
        {price !== undefined && (
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
            <span className="text-2xl font-bold text-white">${price}</span>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all">
              Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
