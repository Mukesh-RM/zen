'use client';

import { instructors } from '@/lib/data/instructors';
import { BeltBadge } from '@/components/ui/BeltBadge';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function AdminInstructors() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-parchment">Instructors</h1>
          <p className="text-slate-500 text-sm mt-1">Manage instructor profiles</p>
        </div>
        <button className="crimson-btn font-mono text-xs flex items-center gap-2">
          <Plus size={14} /> Add Instructor
        </button>
      </div>

      <div className="bg-dojo-dark border border-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Rank</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Branch</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Featured</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((inst) => (
                <tr key={inst.id} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden">
                        <img src={inst.photoUrl} alt={inst.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-parchment text-sm">{inst.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <BeltBadge rank={inst.rank} size="sm" />
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{inst.branch}</td>
                  <td className="py-4 px-6">
                    {inst.featured ? (
                      <span className="font-mono text-[10px] text-gold bg-gold/10 px-2 py-0.5">Yes</span>
                    ) : (
                      <span className="font-mono text-[10px] text-slate-500">No</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="text-slate-400 hover:text-parchment transition-colors">
                        <Pencil size={14} />
                      </button>
                      <button className="text-slate-400 hover:text-crimson transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
