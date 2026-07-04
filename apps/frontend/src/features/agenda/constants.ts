import { AgendaEvent, UpcomingEvent } from './types.js';

/**
 * Mock upcoming events for the UpcomingEventsCard.
 * TODO: Replace with live data from Google Calendar API (GET /calendars/{calendarId}/events).
 */
export const MOCK_UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    month: 'มี.ค.',
    day: 31,
    dayLabels: ['วันนี้', 'สำคัญ'],
    title: 'ส่งแบบเสนอหัวข้อโครงงาน',
    time: '13:00 – 15:00 น.',
    isToday: true,
  },
  {
    month: 'เม.ย.',
    day: 1,
    dayLabels: ['พรุ่งนี้', 'ห้ามลืม'],
    title: 'สัมมนาวิชาการระดับชาติ',
    time: '09:00 – 12:00 น.',
    isToday: false,
  },
  {
    month: 'เม.ย.',
    day: 2,
    dayLabel: 'สำคัญ',
    title: 'ปฐมนิเทศฝึกงานภาคฤดูร้อน',
    time: '10:00 – 12:00 น.',
    isToday: false,
  },
  {
    month: 'เม.ย.',
    day: 3,
    dayLabel: 'ห้ามลืม',
    title: 'ประชุมคณะกรรมการนิสิตประจำภาควิชา',
    time: '16:30 – 18:30 น.',
    isToday: false,
  },
];

/**
 * Mock calendar days for August 2025 (August 1st = Friday).
 * TODO: Derive dynamically from Google Calendar API response month/year.
 */
export const MOCK_CALENDAR_DAYS: (number | null)[] = [
  null, null, null, null, null, 1, 2,
  3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30,
  31, null, null, null, null, null, null,
];

/**
 * Mock events keyed by calendar day number.
 * TODO: Replace with Google Calendar API events mapped to their date.
 */
export const MOCK_EVENTS_BY_DATE: Record<number, AgendaEvent[]> = {
  5: [
    { id: 'ev-1', title: 'ส่งแบบเสนอหัวข้อโครงงาน', time: '13:00 - 15:00 น.', colorClass: 'bg-blue-500' },
  ],
  17: [
    { id: 'ev-2', title: 'สัมมนาวิชาการระดับชาติ คณะอักษรศาสตร์', time: '09:00 - 12:00 น.', colorClass: 'bg-[#E992B4]' },
    { id: 'ev-3', title: 'ปฐมนิเทศฝึกงานภาคฤดูร้อน', time: '13:00 - 15:00 น.', colorClass: 'bg-yellow-500' },
  ],
  22: [
    { id: 'ev-4', title: 'ประชุมคณะกรรมการนิสิตประจำคณะ', time: '16:30 - 18:30 น.', colorClass: 'bg-green-500' },
  ],
};

export const DAYS_OF_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
