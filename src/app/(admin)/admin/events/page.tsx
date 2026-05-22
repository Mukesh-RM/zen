'use client';

import { events } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';
import { Pencil, Trash2, Plus, Eye } from 'lucide-react';

export default function AdminEvents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-parchment">Events</h1>
          <p className="text-slate-500 text-sm mt-1">Manage tournaments, gradings, and seminars</p>
        </div>
        <button className="crimson-btn font-mono text-xs flex items-center gap-2">
          <Plus size={14} /> Add Event
        </button>
      </div>

      <div className="bg-dojo-dark border border-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Title</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Type</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Date</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                  <td className="py-4 px-6 text-parchment text-sm">{event.title}</td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-[10px] uppercase text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {event.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{formatDate(event.date)}</td>
                  <td className="py-4 px-6">
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                      event.published ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'
                    }`}>
                      {event.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="text-slate-400 hover:text-parchment transition-colors"><Eye size={14} /></button>
                      <button className="text-slate-400 hover:text-parchment transition-colors"><Pencil size={14} /></button>
                      <button className="text-slate-400 hover:text-crimson transition-colors"><Trash2 size={14} /></button>
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
