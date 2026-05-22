import type { Metadata } from 'next';
import { events, pastEvents } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming and past events — tournaments, grading examinations, seminars, camps, and special workshops across all Zen Isshinryu branches.',
};

const upcomingEvents = events.filter((e) => new Date(e.date) > new Date());

export default function EventsPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Calendar</p>
          <h1 className="section-heading mb-6">Upcoming <span className="text-crimson">Events</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Tournaments, grading exams, seminars, training camps, and special workshops across all Zen Isshinryu branches.
          </p>
        </div>
      </section>

      <EventsInteractive events={upcomingEvents} pastEvents={pastEvents} />
    </main>
  );
}

import { EventsInteractive } from './events-interactive';
