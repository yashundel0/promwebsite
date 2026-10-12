import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/data/content';
import { Reveal } from './Reveal';

interface ProgramCardProps {
  program: Program;
  index?: number;
}

export function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  return (
    <Reveal direction="up" delay={index * 100}>
      <article className="card-hover group bg-dark-1 border border-dark-3 overflow-hidden h-full flex flex-col">
        <div className="img-reveal relative aspect-[4/3] overflow-hidden bg-dark-2">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/20 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-accent text-black font-display text-[11px] uppercase tracking-wide font-medium rounded-sm">
              {program.ageRange}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl font-semibold text-white uppercase tracking-wide mb-3">
            {program.title}
          </h3>
          <p className="text-grey-2 text-sm leading-relaxed mb-5 flex-1">
            {program.shortDescription}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-dark-3">
            <span className="text-grey-1 text-xs font-medium">{program.schedule}</span>
            <Link
              to="/programs"
              className="group/btn flex items-center gap-2 text-white font-display text-xs uppercase tracking-wider hover:text-accent transition-colors"
            >
              Learn More
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-1 transition-transform"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
