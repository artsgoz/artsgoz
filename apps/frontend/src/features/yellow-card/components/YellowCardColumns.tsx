import type { YellowCardSubject } from '../types.js';
import { CATEGORIES_CONFIG } from '../constants.js';
import { CurriculumTable } from './CurriculumTable.js';
import { calculateTotalCredits } from '../utils/yellowCardUtils.js';

interface YellowCardColumnsProps {
  subjects: YellowCardSubject[];
  major: string;
  onUpdateSubject: (updatedSubject: YellowCardSubject) => void;
  onAddSubject: (groupName: string) => void;
  onDeleteSubject: (id: string) => void;
}

export function YellowCardColumns({
  subjects,
  major,
  onUpdateSubject,
  onAddSubject,
  onDeleteSubject,
}: YellowCardColumnsProps) {
  const displayMajor =
    major && major !== 'เลือกวิชาเอก' ? major : 'สารสนเทศศึกษา';
  const rightColumnCredits = calculateTotalCredits(subjects, [
    'หมวดวิชาเอก',
    'หมวดวิชาโท',
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
      {/* Left Column (หลักสูตรอักษรศาสตร์บัณฑิต) */}
      <div className="flex flex-col gap-6">
        {/* Main Dark Pink Column Header */}
        <div className="w-full h-[60px] bg-[#E992B4] rounded-[8px] px-5 flex items-center shadow-xs">
          <span className="text-black text-[18px] font-bold">
            หลักสูตรอักษรศาสตรบัณฑิต
          </span>
        </div>

        {/* Left Column Categories */}
        {CATEGORIES_CONFIG.filter((cat) =>
          [
            'หมวดวิชาพื้นฐานอักษรศาสตร์',
            'หมวดการศึกษาทั่วไป',
            'หมวดวิชาเลือกเสรี',
          ].includes(cat.category),
        ).map((catConfig) => (
          <CurriculumTable
            key={catConfig.category}
            category={catConfig.category}
            requiredCredits={catConfig.requiredCredits}
            groups={catConfig.groups}
            subjects={subjects}
            onUpdateSubject={onUpdateSubject}
            onAddSubject={onAddSubject}
            onDeleteSubject={onDeleteSubject}
          />
        ))}
      </div>

      {/* Right Column (วิชาเอก + วิชาโท) */}
      <div className="flex flex-col gap-6">
        {/* Main Dark Pink Column Header */}
        <div className="w-full h-[60px] bg-[#E992B4] rounded-[8px] px-5 flex items-center justify-between shadow-xs">
          <span className="text-black text-[18px] font-bold truncate max-w-[320px]">
            วิชาเอก: {displayMajor}
          </span>
          <span className="text-black text-[16px] font-bold shrink-0">
            รวม {rightColumnCredits} นก.
          </span>
        </div>

        {/* Right Column Categories */}
        {CATEGORIES_CONFIG.filter((cat) =>
          ['หมวดวิชาเอก', 'หมวดวิชาโท'].includes(cat.category),
        ).map((catConfig) => (
          <CurriculumTable
            key={catConfig.category}
            category={catConfig.category}
            requiredCredits={catConfig.requiredCredits}
            groups={catConfig.groups}
            subjects={subjects}
            onUpdateSubject={onUpdateSubject}
            onAddSubject={onAddSubject}
            onDeleteSubject={onDeleteSubject}
          />
        ))}
      </div>
    </div>
  );
}
