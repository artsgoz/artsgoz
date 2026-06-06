import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MAJOR_OPTIONS, MINOR_OPTIONS, CURRICULUM_OPTIONS } from '../constants.js';
import type { AcademicProfile } from '../types.js';

interface ProfileSetupFormProps {
  onSetupComplete: (profile: AcademicProfile) => void;
}

export function ProfileSetupForm({ onSetupComplete }: ProfileSetupFormProps) {
  const [major, setMajor] = useState('');
  const [minor, setMinor] = useState('');
  const [curriculum, setCurriculum] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!major || major === 'เลือกวิชาเอก') {
      setError('กรุณาเลือกวิชาเอก');
      return;
    }
    if (!minor || minor === 'เลือกวิชาโท') {
      setError('กรุณาเลือกวิชาโท');
      return;
    }
    if (!curriculum || curriculum === 'เลือกหลักสูตร') {
      setError('กรุณาเลือกหลักสูตร');
      return;
    }

    setError('');
    onSetupComplete({ major, minor, curriculum });
  };

  return (
    <div className="w-full max-w-[580px] mx-auto bg-white border border-[#D0D0D1]/30 rounded-[16px] shadow-lg p-6 md:p-8 font-[ChulaCharasNew] my-8 select-none">
      <div className="text-center mb-8">
        <h2 className="text-black text-[28px] font-bold mb-1">Academic Tracker</h2>
        <p className="text-[#6D6D6D] text-[18px]">ตารางรวมหน่วยกิต</p>
      </div>

      <div className="bg-[#FCEFF4] text-[#DE5D8F] text-[18px] font-bold py-2 px-4 rounded-[8px] text-center mb-6">
        กรุณากรอกข้อมูล
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Major Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-[18px] font-bold">เอก</label>
          <div className="relative">
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full h-[40px] pl-4 pr-10 bg-white border border-[#D0D0D1] rounded-[8px] text-[18px] font-normal text-black outline-none appearance-none focus:border-[#DE5D8F] transition-colors cursor-pointer"
            >
              {MAJOR_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99999A] w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Minor Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-[18px] font-bold">โท</label>
          <div className="relative">
            <select
              value={minor}
              onChange={(e) => setMinor(e.target.value)}
              className="w-full h-[40px] pl-4 pr-10 bg-white border border-[#D0D0D1] rounded-[8px] text-[18px] font-normal text-black outline-none appearance-none focus:border-[#DE5D8F] transition-colors cursor-pointer"
            >
              {MINOR_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99999A] w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Curriculum Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-[18px] font-bold">หลักสูตร</label>
          <div className="relative">
            <select
              value={curriculum}
              onChange={(e) => setCurriculum(e.target.value)}
              className="w-full h-[40px] pl-4 pr-10 bg-white border border-[#D0D0D1] rounded-[8px] text-[18px] font-normal text-black outline-none appearance-none focus:border-[#DE5D8F] transition-colors cursor-pointer"
            >
              {CURRICULUM_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99999A] w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {error && (
          <div className="text-[#81132B] text-[16px] font-bold text-center mt-2">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full h-[48px] bg-[#E992B4] hover:bg-[#DE5D8F] text-white rounded-[8px] font-bold text-[18px] transition-all shadow-md cursor-pointer flex items-center justify-center mt-4"
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
