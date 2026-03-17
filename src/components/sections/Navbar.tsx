import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Fitur', href: '#fitur' },
    { name: 'Solusi', href: '#solusi' },
    { name: 'Harga', href: '#harga' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b',
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-slate-200/60 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'
    )}>
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span className="font-display font-bold text-2xl text-slate-900 tracking-tight">WaHub</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-500 hover:text-green-600 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="https://app.wahub.online/login" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Login</a>
          <a href="https://app.wahub.online/register">
            <Button size="md" className="shadow-lg shadow-green-200">Coba Gratis</Button>
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button className="text-slate-900 p-2 bg-slate-50 rounded-xl border border-slate-200" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="container px-6 py-8 flex flex-col gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold text-slate-900 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-green-500 transition-colors" />
                </a>
              ))}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <a href="https://app.wahub.online/login" className="text-lg font-bold text-slate-600 text-center">Login</a>
                <a href="https://app.wahub.online/register">
                  <Button size="lg" className="w-full">Coba Gratis</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
