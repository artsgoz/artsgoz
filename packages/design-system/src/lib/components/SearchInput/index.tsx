// packages/design-system/src/lib/components/SearchInput/index.tsx
import React, { useState } from 'react';
import { Search } from 'lucide-react'; // 👈 นำเข้าไอคอนจาก Lucide

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

export function SearchInput({
  className = '',
  inputClassName = '',
  ...props
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex items-center shrink-0 bg-[#FFF] transition-all duration-200 ${className}`}
      style={{
        width: '296px',
        height: '41px',
        padding: '0 12px',
        gap: '40px',
        borderRadius: '9999px',
        border: isFocused ? '1px solid #545455' : '1px solid #8B8B8C',
      }}
    >
      <input
        type="text"
        className={`flex-1 self-stretch bg-transparent border-none min-w-0 font-serif text-[16px] leading-none placeholder:text-[#DE5D8F] ${inputClassName}`}
        style={{ color: '#DE5D8F', outline: 'none' }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />

      {/* ✅ เปลี่ยนมาใช้ไอคอน Search จาก Lucide โค้ดสะอาดขึ้น 10 เท่า! */}
      <Search size={20} color="#33363F" strokeWidth={2} className="shrink-0" />
    </div>
  );
}
