'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">◈ capabilities</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
          Skill <span className="grad-text">Set</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          A pragmatic toolbox spanning low-level systems, networking and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brandTwo/50 hover:shadow-glow"
          >
            <h3 className="mb-4 flex items-center gap-3 font-display text-sm font-bold">
              <i className={`${s.icon} w-6 text-center text-xl text-brandTwo`} />
              {s.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-[11px] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}