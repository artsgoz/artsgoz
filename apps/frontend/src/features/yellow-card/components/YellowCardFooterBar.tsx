import { Info } from 'lucide-react';

interface YellowCardFooterBarProps {
  onCancel: () => void;
  onSave: () => void;
}

export function YellowCardFooterBar({ onCancel, onSave }: YellowCardFooterBarProps) {
  return (
    <div className="mt-10 flex items-center justify-between bg-[#F7F8F9] p-5 rounded-[16px] border border-[#D0D0D1]/30 shadow-sm">
      <div className="flex items-center gap-2 text-[#6D6D6D] text-[15px]">
        <Info size={16} />
        <span>ใบเหลืองนี้ไม่ใช่ระบบลงทะเบียนเรียนหลักของมหาวิทยาลัย</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="text-[16px] font-bold text-[#6D6D6D] hover:text-black px-4 py-2 cursor-pointer transition-colors"
        >
          ยกเลิก
        </button>
        <button
          type="button"
          onClick={onSave}
          className="bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold text-[17px] px-8 h-[48px] rounded-[8px] cursor-pointer transition-colors"
        >
          ยืนยันและบันทึก
        </button>
      </div>
    </div>
  );
}
