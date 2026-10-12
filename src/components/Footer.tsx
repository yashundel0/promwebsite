import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Music2 } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-dark-1 border-t border-dark-3">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 text-grey-2 text-sm leading-relaxed max-w-xs">
              Elite football training for young players in the UAE. Building champions on and off the pitch.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/promfootballacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-dark-4 rounded-full text-grey-2 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={2} />
              </a>
              <a
                href="https://wa.me/971544651751"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-dark-4 rounded-full text-grey-2 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={2} />
              </a>
              <a
                href="https://tiktok.com/@promfootballacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-dark-4 rounded-full text-grey-2 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 size={16} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-white mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/programs', label: 'Programs' },
                { to: '/coaches', label: 'Coaches' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-grey-2 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-white mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                'Play for Fun',
                'Play for Learn',
                'Learn in Game',
                'Play like a PRO',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/programs"
                    className="text-grey-2 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-white mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-grey-2 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={2} />
                <span>Dubai · Ras Al Khaimah · Abu Dhabi</span>
              </li>
              <li className="flex items-center gap-3 text-grey-2 text-sm">
                <Phone size={18} className="text-accent shrink-0" strokeWidth={2} />
                <a href="tel:+971544651751" className="hover:text-accent transition-colors">
                  +971 54 465 1751
                </a>
              </li>
              <li className="flex items-center gap-3 text-grey-2 text-sm">
                <Mail size={18} className="text-accent shrink-0" strokeWidth={2} />
                <a href="mailto:info@promfa.ae" className="hover:text-accent transition-colors">
                  info@promfa.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-dark-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-grey-1 text-xs">
            © {new Date().getFullYear()} PRO-M Football Academy. All rights reserved.
          </p>
          <p className="text-grey-1 text-xs">
            Mamayev Football Training L.L.C · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
