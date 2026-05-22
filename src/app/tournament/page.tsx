import type { Metadata } from 'next';
import { TournamentPageClient } from './tournament-content';

export const metadata: Metadata = {
  title: 'Tournament Registration',
  description: 'Register for upcoming Isshinryu Karate tournaments. Multi-step registration with kata, kumite, and weapons categories.',
};

export default function TournamentPage() {
  return <TournamentPageClient />;
}
