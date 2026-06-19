import { useState } from 'react';
import { MAJOR_OPTIONS, MINOR_OPTIONS, CURRICULUM_OPTIONS } from '../constants.js';
import type { AcademicProfile } from '../types.js';
import { DropdownMenuContainer } from './DropdownMenuContainer.js';

interface ProfileSetupFormProps {
  onSetupComplete: (profile: AcademicProfile) => void;
}

export function ProfileSetupForm({ onSetupComplete }: ProfileSetupFormProps) {
  const [major, setMajor] = useState('เลือกวิชาเอก');
  const [minor, setMinor] = useState('เลือกวิชาโท');
  const [curriculum, setCurriculum] = useState('เลือกหลักสูตร');
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
    <div className="w-full max-w-[620px] mx-auto bg-white border border-[#D0D0D1]/30 rounded-[16px] shadow-lg p-6 md:p-8 font-[ChulaCharasNew] my-8 select-none">
      <div className="text-center mb-8">
        <h2 className="text-black text-[28px] font-bold mb-1">Academic Tracker</h2>
        <p className="text-[#6D6D6D] text-[18px]">ตารางรวมหน่วยกิต</p>
      </div>

      <div className="bg-[#FCEFF4] text-[#DE5D8F] text-[18px] font-bold py-2 px-4 rounded-[8px] text-center mb-6">
        กรุณากรอกข้อมูล
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dropdown row — matches Figma node 4634-9178 */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8">
          <DropdownMenuContainer
            id="select-major"
            label="เอก"
            value={major}
            options={MAJOR_OPTIONS}
            placeholder="เลือกวิชาเอก"
            onChange={setMajor}
          />
          <DropdownMenuContainer
            id="select-minor"
            label="โท"
            value={minor}
            options={MINOR_OPTIONS}
            placeholder="เลือกวิชาโท"
            onChange={setMinor}
          />
          <DropdownMenuContainer
            id="select-curriculum"
            label="หลักสูตร"
            value={curriculum}
            options={CURRICULUM_OPTIONS}
            placeholder="เลือกหลักสูตร"
            onChange={setCurriculum}
          />
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
