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
        'bg-card border border-border rounded-lg p-6 transition-all duration-300',
        hover && 'hover:border-muted-foreground/30 hover:-translate-y-1',
        glow && 'glow-border',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
