interface ProfessorSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  /** Width mode: 'full' for page 1 state (1086px wide), 'compact' for page 2 state (391px wide) */
  mode?: 'full' | 'compact';
}

/**
 * Search bar — matches Figma Frame 6175:
 *
 * Page 1 state (mode='full'):
 *   - Frame 6175: 1086×41, HORIZONTAL, gap:11
 *   - Search Fields: 1043×41, bg:#FFFFFF, border:#8B8B8C, radius:9999, padding:12 all, gap:40
 *   - Filter button (icon button): 32×32, bg:#E992B4, radius:8, padding:8 all
 *
 * Page 2 state (mode='compact'):
 *   - Frame 6175: 434×41
 *   - Search Fields: 391×41
 *
 * Search Fields inner:
 *   - Placeholder text: "ค้นหาข้อมูลบุคลากร" 16px w400 #DE5D8F
 *   - Search icon: 20×20, Ellipse 12×12 stroke:#33363F, plus vector
 *
 * Filter (icon button):
 *   - 32×32 bg:#E992B4 radius:8 (r:8)
 *   - list-filter icon: 16×16 Vector 13×9 stroke:#FFFFFF
 */
export function ProfessorSearchBar({
  value,
  onChange,
  onSearch,
  mode = 'full',
}: ProfessorSearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    /* Frame 6175 — HORIZONTAL, gap:11 */
    <div className="flex items-center" style={{ gap: '11px' }}>
      {/* Search Fields — pill shape, border #8B8B8C, radius:9999 */}
      <div
        className="flex items-center bg-white border border-[#8B8B8C] flex-1"
        style={{
          borderRadius: '9999px',
          padding: '12px',
          gap: '40px',
          height: '41px',
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ค้นหาข้อมูลบุคลากร"
          className="flex-1 bg-transparent outline-none font-[ChulaCharasNew] text-[#DE5D8F] placeholder:text-[#DE5D8F]"
          style={{ fontSize: '16px', fontWeight: 400 }}
        />
        {/* Search icon — 20×20: ellipse 12×12 + vector */}
        <button
          type="button"
          onClick={onSearch}
          className="shrink-0 flex items-center justify-center"
          aria-label="ค้นหา"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ellipse 65 — 12×12 circle */}
            <circle cx="8.5" cy="8.5" r="6" stroke="#33363F" strokeWidth="2" />
            {/* Vector 109 — diagonal line */}
            <path
              d="M13.5 13.5L17 17"
              stroke="#33363F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* icon button (filter) — 32×32 bg:#E992B4 radius:8 */}
      <button
        type="button"
        className="flex items-center justify-center bg-[#E992B4] shrink-0"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          padding: '8px',
        }}
        aria-label="กรอง"
      >
        {/* list-filter icon — Vector 13×9 stroke:#FFFFFF */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4H14M4 8H12M6 12H10"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
