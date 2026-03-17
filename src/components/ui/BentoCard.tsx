import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const BentoCard = ({ 
  children, 
  className, 
  eyebrow, 
  title, 
  description,
  delay = 0,
}: { 
  children: React.ReactNode, 
  className?: string, 
  eyebrow?: string, 
  title: string, 
  description: string,
  delay?: number,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 1, 0.36, 1] }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[24px] border border-[#E6E8EC] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-md',
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          {eyebrow && (
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
              {eyebrow}
            </div>
          )}
          <h3 className="text-xl font-bold leading-tight text-slate-900 mb-3">
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed text-slate-500 max-w-[440px]">
            {description}
          </p>
        </div>
        
        <div className="mt-auto relative w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
