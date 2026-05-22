import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const BookForm = dynamic(() => import('./book-form'), { ssr: false });

export const metadata: Metadata = {
  title: 'Book a Trial Class',
  description: 'Book a free trial karate class at Zen Isshinryu. Select your nearest branch and preferred time. First class free!',
};

export default function BookPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Start Your Journey</p>
          <h1 className="section-heading mb-6">Book a <span className="text-crimson">Trial Class</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Experience authentic Isshinryu Karate firsthand. Your first trial class is completely free — no commitment required.
          </p>
        </div>
      </section>
      <section className="py-16 bg-dojo-dark">
        <div className="section-container max-w-xl">
          <BookForm />
        </div>
      </section>
    </main>
  );
}
