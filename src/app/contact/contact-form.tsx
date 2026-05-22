'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { branches } from '@/lib/data/branches';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', branch: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent! We will respond within 24 hours.');
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <Send size={48} className="text-crimson mx-auto mb-4" />
        <h3 className="font-display text-xl text-parchment mb-2">Message Sent!</h3>
        <p className="text-slate-400">We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Full Name *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" /></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" /></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none" /></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Nearest Branch</label><select value={formData.branch} onChange={(e) => setFormData({ ...formData, branch: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none"><option value="">Select branch</option>{branches.map((b) => <option key={b.id} value={b.name}>{b.name}</option>)}</select></div>
      <div><label className="block font-mono text-xs text-slate-400 mb-2">Message *</label><textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-dojo-dark border border-slate-700 rounded p-3 text-parchment focus:border-crimson focus:outline-none resize-none" /></div>
      <button type="submit" className="crimson-btn w-full font-mono text-xs">Send Message</button>
    </form>
  );
}
