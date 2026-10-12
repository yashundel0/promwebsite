import { Link } from 'react-router-dom';
import { assetUrl } from '@/lib/assetUrl';

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
      <img
        src={assetUrl('/images/logo.svg')}
        alt="PRO-M Football Academy logo"
        className="h-10 w-10 shrink-0"
        width={40}
        height={40}
      />
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
