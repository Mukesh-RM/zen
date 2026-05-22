'use client';

import { MapPin, Phone, MessageCircle, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Card } from '@/components/ui/Card';
import { branches } from '@/lib/data/branches';

export function BranchMap() {
  return (
    <section className="py-20 md:py-28 bg-dojo-dark">
      <div className="section-container">
        <SectionHeading subtitle="Our Network" align="center">
          Find Your Dojo
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <RevealOnScroll key={branch.id} delay={index * 0.1}>
              <Card className="p-6 h-full">
                {branch.isHeadOffice && (
                  <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-gold bg-gold/10 px-2 py-1 mb-3">
                    Head Office
                  </span>
                )}
                <h3 className="font-display text-lg text-parchment mb-3">{branch.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-crimson mt-0.5 flex-shrink-0" />
                    <p className="text-slate-400 text-sm">{branch.address}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-crimson flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-slate-400 text-sm hover:text-crimson transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle size={14} className="text-crimson flex-shrink-0" />
                    <a
                      href={`https://wa.me/${branch.whatsapp}`}
                      className="text-slate-400 text-sm hover:text-crimson transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div className="flex items-start gap-2">
                    <Calendar size={14} className="text-crimson mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500 text-xs">{branch.schedule}</p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
