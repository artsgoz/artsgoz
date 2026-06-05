import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { CULoginButton, SearchInput, Button } from '@org/design-system';
import { NAV_ITEMS, DROPDOWN_ITEMS } from './navConfig.js';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuToggle({ isOpen, onClick }: MobileMenuToggleProps) {
  return (
    <Button
      variant="outline"
      className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors border-none bg-transparent hover:bg-transparent shadow-none w-[44px] h-[44px] flex items-center justify-center"
      onClick={onClick}
    >
      {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
    </Button>
  );
}

interface MobileMenuPanelProps {
  isOpen: boolean;
}

export function MobileMenuPanel({ isOpen }: MobileMenuPanelProps) {
  return (
    <div
      className={`lg:hidden w-full bg-white border-t border-gray-100 flex flex-col transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="flex flex-col p-4 gap-4">
        {NAV_ITEMS.map((item) => {
          if (item.hasDropdown) {
            return (
              <div key={item.label} className="flex flex-col gap-2">
                <span className="text-gray-800 font-serif text-[18px] font-bold">
                  {item.label}
                </span>
                {DROPDOWN_ITEMS.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.label}
                    to={dropdownItem.path}
                    className="pl-4 text-gray-600 font-serif text-[16px] hover:text-[#DE5D8F]"
                  >
                    - {dropdownItem.label}
                  </Link>
                ))}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.path}
              className="text-gray-800 font-serif text-[18px] hover:text-[#DE5D8F]"
            >
              {item.label}
            </Link>
          );
        })}

        <div className="mt-2 pt-4 border-t border-gray-100 flex flex-col gap-4">
          <div className="md:hidden flex justify-center">
            <SearchInput placeholder="ค้นหา" />
          </div>
          <div className="sm:hidden flex justify-center">
            <CULoginButton onClick={() => console.log('ล็อกอิน')} />
          </div>
        </div>
      </div>
    </div>
  );
}
