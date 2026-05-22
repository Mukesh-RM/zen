'use client';

import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function CTABanner() {
  return (
    <section className="py-20 md:py-24 bg-crimson-gradient">
      <RevealOnScroll>
        <div className="section-container text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Begin Your Training Today
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Take the first step on your martial arts journey. Find your nearest dojo or get in
            touch with us — your path to the One Heart Way starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="font-mono text-sm uppercase tracking-[0.2em] bg-white text-crimson px-8 py-4 hover:bg-parchment transition-colors"
            >
              Find Your Nearest Dojo
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm uppercase tracking-[0.2em] border border-white/30 text-white px-8 py-4 hover:border-white hover:bg-white/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
