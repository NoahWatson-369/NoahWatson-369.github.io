/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#060a13',
        panel: '#0b1120',
        panelTwo: '#0e1528',
        ink: '#e6edf7',
        muted: '#8ea0bd',
        brand: '#38bdf8',
        brandTwo: '#a78bfa',
        accent: '#f472b6',
        mint: '#34d399',
        gold: '#fbbf24',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 24px 60px rgba(2, 6, 18, .55)',
        brand: '0 14px 36px rgba(99, 102, 241, .35)',
      },
      animation: {
        blink: 'blink 1.1s steps(2, start) infinite',
        bob: 'bob 2s ease-in-out infinite',
        floatOne: 'floaty 18s ease-in-out infinite',
        floatTwo: 'floaty 22s ease-in-out infinite reverse',
        floatThree: 'floaty 26s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
        bob: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 8px)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -50px) scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
};