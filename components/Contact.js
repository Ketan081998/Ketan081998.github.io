'use client';

import { personalInfo } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';
import TextReveal from '@/components/TextReveal';
import Magnetic from '@/components/Magnetic';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          </TextReveal>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto" />
          <TextReveal delay={100}>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-lg mx-auto">
              Have a question or want to work together? Drop me a message!
            </p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <RevealOnScroll direction="left" className="md:col-span-2 space-y-6">
            {[
              {
                label: 'Email',
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                label: 'Phone',
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
              },
              {
                label: 'Location',
                value: personalInfo.location,
                href: null,
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 dark:bg-indigo-400/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center
                  hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-600/5 dark:hover:bg-indigo-400/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center
                  hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-600/5 dark:hover:bg-indigo-400/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800
                    focus:border-indigo-600 dark:border-indigo-400 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 outline-none
                    transition-all duration-200 placeholder:text-zinc-500 dark:text-zinc-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800
                    focus:border-indigo-600 dark:border-indigo-400 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 outline-none
                    transition-all duration-200 placeholder:text-zinc-500 dark:text-zinc-400/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800
                  focus:border-indigo-600 dark:border-indigo-400 focus:ring-2 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 outline-none
                  transition-all duration-200 placeholder:text-zinc-500 dark:text-zinc-400/50 resize-none"
                placeholder="Your message..."
              />
            </div>

            <Magnetic strength={0.15}>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 dark:bg-indigo-400 text-white font-semibold
                  hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/25 dark:hover:shadow-indigo-400/25
                  focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                Send Message
              </button>
            </Magnetic>
          </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
