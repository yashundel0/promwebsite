import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import { programs } from '@/data/content';

export function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Training Programs"
        subtitle="Structured development pathways designed for every age, level, and ambition."
        image="/images/approach/7.jpg"
        breadcrumb="Programs"
      />

      {/* Programs detailed */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <div className="space-y-20 md:space-y-28">
            {programs.map((program, i) => (
              <div
                key={program.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <Reveal direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="img-reveal relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-accent text-black font-display text-xs uppercase tracking-wide font-semibold rounded-sm">
                        {program.ageRange}
                      </span>
                      <span className="px-3 py-1.5 bg-dark-1/90 backdrop-blur text-white font-display text-xs uppercase tracking-wide font-medium rounded-sm border border-dark-4">
                        {program.schedule}
                      </span>
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
                        Program {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="block w-12 h-px bg-dark-4" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white leading-[0.95] mb-5">
                      {program.title}
                    </h2>
                    <p className="text-grey-2 text-base leading-relaxed mb-8">
                      {program.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-5 h-5 bg-accent/15 rounded-full shrink-0 mt-0.5">
                            <Check size={12} className="text-accent" strokeWidth={3} />
                          </span>
                          <span className="text-grey-3 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="btn-primary">
                      Book a Trial
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="bg-dark-1 py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="Our Approach"
              title="The PRO-M Development Model"
              description="Every program at PRO-M follows a structured development model that balances technical skill, tactical understanding, physical conditioning, and mental resilience."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { phase: '01', title: 'Assess', desc: 'We evaluate each player\'s current level, strengths, and areas for development.' },
              { phase: '02', title: 'Plan', desc: 'A personalized training plan is created with clear goals and milestones.' },
              { phase: '03', title: 'Train', desc: 'Structured sessions deliver targeted development with regular feedback.' },
              { phase: '04', title: 'Progress', desc: 'Ongoing tracking and adjustment ensures continuous improvement.' },
            ].map((step, i) => (
              <Reveal key={step.phase} direction="up" delay={i * 100}>
                <div className="group p-8 border border-dark-3 bg-dark-2 card-hover h-full">
                  <p className="font-display text-5xl font-bold text-dark-4 group-hover:text-accent transition-colors duration-300 leading-none mb-4">
                    {step.phase}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-white uppercase tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-grey-2 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Find the Right Program"
        description="Not sure which program fits your child? Book a trial and our coaches will recommend the best path."
      />
    </>
  );
}
