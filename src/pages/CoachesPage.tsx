import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CoachCard } from '@/components/CoachCard';
import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import { Award, Users, Shield, GraduationCap } from 'lucide-react';
import { coaches } from '@/data/content';

const coachingPhilosophy = [
  {
    icon: GraduationCap,
    title: 'Licensed & Experienced',
    description: 'Every coach holds a UEFA coaching license and brings years of professional playing or academy experience.',
  },
  {
    icon: Users,
    title: 'Player-Centric',
    description: 'Our coaches adapt their methods to each player\'s learning style, pace, and individual goals.',
  },
  {
    icon: Shield,
    title: 'Safe & Supportive',
    description: 'All coaches are background-checked and trained in child safeguarding and first aid.',
  },
  {
    icon: Award,
    title: 'Continuous Development',
    description: 'Our coaching staff undergoes regular training to stay current with modern football methodology.',
  },
];

export function CoachesPage() {
  return (
    <>
      <PageHero
        title="Our Coaches"
        subtitle="Elite UEFA-licensed coaches committed to developing every player to their full potential."
        image="/images/approach/8.jpg"
        breadcrumb="Coaches"
      />

      {/* Coaches grid */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="The Team"
              title="Meet Your Coaches"
              description="Our coaching staff brings together decades of professional football experience from some of the world's most respected academies and clubs."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {coaches.map((coach, i) => (
              <CoachCard key={coach.id} coach={coach} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-dark-1 py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Coaching Philosophy"
              title="How We Coach"
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {coachingPhilosophy.map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 100}>
                <div className="group text-center p-8 border border-dark-3 bg-dark-2 card-hover h-full">
                  <div className="flex items-center justify-center w-14 h-14 mx-auto bg-dark-3 border border-dark-4 rounded-sm mb-5 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <item.icon
                      size={24}
                      className="text-accent group-hover:text-black transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-grey-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Train With the Best"
        description="Book a trial session and experience the PRO-M coaching difference firsthand."
      />
    </>
  );
}
