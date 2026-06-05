import { 
  ListTodo, 
  BookUser, 
  GraduationCap, 
  ClipboardPen, 
  BookOpen, 
  Briefcase 
} from 'lucide-react';
import { FeatureMenu } from './types.js';
import { PATHS } from '../../routes/paths.js';

export const QUICK_ACCESS_MENUS: FeatureMenu[] = [
  {
    title: 'ติดตามหน่วยกิต',
    description: 'ตรวจสอบหน่วยกิตสะสมและวางแผนการลงทะเบียนเรียน',
    icon: ListTodo,
    href: PATHS.CREDIT_TRACKING,
  },
  {
    title: 'ค้นหาอาจารย์',
    description: 'ค้นหาข้อมูลอาจารย์ประจำคณะอักษรศาสตร์',
    icon: BookUser,
    href: PATHS.PROFESSORS,
  },
  {
    title: 'บริการนิสิต',
    description: 'บริการต่างๆ สำหรับนิสิตคณะอักษรศาสตร์',
    icon: GraduationCap,
    href: PATHS.STUDENT_SERVICES,
  },
  {
    title: 'เอกสาร & ฟอร์ม',
    description: 'ดาวน์โหลดแบบฟอร์มและเอกสารสำคัญสำหรับนิสิต',
    icon: ClipboardPen,
    href: PATHS.FORMS,
  },
  {
    title: 'หลักสูตร',
    description: 'ข้อมูลหลักสูตรและแผนการเรียนของคณะอักษรศาสตร์',
    icon: BookOpen,
    href: PATHS.CURRICULUM,
  },
  {
    title: 'รีวิวฝึกงาน',
    description: 'อ่านรีวิวประสบการณ์ฝึกงานจากรุ่นพี่คณะอักษรศาสตร์',
    icon: Briefcase,
    href: PATHS.INTERNSHIPS,
  },
];
