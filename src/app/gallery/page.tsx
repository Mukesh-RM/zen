import type { Metadata } from 'next';
import { galleryItems } from '@/lib/data/gallery';
import { GalleryInteractive } from './gallery-interactive';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo and video gallery of Zen Isshinryu Karate — training sessions, tournaments, gradings, and events.',
};

export default function GalleryPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Visual Journey</p>
          <h1 className="section-heading mb-6">Photo <span className="text-crimson">Gallery</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Moments captured from training sessions, tournaments, grading ceremonies, and special events across all our branches.
          </p>
        </div>
      </section>
      <GalleryInteractive items={galleryItems} />
    </main>
  );
}
