import { cn, getBeltColor } from '@/lib/utils';

interface BeltBadgeProps {
  rank: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BeltBadge({ rank, size = 'md', className }: BeltBadgeProps) {
  const color = getBeltColor(rank);
  const isBlack = color === '#1A1A1A';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono uppercase tracking-wider',
        {
          'text-[10px]': size === 'sm',
          'text-xs': size === 'md',
          'text-sm': size === 'lg',
        },
        className
      )}
    >
      <span
        className={cn(
          'block',
          {
            'w-6 h-1.5': size === 'sm',
            'w-8 h-2': size === 'md',
            'w-10 h-2.5': size === 'lg',
          }
        )}
        style={{
          backgroundColor: color,
          boxShadow: isBlack ? '0 0 4px rgba(184, 150, 12, 0.5)' : undefined,
        }}
      />
      {rank}
    </span>
  );
}
