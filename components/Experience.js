'use client';

import { experience } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';
import TextReveal from '@/components/TextReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/5 dark:via-indigo-400/5 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <TextReveal>
            <span className="inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">Career</span>
          </TextReveal>
          <TextReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
          </TextReveal>
          <div className="w-16 h-1 bg-indigo-600/30 dark:bg-indigo-400/30 rounded-full mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/40 dark:from-indigo-400/40 via-indigo-600/20 dark:via-indigo-400/20 to-transparent hidden sm:block" />

          <div className="space-y-10 sm:space-y-16">
            {experience.map((job, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 120}>
                <div className="relative pl-0 sm:pl-14 group">
                  <div className="absolute left-[10px] top-2 w-[18px] h-[18px] rounded-full border-[3px] border-indigo-600 dark:border-indigo-400 bg-white dark:bg-zinc-950 hidden sm:block ring-4 ring-white dark:ring-zinc-950 z-10 group-hover:scale-125 transition-transform duration-300" />

                  <div className={`relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-600/5 dark:hover:shadow-indigo-400/5 hover:-translate-y-0.5`}>
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${job.accent}`} />

                    <div className="p-5 sm:p-7 lg:p-8 pl-6 sm:pl-8 lg:pl-9">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                              {job.company}
                            </span>
                            <span className="text-zinc-400 dark:text-zinc-500">&middot;</span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">{job.location}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold">{job.role}</h3>
                        </div>
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-600/20 dark:border-indigo-400/20 whitespace-nowrap self-start">
                          {job.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {job.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="px-3.5 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center min-w-[90px] flex-1 sm:flex-none"
                          >
                            <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</p>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight mt-0.5">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      <ul className="space-y-3">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
