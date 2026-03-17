import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Sparkles, Zap, ShieldCheck, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { ScrollReveal } from '../ui/ScrollReveal';

const plans = [
  {
    name: "Basic",
    price: "99.000",
    description: "Sempurna untuk individu dan startup kecil",
    badge: "POPULAR",
    features: [
      "25,000 pesan per bulan",
      "1 device WhatsApp",
      "2 drip campaign",
      "2 kanban board",
      "Scheduled Campaigns",
      "2 team members"
    ],
    cta: "Berlangganan Rp 99.000",
    highlight: false
  },
  {
    name: "Professional",
    price: "299.000",
    description: "Ideal untuk bisnis menengah dan agensi",
    badge: "RECOMMENDED",
    features: [
      "100,000 pesan per bulan",
      "3 device WhatsApp",
      "6 drip campaign",
      "6 kanban board",
      "Scheduled Campaigns",
      "3 team members",
      "Priority Support"
    ],
    cta: "Berlangganan Rp 299.000",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "599.000",
    description: "Solusi lengkap untuk perusahaan besar",
    badge: "ENTERPRISE",
    features: [
      "500,000 pesan per bulan",
      "10 device WhatsApp",
      "Unlimited drip campaign",
      "Unlimited kanban board",
      "Scheduled Campaigns",
      "10 team members",
      "Priority Support",
      "Dedicated Manager"
    ],
    cta: "Berlangganan Rp 599.000",
    highlight: false
  }
];

export function Pricing() {
  const [showPaidPlans, setShowPaidPlans] = useState(false);

  return (
    <section id="harga" className="relative overflow-hidden bg-page-soft py-24 md:py-32 section-fade-top">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-5 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-green-600"
          >
            <Zap className="w-4 h-4" /> Investasi Terbaik Anda
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Mulai Tanpa Risiko, <br />
            <span className="text-green-600 italic font-serif-accent">Closing Tanpa Batas.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-[640px] mx-auto leading-relaxed">
            Kami percaya pada kualitas produk kami. Itulah mengapa kami ingin Anda mencobanya sendiri secara gratis sebelum memutuskan.
          </p>
        </ScrollReveal>

        {/* Main Trial Focus Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <ScrollReveal>
            <div className="relative bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-green-900/20 group/trial">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover/trial:bg-green-500/20 transition-colors duration-700" />
              
              <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-[10px] font-black text-green-400 uppercase tracking-widest mb-6">
                    Recommended Start
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Trial 7 Hari</h3>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Coba gratis 7 hari dengan fitur lengkap. <br className="hidden md:block" />
                    Tanpa kartu kredit, tanpa komitmen.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: <Check className="w-4 h-4 text-green-500" />, text: "1,000 pesan/bulan" },
                      { icon: <Check className="w-4 h-4 text-green-500" />, text: "1 device WhatsApp" },
                      { icon: <Check className="w-4 h-4 text-green-500" />, text: "1 drip campaign" },
                      { icon: <Check className="w-4 h-4 text-green-500" />, text: "1 kanban board" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <a href="https://app.wahub.online/register">
                    <Button size="xl" className="w-full sm:w-auto px-12 py-6 text-lg font-bold rounded-2xl bg-green-600 hover:bg-green-500 shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-105">
                      Mulai Trial Gratis Sekarang
                    </Button>
                  </a>
                </div>

                <div className="w-full lg:w-72 flex-shrink-0">
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center hover:bg-white/10 transition-colors duration-500">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Harga</div>
                    <div className="text-5xl font-black text-white mb-2">GRATIS</div>
                    <div className="text-xs text-slate-500">Selama 7 Hari Pertama</div>
                    
                    <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">Keamanan Data Terjamin</div>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Users className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">Bantuan Onboarding</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Toggle Paid Plans */}
        <div className="text-center">
          <button 
            onClick={() => setShowPaidPlans(!showPaidPlans)}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-sm transition-colors group"
          >
            {showPaidPlans ? "Sembunyikan Paket Langganan" : "Lihat Paket Langganan Setelah Trial"}
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", showPaidPlans ? "rotate-180" : "")} />
          </button>
        </div>

        {/* Paid Plans Grid */}
        <AnimatePresence>
          {showPaidPlans && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8 pt-16">
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "relative p-10 rounded-[2.5rem] border transition-all duration-500",
                      plan.highlight 
                        ? "bg-white border-green-200 shadow-2xl shadow-green-500/10 scale-105 z-10" 
                        : "bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    {plan.badge && (
                      <div className={cn(
                        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-[9px] font-black tracking-widest uppercase",
                        plan.highlight ? "bg-green-600 text-white" : "bg-slate-200 text-slate-600"
                      )}>
                        {plan.badge}
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                      <p className="text-xs text-slate-500 mb-6">{plan.description}</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-sm font-bold text-slate-900">Rp</span>
                        <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                        <span className="text-xs text-slate-500">/ bulan</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={plan.highlight ? "primary" : "secondary"}
                      className={cn(
                        "w-full py-4 rounded-2xl font-bold text-sm",
                        plan.highlight ? "bg-green-600 hover:bg-green-700" : ""
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-3 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <p className="text-sm text-slate-600 font-medium">
                    Butuh solusi custom untuk ribuan agen? <a href="#" className="text-green-600 font-bold hover:underline">Hubungi Tim Sales Kami</a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
