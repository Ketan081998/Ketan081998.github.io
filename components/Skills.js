'use client';

import { useState, useEffect } from 'react';
import { skills } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';

function SkillBar({ name, level, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById(`skill-${index}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div id={`skill-${index}`} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-purple-500 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto" />
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-lg mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
