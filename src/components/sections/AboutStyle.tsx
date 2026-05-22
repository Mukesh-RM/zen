'use client';

import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ThreeCanvas } from '@/components/3d/ThreeCanvas';
import { KarateCrest } from '@/components/3d/KarateCrest';

export function AboutStyle() {
  return (
    <section className="py-20 md:py-28 bg-dojo-dark">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image / Visual area */}
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="aspect-[4/5] bg-dojo-charcoal rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=750&fit=crop"
                  alt="Sensei demonstrating Isshinryu karate technique"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-crimson/10" />
              </div>

              {/* 3D Crest on top */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40">
                <ThreeCanvas>
                  <ambientLight intensity={0.8} />
                  <pointLight position={[2, 2, 2]} intensity={2} color="#B8960C" />
                  <KarateCrest />
                </ThreeCanvas>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — Text */}
          <RevealOnScroll direction="right" delay={0.2}>
            <p className="section-subheading mb-3">Our Heritage</p>
            <h2 className="section-heading mb-6">
              The Way of the <span className="text-crimson">One Heart</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Isshinryu (一心流) was founded in 1956 by Grand Master Tatsuo Shimabuku on the
                island of Okinawa, Japan. The name translates to &ldquo;One Heart Way,&rdquo;
                reflecting the philosophy that all karate techniques share a common core
                principle — the unity of mind, body, and spirit.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Master Shimabuku combined the best elements of Shorin-ryu (fast, linear
                movements) and Goju-ryu (powerful, circular techniques) to create a practical,
                effective, and complete martial art system. The signature vertical fist punch
                and natural stances make Isshinryu uniquely adaptable to real-world
                self-defense.
              </p>
              <p className="text-slate-300 leading-relaxed">
                In Chennai, Sensei R. Thirumalai has dedicated over three decades to preserving
                and spreading this authentic Okinawan tradition across Tamil Nadu, training
                thousands of students in the &ldquo;One Heart Way.&rdquo;
              </p>
              <Link
                href="/about"
                className="inline-block font-mono text-sm uppercase tracking-[0.15em] text-crimson hover:text-gold transition-colors mt-4"
              >
                Learn the History →
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
