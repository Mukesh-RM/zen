import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  subtitle,
  children,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}
    >
      {subtitle && (
        <p className="section-subheading mb-3">{subtitle}</p>
      )}
      <h2 className="section-heading mb-4">{children}</h2>
      <div
        className={cn(
          'h-[2px] bg-crimson w-16',
          align === 'center' && 'mx-auto'
        )}
      />
    </motion.div>
  );
}
