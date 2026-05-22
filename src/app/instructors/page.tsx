import type { Metadata } from 'next';
import { InstructorsPageClient } from './instructors-content';

export const metadata: Metadata = {
  title: 'Instructors',
  description: 'Meet the Sensei and instructors of Zen Isshinryu Karate. Learn from experienced black belt instructors across Chennai branches.',
};

export default function InstructorsPage() {
  return <InstructorsPageClient />;
}
