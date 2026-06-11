import { useState } from 'react';

interface PDPAFormProps {
  onConfirm: () => void;
}

export function PDPAForm({ onConfirm }: PDPAFormProps) {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (acknowledged) {
      onConfirm();
    }
  };

  return (
    <div className="w-full max-w-[680px] mx-auto bg-white border border-[#D0D0D1]/30 rounded-[16px] shadow-lg p-6 md:p-10 font-[ChulaCharasNew] my-8 select-none">
      <h2 className="text-[#DE5D8F] text-[24px] md:text-[32px] font-bold text-center mb-6 leading-tight">
        การขอเก็บข้อมูลส่วนบุคคลตาม PDPA
      </h2>

      <div className="text-[#404041] text-[16px] md:text-[18px] font-normal leading-relaxed space-y-4 mb-8">
        <p className="indent-8 text-justify">
          นโยบายการคุ้มครองข้อมูลส่วนบุคคลตาม PDPA เป็นกฎหมายที่มอบสิทธิ์ให้กับเจ้าของข้อมูลส่วนบุคคลในการสร้างมาตรฐานการรักษาความปลอดภัยของข้อมูลส่วนบุคคลและกำหนดให้ต้องได้รับความยินยอมในการใช้ข้อมูลตามวัตถุประสงค์ที่เจ้าของข้อมูลอนุญาต
        </p>
        <p className="indent-8 text-justify">
          ทางเว็บไซต์จะมีการเก็บข้อมูลส่วนบุคคลของท่าน ได้แก่ ชื่อ รหัสนิสิต อีเมล ข้อมูลวิชาเอก วิชาโท และวิชาที่ท่านเลือกเรียน ดังนั้นจึงจำเป็นต้องขอความยินยอมจากผู้กรอกข้อมูลทุกท่าน
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
        {/* Checkbox Group */}
        <label className="flex items-center gap-3 cursor-pointer group text-[18px] font-bold text-[#404041]">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            className="w-5 h-5 rounded border border-[#D0D0D1] text-[#DE5D8F] focus:ring-[#DE5D8F] transition-all cursor-pointer group-hover:border-[#DE5D8F]"
          />
          <span>รับทราบ</span>
        </label>

        {/* Action Button */}
        <button
          type="submit"
          disabled={!acknowledged}
          className={`w-full max-w-[200px] h-[48px] rounded-[8px] font-bold text-[18px] transition-all shadow-md cursor-pointer flex items-center justify-center
            ${
              acknowledged
                ? 'bg-[#E992B4] hover:bg-[#DE5D8F] text-white'
                : 'bg-[#DFDFE0] text-[#8B8B8C] cursor-not-allowed shadow-none'
            }`}
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
