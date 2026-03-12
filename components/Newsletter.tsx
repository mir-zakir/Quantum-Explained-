
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-24 container mx-auto px-4 scroll-mt-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-900/40 to-purple-900/40 p-12 md:p-24 border border-white/10 text-center">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            JOIN THE <span className="text-sky-400">SINGULARITY</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed">
            Weekly breakthroughs, simplified. No noise, just high-density science insights 
            delivered directly to your cognitive inbox.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-grow px-6 py-4 rounded-xl bg-slate-900/80 border border-white/10 focus:border-sky-500 focus:outline-none transition-all text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-sky-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 text-sky-400 animate-in zoom-in duration-500">
              <CheckCircle2 size={64} />
              <div className="text-2xl font-bold uppercase italic">Sequence Initiated.</div>
              <p className="text-slate-300">Welcome aboard. Check your inbox for confirmation.</p>
            </div>
          )}
          
          <p className="mt-8 text-sm text-slate-500">
            Join 85,000+ researchers, students, and tech enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
