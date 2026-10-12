import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { assetUrl } from '@/lib/assetUrl';
import { SectionHeading } from '@/components/SectionHeading';
import { ProgramCard } from '@/components/ProgramCard';
import { CoachCard } from '@/components/CoachCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Locations } from '@/components/Locations';
import { CTA } from '@/components/CTA';
import { Marquee } from '@/components/Marquee';
import { Reveal } from '@/components/Reveal';
import { programs, coaches, testimonials } from '@/data/content';

export function HomePage() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={assetUrl('/images/approach/2.jpg')}
            alt="Football training in progress"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        <div className="relative z-10 container-max section-padding w-full pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 hero-line hero-line-delay-1">
              <span className="block w-10 h-0.5 bg-accent" />
              <span className="font-display text-accent text-xs uppercase tracking-[0.25em] font-medium">
                PRO-M Football Academy · Dubai
              </span>
            </div>

            <h1 className="font-display font-bold text-white uppercase leading-[0.85] tracking-tight">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] hero-line hero-line-delay-2">
                Build Your
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-accent hero-line hero-line-delay-3">
                Game.
              </span>
            </h1>

            <p className="mt-8 text-grey-3 text-lg md:text-xl max-w-xl leading-relaxed hero-line hero-line-delay-4">
              Professional football training for young players in Dubai.
              Elite coaching, world-class facilities, and a pathway to excellence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-line hero-line-delay-5">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Book a Trial
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link to="/programs" className="btn-secondary w-full sm:w-auto">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="text-grey-1 text-[10px] uppercase tracking-[0.3em] font-display">Scroll</span>
          <ChevronDown size={20} className="text-accent scroll-indicator" strokeWidth={2} />
        </div>
      </section>

      {/* === MARQUEE === */}
      <Marquee />

      {/* === ABOUT THE ACADEMY === */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="img-reveal overflow-hidden">
                  <img
                    src={assetUrl('/images/about/4.jpg')}
                    alt="Young players receiving coaching at PRO-M Football Academy"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 md:-right-6 bg-accent text-black p-5 md:p-6 max-w-[200px]">
                  <p className="font-display text-3xl md:text-4xl font-bold leading-none">10+</p>
                  <p className="font-display text-xs uppercase tracking-wide mt-2 leading-relaxed">
                    Years developing players in Dubai
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal direction="right">
                <SectionHeading
                  eyebrow="About the Academy"
                  title="Where Champions Are Forged"
                  description="PRO-M Football Academy is Dubai's premier destination for youth football development. We combine elite coaching methodology with world-class facilities to help every player reach their full potential — on and off the pitch."
                />
              </Reveal>
              <Reveal direction="right" delay={150}>
                <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
                  {[
                    { num: '500+', label: 'Players Trained' },
                    { num: '15+', label: 'Expert Coaches' },
                    { num: '3', label: 'Dubai Locations' },
                  ].map((stat) => (
                    <div key={stat.label} className="border-t border-dark-4 pt-4">
                      <p className="font-display text-2xl md:text-3xl font-bold text-white">{stat.num}</p>
                      <p className="text-grey-2 text-xs mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="right" delay={250}>
                <Link to="/about" className="btn-secondary mt-8 inline-flex">
                  Our Story
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* === TRAINING PROGRAMS === */}
      <section className="bg-dark-1 py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <SectionHeading
                eyebrow="Training Programs"
                title="Programs Built for Every Player"
              />
              <Link to="/programs" className="btn-secondary shrink-0">
                View All Programs
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <WhyChooseUs />

      {/* === COACHES === */}
      <section className="bg-dark-1 py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <SectionHeading
                eyebrow="Meet the Team"
                title="Professional Coaches"
              />
              <Link to="/coaches" className="btn-secondary shrink-0">
                All Coaches
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, i) => (
              <CoachCard key={coach.id} coach={coach} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATIONS === */}
      <Locations />

      {/* === TESTIMONIALS === */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-max section-padding">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block w-8 h-0.5 bg-accent" />
                <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
                  Parent Voices
                </span>
                <span className="block w-8 h-0.5 bg-accent" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95]">
                What Parents Say
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <CTA />
    </>
  );
}
