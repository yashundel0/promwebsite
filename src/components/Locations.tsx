import { MapPin } from 'lucide-react';
import { Reveal } from './Reveal';
import { locations } from '@/data/content';
import { assetUrl } from '@/lib/assetUrl';

export function Locations() {
  return (
    <section className="bg-dark-1 py-20 md:py-28">
      <div className="container-max section-padding">
        <Reveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-8 h-0.5 bg-accent" />
              <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
                Across the UAE
              </span>
              <span className="block w-8 h-0.5 bg-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95]">
              Training Locations
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <Reveal key={loc.id} direction="up" delay={i * 120}>
              <div className="card-hover group relative overflow-hidden bg-dark-2 border border-dark-3 aspect-[4/5]">
                <img
                  src={assetUrl(loc.image)}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <MapPin size={16} strokeWidth={2} />
                    <span className="font-display text-xs uppercase tracking-wider font-medium">
                      UAE
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white uppercase tracking-wide mb-1">
                    {loc.name}
                  </h3>
                  <p className="text-grey-3 text-xs leading-relaxed">{loc.address}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
