'use client';

import { useRef, useEffect, useState } from 'react';

const transforms = {
  up: { hidden: 'translateY(60px)' },
  down: { hidden: 'translateY(-60px)' },
  left: { hidden: 'translateX(-60px)' },
  right: { hidden: 'translateX(60px)' },
  scale: { hidden: 'scale(0.95)' },
  none: { hidden: 'none' },
};

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 800,
  direction = 'up',
  threshold = 0.1,
  once = true,
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const t = transforms[direction] || transforms.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'none' : t.hidden,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
