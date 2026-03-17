import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { cn } from '../../lib/utils';

export const FloatingFeature = ({ 
  children, 
  className, 
  icon: Icon, 
  lottieUrl,
  delay = 0,
  size = 'md',
  hideOnMobile = true,
  variant = 'default',
  style
}: { 
  children: React.ReactNode, 
  className?: string, 
  icon?: any,
  lottieUrl?: string,
  delay?: number,
  size?: 'sm' | 'md' | 'lg' | 'xl',
  hideOnMobile?: boolean,
  variant?: 'default' | 'blue' | 'amber' | 'purple' | 'green',
  style?: React.CSSProperties
}) => {
  const sizes = {
    sm: 'px-3 py-2.5 gap-3',
    md: 'px-4 py-3 gap-3.5',
    lg: 'px-5 py-4 gap-4',
    xl: 'px-6 py-5 gap-5 scale-105'
  };

  const variants = {
    default: 'bg-white/90 border-slate-200/50 text-slate-400',
    blue: 'bg-white/95 border-blue-100/50 text-blue-500 shadow-blue-500/5',
    amber: 'bg-white/95 border-amber-100/50 text-amber-500 shadow-amber-500/5',
    purple: 'bg-white/95 border-purple-100/50 text-purple-500 shadow-purple-500/5',
    green: 'bg-white/95 border-green-100/50 text-green-500 shadow-green-500/5',
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{ 
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
      style={style}
      className={cn(
        'absolute backdrop-blur-xl border rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center z-30 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] group',
        variants[variant].split(' ')[0],
        variants[variant].split(' ')[1],
        variants[variant].split(' ')[3],
        hideOnMobile && 'hidden lg:flex',
        !hideOnMobile && 'flex scale-90 lg:scale-100',
        sizes[size],
        className
      )}
    >
      <div className={cn(
        'rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:rotate-12',
        size === 'xl' ? 'w-10 h-10 bg-slate-900 text-white shadow-lg' : cn('w-9 h-9 bg-slate-50 border border-slate-100', variants[variant].split(' ')[2])
      )}>
        {lottieUrl ? (
          <Player
            autoplay
            loop
            src={lottieUrl}
            style={{ height: size === 'xl' ? '28px' : '22px', width: size === 'xl' ? '28px' : '22px' }}
          />
        ) : Icon ? (
          <Icon className={cn(size === 'xl' ? 'w-5 h-5' : 'w-4.5 h-4.5')} />
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1.5 opacity-70">Feature</div>
        <div className={cn('font-bold text-slate-900 leading-none tracking-tight', size === 'xl' ? 'text-base' : 'text-[13px]')}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};
