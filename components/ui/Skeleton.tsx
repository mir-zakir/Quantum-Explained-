
import React from 'react';

export const SkeletonCard = () => (
  <div className="glass p-4 rounded-3xl border border-white/5 animate-pulse">
    <div className="aspect-[4/5] bg-white/5 rounded-2xl mb-6"></div>
    <div className="h-6 bg-white/5 rounded-full w-3/4 mb-4"></div>
    <div className="h-4 bg-white/5 rounded-full w-1/2 mb-6"></div>
    <div className="flex justify-between pt-4 border-t border-white/5">
      <div className="h-8 bg-white/5 rounded-full w-1/4"></div>
      <div className="h-8 bg-white/5 rounded-full w-1/4"></div>
    </div>
  </div>
);

export const SkeletonGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
  </div>
);
