import { Check, AlertTriangle } from 'lucide-react';
import type { Subject, SubjectCategory } from '../types.js';

interface CurriculumViewProps {
  subjects: Subject[];
  onToggleSubject: (id: string) => void;
}

export function CurriculumView({ subjects, onToggleSubject }: CurriculumViewProps) {
  // Group subjects by category
  const categories: SubjectCategory[] = [
    'หมวดวิชาพื้นฐานอักษร',
    'หมวดการศึกษาทั่วไป',
    'หมวดวิชาเอก',
    'หมวดวิชาโท',
    'หมวดวิชาเลือกเสรี',
  ];

  // Requirements configuration for rendering banners
  const bannersConfig: Record<
    SubjectCategory,
    { completedLabel: string; requiredLabel: string; reqCredits: number }
  > = {
    หมวดวิชาพื้นฐานอักษร: {
      completedLabel: 'วิชาบังคับ 27 หน่วยกิต',
      requiredLabel: 'วิชาบังคับ',
      reqCredits: 27,
    },
    หมวดการศึกษาทั่วไป: {
      completedLabel: 'เรียนครบทุกหน่วยกิต',
      requiredLabel: 'วิชาการศึกษาทั่วไป',
      reqCredits: 30,
    },
    หมวดวิชาเอก: {
      completedLabel: 'วิชาเอกหลักสูตรครบถ้วน',
      requiredLabel: 'วิชาบังคับและเลือกเอก',
      reqCredits: 48,
    },
    หมวดวิชาโท: {
      completedLabel: 'วิชาโทหลักสูตรครบถ้วน',
      requiredLabel: 'วิชาโท',
      reqCredits: 18,
    },
    หมวดวิชาเลือกเสรี: {
      completedLabel: 'วิชาเลือกเสรีครบถ้วน',
      requiredLabel: 'วิชาเลือกเสรี',
      reqCredits: 6,
    },
  };

  return (
    <div className="w-full space-y-10 font-[ChulaCharasNew] select-none">
      {categories.map((category) => {
        const catSubjects = subjects.filter((s) => s.category === category);
        const config = bannersConfig[category];

        const totalCompleted = catSubjects
          .filter((s) => s.completed)
          .reduce((sum, s) => sum + s.credits, 0);

        const isCompleted = totalCompleted >= config.reqCredits;
        const missingCredits = config.reqCredits - totalCompleted;

        return (
          <div key={category} className="bg-white border border-[#D0D0D1]/30 rounded-[16px] p-6 shadow-sm">
            {/* Category Header Bar (matches Figma) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#F5CDDC] rounded-[8px] py-4 px-6 mb-6">
              <h3 className="text-black text-[20px] font-bold">{category}</h3>
              <span className="text-black text-[18px] font-bold mt-1 sm:mt-0">
                {config.reqCredits} หน่วยกิต
              </span>
            </div>

            {/* Status Banners (System banners - matches Figma) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              {/* Info/Check Banner */}
              <div className="flex-1 flex items-center bg-[#F7F8F9] border border-[#D0D0D1]/30 rounded-[12px] p-4 gap-4">
                <div className="flex items-center justify-center bg-[#ECF4E7] text-[#64A93C] rounded-full w-8 h-8 shrink-0">
                  <Check size={18} />
                </div>
                <div>
                  <span className="text-black text-[16px] font-bold block">
                    {config.completedLabel}
                  </span>
                  <span className="text-[#6D6D6D] text-[14px]">
                    หน่วยกิตวิชาขั้นต่ำ: {config.reqCredits} หน่วยกิต
                  </span>
                </div>
              </div>

              {/* Warning/Success Banner */}
              {isCompleted ? (
                <div className="flex-1 flex items-center bg-[#F7F8F9] border border-[#D0D0D1]/30 rounded-[12px] p-4 gap-4">
                  <div className="flex items-center justify-center bg-[#ECF4E7] text-[#64A93C] rounded-full w-8 h-8 shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <span className="text-[#64A93C] text-[16px] font-bold block">เรียนครบถ้วน</span>
                    <span className="text-[#6D6D6D] text-[14px]">
                      เรียนวิชาในกลุ่มนี้ครบตามเกณฑ์หลักสูตรแล้ว
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center bg-[#F7F8F9] border border-[#D0D0D1]/30 rounded-[12px] p-4 gap-4">
                  <div className="flex items-center justify-center bg-[#FDECC0] text-[#E2B030] rounded-full w-8 h-8 shrink-0">
                    <AlertTriangle size={18} />
                  </div>
                  <div>
                    <span className="text-[#E2B030] text-[16px] font-bold block">
                      ขาด {missingCredits} หน่วยกิต
                    </span>
                    <span className="text-[#6D6D6D] text-[14px]">
                      กรุณาเลือกเรียนวิชาเพิ่มเติมให้ครบตามเกณฑ์
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Subjects Table List */}
            <div className="w-full">
              <h4 className="text-black text-[20px] font-bold mb-4">วิชาที่ลงทะเบียนแล้ว</h4>

              {/* Table Container */}
              <div className="border border-[#D0D0D1]/30 rounded-[12px] overflow-hidden bg-[#F7F8F9]/30">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#D0D0D1]/30 bg-[#F7F8F9] py-3 px-4 md:px-6 text-[#6D6D6D] text-[16px] font-bold">
                  <div className="flex items-center gap-10 md:gap-16 flex-1 min-w-0">
                    <span className="w-[80px] shrink-0 text-left">รหัสวิชา</span>
                    <span className="flex-1 truncate text-left">ชื่อวิชา</span>
                  </div>
                  <div className="flex items-center gap-6 md:gap-12 shrink-0">
                    <span className="w-[60px] text-right">หน่วยกิต</span>
                    <span className="w-[48px] text-center">ผ่าน</span>
                  </div>
                </div>

                {/* Body Rows */}
                <div className="divide-y divide-[#D0D0D1]/20">
                  {catSubjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="flex items-center justify-between py-4 px-4 md:px-6 hover:bg-[#FCEFF4]/10 transition-colors"
                    >
                      {/* Left: Code & Name */}
                      <div className="flex items-center gap-10 md:gap-16 flex-1 min-w-0">
                        <span className="w-[80px] shrink-0 font-mono text-[16px] text-black">
                          {subject.code}
                        </span>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <span className="text-black text-[16px] font-bold truncate">
                            {subject.nameTh}
                          </span>
                          <span className="text-[#6D6D6D] text-[14px] truncate">
                            {subject.nameEn}
                          </span>
                        </div>
                      </div>

                      {/* Right: Credits & Checkbox */}
                      <div className="flex items-center gap-6 md:gap-12 shrink-0">
                        <span className="w-[60px] text-right font-mono text-[16px] text-black">
                          {subject.credits.toFixed(2)}
                        </span>
                        <div className="w-[48px] flex justify-center">
                          <button
                            type="button"
                            onClick={() => onToggleSubject(subject.id)}
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all cursor-pointer
                              ${
                                subject.completed
                                  ? 'bg-[#A6CE8F] border-[#A6CE8F] text-white'
                                  : 'border-[#D0D0D1] bg-white hover:border-[#DE5D8F]'
                              }`}
                            aria-label={`ทำเครื่องหมายผ่านวิชา ${subject.nameTh}`}
                          >
                            {subject.completed && <Check size={14} strokeWidth={3} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {catSubjects.length === 0 && (
                    <div className="py-8 text-center text-[#6D6D6D]">
                      ไม่มีข้อมูลวิชาลงทะเบียนในหมวดหมู่นี้
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
