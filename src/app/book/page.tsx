import type { Metadata } from 'next';
import { BookPageClient } from './book-content';

export const metadata: Metadata = {
  title: 'Book a Trial Class',
  description: 'Book a free trial karate class at Zen Isshinryu. Select your nearest branch and preferred time. First class free!',
};

export default function BookPage() {
  return <BookPageClient />;
}
