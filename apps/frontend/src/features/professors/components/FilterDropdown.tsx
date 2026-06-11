import { useState, useRef, useEffect } from 'react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

/**
 * Filter dropdown — matches Figma Frame 6128 / Frame 6338:
 *  - 170×37
 *  - bg: #FFFFFF
 *  - border: ~1px solid #E992B4 (actually #F5CDDC from design)
 *  - border-radius: 16px (r:16)
 *  - padding: ~7px top/bottom, 20px left/right
 *  - gap: 47px (space-between-ish)
 *  - Label text: 16.76px w700 #DE5D8F
 *  - Chevron-down icon: stroke #DE5D8F
 */
export function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Frame 6128 / Frame 6338 — the dropdown trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-white border border-[#F5CDDC] rounded-2xl"
        style={{
          width: '170px',
          height: '37px',
          paddingTop: '7px',
          paddingBottom: '7px',
          paddingLeft: '20px',
          paddingRight: '20px',
          gap: '47px',
        }}
      >
        {/* Frame 6137 — label + chevron row */}
        <div className="flex items-center justify-between w-full">
          {/* Label text — 16.76px w700 #DE5D8F */}
          <span
            className="font-[ChulaCharasNew] text-[#DE5D8F] whitespace-nowrap overflow-hidden"
            style={{ fontSize: '16.76px', fontWeight: 700 }}
          >
            {label}
          </span>
          {/* chevron-down icon — Vector 5×10 stroke #DE5D8F */}
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#DE5D8F"
              strokeWidth="1.68"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 z-50 bg-white border border-[#F5CDDC] rounded-xl shadow-md min-w-full overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-[#FCF0F4] transition-colors"
              style={{
                fontFamily: 'ChulaCharasNew, sans-serif',
                fontSize: '16px',
                fontWeight: value === option ? 700 : 400,
                color: value === option ? '#DE5D8F' : '#000000',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
