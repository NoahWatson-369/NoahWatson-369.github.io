'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="p-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand/50 hover:shadow-glow"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-line bg-gradient-to-br from-brand/15 to-brandTwo/15 text-xl text-brand">
          <i className={project.icon} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-base font-bold">
            <span className="mr-1 text-brand">{project.fancy}</span> {project.name}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-widest text-brandTwo">
            {project.language}
          </p>
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.capabilities.map((c) => (
          <span
            key={c}
            className="rounded-lg border border-brandTwo/20 bg-brandTwo/10 px-2 py-0.5 font-mono text-[10px] text-purple-200"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono text-[11px] text-muted">{project.language}</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-gold">
          <i className="fa-solid fa-shield-halved" /> {project.notice}
        </span>
      </div>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-xs text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <i className="fa-brands fa-github" /> View repository →
      </a>
    </motion.article>
  );
}