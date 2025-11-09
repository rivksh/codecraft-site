import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur z-50 border-b border-transparent dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Home - Rivka Schreiber">
            {/* Accessible SVG monogram logo (RS) with subtle gradient and rounded square background */}
            <svg className="logo" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logoTitle logoDesc">
              <title id="logoTitle">Rivka Schreiber logo</title>
              <desc id="logoDesc">Monogram RS inside a rounded square</desc>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="48" height="48" rx="10" fill="url(#g1)" />
              <text x="50%" y="54%" textAnchor="middle" fontFamily="Rubik, system-ui, sans-serif" fontWeight="700" fontSize="18" fill="white">RS</text>
            </svg>
            <div className="text-left">
              <div className="font-bold text-lg">Rivka Schreiber</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</div>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:underline text-gray-700 dark:text-gray-200">Home</a>
          <a href="#about" className="hover:underline text-gray-700 dark:text-gray-200">About</a>
          <a href="#projects" className="hover:underline text-gray-700 dark:text-gray-200">Projects</a>
          <a href="#playground" className="hover:underline text-gray-700 dark:text-gray-200">Playground</a>
          <a href="#blog" className="hover:underline text-gray-700 dark:text-gray-200">Blog</a>
          <a href="/Rivka-CV.pdf" className="btn-primary" download>Download CV</a>
          <a href="#contact" className="btn-secondary">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(d => !d)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            title="Toggle color scheme"
          >
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
