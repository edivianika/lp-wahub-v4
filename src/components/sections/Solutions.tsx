import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Plus, Zap, Sparkles, MessageSquare, Clock, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';
import { ScrollReveal } from '../ui/ScrollReveal';

const SolutionRow = ({ 
  badge, 
  title, 
  body, 
  pills, 
  visual, 
  reverse = false 
}: { 
  badge: string, 
  title: string, 
  body: string, 
  pills: string[], 
  visual: React.ReactNode, 
  reverse?: boolean 
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={rowRef} className={cn('grid lg:grid-cols-2 gap-16 md:gap-32 items-center', reverse ? 'lg:flex-row-reverse' : '')}>
      <ScrollReveal 
        direction={reverse ? 'right' : 'left'}
        className={cn('flex flex-col items-start gap-8', reverse ? 'lg:order-2' : '')}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
          {badge}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-[1.3] tracking-tight">
          {title}
        </h3>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed">
          {body}
        </p>
        <div className="flex flex-wrap gap-3">
          {pills.map(pill => (
            <span key={pill} className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-xs text-slate-600 font-bold shadow-sm hover:shadow-md transition-shadow cursor-default">
              {pill}
            </span>
          ))}
        </div>
      </ScrollReveal>
      <motion.div 
        style={{ y }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={cn('relative bg-white border border-slate-200 rounded-[3rem] shadow-2xl p-8 overflow-hidden group', reverse ? 'lg:order-1' : '')}
      >
        {visual}
      </motion.div>
    </div>
  );
};

export function Solutions() {
  return (
    <section id="solusi" className="relative overflow-hidden bg-page-grid py-24 md:py-32 section-fade-top">
      {/* texture-noise */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-5 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            ✦ Solusi Lengkap
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
            Semua yang Anda Butuhkan, <br />
            <span className="text-green-600 italic font-serif-accent">Satu Dashboard.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-[640px] mx-auto leading-relaxed">
            Enam fitur untuk enam masalah terbesar agen properti.
          </p>
        </ScrollReveal>
        
        <div className="space-y-48">
          <SolutionRow 
            badge="🏗️ Pipeline"
            title="Visualisasikan Prospek Anda."
            body="Setiap prospek memiliki posisinya: Leads Baru → Kontak Pertama → Survey → Negosiasi → Closing. Pindahkan stage dengan drag & drop. Filter berdasarkan proyek, tipe unit, atau rentang harga."
            pills={['Kanban Board', 'Custom Stage', 'Filter Multi-dimensi', 'Import CSV']}
            visual={
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="font-bold text-sm">Pipeline: Grand Kemang</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center"><Search className="w-3 h-3 text-slate-400" /></div>
                    <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center"><Plus className="w-3 h-3 text-slate-400" /></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { title: 'Leads Baru', count: 12, items: [{ name: 'Budi S.', price: '2.1M', tag: 'Hot', tagColor: 'bg-red-500' }, { name: 'Rina T.', price: 'Kavling', tag: 'New', tagColor: 'bg-blue-500' }] },
                    { title: 'Survey', count: 5, items: [{ name: 'Ahmad R.', price: '4.5M', tag: 'Warm', tagColor: 'bg-amber-500' }] },
                    { title: 'Negosiasi', count: 2, items: [] }
                  ].map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{col.title}</div>
                        <div className="text-[9px] font-bold text-slate-400">{col.count}</div>
                      </div>
                      <div className="space-y-2">
                        {col.items.map((item, i) => (
                          <motion.div 
                            key={i}
                            whileHover={{ y: -2 }}
                            className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm text-[10px]"
                          >
                            <div className="font-bold mb-1 text-slate-900">{item.name}</div>
                            <div className="text-slate-500 mb-2">{item.price}</div>
                            <div className={cn("inline-block px-1.5 py-0.5 rounded text-[8px] font-bold text-white", item.tagColor)}>{item.tag}</div>
                          </motion.div>
                        ))}
                        {col.items.length === 0 && (
                          <div className="h-20 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
                            <Plus className="w-4 h-4 text-slate-200" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <SolutionRow 
            reverse
            badge="🎯 Prioritas"
            title="Sistem yang Tahu Siapa Paling Siap Beli"
            body="Setiap prospek mendapat skor 0–100 yang bergerak otomatis berdasarkan aktivitas chat. Balas pesan? Skor naik. Tidak aktif 7 hari? Skor turun. Dashboard menampilkan lima prospek terpanas hari ini."
            pills={['Skor Otomatis 0–100', 'Hot/Warm/Cold', 'Next Best Action', 'Inactivity Alert']}
            visual={
              <div className="space-y-6">
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full border-4 border-green-500 border-t-transparent animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-green-600">92</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Budi Santoso</div>
                      <div className="flex gap-1 mt-1">
                        <Badge variant="hot">Hot Lead</Badge>
                        <span className="text-[9px] text-green-600 font-bold flex items-center gap-0.5"><Zap className="w-2 h-2" /> +12 pts</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-full shadow-lg">Chat Sekarang</Button>
                </div>
                
                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Analisa Skor</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-[8px] text-slate-400 mb-1">Response Time</div>
                      <div className="text-xs font-bold text-slate-600">Fast (2m)</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-[8px] text-slate-400 mb-1">Engagement</div>
                      <div className="text-xs font-bold text-slate-600">High (85%)</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 rounded-2xl text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400">Next Best Action</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">"Kirimkan simulasi KPR untuk unit 3BR, dia baru saja membuka brosur harga 3x dalam 1 jam terakhir."</p>
                </div>
              </div>
            }
          />

          <SolutionRow 
            badge="⏰ Reminder"
            title="Tidak Ada Lagi yang Terlupakan"
            body="Set reminder dengan tanggal, jam, dan catatan spesifik. Saat waktunya tiba, notifikasi muncul otomatis. Drip campaign mengirim urutan pesan terjadwal tanpa Anda sentuh manual."
            pills={['Follow-up Reminder', 'Drip Campaign', 'Scheduled Message', 'Notification Center']}
            visual={
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-sm">Jadwal Follow-up</div>
                  <div className="px-2 py-1 bg-red-500 text-white text-[9px] rounded-full font-bold animate-pulse">3 Urgent</div>
                </div>
                <div className="space-y-3">
                  {[
                    { time: '09:00', name: 'Budi S.', task: 'Kirim brosur Grand Kemang', status: 'Urgent', color: 'bg-red-500' },
                    { time: '14:00', name: 'Ahmad R.', task: 'Follow-up setelah survey', status: 'Today', color: 'bg-green-500' },
                    { time: '16:30', name: 'Rina T.', task: 'Konfirmasi site visit', status: 'Today', color: 'bg-green-500' },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 4 }}
                      className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group"
                    >
                      <div className={cn("absolute left-0 top-0 bottom-0 w-1", item.color)} />
                      <div className="text-[10px] font-bold text-slate-400 mt-1">{item.time}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-bold text-xs text-slate-900">{item.name}</div>
                          <div className={cn("text-[8px] font-bold px-1.5 py-0.5 rounded text-white", item.color)}>{item.status}</div>
                        </div>
                        <div className="text-[10px] text-slate-600">{item.task}</div>
                        <div className="flex gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-[9px] font-bold text-green-600 flex items-center gap-1"><MessageSquare className="w-2.5 h-2.5" /> Chat</button>
                          <button className="text-[9px] font-bold text-slate-400">Tunda 1 Jam</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            }
          />

          <SolutionRow 
            reverse
            badge="📢 Broadcast"
            title="Kirim Pesan ke Ribuan Orang Tanpa Ribet"
            body="Ingin menginfokan promo baru atau progres pembangunan? Kirim broadcast personal ke ribuan kontak sekaligus. Sistem kami mengatur jeda waktu otomatis agar nomor Anda tetap aman."
            pills={['Personalized Message', 'Anti-Ban Delay', 'Template Manager', 'Broadcast Analytics']}
            visual={
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">Template Preview</div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-[11px] leading-relaxed text-slate-600">
                      "Halo <span className="text-blue-600 font-bold">{"{{nama}}"}</span>, ada kabar gembira! Progres pembangunan <span className="text-blue-600 font-bold">{"{{proyek}}"}</span> sudah mencapai 80%. Cek foto terbarunya di sini..."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Sending Progress</div>
                    <div className="text-[10px] font-bold text-green-600">842 / 1,200</div>
                  </div>
                  <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      className="h-full bg-green-500 relative"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]" />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="text-xs font-bold text-slate-900">98%</div>
                      <div className="text-[8px] text-slate-400">Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-slate-900">42%</div>
                      <div className="text-[8px] text-slate-400">Read</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-slate-900">12%</div>
                      <div className="text-[8px] text-slate-400">Replied</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-slate-900">Mulai Broadcast Baru</Button>
              </div>
            }
          />

          <SolutionRow 
            badge="📊 Analytics"
            title="Data Nyata untuk Keputusan yang Tepat"
            body="Berapa banyak leads baru minggu ini? Siapa sales yang paling cepat membalas? Berapa rata-rata waktu dari leads masuk sampai closing? Semua terjawab dengan data transparan."
            pills={['Conversion Funnel', 'Sales Performance', 'Source Tracking', 'Export Report']}
            visual={
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Total Closing</div>
                    <div className="text-xl font-bold text-slate-900">Rp 12.4M</div>
                    <div className="text-[9px] text-green-500 font-bold mt-1">↑ 14% vs last month</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Avg. Response</div>
                    <div className="text-xl font-bold text-slate-900">4.2m</div>
                    <div className="text-[9px] text-green-500 font-bold mt-1">↑ 8% faster</div>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Lead Conversion Funnel</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Leads', value: 1200, width: '100%', color: 'bg-blue-500' },
                      { label: 'Contacted', value: 840, width: '70%', color: 'bg-blue-400' },
                      { label: 'Survey', value: 120, width: '30%', color: 'bg-blue-300' },
                      { label: 'Closing', value: 14, width: '10%', color: 'bg-green-500' },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-16 text-[9px] font-bold text-slate-600">{step.label}</div>
                        <div className="flex-1 h-6 bg-white rounded-md border border-slate-100 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: step.width }}
                            className={cn("h-full flex items-center px-2 text-[8px] font-bold text-white", step.color)}
                          >
                            {step.value}
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
          <SolutionRow 
            reverse
            badge="👥 Kolaborasi Tim"
            title="Satu Sistem untuk Seluruh Tim Sales"
            body="Manager bisa memantau performa setiap agen secara real-time. Bagikan leads secara otomatis atau manual, pantau kecepatan respon, dan pastikan tidak ada prospek yang terbengkalai."
            pills={['Role-based Access', 'Lead Distribution', 'Performance Tracking', 'Shared Inbox']}
            visual={
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-sm">Performa Agen</div>
                  <div className="text-[10px] text-slate-400">Minggu Ini</div>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Andi Wijaya', closing: 'Rp 4.2M', response: '2m', avatar: 'AW', color: 'bg-indigo-500' },
                    { name: 'Siti Aminah', closing: 'Rp 3.8M', response: '5m', avatar: 'SA', color: 'bg-emerald-500' },
                    { name: 'Budi Hartono', closing: 'Rp 1.2M', response: '12m', avatar: 'BH', color: 'bg-amber-500' },
                  ].map((agent, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs", agent.color)}>
                        {agent.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-bold text-xs text-slate-900">{agent.name}</div>
                          <div className="text-[10px] font-bold text-slate-900">{agent.closing}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-[9px] text-slate-400">
                            <Clock className="w-2.5 h-2.5" /> {agent.response} resp.
                          </div>
                          <div className="w-full h-1 bg-slate-50 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: i === 0 ? '90%' : i === 1 ? '75%' : '40%' }}
                              className={cn("h-full", agent.color)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-3 h-3 text-indigo-600" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600">Admin Note</span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-indigo-900/70">"Andi Wijaya memiliki tingkat konversi tertinggi bulan ini. Pertimbangkan untuk memberikan lebih banyak leads premium."</p>
                </div>
              </div>
            }
          />
        </div>

        <div className="mt-32 p-12 bg-slate-50 border border-slate-100 border-t-4 border-t-green-500 rounded-2xl text-center">
          <p className="text-xl font-medium text-slate-900 mb-8">Dapatkan akses penuh ke semua fitur selama 7 hari</p>
          <a href="https://app.wahub.online/register">
            <Button size="lg">Lihat Prospek Terpanas Saya →</Button>
          </a>
          <p className="text-sm text-slate-400 mt-4">Tanpa kartu kredit</p>
        </div>
      </div>
    </section>
  );
}
