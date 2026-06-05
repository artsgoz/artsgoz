import { AgendaEvent } from '../types.js';

interface CalendarCardProps {
  daysOfWeek: string[];
  calendarDays: (number | null)[];
  eventsByDate: Record<number, AgendaEvent[]>;
  selectedDate: number;
  onSelectDate: (day: number) => void;
  getDayLabel: (day: number) => string;
  monthLabel?: string;
}

export function CalendarCard({
  daysOfWeek,
  calendarDays,
  eventsByDate,
  selectedDate,
  onSelectDate,
  getDayLabel,
  monthLabel = 'ส.ค. 2026',
}: CalendarCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Card Header — blocky, matches UpcomingEventsCard */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-[var(--color-background-subtler,#F7F8F9)]">
        <span className="font-serif text-[18px] font-bold text-gray-800">
          {`${getDayLabel(selectedDate)} ${selectedDate} ส.ค.`}
        </span>
        <span className="font-serif text-[13px] font-bold text-gray-400 tracking-wide">{monthLabel}</span>
      </div>

      {/* Calendar Grid */}
      <div className="px-5 pt-4 pb-5">
        {/* Days of Week */}
        <div className="grid grid-cols-7 text-center gap-y-2 mb-3">
          {daysOfWeek.map((day, idx) => (
            <span
              key={idx}
              className={`font-serif text-[13px] font-bold ${
                idx === 0 ? 'text-red-400' : idx === 6 ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              {day}
            </span>
          ))}
        </div>

        {/* Month Days */}
        <div className="grid grid-cols-7 text-center gap-1">
          {calendarDays.map((day, idx) => {
            if (day === null) {
              return <span key={idx} className="h-12 w-12" />;
            }

            const hasEvents = eventsByDate[day] && eventsByDate[day].length > 0;
            const isSelected = selectedDate === day;

            return (
              <div
                key={idx}
                onClick={() => onSelectDate(day)}
                className="flex flex-col items-center justify-center h-12 w-12 mx-auto cursor-pointer relative"
              >
                <span
                  className={`font-serif flex items-center justify-center rounded-full transition-colors h-12 w-12 text-[15px] font-semibold ${
                    isSelected
                      ? 'bg-[#E992B4] text-white font-bold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {day}
                </span>
                {hasEvents && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white is-selected:bg-white absolute bottom-1.5 z-20" style={{ backgroundColor: isSelected ? '#FFFFFF' : '#E992B4' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
