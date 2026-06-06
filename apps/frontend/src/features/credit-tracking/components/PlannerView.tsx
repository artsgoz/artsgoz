import { Download, ArrowUp, Check } from 'lucide-react';
import type { Subject } from '../types.js';

interface PlannerViewProps {
  subjects: Subject[];
  onToggleSubject: (id: string) => void;
}

export function PlannerView({ subjects, onToggleSubject }: PlannerViewProps) {
  const semesters = [
    { num: 1, label: 'ปีที่ 1 ภาคการศึกษาที่ 1' },
    { num: 2, label: 'ปีที่ 1 ภาคการศึกษาที่ 2' },
    { num: 3, label: 'ปีที่ 2 ภาคการศึกษาที่ 1' },
    { num: 4, label: 'ปีที่ 2 ภาคการศึกษาที่ 2' },
    { num: 5, label: 'ปีที่ 3 ภาคการศึกษาที่ 1' },
    { num: 6, label: 'ปีที่ 3 ภาคการศึกษาที่ 2' },
    { num: 7, label: 'ปีที่ 4 ภาคการศึกษาที่ 1' },
    { num: 8, label: 'ปีที่ 4 ภาคการศึกษาที่ 2' },
  ];

  const handleSaveImage = () => {
    // Premium action: trigger print to PDF/image simulation
    window.print();
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full font-[ChulaCharasNew] select-none relative pb-16">
      {/* Top Header Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D0D0D1]/30 pb-6 mb-8">
        <div>
          <h3 className="text-black text-[28px] font-bold">แผนการเรียนส่วนบุคคล</h3>
          <p className="text-[#6D6D6D] text-[18px]">จัดตารางเรียนล่าสุดเวลา 14:53</p>
        </div>

        {/* Save Image Action */}
        <button
          type="button"
          onClick={handleSaveImage}
          className="flex items-center justify-center bg-[#64A93C] hover:bg-[#3d940b] text-white rounded-[8px] py-3 px-6 gap-2 text-[16px] font-bold shadow-md cursor-pointer transition-all shrink-0 self-start sm:self-auto"
        >
          <span>Save Image</span>
          <Download size={16} />
        </button>
      </div>

      {/* Semesters Cards Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {semesters.map((sem) => {
          const semSubjects = subjects.filter((s) => s.semester === sem.num);
          const semCredits = semSubjects.reduce((sum, s) => sum + s.credits, 0);
          const completedCredits = semSubjects
            .filter((s) => s.completed)
            .reduce((sum, s) => sum + s.credits, 0);

          return (
            <div
              key={sem.num}
              className="bg-white border border-[#D0D0D1]/30 rounded-[16px] p-5 shadow-sm flex flex-col justify-between"
            >
              {/* Semester Card Header */}
              <div className="flex items-center justify-between border-b border-[#D0D0D1]/20 pb-3 mb-4">
                <span className="text-black text-[18px] font-bold">{sem.label}</span>
                <div className="flex items-baseline gap-1 text-right">
                  <span className="text-[#DE5D8F] text-[16px] font-bold">
                    {completedCredits.toFixed(1)} /
                  </span>
                  <span className="text-black text-[18px] font-bold">{semCredits.toFixed(1)}</span>
                  <span className="text-[#6D6D6D] text-[14px] font-normal">นก.</span>
                </div>
              </div>

              {/* Subject Enrolled Items list */}
              <div className="space-y-3 flex-1">
                {semSubjects.map((subject) => (
                  <div
                    key={subject.id}
                    onClick={() => onToggleSubject(subject.id)}
                    className={`flex items-center justify-between border rounded-[8px] p-3 transition-all cursor-pointer hover:border-[#DE5D8F]/30
                      ${
                        subject.completed
                          ? 'bg-[#ECF4E7]/20 border-[#A6CE8F]/40'
                          : 'bg-[#F7F8F9] border-[#D0D0D1]/30'
                      }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#6D6D6D] text-[12px] font-mono shrink-0">
                          {subject.code}
                        </span>
                        <span className="text-black text-[15px] font-bold truncate">
                          {subject.nameTh}
                        </span>
                      </div>
                      <p className="text-[#6D6D6D] text-[13px] truncate mt-0.5">{subject.nameEn}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <span className="text-black text-[14px] font-bold font-mono">
                        {subject.credits.toFixed(1)} นก.
                      </span>
                      {/* Check mark badge */}
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center transition-all
                          ${
                            subject.completed
                              ? 'bg-[#A6CE8F] text-white'
                              : 'border border-[#D0D0D1] bg-white'
                          }`}
                      >
                        {subject.completed && <Check size={12} strokeWidth={3} />}
                      </div>
                    </div>
                  </div>
                ))}

                {semSubjects.length === 0 && (
                  <div className="text-center text-[#99999A] py-6 text-[15px]">
                    ยังไม่มีวิชาในภาคการศึกษานี้
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Scroll up Action Button */}
      <button
        type="button"
        onClick={handleScrollTop}
        className="fixed bottom-8 right-8 flex flex-col items-center justify-center bg-white border border-[#D0D0D1]/30 hover:border-[#DE5D8F]/30 rounded-full w-[64px] h-[64px] shadow-lg cursor-pointer transition-all select-none hover:scale-105 z-40 group"
      >
        <ArrowUp className="text-[#DE5D8F] w-6 h-6 group-hover:animate-bounce" />
        <span className="text-[#6D6D6D] text-[10px] font-bold mt-0.5">Go up</span>
      </button>
    </div>
  );
}
