import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

export function SocialProof() {
  const stats = [
    { value: '10.000+', label: 'Property Leads Managed' },
    { value: '500.000+', label: 'WhatsApp Conversations' },
    { value: '93%', label: 'User Satisfaction' },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* texture-noise */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal staggerChildren delay={0.1} className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white border border-slate-200 rounded-[2rem] p-10 text-center shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-green-600 mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-sm md:text-base text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
