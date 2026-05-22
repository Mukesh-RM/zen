'use client';

import { motion } from 'framer-motion';

const timeline = [
  { year: '1300s', title: 'Origins in Okinawa', description: 'Karate roots trace back to Okinawa\'s indigenous fighting art "Te" (hand), combined with Chinese martial arts influences from Fujian province.' },
  { year: '1609', title: 'Satsuma Invasion', description: 'Japan\'s Satsuma clan invades Okinawa, banning weapons. This accelerates the development of empty-hand fighting techniques among Okinawan peasants.' },
  { year: '1901', title: 'Karate Introduced to Schools', description: 'Master Itosu Anko introduces karate into the Okinawan school system, standardizing techniques and creating the Pinan (Heian) kata for students.' },
  { year: '1908', title: 'Birth of Tatsuo Shimabuku', description: 'The founder of Isshinryu is born in Chan village, Okinawa. He would later become one of the most influential karate masters of the 20th century.' },
  { year: '1956', title: 'Isshinryu Founded', description: 'On January 15, Master Tatsuo Shimabuku officially names his style "Isshinryu" — the One Heart Way. The system combines the best of Shorin-ryu and Goju-ryu.' },
  { year: '1960s', title: 'Karate Spreads Worldwide', description: 'American servicemen stationed in Okinawa learn Isshinryu and bring it back to the United States. It spreads rapidly across the globe.' },
  { year: '1994', title: 'Zen Isshinryu Arrives in India', description: 'Sensei R. Thirumalai establishes the All India Zen Isshinryu Karate Association in Chennai, bringing authentic Okinawan training to Tamil Nadu.' },
  { year: '2025', title: '30 Years of Excellence', description: 'Over 30 years of tradition, 500+ students trained, 12 branches across Tamil Nadu — continuing the legacy of the One Heart Way in India.' },
];

export function AboutTimeline() {
  return (
    <section className="py-20 bg-dojo-dark">
      <div className="section-container">
        <div className="mb-12 md:mb-16 text-center">
          <p className="section-subheading mb-3">Key Milestones</p>
          <h2 className="section-heading mb-4">Timeline</h2>
          <div className="h-[2px] bg-crimson w-16 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
