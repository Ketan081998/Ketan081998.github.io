'use client';

import { projects } from '@/lib/data';
import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';
import TextReveal from '@/components/TextReveal';
import TiltCard from '@/components/TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          </TextReveal>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto" />
          <TextReveal delay={100}>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-lg mx-auto">
              A collection of projects showcasing my skills in data analysis, visualization, and more
            </p>
          </TextReveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 120}>
            <TiltCard maxTilt={5} glare={false} className="h-full">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden
                hover:border-indigo-600/30 dark:hover:border-indigo-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-600/5 dark:hover:shadow-indigo-400/5 h-full"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/20 dark:via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm
                flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
