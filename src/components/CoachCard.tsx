import { Reveal } from './Reveal';
import type { Coach } from '@/data/content';
import { Award } from 'lucide-react';
import { assetUrl } from '@/lib/assetUrl';

interface CoachCardProps {
  coach: Coach;
  index?: number;
}

export function CoachCard({ coach, index = 0 }: CoachCardProps) {
  return (
    <Reveal direction="up" delay={index * 100}>
      <article className="card-hover group bg-dark-1 border border-dark-3 overflow-hidden h-full flex flex-col">
        <div className="img-reveal relative aspect-[3/4] overflow-hidden bg-dark-2">
          <img
            src={assetUrl(coach.image)}
            alt={coach.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-lg font-semibold text-white uppercase tracking-wide leading-tight">
              {coach.name}
            </h3>
            <p className="text-accent text-xs uppercase tracking-wide mt-1 font-medium">
              {coach.position}
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-grey-2 text-xs mb-4">
            <Award size={14} className="text-accent" strokeWidth={2} />
            <span className="font-display uppercase tracking-wider">{coach.experience}</span>
          </div>
          <p className="text-grey-2 text-sm leading-relaxed mb-5 flex-1">
            {coach.bio}
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-3">
            {coach.credentials.map((cred) => (
              <span
                key={cred}
                className="px-2.5 py-1 bg-dark-3 text-grey-3 text-[10px] font-medium uppercase tracking-wide rounded-sm border border-dark-4"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
