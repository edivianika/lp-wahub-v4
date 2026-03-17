import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FinalCTA() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* texture-noise */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/10 rounded-full blur-[180px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-12 tracking-tight">
            Leads Terstruktur. <br />
            Prioritas Jelas. <br />
            <span className="text-green-500 italic font-serif-accent">Closing Tanpa Batas.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Bergabunglah dengan ratusan agen properti sukses yang telah mengubah WhatsApp mereka menjadi mesin penjualan otomatis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://app.wahub.online/register" className="w-full sm:w-auto">
              <Button size="xl" className="w-full sm:w-auto px-12 py-6 text-lg font-bold rounded-2xl shadow-2xl shadow-green-500/30 bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
                Mulai Trial Gratis Sekarang
              </Button>
            </a>
            <a href="https://wa.me/628123456789" className="w-full sm:w-auto">
              <Button variant="outline" size="xl" className="w-full sm:w-auto px-12 py-6 text-lg font-bold rounded-2xl border-white/10 text-white hover:bg-white/5 transition-all duration-300 hover:scale-105">
                Konsultasi dengan Tim
              </Button>
            </a>
          </div>
          <p className="mt-10 text-slate-500 text-sm font-medium">
            Trial 7 hari gratis. Tanpa kartu kredit. Setup 10 menit.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
