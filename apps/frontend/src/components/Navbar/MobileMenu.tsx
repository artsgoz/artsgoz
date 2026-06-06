import { useNavigate, useLocation } from 'react-router';
import { Menu, X, Folder, Hand, Briefcase, Building2, User } from 'lucide-react';
import { Button, MobileSidebar } from '@org/design-system';
import { NAV_ITEMS } from './navConfig.js';

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
  onClose: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export function MobileMenuPanel({
  isOpen,
  onClose,
  isLoggedIn,
  onLogin,
  onLogout,
}: MobileMenuPanelProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Map icons based on NavItem label/path
  const getIcon = (label: string) => {
    switch (label) {
      case 'หน้าหลัก':
        return <Folder size={20} className="text-gray-400 shrink-0" />;
      case 'บริการนิสิต':
        return <Hand size={20} className="text-gray-400 shrink-0" />;
      case 'ช่วยเหลือ':
        return <Briefcase size={20} className="text-gray-400 shrink-0" />;
      case 'ฝึกงาน':
        return <Building2 size={20} className="text-gray-400 shrink-0" />;
      case 'บัญชี':
        return <User size={20} className="text-gray-400 shrink-0" />;
      default:
        return <Folder size={20} className="text-gray-400 shrink-0" />;
    }
  };

  // Generate dynamic items based on login status
  const currentMenuItems = [...NAV_ITEMS];
  if (isLoggedIn) {
    currentMenuItems.push({ label: 'บัญชี', path: '#' });
  }

  const mappedMenuItems = currentMenuItems.map((item) => ({
    label: item.label,
    active: isActive(item.path),
    icon: getIcon(item.label),
    onClick: () => {
      navigate(item.path);
      onClose();
    },
  }));

  return (
    <MobileSidebar
      isOpen={isOpen}
      onClose={onClose}
      isLoggedIn={isLoggedIn}
      onLogin={onLogin}
      onLogout={onLogout}
      menuItems={mappedMenuItems}
    />
  );
}
