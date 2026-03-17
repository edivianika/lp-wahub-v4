import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function LogoBar() {
  const logos = ['Sedah Green Residence', 'Narraya Green Residence', 'Grand Sezha', 'Tata Kreasi Group', 'Bumi Artha', 'Cahaya Property'];
  return (
    <section className="py-16 bg-page-soft border-y border-slate-100 relative overflow-hidden section-fade-top">
      <div className="container max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-shrink-0">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1 md:mb-0">Trusted By</p>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track flex items-center">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="text-xl md:text-2xl font-display font-bold text-slate-400 hover:text-green-600 transition-all duration-500 whitespace-nowrap px-10 cursor-default">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
