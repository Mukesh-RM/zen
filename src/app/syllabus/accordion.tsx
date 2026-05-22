'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BeltRequirement } from '@/lib/types';

export function SyllabusAccordion({ belts }: { belts: BeltRequirement[] }) {
  const [expandedBelt, setExpandedBelt] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {belts.map((belt, index) => (
        <div key={belt.rank} className="border border-slate-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedBelt(expandedBelt === belt.rank ? null : belt.rank)}
            className="w-full flex items-center justify-between p-5 bg-dojo-charcoal hover:bg-slate-800/50 transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <span className="w-6 h-3 block rounded-sm" style={{ backgroundColor: belt.color }} />
              <div>
                <span className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
                  <span className="block w-8 h-2" style={{ backgroundColor: belt.color }} />
                  {belt.rank}
                </span>
                <p className="text-slate-500 text-xs mt-1">{belt.minimumMonths} months minimum</p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform duration-300 ${expandedBelt === belt.rank ? 'rotate-180' : ''}`}
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
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Kata Required</h4>
                    <ul className="space-y-1">
                      {belt.kata.map((k) => <li key={k} className="text-slate-300 text-sm">• {k}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Techniques</h4>
                    <ul className="space-y-1">
                      {belt.techniques.map((t) => <li key={t} className="text-slate-300 text-sm">• {t}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Sparring & Self-Defense</h4>
                    <p className="text-slate-400 text-sm mb-3">{belt.sparring}</p>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 mb-2">Self-Defense</h4>
                    <ul className="space-y-1">
                      {belt.selfDefense.map((sd) => <li key={sd} className="text-slate-300 text-sm">• {sd}</li>)}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
