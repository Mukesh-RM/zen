'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Image,
  ClipboardList,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/instructors', label: 'Instructors', icon: Users },
  { href: '/admin/events', label: 'Events', icon: CalendarDays },
  { href: '/admin/gallery', label: 'Gallery', icon: Image },
  { href: '/admin/registrations', label: 'Registrations', icon: ClipboardList },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-dojo-black flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-dojo-dark border-r border-slate-800 transform transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-crimson/50 flex items-center justify-center">
              <span className="text-crimson font-display text-sm">Z</span>
            </div>
            <span className="font-mono text-xs text-crimson uppercase tracking-wider">Admin Panel</span>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                pathname === item.href
                  ? 'bg-crimson/10 text-crimson'
                  : 'text-slate-400 hover:text-parchment hover:bg-slate-800/50'
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-parchment transition-colors text-sm"
          >
            <LogOut size={16} />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-dojo-black border-b border-slate-800 px-4 h-14 flex items-center justify-between">
          <span className="font-mono text-xs text-crimson uppercase tracking-wider">Admin Panel</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        <main className="p-6">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
