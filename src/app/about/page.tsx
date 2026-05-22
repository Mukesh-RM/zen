import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Karate',
  description: 'Discover the history of Karate and Isshinryu, founded by Master Tatsuo Shimabuku in 1956. Learn about Okinawan martial arts traditions.',
};

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
  { name: 'Chinto', meaning: 'Fighting to the East', description: 'Performed on a 45 degree angle. Includes one-legged stances, crane techniques, and dynamic turns.' },
  { name: 'Kusanku', meaning: 'Night Fighting / Viewing the Sky', description: 'The longest Isshinryu kata. Named after a Chinese diplomat who taught fighting techniques in Okinawa.' },
  { name: 'Sunsu', meaning: 'Son of the Old Man', description: 'Master Shimabuku\'s personal kata — the signature of Isshinryu. Combines techniques from all previous kata.' },
  { name: 'Sanchin', meaning: 'Three Battles', description: 'The breathing kata. Develops internal strength through tension, dynamic breathing, and muscular control.' },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Heritage</p>
          <h1 className="section-heading mb-6">The History of <span className="text-crimson">Isshinryu</span></h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed">
              Isshinryu Karate is more than a fighting system — it is a philosophy, a tradition,
              and a way of life that has been passed down from Okinawan masters through
              generations. Discover the rich history of karate and the unique path of the One Heart Way.
            </p>
          </div>
        </div>
      </section>

      <AboutTimeline />

      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">What Makes Us Different</p>
            <h2 className="section-heading mb-4">Isshinryu vs Other Styles</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

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
        </div>
      </section>

      <section className="py-20 bg-dojo-dark">
        <div className="section-container">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">The Isshinryu System</p>
            <h2 className="section-heading mb-4">The 8 Empty-Hand Kata</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {katas.map((kata) => (
              <div key={kata.name} className="bg-dojo-charcoal p-6 rounded-lg border border-slate-800 h-full">
                <h3 className="font-display text-xl text-parchment">{kata.name}</h3>
                <p className="font-mono text-xs text-crimson mt-1 mb-3">{kata.meaning}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{kata.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="bg-dojo-charcoal p-6 rounded-lg border border-gold/30 max-w-2xl mx-auto">
              <h3 className="font-display text-xl text-gold mb-2">Weapons Kata</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Isshinryu also includes 3 traditional weapons kata: <strong>Tokumine no Kun</strong> and <strong>Urashi no Kun</strong> (bo staff), plus <strong>Chatan Yara no Sai</strong> (sai truncheons), preserving the authentic Okinawan weapons tradition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { AboutTimeline } from './timeline';
