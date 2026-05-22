'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, Grid3X3, List } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { events, pastEvents } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';

type ViewMode = 'grid' | 'list';
type EventType = 'ALL' | 'TOURNAMENT' | 'GRADING' | 'SEMINAR' | 'CAMP' | 'SPECIAL';

const upcomingEvents = events.filter((e) => new Date(e.date) > new Date());

export function EventsPageClient() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [typeFilter, setTypeFilter] = useState<EventType>('ALL');

  const filteredUpcoming = typeFilter === 'ALL'
    ? upcomingEvents
    : upcomingEvents.filter((e) => e.type === typeFilter);

  const filteredPast = typeFilter === 'ALL'
    ? pastEvents
    : pastEvents.filter((e) => e.type === typeFilter);

  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Calendar</p>
          <h1 className="section-heading mb-6">
            Upcoming <span className="text-crimson">Events</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Tournaments, grading exams, seminars, training camps, and special workshops
            across all Zen Isshinryu branches.
          </p>
        </div>
      </section>

      {/* Filters + View toggle */}
      <section className="py-8 bg-dojo-black border-b border-slate-800/50 sticky top-16 z-30">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {(['ALL', 'TOURNAMENT', 'GRADING', 'SEMINAR', 'CAMP', 'SPECIAL'] as EventType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 transition-all ${
                    typeFilter === type
                      ? 'bg-crimson text-white'
                      : 'bg-dojo-charcoal text-slate-400 hover:text-parchment border border-slate-800'
                  }`}
                >
                  {type === 'ALL' ? 'All' : type.charAt(0) + type.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'text-crimson' : 'text-slate-500'}`}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'text-crimson' : 'text-slate-500'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-dojo-dark">
        <div className="section-container">
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
          }>
            {filteredUpcoming.map((event, index) => (
              <RevealOnScroll key={event.id} delay={index * 0.1}>
                <div className={`dojo-card p-6 ${viewMode === 'list' ? 'flex flex-wrap gap-6 items-center' : ''}`}>
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-crimson bg-crimson/10 px-2 py-0.5">
                      {event.type}
                    </span>
                    <h3 className="font-display text-xl text-parchment mt-3 mb-3">{event.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={14} className="text-crimson" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-start gap-2 text-slate-400 text-sm">
                        <MapPin size={14} className="text-crimson mt-0.5" />
                        {event.location}
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Users size={14} className="text-crimson" />
                          {event.capacity} participants
                        </div>
                      )}
                      {event.cost !== undefined && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Clock size={14} className="text-crimson" />
                          {event.cost === 0 ? 'Free' : `₹${event.cost}`}
                        </div>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm mt-3">{event.description}</p>
                  </div>
                  {event.type === 'TOURNAMENT' && (
                    <a href="/tournament" className="crimson-btn font-mono text-xs inline-block mt-4">
                      Register Now
                    </a>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {filteredUpcoming.length === 0 && (
            <p className="text-slate-500 text-center py-12">No upcoming events matching this filter.</p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-dojo-black">
        <div className="section-container">
          <SectionHeading subtitle="Archive" align="center">
            Past Events
          </SectionHeading>

          <div className="space-y-4 max-w-3xl mx-auto">
            {filteredPast.map((event) => (
              <RevealOnScroll key={event.id}>
                <div className="dojo-card p-5 flex flex-wrap items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 bg-slate-800 px-2 py-0.5">
                    {event.type}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-parchment">{event.title}</h3>
                    <p className="text-slate-500 text-xs">{formatDate(event.date)}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
