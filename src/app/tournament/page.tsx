import type { Metadata } from 'next';
import { events } from '@/lib/data/events';
import dynamic from 'next/dynamic';

const TournamentForm = dynamic(() => import('./tournament-form'), { ssr: false });

export const metadata: Metadata = {
  title: 'Tournament Registration',
  description: 'Register for upcoming Isshinryu Karate tournaments. Multi-step registration with kata, kumite, and weapons categories.',
};

const tournamentEvents = events.filter((e) => e.type === 'TOURNAMENT');

export default function TournamentPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Competition</p>
          <h1 className="section-heading mb-6">Tournament <span className="text-crimson">Registration</span></h1>
        </div>
      </section>

      <section className="py-16 bg-dojo-dark">
        <div className="section-container max-w-4xl">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">Upcoming Tournaments</p>
            <h2 className="section-heading mb-4">Select Your Event</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>
          <TournamentForm events={tournamentEvents} />
        </div>
      </section>
    </main>
  );
}
