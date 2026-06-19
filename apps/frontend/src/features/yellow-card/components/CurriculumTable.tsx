import type { YellowCardSubject, YellowCardCategory } from '../types.js';
import { GradeReportInteractive } from './GradeReportInteractive.js';
import { GradeReportPaperAction } from './GradeReportPaperAction.js';

interface CurriculumTableProps {
  category: YellowCardCategory;
  requiredCredits: number;
  groups: string[];
  subjects: YellowCardSubject[];
  onUpdateSubject: (updatedSubject: YellowCardSubject) => void;
  onAddSubject: (groupName: string) => void;
  onDeleteSubject: (id: string) => void;
}

export function CurriculumTable({
  category,
  requiredCredits,
  groups,
  subjects,
  onUpdateSubject,
  onAddSubject,
  onDeleteSubject,
}: CurriculumTableProps) {
  

  const getCategoryCompletedCredits = () => {
    return subjects
      .filter((s) => s.category === category && s.grade && s.grade !== 'F' && s.grade !== 'U')
      .reduce((sum, s) => sum + (parseFloat(s.credits) || 0), 0);
  };

  const completedCredits = getCategoryCompletedCredits();

  return (
    <div className="w-full flex flex-col gap-6 select-none font-[ChulaCharasNew] mb-8">
      {/* Category Header Bar (matches Planner page) */}
      <div className="w-full h-[60px] bg-[#F5CDDC] rounded-[8px] px-5 flex items-end justify-between pb-3">
        <span className="text-black text-[18px] font-bold">{category}</span>
        <span className="text-black text-[18px] font-bold">
          เรียนแล้ว {completedCredits} / {requiredCredits} หน่วยกิต
        </span>
      </div>

      {/* Description / Instructions under the category header bar */}
      {category === 'หมวดวิชาพื้นฐานอักษรศาสตร์' && (
        <div className="text-[16px] text-[#404041] flex flex-col gap-1.5 px-5 font-bold leading-relaxed mt-1">
          <p>1. ให้เลือกเรียนจากกลุ่มวิชาต่อไปนี้อย่างน้อยกลุ่มละ 1 รายวิชา รวมเป็น 5 วิชา</p>
          <p>2. เลือกอิสระตามความสนใจอีกจำนวน 4 รายวิชา (เลือกเรียนซ้ำกลุ่มรายวิชาได้)</p>
        </div>
      )}

      {/* Table Headers Row aligned with sub-items columns */}
      <div className="grid grid-cols-[20px_80px_1fr_100px_52px_52px_32px] gap-2 items-center text-black font-bold text-[16px] px-5 mb-1">
        <span></span>
        <span className="text-left">รหัสวิชา</span>
        <span className="text-left">ชื่อรายวิชา</span>
        <span className="text-center">ภาค/ปีการศึกษา</span>
        <span className="text-center">หน่วยกิต</span>
        <span className="text-center">เกรด</span>
        <span></span>
      </div>

      {/* Render each sub-group under this category using interactive accordions */}
      <div className="flex flex-col gap-4">
        {groups.map((groupName) => {
          const groupSubjects = subjects.filter((s) => s.group === groupName);

          return (
            <GradeReportInteractive
              key={groupName}
              topicName={groupName}
              onAddSubject={() => onAddSubject(groupName)}
            >
              {groupSubjects.map((subject) => (
                <GradeReportPaperAction
                  key={subject.id}
                  subject={subject}
                  onUpdate={onUpdateSubject}
                  onDelete={() => onDeleteSubject(subject.id)}
                />
              ))}

              {groupSubjects.length === 0 && (
                <p className="text-center text-[#99999A] py-3 text-[14px] italic">
                  ไม่มีวิชาลงทะเบียน (คลิกเพิ่มรายวิชาเพื่อเริ่มกรอก)
                </p>
              )}
            </GradeReportInteractive>
          );
        })}
      </div>
    </div>
  );
}
