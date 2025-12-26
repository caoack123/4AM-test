
import React from 'react';
import { useLanguage } from '../LanguageContext';
import LogoCanvas from './LogoCanvas';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="cyber-grid opacity-40"></div>
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-indigo-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
            {t.hero.title} <br />
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">{t.hero.titleAccent}</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-indigo-600 overflow-hidden text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-95">
              <span className="relative z-10">{t.hero.primaryCta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center space-x-2">
              <span>{t.hero.secondaryCta}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative perspective-1000">
          <div className="relative z-10 h-[500px] flex items-center justify-center">
            {/* Replace static card with interactive 3D Logo */}
            <LogoCanvas />
            
            {/* Floating Glass Overlay for Context */}
            <div className="absolute bottom-4 left-4 glass p-6 rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-105 pointer-events-none">
               <div className="space-y-1">
                 <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{t.hero.growthScore}</p>
                 <p className="text-3xl font-bold font-display text-white">+342%</p>
               </div>
               <div className="mt-4 flex gap-4">
                  <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[9px] text-accent font-black uppercase tracking-widest">{t.hero.global}</div>
                  <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[9px] text-indigo-400 font-black uppercase tracking-widest">{t.hero.strong}</div>
               </div>
            </div>
          </div>
          
          {/* 3D Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 rounded-full blur-[150px] -z-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
