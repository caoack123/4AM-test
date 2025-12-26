
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StrategyScanner from './components/StrategyScanner';
import Framework from './components/Framework';
import ServiceModels from './components/ServiceModels';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-900/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="framework" className="py-24 px-6 md:px-12 lg:px-24">
          <Framework />
        </section>

        <section id="strategy" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-accent font-semibold tracking-widest uppercase text-sm">Interactive Insight</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Global Expansion <span className="text-gradient">Quick Scan</span></h2>
              <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                Using our "US Internet Sense" methodology, discover how to transform from a traditional manufacturer into a premium global brand.
              </p>
            </div>
            <StrategyScanner />
          </div>
        </section>

        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-950/50">
          <Services />
        </section>

        <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24">
          <ServiceModels />
        </section>

        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-950/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-rose-400 font-semibold tracking-widest uppercase text-sm">Your Cultural Translators</span>
              <h2 className="text-4xl font-display font-bold mt-4 leading-tight">We are your <span className="text-indigo-400 italic">Digital Outpost</span> in the West.</h2>
              <div className="space-y-6 mt-8 text-slate-400 text-lg">
                <p>
                  Based in Boston, 4AM solves the "Talent & Culture Gap" that holds back ambitious Chinese brands. We act as your de-facto US marketing department, bringing "US Internet Sense" to your global growth.
                </p>
                <p>
                  From Hangzhou to Boston, we bridge the timezone and cultural divide with 24/7 global synergy, closing the loop between CN production and US peak-hour social engagement.
                </p>
                <div className="flex gap-12 mt-12">
                  <div>
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest">Global Brands</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest">Global Synergy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">Boston</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest">HQ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                alt="4AM Team Strategy Session" 
                className="relative rounded-2xl grayscale hover:grayscale-0 transition duration-500 shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
