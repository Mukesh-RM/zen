'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { Event } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import toast from 'react-hot-toast';

type Step = 1 | 2 | 3 | 4;

interface FormData {
  fullName: string; dob: string; email: string; phone: string;
  beltLevel: string; yearsTraining: string; homeDojo: string;
  categories: string[]; ageGroup: string; eventId: string;
}

export default function TournamentForm({ events }: { events: Event[] }) {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '', dob: '', email: '', phone: '', beltLevel: '',
    yearsTraining: '', homeDojo: '', categories: [], ageGroup: '', eventId: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string | string[]) => setFormData(prev => ({ ...prev, [field]: value }));
  const toggleCategory = (cat: string) => setFormData(prev => ({
    ...prev,
    categories: prev.categories.includes(cat) ? prev.categories.filter(c => c !== cat) : [...prev.categories, cat],
  }));

  if (submitted) {
    return (
      <div className="text-center p-8">
        <Trophy size={64} className="text-gold mx-auto mb-6" />
        <h2 className="font-display text-3xl text-parchment mb-4">Registration Complete!</h2>
        <p className="text-slate-400 max-w-md mx-auto">Thank you for registering. You will receive a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 mb-12">
        {events.map((event) => (
          <div key={event.id} onClick={() => updateField('eventId', event.id)}
            className={`p-6 rounded-lg border cursor-pointer transition-all ${formData.eventId === event.id ? 'border-crimson bg-crimson/5' : 'border-slate-800 bg-dojo-charcoal hover:border-slate-600'}`}>
            <h3 className="font-display text-xl text-parchment">{event.title}</h3>
            <div className="flex flex-wrap gap-4 mt-3">
              <span className="flex items-center gap-1 text-slate-400 text-sm"><Calendar size={14} className="text-crimson" /> {formatDate(event.date)}</span>
              <span className="flex items-center gap-1 text-slate-400 text-sm"><MapPin size={14} className="text-crimson" /> {event.location}</span>
            </div>
          </div>
        ))}
      </div>

      {formData.eventId && (
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <p className="section-subheading mb-3">Registration Form</p>
            <h2 className="section-heading mb-4">Step {step} of 4</h2>
            <div className="h-[2px] bg-crimson w-16 mx-auto" />
          </div>

          <div className="flex gap-2 mb-10">
            {[1,2,3,4].map(s => <div key={s} className={`h-1 flex-1 rounded-full transition-all ${s <= step ? 'bg-crimson' : 'bg-slate-800'}`} />)}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-6">
            {step === 1 && <>
              <h3 className="font-display text-xl text-parchment mb-4">Personal Information</h3>
              {field('Full Name *', formData.fullName, (v) => updateField('fullName', v), 'text', 'Enter your full name')}
              {field('Date of Birth *', formData.dob, (v) => updateField('dob', v), 'date')}
              {field('Email *', formData.email, (v) => updateField('email', v), 'email', 'your@email.com')}
              {field('Phone *', formData.phone, (v) => updateField('phone', v), 'tel', '+91 98765 43210')}
            </>}

            {step === 2 && <>
              <h3 className="font-display text-xl text-parchment mb-4">Martial Arts Information</h3>
              <div><label className="block font-mono text-xs text-slate-400 mb-2">Belt Level *</label><select value={formData.beltLevel} onChange={e => updateField('beltLevel', e.target.value)} className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select belt level</option>{['White','Yellow','Orange','Green','Blue','Purple','Brown','Black 1st Dan','Black 2nd Dan','Black 3rd Dan+'].map(b => <option key={b} value={b}>{b}</option>)}</select></div>
              {field('Years of Training *', formData.yearsTraining, (v) => updateField('yearsTraining', v), 'number', '0')}
              {field('Home Dojo/Branch *', formData.homeDojo, (v) => updateField('homeDojo', v), 'text', 'Your dojo or branch name')}
            </>}

            {step === 3 && <>
              <h3 className="font-display text-xl text-parchment mb-4">Event Categories</h3>
              <div className="space-y-4">
                {['kata','kumite','weapons'].map(cat => (
                  <label key={cat} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.categories.includes(cat) ? 'border-crimson bg-crimson/5' : 'border-slate-700 bg-dojo-charcoal hover:border-slate-500'}`}>
                    <input type="checkbox" checked={formData.categories.includes(cat)} onChange={() => toggleCategory(cat)} className="sr-only" />
                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${formData.categories.includes(cat) ? 'border-crimson bg-crimson' : 'border-slate-500'}`}>{formData.categories.includes(cat) && <span className="text-white text-xs">✓</span>}</div>
                    <span className="text-parchment capitalize text-lg">{cat === 'kata' ? 'Kata (Forms)' : cat === 'kumite' ? 'Kumite (Sparring)' : 'Weapons (Bo/Sai)'}</span>
                  </label>
                ))}
              </div>
              <div><label className="block font-mono text-xs text-slate-400 mb-2 mt-6">Age Group *</label><select value={formData.ageGroup} onChange={e => updateField('ageGroup', e.target.value)} className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select age group</option><option value="kids">Kids (5–12)</option><option value="juniors">Juniors (13–17)</option><option value="adults">Adults (18–39)</option><option value="seniors">Seniors (40+)</option></select></div>
            </>}

            {step === 4 && <>
              <h3 className="font-display text-xl text-parchment mb-4">Review Your Registration</h3>
              <div className="bg-dojo-charcoal rounded-lg p-6 space-y-3 text-sm">
                {reviewRow('Name', formData.fullName)}{reviewRow('Email', formData.email)}{reviewRow('Phone', formData.phone)}{reviewRow('Belt Level', formData.beltLevel)}{reviewRow('Age Group', formData.ageGroup)}{reviewRow('Categories', formData.categories.join(', '))}
              </div>
            </>}
          </motion.div>

          <div className="flex justify-between mt-10">
            <button onClick={() => setStep(prev => prev > 1 ? (prev - 1) as Step : prev)} className={`font-mono text-xs uppercase tracking-[0.15em] px-6 py-3 border border-slate-700 text-slate-400 hover:border-slate-500 transition-colors ${step === 1 ? 'invisible' : ''}`}>← Back</button>
            {step < 4 ? <button onClick={() => setStep(prev => (prev + 1) as Step)} className="crimson-btn font-mono text-xs">Next →</button>
            : <button onClick={() => { setSubmitted(true); toast.success('Registration submitted successfully!'); }} className="crimson-btn font-mono text-xs">Submit Registration</button>}
          </div>
        </div>
      )}
    </>
  );
}

function field(label: string, value: string, onChange: (v: string) => void, type: string = 'text', placeholder: string = '') {
  return (
    <div>
      <label className="block font-mono text-xs text-slate-400 mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full bg-dojo-charcoal border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" placeholder={placeholder} />
    </div>
  );
}

function reviewRow(label: string, value: string) {
  return <div className="flex justify-between"><span className="text-slate-400">{label}:</span><span className="text-parchment">{value || '—'}</span></div>;
}
