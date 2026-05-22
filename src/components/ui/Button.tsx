import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'crimson' | 'ghost' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'crimson', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'font-mono uppercase tracking-widest transition-all duration-300 relative overflow-hidden',
          {
            'bg-crimson text-white hover:shadow-crimson-glow':
              variant === 'crimson',
            'border border-parchment/30 text-parchment hover:border-crimson hover:text-crimson bg-transparent':
              variant === 'ghost',
            'bg-gold text-dojo-black hover:shadow-gold-glow':
              variant === 'gold',
            'border-2 border-crimson/50 text-crimson bg-transparent hover:bg-crimson/10':
              variant === 'outline',
          },
          {
            'text-xs px-4 py-2': size === 'sm',
            'text-sm px-8 py-4': size === 'md',
            'text-base px-10 py-5': size === 'lg',
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
      </button>
    );
  }
);

Button.displayName = 'Button';
