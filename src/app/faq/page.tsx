import type { Metadata } from 'next';
import { FAQPageClient } from './faq-content';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Isshinryu Karate — joining, training, grading, tournaments, and kids programs.',
};

export default function FAQPage() {
  return <FAQPageClient />;
}
