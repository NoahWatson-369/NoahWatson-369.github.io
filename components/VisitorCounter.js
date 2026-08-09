'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/site-config';

export default function VisitorCounter() {
  const [count, setCount] = useState('…');
  const [state, setState] = useState('loading');

  useEffect(() => {
    if (!siteConfig.counterEnabled) return;

    const controller = new AbortController();
    let active = true;

    fetch(siteConfig.counterUrl, { signal: controller.signal, mode: 'no-cors' })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('bad response');
      })
      .then((data) => {
        if (!active) return;
        const val = data.value ?? data.hits ?? data.count;
        if (typeof val !== 'undefined') {
          setCount(val.toLocaleString());
          setState('ok');
        } else {
          setState('error');
        }
      })
      .catch(() => {
        if (active) setState('error');
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  if (state === 'error') {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-2 font-mono text-xs text-muted">
        <i className="fa-solid fa-eye-slash" /> {siteConfig.counterLabel}: n/a
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-panel px-5 py-2 font-mono text-xs text-muted">
      <i className="fa-solid fa-eye text-brand" />
      {siteConfig.counterLabel}: <b className="grad-text">{count}</b>
    </div>
  );
}