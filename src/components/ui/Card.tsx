import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dojo-dark border border-slate-800 rounded-lg',
        hover && 'dojo-card',
        className
      )}
    >
      {children}
    </div>
  );
}
