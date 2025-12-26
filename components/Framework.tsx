
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Framework: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">{t.framework.tag}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">{t.framework.title} <br/> <span className="text-gradient">{t.framework.titleAccent}</span></h2>
            <p className="text-slate-400 mt-6 text-lg">
              {t.framework.desc}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">01</div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">{t.framework.step1Title}</h4>
                <p className="text-slate-500">{t.framework.step1Desc}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">02</div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">{t.framework.step2Title}</h4>
                <p className="text-slate-500">{t.framework.step2Desc}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">03</div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">{t.framework.step3Title}</h4>
                <p className="text-slate-500">{t.framework.step3Desc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass p-8 rounded-[40px] border border-accent/20 relative z-10 overflow-hidden">
            <div className="flex items-center justify-between mb-12">
              <div className="px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-widest">{t.framework.badge}</div>
            </div>

            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-slate-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700"></div>
                <h5 className="text-slate-400 text-xs font-bold uppercase mb-2">{t.framework.phase1}</h5>
                <p className="text-white font-medium">{t.framework.phase1Desc}</p>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/50 border-2 border-accent"></div>
                <h5 className="text-accent text-xs font-bold uppercase mb-2">{t.framework.phase2}</h5>
                <p className="text-white font-medium">{t.framework.phase2Desc}</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[1px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <h5 className="text-indigo-400 text-xs font-bold uppercase mb-2">{t.framework.phase3}</h5>
                <p className="text-white font-bold text-xl">{t.framework.phase3Desc}</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800"></div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">{t.framework.strategists}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Framework;
