// packages/design-system/src/lib/components/CULoginButton/index.tsx
import React from 'react';
import cuLogoImg from '../../assets/CU_logo.ico';

interface CULoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CULoginButton({
  className = '',
  ...props
}: CULoginButtonProps) {
  return (
    <button
      className={`flex items-center justify-center bg-[#FFF] border-none cursor-pointer transition-all active:scale-95 shrink-0 ${className}`}
      style={{
        height: '35px',
        padding: '0 16px',
        gap: '8px',
        borderRadius: '8px',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
      {...props}
    >
      <span className="text-[#111827] font-serif text-[13.755px] font-normal leading-[18.34px] tracking-normal whitespace-nowrap">
        เข้าสู่ระบบ
      </span>

      <img
        src={cuLogoImg}
        alt="CU Logo"
        className="object-cover shrink-0"
        style={{
          width: '24.647px',
          height: '18.197px',
          aspectRatio: '24.65/18.20',
        }}
      />
    </button>
  );
}
