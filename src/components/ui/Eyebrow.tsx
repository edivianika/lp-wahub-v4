import React from 'react';
import { cn } from '../../lib/utils';

export const Eyebrow = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn('inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-[11px] font-bold text-green-600 uppercase tracking-wider', className)}>
    {children}
  </div>
);
