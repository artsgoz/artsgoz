import { useState } from 'react';
import { Link } from 'react-router';
import { logoImg } from '@org/design-system';
import { PATHS } from '../../routes/paths.js';
import { DesktopMenu } from './DesktopMenu.js';
import { NavActions } from './NavActions.js';
import { MobileMenuPanel, MobileMenuToggle } from './MobileMenu.js';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFF] relative z-50 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300">
      <div className="flex items-center justify-between lg:justify-end w-full h-[65px] lg:h-[81px] px-4 lg:pl-[50px] lg:pr-[40px] gap-4 lg:gap-[38px]">
        <Link
          to={PATHS.ROOT}
          className="shrink-0 flex items-center hover:opacity-90 transition-opacity lg:mr-auto"
        >
          <img
            src={logoImg}
            alt="Artsgoz Logo"
            className="w-[130px] lg:w-[174px] aspect-[174/37] object-contain transition-all"
          />
        </Link>

        <DesktopMenu />

        <NavActions />

        <MobileMenuToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      <MobileMenuPanel isOpen={isMobileMenuOpen} />
    </nav>
  );
}
