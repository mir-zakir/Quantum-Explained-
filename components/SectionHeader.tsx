
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const marginClass = align === 'center' ? 'mx-auto' : '';
  
  return (
    <div className={`mb-16 md:mb-20 ${alignClass}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-lg md:text-xl max-w-2xl ${marginClass} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
