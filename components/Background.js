'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext('2d');
    let W = 0;
    let H = 0;
    let parts = [];

    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };

    const spawn = () => {
      parts = [];
      const n = Math.min(90, Math.floor(W / 16));
      for (let i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.5,
          a: Math.random() * 0.5 + 0.15,
        });
      }
    };

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125,165,255,${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    const onResize = () => {
      resize();
      spawn();
    };

    resize();
    spawn();
    tick();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(1200px 800px at 85% -10%, rgba(167,139,250,.10), transparent 60%), radial-gradient(1000px 700px at -10% 40%, rgba(56,189,248,.10), transparent 60%), radial-gradient(900px 700px at 60% 110%, rgba(244,114,182,.08), transparent 60%), #060a13',
        }}
      />
      <div
        aria-hidden
        className="fixed -z-10 h-[420px] w-[420px] rounded-full bg-blue-700 opacity-35 blur-[90px] animate-floatOne"
        style={{ top: -120, right: -100 }}
      />
      <div
        aria-hidden
        className="fixed -z-10 h-[360px] w-[360px] rounded-full bg-purple-700 opacity-35 blur-[90px] animate-floatTwo"
        style={{ bottom: -140, left: -120 }}
      />
      <div
        aria-hidden
        className="fixed -z-10 h-[280px] w-[280px] rounded-full bg-pink-700 opacity-35 blur-[90px] animate-floatThree"
        style={{ top: '45%', left: '60%' }}
      />
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-90" aria-hidden />
    </>
  );
}