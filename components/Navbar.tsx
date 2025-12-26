
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.strategy, href: '#strategy' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-3xl font-display font-black tracking-tighter text-white">4AM</span>
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex space-x-8 mr-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center bg-slate-900 rounded-full p-1 border border-white/5 mr-4">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-accent text-black' : 'text-slate-500 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('cn')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'cn' ? 'bg-accent text-black' : 'text-slate-500 hover:text-white'}`}
            >
              中文
            </button>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
           <button 
            onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
            className="text-xs font-bold text-accent glass px-2 py-1 rounded-lg"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t border-slate-800">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
            {t.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
