'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/lib/types';

const categories = ['GENERAL', 'JOINING', 'TRAINING', 'GRADING', 'TOURNAMENT', 'KIDS'] as const;
type Category = (typeof categories)[number];

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>('GENERAL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <section className="pb-8 bg-dojo-black">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setExpandedId(null); }}
                className={`font-mono text-xs uppercase tracking-[0.15em] px-5 py-2.5 transition-all ${
                  activeCategory === cat
                    ? 'bg-crimson text-white'
                    : 'bg-dojo-charcoal text-slate-400 hover:text-parchment border border-slate-800'
                }`}
              >
                {cat.charAt(0) + cat.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-dojo-dark min-h-screen">
        <div className="section-container max-w-3xl">
          <div className="space-y-3">
            {filtered.map((faq) => (
              <div key={faq.id} className="border border-slate-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-dojo-charcoal hover:bg-slate-800/30 transition-colors"
                >
                  <span className="text-parchment font-body pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-crimson flex-shrink-0 transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-slate-800 text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-crimson/5 border border-crimson/20 rounded-lg">
            <h3 className="font-display text-xl text-parchment mb-3">Still have questions?</h3>
            <p className="text-slate-400 mb-6">We&apos;re here to help. Reach out and we&apos;ll respond within 24 hours.</p>
            <Link href="/contact" className="crimson-btn inline-block font-mono text-xs">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
