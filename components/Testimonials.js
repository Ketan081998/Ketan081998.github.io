'use client';

import { testimonials, personalInfo } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';
import TextReveal from '@/components/TextReveal';
import Magnetic from '@/components/Magnetic';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name.split(' ').map(n => n[0]).join('');
  const colors = [
    'from-indigo-500 to-blue-500',
    'from-emerald-500 to-teal-500',
    'from-purple-500 to-pink-500',
    'from-amber-500 to-orange-500',
  ];
  const colorIndex = name.length % colors.length;
  return (
    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/5 dark:via-indigo-400/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <TextReveal>
            <span className="inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">Social Proof</span>
          </TextReveal>
          <TextReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              What People <span className="gradient-text">Say</span>
            </h2>
          </TextReveal>
          <div className="w-16 h-1 bg-indigo-600/30 dark:bg-indigo-400/30 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 100}>
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-3 mb-4">
                  <Avatar name={t.name} />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">{t.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{t.role}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <StarRating rating={t.rating} />
                </div>

                <blockquote className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="absolute bottom-4 right-4 text-indigo-600/10 dark:text-indigo-400/10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="text-center mt-12">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              Your feedback helps me grow. Leave a recommendation on LinkedIn!
            </p>
            <Magnetic strength={0.2}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 dark:bg-indigo-400 text-white text-sm font-semibold
                  hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/25 dark:hover:shadow-indigo-400/25"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Leave a Recommendation on LinkedIn
              </a>
            </Magnetic>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
