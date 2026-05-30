'use client';

import { useState, useEffect, useRef } from 'react';
import { personalInfo, heroRoles } from '@/lib/data';
import Image from 'next/image';
import FloatingShapes from '@/components/FloatingShapes';
import TiltCard from '@/components/TiltCard';
import Magnetic from '@/components/Magnetic';

const techMarquee = [
  'Process Optimization', 'System Integration', 'BI Dashboards', 'CRM/PRM',
  'Data Analytics', 'Python', 'SQL', 'Tableau', 'AWS', 'Visio',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [counts, setCounts] = useState({ exp: 0, projects: 0, tools: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    let timeout;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 90);
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % heroRoles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  useEffect(() => {
    const targets = { exp: 3, projects: 15, tools: 10 };
    const duration = 2000;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        exp: Math.min(Math.round((targets.exp / steps) * step), targets.exp),
        projects: Math.min(Math.round((targets.projects / steps) * step), targets.projects),
        tools: Math.min(Math.round((targets.tools / steps) * step), targets.tools),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 dark:from-indigo-400/5 via-transparent to-purple-500/5 dark:from-indigo-400/10 dark:via-transparent dark:to-purple-400/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-600/10 dark:from-indigo-400/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/10 dark:from-purple-400/10 via-transparent to-transparent" />

      <FloatingShapes />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-0 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-center lg:text-left py-10">
            <div className="animate-fade-in-up mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/10 dark:bg-indigo-400/10 border border-indigo-600/20 dark:border-indigo-400/20 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                <span className="text-base">👋</span>
                Hello, I&apos;m
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3 animate-fade-in-up stagger-1 leading-[1.05]">
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
            </h1>

            <div className="h-10 sm:h-12 mb-4 animate-fade-in-up stagger-2">
              <span className="text-xl sm:text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 font-light">
                {heroRoles[roleIndex].substring(0, charIndex)}
                <span className="animate-pulse text-indigo-600 dark:text-indigo-400 font-medium">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mb-8 animate-fade-in-up stagger-3 leading-relaxed">
              I turn business challenges into streamlined, data-powered solutions. From mapping
              processes in Visio to integrating CRM systems and building dashboards that drive
              decisions — I help organizations work smarter, not harder.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up stagger-4">
              <Magnetic strength={0.2}>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 dark:bg-indigo-400 text-white font-semibold
                    hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/30 dark:hover:shadow-indigo-400/30"
                >
                  See My Work
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-zinc-200 dark:border-zinc-800
                    font-semibold hover:border-indigo-600/40 dark:hover:border-indigo-400/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
                >
                  Let&apos;s Talk
                </a>
              </Magnetic>
            </div>

            <div className="flex items-center gap-5 mt-10 animate-fade-in-up stagger-5">
              {[
                { href: personalInfo.linkedin, label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: personalInfo.github, label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                { href: `mailto:${personalInfo.email}`, label: 'Email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              ].map((social) => (
                <Magnetic key={social.label} strength={0.15}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400
                      hover:bg-indigo-600/5 dark:hover:bg-indigo-400/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill={social.label === 'Email' ? 'none' : 'currentColor'} viewBox="0 0 24 24" stroke={social.label === 'Email' ? 'currentColor' : undefined}>
                      <path d={social.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth={social.label === 'Email' ? 2 : undefined} />
                    </svg>
                  </a>
                </Magnetic>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-sm mt-12 animate-fade-in-up stagger-6">
              {[
                { value: counts.exp, suffix: '+', label: 'Years Exp' },
                { value: counts.projects, suffix: '+', label: 'Projects' },
                { value: counts.tools, suffix: '+', label: 'Processes' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 hidden lg:block relative">
            <TiltCard maxTilt={8} glare={true}>
              <div className="relative h-[65vh] min-h-[500px] max-h-[650px] rounded-3xl overflow-hidden shadow-2xl animate-slide-in-right group">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 0px, 60vw"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/10 dark:via-zinc-950/10 to-transparent" />

                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  <span className="px-4 py-2 rounded-xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-sm font-semibold shadow-lg">
                    <span className="gradient-text">Business Transformation</span>
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-indigo-600/90 dark:bg-indigo-400/90 backdrop-blur-md text-white text-sm font-semibold shadow-lg">
                    AWS Certified ☁️
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-emerald-600/90 dark:bg-emerald-500/90 backdrop-blur-md text-white text-sm font-semibold shadow-lg">
                    Change Management Certified
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-violet-600/90 dark:bg-violet-500/90 backdrop-blur-md text-white text-sm font-semibold shadow-lg">
                    Python Data Analysis Certified
                  </span>
                </div>

                <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">Open to work</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: counts.exp, suffix: '+', label: 'Years' },
                      { value: counts.projects, suffix: '+', label: 'Projects' },
                      { value: counts.tools, suffix: '+', label: 'Tools' },
                    ].map((stat, i) => (
                      <div key={i} className="px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg text-center">
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{stat.value}{stat.suffix}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <svg className="absolute -bottom-4 -right-4 w-32 h-32 text-indigo-600/20 dark:text-indigo-400/20 photo-ring" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                  <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/50 py-3">
        <div className="flex animate-marquee" style={{ width: 'fit-content', animation: 'marquee 30s linear infinite' }}>
          {[...techMarquee, ...techMarquee].map((tech, idx) => (
            <span key={idx} className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 font-medium px-6 whitespace-nowrap uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
