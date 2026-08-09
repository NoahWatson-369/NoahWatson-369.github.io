'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const roles = profile.roles;
  const [line, setLine] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let delay = deleting ? 25 : 55;
    if (!deleting && line === current) delay = 1800;

    const id = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, line.length + 1);
        setLine(next);
        if (next === current) setDeleting(true);
      } else if (line.length === 0) {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      } else {
        setLine(line.slice(0, -1));
      }
    }, delay);

    return () => clearTimeout(id);
  }, [line, deleting, roleIdx, roles]);

  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-6 pt-32 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl overflow-hidden rounded-3xl border border-line bg-panel/70 shadow-glow backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-line bg-white/5 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto font-mono text-xs text-muted">{profile.promptUser}@proton.me</span>
        </div>

        <div className="px-6 py-12 text-center md:px-12 md:py-16">
          <motion.p variants={item} className="mx-auto mb-5 max-w-md text-left font-mono text-sm text-muted">
            <b className="text-mint">{profile.promptUser}</b>:<span className="text-brand">~</span>$ {profile.promptCmd} &nbsp;
            <span className="animate-blink text-brand">▊</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="grad-text font-display text-5xl font-black md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-6 min-h-[3em] font-mono text-base md:text-xl">
            {line}
            <span className="type-cursor" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-muted"
            dangerouslySetInnerHTML={{ __html: profile.tagline }}
          />

          <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-brand via-brandTwo to-accent px-7 py-3 font-semibold text-[#06101d] shadow-brand transition-transform duration-300 hover:-translate-y-1"
            >
              <i className="fa-solid fa-code mr-2" />
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-line bg-white/5 px-7 py-3 font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand"
            >
              <i className="fa-solid fa-paper-plane mr-2" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}