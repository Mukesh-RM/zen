import type { Metadata } from 'next';
import { CreedContent } from './creed-content';

export const metadata: Metadata = {
  title: 'Karate Creed',
  description: 'The Isshinryu Karate Creed — the guiding principles of the One Heart Way. Read and reflect on the philosophical foundation of Isshinryu Karate.',
};

export default function CreedPage() {
  return <CreedContent />;
}
