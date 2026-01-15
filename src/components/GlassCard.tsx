import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = ({ children, className, hover = true, glow = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        hover && 'hover:bg-card/60 hover:border-primary/30 hover:-translate-y-1',
        glow && 'glow-border animate-glow-pulse',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
