
import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; originX: number; originY: number; size: number; speed: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        stars.push({
          x,
          y,
          originX: x,
          originY: y,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.15 + 0.05,
          opacity: Math.random(),
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      stars.forEach((star) => {
        // Star movement
        star.originY -= star.speed;
        if (star.originY < 0) {
          star.originY = canvas.height;
          star.originX = Math.random() * canvas.width;
        }

        // Gravitational Lensing Calculation
        const dx = star.originX - mx;
        const dy = star.originY - my;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        const radius = 250;
        
        let displayX = star.originX;
        let displayY = star.originY;

        if (dist < radius) {
          // Einstein ring / distortion effect
          const force = (radius - dist) / radius;
          const distortion = force * 40; 
          displayX = star.originX + (dx / dist) * distortion;
          displayY = star.originY + (dy / dist) * distortion;
        }

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(displayX, displayY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle grid distortion
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          const dx = x - mx;
          const dy = y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          let px = x, py = y;
          if (d < 300) {
            const f = (300 - d) / 300;
            px += (dx / d) * f * 20;
            py += (dy / d) * f * 20;
          }
          if (y === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarField;
