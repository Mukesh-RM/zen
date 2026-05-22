'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { BeltBadge } from '@/components/ui/BeltBadge';
import { beltRequirements } from '@/lib/data/beltRequirements';
import { ThreeCanvas } from '@/components/3d/ThreeCanvas';
import { BeltDisplay } from '@/components/3d/BeltDisplay';

export function BeltProgression() {
  const [selectedBelt, setSelectedBelt] = useState(beltRequirements[0]);

  return (
    <section className="py-20 md:py-28 bg-dojo-black">
      <div className="section-container">
        <SectionHeading subtitle="Your Journey" align="center">
          From White to Black
        </SectionHeading>

        {/* Horizontal scrollable belt display */}
        <RevealOnScroll>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 mb-12 scrollbar-thin scrollbar-thumb-crimson scrollbar-track-transparent">
            {beltRequirements.map((belt, index) => (
              <button
                key={belt.rank}
                onClick={() => setSelectedBelt(belt)}
                className={`flex-shrink-0 flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 min-w-[100px] ${
                  selectedBelt.rank === belt.rank
                    ? 'bg-crimson/10 border border-crimson/50'
                    : 'bg-dojo-dark border border-slate-800 hover:border-slate-600'
                }`}
              >
                {/* Mini 3D belt */}
                <div className="w-20 h-16">
                  <ThreeCanvas>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[2, 2, 2]} intensity={2} color="#F5F0E8" />
                    <BeltDisplay
                      color={belt.color}
                      isGold={index === beltRequirements.length - 2}
                    />
                  </ThreeCanvas>
                </div>
                <BeltBadge rank={belt.rank} size="sm" />
                <span className="text-[10px] text-slate-500 font-mono">
                  {index + 1}/{beltRequirements.length}
                </span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Selected belt details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBelt.rank}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* 3D belt view */}
            <div className="h-64 bg-dojo-dark rounded-lg overflow-hidden">
              <ThreeCanvas>
                <ambientLight intensity={0.6} />
                <spotLight position={[0, 3, 3]} intensity={2} color="#F5F0E8" />
                <BeltDisplay
                  color={selectedBelt.color}
                  isGold={selectedBelt.rank.includes('Brown 1st')}
                />
              </ThreeCanvas>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <BeltBadge rank={selectedBelt.rank} size="lg" />
                <p className="text-slate-400 text-sm mt-2">
                  Minimum Training: <span className="text-parchment">{selectedBelt.minimumMonths} months</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
                    Kata Required
                  </h4>
                  <ul className="space-y-1">
                    {selectedBelt.kata.map((k) => (
                      <li key={k} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-crimson text-xs mt-1">◆</span>
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
                    Self-Defense
                  </h4>
                  <ul className="space-y-1">
                    {selectedBelt.selfDefense.map((sd) => (
                      <li key={sd} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-crimson text-xs mt-1">◆</span>
                        {sd}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
                  Sparring
                </h4>
                <p className="text-slate-300 text-sm">{selectedBelt.sparring}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="mt-12">
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-crimson"
              initial={{ width: 0 }}
              whileInView={{
                width: `${((beltRequirements.indexOf(selectedBelt) + 1) / beltRequirements.length) * 100}%`,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          <p className="text-slate-500 text-xs font-mono text-center mt-3">
            Journey Progress: Step {beltRequirements.indexOf(selectedBelt) + 1} of {beltRequirements.length}
          </p>
        </div>
      </div>
    </section>
  );
}
