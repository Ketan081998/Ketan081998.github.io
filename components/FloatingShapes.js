'use client';

import { useEffect, useRef } from 'react';

const shapes = [
  { type: 'circle', size: 60, color: 'from-indigo-500/20 to-purple-500/20', x: 15, y: 20, delay: 0 },
  { type: 'square', size: 40, color: 'from-violet-500/15 to-fuchsia-500/15', x: 80, y: 30, delay: 2 },
  { type: 'triangle', size: 50, color: 'from-blue-500/20 to-cyan-500/20', x: 70, y: 70, delay: 4 },
  { type: 'circle', size: 30, color: 'from-emerald-500/15 to-teal-500/15', x: 25, y: 75, delay: 1 },
  { type: 'square', size: 45, color: 'from-amber-500/10 to-orange-500/10', x: 90, y: 55, delay: 3 },
  { type: 'circle', size: 20, color: 'from-pink-500/20 to-rose-500/20', x: 50, y: 15, delay: 5 },
];

export default function FloatingShapes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      container.style.setProperty('--mouse-x', x);
      container.style.setProperty('--mouse-y', y);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${6 + shape.delay}s`,
            transform: `translate(
              calc(var(--mouse-x, 0) * ${30 + i * 10}px),
              calc(var(--mouse-y, 0) * ${30 + i * 10}px)
            )`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className={`rounded-${
              shape.type === 'circle' ? 'full' : shape.type === 'square' ? '2xl' : 'none'
            } w-[${shape.size}px] h-[${shape.size}px] bg-gradient-to-br ${shape.color} ${
              shape.type === 'triangle' ? 'clip-path-triangle rotate-45' : ''
            } backdrop-blur-xl border border-white/10 dark:border-white/5`}
            style={{
              width: shape.size,
              height: shape.type === 'triangle' ? shape.size : shape.size,
              clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
            }}
          />
        </div>
      ))}
    </div>
  );
}
