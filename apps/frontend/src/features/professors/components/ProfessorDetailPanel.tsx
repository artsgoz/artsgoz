import type { Professor } from '../types.js';

interface ProfessorDetailPanelProps {
  professor: Professor;
  onBack: () => void;
}

/**
 * Professor detail panel — matches Figma Frame 6388:
 *  - 737×1538 (responsive: full height)
 *  - bg: #FFFFFF
 *  - border: 1px solid #D0D0D1
 *  - border-radius: 12px
 *  - gap: 10px between sections
 *
 * Sections:
 *  1. Frame 6387 — back button header, 120px tall, border-bottom #BBBBBB
 *  2. Frame 6381 — professor photo + name
 *  3. Frame 6379 — info table (abbreviation, department, location)
 *  4. Frame 6386 — achievements section
 *  5. Frame 6389 — qualifications section
 *  6. Frame 6392 — courses section
 */
export function ProfessorDetailPanel({ professor, onBack }: ProfessorDetailPanelProps) {
  return (
    /* Frame 6388 */
    <div
      className="bg-white border border-[#D0D0D1] rounded-xl flex flex-col overflow-y-auto"
      style={{ gap: '10px' }}
    >
      {/* Frame 6387 — Back button header: 120px tall, border-bottom #BBBBBB, padding 36px top/bottom 37px left/right */}
      <div
        className="flex items-center border-b border-[#BBBBBB] shrink-0"
        style={{ padding: '36px 37px', minHeight: '120px' }}
      >
        <button
          type="button"
          onClick={onBack}
          className="flex items-center justify-center"
          aria-label="กลับ"
          style={{ width: '48px', height: '48px' }}
        >
          {/* chevron-left icon — 12×24, stroke #DE5D8F, strokeWidth 2 */}
          <svg
            width="12"
            height="24"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20L2 12L10 4"
              stroke="#DE5D8F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Content area — padding matches design layout */}
      <div className="flex flex-col px-[37px] pb-8" style={{ gap: '10px' }}>
        {/* Frame 6381 — Professor photo + name: 192px circle avatar, name 32px w700 #DE5D8F */}
        <div
          className="flex items-center"
          style={{ gap: '94px', minHeight: '192px', paddingTop: '10px' }}
        >
          {/* Ellipse 126 — 192×192 avatar circle, bg #D9D9D9 */}
          <div
            className="rounded-full shrink-0 bg-[#D9D9D9]"
            style={{ width: '192px', height: '192px' }}
          />
          {/* Professor name — 32px w700 #DE5D8F */}
          <span
            className="font-[ChulaCharasNew] text-[#DE5D8F]"
            style={{ fontSize: '32px', fontWeight: 700, maxWidth: '281px' }}
          >
            {professor.name}
          </span>
        </div>

        {/* Frame 6379 — Info table rows: 567×140, gap:16 */}
        <div className="flex flex-col" style={{ gap: '16px' }}>
          {/* Row: ตัวอักษรย่อ */}
          <InfoRow label="ตัวอักษรย่อ" value={professor.abbreviation} />
          {/* Row: ภาควิชา/หน่วยงาน */}
          <InfoRow label="ภาควิชา/หน่วยงาน" value={professor.department} />
          {/* Row: สถานที่ */}
          <InfoRow label="สถานที่" value={professor.location} />
        </div>

        {/* Frame 6386 — Achievements section */}
        <InfoSection
          title="ใส่อะไรก็แล้วแต่ วุฒิ/ผลงาน"
          items={professor.achievements}
        />

        {/* Frame 6389 — Qualifications section */}
        <InfoSection title="คุณวุฒิ" items={professor.qualifications} />

        {/* Frame 6392 — Courses section */}
        <InfoSection title="รายวิชาที่รับผิดชอบ" items={professor.courses} />
      </div>
    </div>
  );
}

/**
 * Info row — matches Frame 6379 row structure:
 *   - Horizontal layout, gap:35
 *   - Left label column: justify:CENTER, 28px w700 #DE5D8F
 *   - Right value column: justify:MAX, 20px w400 #000000
 */
interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center" style={{ gap: '35px', minHeight: '36px' }}>
      {/* Label — 28px w700 #DE5D8F */}
      <div className="flex items-center justify-center shrink-0" style={{ minWidth: '189px' }}>
        <span
          className="font-[ChulaCharasNew] text-[#DE5D8F]"
          style={{ fontSize: '28px', fontWeight: 700 }}
        >
          {label}
        </span>
      </div>
      {/* Value — 20px w400 #000000 */}
      <div className="flex items-center flex-1">
        <span
          className="font-[ChulaCharasNew] text-[#000000]"
          style={{ fontSize: '20px', fontWeight: 400 }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

/**
 * Info section — matches Frame 6386/6389/6392:
 *   - Vertical layout, gap:12
 *   - Section label header: 24px w700 #E57DA5
 *   - Items list: gap:6, 20px w400 #000000
 */
interface InfoSectionProps {
  title: string;
  items: string[];
}

function InfoSection({ title, items }: InfoSectionProps) {
  return (
    /* Frame 6386/6389/6392 — VERTICAL, gap:12 */
    <div className="flex flex-col" style={{ gap: '12px', marginTop: '10px' }}>
      {/* Frame 6383 — section header row */}
      <div className="flex items-center" style={{ minHeight: '30px' }}>
        <span
          className="font-[ChulaCharasNew] text-[#E57DA5]"
          style={{ fontSize: '24px', fontWeight: 700 }}
        >
          {title}
        </span>
      </div>
      {/* Frame 6385 — items list, VERTICAL gap:6 */}
      <div className="flex flex-col" style={{ gap: '6px' }}>
        {items.map((item, index) => (
          /* Frame 6382/6384/6385 — each item row */
          <div key={index} className="flex items-center" style={{ minHeight: '28px' }}>
            <span
              className="font-[ChulaCharasNew] text-[#000000]"
              style={{ fontSize: '20px', fontWeight: 400 }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
