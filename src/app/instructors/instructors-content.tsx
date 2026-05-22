'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { BeltBadge } from '@/components/ui/BeltBadge';
import { instructors } from '@/lib/data/instructors';

export function InstructorsPageClient() {
  const [selectedInstructor, setSelectedInstructor] = useState<typeof instructors[0] | null>(null);

  const featured = instructors.find((i) => i.featured);
  const others = instructors.filter((i) => !i.featured);

  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Team</p>
          <h1 className="section-heading mb-6">
            Meet Our <span className="text-crimson">Instructors</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Dedicated black belt instructors committed to preserving and teaching authentic
            Okinawan Isshinryu Karate.
          </p>
        </div>
      </section>

      {/* Featured Instructor */}
      {featured && (
        <section className="py-16 bg-dojo-dark">
          <div className="section-container">
            <RevealOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-dojo-charcoal rounded-xl overflow-hidden border border-gold/20">
                <div className="aspect-square relative">
                  <img
                    src={featured.photoUrl}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dojo-charcoal via-transparent to-transparent" />
                </div>
                <div className="p-8 lg:p-12">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold bg-gold/10 px-2 py-1">
                    Chief Instructor
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl text-parchment mt-4 mb-2">
                    {featured.name}
                  </h2>
                  <BeltBadge rank={featured.rank} size="lg" />
                  <p className="text-slate-400 text-sm mt-2">{featured.branch}</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Award size={16} className="text-gold" />
                      <span>{featured.rank} — {featured.danLevel}th Dan Black Belt</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <MapPin size={16} className="text-crimson" />
                      <span>{featured.branch}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mt-6">{featured.bio}</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* World Record Section */}
            <RevealOnScroll className="mt-12">
              <div className="bg-crimson/5 border border-crimson/20 rounded-lg p-8 text-center">
                <Award size={40} className="text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl text-parchment mb-3">World Record Holder</h3>
                <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Sensei R. Thirumalai holds the world record for the longest karate marathon,
                  bringing international recognition to Isshinryu Karate in India. His dedication
                  and endurance exemplify the indomitable spirit of the One Heart Way.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Instructor Grid */}
      <section className="py-20 bg-dojo-black">
        <div className="section-container">
          <SectionHeading subtitle="The Teaching Team" align="center">
            Our Black Belt Instructors
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((instructor, index) => (
              <RevealOnScroll key={instructor.id} delay={index * 0.1}>
                <div
                  onClick={() => setSelectedInstructor(instructor)}
                  className="dojo-card p-6 cursor-pointer h-full"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-800">
                    <img
                      src={instructor.photoUrl}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-display text-lg text-parchment">{instructor.name}</h3>
                    <BeltBadge rank={instructor.rank} size="sm" className="justify-center mt-1" />
                    <p className="text-slate-500 text-xs mt-2">{instructor.branch}</p>
                    <p className="text-slate-400 text-sm mt-3 line-clamp-2">{instructor.bio}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Modal */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div
              className="bg-dojo-dark border border-slate-800 rounded-xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-parchment"
              >
                <X size={20} />
              </button>
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-crimson/30">
                  <img src={selectedInstructor.photoUrl} alt={selectedInstructor.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-2xl text-parchment">{selectedInstructor.name}</h3>
                <BeltBadge rank={selectedInstructor.rank} size="md" className="justify-center mt-2" />
                <p className="text-slate-400 text-sm mt-2">{selectedInstructor.branch}</p>
              </div>
              <p className="text-slate-300 leading-relaxed">{selectedInstructor.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
