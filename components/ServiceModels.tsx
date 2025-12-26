
import React from 'react';
import { useLanguage } from '../LanguageContext';

const ServiceModels: React.FC = () => {
  // Fix: Destructure lang from useLanguage to correctly access current language code
  const { t, lang } = useLanguage();

  const models = [
    {
      name: t.pricing.s1,
      price: t.pricing.s1Price,
      type: t.pricing.s1Type,
      desc: t.pricing.s1Desc,
      // Fix: Use lang directly instead of accessing it on translation object t
      features: lang === 'en' 
        ? ["Competitor Gap Research", "US-Native Lingo Guide", "KOC Selection Matrix"] 
        : ["竞品差异化研究", "本土化话术指南", "KOC 筛选矩阵"],
      accent: "slate"
    },
    {
      name: t.pricing.s2,
      price: t.pricing.s2Price,
      type: t.pricing.s2Type,
      desc: t.pricing.s2Desc,
      // Fix: Use lang directly instead of accessing it on translation object t
      features: lang === 'en'
        ? ["Monthly Digital Asset Office", "10-20 Niche KOCs/mo", "Digital Transparency Reporting"]
        : ["月度数字资产办公室", "每月 10-20 名垂直 KOC", "数字化透明归因报告"],
      accent: "accent",
      popular: true
    },
    {
      name: t.pricing.s3,
      price: t.pricing.s3Price,
      type: t.pricing.s3Type,
      desc: t.pricing.s3Desc,
      // Fix: Use lang directly instead of accessing it on translation object t
      features: lang === 'en'
        ? ["VI Global Visual Upgrade", "Website Content Re-copy", "Full Asset Repurposing"]
        : ["全球视觉 VI 升级", "网站内容重构", "全量资产二次加工"],
      accent: "indigo"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-rose-400 font-semibold tracking-widest uppercase text-sm">{t.pricing.tag}</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">{t.pricing.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((model, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 rounded-[32px] border flex flex-col justify-between transition-all hover:-translate-y-2 ${model.popular ? 'bg-slate-900 border-accent/50 shadow-2xl shadow-accent/10' : 'glass border-white/5 hover:border-white/20'}`}
          >
            {model.popular && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                {t.pricing.popular}
              </div>
            )}
            
            <div>
              <h3 className={`text-xl font-bold mb-4 ${model.popular ? 'text-accent' : 'text-white'}`}>{model.name}</h3>
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-display font-bold">{model.price}</span>
                <span className="text-slate-500 text-sm">{model.type}</span>
              </div>
              <p className="text-slate-400 text-sm mb-8">{model.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {model.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                    <svg className={`w-5 h-5 shrink-0 ${model.popular ? 'text-accent' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${model.popular ? 'bg-accent text-black hover:bg-white' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
              {t.pricing.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceModels;
