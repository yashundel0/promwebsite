import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useScrolled } from '@/hooks/useScrolled';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-display text-sm tracking-wide uppercase transition-colors duration-200 ${
      isActive
        ? 'text-white'
        : 'text-grey-2 hover:text-white'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-dark-3 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-max section-padding flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs">
              Book a Trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={2} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-dark-1 border-l border-dark-3 transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-dark-3">
            <Logo />
            <button
              className="text-white p-2 -mr-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-display text-2xl tracking-wide uppercase py-3 border-b border-dark-3 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-grey-2'
                  }`
                }
                style={{
                  animation: mobileOpen
                    ? `slideInRight 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s both`
                    : 'none',
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Book a Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
