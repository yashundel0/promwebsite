import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import { Trophy, Target, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We hold every player and coach to the highest standard, on and off the pitch.',
  },
  {
    icon: Target,
    title: 'Individual Focus',
    description: 'No two players are the same. We tailor development to each individual\'s needs.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'A genuine love for the game drives everything we do, every session, every day.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build a family of players, parents, and coaches who support one another.',
  },
];

const timeline = [
  { year: '2014', title: 'Founded in Dubai', description: 'PRO-M Football Academy opens its first training ground in Dubai Sports City with just 20 players.' },
  { year: '2017', title: 'Expansion', description: 'Second location opens in Al Barsha. Academy grows to over 200 registered players across age groups.' },
  { year: '2020', title: 'Elite Pathway', description: 'Launch of our structured player development pathway with connections to professional club academies.' },
  { year: '2024', title: '500+ Players', description: 'PRO-M now trains over 500 players across three Dubai locations with a full-time coaching staff of 15.' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="From a single pitch in Dubai Sports City to one of the UAE's most respected youth football academies."
        image="/images/about/1.webp"
        breadcrumb="About"
      />

      {/* Mission */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal direction="up">
                <SectionHeading
                  eyebrow="Our Mission"
                  title="Developing Players, Building Character"
                  description="At PRO-M Football Academy, our mission goes beyond producing skilled footballers. We are committed to developing well-rounded young people who carry the values of discipline, respect, and resilience into every area of life."
                />
              </Reveal>
              <Reveal direction="up" delay={150}>
                <p className="mt-6 text-grey-2 text-base leading-relaxed">
                  We believe that every young player has untapped potential. Our role is to unlock it — through expert coaching, structured progression, and an environment that challenges and supports in equal measure. From first-time players to aspiring professionals, we meet each athlete where they are and guide them to where they want to be.
                </p>
              </Reveal>
            </div>

            <Reveal direction="right">
              <div className="img-reveal overflow-hidden">
                <img
                  src="/images/about/2.jpg"
                  alt="Coach guiding young players at PRO-M Football Academy"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark-1 py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="What We Stand For"
              title="Our Core Values"
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((val, i) => (
              <Reveal key={val.title} direction="up" delay={i * 100}>
                <div className="group text-center p-8 border border-dark-3 bg-dark-2 card-hover h-full">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-dark-3 border border-dark-4 rounded-sm mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <val.icon
                      size={28}
                      className="text-accent group-hover:text-black transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white uppercase tracking-wide mb-3">
                    {val.title}
                  </h3>
                  <p className="text-grey-2 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Our Journey"
              title="A Decade of Development"
              align="center"
            />
          </Reveal>

          <div className="max-w-3xl mx-auto mt-16">
            {timeline.map((item, i) => (
              <Reveal key={item.year} direction="left" delay={i * 80}>
                <div className="flex gap-6 md:gap-8 pb-12 last:pb-0 relative">
                  {/* Line */}
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[27px] md:left-[31px] top-14 bottom-0 w-px bg-dark-4" />
                  )}
                  {/* Dot */}
                  <div className="shrink-0 w-14 md:w-16 h-14 md:h-16 rounded-full bg-dark-1 border-2 border-accent flex items-center justify-center z-10">
                    <span className="font-display text-accent font-bold text-xs md:text-sm">
                      {item.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="pt-2 flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-grey-2 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-dark-1 py-16 md:py-20 border-y border-dark-3">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Active Players' },
              { num: '15+', label: 'Expert Coaches' },
              { num: '10+', label: 'Years in Dubai' },
              { num: '3', label: 'Training Locations' },
            ].map((stat, i) => (
              <Reveal key={stat.label} direction="up" delay={i * 80}>
                <div>
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-none">
                    {stat.num}
                  </p>
                  <p className="font-display text-grey-2 text-xs md:text-sm uppercase tracking-wider mt-3">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Become Part of the PRO-M Family"
        description="Join hundreds of players who are building their game with Dubai's premier football academy."
      />
    </>
  );
}
