import { useState, useRef } from 'react';
import { CULoginButton, SearchInput, LoginDropdown } from '@org/design-system';
import { useClickOutside } from './useClickOutside.js';

interface NavActionsProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export function NavActions({ isLoggedIn, onLogin, onLogout }: NavActionsProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsLoginOpen(false));

  return (
    <>
      <div className="hidden md:block">
        <SearchInput placeholder="ค้นหา" />
      </div>
      <div className="hidden sm:block relative" ref={containerRef}>
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="flex flex-row items-center justify-center bg-white border border-[#E5E7EB] cursor-pointer hover:bg-gray-50 active:scale-95 transition-all shadow-sm text-gray-800 text-[14px] font-bold"
            style={{
              height: '35px',
              padding: '0 16px',
              borderRadius: '8px',
              fontFamily: 'var(--font-serif, ChulaCharasNew, sans-serif)',
            }}
          >
            ออกจากระบบ
          </button>
        ) : (
          <>
            <CULoginButton onClick={() => setIsLoginOpen((prev) => !prev)} />
            {isLoginOpen && (
              <LoginDropdown
                onClose={() => setIsLoginOpen(false)}
                onLogin={onLogin}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

