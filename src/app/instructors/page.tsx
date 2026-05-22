import type { Metadata } from 'next';
import { instructors } from '@/lib/data/instructors';

export const metadata: Metadata = {
  title: 'Instructors',
  description: 'Meet the Sensei and instructors of Zen Isshinryu Karate. Learn from experienced black belt instructors across Chennai branches.',
};

const featured = instructors.find((i) => i.featured);
const others = instructors.filter((i) => !i.featured);

export default function InstructorsPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Team</p>
          <h1 className="section-heading mb-6">Meet Our <span className="text-crimson">Instructors</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Dedicated black belt instructors committed to preserving and teaching authentic Okinawan Isshinryu Karate.
          </p>
        </div>
      </section>

      {featured && (
        <section className="py-16 bg-dojo-dark">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-dojo-charcoal rounded-xl overflow-hidden border border-gold/20">
              <div className="aspect-square relative">
                <img src={featured.photoUrl} alt={featured.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dojo-charcoal via-transparent to-transparent" />
              </div>
              <div className="p-8 lg:p-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold bg-gold/10 px-2 py-1">Chief Instructor</span>
                <h2 className="font-display text-3xl lg:text-4xl text-parchment mt-4 mb-2">{featured.name}</h2>
                <span className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-sm">
                  <span className="block w-10 h-2.5" style={{ backgroundColor: '#1A1A1A', boxShadow: '0 0 4px rgba(184,150,12,0.5)' }} />
                  {featured.rank}
                </span>
                <p className="text-slate-400 text-sm mt-2">{featured.branch}</p>
                <p className="text-slate-300 leading-relaxed mt-6">{featured.bio}</p>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-crimson/5 border border-crimson/20 rounded-lg p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold mx-auto mb-4"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                <h3 className="font-display text-2xl text-parchment mb-3">World Record Holder</h3>
                <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Sensei R. Thirumalai holds the world record for the longest karate marathon, bringing international recognition to Isshinryu Karate in India.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">The Teaching Team</p>
            <h2 className="section-heading mb-4">Our Black Belt Instructors</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <InstructorsGrid instructors={others} />
        </div>
      </section>
    </main>
  );
}

import { InstructorsGrid } from './grid';
