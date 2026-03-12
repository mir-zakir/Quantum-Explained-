
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Store', path: '/store' },
    { name: 'Ebooks', path: '/ebooks' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-slate-950 transition-transform group-hover:rotate-12">Q</div>
          <span className="font-heading font-bold text-xl tracking-tighter">QUANTUM EXPLAINED</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${isActive(link.path) ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-white text-slate-950 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-sky-400 transition-all"
          >
            Follow
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-b p-4 flex flex-col gap-2 lg:hidden animate-in slide-in-from-top duration-300">
          <Link to="/" className="p-4 border-b border-white/5 font-medium" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`p-4 border-b border-white/5 font-medium ${isActive(link.path) ? 'text-sky-400' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          <a href="https://instagram.com" target="_blank" className="mt-4 p-4 bg-sky-500 text-slate-950 rounded-xl font-bold text-center" onClick={() => setIsMenuOpen(false)}>FOLLOW NOW</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
