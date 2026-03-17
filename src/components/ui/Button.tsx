import React from 'react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost', size?: 'sm' | 'md' | 'lg' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-green-500 text-white hover:bg-green-600 shadow-sm hover:shadow-cta active:scale-95',
      secondary: 'bg-white border border-border-default text-text-secondary hover:border-border-strong hover:text-text-primary hover:bg-bg-subtle',
      ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-subtle',
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base',
      lg: 'px-6 py-3.5 text-base md:px-9 md:py-4 md:text-lg',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
