import type { Metadata } from 'next';
import { GalleryPageClient } from './gallery-content';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo and video gallery of Zen Isshinryu Karate — training sessions, tournaments, gradings, and events.',
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
