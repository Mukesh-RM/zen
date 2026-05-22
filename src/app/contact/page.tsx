import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { branches } from '@/lib/data/branches';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

const ContactForm = dynamic(() => import('./contact-form'), { ssr: false });

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Zen Isshinryu Karate. Find branch phone numbers, WhatsApp contacts, and send us a message.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Get In Touch</p>
          <h1 className="section-heading mb-6">Contact <span className="text-crimson">Us</span></h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">We reply within 24 hours. Reach out by phone, WhatsApp, or use the form below.</p>
        </div>
      </section>

      <section className="py-16 bg-dojo-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-dojo-charcoal p-8 rounded-xl border border-slate-800">
              <h2 className="font-display text-2xl text-parchment mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-display text-2xl text-parchment mb-6">Branch Contact Numbers</h2>
              <div className="space-y-4">
                {branches.map((branch) => (
                  <div key={branch.id} className="p-4 bg-dojo-charcoal rounded-lg border border-slate-800">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin size={14} className="text-crimson mt-0.5" />
                      <div><p className="text-parchment text-sm font-display">{branch.name}</p><p className="text-slate-500 text-xs">{branch.address}</p></div>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <a href={`tel:${branch.phone}`} className="flex items-center gap-1 text-slate-400 text-xs hover:text-crimson transition-colors"><Phone size={12} /> {branch.phone}</a>
                      <a href={`https://wa.me/${branch.whatsapp}`} className="flex items-center gap-1 text-slate-400 text-xs hover:text-green-500 transition-colors"><MessageCircle size={12} /> WhatsApp</a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-dojo-charcoal rounded-lg border border-crimson/20 text-center">
                <h3 className="font-mono text-xs text-crimson uppercase tracking-[0.2em] mb-2">Response Promise</h3>
                <p className="text-slate-400 text-sm">We reply to all inquiries within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
