import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-slate-100">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                <span className="text-white font-black text-xl italic">W</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">WaHub<span className="text-green-600">.</span></span>
            </div>
            <p className="text-lg text-slate-500 max-w-sm leading-relaxed">
              WhatsApp CRM & AI Superpowers untuk agen properti modern di Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-8">Product</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#fitur" className="hover:text-green-600 transition-colors">Fitur</a></li>
              <li><a href="#solusi" className="hover:text-green-600 transition-colors">Solusi</a></li>
              <li><a href="#harga" className="hover:text-green-600 transition-colors">Harga</a></li>
              <li><a href="https://app.wahub.online/login" className="hover:text-green-600 transition-colors">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-8">Support</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#faq" className="hover:text-green-600 transition-colors">FAQ</a></li>
              <li><a href="https://wa.me/6281234567890" className="hover:text-green-600 transition-colors">WhatsApp Support</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Tutorial</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-sm font-medium">
            © 2024 WaHub. All rights reserved. Made with ❤️ for Property Agents.
          </p>
          <div className="flex gap-8 text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slate-900 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slate-900 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
