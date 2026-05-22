import type { Metadata } from 'next';
import { GradingPageClient } from './grading-content';

export const metadata: Metadata = {
  title: 'Grading Requirements',
  description: 'Complete grading requirements for each belt level. Information on examination schedules and the online grading application form.',
};

export default function GradingPage() {
  return <GradingPageClient />;
}
