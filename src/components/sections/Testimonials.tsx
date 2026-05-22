'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BeltBadge } from '@/components/ui/BeltBadge';
import { testimonials } from '@/lib/data/testimonials';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 200 : -200, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="relative py-20 md:py-28 bg-dojo-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-crimson/5 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading subtitle="Student Voices" align="center">
          Testimonials
        </SectionHeading>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center"
            >
              {/* Quote mark */}
              <span className="font-display text-8xl text-crimson/30 leading-none select-none">
                &ldquo;
              </span>

              <blockquote className="text-slate-300 text-lg md:text-xl leading-relaxed italic -mt-8 mb-8 px-4">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-crimson/30">
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-display text-parchment">{t.name}</p>
                <BeltBadge rank={t.beltLevel} size="sm" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-crimson hover:border-crimson transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-crimson w-6' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-crimson hover:border-crimson transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
