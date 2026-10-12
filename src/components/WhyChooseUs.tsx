import { Trophy, Target, MapPin, Users, Heart, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';
import { whyChooseUs } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Target,
  MapPin,
  Users,
  Heart,
  Calendar,
};

export function WhyChooseUs() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="container-max section-padding">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-0.5 bg-accent" />
                <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
                  Why PRO-M
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95]">
                Why Choose Us
              </h2>
            </div>
            <p className="text-grey-2 text-base leading-relaxed max-w-md">
              We don&apos;t just run training sessions. We build players, develop character, and create pathways to professional football.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-3 border border-dark-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <Reveal key={item.id ?? i} direction="up" delay={(i % 3) * 100}>
                <div className="group bg-dark-1 p-8 md:p-10 h-full transition-colors duration-300 hover:bg-dark-2">
                  <div className="flex items-center justify-center w-14 h-14 bg-dark-3 border border-dark-4 rounded-sm mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-accent group-hover:text-black transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-grey-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
