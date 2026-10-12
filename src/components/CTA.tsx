import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({
  title = 'Ready to Build Your Game?',
  description = 'Book a trial session today and take the first step towards football excellence.',
}: CTAProps) {
  return (
    <section className="relative bg-dark-1 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent opacity-[0.04] blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent opacity-[0.03] blur-3xl rounded-full" />
      </div>

      <div className="relative container-max section-padding py-20 md:py-28 text-center">
        <Reveal direction="up">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-0.5 bg-accent" />
            <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
              Join the Academy
            </span>
            <span className="block w-8 h-0.5 bg-accent" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white leading-[0.95] max-w-3xl mx-auto text-balance">
            {title}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <p className="mt-6 text-grey-2 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Book a Trial
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link to="/programs" className="btn-secondary w-full sm:w-auto">
              Explore Programs
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
