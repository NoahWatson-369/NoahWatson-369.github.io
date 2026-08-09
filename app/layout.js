import './globals.css';

export const metadata = {
  title: 'Noah ✦ Security Tooling & Low-Level Systems Engineer',
  description:
    'Resume of Noah — security tooling, systems-level code, network automation. C++ / Python / Win32 & PE internals, built for authorized research.',
  openGraph: {
    title: 'Noah ✦ Security Tooling & Systems Engineer',
    description:
      'Security tooling, systems-level code and network automation — C++, Python, Win32/PE internals.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}