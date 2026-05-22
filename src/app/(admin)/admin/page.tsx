'use client';

import { instructors } from '@/lib/data/instructors';
import { events } from '@/lib/data/events';
import { galleryItems } from '@/lib/data/gallery';
import { Users, CalendarDays, Image, ClipboardList, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Instructors', value: instructors.length, icon: Users, color: 'text-blue-400' },
    { label: 'Upcoming Events', value: events.filter((e) => new Date(e.date) > new Date()).length, icon: CalendarDays, color: 'text-green-400' },
    { label: 'Gallery Items', value: galleryItems.length, icon: Image, color: 'text-purple-400' },
    { label: 'Registrations', value: 0, icon: ClipboardList, color: 'text-gold', sub: 'Mock data' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-parchment">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Welcome to the admin panel</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-dojo-dark border border-slate-800 rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">{stat.label}</span>
              <stat.icon size={18} className={stat.color} />
            </div>
            <p className="font-display text-3xl text-parchment">{stat.value}</p>
            {stat.sub && <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events */}
        <div className="bg-dojo-dark border border-slate-800 rounded-lg p-5">
          <h2 className="font-display text-lg text-parchment mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {events.filter((e) => new Date(e.date) > new Date()).slice(0, 5).map((event) => (
              <div key={event.id} className="flex items-center justify-between py-2 border-b border-slate-800/50 last:border-0">
                <div>
                  <p className="text-parchment text-sm">{event.title}</p>
                  <p className="text-slate-500 text-xs">{new Date(event.date).toLocaleDateString('en-IN')}</p>
                </div>
                <span className="font-mono text-[10px] uppercase text-slate-500 bg-slate-800 px-2 py-0.5 rounded">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Instructors */}
        <div className="bg-dojo-dark border border-slate-800 rounded-lg p-5">
          <h2 className="font-display text-lg text-parchment mb-4">Instructors</h2>
          <div className="space-y-3">
            {instructors.slice(0, 5).map((instructor) => (
              <div key={instructor.id} className="flex items-center gap-3 py-2 border-b border-slate-800/50 last:border-0">
                <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden flex-shrink-0">
                  <img src={instructor.photoUrl} alt={instructor.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-parchment text-sm truncate">{instructor.name}</p>
                  <p className="text-slate-500 text-xs">{instructor.rank}</p>
                </div>
                <span className="text-slate-500 text-xs">{instructor.branch}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed placeholder */}
      <div className="bg-dojo-dark border border-slate-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={16} className="text-crimson" />
          <h2 className="font-display text-lg text-parchment">Recent Activity</h2>
        </div>
        <p className="text-slate-500 text-sm">
          Activity log will be available when Supabase integration is connected.
        </p>
      </div>
    </div>
  );
}
