import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="PRO-M Football Academy home"
    >
      <div className="flex items-center justify-center w-9 h-9 bg-accent rounded-sm relative">
        <span className="font-display font-bold text-black text-lg leading-none">P</span>
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-white rounded-full border-2 border-black" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-white text-base tracking-wide">
            PRO-M
          </span>
          <span className="font-display font-light text-grey-2 text-[10px] tracking-[0.2em] uppercase">
            Football Academy
          </span>
        </div>
      )}
    </Link>
  );
}
