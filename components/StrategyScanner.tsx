
import React, { useState } from 'react';
import { getExpansionStrategy } from '../services/gemini';
import { ExpansionInsight } from '../types';
import { useLanguage } from '../LanguageContext';

const StrategyScanner: React.FC = () => {
  const { lang, t } = useLanguage();
  const [brandName, setBrandName] = useState('');
  const [category, setCategory] = useState('Lifestyle');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExpansionInsight | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName) return;

    setLoading(true);
    setError(null);
    try {
      const data = await getExpansionStrategy(brandName, category, lang);
      setResult(data);
    } catch (err) {
      setError("Failed to generate scan. Please check your API connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="glass p-1 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="bg-slate-950/90 rounded-[38px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          {/* Technical Grid Overlay for Scanner */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <form onSubmit={handleScan} className="relative z-10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-2">{t.scanner.brandLabel}</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder={t.scanner.placeholder}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-slate-600 text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-2">{t.scanner.industryLabel}</label>
                <div className="relative">
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer text-lg"
                  >
                    <option>Lifestyle & Fashion</option>
                    <option>Consumer Electronics</option>
                    <option>Food & Beverage</option>
                    <option>Gaming & Entertainment</option>
                    <option>Beauty & Skincare</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`group relative w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center space-x-4 overflow-hidden ${loading ? 'bg-slate-800 text-slate-500' : 'bg-white text-black hover:bg-accent active:scale-[0.98]'}`}
            >
              <span className="relative z-10">{loading ? t.scanner.scanning : t.scanner.cta}</span>
              {!loading && <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-white to-accent opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          </form>

          {result && (
            <div className="mt-20 space-y-12 animate-in fade-in zoom-in-95 duration-1000 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="h-[2px] grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">Analysis Complete</span>
                <div className="h-[2px] grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <h4 className="text-accent font-black uppercase tracking-[0.2em] text-[10px] flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    {t.scanner.marketFit}
                  </h4>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-accent/20 transition-colors">
                    <p className="text-xl text-slate-200 font-display font-medium leading-relaxed">{result.marketFit}</p>
                  </div>
                </div>
                
                <div className="space-y-4 group">
                  <h4 className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    {t.scanner.channels}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {result.suggestedPlatforms.map(platform => (
                      <span key={platform} className="px-5 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-bold text-indigo-200 hover:bg-indigo-500/20 transition-colors cursor-default">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 group">
                  <h4 className="text-rose-400 font-black uppercase tracking-[0.2em] text-[10px] flex items-center">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                    {t.scanner.challenges}
                  </h4>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-rose-400/20 transition-colors">
                    <p className="text-slate-400 leading-relaxed italic">"{result.keyChallenges}"</p>
                  </div>
                </div>

                <div className="space-y-4 group">
                  <h4 className="text-accent font-black uppercase tracking-[0.2em] text-[10px] flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                    {t.scanner.winning}
                  </h4>
                  <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 group-hover:bg-accent/10 transition-all">
                    <p className="text-xl text-white font-display font-bold leading-tight uppercase italic tracking-tighter">"{result.winningStrategy}"</p>
                  </div>
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border border-accent/30 flex flex-col md:flex-row items-center justify-between group cursor-pointer hover:shadow-[0_0_40px_rgba(190,242,100,0.15)] transition-all">
                <div className="flex items-center space-x-6 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_20px_rgba(190,242,100,0.4)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-white tracking-tight">{t.scanner.audit}</p>
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-black mt-1">Limited Availability</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyScanner;
