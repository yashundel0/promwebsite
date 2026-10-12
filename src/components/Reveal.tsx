import { type ReactNode } from 'react';
import { useScrollReveal, type RevealDirection } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function Reveal({
  children,
  direction = 'up',
  className = '',
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible, className: revealClass } = useScrollReveal<HTMLDivElement>({
    direction,
    threshold,
  });

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {isVisible ? children : <div style={{ minHeight: 1 }} />}
    </div>
  );
}
