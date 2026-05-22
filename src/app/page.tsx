import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophyStrip } from '@/components/sections/PhilosophyStrip';
import { AboutStyle } from '@/components/sections/AboutStyle';
import { BeltProgression } from '@/components/sections/BeltProgression';
import { BranchMap } from '@/components/sections/BranchMap';
import { UpcomingEvents } from '@/components/sections/UpcomingEvents';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Zen Isshinryu Karate — All India Association',
  description:
    'The All India Zen Isshinryu Karate Association, headquartered in Chennai. Learn authentic Okinawan Isshinryu Karate from trained Senseis across Tamil Nadu.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophyStrip />
      <AboutStyle />
      <BeltProgression />
      <BranchMap />
      <UpcomingEvents />
      <Testimonials />
      <CTABanner />
    </>
  );
}
