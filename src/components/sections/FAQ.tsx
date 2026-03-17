import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Apakah saya perlu ganti nomor WhatsApp?", a: "Tidak perlu. Anda bisa menggunakan nomor WhatsApp yang sudah ada, baik WhatsApp personal maupun Business. Cukup scan QR code dan sistem akan langsung sinkron." },
    { q: "Apakah nomor WhatsApp saya aman?", a: "Ya. Koneksi menggunakan enkripsi end-to-end WhatsApp. Kami tidak menyimpan password Anda, dan Anda tetap memiliki kontrol penuh atas akun WhatsApp. Disconnect bisa dilakukan kapan saja dengan satu klik." },
    { q: "Apa bedanya WaHub dengan WhatsApp Business biasa?", a: "WhatsApp Business tidak memiliki pipeline Kanban, lead scoring otomatis, drip campaign, atau reminder follow-up. WaHub adalah lapisan CRM di atas WhatsApp — memberi struktur dan otomasi yang tidak ada di WA Business." },
    { q: "Berapa lama setup awal?", a: "Rata-rata 8–15 menit: scan QR code, import kontak pertama, buat reminder pertama. Tim onboarding kami siap membantu via WhatsApp jika Anda butuh panduan." },
    { q: "Cocok untuk agen solo atau hanya untuk tim?", a: "Cocok untuk keduanya. Agen solo mendapat manfaat dari pipeline terstruktur dan reminder otomatis. Tim mendapat fitur tambahan: assign leads, monitoring performa, dan standarisasi proses." },
    { q: "Apakah bisa broadcast ke semua prospek sekaligus?", a: "Ya. Fitur broadcast memungkinkan pengiriman ke ratusan kontak dengan personalisasi nama otomatis. Drip campaign bisa mengatur urutan pesan untuk nurturing prospek jangka panjang." },
    { q: "Apakah trial benar-benar gratis tanpa syarat?", a: "Ya. 7 hari akses penuh, tidak perlu kartu kredit. Batalkan kapan saja sebelum hari ke-8 dan tidak ada biaya apapun." },
    { q: "Apa yang terjadi setelah masa trial berakhir?", a: "Anda akan mendapat notifikasi 2 hari sebelum trial berakhir. Jika tidak melanjutkan, data Anda tetap aman selama 30 hari sebelum dihapus otomatis." },
    { q: "Ada paket untuk tim besar atau multi-proyek?", a: "Ya. Tersedia paket tim dengan multi-user, multi-device, dan manajemen role. Hubungi kami via WhatsApp untuk penawaran yang sesuai skala tim Anda." },
  ];

  return (
    <section id="faq" className="py-32 md:py-48 bg-page-soft relative overflow-hidden section-fade-top section-fade-bottom">
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            ❓ Pertanyaan Umum
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-10 tracking-tight">
            Masih Ragu? <br />
            <span className="text-green-600 italic font-serif-accent">Kami Punya Jawaban.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal staggerChildren delay={0.05} className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 hover:border-green-200 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  {faq.q}
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-500",
                  openIndex === i ? "rotate-180 bg-green-50 text-green-600" : "text-slate-400"
                )}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-lg text-slate-500 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
