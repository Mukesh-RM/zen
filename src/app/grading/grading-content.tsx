'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { beltRequirements } from '@/lib/data/beltRequirements';
import { events } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, Users } from 'lucide-react';

const gradingEvents = events.filter((e) => e.type === 'GRADING' && new Date(e.date) > new Date());

const ageGroups = [
  { name: 'Kids', ages: '5–12 years', description: 'Fun, structured learning focused on coordination, discipline, and confidence building.' },
  { name: 'Juniors', ages: '13–17 years', description: 'Skill development, tournament preparation, and leadership training for teenagers.' },
  { name: 'Adults', ages: '18–39 years', description: 'Comprehensive martial arts training including self-defense, fitness, and advanced techniques.' },
  { name: 'Seniors', ages: '40+ years', description: 'Adapted training focusing on health, flexibility, and martial arts at your own pace.' },
];

export function GradingPageClient() {
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

      {/* Requirements Table */}
      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <SectionHeading subtitle="Belt-by-Belt Breakdown" align="center">
            Progression Requirements
          </SectionHeading>

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

      {/* Age Groups */}
      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <SectionHeading subtitle="Programs by Age" align="center">
            Age Categories
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ageGroups.map((group, index) => (
              <RevealOnScroll key={group.name} delay={index * 0.1}>
                <div className="dojo-card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mx-auto mb-4">
                    <Users size={20} className="text-crimson" />
                  </div>
                  <h3 className="font-display text-xl text-parchment mb-2">{group.name}</h3>
                  <p className="font-mono text-xs text-crimson mb-3">{group.ages}</p>
                  <p className="text-slate-400 text-sm">{group.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Grading */}
      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <SectionHeading subtitle="Exam Schedule" align="center">
            Upcoming Grading Dates
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gradingEvents.length > 0 ? gradingEvents.map((event) => (
              <RevealOnScroll key={event.id}>
                <div className="dojo-card p-6">
                  <h3 className="font-display text-xl text-parchment mb-4">{event.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar size={14} className="text-crimson" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock size={14} className="text-crimson" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm mt-3">{event.description}</p>
                </div>
              </RevealOnScroll>
            )) : (
              <p className="text-slate-500 text-center col-span-2">No upcoming grading exams scheduled. Check back soon.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
