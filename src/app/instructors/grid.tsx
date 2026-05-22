'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Instructor } from '@/lib/types';

export function InstructorsGrid({ instructors }: { instructors: Instructor[] }) {
  const [selected, setSelected] = useState<Instructor | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((inst) => (
          <div key={inst.id} onClick={() => setSelected(inst)} className="bg-dojo-dark border border-slate-800 rounded-lg p-6 cursor-pointer h-full hover:border-crimson/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-800">
              <img src={inst.photoUrl} alt={inst.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg text-parchment">{inst.name}</h3>
              <span className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-[10px] mt-1">
                <span className="block w-6 h-1.5" style={{ backgroundColor: '#1A1A1A' }} />
                {inst.rank}
              </span>
              <p className="text-slate-500 text-xs mt-2">{inst.branch}</p>
              <p className="text-slate-400 text-sm mt-3 line-clamp-2">{inst.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="bg-dojo-dark border border-slate-800 rounded-xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-slate-400 hover:text-parchment"><X size={20} /></button>
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-crimson/30">
                  <img src={selected.photoUrl} alt={selected.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-2xl text-parchment">{selected.name}</h3>
                <span className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-xs mt-2">
                  <span className="block w-8 h-2" style={{ backgroundColor: '#1A1A1A' }} />
                  {selected.rank}
                </span>
                <p className="text-slate-400 text-sm mt-2">{selected.branch}</p>
              </div>
              <p className="text-slate-300 leading-relaxed">{selected.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
