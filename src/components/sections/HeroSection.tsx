'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { HeroScene } from '@/components/3d/HeroScene';
import { ThreeCanvas } from '@/components/3d/ThreeCanvas';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Simple stagger animation for text on mount
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas>
          <HeroScene />
        </ThreeCanvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dojo-black/30 via-transparent to-dojo-black" />

      {/* Content overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <div className="text-center px-4">
          {/* Subtitle */}
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-crimson mb-6 animate-fade-in">
            All India Zen Isshinryu Karate Association
          </p>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-parchment tracking-wide opacity-0 transition-opacity duration-1000"
          >
            <span className="block">ZEN</span>
            <span className="block text-crimson">ISSHINRYU</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-slate-400 italic mt-6 mb-10 max-w-2xl mx-auto">
            &ldquo;The Way of the One Heart&rdquo; — Authentic Okinawan Karate in Chennai
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="crimson-btn">
              Find a Dojo
            </Link>
            <Link href="/about" className="ghost-btn">
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-dojo-black to-transparent pointer-events-none" />
    </section>
  );
}
