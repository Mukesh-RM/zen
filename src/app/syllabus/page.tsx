import type { Metadata } from 'next';
import { SyllabusPageClient } from './syllabus-content';

export const metadata: Metadata = {
  title: 'Syllabus',
  description: 'Complete Isshinryu Karate syllabus from white belt to black belt. View all kata, techniques, and requirements for each rank.',
};

export default function SyllabusPage() {
  return <SyllabusPageClient />;
}
