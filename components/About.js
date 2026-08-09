'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">{profile.aboutEyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">{profile.aboutTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">{profile.aboutSub}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-brand/50"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand via-brandTwo to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            <i className={`${s.icon} mb-2 text-2xl text-brand`} />
            <div className="grad-text font-display text-2xl font-black">{s.value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-muted">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}