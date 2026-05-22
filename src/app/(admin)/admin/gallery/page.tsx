'use client';

import { galleryItems } from '@/lib/data/gallery';
import { Trash2, Plus, Star } from 'lucide-react';

export default function AdminGallery() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-parchment">Gallery</h1>
          <p className="text-slate-500 text-sm mt-1">Manage photos and media</p>
        </div>
        <button className="crimson-btn font-mono text-xs flex items-center gap-2">
          <Plus size={14} /> Upload Image
        </button>
      </div>

      <div className="bg-dojo-dark border border-slate-800 rounded-lg p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative rounded-lg overflow-hidden bg-dojo-charcoal">
              <img src={item.url} alt={item.caption} className="w-full aspect-square object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  {item.featured && <Star size={16} className="text-gold fill-gold" />}
                  <button className="text-white hover:text-crimson transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-2">
                <p className="text-slate-400 text-xs truncate">{item.caption}</p>
                <p className="text-slate-500 text-[10px] font-mono uppercase">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
