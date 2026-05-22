'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';
import { events } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';
import toast from 'react-hot-toast';

const tournamentEvents = events.filter((e) => e.type === 'TOURNAMENT');

type Step = 1 | 2 | 3 | 4;

interface FormData {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  beltLevel: string;
  yearsTraining: string;
  homeDojo: string;
  categories: string[];
  ageGroup: string;
  eventId: string;
}

export function TournamentPageClient() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    beltLevel: '',
    yearsTraining: '',
    homeDojo: '',
    categories: [],
    ageGroup: '',
    eventId: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCategory = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success('Registration submitted successfully!');
  };

  if (submitted) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <Trophy size={64} className="text-gold mx-auto mb-6" />
          <h1 className="font-display text-3xl text-parchment mb-4">Registration Complete!</h1>
          <p className="text-slate-400 max-w-md mx-auto">
            Thank you for registering. You will receive a confirmation email shortly.
            Payment link will be shared once Razorpay integration is active.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Competition</p>
          <h1 className="section-heading mb-6">
            Tournament <span className="text-crimson">Registration</span>
          </h1>
        </div>
      </section>

      {/* Tournament List */}
      <section className="py-16 bg-dojo-dark">
        <div className="section-container max-w-4xl">
          <SectionHeading subtitle="Upcoming Tournaments" align="center">
            Select Your Event
          </SectionHeading>
          <div className="space-y-4 mb-12">
            {tournamentEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => updateField('eventId', event.id)}
                className={`p-6 rounded-lg border cursor-pointer transition-all ${
                  formData.eventId === event.id
                    ? 'border-crimson bg-crimson/5'
                    : 'border-slate-800 bg-dojo-charcoal hover:border-slate-600'
                }`}
              >
                <h3 className="font-display text-xl text-parchment">{event.title}</h3>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="flex items-center gap-1 text-slate-400 text-sm">
                    <Calendar size={14} className="text-crimson" /> {formatDate(event.date)}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-sm">
                    <MapPin size={14} className="text-crimson" /> {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      {formData.eventId && (
        <section className="py-16 bg-dojo-black">
          <div className="section-container max-w-2xl">
            <SectionHeading subtitle="Registration Form" align="center">
              Step {step} of 4
            </SectionHeading>

            {/* Progress bar */}
            <div className="flex gap-2 mb-10">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    s <= step ? 'bg-crimson' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <>
                  <h3 className="font-display text-xl text-parchment mb-4">Personal Information</h3>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => updateField('dob', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </>
              )}

              {/* Step 2: Martial Arts Info */}
              {step === 2 && (
                <>
                  <h3 className="font-display text-xl text-parchment mb-4">Martial Arts Information</h3>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Belt Level *</label>
                    <select
                      value={formData.beltLevel}
                      onChange={(e) => updateField('beltLevel', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                    >
                      <option value="">Select belt level</option>
                      {['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Purple', 'Brown', 'Black 1st Dan', 'Black 2nd Dan', 'Black 3rd Dan+'].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Years of Training *</label>
                    <input
                      type="number"
                      value={formData.yearsTraining}
                      onChange={(e) => updateField('yearsTraining', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      min="0"
                      max="50"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2">Home Dojo/Branch *</label>
                    <input
                      type="text"
                      value={formData.homeDojo}
                      onChange={(e) => updateField('homeDojo', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                      placeholder="Your dojo or branch name"
                    />
                  </div>
                </>
              )}

              {/* Step 3: Event Selection */}
              {step === 3 && (
                <>
                  <h3 className="font-display text-xl text-parchment mb-4">Event Categories</h3>
                  <div className="space-y-4">
                    {['kata', 'kumite', 'weapons'].map((cat) => (
                      <label
                        key={cat}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.categories.includes(cat)
                            ? 'border-crimson bg-crimson/5'
                            : 'border-slate-700 bg-dojo-charcoal hover:border-slate-500'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                          formData.categories.includes(cat) ? 'border-crimson bg-crimson' : 'border-slate-500'
                        }`}>
                          {formData.categories.includes(cat) && <span className="text-white text-xs">✓</span>}
                        </div>
                        <div>
                          <span className="text-parchment capitalize text-lg">{cat === 'kata' ? 'Kata (Forms)' : cat === 'kumite' ? 'Kumite (Sparring)' : 'Weapons (Bo/Sai)'}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-400 mb-2 mt-6">Age Group *</label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => updateField('ageGroup', e.target.value)}
                      className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"
                    >
                      <option value="">Select age group</option>
                      <option value="kids">Kids (5–12)</option>
                      <option value="juniors">Juniors (13–17)</option>
                      <option value="adults">Adults (18–39)</option>
                      <option value="seniors">Seniors (40+)</option>
                    </select>
                  </div>
                </>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <>
                  <h3 className="font-display text-xl text-parchment mb-4">Review Your Registration</h3>
                  <div className="bg-dojo-charcoal rounded-lg p-6 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Name:</span>
                      <span className="text-parchment">{formData.fullName || '—'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Email:</span>
                      <span className="text-parchment">{formData.email || '—'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Phone:</span>
                      <span className="text-parchment">{formData.phone || '—'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Belt Level:</span>
                      <span className="text-parchment">{formData.beltLevel || '—'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Age Group:</span>
                      <span className="text-parchment">{formData.ageGroup || '—'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Categories:</span>
                      <span className="text-parchment">{formData.categories.join(', ') || '—'}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs mt-4">
                    Payment integration (Razorpay) will be activated after you connect your account.
                  </p>
                </>
              )}
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as Step : prev))}
                className={`font-mono text-xs uppercase tracking-[0.15em] px-6 py-3 border border-slate-700 text-slate-400 hover:border-slate-500 transition-colors ${
                  step === 1 ? 'opacity-0 pointer-events-none' : ''
                }`}
              >
                ← Back
              </button>
              {step < 4 ? (
                <button
                  onClick={() => setStep((prev) => (prev + 1) as Step)}
                  className="crimson-btn font-mono text-xs"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="crimson-btn font-mono text-xs"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
