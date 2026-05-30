import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { PATHS } from '../../routes/paths.js';
import { SearchInput, logoImg, CULoginButton } from '@org/design-system';

export function Navbar() {
  const location = useLocation();

  // State สำหรับ Dropdown ของเดสก์ท็อป และ Hamburger Menu ของมือถือ
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // ปิด Dropdown เมื่อคลิกที่อื่น
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Design Tokens สำหรับตัวอักษรเมนู
  const menuTextStyle = {
    color: 'var(--Navbar-color-frame-text-default, #404041)',
    fontFamily:
      'var(--typography-desktop-body-xl-font-family, ChulaCharasNew, sans-serif)',
    fontSize: 'var(--typography-desktop-body-xl-size, 20px)',
    fontWeight: 'var(--typography-desktop-body-xl-weight-Regular, 400)',
    lineHeight: 'var(--typography-desktop-body-xl-line-height, 28px)',
  };

  return (
    <nav className="w-full bg-[#FFF] relative z-50 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300">
      {/* ✅ คอนเทนเนอร์หลัก (Responsive Layout):
        - มือถือ/แท็บเล็ต: สูง 65px, padding เล็กลง, จัดให้อยู่ริมซ้าย-ขวา (justify-between)
        - เดสก์ท็อป (lg:): สูง 81px, ล็อกขนาด 1282px, จัดกลุ่มเมนูชิดขวา (justify-end), ช่องไฟ 38px ตาม Figma
      */}
      <div className="flex items-center justify-between lg:justify-end w-full max-w-[1282px] mx-auto h-[65px] lg:h-[81px] px-4 lg:pl-[50px] lg:pr-[40px] gap-4 lg:gap-[38px]">
        {/* 1. โลโก้เว็บ (ย่อขนาดลงบนมือถือ) */}
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

        {/* 2. เมนูหลักสำหรับจอเดสก์ท็อป (ซ่อนบนมือถือ) */}
        <div className="hidden lg:flex items-center gap-[38px]">
          <Link
            to={PATHS.ROOT}
            style={{
              ...menuTextStyle,
              fontWeight: isActive(PATHS.ROOT)
                ? 'bold'
                : menuTextStyle.fontWeight,
            }}
            className="hover:opacity-75 transition-opacity text-center"
          >
            หน้าหลัก
          </Link>
          <Link
            to="#"
            style={menuTextStyle}
            className="hover:opacity-75 transition-opacity text-center"
          >
            บริการนิสิต
          </Link>
          <Link
            to="#"
            style={menuTextStyle}
            className="hover:opacity-75 transition-opacity text-center"
          >
            ช่วยเหลือ
          </Link>

          {/* เมนู ฝึกงาน (Dropdown เดสก์ท็อป) */}
          <div
            className="relative flex items-center gap-[8px] cursor-pointer select-none group"
            style={menuTextStyle}
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="hover:opacity-75 transition-opacity">ฝึกงาน</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
              className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M9.0831 9.83574C8.73362 10.2231 8.12575 10.2231 7.77627 9.83574L0.229012 1.46951C-0.281642 0.903441 0.120062 5.91278e-05 0.882427 5.91278e-05L15.9769 5.91278e-05C16.7393 5.91278e-05 17.141 0.903443 16.6304 1.46951L9.0831 9.83574Z"
                fill="#636363"
              />
            </svg>

            {isDropdownOpen && (
              <div className="absolute top-[130%] right-0 bg-[#FFF] border border-[#E5E7EB] rounded-md shadow-lg py-2 flex flex-col min-w-[160px] z-50">
                <Link
                  to="#"
                  className="px-4 py-2 text-left hover:bg-gray-50 transition-colors text-[16px]"
                  style={{
                    fontFamily: menuTextStyle.fontFamily,
                    color: menuTextStyle.color,
                  }}
                >
                  รีวิวฝึกงาน
                </Link>
                <Link
                  to="#"
                  className="px-4 py-2 text-left hover:bg-gray-50 transition-colors text-[16px]"
                  style={{
                    fontFamily: menuTextStyle.fontFamily,
                    color: menuTextStyle.color,
                  }}
                >
                  เปิดรับอยู่
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* 3. กล่องค้นหา (ซ่อนบนมือถือจอเล็กสุด แสดงบนจอ Tablet ขึ้นไป) */}
        <div className="hidden md:block">
          <SearchInput placeholder="ค้นหา" />
        </div>

        {/* 4. ปุ่มเข้าสู่ระบบ (ซ่อนบนมือถือจอเล็กสุด) */}
        <div className="hidden sm:block">
          <CULoginButton onClick={() => console.log('ล็อกอินเข้าสู่ระบบ')} />
        </div>

        {/* 5. ปุ่ม Hamburger สำหรับมือถือ (แสดงเฉพาะจอเล็ก) */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden w-full bg-white border-t border-gray-100 flex flex-col transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          <Link
            to={PATHS.ROOT}
            className="text-gray-800 font-serif text-[18px] hover:text-[#DE5D8F]"
          >
            หน้าหลัก
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-serif text-[18px] hover:text-[#DE5D8F]"
          >
            บริการนิสิต
          </Link>
          <Link
            to="#"
            className="text-gray-800 font-serif text-[18px] hover:text-[#DE5D8F]"
          >
            ช่วยเหลือ
          </Link>

          <div className="flex flex-col gap-2">
            <span className="text-gray-800 font-serif text-[18px] font-bold">
              ฝึกงาน
            </span>
            <Link
              to="#"
              className="pl-4 text-gray-600 font-serif text-[16px] hover:text-[#DE5D8F]"
            >
              - รีวิวฝึกงาน
            </Link>
            <Link
              to="#"
              className="pl-4 text-gray-600 font-serif text-[16px] hover:text-[#DE5D8F]"
            >
              - เปิดรับอยู่
            </Link>
          </div>

          <div className="mt-2 pt-4 border-t border-gray-100 flex flex-col gap-4">
            {/* ให้ช่องค้นหาและปุ่มล็อกอินมาโผล่ในเมนูมือถือแทน เพื่อให้ใช้งานได้ทุกจอ */}
            <div className="md:hidden flex justify-center">
              <SearchInput placeholder="ค้นหา" />
            </div>
            <div className="sm:hidden flex justify-center">
              <CULoginButton onClick={() => console.log('ล็อกอิน')} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
