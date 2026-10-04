import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Plus, Bell, Save, Clock, Sparkles, Brain } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FloatingFeature } from '../ui/FloatingFeature';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 md:pt-48 pb-20 overflow-hidden bg-transparent">
      {/* Immersive Background Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        {/* hero-gradient */}
        <div className="absolute inset-0 bg-transparent" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Animated Blobs for Depth */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-100/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </motion.div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }} className="lg:w-[55%] flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                WhatsApp CRM Properti #1 di Indonesia
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8"
            >
              Ubah Percakapan WA <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600">Jadi Closing Properti</span> <br />
              <span className="font-serif-accent italic font-medium text-green-600">yang Konsisten.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-10"
            >
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-[540px]">
                Platform WhatsApp CRM yang dirancang khusus untuk tim sales properti. Amankan database, kelola pipeline, dan follow-up otomatis.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a href="https://app.wahub.online/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-sm font-bold rounded-xl shadow-lg bg-slate-900 hover:bg-slate-800 text-white border-none">
                  Mulai Trial Gratis
                </Button>
              </a>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                      <img src={`https://picsum.photos/seed/agent${i}/32/32`} alt="Agent" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">500+ Agen Aktif</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Preview */}
          <div className="lg:w-[45%] relative perspective-2000">
            {/* Atmospheric Glows behind the monitor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)] blur-[100px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_60%)] blur-[80px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_60%)] blur-[80px]" />
              
              {/* Particle-like accents */}
              <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse" />
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse delay-700" />
              <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-pulse delay-1000" />
            </div>

            <motion.div
              style={{ 
                y: y2, 
                scale: useTransform(scrollYProgress, [0, 1], [0.9, 0.85]),
                rotateY: -12,
                rotateX: 5,
                transformStyle: "preserve-3d"
              }}
              initial={{ opacity: 0, scale: 0.8, y: 40, rotateY: -20 }}
              animate={{ opacity: 1, scale: 0.9, y: 0, rotateY: -12 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative origin-center z-10"
            >
              {/* Monitor Stand Base - Stylized */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-[40px] opacity-40 blur-sm -z-10" />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-b from-slate-100 to-slate-200 rounded-t-[30px] opacity-60 -z-10" />
              
              {/* Main App Window - Vercel Style */}
              <div className="relative w-full bg-white border border-slate-200 rounded-2xl shadow-[0_40px_80px_-16px_rgba(0,0,0,0.15),0_0_100px_-20px_rgba(34,197,94,0.2)] p-5 overflow-hidden group/window">
                {/* Window Header */}
                <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover/window:bg-red-400 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover/window:bg-amber-400 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover/window:bg-green-400 transition-colors" />
                    </div>
                    <div className="h-3 w-px bg-slate-100" />
                    <div className="flex items-center gap-1.5">
                      <img src="/logo-40.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">WaHub Pro</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer"><Search className="w-3.5 h-3.5 text-slate-400" /></div>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"><Plus className="w-3.5 h-3.5 text-white" /></div>
                  </div>
                </div>

                {/* Pipeline Content */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Leads Baru', 'Survey Lokasi'].map((col, i) => (
                    <div key={col} className="space-y-3">
                      <div className="flex items-center justify-between px-1">
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{col}</span>
                        <div className="text-[8px] font-bold text-slate-400">{i === 0 ? '12' : '5'}</div>
                      </div>
                      
                      {/* Kanban Cards */}
                      <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-600 border border-slate-200">BS</div>
                          <Badge variant={i === 0 ? "hot" : "warm"} className="scale-75 origin-right">{i === 0 ? "Hot" : "Warm"}</Badge>
                        </div>
                        <div className="text-[10px] font-bold text-slate-900 mb-0.5">{i === 0 ? "Budi Santoso" : "Rina T."}</div>
                        <div className="text-[9px] text-slate-400 font-medium">{i === 0 ? "Apt 3BR · Rp 2.1M" : "House 2BR · Rp 1.2M"}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue</div>
                      <div className="text-sm font-mono font-bold text-slate-900">Rp 12.4M</div>
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Conversion</div>
                      <div className="text-sm font-mono font-bold text-green-600">12.5%</div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-end h-8">
                    {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                      <div key={i} className="w-1 bg-slate-100 rounded-full relative overflow-hidden" style={{ height: '100%' }}>
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                          className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-full" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Constellation - International Level Design */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-slate-100 z-40 flex items-center gap-3 group hover:scale-105 transition-transform duration-500"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-200 group-hover:rotate-12 transition-transform duration-500">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-1">Priority</div>
                  <div className="text-xs font-bold text-slate-900">Follow-up Budi S.</div>
                </div>
              </motion.div>

              {/* Strategically Positioned Features */}
              <FloatingFeature icon={Save} delay={0.2} className="-left-28 lg:-left-40 top-4" size="sm" hideOnMobile={false} variant="blue" style={{ transform: "translateZ(80px)" }}>
                Auto Save
              </FloatingFeature>
              <FloatingFeature icon={Sparkles} delay={0.6} className="-left-36 lg:-left-48 top-36" size="sm" hideOnMobile={false} variant="purple" style={{ transform: "translateZ(100px)" }}>
                Ai Suggestion
              </FloatingFeature>
              <FloatingFeature icon={Clock} delay={0.4} className="-right-16 lg:-right-24 bottom-36" size="sm" hideOnMobile={false} variant="amber" style={{ transform: "translateZ(60px)" }}>
                Scheduled Message
              </FloatingFeature>
              <FloatingFeature icon={Brain} delay={0.8} className="-right-24 lg:-right-36 bottom-8" size="sm" hideOnMobile={false} variant="green" style={{ transform: "translateZ(90px)" }}>
                Ai Analysis chat
              </FloatingFeature>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
