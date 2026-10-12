interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  accent?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  accent = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleSize = 'text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95]';

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="block w-8 h-0.5 bg-accent" />
          <span className="font-display text-accent text-xs uppercase tracking-[0.2em] font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display ${titleSize} ${accent ? 'text-accent' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-grey-2 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
