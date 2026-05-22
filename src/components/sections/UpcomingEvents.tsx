'use client';

import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Card } from '@/components/ui/Card';
import { events } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';

const upcomingEvents = events.filter((e) => new Date(e.date) > new Date()).slice(0, 3);

export function UpcomingEvents() {
  return (
    <section className="py-20 md:py-28 bg-dojo-black">
      <div className="section-container">
        <SectionHeading subtitle="What's Coming" align="center">
          Upcoming Events
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <RevealOnScroll key={event.id} delay={index * 0.15}>
              <Card className="p-6 h-full flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-crimson bg-crimson/10 px-2 py-1 inline-block w-fit mb-4">
                  {event.type}
                </span>

                <h3 className="font-display text-xl text-parchment mb-4">{event.title}</h3>

                <div className="space-y-2 flex-1">
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
                      Capacity: {event.capacity} participants
                    </div>
                  )}
                </div>

                <Link
                  href={`/events#${event.id}`}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-crimson hover:text-gold transition-colors mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/events" className="ghost-btn inline-block">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
