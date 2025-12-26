
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-3xl font-display font-black tracking-tighter text-white">4AM</span>
            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
          </a>
          <p className="text-slate-500 text-sm leading-relaxed">
            {t.hero.desc}
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#strategy" className="hover:text-accent transition-colors">{t.nav.strategy}</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">{t.nav.services}</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">{t.nav.about}</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Client Cases</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{t.nav.contact}</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>Boston HQ: Seaport Blvd</li>
            <li>hello@4am.agency</li>
            <li>+1 (617) 555-4000</li>
            <li>GMT-5 / UTC+8 Support</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold mb-6">Stay Updated</h4>
          <p className="text-sm text-slate-500">Insights for global growth.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white font-bold text-sm">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
        <p>© 2024 4AM Digital Marketing LLC. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
