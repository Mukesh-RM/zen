'use client';

import { CountUp } from '@/components/ui/CountUp';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const stats = [
  { value: 30, suffix: '+', label: 'Years of Isshinryu Tradition' },
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 12, suffix: '', label: 'Branches Across Tamil Nadu' },
];

export function PhilosophyStrip() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Kanji watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="font-kanji text-[20rem] md:text-[30rem] text-slate-800/10 leading-none">
          武
        </span>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <div className="text-center">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-parchment mb-3"
                />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
