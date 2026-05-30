'use client';

import { education, certifications } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Education() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <RevealOnScroll direction="up" className="text-center md:text-left mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full md:mx-0 mx-auto" />
            </RevealOnScroll>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <RevealOnScroll key={idx} direction="up" delay={idx * 150}>
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <span className="shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">{edu.year}</span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.description}</p>
                </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          <div>
            <RevealOnScroll direction="up" className="text-center md:text-left mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full md:mx-0 mx-auto" />
            </RevealOnScroll>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <RevealOnScroll key={idx} direction="up" delay={idx * 150}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
                    hover:border-indigo-600/30 dark:hover:border-indigo-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/5 dark:hover:shadow-indigo-400/5
                    group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 dark:bg-indigo-400/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate group-hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer} &middot; {cert.year}</p>
                  </div>
                  <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
