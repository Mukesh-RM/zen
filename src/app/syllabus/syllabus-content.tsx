'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { BeltBadge } from '@/components/ui/BeltBadge';
import { beltRequirements } from '@/lib/data/beltRequirements';
import { ChevronDown } from 'lucide-react';

export function SyllabusPageClient() {
  const [expandedBelt, setExpandedBelt] = useState<string | null>(null);

  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Curriculum</p>
          <h1 className="section-heading mb-6">Complete <span className="text-crimson">Syllabus</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A structured path from white belt to black belt, designed to develop technique,
            discipline, and character through authentic Isshinryu training.
          </p>
        </div>
      </section>

      <section className="py-20 bg-dojo-dark">
        <div className="section-container max-w-4xl">
          <SectionHeading subtitle="Belt Requirements" align="center">
            Journey Through the Ranks
          </SectionHeading>

          <div className="space-y-4">
            {beltRequirements.map((belt, index) => (
              <RevealOnScroll key={belt.rank} delay={index * 0.05}>
                <div className="border border-slate-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedBelt(expandedBelt === belt.rank ? null : belt.rank)}
                    className="w-full flex items-center justify-between p-5 bg-dojo-charcoal hover:bg-slate-800/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="w-6 h-3 block rounded-sm"
                        style={{ backgroundColor: belt.color }}
                      />
                      <div>
                        <BeltBadge rank={belt.rank} size="md" />
                        <p className="text-slate-500 text-xs mt-1">
                          {belt.minimumMonths} months minimum
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-300 ${
                        expandedBelt === belt.rank ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedBelt === belt.rank && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                              Kata Required
                            </h4>
                            <ul className="space-y-1">
                              {belt.kata.map((k) => (
                                <li key={k} className="text-slate-300 text-sm">• {k}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                              Techniques
                            </h4>
                            <ul className="space-y-1">
                              {belt.techniques.map((t) => (
                                <li key={t} className="text-slate-300 text-sm">• {t}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                              Sparring & Self-Defense
                            </h4>
                            <p className="text-slate-400 text-sm mb-3">{belt.sparring}</p>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 mb-2">
                              Self-Defense
                            </h4>
                            <ul className="space-y-1">
                              {belt.selfDefense.map((sd) => (
                                <li key={sd} className="text-slate-300 text-sm">• {sd}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.print()}
              className="ghost-btn inline-block cursor-pointer"
            >
              Download PDF Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* Print styles handled by globals.css print rules */}
    </main>
  );
}
