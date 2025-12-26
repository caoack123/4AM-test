
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesList = [
    {
      title: t.services.s1Title,
      desc: t.services.s1Desc,
      tag: t.services.s1Tag,
      icon: '🏢'
    },
    {
      title: t.services.s2Title,
      desc: t.services.s2Desc,
      tag: t.services.s2Tag,
      icon: '📸'
    },
    {
      title: t.services.s3Title,
      desc: t.services.s3Desc,
      tag: t.services.s3Tag,
      icon: '🔗'
    },
    {
      title: t.services.s4Title,
      desc: t.services.s4Desc,
      tag: t.services.s4Tag,
      icon: '📊'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">{t.services.tag}</span>
        <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 tracking-tighter">{t.services.title}</h2>
        <div className="h-1 w-24 bg-accent mt-6"></div>
        <p className="text-slate-400 mt-8 max-w-2xl text-lg leading-relaxed">{t.services.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((service, idx) => (
          <div 
            key={idx} 
            className="tilt-card group relative p-8 glass rounded-[32px] border border-white/5 transition-all duration-700 flex flex-col justify-between h-full hover:border-accent/40 hover:shadow-[0_0_30px_rgba(190,242,100,0.1)]"
          >
            <div>
              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{service.desc}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1.5 rounded-full border border-white/5 group-hover:border-accent/30 group-hover:text-accent transition-all">
                {service.tag}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 glass p-12 rounded-[40px] border border-white/10 overflow-hidden relative group">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="text-3xl font-display font-bold mb-4 text-white uppercase tracking-tight">{t.services.bannerTitle}</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{t.services.bannerDesc}</p>
          </div>
          <button className="relative overflow-hidden whitespace-nowrap bg-accent text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
            <span className="relative z-10">{t.services.bannerCta}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
        
        {/* Abstract Background Logic */}
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default Services;
