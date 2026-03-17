import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, MessageSquare, ChevronDown, User } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function AIFeatures() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<null | { score: number, action: string, profile: string }>(null);
  const [isGeneratingReply, setIsGeneratingReply] = useState(false);
  const [suggestedReply, setSuggestedReply] = useState("");

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult({
        score: 85,
        action: "Kirim brosur unit 3BR & tawarkan site visit Sabtu besok.",
        profile: "Investor, mencari yield sewa tinggi, budget Rp 2M - 3M."
      });
    }, 2000);
  };

  const handleGenerateReply = () => {
    setIsGeneratingReply(true);
    setSuggestedReply("");
    setTimeout(() => {
      setIsGeneratingReply(false);
      setSuggestedReply("Halo Pak Budi, unit 3BR yang Bapak tanyakan masih tersedia. Kebetulan unit ini memiliki view terbaik ke arah city. Apakah Bapak ada waktu untuk survey hari Sabtu besok jam 10 pagi?");
    }, 1500);
  };

  return (
    <section id="ai-features" className="relative overflow-hidden bg-page-soft py-24 md:py-32 section-fade-top">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F0FAF5] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1DB868]"
          >
            <Sparkles className="w-3.5 h-3.5" /> AI POWERED CRM
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1412] leading-[1.1] mb-8 tracking-tight">
            Asisten AI yang <br />
            <span className="text-[#1DB868] italic font-serif-accent">Bekerja 24/7</span> untuk Anda.
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-[720px] mx-auto leading-relaxed">
            Bukan sekadar bot. AI kami menganalisa percakapan, memberikan <br className="hidden md:block" />
            skor prospek, dan menyarankan balasan terbaik untuk meningkatkan konversi.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren delay={0.1} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Feature 1: Analisa Chat AI */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="group relative p-12 bg-white border border-[#E6E8EC] rounded-[40px] shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 bg-[#F0FAF5] rounded-xl flex items-center justify-center mb-8 border border-[#D6F4E4]">
                <Brain className="w-7 h-7 text-[#1DB868]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D1412] mb-4">Analisa Chat AI</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-12">
                AI kami menganalisa setiap percakapan untuk mengetahui profiling calon pembeli hingga memberikan skor potensi closing.
              </p>
              
              {/* Visual Demo Area */}
              <div className="mt-auto bg-[#1A212F] rounded-3xl p-6 shadow-xl border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                      <User className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Budi Santoso</div>
                      <div className="text-[8px] text-white/40 uppercase tracking-widest">FROM SAT CAHAYA DESIGNS</div>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#1DB868] rounded-lg text-[9px] font-black uppercase tracking-widest text-white">
                    ANALISA
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-px w-full bg-white/5" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%' }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-[#1DB868]"
                      />
                    </div>
                    <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                  </div>
                  <div className="pt-4 text-center">
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">TAP FOR ANALYSIS</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 2, delay: 0.8 }}
                      className="h-full bg-[#1DB868]/40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Smart Reply Suggestions */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="group relative p-12 bg-white border border-[#E6E8EC] rounded-[40px] shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 bg-[#F0FAF5] rounded-xl flex items-center justify-center mb-8 border border-[#D6F4E4]">
                <MessageSquare className="w-7 h-7 text-[#1DB868]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D1412] mb-4">Smart Reply Suggestions</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-12">
                Bingung jawaban apa yang tepat? AI akan memberikan saran jawaban yang persuasif untuk mengarahkan prospek closing.
              </p>
              
              {/* Visual Demo Area */}
              <div className="mt-auto bg-[#F7F8FA] rounded-[32px] p-6 border border-[#E6E8EC]">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-[#0D1412] font-bold text-[9px] uppercase tracking-widest">AI BOOKING UNIT</div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1DB868]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-2.5 bg-[#F7F8FA] border border-slate-100 rounded-lg text-[9px] text-slate-400 flex justify-between items-center font-medium">
                      INTEREST ASKING PRICE <div className="flex gap-1"><ChevronDown className="w-2.5 h-2.5" /><ChevronDown className="w-2.5 h-2.5 rotate-180" /></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-slate-50 rounded-full" />
                      <div className="h-1.5 w-5/6 bg-slate-50 rounded-full" />
                      <div className="h-1.5 w-4/6 bg-slate-50 rounded-full border border-dashed border-slate-200" />
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#1A212F] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    GENERATE REPLY
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
