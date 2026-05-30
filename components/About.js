'use client';

import { personalInfo, about } from '@/lib/data';
import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';
import TextReveal from '@/components/TextReveal';
import Magnetic from '@/components/Magnetic';

const strengths = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
    title: 'Process Optimization',
    desc: 'Analyzing workflows, identifying bottlenecks, and implementing scalable improvements that drive measurable efficiency gains.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    ),
    title: 'BI & Visualization',
    desc: 'Building dashboards in Tableau and Power BI that translate complex data into clear stories for stakeholders at every level.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'System Integration',
    desc: 'Bridging business needs with technical solutions across CRM/PRM platforms to create seamless, connected workflows.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
    title: 'Requirements to Solutions',
    desc: 'Translating stakeholder needs into technical specifications that deliver measurable business outcomes.',
  },
];

export default function About() {

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/5 dark:via-indigo-400/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-400/5 rounded-full blur-3xl" />

      {/* Smooth bridge from hero — subtle gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 lg:mb-20">
          <TextReveal>
            <span className="inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">About Me</span>
          </TextReveal>
          <TextReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              My <span className="gradient-text">Story</span>
            </h2>
          </TextReveal>
          <div className="w-16 h-1 bg-indigo-600/30 dark:bg-indigo-400/30 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-12 gap-0 lg:gap-6 items-start">
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="up" duration={1000}>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={personalInfo.aboutPhoto}
                alt={personalInfo.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/5 dark:via-zinc-950/5 to-transparent" />

              <div className="absolute top-5 right-5 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-600/30 dark:shadow-indigo-400/30">
                🔄
              </div>
            </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="lg:pl-6 space-y-6">
              <RevealOnScroll delay={150} className="space-y-5">
                {about.intro.map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {paragraph}
                  </p>
                ))}
              </RevealOnScroll>

              <RevealOnScroll delay={250}>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="px-4 py-3.5 rounded-xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg flex items-center gap-3">
                    <span className="text-xl">🎓</span>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Education</p>
                      <p className="text-sm font-semibold truncate">M.S. Information Systems</p>
                    </div>
                  </div>
                  <div className="px-4 py-3.5 rounded-xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg flex items-center gap-3">
                    <span className="text-xl">📡</span>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Bachelor's</p>
                      <p className="text-sm font-semibold truncate">Electronics & Telecommunication Eng.</p>
                    </div>
                  </div>
                  <div className="px-4 py-3.5 rounded-xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Location</p>
                      <p className="text-sm font-semibold">New York City, NY</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="flex flex-wrap gap-2">
                  {about.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-600/20 dark:border-indigo-400/20
                        hover:bg-indigo-600 dark:bg-indigo-400/20 transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={450}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-semibold
                        hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </Magnetic>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-24 lg:mt-28">
            <div className="text-center mb-12">
              <TextReveal>
                <span className="inline-block text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em]">What I Bring</span>
              </TextReveal>
              <TextReveal delay={100}>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2">Core Strengths</h3>
              </TextReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {strengths.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600/30 dark:hover:border-indigo-400/30
                    transition-all duration-500 hover:shadow-lg hover:shadow-indigo-600/5 dark:hover:shadow-indigo-400/5 hover:-translate-y-1
                    group"
                  style={{
                    animation: 'none',
                    opacity: 1,
                  }}
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-600/10 dark:bg-indigo-400/10 flex items-center justify-center mb-4
                    group-hover:bg-indigo-600 dark:bg-indigo-400/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
