'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { branches } from '@/lib/data/branches';
import toast from 'react-hot-toast';

export default function BookForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', branch: '', ageGroup: '', preferredDay: '', preferredTime: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Trial class booked! We will contact you to confirm.');
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-dojo-charcoal rounded-xl border border-slate-800">
        <CheckCircle size={64} className="text-crimson mx-auto mb-6" />
        <h2 className="font-display text-2xl text-parchment mb-3">Trial Class Booked!</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Thank you! We will contact you shortly to confirm your trial class. Your first class is completely free.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-dojo-charcoal p-8 rounded-xl border border-slate-800 space-y-5">
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Full Name *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" /></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" /></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" /></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Nearest Branch *</label><select required value={formData.branch} onChange={(e) => setFormData({ ...formData, branch: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select branch</option>{branches.map((b) => <option key={b.id} value={b.name}>{b.name}</option>)}</select></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Age Group *</label><select required value={formData.ageGroup} onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select age group</option><option value="kids">Kids (5–12)</option><option value="juniors">Juniors (13–17)</option><option value="adults">Adults (18–39)</option><option value="seniors">Seniors (40+)</option></select></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Preferred Day *</label><select required value={formData.preferredDay} onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select day</option>{['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((d) => <option key={d} value={d}>{d}</option>)}</select></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Preferred Time *</label><select required value={formData.preferredTime} onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select time</option><option value="morning">Morning (6:00 AM – 8:00 AM)</option><option value="evening">Evening (5:00 PM – 8:00 PM)</option><option value="weekend-morning">Weekend Morning (7:00 AM – 12:00 PM)</option></select></div>
      <button type="submit" className="crimson-btn w-full font-mono text-xs mt-4">Book My Free Trial Class</button>
      <p className="text-slate-500 text-xs text-center mt-4">First class is free. No payment required. We will confirm your booking within 24 hours.</p>
    </form>
  );
}
