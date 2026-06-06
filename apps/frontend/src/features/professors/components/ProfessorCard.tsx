import type { Professor } from '../types.js';

interface ProfessorCardProps {
  professor: Professor;
  isSelected?: boolean;
  onClick: (professor: Professor) => void;
}

/**
 * Professor list row card — matches Figma Frame 6184:
 *  - Height: 72px
 *  - bg: #FFFFFF
 *  - padding: 16px top/bottom, 24px left/right
 *  - gap: 16px between avatar area and right side
 *  - border-radius: 8px
 *  - drop shadow: 0 4px 4px rgba(0,0,0,0.25) (from Frame 6184's effects)
 *
 * Inner layout (Frame 6317) — horizontal, gap:201, center-aligned:
 *   Left: Frame 6316 — avatar (40×40 circle) + name/email text
 *   Right: Frame 5878 — icons (hidden in list state, only chevron-right visible on selected)
 */
export function ProfessorCard({ professor, isSelected = false, onClick }: ProfessorCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(professor)}
      className="w-full text-left"
    >
      {/* Frame 6184 — 72px tall, white bg, rounded-lg, shadow */}
      <div
        className="w-full bg-white rounded-lg flex items-center px-6 py-4 gap-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        style={{ minHeight: '72px' }}
      >
        {/* Frame 6317 — full width row, space-between */}
        <div className="flex items-center justify-between w-full gap-0">
          {/* Frame 6316 — avatar + name/email */}
          <div className="flex items-center gap-4">
            {/* Ellipse 124 — 40×40 grey circle avatar placeholder */}
            <div
              className="rounded-full shrink-0 bg-[#626262]"
              style={{ width: '40px', height: '40px' }}
            />

            {/* Frame 5876 — name and email stacked vertically, gap:3 */}
            <div className="flex flex-col justify-center" style={{ gap: '3px' }}>
              {/* list item (this is body) — 16px w400 #000000 */}
              <span
                className="font-[ChulaCharasNew] text-[#000000] leading-[1.5]"
                style={{ fontSize: '16px', fontWeight: 400 }}
              >
                {professor.name}
              </span>
              {/* this is the description — 14px w400 #6D6D6D */}
              <span
                className="font-[ChulaCharasNew] text-[#6D6D6D] leading-[1.5]"
                style={{ fontSize: '14px', fontWeight: 400 }}
              >
                {professor.email}
              </span>
            </div>
          </div>

          {/* Frame 5878 — right icons (chevron-right) */}
          {/* In the design these are HIDDEN in the list state. */}
          {/* Only chevron-right is relevant as the clickable affordance */}
          <div className="flex items-center gap-4 opacity-0">
            {/* chevron-right icon 16×16 */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="#636363"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}
