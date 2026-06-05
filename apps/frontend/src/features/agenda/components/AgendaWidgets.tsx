import { useState } from 'react';
import { useAgenda } from '../hooks/useAgenda.js';
import { UpcomingEventsCard } from './UpcomingEventsCard.js';
import { CalendarCard } from './CalendarCard.js';

/**
 * AgendaWidgets — composes UpcomingEventsCard + CalendarCard.
 * Owns the selectedDate state and supplies data from useAgenda.
 * To connect with Google Calendar: update useAgenda to fetch real data.
 */
export function AgendaWidgets() {
  const { daysOfWeek, calendarDays, eventsByDate, upcomingEvents, getDayLabel } = useAgenda();
  const [selectedDate, setSelectedDate] = useState<number>(17);

  return (
    <div className="flex flex-col gap-6 w-full shrink-0">
      <UpcomingEventsCard events={upcomingEvents} />
      <CalendarCard
        daysOfWeek={daysOfWeek}
        calendarDays={calendarDays}
        eventsByDate={eventsByDate}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        getDayLabel={getDayLabel}
        monthLabel="ส.ค. 2026"
      />
    </div>
  );
}
