import { useState } from 'react';
import type { StudentProfile } from '../types.js';

interface StudentProfileFormProps {
  profile: StudentProfile;
  onChange: (updatedProfile: StudentProfile) => void;
}

export function StudentProfileForm({ profile, onChange }: StudentProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<StudentProfile>(profile);

  const handleSave = () => {
    onChange(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-white border border-[#D0D0D1]/30 rounded-[16px] p-6 shadow-sm font-[ChulaCharasNew] mb-8 select-none">
      <div className="flex items-center justify-between border-b border-[#D0D0D1]/20 pb-4 mb-6">
        <h3 className="text-black text-[22px] font-bold">ข้อมูลนิสิต</h3>
        {!isEditing ? (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="text-[16px] font-bold text-[#DE5D8F] hover:text-[#ca5582] transition-colors cursor-pointer border border-[#DE5D8F]/20 hover:border-[#DE5D8F] rounded-[8px] py-1.5 px-4 bg-white"
          >
            แก้ไข
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="text-[16px] font-bold text-[#6D6D6D] hover:text-[#545455] transition-colors cursor-pointer border border-[#D0D0D1] rounded-[8px] py-1.5 px-4 bg-white"
            >
              ยกเลิก
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="text-[16px] font-bold text-white bg-[#E992B4] hover:bg-[#DE5D8F] transition-colors cursor-pointer rounded-[8px] py-1.5 px-4 shadow-sm"
            >
              บันทึก
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">ชื่อ-นามสกุล</label>
            <input
              type="text"
              value={editedProfile.name}
              onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">เลขประจำตัวนิสิต</label>
            <input
              type="text"
              value={editedProfile.studentId}
              onChange={(e) => setEditedProfile({ ...editedProfile, studentId: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">วิชาเอก (เอก)</label>
            <input
              type="text"
              value={editedProfile.major}
              onChange={(e) => setEditedProfile({ ...editedProfile, major: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">วิชาโท (โท)</label>
            <input
              type="text"
              value={editedProfile.minor}
              onChange={(e) => setEditedProfile({ ...editedProfile, minor: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">หลักสูตรการศึกษา</label>
            <input
              type="text"
              value={editedProfile.curriculum}
              onChange={(e) => setEditedProfile({ ...editedProfile, curriculum: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">อาจารย์ที่ปรึกษา</label>
            <input
              type="text"
              value={editedProfile.advisor}
              onChange={(e) => setEditedProfile({ ...editedProfile, advisor: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-[14px] font-bold text-[#6D6D6D]">สถานที่ติดต่อ</label>
            <textarea
              value={editedProfile.address}
              onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
              rows={2}
              className="w-full p-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F] resize-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-bold text-[#6D6D6D]">หมายเลขโทรศัพท์</label>
            <input
              type="text"
              value={editedProfile.phone}
              onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
              className="w-full h-[40px] px-3 border border-[#D0D0D1] rounded-[8px] text-black text-[16px] focus:outline-none focus:border-[#DE5D8F]"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Top Profile Summary Grid (Figma exact representation) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 bg-[#F7F8F9] p-5 rounded-[12px] border border-[#D0D0D1]/20">
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#6D6D6D]">ชื่อ-นามสกุล</span>
              <span className="text-black text-[16px] font-bold mt-1 break-words">{profile.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#6D6D6D]">เลขประจำตัว</span>
              <span className="text-black text-[16px] font-bold mt-1">{profile.studentId}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#6D6D6D]">เอก</span>
              <span className="text-black text-[16px] font-bold mt-1">{profile.major}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#6D6D6D]">โท</span>
              <span className="text-black text-[16px] font-bold mt-1">{profile.minor || 'ไม่มี'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#6D6D6D]">หลักสูตร</span>
              <span className="text-black text-[16px] font-bold mt-1">{profile.curriculum}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#6D6D6D]">อาจารย์ที่ปรึกษา</span>
              <span className="text-black text-[16px] font-bold mt-1 break-words">{profile.advisor}</span>
            </div>
          </div>

          {/* Contact & Phone details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 flex flex-col gap-1">
              <span className="text-[14px] font-bold text-[#6D6D6D]">สถานที่ติดต่อ</span>
              <p className="text-black text-[16px] leading-relaxed mt-1">
                {profile.address || <span className="text-gray-400 italic">ไม่ได้ระบุ</span>}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-[#6D6D6D]">หมายเลขโทรศัพท์</span>
              <p className="text-black text-[16px] mt-1 font-mono">
                {profile.phone || <span className="text-gray-400 italic">ไม่ได้ระบุ</span>}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
