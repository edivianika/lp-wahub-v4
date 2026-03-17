import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ variant, children, className }: { variant: 'hot' | 'warm' | 'cold' | 'new', children: React.ReactNode, className?: string }) {
  const styles = {
    hot: 'bg-red-50 text-hot border-red-200',
    warm: 'bg-amber-50 text-warm border-amber-200',
    cold: 'bg-blue-50 text-cold border-blue-200',
    new: 'bg-green-50 text-green-600 border-green-200',
  };
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide border uppercase', styles[variant], className)}>
      {children}
    </span>
  );
}
