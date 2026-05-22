import type { Metadata } from 'next';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'About Karate',
  description: 'Discover the history of Karate and Isshinryu, founded by Master Tatsuo Shimabuku in 1956. Learn about Okinawan martial arts traditions.',
};

export default function AboutPage() {
  return <AboutContent />;
}
