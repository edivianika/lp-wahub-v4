import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Target, Users, BarChart3 } from 'lucide-react';
import { Card } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

export function Dashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-page-grid py-24 md:py-32 section-fade-top">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            ✦ All-in-One Control
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 leading-[1.2]">Semuanya dalam Satu Dashboard.</h2>
          <p className="text-base md:text-lg text-slate-500 mt-6 max-w-[640px] mx-auto">
            WaHub menggabungkan kekuatan WhatsApp dengan sistem manajemen leads yang terintegrasi penuh untuk efisiensi maksimal.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren delay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <MessageSquare />, title: 'WhatsApp Chats', desc: 'Kelola ribuan chat tanpa kehilangan konteks dengan sistem labeling cerdas.' },
            { icon: <Target />, title: 'Lead Tracking', desc: 'Pantau posisi setiap prospek di pipeline penjualan secara visual dan real-time.' },
            { icon: <Users />, title: 'Team Monitoring', desc: 'Lihat performa follow-up dan aktivitas tim sales Anda dalam satu tampilan.' },
            { icon: <BarChart3 />, title: 'Sales Pipeline', desc: 'Visualisasikan proyeksi closing dan kesehatan bisnis Anda dengan mudah.' },
          ].map((item, i) => (
            <motion.div key={i} style={{ y: i % 2 === 0 ? y : 0 }}>
              <Card delay={i * 0.1} className="p-8 bg-white border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
