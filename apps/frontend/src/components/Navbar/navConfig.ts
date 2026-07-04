import { PATHS } from '../../routes/paths.js';

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

export interface DropdownItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'หน้าหลัก', path: PATHS.ROOT },
  { label: 'เกี่ยวกับ ก.อศ.', path: PATHS.ABOUT },
  { label: 'บริการนิสิต', path: PATHS.STUDENT_SERVICES },
  { label: 'หลักสูตร', path: PATHS.CURRICULUM },
  { label: 'ช่วยเหลือ', path: PATHS.HELP },
  { label: 'ฝึกงาน', path: PATHS.INTERNSHIPS, hasDropdown: true },
];

export const DROPDOWN_ITEMS: DropdownItem[] = [
  { label: 'รีวิวฝึกงาน', path: PATHS.INTERNSHIPS },
  { label: 'เปิดรับอยู่', path: '#' },
];
