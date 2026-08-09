'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectFilters } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const okFilter = filter === 'All' || p.category === filter;
      const haystack = `${p.name} ${p.description} ${p.capabilities.join(' ')} ${p.language}`.toLowerCase();
      const okQuery = !q || haystack.includes(q);
      return okFilter && okQuery;
    });
  }, [query, filter]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">⚙ portfolio</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
          Selected <span className="grad-text">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Open, cross-platform tooling for security research and systems engineering.
        </p>
      </div>

      <div className="mb-10 flex flex-col items-center justify-center gap-5">
        <div className="relative w-full max-w-md">
          <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, capabilities…"
            aria-label="Search projects"
            className="w-full rounded-xl border border-line bg-panel py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-brand to-brandTwo text-[#06101d] font-semibold'
                  : 'border border-line bg-white/5 text-muted hover:border-brand hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-panel/50 p-12 text-center text-muted">
          <i className="fa-solid fa-magnifying-glass-minus mb-3 text-3xl" />
          <p className="font-mono text-sm">No projects match “{query}”.</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}