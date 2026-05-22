import type { Metadata } from 'next';
import { beltRequirements } from '@/lib/data/beltRequirements';
import { events } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Grading Requirements',
  description: 'Complete grading requirements for each belt level. Information on examination schedules and the online grading application form.',
};

const gradingEvents = events.filter((e) => e.type === 'GRADING' && new Date(e.date) > new Date());

const ageGroups = [
  { name: 'Kids', ages: '5–12 years', description: 'Fun, structured learning focused on coordination, discipline, and confidence building.' },
  { name: 'Juniors', ages: '13–17 years', description: 'Skill development, tournament preparation, and leadership training for teenagers.' },
  { name: 'Adults', ages: '18–39 years', description: 'Comprehensive martial arts training including self-defense, fitness, and advanced techniques.' },
  { name: 'Seniors', ages: '40+ years', description: 'Adapted training focusing on health, flexibility, and martial arts at your own pace.' },
];

export default function GradingPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Grading & Advancement</p>
          <h1 className="section-heading mb-6">
            Grading <span className="text-crimson">Requirements</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Detailed requirements for each belt level, upcoming grading dates, and the online
            application process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">Belt-by-Belt Breakdown</p>
            <h2 className="section-heading mb-4">Progression Requirements</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-4 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Belt</th>
                  <th className="text-left py-4 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Min. Months</th>
                  <th className="text-left py-4 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Kata</th>
                  <th className="text-left py-4 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Sparring</th>
                </tr>
              </thead>
              <tbody>
                {beltRequirements.map((belt) => (
                  <tr key={belt.rank} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-2 block rounded-sm" style={{ backgroundColor: belt.color }} />
                        <span className="text-parchment text-sm">{belt.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-300 text-sm">{belt.minimumMonths} months</td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{belt.kata.join(', ')}</td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{belt.sparring.slice(0, 60)}...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">Programs by Age</p>
            <h2 className="section-heading mb-4">Age Categories</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ageGroups.map((group) => (
              <div key={group.name} className="bg-dojo-dark border border-slate-800 rounded-lg p-6 text-center h-full hover:border-slate-600 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="font-display text-xl text-parchment mb-2">{group.name}</h3>
                <p className="font-mono text-xs text-crimson mb-3">{group.ages}</p>
                <p className="text-slate-400 text-sm">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">Exam Schedule</p>
            <h2 className="section-heading mb-4">Upcoming Grading Dates</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gradingEvents.length > 0 ? gradingEvents.map((event) => (
              <div key={event.id} className="bg-dojo-dark border border-slate-800 rounded-lg p-6 hover:border-slate-600 transition-all duration-300">
                <h3 className="font-display text-xl text-parchment mb-4">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {event.location}
                  </div>
                </div>
                <p className="text-slate-500 text-sm mt-3">{event.description}</p>
              </div>
            )) : (
              <p className="text-slate-500 text-center col-span-2">No upcoming grading exams scheduled. Check back soon.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
