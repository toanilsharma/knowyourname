import React, { createContext, useContext, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Encyclopedia } from './pages/Encyclopedia';
import { Science } from './pages/Science';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CookiePolicy } from './pages/CookiePolicy';
import { Disclaimer } from './pages/Disclaimer';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Sitemap } from './pages/Sitemap';
import { Methods } from './pages/Methods';
import { ResearchIndex } from './pages/ResearchIndex';
import { SoundSymbolism } from './pages/research/SoundSymbolism';
import { BoubaKiki } from './pages/research/BoubaKiki';
import { Phonotactics } from './pages/research/Phonotactics';
import { AcousticFrequency } from './pages/research/AcousticFrequency';
import { TypingEffort } from './pages/research/TypingEffort';
import { EditorialPolicy } from './pages/EditorialPolicy';
import { CookieConsent } from './components/CookieConsent';

// --- Theme Context ---
type Theme = 'dark' | 'light';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme: () => { } });

export const useTheme = () => useContext(ThemeContext);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Initialize theme from local storage or default to dark
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kyn-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('kyn-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      name: 'Facebook',
      url: '#',
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
      name: 'Twitter',
      url: '#',
      path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
    },
    {
      name: 'Instagram',
      url: '#',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
      name: 'WhatsApp',
      url: '#',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
    }
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-800 dark:selection:text-emerald-200 transition-colors duration-500">

          {/* --- Professional Header --- */}
          <header className="fixed w-full top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 md:h-20">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group relative z-10" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center font-serif font-bold text-lg shadow-lg shadow-slate-900/20 dark:shadow-white/10 transition-transform group-hover:scale-105 duration-300">
                    K
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-lg leading-none tracking-tight text-slate-900 dark:text-white">KnowYourName</span>
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Laboratory</span>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                  {[
                    { name: 'Analysis Lab', path: '/' },
                    { name: 'The Science', path: '/science' },
                    { name: 'Research', path: '/research' },
                    { name: 'Methods', path: '/methods' },
                    { name: 'Encyclopedia', path: '/encyclopedia' },
                  ].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-full transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="ml-2 px-5 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-sm"
                  >
                    Contact
                  </Link>
                </nav>

                {/* Right Actions: Theme + Mobile Toggle */}
                <div className="flex items-center gap-2 md:ml-4">
                  <button
                    onClick={toggleTheme}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                    aria-label="Toggle Theme"
                  >
                    {theme === 'dark' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59h-1.591a.75.75 0 00-1.061 1.06l-1.591 1.591a.75.75 0 001.06 1.061l1.591-1.591h1.591a.75.75 0 001.06-1.06l1.591-1.591zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 5.106a.75.75 0 001.06-1.06l-1.591-1.59a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Hamburger Button */}
                  <button
                    className="md:hidden w-9 h-9 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                  >
                    {isMobileMenuOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 animate-fade-in-up">
                <div className="px-4 pt-4 pb-6 space-y-2">
                  {[
                    { name: 'Analysis Lab', path: '/' },
                    { name: 'The Science', path: '/science' },
                    { name: 'Research', path: '/research' },
                    { name: 'Methods', path: '/methods' },
                    { name: 'Encyclopedia', path: '/encyclopedia' },
                    { name: 'Contact', path: '/contact' },
                  ].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* --- Main Content --- */}
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/science" element={<Science />} />
              <Route path="/methods" element={<Methods />} />
              <Route path="/encyclopedia" element={<Encyclopedia />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/sitemap" element={<Sitemap />} />
              {/* Research Section */}
              <Route path="/research" element={<ResearchIndex />} />
              <Route path="/research/sound-symbolism" element={<SoundSymbolism />} />
              <Route path="/research/bouba-kiki" element={<BoubaKiki />} />
              <Route path="/research/phonotactics" element={<Phonotactics />} />
              <Route path="/research/acoustic-frequency" element={<AcousticFrequency />} />
              <Route path="/research/typing-effort" element={<TypingEffort />} />
              <Route path="/editorial-policy" element={<EditorialPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <CookieConsent />

          {/* --- Professional Footer --- */}
          <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                {/* Brand Column */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded flex items-center justify-center font-serif font-bold">K</div>
                    <span className="font-serif font-bold text-xl text-slate-900 dark:text-white">KnowYourName</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                    A name-analysis tool that combines multiple linguistics metrics (phonotactics, sonority, and sound symbolism) into a shareable report.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map(social => (
                      <a key={social.name} href={social.url} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all" aria-label={social.name}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d={social.path} clipRule="evenodd" /></svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Discover Column */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Discover</h3>
                  <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <li><Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Analysis Lab</Link></li>
                    <li><Link to="/science" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Research Hub</Link></li>
                    <li><Link to="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Methodology</Link></li>
                    <li><Link to="/encyclopedia" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Name Encyclopedia</Link></li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Legal & Privacy</h3>
                  <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <li><Link to="/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                    <li><Link to="/privacy-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/cookie-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
                    <li><Link to="/disclaimer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Disclaimer</Link></li>
                  </ul>
                </div>

                {/* Connect Column */}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Connect</h3>
                  <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <li><Link to="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact Support</Link></li>
                    <li><a href="mailto:info.onesharma@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">info.onesharma@gmail.com</a></li>
                    <li><Link to="/sitemap" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sitemap</Link></li>
                    <li className="pt-2">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium border border-emerald-200 dark:border-emerald-800">
                        System Operational
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Network Section */}
              <div className="mb-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs text-center">From Our Network</h3>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
                  <a href="https://designcalculators.co.in" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="font-medium">Design Calculators</span>
                    <span className="text-slate-400 dark:text-slate-600 ml-1.5">— Engineering Tools</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-700 hidden md:inline">|</span>
                  <a href="https://electrosafe.homes" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="font-medium">ElectroSafe Homes</span>
                    <span className="text-slate-400 dark:text-slate-600 ml-1.5">— Electrical Safety</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-700 hidden md:inline">|</span>
                  <a href="https://reliabilitytools.co.in" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="font-medium">Reliability Tools</span>
                    <span className="text-slate-400 dark:text-slate-600 ml-1.5">— Industrial Analytics</span>
                  </a>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">
                    © {new Date().getFullYear()} Know Your Name Labs. All rights reserved.
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-600 italic">
                    All outputs describe sound structure, not individual traits.
                  </p>
                </div>
                <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-500 font-medium">
                  <span>Engineered by A Sharma</span>
                  <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
                  <span>India</span>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
};

export default App;