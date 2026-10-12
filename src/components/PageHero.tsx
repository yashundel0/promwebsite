import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { assetUrl } from '@/lib/assetUrl';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb: string;
}

export function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-dark-1">
      <div className="absolute inset-0">
        <img
          src={assetUrl(image)}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 container-max section-padding w-full pb-16 pt-32">
        <div className="flex items-center gap-2 text-grey-2 text-sm mb-4 fade-in">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-accent">{breadcrumb}</span>
        </div>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase leading-[0.95] hero-line">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-grey-3 text-lg max-w-2xl hero-line hero-line-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
