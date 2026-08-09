'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { contact, contactHeading } from '@/data/contact';
import VisitorCounter from '@/components/VisitorCounter';

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      return true;
    } catch {
      return false;
    } finally {
      ta.remove();
    }
  }
}

export default function Contact() {
  const [toast, setToast] = useState('');

  const handleCopy = async (value) => {
    const ok = await copyText(value);
    setToast(ok ? '✓ Copied to clipboard' : '✗ Copy failed');
    setTimeout(() => setToast(''), 1800);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">✉ contact</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
          Let&#39;s <span className="grad-text">Connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">{contactHeading.title}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contact.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="flex flex-col gap-3 rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow"
          >
            <i className={`${c.icon} grad-text text-2xl`} />
            <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
              {c.label}
            </h4>
            <p className="break-all font-mono text-sm text-ink">{c.value}</p>

            <div className="mt-auto flex gap-2 pt-2">
              {c.href && (
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 font-mono text-xs text-ink transition-all duration-300 hover:border-brand hover:text-brand"
                >
                  <i className={`${c.icon} text-[11px]`} /> {c.message}
                </a>
              )}
              <button
                onClick={() => handleCopy(c.copyValue)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 font-mono text-xs text-ink transition-all duration-300 hover:border-brand hover:text-brand"
              >
                <i className="fa-regular fa-copy" /> Copy
              </button>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="col-span-full flex justify-center lg:col-span-3"
        >
          <VisitorCounter />
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 rounded-xl border border-brand bg-panelTwo px-6 py-3 font-mono text-sm text-mint shadow-glow"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}