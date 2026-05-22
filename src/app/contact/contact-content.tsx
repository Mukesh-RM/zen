'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { branches } from '@/lib/data/branches';
import toast from 'react-hot-toast';

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent! We will respond within 24 hours.');
  };

  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Get In Touch</p>
          <h1 className="section-heading mb-6">
            Contact <span className="text-crimson">Us</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            We reply within 24 hours. Reach out by phone, WhatsApp, or use the form below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-dojo-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <RevealOnScroll direction="left">
              <div className="bg-dojo-charcoal p-8 rounded-xl border border-slate-800">
                <h2 className="font-display text-2xl text-parchment mb-6">Send a Message</h2>
                {submitted ? (
                  <div className="text-center py-10">
                    <Send size={48} className="text-crimson mx-auto mb-4" />
                    <h3 className="font-display text-xl text-parchment mb-2">Message Sent!</h3>
                    <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-2">Nearest Branch</label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      >
                        <option value="">Select branch</option>
                        {branches.map((b) => (
                          <option key={b.id} value={b.name}>{b.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-2">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none resize-none"
                      />
                    </div>
                    <button type="submit" className="crimson-btn w-full font-mono text-xs">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>

            {/* Branch Contacts */}
            <RevealOnScroll direction="right" delay={0.2}>
              <div>
                <h2 className="font-display text-2xl text-parchment mb-6">Branch Contact Numbers</h2>
                <div className="space-y-4">
                  {branches.map((branch) => (
                    <div key={branch.id} className="p-4 bg-dojo-charcoal rounded-lg border border-slate-800">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin size={14} className="text-crimson mt-0.5" />
                        <div>
                          <p className="text-parchment text-sm font-display">{branch.name}</p>
                          <p className="text-slate-500 text-xs">{branch.address}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-3">
                        <a
                          href={`tel:${branch.phone}`}
                          className="flex items-center gap-1 text-slate-400 text-xs hover:text-crimson transition-colors"
                        >
                          <Phone size={12} /> {branch.phone}
                        </a>
                        <a
                          href={`https://wa.me/${branch.whatsapp}`}
                          className="flex items-center gap-1 text-slate-400 text-xs hover:text-green-500 transition-colors"
                        >
                          <MessageCircle size={12} /> WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-dojo-charcoal rounded-lg border border-crimson/20 text-center">
                  <h3 className="font-mono text-xs text-crimson uppercase tracking-[0.2em] mb-2">Response Promise</h3>
                  <p className="text-slate-400 text-sm">We reply to all inquiries within 24 hours.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
