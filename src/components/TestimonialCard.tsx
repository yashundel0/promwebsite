import { Star } from 'lucide-react';
import { Reveal } from './Reveal';
import type { Testimonial } from '@/data/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <Reveal direction="up" delay={index * 120}>
      <article className="bg-dark-1 border border-dark-3 p-8 h-full flex flex-col card-hover">
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={16} className="text-accent fill-accent" strokeWidth={1} />
          ))}
        </div>
        <blockquote className="text-grey-3 text-base leading-relaxed flex-1 italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-6 pt-5 border-t border-dark-3">
          <p className="font-display text-white font-semibold uppercase tracking-wide text-sm">
            {testimonial.name}
          </p>
          <p className="text-grey-1 text-xs mt-1">{testimonial.role}</p>
        </div>
      </article>
    </Reveal>
  );
}
