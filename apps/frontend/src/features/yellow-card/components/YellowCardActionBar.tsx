import { Sparkles } from 'lucide-react';

interface YellowCardActionBarProps {
  onImport: () => void;
  onProcess: () => void;
}

export function YellowCardActionBar({ onImport, onProcess }: YellowCardActionBarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      {/* Import Button */}
      <button
        type="button"
        onClick={onImport}
        className="flex items-center gap-2 bg-[#F5BC9A] hover:bg-[#f3a87f] text-black font-bold text-[16px] px-5 py-3 rounded-[8px] cursor-pointer transition-colors"
      >
        <Sparkles size={18} />
        <span>ดึงข้อมูลจากการทดลองจัดตารางเรียน</span>
      </button>

      {/* Process Button */}
      <button
        type="button"
        onClick={onProcess}
        className="bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold text-[17px] px-8 h-[48px] rounded-[8px] cursor-pointer transition-colors"
      >
        <span>ประมวลผลข้อมูล</span>
      </button>
    </div>
  );
}
