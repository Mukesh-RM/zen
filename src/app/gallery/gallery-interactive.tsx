'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryItem } from '@/lib/types';

const categories = ['All', 'Training', 'Tournament', 'Grading', 'Events', 'Seminars'] as const;
type Category = (typeof categories)[number];

export function GalleryInteractive({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'All' ? items : items.filter((item) => item.category === activeCategory.toUpperCase());

  return (
    <>
      <section className="pb-8 bg-dojo-black">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-[0.15em] px-5 py-2 transition-all ${activeCategory === cat ? 'bg-crimson text-white' : 'bg-dojo-charcoal text-slate-400 hover:text-parchment border border-slate-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-dojo-dark">
        <div className="section-container">
          <div className="masonry-grid">
            {filtered.map((item) => (
              <div key={item.id} className="masonry-item cursor-pointer group relative overflow-hidden rounded-lg" onClick={() => setLightbox(item)}>
                <img src={item.url} alt={item.caption} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-slate-500 text-center py-20">No images in this category yet.</p>}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-crimson transition-colors z-10"><X size={24} /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.url} alt={lightbox.caption} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
              {lightbox.caption && <p className="text-white text-center mt-4 font-body">{lightbox.caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
