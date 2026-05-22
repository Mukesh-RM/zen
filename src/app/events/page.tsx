import type { Metadata } from 'next';
import { EventsPageClient } from './events-content';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming and past events — tournaments, grading examinations, seminars, camps, and special workshops across all Zen Isshinryu branches.',
};

export default function EventsPage() {
  return <EventsPageClient />;
}
