import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Database, Zap } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { ScrollReveal } from '../ui/ScrollReveal';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Hubungkan WhatsApp',
      desc: 'Scan QR Code seperti menggunakan WA Web. Data Anda aman dan terenkripsi.',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Import Database',
      desc: 'Masukkan data leads dari Excel atau biarkan sistem menarik chat otomatis.',
      icon: <Database className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Mulai Closing',
      desc: 'Kelola pipeline, set reminder, dan biarkan AI membantu Anda closing lebih cepat.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="cara-kerja" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-24">
          <Eyebrow>Simple Process</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 leading-[1.2]">Tiga Langkah, Sepuluh Menit.</h2>
          <p className="text-base md:text-lg text-slate-500 mt-6 max-w-[640px] mx-auto">
            Tidak butuh waktu lama untuk mengubah cara Anda berjualan properti.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren delay={0.1} className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-5xl font-black text-slate-200 mb-8 group-hover:text-green-100 transition-colors">{step.number}</div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-green-600 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
