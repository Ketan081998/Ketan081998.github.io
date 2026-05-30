'use client';

import { useRef, useEffect, useState } from 'react';

export default function TextReveal({ children, className = '', delay = 0, duration = 800 }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          transform: revealed ? 'translateY(0)' : 'translateY(100%)',
          opacity: revealed ? 1 : 0,
          transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
