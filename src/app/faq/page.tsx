import type { Metadata } from 'next';
import { faqs } from '@/lib/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Isshinryu Karate — joining, training, grading, tournaments, and kids programs.',
};

export default function FAQPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Frequently Asked Questions</p>
          <h1 className="section-heading mb-6">
            Your Questions <span className="text-crimson">Answered</span>
          </h1>
        </div>
      </section>
      <FAQAccordion faqs={faqs} />
    </main>
  );
}

import { FAQAccordion } from './accordion';
