import React from 'react';
import { cn } from '../../lib/utils';
import { Eyebrow } from './Eyebrow';

export const SectionHeader = ({ eyebrow, title, subtitle, className }: { eyebrow: string, title: string, subtitle?: string, className?: string }) => (
  <div className={cn('flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-16', className)}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-3xl md:text-5xl font-semibold text-text-primary leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-text-secondary leading-relaxed max-w-lg">{subtitle}</p>}
  </div>
);
