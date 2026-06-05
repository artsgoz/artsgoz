import { UpcomingEvent } from '../types.js';

interface UpcomingEventsCardProps {
  events: UpcomingEvent[];
}

export function UpcomingEventsCard({ events }: UpcomingEventsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-[var(--color-background-subtler,#F7F8F9)]">
        <span className="font-serif text-[18px] font-bold text-gray-800">กิจกรรมใกล้มาถึง</span>
        <span className="font-serif text-[13px] font-bold text-[var(--Color-Pink-500,#DE5D8F)]">ดูทั้งหมด</span>
      </div>

      {/* Event Rows */}
      {events.map((event, idx) => {
        const isLast = idx === events.length - 1;
        return (
          <div
            key={`${event.month}-${event.day}`}
            className={`flex items-stretch ${!isLast ? 'border-b border-gray-100' : ''} ${
              event.isToday ? 'hover:bg-pink-50/40' : 'hover:bg-gray-50/60'
            } transition-colors`}
          >
            {/* Left accent bar */}
            <div className={`w-1 shrink-0 ${event.isToday ? 'bg-[#E992B4]' : 'bg-gray-200'}`} />

            {/* Date chip */}
            <div className="flex flex-col items-center justify-center w-[58px] shrink-0 px-2 py-4 border-r border-gray-100">
              <span className={`font-serif text-[10px] font-bold uppercase leading-none ${event.isToday ? 'text-[#DE5D8F]' : 'text-gray-400'}`}>
                {event.month}
              </span>
              <span className="font-serif text-[26px] font-bold text-gray-900 leading-tight">{event.day}</span>
              <span className="font-serif text-[9px] text-gray-400 leading-none">{event.dayLabel}</span>
            </div>

            {/* Event info */}
            <div className="flex flex-col justify-center px-4 py-3 flex-1 min-w-0">
              <h4 className="font-serif text-[14px] font-bold text-gray-900 leading-snug line-clamp-1">
                {event.title}
              </h4>
              <span className="text-[12px] text-gray-400 mt-0.5">{event.time}</span>
            </div>

            {/* Badge */}
            <div className="flex items-center pr-4">
              {event.isToday ? (
                <span className="font-serif text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-[#DE5D8F]">
                  {event.dayLabel}
                </span>
              ) : event.dayLabel === 'พรุ่งนี้' ? (
                <span className="font-serif text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                  {event.dayLabel}
                </span>
              ) : (
                <span className="font-serif text-[10px] font-semibold text-gray-400">{event.dayLabel}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
