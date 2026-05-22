import Link from 'next/link';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { branches } from '@/lib/data/branches';

export function Footer() {
  return (
    <footer className="bg-dojo-black border-t border-slate-800/50">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                <span className="text-gold font-display text-lg">Z</span>
              </div>
              <span className="font-display text-lg tracking-wide text-parchment">
                ZEN ISSHINRYU
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              All India Zen Isshinryu Karate Association. Spreading the &ldquo;One Heart Way&rdquo;
              across Tamil Nadu with authentic Okinawan martial arts training.
            </p>
            <div className="flex gap-3">
              <Link href="https://facebook.com" className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-crimson hover:border-crimson transition-colors" aria-label="Facebook">
                <span className="text-xs font-mono">f</span>
              </Link>
              <Link href="https://instagram.com" className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-crimson hover:border-crimson transition-colors" aria-label="Instagram">
                <span className="text-xs font-mono">ig</span>
              </Link>
              <Link href="https://youtube.com" className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-crimson hover:border-crimson transition-colors" aria-label="YouTube">
                <span className="text-xs font-mono">yt</span>
              </Link>
              <Link href="https://wa.me/919840123456" className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-crimson hover:border-crimson transition-colors" aria-label="WhatsApp">
                <MessageCircle size={14} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-parchment mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Karate' },
                { href: '/syllabus', label: 'Syllabus' },
                { href: '/instructors', label: 'Instructors' },
                { href: '/grading', label: 'Grading' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/creed', label: 'Karate Creed' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-crimson transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-parchment mb-6">
              Our Branches
            </h4>
            <ul className="space-y-3">
              {branches.slice(0, 7).map((branch) => (
                <li key={branch.id} className="flex items-start gap-2">
                  <MapPin size={14} className="text-crimson mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">{branch.name}</p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-slate-500 text-xs hover:text-crimson transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-parchment mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-crimson mt-0.5 flex-shrink-0" />
                <a href="tel:+919840123456" className="text-slate-300 text-sm hover:text-crimson transition-colors">
                  +91 98401 23456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={14} className="text-crimson mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/919840123456" className="text-slate-300 text-sm hover:text-crimson transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/book"
                  className="font-mono text-xs uppercase tracking-[0.15em] bg-crimson text-white px-5 py-2.5 inline-block hover:shadow-crimson-glow transition-all"
                >
                  Book a Trial Class
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/30">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} All India Zen Isshinryu Karate Association
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Registered &bull; Chennai, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}
