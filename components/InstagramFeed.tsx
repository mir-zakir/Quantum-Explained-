
import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { INSTAGRAM_POSTS } from '../constants';

const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-slate-950/50 relative overflow-hidden scroll-mt-24">
       {/* Background accent */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <SectionHeader 
            title="Latest from the Feed" 
            subtitle="Educational carousels and cinematic reels watched by millions."
            align="left"
          />
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all border border-sky-500/20 text-sky-400"
          >
            <Instagram size={20} />
            @QuantumExplained
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div key={post.id} className="relative group cursor-pointer rounded-2xl overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-sm font-medium mb-4 line-clamp-2 italic">"{post.caption}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-rose-400">
                    <Heart size={16} fill="currentColor" />
                    <span className="text-xs font-bold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-400">
                    <MessageCircle size={16} fill="currentColor" />
                    <span className="text-xs font-bold">Comment</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
