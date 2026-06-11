import type { CategoryProgress } from '../types.js';

interface CreditsSummaryCardProps {
  progressList: CategoryProgress[];
}

export function CreditsSummaryCard({ progressList }: CreditsSummaryCardProps) {
  // Calculate total credits
  const totalCompleted = progressList.reduce((sum, item) => sum + item.completed, 0);
  const totalRequired = progressList.reduce((sum, item) => sum + item.required, 0);
  const totalPercent = Math.min(100, Math.round((totalCompleted / totalRequired) * 100));

  return (
    <div className="w-full bg-white border border-[#D0D0D1]/30 rounded-[16px] p-6 shadow-sm font-[ChulaCharasNew] mb-8 select-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-black text-[22px] font-bold">สรุปผลการสะสมหน่วยกิต</h3>
          <p className="text-[#6D6D6D] text-[16px]">ตรวจสอบความคืบหน้าของหลักสูตรการศึกษา</p>
        </div>
        {/* Total Badge */}
        <div className="flex items-center gap-4 bg-[#FCEFF4] border border-[#DE5D8F]/20 py-2 px-6 rounded-[12px] self-start md:self-auto">
          <span className="text-[#DE5D8F] text-[18px] font-bold">รวมหน่วยกิตทั้งหมด</span>
          <span className="text-black text-[28px] font-bold font-mono">
            {totalCompleted}/{totalRequired}
          </span>
          <span className="text-[#DE5D8F] text-[18px] font-bold">({totalPercent}%)</span>
        </div>
      </div>

      {/* Progress Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {progressList.map((item) => {
          const percent = Math.min(100, Math.round((item.completed / item.required) * 100));
          
          // Color coding for progress bar base on category
          let barColor = 'bg-[#E992B4]'; // Default pink
          if (item.category === 'หมวดวิชาเอก') barColor = 'bg-[#0165F8]'; // Blue for major
          if (item.category === 'หมวดวิชาโท') barColor = 'bg-[#F8C135]'; // Yellow for minor
          if (item.category === 'หมวดวิชาเลือกเสรี') barColor = 'bg-[#64A93C]'; // Green for elective

          return (
            <div
              key={item.category}
              className="bg-[#F7F8F9] border border-[#D0D0D1]/20 rounded-[12px] p-4 flex flex-col justify-between h-[120px] transition-all hover:shadow-sm"
            >
              <div>
                <span className="text-[#6D6D6D] text-[14px] font-bold line-clamp-1">
                  {item.category.replace('หมวด', '')}
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-black text-[24px] font-bold font-mono">{item.completed}</span>
                  <span className="text-[#6D6D6D] text-[16px] font-normal">/ {item.required}</span>
                </div>
              </div>

              {/* Progress bar container */}
              <div className="w-full mt-3">
                <div className="flex justify-between items-center text-[12px] font-bold text-[#6D6D6D] mb-1">
                  <span>ความคืบหน้า</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-[#DFDFE0] h-[8px] rounded-full overflow-hidden">
                  <div
                    className={`${barColor} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
