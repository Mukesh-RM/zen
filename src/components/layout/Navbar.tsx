'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/syllabus', label: 'Syllabus' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dojo-black/95 backdrop-blur-md border-b border-slate-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors">
                <span className="text-gold font-display text-lg">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg tracking-wide text-parchment">
                  ZEN ISSHINRYU
                </span>
                <p className="text-[8px] text-slate-500 font-mono uppercase tracking-[0.2em] mt-0.5">
                  All India Association
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400 hover:text-parchment transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
              <Link
                href="/book"
                className="font-mono text-xs uppercase tracking-[0.15em] bg-crimson text-white px-5 py-2.5 hover:shadow-crimson-glow transition-all"
              >
                Book a Trial Class
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-parchment p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dojo-black lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between h-16 px-4">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <span className="text-gold font-display text-lg">Z</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-parchment p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-3xl text-parchment hover:text-crimson transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    href="/book"
                    onClick={() => setMobileOpen(false)}
                    className="inline-block font-mono text-sm uppercase tracking-[0.2em] bg-crimson text-white px-8 py-4 mt-4"
                  >
                    Book a Trial Class
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
