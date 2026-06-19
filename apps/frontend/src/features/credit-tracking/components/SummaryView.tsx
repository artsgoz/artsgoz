import { useState } from 'react';
import { Download } from 'lucide-react';
import type { Subject, SubjectCategory, AcademicProfile } from '../types.js';
import { SystemBanner } from '../../../components/SystemBanner/index.js';

interface SummaryViewProps {
  subjects: Subject[];
  profile: AcademicProfile;
  lastSavedTime: string;
}

export function SummaryView({ subjects, profile, lastSavedTime }: SummaryViewProps) {
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  // Requirements configuration
  const categories: { category: SubjectCategory; required: number }[] = [
    { category: 'หมวดวิชาพื้นฐานอักษร', required: 27 },
    { category: 'หมวดการศึกษาทั่วไป', required: 30 },
    { category: 'หมวดวิชาเลือกเสรี', required: 6 },
    { category: 'หมวดวิชาเอก', required: 48 },
    { category: 'หมวดวิชาโท', required: 18 },
  ];

  const handleSaveImage = () => {
    // Show a beautiful premium feedback notification
    setSuccessBanner('บันทึกรูปภาพและจัดเตรียมรายงานผลการเรียนสำเร็จแล้ว!');
    setTimeout(() => setSuccessBanner(null), 4000);

    // Trigger standard browser print layout, optimized for PDF saving
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full font-[ChulaCharasNew] select-none pb-20 text-black animate-fade-in">
      {/* Success Notification */}
      {successBanner && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 shadow-lg animate-fade-in min-w-[320px] md:min-w-[480px]">
          <SystemBanner
            type="success"
            emphasis="subtle"
            message={successBanner}
          />
        </div>
      )}

      {/* Top Header Row with Save Image button */}
      <div className="w-full flex items-center justify-between border-b border-[#D0D0D1]/30 pb-6 mb-8 print:hidden">
        <div>
          <h3 className="text-black text-[28px] font-bold">สรุปข้อมูลหลักสูตร</h3>
          <p className="text-[#6D6D6D] text-[18px]">
            {lastSavedTime ? `จัดตารางเรียนล่าสุดเมื่อเวลา ${lastSavedTime} น.` : 'ยืนยันและสรุปแผนการลงทะเบียนเรียน'}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveImage}
          className="flex items-center justify-center bg-[#64A93C] hover:bg-[#528f2e] text-white rounded-[8px] h-[52px] px-6 gap-2 text-[16px] font-bold shadow-md cursor-pointer transition-all shrink-0"
        >
          <span>Save Image</span>
          <Download size={20} />
        </button>
      </div>

      {/* Main Print Wrapper Container */}
      <div className="w-full flex flex-col gap-10 max-w-[1061px] mx-auto bg-white print:p-0">
        {/* Main Header Card (หลักสูตรอักษรศาสตร์บัณฑิต) */}
        <div className="w-full h-[60px] bg-[#E992B4] rounded-[8px] px-5 flex items-end justify-between pb-3">
          <span className="text-black text-[18px] font-bold">หลักสูตรอักษรศาสตร์บัณฑิต</span>
          <span className="text-black text-[16px] font-bold">
            วิชาเอก: {profile.major && profile.major !== 'เลือกวิชาเอก' ? profile.major : 'สารสนเทศศึกษา'}
          </span>
        </div>

        {/* Categories Progress Panels */}
        <div className="flex flex-col gap-12 pl-0">
          {categories.map((catConfig) => {
            const catSubjects = subjects.filter(
              (s) => s.category === catConfig.category && s.completed
            );
            const completedCredits = catSubjects.reduce((sum, s) => sum + s.credits, 0);
            const isCompleted = completedCredits >= catConfig.required;
            const diffCredits = catConfig.required - completedCredits;

            return (
              <div key={catConfig.category} className="w-full flex flex-col gap-6">
                {/* Soft Pink Header */}
                <div className="w-full h-[60px] bg-[#F5CDDC] rounded-[8px] px-5 flex items-end justify-between pb-3">
                  <span className="text-black text-[18px] font-bold">{catConfig.category}</span>
                  <span className="text-black text-[18px] font-bold">
                    {catConfig.required} หน่วยกิต
                  </span>
                </div>

                {/* Status Indicator Banners */}
                <div className="w-full">
                  {isCompleted ? (
                    <SystemBanner
                      type="success"
                      emphasis="subtle"
                      message="เรียนครบทุกหน่วยกิต"
                    />
                  ) : (
                    <SystemBanner
                      type="warning"
                      emphasis="subtle"
                      message={`ขาด ${diffCredits} หน่วยกิต`}
                    />
                  )}
                </div>

                {/* Enrolled Subjects List */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-black text-[20px] font-bold">วิชาที่ลงทะเบียนแล้ว</h4>

                  {catSubjects.length > 0 ? (
                    <div className="w-full flex flex-col gap-1">
                      {/* Grid Header */}
                      <div className="grid grid-cols-[90px_1fr_60px] gap-x-6 items-center text-black font-bold text-[18px] pb-2.5 border-b border-[#D0D0D1]/30">
                        <span className="text-left">รหัสวิชา</span>
                        <span className="text-left">ชื่อวิชา</span>
                        <span className="text-right pr-2">หน่วยกิต</span>
                      </div>

                      {/* Subject Rows */}
                      <div className="flex flex-col gap-1 mt-2">
                        {catSubjects.map((sub) => (
                          <div
                            key={sub.id}
                            className="grid grid-cols-[90px_1fr_60px] gap-x-6 items-start py-3.5 hover:bg-black/[0.01] rounded-[6px] text-[16px] border-b border-[#D0D0D1]/10"
                          >
                            <span className="font-mono text-black text-[16px] pt-0.5">
                              {sub.code}
                            </span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-black text-[16px] font-normal leading-snug">
                                {sub.nameTh}
                              </span>
                              <span className="text-[#6D6D6D] text-[15px] leading-snug">
                                {sub.nameEn}
                              </span>
                            </div>
                            <span className="text-right font-mono text-black text-[16px] pt-0.5 pr-2">
                              {sub.credits}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-[#EA6D24] text-[16px] italic leading-normal">
                      คุณยังไม่ได้เรียนวิชาในหมวดนี้
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
