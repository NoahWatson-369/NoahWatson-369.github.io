'use client';

import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-10 text-center text-sm text-muted">
      <p>
        © {year} {profile.name} — <span className="text-accent">{profile.footerTag}</span>
      </p>
      <p className="mt-2 font-mono text-xs text-slate-500">{profile.footerNote}</p>
    </footer>
  );
}