import React from 'react';
import { cn } from '../../lib/utils';

type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showText?: boolean;
  href?: string;
};

export function Logo({
  className,
  markClassName,
  textClassName,
  showText = true,
  href = '/',
}: LogoProps) {
  const content = (
    <>
      <img
        src="/logo-96.png"
        alt="WaHub"
        width={40}
        height={40}
        className={cn(
          'w-8 h-8 object-contain select-none group-hover:scale-110 transition-transform',
          markClassName
        )}
        decoding="async"
      />
      {showText && (
        <span
          className={cn(
            'font-display font-bold text-2xl text-slate-900 tracking-tight',
            textClassName
          )}
        >
          WaHub
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn('flex items-center gap-2.5 group', className)}
        aria-label="WaHub"
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cn('flex items-center gap-2.5 group', className)} aria-label="WaHub">
      {content}
    </div>
  );
}
