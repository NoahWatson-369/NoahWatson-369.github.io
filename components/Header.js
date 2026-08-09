'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '@/data/profile';

const links = [
  { href: '#about', label: '⌁ About' },
  { href: '#skills', label: '◈ Skills' },
  { href: '#projects', label: '⚙ Projects' },
  { href: '#contact', label: '✉ Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="grad-text font-display text-lg font-black tracking-widest"
        >
          {profile.brand}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex rounded-lg border border-line p-2 text-ink md:hidden"
        >
          <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mb-4 flex flex-col gap-1 rounded-xl border border-line bg-panel p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}