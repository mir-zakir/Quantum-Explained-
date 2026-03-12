
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const QuantumSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();

      if (!isCollapsed) {
        // Draw Wavefunction
        for (let x = 0; x < w; x++) {
          const freq = 0.02;
          const amp = Math.sin(x * 0.005 + timeRef.current * 0.01) * 40;
          const y = centerY + Math.sin(x * freq + timeRef.current * 0.1) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
      } else {
        // Draw Collapsed State (Dirac Delta approximation)
        const peakX = w / 2;
        for (let x = 0; x < w; x++) {
          const dist = Math.abs(x - peakX);
          const y = centerY - Math.exp(-dist * 0.5) * 80;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        // Draw the point
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(peakX, centerY - 80, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(peakX, centerY);
        ctx.lineTo(peakX, centerY - 80);
      }
      ctx.stroke();

      timeRef.current += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isCollapsed]);

  return (
    <div className="glass p-8 rounded-3xl border-sky-500/20 max-w-2xl mx-auto my-12 overflow-hidden relative group">
      <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-widest text-sky-400/50">
        Lab simulation // 001
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">The Measurement Problem</h3>
      <p className="text-slate-400 text-sm mb-8">Click to interact with the observer effect.</p>
      
      <div 
        className="relative h-48 bg-black/40 rounded-xl cursor-crosshair border border-white/5"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={200} 
          className="w-full h-full"
        />
        <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-tighter text-slate-600 font-mono">
          State: {isCollapsed ? 'COLLAPSED (PARTICLE)' : 'SUPERPOSITION (WAVE)'}
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div className="text-[10px] text-slate-500 font-mono">ID: QUANTUM_OBS_772</div>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all"
        >
          {isCollapsed ? 'Reset Field' : 'Measure System'}
        </button>
      </div>
    </div>
  );
};

export default QuantumSimulation;
