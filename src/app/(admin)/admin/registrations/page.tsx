'use client';

import { Download } from 'lucide-react';

// Mock registrations
const mockRegistrations = [
  { id: '1', name: 'Karthik Rajan', event: 'All India Isshinryu Karate Championship 2025', belt: 'Black 2nd Dan', category: 'Kata, Kumite', date: '2025-07-20', paid: true },
  { id: '2', name: 'Priyanka Sharma', event: 'All India Isshinryu Karate Championship 2025', belt: 'Brown', category: 'Kata', date: '2025-07-21', paid: false },
  { id: '3', name: 'Ramesh Iyer', event: 'Summer Belt Grading Examination', belt: 'Green', category: 'Grading', date: '2025-06-01', paid: true },
];

export default function AdminRegistrations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-parchment">Registrations</h1>
          <p className="text-slate-500 text-sm mt-1">Tournament and grading registrations</p>
        </div>
        <button className="ghost-btn font-mono text-xs flex items-center gap-2">
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div className="bg-dojo-dark border border-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Event</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Belt</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Category</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Date</th>
                <th className="py-4 px-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">Payment</th>
              </tr>
            </thead>
            <tbody>
              {mockRegistrations.map((reg) => (
                <tr key={reg.id} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                  <td className="py-4 px-6 text-parchment text-sm">{reg.name}</td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{reg.event}</td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{reg.belt}</td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{reg.category}</td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{reg.date}</td>
                  <td className="py-4 px-6">
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                      reg.paid ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'
                    }`}>
                      {reg.paid ? 'Paid' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-slate-500 text-xs">
        Registration data is mock. Connect Supabase for real data management.
      </p>
    </div>
  );
}
