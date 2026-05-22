import type { Metadata } from 'next';
import { beltRequirements } from '@/lib/data/beltRequirements';

export const metadata: Metadata = {
  title: 'Syllabus',
  description: 'Complete Isshinryu Karate syllabus from white belt to black belt. View all kata, techniques, and requirements for each rank.',
};

export default function SyllabusPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Curriculum</p>
          <h1 className="section-heading mb-6">Complete <span className="text-crimson">Syllabus</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A structured path from white belt to black belt, designed to develop technique,
            discipline, and character through authentic Isshinryu training.
          </p>
        </div>
      </section>

      <section className="py-20 bg-dojo-dark">
        <div className="section-container max-w-4xl">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">Belt Requirements</p>
            <h2 className="section-heading mb-4">Journey Through the Ranks</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <SyllabusAccordion belts={beltRequirements} />

          <div className="text-center mt-12">
            <PrintSyllabusButton />
          </div>
        </div>
      </section>
    </main>
  );
}

import { SyllabusAccordion } from './accordion';
import { PrintSyllabusButton } from './print-button';
