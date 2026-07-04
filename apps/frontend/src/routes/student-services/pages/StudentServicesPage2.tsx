import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import {
  BookOpen, Users, Bookmark, ListTodo, FileText, Search,
  GraduationCap, Globe, ClipboardList, Umbrella, Heart, Pill,
  Brain, HeartHandshake, Dumbbell, Smile, Bus, Lightbulb,
  X, Compass
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@org/design-system';
import { PATHS } from '../../paths';
import { Footer } from '../../../components/Footer/index.js';

// ── Types ──────────────────────────────────────────────────────────────────────
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: 'general' | 'academic' | 'kos' | 'university';
  tags: string[];
  isExternal?: boolean;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const servicesData: ServiceItem[] = [
  { id: 'articles', title: 'บทความจากชมรมสาราณียกร', description: 'บทความและสาระน่ารู้จากชมรมสาราณียกร คณะอักษรศาสตร์', icon: BookOpen, href: PATHS.ARTICLES, category: 'general', tags: ['general'] },
  { id: 'clubs', title: 'ชมรมคณะอักษร', description: 'ทำความรู้จักและเข้าร่วมชมรมต่างๆ ของคณะอักษรศาสตร์', icon: Users, href: PATHS.CLUBS, category: 'general', tags: ['general'] },
  { id: 'saved', title: 'ที่บันทึกไว้', description: 'บทความและบริการที่คุณบันทึกไว้เพื่ออ่านภายหลัง', icon: Bookmark, href: `${PATHS.ARTICLES}?tab=saved`, category: 'general', tags: ['general'] },
  { id: 'tracking', title: 'Tracking หน่วยกิต', description: 'ตรวจสอบหน่วยกิตสะสมและวางแผนการลงทะเบียนเรียน', icon: ListTodo, href: PATHS.CREDIT_TRACKING, category: 'academic', tags: ['academic', 'learning'] },
  { id: 'yellow-card', title: 'ใบเหลืองใบฟ้าออนไลน์', description: 'ยื่นขอความจำนงจดทะเบียนรายวิชาออนไลน์ (ใบเหลือง/ใบฟ้า)', icon: FileText, href: PATHS.YELLOW_CARD, category: 'academic', tags: ['academic', 'learning'] },
  { id: 'professors', title: 'ค้นหาชื่ออาจารย์', description: 'ค้นหาข้อมูลติดต่อและอาจารย์ประจำภาควิชาต่างๆ', icon: Compass, href: PATHS.PROFESSORS, category: 'academic', tags: ['academic', 'learning'] },
  { id: 'curriculum', title: 'หลักสูตรจากภาคต่าง ๆ', description: 'ข้อมูลหลักสูตรการศึกษาและวิชาโทของแต่ละภาควิชา', icon: GraduationCap, href: PATHS.CURRICULUM, category: 'academic', tags: ['academic', 'learning'] },
  { id: 'scholarships', title: 'ทุนการศึกษา/แลกเปลี่ยน', description: 'ข้อมูลทุนการศึกษาและโครงการนิสิตแลกเปลี่ยนต่างประเทศ', icon: Globe, href: PATHS.INTERNSHIPS, category: 'academic', tags: ['academic'] },
  { id: 'forms', title: 'เอกสารและแบบฟอร์ม', description: 'ดาวน์โหลดเอกสาร คำร้อง และแบบฟอร์มสำคัญต่างๆ ของคณะ', icon: ClipboardList, href: PATHS.FORMS, category: 'academic', tags: ['academic', 'learning'] },
  { id: 'umbrella', title: 'บริการยืมร่ม', description: 'บริการยืมร่มฟรีโดยคณะกรรมการนิสิต (ก.อศ.) เมื่อฝนตก', icon: Umbrella, href: '?service=umbrella', category: 'kos', tags: ['kos'] },
  { id: 'sanitary-pads', title: 'บริการผ้าอนามัยฟรี', description: 'บริการกล่องผ้าอนามัยฉุกเฉินฟรีสำหรับนิสิต บริเวณห้องน้ำคณะ', icon: Heart, href: '?service=sanitary-pads', category: 'kos', tags: ['kos'] },
  { id: 'medicine', title: 'บริการยาสามัญฟรี', description: 'บริการยาสามัญประจำบ้านและเวชภัณฑ์พื้นฐานฟรี ณ ห้อง ก.อศ.', icon: Pill, href: '?service=medicine', category: 'kos', tags: ['kos'] },
  { id: 'mindspace', title: 'MindSpace', description: 'พื้นที่ดูแลใจและบริการให้คำปรึกษาทางจิตวิทยาสำหรับนิสิตจุฬาฯ', icon: Brain, href: 'https://chula.wellness.in.th/', category: 'university', tags: ['university', 'mental'], isExternal: true },
  { id: 'health-center', title: 'ศูนย์บริการสุขภาพ', description: 'ศูนย์บริการสุขภาพแห่งจุฬาฯ ให้การรักษาพยาบาลเบื้องต้นแก่นิสิต', icon: HeartHandshake, href: 'https://www.chula.ac.th/about/student-life/health-services/', category: 'university', tags: ['university', 'mental'], isExternal: true },
  { id: 'sports', title: 'ศูนย์กีฬาแห่งจุฬา', description: 'บริการสนามกีฬา ฟิตเนส และสระว่ายน้ำสำหรับนิสิตและบุคลากร', icon: Dumbbell, href: 'https://www.cusports.chula.ac.th/', category: 'university', tags: ['university'], isExternal: true },
  { id: 'mental-tips', title: 'ตัวช่วยสุขภาพจิตดี', description: 'ช่องทางและแหล่งความรู้ในการดูแลสุขภาพใจของนิสิต', icon: Smile, href: 'https://chula.wellness.in.th/', category: 'university', tags: ['university', 'mental'], isExternal: true },
  { id: 'popbus', title: 'ตาราง CU POP BUS', description: 'เช็คเส้นทางและตารางเวลาเดินรถโดยสารภายในจุฬาลงกรณ์มหาวิทยาลัย', icon: Bus, href: 'https://www.chula.ac.th/about/student-life/cu-pop-bus/', category: 'university', tags: ['university'], isExternal: true },
  { id: 'learning-center', title: 'ศูนย์นวัตกรรมการเรียนรู้', description: 'แหล่งเรียนรู้ออนไลน์และคอร์สเรียนฟรีสำหรับนิสิตจุฬาฯ', icon: Lightbulb, href: 'https://lic.chula.ac.th/', category: 'university', tags: ['university'], isExternal: true },
];

const SIDEBAR_ITEMS = [
  { id: 'all',        label: 'บริการทั้งหมด', tag: 'all' },
  { id: 'general',    label: 'บริการทั่วไป',  tag: 'general' },
  { id: 'academic',   label: 'บริการวิชาการ', tag: 'academic' },
  { id: 'learning',   label: 'วางแผนการเรียน', tag: 'learning' },
  { id: 'kos',        label: 'บริการโดย กอศ.', tag: 'kos' },
  { id: 'mental',     label: 'สุขภาพจิต',      tag: 'mental' },
  { id: 'university', label: 'บริการจากมหาวิทยาลัย', tag: 'university' },
];

// ── Modal content helper ────────────────────────────────────────────────────────
function getModalContent(serviceName: string) {
  switch (serviceName) {
    case 'umbrella':
      return {
        title: 'บริการยืมร่ม ก.อศ.',
        icon: Umbrella,
        content: (
          <div className="space-y-4 text-[#404041] leading-relaxed">
            <p>บริการยืมร่มยามฝนตกสำหรับนิสิตคณะอักษรศาสตร์ เพื่ออำนวยความสะดวกในการเดินทางภายในมหาวิทยาลัย</p>
            <div><strong className="text-[#DE5D8F] block mb-1">📍 สถานที่ติดต่อรับบริการ</strong><p>ห้องคณะกรรมการนิสิต (ก.อศ.) ชั้น M1 อาคารมหาจักรีสิรินธร</p></div>
            <div><strong className="text-[#DE5D8F] block mb-1">⏰ เวลาให้บริการ</strong><p>วันจันทร์ - วันศุกร์ เวลา 09:00 - 17:00 น.</p></div>
            <div><strong className="text-[#DE5D8F] block mb-1">📝 เงื่อนไขการยืม-คืน</strong><ul className="list-disc pl-5 space-y-1"><li>แสดงบัตรนิสิตหรือบัตรประจำตัวประชาชนกับตัวแทน ก.อศ.</li><li>ระยะเวลาการยืมสูงสุด 3 วันทำการ</li><li>กรุณานำร่มมาคืนในสภาพสมบูรณ์และตรงเวลาเพื่อประโยชน์ของผู้อื่น</li></ul></div>
          </div>
        ),
      };
    case 'sanitary-pads':
      return {
        title: 'บริการผ้าอนามัยฉุกเฉินฟรี',
        icon: Heart,
        content: (
          <div className="space-y-4 text-[#404041] leading-relaxed">
            <p>บริการแจกผ้าอนามัยฟรีเพื่อรองรับกรณีฉุกเฉินหรือความจำเป็นเร่งด่วนของนิสิตหญิงในคณะ</p>
            <div><strong className="text-[#DE5D8F] block mb-1">📍 สถานที่ตั้งกล่องผ้าอนามัย</strong><p>กล่องบรรจุผ้าอนามัยฉุกเฉินบริเวณห้องน้ำหญิง ชั้น 1 และชั้น M1 อาคารมหาจักรีสิรินธร และอาคารบรมราชกุมารี</p></div>
            <div><strong className="text-[#DE5D8F] block mb-1">📝 กฎกติกาการใช้งาน</strong><ul className="list-disc pl-5 space-y-1"><li>หยิบใช้บริการได้ฟรี ทันทีที่จำเป็นต้องใช้ฉุกเฉิน</li><li>รณรงค์หยิบแต่พอดีในครั้งนั้นๆ เพื่อเหลือเผื่อแผ่เพื่อนนิสิตท่านอื่นๆ</li><li>นิสิตที่ต้องการสนับสนุน สามารถนำผ้าอนามัยมาร่วมบริจาคสมทบได้ที่ห้อง ก.อศ.</li></ul></div>
          </div>
        ),
      };
    case 'medicine':
      return {
        title: 'บริการยาสามัญและเวชภัณฑ์ปฐมพยาบาล',
        icon: Pill,
        content: (
          <div className="space-y-4 text-[#404041] leading-relaxed">
            <p>บริการยาสามัญประจำบ้านและเวชภัณฑ์เพื่อการดูแลสุขภาพเบื้องต้นอย่างทั่วถึงเมื่อนิสิตมีอาการเจ็บป่วย</p>
            <div><strong className="text-[#DE5D8F] block mb-1">📍 สถานที่ให้บริการ</strong><p>ห้องคณะกรรมการนิสิต (ก.อศ.) ชั้น M1 อาคารมหาจักรีสิรินธร</p></div>
            <div><strong className="text-[#DE5D8F] block mb-1">💊 ตัวอย่างยาสามัญที่มีให้บริการ</strong><p>ยาพาราเซตามอล (ลดไข้/แก้ปวด), ยาแก้แพ้, ยาลดกรดในกระเพาะอาหาร, ยาแก้ท้องเสีย, พลาสเตอร์ยาปิดแผล, น้ำเกลือล้างแผล, ยาล้างตา และอุปกรณ์ปฐมพยาบาลเบื้องต้น</p></div>
            <div><strong className="text-[#DE5D8F] block mb-1">⏰ เวลาเข้าใช้บริการ</strong><p>วันจันทร์ - วันศุกร์ เวลา 09:00 - 17:00 น. (ติดต่อตัวแทน ก.อศ. ที่ประจำห้องอยู่ได้ทันที)</p></div>
          </div>
        ),
      };
    default:
      return null;
  }
}

// ── Bento Card Component ───────────────────────────────────────────────────────
function BentoCard({ service }: { service: ServiceItem }) {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (service.isExternal) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
    } else if (service.href.startsWith('?')) {
      const params = new URLSearchParams(service.href);
      setSearchParams(params);
    } else {
      navigate(service.href);
    }
  };

  // Render specific layout based on service.id
  switch (service.id) {
    case 'clubs': // 2x2
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-pink-50/70 via-purple-50/40 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-pink-100/80 rounded-2xl p-6 flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="p-3 bg-pink-100 text-pink-700 rounded-2xl">
                <Users size={32} />
              </div>
              <span className="bg-pink-100 text-pink-700 text-xs px-2.5 py-1 rounded-full font-bold">
                ชมรมแนะนำ
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-[22px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-[#DE5D8F] transition-colors leading-snug">
                {service.title}
              </h3>
              <p className="text-[13px] text-gray-500 mt-1 font-sans">
                {service.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-white/90 hover:bg-white text-gray-700 border border-pink-100 text-[12px] px-3 py-1.5 rounded-lg shadow-sm transition-colors font-sans">
                🎬 ละครอักษร
              </span>
              <span className="bg-white/90 hover:bg-white text-gray-700 border border-purple-100 text-[12px] px-3 py-1.5 rounded-lg shadow-sm transition-colors font-sans">
                🎵 ดนตรีสากล
              </span>
              <span className="bg-white/90 hover:bg-white text-gray-700 border border-indigo-100 text-[12px] px-3 py-1.5 rounded-lg shadow-sm transition-colors font-sans">
                📖 สารณียกร
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold font-sans">A</div>
                <div className="w-7 h-7 rounded-full bg-purple-300 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold font-sans">B</div>
                <div className="w-7 h-7 rounded-full bg-indigo-300 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold font-sans">C</div>
              </div>
              <span className="text-[12px] text-gray-400 font-medium font-sans">
                +80 คนเข้าร่วมแล้ว
              </span>
            </div>
            <span className="text-[13px] font-bold text-[#DE5D8F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              ดูชมรมทั้งหมด →
            </span>
          </div>
        </div>
      );

    case 'yellow-card': // 2x2
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-yellow-50/70 via-amber-50/40 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-amber-100/80 rounded-2xl p-6 flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl">
                <FileText size={32} />
              </div>
              <span className="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-bold">
                วิชาเรียนออนไลน์
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-[22px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-amber-600 transition-colors leading-snug">
                {service.title}
              </h3>
              <p className="text-[13px] text-gray-500 mt-1 font-sans">
                {service.description}
              </p>
            </div>
            <div className="relative flex flex-col gap-4 mt-5 pl-1.5 font-sans">
              <div className="absolute left-[13px] top-2 bottom-2 w-[2px] bg-amber-200/50 z-0" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-[18px] h-[18px] rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                <div>
                  <p className="text-[12px] font-bold text-gray-700 leading-none">ยื่นคำร้องใบฟ้า</p>
                  <p className="text-[9px] text-gray-400">12 มิ.ย. 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-[18px] h-[18px] rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                <div>
                  <p className="text-[12px] font-bold text-gray-700 leading-none">อาจารย์ประเมินสิทธิ์อนุมัติ</p>
                  <p className="text-[9px] text-gray-400">14 มิ.ย. 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-[18px] h-[18px] rounded-full bg-amber-100 text-amber-700 border border-amber-300 flex items-center justify-center text-[8px] font-bold relative">
                  <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-25" />
                  ●
                </div>
                <div>
                  <p className="text-[12px] font-bold text-amber-700 leading-none">อยู่ระหว่างการประมวลผลฝ่ายทะเบียน</p>
                  <p className="text-[9px] text-amber-500/80">รอดำเนินการ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end border-t border-gray-100 pt-4 mt-4">
            <span className="text-[13px] font-bold text-amber-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              ยื่นคำร้องขอเรียนเพิ่ม →
            </span>
          </div>
        </div>
      );

    case 'health-center': // 2x2
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-blue-50/70 via-cyan-50/40 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-blue-100/80 rounded-2xl p-6 flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                <HeartHandshake size={32} />
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-bold">
                สุขภาพและพยาบาล
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-[22px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-blue-600 transition-colors leading-snug">
                {service.title}
              </h3>
              <p className="text-[13px] text-gray-500 mt-1 font-sans">
                {service.description}
              </p>
            </div>
            <div className="space-y-2 mt-4 text-[13px] font-sans">
              <div className="flex items-center gap-2 text-gray-600">
                <span>🕒</span>
                <span>เปิดจันทร์ - ศุกร์ 08:30 - 15:30 น.</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>📍</span>
                <span>อาคารจามจุรี 9 ชั้น 2</span>
              </div>
              <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 px-3 py-2 rounded-lg mt-3 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="font-bold">สายด่วนฉุกเฉิน: 02-218-0568</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end border-t border-gray-100 pt-4 mt-4">
            <span className="text-[13px] font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              เข้าสู่เว็บไซต์ →
            </span>
          </div>
        </div>
      );

    case 'tracking': // 2x1
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-indigo-50/70 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-indigo-100/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
                <ListTodo size={24} />
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-indigo-600 transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-[12px] text-gray-500 font-sans mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
            <span className="text-[18px] font-bold text-indigo-600 font-sans">
              77%
            </span>
          </div>
          <div className="mt-2">
            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: '77%' }} />
            </div>
            <div className="flex justify-between items-center mt-1 text-[11px] text-gray-400 font-sans">
              <span>เก็บแล้ว 112 หน่วยกิต</span>
              <span>ต้องการ 144 หน่วยกิต</span>
            </div>
          </div>
        </div>
      );

    case 'umbrella': // 2x1
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-rose-50/80 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-rose-100/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-pink-100 text-pink-750 rounded-xl">
                <Umbrella size={24} />
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-pink-600 transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-[12px] text-gray-500 font-sans mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-250/50 text-[11px] font-bold px-2 py-1 rounded-full font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ว่าง 12 คัน</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-sans mt-2">
            <span>ติดต่อรับบริการที่ห้อง ก.อศ. ชั้น M1</span>
            <span className="text-pink-600 font-bold group-hover:translate-x-1 transition-transform">
              ยื่นขอยืมร่มออนไลน์ →
            </span>
          </div>
        </div>
      );

    case 'articles': // 2x1
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-amber-50/70 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-amber-100/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-100 text-amber-750 rounded-xl">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-amber-600 transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-[12px] text-gray-500 font-sans mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
            <span className="text-[11px] text-amber-800 bg-amber-100 font-bold px-2 py-0.5 rounded-md font-sans">
              อัปเดตใหม่
            </span>
          </div>
          <div className="flex items-center justify-between text-[12px] text-gray-650 font-sans bg-amber-50/40 p-2 rounded-lg border border-amber-100/30 mt-2">
            <span className="truncate max-w-[280px]">📚 เปิดโลกวรรณกรรมอักษร: ท่องดินแดนคลาสสิก</span>
            <span className="text-[10px] text-gray-400 shrink-0">อ่านต่อ 3 นาที</span>
          </div>
        </div>
      );

    case 'forms': // 2x1
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-teal-50/70 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-teal-100/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-teal-100 text-teal-700 rounded-xl">
                <ClipboardList size={24} />
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-teal-650 transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-[12px] text-gray-500 font-sans mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-[11px] text-gray-600 font-sans mt-2">
            <div className="flex-1 bg-white border border-teal-100/60 hover:border-teal-300 p-2 rounded-lg flex items-center justify-between transition-colors shadow-sm">
              <span className="truncate text-gray-700">📄 คำร้องทั่วไป.pdf</span>
              <span className="text-teal-650 font-bold">ดาวน์โหลด</span>
            </div>
            <div className="flex-1 bg-white border border-teal-100/60 hover:border-teal-300 p-2 rounded-lg flex items-center justify-between transition-colors shadow-sm">
              <span className="truncate text-gray-700">📄 ขอถอนรายวิชา.pdf</span>
              <span className="text-teal-650 font-bold">ดาวน์โหลด</span>
            </div>
          </div>
        </div>
      );

    case 'mindspace': // 1x2 (vertical)
      return (
        <div
          onClick={handleCardClick}
          className="col-span-1 row-span-2 bg-gradient-to-br from-purple-50/70 via-indigo-50/30 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl">
                <Brain size={24} />
              </div>
              <span className="bg-purple-155/30 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                สุขภาพใจ
              </span>
            </div>
            <div className="mt-4">
              <h4 className="text-[18px] font-bold text-gray-800 font-[ChulaCharasNew] group-hover:text-purple-600 transition-colors leading-tight">
                {service.title}
              </h4>
              <p className="text-[12px] text-gray-500 font-sans mt-1">
                {service.description}
              </p>
            </div>
            <div className="bg-white/80 border border-purple-100/50 rounded-xl p-3 mt-4 text-[12px] text-purple-900 leading-relaxed font-sans shadow-sm">
              <span className="block text-[10px] font-bold text-purple-500 uppercase tracking-wider mb-0.5">
                ข้อคิดวันนี้
              </span>
              เหนื่อยล้าจากการเรียน? ลองพักสายตาและหายใจลึกๆ 5 ครั้ง หรือปรึกษาผู้เชี่ยวชาญฟรี
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 mt-4">
            <span className="text-[12px] font-bold text-purple-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              นัดหมายขอรับคำปรึกษา →
            </span>
          </div>
        </div>
      );

    default: { // 1x1 Standard Cards
      // Get colors based on service.id to make each card feel unique and curated
      const getColorConfig = (id: string) => {
        switch (id) {
          case 'saved':
            return {
              bg: 'bg-gradient-to-br from-orange-50/60 to-white hover:from-orange-100/60 hover:to-white/90 border-orange-100/70',
              iconBg: 'bg-orange-100 text-orange-700',
            };
          case 'professors':
            return {
              bg: 'bg-gradient-to-br from-blue-50/60 to-white hover:from-blue-100/60 hover:to-white/90 border-blue-100/70',
              iconBg: 'bg-blue-100 text-blue-700',
            };
          case 'curriculum':
            return {
              bg: 'bg-gradient-to-br from-violet-50/60 to-white hover:from-violet-100/60 hover:to-white/90 border-violet-100/70',
              iconBg: 'bg-violet-100 text-violet-750',
            };
          case 'scholarships':
            return {
              bg: 'bg-gradient-to-br from-sky-50/60 to-white hover:from-sky-100/60 hover:to-white/90 border-sky-100/70',
              iconBg: 'bg-sky-100 text-sky-700',
            };
          case 'sanitary-pads':
            return {
              bg: 'bg-gradient-to-br from-rose-50/60 to-white hover:from-rose-100/60 hover:to-white/90 border-rose-100/70',
              iconBg: 'bg-rose-100 text-rose-700',
            };
          case 'medicine':
            return {
              bg: 'bg-gradient-to-br from-emerald-50/60 to-white hover:from-emerald-100/60 hover:to-white/90 border-emerald-100/70',
              iconBg: 'bg-emerald-100 text-emerald-700',
            };
          case 'sports':
            return {
              bg: 'bg-gradient-to-br from-slate-50/60 to-white hover:from-slate-100/60 hover:to-white/90 border-slate-100/70',
              iconBg: 'bg-slate-100 text-slate-700',
            };
          case 'mental-tips':
            return {
              bg: 'bg-gradient-to-br from-amber-50/60 to-white hover:from-amber-100/60 hover:to-white/90 border-amber-100/70',
              iconBg: 'bg-amber-100 text-amber-700',
            };
          case 'popbus':
            return {
              bg: 'bg-gradient-to-br from-cyan-50/60 to-white hover:from-cyan-100/60 hover:to-white/90 border-cyan-100/70',
              iconBg: 'bg-cyan-100 text-cyan-700',
            };
          case 'learning-center':
            return {
              bg: 'bg-gradient-to-br from-lime-50/60 to-white hover:from-lime-100/60 hover:to-white/90 border-lime-100/70',
              iconBg: 'bg-lime-100 text-lime-800',
            };
          default:
            return {
              bg: 'bg-gradient-to-br from-gray-50/60 to-white hover:from-gray-100/60 hover:to-white/90 border-gray-200/70',
              iconBg: 'bg-gray-150 text-gray-650',
            };
        }
      };

      const colors = getColorConfig(service.id);
      const Icon = service.icon;

      // Provide custom titles and short subtexts to fit the 1x1 cells perfectly
      const getDisplayInfo = (id: string) => {
        switch (id) {
          case 'saved': return { title: 'ที่บันทึกไว้', desc: 'บทความที่คุณบันทึก' };
          case 'professors': return { title: 'ค้นหาอาจารย์', desc: 'ข้อมูลติดต่ออาจารย์' };
          case 'curriculum': return { title: 'หลักสูตรวิชาโท', desc: 'วิชาเอกและวิชาโท' };
          case 'scholarships': return { title: 'ทุนแลกเปลี่ยน', desc: 'ต่างประเทศ & ทุนในคณะ' };
          case 'sanitary-pads': return { title: 'ผ้าอนามัยฟรี', desc: 'ห้องน้ำในคณะอักษรฯ' };
          case 'medicine': return { title: 'ยาสามัญฟรี', desc: 'เวชภัณฑ์เบื้องต้น ก.อศ.' };
          case 'sports': return { title: 'ศูนย์กีฬาจุฬาฯ', desc: 'สระว่ายน้ำ สนามกีฬา' };
          case 'mental-tips': return { title: 'ตัวช่วยดูแลใจ', desc: 'เคล็ดลับดูแลตัวเอง' };
          case 'popbus': return { title: 'CU POP BUS', desc: 'ตารางรถและเส้นทางวิ่ง' };
          case 'learning-center': return { title: 'Chula Learning', desc: 'คอร์สเรียนออนไลน์ฟรี' };
          default: return { title: service.title, desc: service.description };
        }
      };

      const display = getDisplayInfo(service.id);

      return (
        <div
          onClick={handleCardClick}
          className={`col-span-1 row-span-1 ${colors.bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border rounded-2xl p-4 flex flex-col justify-between cursor-pointer group`}
        >
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-xl ${colors.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              <Icon size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-400 font-sans tracking-wide uppercase">
              บริการ
            </span>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-gray-800 leading-tight font-[ChulaCharasNew] group-hover:text-[#DE5D8F] transition-colors">
              {display.title}
            </h4>
            <p className="text-[11px] text-gray-400 truncate mt-0.5 font-sans">
              {display.desc}
            </p>
          </div>
        </div>
      );
    }
  }
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function StudentServicesPage2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const activeService = searchParams.get('service');

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('service');
    setSearchParams(newParams);
  };

  // Filter right side Bento Grid by search input query
  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  // Filter based on the selected filter topic as well
  const finalBentoServices = filteredServices.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'general') return service.category === 'general';
    return service.tags.includes(selectedFilter);
  });

  const modalData = activeService ? getModalContent(activeService) : null;
  const ModalIcon = modalData?.icon;

  return (
    <div className="w-full bg-[#FFF] flex flex-col min-h-screen relative">
      {/* Main Container: Wrap all content side-by-side */}
      <div className="flex-1 w-full bg-white flex flex-col pt-12 pb-16">
        <div className="max-w-[1282px] w-full mx-auto px-4 lg:px-6 flex-1 flex flex-col">
          {/* Page Title */}
          <SectionHeading title="ค้นหาบริการนิสิต (Bento Grid)" description="เมนูลัดสำหรับเข้าถึงระบบต่างๆ ของคณะอักษรศาสตร์ ครบครันในที่เดียว" />

          {/* Search bar */}
          <div className="mt-8 pb-8 w-full">
            <div className="relative max-w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#DE5D8F] pointer-events-none" />
              <input
                type="text"
                placeholder="ค้นหาบริการนิสิต..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-full border border-[#8B8B8C] bg-white text-[16px] font-[ChulaCharasNew] text-[#DE5D8F] placeholder:text-[#DE5D8F] focus:outline-none focus:ring-2 focus:ring-[#DE5D8F]/30 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8C] hover:text-[#DE5D8F] cursor-pointer transition-colors">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Side-by-Side Content Layout */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10 flex-1">
            {/* Desktop Left Menu: Category Links (Clean simple text-link list, wider and larger) */}
            <nav className="hidden lg:block w-[320px] shrink-0">
              <div className="sticky top-28 flex flex-col gap-4 select-none">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = selectedFilter === item.tag;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedFilter(item.tag);
                      }}
                      className={`text-left text-[19px] font-bold font-[ChulaCharasNew] transition-all duration-200 cursor-pointer w-full py-2 bg-transparent focus:outline-none border-none ${
                        isActive 
                          ? 'text-[#DE5D8F]' 
                          : 'text-gray-500 hover:text-[#DE5D8F]/80'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Right Area: Bento Grid */}
            <div className="flex-1 min-w-0">
              {/* Mobile text-link navigation */}
              <div className="w-full lg:hidden overflow-x-auto flex gap-6 pb-4 scrollbar-none snap-x mb-6">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = selectedFilter === item.tag;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFilter(item.tag)}
                      className={`py-2 text-[16px] font-bold transition-all whitespace-nowrap snap-center cursor-pointer font-[ChulaCharasNew] border-none bg-transparent focus:outline-none ${
                        isActive 
                          ? 'text-[#DE5D8F]' 
                          : 'text-gray-500 hover:text-[#DE5D8F]/80'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Bento Grid */}
              <div className="w-full">
                {finalBentoServices.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 grid-flow-row-dense auto-rows-[160px] w-full">
                    {finalBentoServices.map((service) => (
                      <BentoCard key={service.id} service={service} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <Search size={48} className="text-gray-300 mb-4" />
                    <p className="text-gray-500 text-[16px] font-[ChulaCharasNew]">
                      ไม่พบผลลัพธ์ที่ตรงกับคำค้นหาของคุณ
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-4 px-4 py-2 text-[14px] font-bold text-[#DE5D8F] border border-[#DE5D8F] rounded-lg hover:bg-[#DE5D8F]/10 transition-colors font-[ChulaCharasNew] cursor-pointer"
                    >
                      ล้างคำค้นหา
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <div className="relative z-30">
        <Footer />
      </div>

      {/* Modal for services */}
      {activeService && modalData && (
        <div
          className="fixed inset-0 bg-[#000]/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl border border-[#D0D0D1] shadow-2xl max-w-lg w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#F5CDDC] px-6 py-4 flex items-center justify-between border-b border-[#D0D0D1]">
              <h3 className="text-[20px] font-bold text-[#404041] font-[ChulaCharasNew] flex items-center gap-3">
                {ModalIcon && <ModalIcon className="text-[#DE5D8F] shrink-0" size={24} />}
                {modalData.title}
              </h3>
              <button onClick={closeModal} className="text-[#404041] hover:text-[#DE5D8F] transition-colors p-1.5 rounded-full hover:bg-white/50 cursor-pointer">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">{modalData.content}</div>
            <div className="px-6 pb-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-[#E992B4] hover:bg-[#DE5D8F] text-white rounded-lg font-[ChulaCharasNew] text-[14px] font-bold transition-all duration-200 active:scale-95 cursor-pointer"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
