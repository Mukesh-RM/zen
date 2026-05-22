'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const timeline = [
  { year: '1300s', title: 'Origins in Okinawa', description: 'Karate\'s roots trace back to Okinawa\'s indigenous fighting art "Te" (hand), combined with Chinese martial arts influences from Fujian province.' },
  { year: '1609', title: 'Satsuma Invasion', description: 'Japan\'s Satsuma clan invades Okinawa, banning weapons. This accelerates the development of empty-hand fighting techniques among Okinawan peasants.' },
  { year: '1901', title: 'Karate Introduced to Schools', description: 'Master Itosu Anko introduces karate into the Okinawan school system, standardizing techniques and creating the Pinan (Heian) kata for students.' },
  { year: '1908', title: 'Birth of Tatsuo Shimabuku', description: 'The founder of Isshinryu is born in Chan village, Okinawa. He would later become one of the most influential karate masters of the 20th century.' },
  { year: '1956', title: 'Isshinryu Founded', description: 'On January 15, Master Tatsuo Shimabuku officially names his style "Isshinryu" — the One Heart Way. The system combines the best of Shorin-ryu and Goju-ryu.' },
  { year: '1960s', title: 'Karate Spreads Worldwide', description: 'American servicemen stationed in Okinawa learn Isshinryu and bring it back to the United States. It spreads rapidly across the globe.' },
  { year: '1994', title: 'Zen Isshinryu Arrives in India', description: 'Sensei R. Thirumalai establishes the All India Zen Isshinryu Karate Association in Chennai, bringing authentic Okinawan training to Tamil Nadu.' },
  { year: '2025', title: '30 Years of Excellence', description: 'Over 30 years of tradition, 500+ students trained, 12 branches across Tamil Nadu — continuing the legacy of the One Heart Way in India.' },
];

const comparisons = [
  { feature: 'Punch Style', isshinryu: 'Vertical fist (thumb on top)', shotokan: 'Horizontal fist (thumb down)', goju: 'Various angles' },
  { feature: 'Stances', isshinryu: 'Natural, higher stances', shotokan: 'Deep, long stances', goju: 'Deep, rooted stances' },
  { feature: 'Breathing', isshinryu: 'Natural, relaxed', shotokan: 'Sharp, forceful exhale', goju: 'Ibuki (hard breathing)' },
  { feature: 'Kata', isshinryu: '8 empty-hand + 3 weapons', shotokan: '26 kata', goju: '12 kata' },
  { feature: 'Philosophy', isshinryu: 'One Heart Way', shotokan: 'Way of the Empty Hand', goju: 'Hard-Soft Way' },
  { feature: 'Weapons', isshinryu: 'Bo, Sai, Tonfa', shotokan: 'Limited', goju: 'Limited' },
];

const katas = [
  { name: 'Seisan', meaning: 'Thirteen Hands', description: 'The first Isshinryu kata. It introduces the fundamental techniques and the characteristic vertical fist punch.' },
  { name: 'Seiunchin', meaning: 'Calm in the Storm', description: 'Focuses on strong stances, grabbing techniques, and close-quarter fighting.' },
  { name: 'Naihanchi Shodan', meaning: 'Iron Horse First Level', description: 'Performed entirely in kiba-dachi stance. Develops leg strength, hip power, and lateral movement.' },
  { name: 'Wansu', meaning: 'Dumping Form', description: 'Combines soft and hard techniques. Features the signature Isshinryu back fist and elbow strikes.' },
  { name: 'Chinto', meaning: 'Fighting to the East', description: 'Performed on a 45° angle. Includes one-legged stances, crane techniques, and dynamic turns.' },
  { name: 'Kusanku', meaning: 'Night Fighting / Viewing the Sky', description: 'The longest Isshinryu kata. Named after a Chinese diplomat who taught fighting techniques in Okinawa.' },
  { name: 'Sunsu', meaning: 'Son of the Old Man', description: 'Master Shimabuku\'s personal kata — the signature of Isshinryu. Combines techniques from all previous kata.' },
  { name: 'Sanchin', meaning: 'Three Battles', description: 'The breathing kata. Develops internal strength through tension, dynamic breathing, and muscular control.' },
];

export function AboutContent() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <SectionHeading subtitle="Our Heritage" align="center">
            The History of <span className="text-crimson">Isshinryu</span>
          </SectionHeading>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed text-center">
              Isshinryu Karate is more than a fighting system — it is a philosophy, a tradition,
              and a way of life that has been passed down from Okinawan masters through
              generations. Discover the rich history of karate and the unique path of the
              &ldquo;One Heart Way.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <SectionHeading subtitle="Key Milestones" align="center">
            Timeline
          </SectionHeading>

          <div className="max-w-3xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <RevealOnScroll key={item.year} delay={index * 0.1}>
                  <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block w-1/2" />
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-crimson border-4 border-dojo-dark flex items-center justify-center">
                        <span className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 md:w-1/2 bg-dojo-charcoal p-6 rounded-lg border border-slate-800">
                      <span className="font-mono text-xs text-crimson">{item.year}</span>
                      <h3 className="font-display text-xl text-parchment mt-1 mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <SectionHeading subtitle="What Makes Us Different" align="center">
            Isshinryu vs Other Styles
          </SectionHeading>

          <RevealOnScroll>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-6 font-mono text-xs text-slate-400 uppercase tracking-wider">Feature</th>
                    <th className="text-left py-4 px-6 font-mono text-xs text-crimson uppercase tracking-wider bg-crimson/5">Isshinryu</th>
                    <th className="text-left py-4 px-6 font-mono text-xs text-slate-400 uppercase tracking-wider">Shotokan</th>
                    <th className="text-left py-4 px-6 font-mono text-xs text-slate-400 uppercase tracking-wider">Goju-Ryu</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-800/50">
                      <td className="py-4 px-6 text-slate-300 text-sm">{row.feature}</td>
                      <td className="py-4 px-6 text-parchment text-sm bg-crimson/5">{row.isshinryu}</td>
                      <td className="py-4 px-6 text-slate-400 text-sm">{row.shotokan}</td>
                      <td className="py-4 px-6 text-slate-400 text-sm">{row.goju}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Kata List */}
      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <SectionHeading subtitle="The Isshinryu System" align="center">
            The 8 Empty-Hand Kata
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {katas.map((kata, index) => (
              <RevealOnScroll key={kata.name} delay={index * 0.1}>
                <div className="bg-dojo-charcoal p-6 rounded-lg border border-slate-800 h-full">
                  <h3 className="font-display text-xl text-parchment">{kata.name}</h3>
                  <p className="font-mono text-xs text-crimson mt-1 mb-3">{kata.meaning}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{kata.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="mt-10 text-center">
            <div className="bg-dojo-charcoal p-6 rounded-lg border border-gold/30 max-w-2xl mx-auto">
              <h3 className="font-display text-xl text-gold mb-2">Weapons Kata</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Isshinryu also includes 3 traditional weapons kata: <strong>Tokumine no Kun</strong> and{' '}
                <strong>Urashi no Kun</strong> (bo staff), plus <strong>Chatan Yara no Sai</strong>{' '}
                (sai truncheons), preserving the authentic Okinawan weapons tradition.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
