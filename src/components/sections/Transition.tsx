import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

export function Transition() {
  const comparisons = [
    { icon: '📊', name: 'Excel / Sheets', fail: 'Tidak terhubung ke WA, tidak ada notif' },
    { icon: '🏢', name: 'CRM Umum', fail: 'Untuk email & telepon, bukan untuk chat' },
    { icon: '📱', name: 'WA Business', fail: 'Tidak ada pipeline, mudah kena banned' },
    { icon: '📝', name: 'Catatan Manual', fail: 'Tidak bisa dibagi tim, hilang saat ganti HP' },
  ];

  return (
    <section className="py-32 md:py-48 bg-slate-950 relative overflow-hidden">
      {/* texture-noise */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      {/* Immersive Deep Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <ScrollReveal className="flex-1">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] text-green-400">
              💡 Solusi Modern
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Ubah WhatsApp Jadi <br />
              <span className="text-green-500">Structured CRM System.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-xl">
              WaHub bukan sekadar alat broadcast. Kami membangun sistem yang mengubah kekacauan chat menjadi pipeline penjualan yang rapi dan terukur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {comparisons.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-white font-bold mb-1">{item.name}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{item.fail}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1 relative">
            {/* Visual Representation of Structured Data */}
            <div className="relative bg-slate-900 rounded-[2.5rem] border border-white/10 p-8 shadow-2xl overflow-hidden group/pipeline">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-[10px] font-bold text-green-400 uppercase tracking-widest">Live Pipeline</div>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Andi Pratama', status: 'Hot Lead', value: 'Rp 2.4M', progress: 85 },
                  { name: 'Siska Amelia', status: 'Survey Lokasi', value: 'Rp 1.8M', progress: 60 },
                  { name: 'Budi Hartono', status: 'Negosiasi', value: 'Rp 3.2M', progress: 40 },
                ].map((lead, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{lead.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{lead.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-500 mb-1">{lead.value}</div>
                      <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lead.progress}%` }}
                          transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                          className="h-full bg-green-500" 
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover/pipeline:bg-green-500/30 transition-colors duration-700" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
