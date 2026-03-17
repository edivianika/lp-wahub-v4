import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Copy, Send, Database, User, AlertTriangle, MessageSquare, ArrowRight, ChevronRight, TrendingUp } from 'lucide-react';
import { BentoCard } from '../ui/BentoCard';
import { cn } from '../../lib/utils';
import { ScrollReveal } from '../ui/ScrollReveal';

export function PainPoints() {
  return (
    <section id="fitur" className="relative overflow-hidden bg-[#F7F8FA] py-24 md:py-32">
      <div className="container relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            THE PROBLEM
          </motion.div>
          <h2 className="mb-6 max-w-3xl text-4xl font-bold leading-[1.1] text-slate-900 md:text-6xl tracking-tight">
            WhatsApp Anda Bukan CRM. <br />
            Ia <span className="text-red-600 italic font-serif-accent">Lubang Hitam</span> Prospek.
          </h2>
          <p className="max-w-[700px] text-slate-500 text-lg leading-relaxed">
            Setiap chat yang terlewat adalah peluang closing yang hilang. Tanpa sistem CRM, WhatsApp hanya menjadi tempat prospek masuk — lalu menghilang.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren delay={0.1} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Communication Chaos (2 cols) */}
          <BentoCard
            eyebrow="COMMUNICATION CHAOS"
            title="Inbox WhatsApp yang Berantakan"
            description="Chat dari iklan, pameran, dan referral bercampur jadi satu. Tanpa label dan prioritas, Anda tidak tahu mana calon pembeli."
            className="md:col-span-2"
            delay={0.1}
          >
            <div className="bg-[#F8F9FB] rounded-2xl border border-slate-100 p-6 h-[280px] overflow-hidden relative">
              <div className="space-y-3">
                {[
                  { name: '0812 xxxx', msg: 'Masih ada unit?', time: '15:57', active: true },
                  { name: 'Unknown', msg: 'Minta brosur', time: '5:32?', active: true },
                  { name: '0857 xxxx', msg: 'Harga tipe B?', time: '15:27', active: true },
                  { name: '0851 xxxx', msg: 'Booking unit masih ada?', badge: '137 unread messages' },
                ].map((chat, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-slate-900">{chat.name}</span>
                        {!chat.badge && (
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-400">{chat.time}</span>
                            {chat.active && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 truncate">{chat.msg}</p>
                    </div>
                    {chat.badge && (
                      <div className="bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <AlertTriangle className="w-3 h-3" />
                        {chat.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Efficiency Loss (2 cols) */}
          <BentoCard
            eyebrow="EFFICIENCY LOSS"
            title="Prospek Serius Tenggelam di Lautan Chat"
            description="Pesan booking bisa terkubur di antara ratusan chat masuk. Saat Anda membalas, unit sudah diambil orang lain."
            className="md:col-span-2"
            delay={0.2}
          >
            <div className="flex flex-col items-center justify-center h-[280px] gap-6">
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 bg-white border border-red-100 rounded-2xl p-5 shadow-xl relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">URGENT</span>
                  </div>
                  <span className="text-[10px] text-slate-400">2 minutes ago</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">Booking Unit A12</div>
                <div className="text-[10px] text-slate-400">Pesan terpendam di bawah 42 chat lain</div>
                <div className="absolute bottom-4 right-4 text-slate-200 flex gap-0.5">
                  <div className="w-1 h-1 bg-slate-200 rounded-full" />
                  <div className="w-1 h-1 bg-slate-200 rounded-full" />
                  <div className="w-1 h-1 bg-slate-200 rounded-full" />
                </div>
              </motion.div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                Lead penting hilang
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Revenue Leak (2 cols) */}
          <BentoCard
            eyebrow="REVENUE LEAK"
            title="Sulit Mengelola Follow Up Sistematis"
            description="Prospek yang tertarik hari ini bisa hilang besok jika tidak di-follow-up cepat. Tanpa pengingat, sales lupa siapa yang harus dihubungi."
            className="md:col-span-2"
            delay={0.3}
          >
            <div className="flex items-center justify-center h-[120px] px-8">
              <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                  <motion.circle
                    cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="12"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.15) }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-slate-900 leading-none">15%</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase mt-1 text-center">Followed up<br/>on time</span>
                </div>
              </div>
              <div className="ml-8 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-500">85% Leads Cold</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-200 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-400">15% Followed up</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 6: Data Blindness (2 cols, row-span-2) */}
          <BentoCard
            eyebrow="DATA BLINDNESS"
            title="Sulit Menganalisa Performa Customer Handling"
            description="Tanpa data performa, sulit melihat agent mana yang menghasilkan penjualan dan mana yang kehilangan banyak peluang."
            className="md:col-span-2 md:row-span-2"
            delay={0.6}
          >
            <div className="bg-[#F8F9FB] rounded-2xl border border-slate-100 p-6 h-full min-h-[420px]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-900">Agent Performance Analysis</span>
                <TrendingUp className="w-4 h-4 text-slate-300" />
              </div>
              
              <div className="flex items-end gap-1.5 h-32 mb-8">
                {[40, 60, 30, 80, 50, 90, 45, 70, 55, 85, 40, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-50 rounded-t-sm relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + (i * 0.05), duration: 1 }}
                      className={cn(
                        "absolute bottom-0 left-0 right-0 rounded-t-sm",
                        i % 3 === 0 ? "bg-blue-500" : "bg-blue-200"
                      )}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="text-lg font-black text-slate-900">29%</div>
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  </div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase mt-1">Conversion Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="text-lg font-black text-slate-900">1.2h</div>
                    <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />
                  </div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase mt-1">Avg Response</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm h-24 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-[10px] font-bold text-slate-600">Handling Quality</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-500">65%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-50 rounded-full relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute inset-0 bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Time Waste (1 col) */}
          <BentoCard
            eyebrow="TIME WASTE"
            title="Tidak Ada Standardisasi Customer Handling"
            description="Tim mengirim pesan berbeda-beda. Tanpa template standar, kualitas layanan tidak konsisten."
            className="md:col-span-1"
            delay={0.4}
          >
            <div className="flex flex-col items-center justify-center h-[120px] gap-3">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1 bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-sm">
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase">copy</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-200" />
                <div className="flex flex-col items-center gap-1 bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-sm">
                  <MessageSquare className="w-3 h-3 text-slate-400" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase">paste</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-red-500">
                <AlertCircle className="w-3 h-3" />
                Inefisiensi Tinggi
              </div>
            </div>
          </BentoCard>

          {/* Card 5: Strategy Gap (1 col) */}
          <BentoCard
            eyebrow="STRATEGY GAP"
            title="Tidak Ada Lead Classification"
            description="Tanpa klasifikasi, Anda tidak tahu mana yang hanya tanya-tanya dan mana yang siap booking."
            className="md:col-span-1"
            delay={0.5}
          >
            <div className="flex flex-col justify-center h-[120px] px-2">
              <div className="flex w-full h-10 rounded-xl overflow-hidden shadow-sm bg-slate-50">
                <div className="flex-1 bg-[#5D9DFE] flex items-center justify-center text-[8px] font-bold text-white" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}>
                  COLD
                </div>
                <div className="flex-1 bg-[#F9D07F] -ml-3 flex items-center justify-center text-[8px] font-bold text-white" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)' }}>
                  WARM
                </div>
                <div className="flex-1 bg-[#EF4444] -ml-3 flex items-center justify-center text-[8px] font-bold text-white" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                  HOT
                </div>
              </div>
              <div className="mt-3 flex justify-between px-2">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5D9DFE]" />
                  <span className="text-[7px] font-bold text-slate-400 uppercase">Inquiry</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <span className="text-[7px] font-bold text-slate-400 uppercase">Ready</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 7: Security Risk (4 cols) */}
          <BentoCard
            eyebrow="SECURITY RISK"
            title="Bergantung pada Individu Marketing"
            description="Database ikut pergi saat agent resign. Jika prospek hanya tersimpan di WhatsApp pribadi agent, Anda kehilangan aset berharga yang seharusnya milik perusahaan."
            className="md:col-span-4"
            delay={0.7}
          >
            <div className="flex items-center justify-center h-[100px] gap-8">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl relative group">
                    <Database className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Central Database</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    <ChevronRight className="w-5 h-5 text-slate-200 animate-[pulse_2s_infinite]" />
                    <ChevronRight className="w-5 h-5 text-slate-300 animate-[pulse_2s_infinite_200ms]" />
                    <ChevronRight className="w-5 h-5 text-slate-400 animate-[pulse_2s_infinite_400ms]" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                      <User className="w-8 h-8 text-slate-400" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-white rounded-full p-1 shadow-sm border border-slate-100">
                        <AlertTriangle className="w-5 h-5 text-amber-500 fill-amber-500/10" />
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Agent Device</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    <ChevronRight className="w-5 h-5 text-red-200" />
                    <ChevronRight className="w-5 h-5 text-red-300" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100 shadow-inner">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <AlertCircle className="w-8 h-8 text-red-500" />
                    </motion.div>
                  </div>
                  <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider">Data Loss Risk</span>
                </div>
              </div>
            </div>
          </BentoCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
