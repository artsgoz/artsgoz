import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router';
import {
  BookOpen, Users, Bookmark, ListTodo, FileText, Search,
  GraduationCap, Globe, ClipboardList, Umbrella, Heart, Pill,
  Brain, HeartHandshake, Dumbbell, Smile, Bus, Lightbulb,
  X, Compass, ChevronDown, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router';
import { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@org/design-system';
import { PATHS } from '../../paths';
import { Footer } from '../../../components/Footer/index.js';

// ── Types ──────────────────────────────────────────────────────────────────────
interface ServiceItem {
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
  { title: 'บทความจากชมรมสาราณียกร', description: 'บทความและสาระน่ารู้จากชมรมสาราณียกร คณะอักษรศาสตร์', icon: BookOpen, href: PATHS.ARTICLES, category: 'general', tags: ['general'] },
  { title: 'ชมรมคณะอักษร', description: 'ทำความรู้จักและเข้าร่วมชมรมต่างๆ ของคณะอักษรศาสตร์', icon: Users, href: PATHS.CLUBS, category: 'general', tags: ['general'] },
  { title: 'ที่บันทึกไว้', description: 'บทความและบริการที่คุณบันทึกไว้เพื่ออ่านภายหลัง', icon: Bookmark, href: `${PATHS.ARTICLES}?tab=saved`, category: 'general', tags: ['general'] },
  { title: 'Tracking หน่วยกิต', description: 'ตรวจสอบหน่วยกิตสะสมและวางแผนการลงทะเบียนเรียน', icon: ListTodo, href: PATHS.CREDIT_TRACKING, category: 'academic', tags: ['academic', 'learning'] },
  { title: 'ใบเหลืองใบฟ้าออนไลน์', description: 'ยื่นขอความจำนงจดทะเบียนรายวิชาออนไลน์ (ใบเหลือง/ใบฟ้า)', icon: FileText, href: PATHS.YELLOW_CARD, category: 'academic', tags: ['academic', 'learning'] },
  { title: 'ค้นหาชื่ออาจารย์', description: 'ค้นหาข้อมูลติดต่อและอาจารย์ประจำภาควิชาต่างๆ', icon: Compass, href: PATHS.PROFESSORS, category: 'academic', tags: ['academic', 'learning'] },
  { title: 'หลักสูตรจากภาคต่าง ๆ', description: 'ข้อมูลหลักสูตรการศึกษาและวิชาโทของแต่ละภาควิชา', icon: GraduationCap, href: PATHS.CURRICULUM, category: 'academic', tags: ['academic', 'learning'] },
  { title: 'ทุนการศึกษา/แลกเปลี่ยน', description: 'ข้อมูลทุนการศึกษาและโครงการนิสิตแลกเปลี่ยนต่างประเทศ', icon: Globe, href: PATHS.INTERNSHIPS, category: 'academic', tags: ['academic'] },
  { title: 'เอกสารและแบบฟอร์ม', description: 'ดาวน์โหลดเอกสาร คำร้อง และแบบฟอร์มสำคัญต่างๆ ของคณะ', icon: ClipboardList, href: PATHS.FORMS, category: 'academic', tags: ['academic', 'learning'] },
  { title: 'บริการยืมร่ม', description: 'บริการยืมร่มฟรีโดยคณะกรรมการนิสิต (ก.อศ.) เมื่อฝนตก', icon: Umbrella, href: '?service=umbrella', category: 'kos', tags: ['kos'] },
  { title: 'บริการผ้าอนามัยฟรี', description: 'บริการกล่องผ้าอนามัยฉุกเฉินฟรีสำหรับนิสิต บริเวณห้องน้ำคณะ', icon: Heart, href: '?service=sanitary-pads', category: 'kos', tags: ['kos'] },
  { title: 'บริการยาสามัญฟรี', description: 'บริการยาสามัญประจำบ้านและเวชภัณฑ์พื้นฐานฟรี ณ ห้อง ก.อศ.', icon: Pill, href: '?service=medicine', category: 'kos', tags: ['kos'] },
  { title: 'MindSpace', description: 'พื้นที่ดูแลใจและบริการให้คำปรึกษาทางจิตวิทยาสำหรับนิสิตจุฬาฯ', icon: Brain, href: 'https://chula.wellness.in.th/', category: 'university', tags: ['university', 'mental'], isExternal: true },
  { title: 'ศูนย์บริการสุขภาพ', description: 'ศูนย์บริการสุขภาพแห่งจุฬาฯ ให้การรักษาพยาบาลเบื้องต้นแก่นิสิต', icon: HeartHandshake, href: 'https://www.chula.ac.th/about/student-life/health-services/', category: 'university', tags: ['university', 'mental'], isExternal: true },
  { title: 'ศูนย์กีฬาแห่งจุฬา', description: 'บริการสนามกีฬา ฟิตเนส และสระว่ายน้ำสำหรับนิสิตและบุคลากร', icon: Dumbbell, href: 'https://www.cusports.chula.ac.th/', category: 'university', tags: ['university'], isExternal: true },
  { title: 'ตัวช่วยสุขภาพจิตดี', description: 'ช่องทางและแหล่งความรู้ในการดูแลสุขภาพใจของนิสิต', icon: Smile, href: 'https://chula.wellness.in.th/', category: 'university', tags: ['university', 'mental'], isExternal: true },
  { title: 'ตาราง CU POP BUS', description: 'เช็คเส้นทางและตารางเวลาเดินรถโดยสารภายในจุฬาลงกรณ์มหาวิทยาลัย', icon: Bus, href: 'https://www.chula.ac.th/about/student-life/cu-pop-bus/', category: 'university', tags: ['university'], isExternal: true },
  { title: 'ศูนย์นวัตกรรมการเรียนรู้', description: 'แหล่งเรียนรู้ออนไลน์และคอร์สเรียนฟรีสำหรับนิสิตจุฬาฯ', icon: Lightbulb, href: 'https://lic.chula.ac.th/', category: 'university', tags: ['university'], isExternal: true },
];

// ── Section groups matching Figma sidebar ──────────────────────────────────────
interface CategoryGroup {
  id: string;
  title: string;
  tag: string;
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  { id: 'general',    title: 'บริการทั่วไป',          tag: 'general' },
  { id: 'academic',   title: 'บริการวิชาการ',         tag: 'academic' },
  { id: 'learning',   title: 'วางแผนการเรียน',        tag: 'learning' },
  { id: 'kos',        title: 'บริการโดย กอศ.',        tag: 'kos' },
  { id: 'mental',     title: 'สุขภาพจิต',             tag: 'mental' },
  { id: 'university', title: 'บริการจากมหาวิทยาลัย', tag: 'university' },
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

// ── Modal content ──────────────────────────────────────────────────────────────
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

// ── FeatureCard (supports external links) ─────────────────────────────────────
function ServiceFeatureCard({ title, description, icon: IconComponent, href, isExternal }: {
  title: string; description: string; icon: LucideIcon; href: string; isExternal?: boolean;
}) {
  const inner = (
    <div className="group relative w-[150px] h-[150px] rounded-[12px] border border-[#D0D0D1] bg-[#FFF] shadow-[2px_3px_6px_0_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 hover:scale-[1.02] shrink-0">
      <div className="absolute top-0 left-0 w-full h-[107px] flex items-center justify-center">
        <IconComponent size={56} strokeWidth={1.5} className="text-[#E992B4] transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-[0.9]" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[43px] group-hover:h-[85px] bg-[#E992B4] rounded-b-[12px] flex flex-col items-center justify-center group-hover:justify-start group-hover:pt-[10px] px-2 transition-all duration-300 ease-in-out z-10">
        <span className="text-white text-[18px] font-semibold font-serif leading-none text-center w-[135px] z-10">{title}</span>
        <p className="text-white text-[11px] text-center leading-snug mt-0 group-hover:mt-1 opacity-0 max-h-0 group-hover:max-h-[36px] group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden w-[135px] line-clamp-2">{description}</p>
      </div>
    </div>
  );

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0">{inner}</a>;
  }
  return <Link to={href} className="shrink-0">{inner}</Link>;
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function StudentServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const activeService = searchParams.get('service');
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleScroll = (categoryId: string, direction: 'left' | 'right') => {
    const el = scrollRefs.current[categoryId];
    if (el) el.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
  };

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('service');
    setSearchParams(newParams);
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || service.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  let renderGroups = CATEGORY_GROUPS;
  if (selectedFilter !== 'all') {
    if (selectedFilter === 'learning') {
      renderGroups = [{ id: 'learning', title: 'วางแผนการเรียน', tag: 'learning' }];
    } else if (selectedFilter === 'mental') {
      renderGroups = [{ id: 'mental', title: 'สุขภาพจิต', tag: 'mental' }];
    } else {
      renderGroups = CATEGORY_GROUPS.filter((g) => g.tag === selectedFilter);
    }
  }

  const modalData = activeService ? getModalContent(activeService) : null;
  const ModalIcon = modalData?.icon;

  return (
    <div className="w-full bg-[#FFF] flex flex-col min-h-screen">
      {/* Top Main Section container */}
      <div className="max-w-[1282px] mx-auto px-4 lg:px-[50px] w-full py-12 flex-1">

        {/* Page Title — matches Figma "ค้นหาบริการนิสิต" at top */}
        <SectionHeading title="ค้นหาบริการนิสิต" />

        {/* Search bar — matches Figma search row below title */}
        <div className="mt-8 border-b border-gray-100 pb-8 w-full">
          <div className="relative max-w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#DE5D8F] pointer-events-none" />
            <input
              type="text"
              placeholder="ค้นหาเอกสาร..."
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

        {/* Content Body: Sidebar + Main Services */}
        <div className="mt-10 flex flex-col lg:flex-row gap-10 items-start">

          {/* Mobile chip strip */}
          <div className="w-full lg:hidden overflow-x-auto flex gap-2 pb-4 scrollbar-none snap-x border-b border-gray-100">
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = selectedFilter === item.tag;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedFilter(item.tag)}
                  className={`px-4 py-2 rounded-full text-[14px] font-bold transition-all whitespace-nowrap snap-center cursor-pointer font-[ChulaCharasNew] ${isActive ? 'bg-[#DE5D8F] text-white shadow-sm' : 'bg-gray-100 text-[#404041] hover:bg-gray-200'}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Left Sidebar — matches Figma w:216 accordion list */}
          <aside className="hidden lg:block w-[216px] shrink-0 sticky top-24">
            <div className="flex flex-col bg-white rounded-xl border border-[#D0D0D1]/60 shadow-[2px_4px_12px_-1px_rgba(0,0,0,0.06)] overflow-hidden">
              {SIDEBAR_ITEMS.map((item) => {
                const isActive = selectedFilter === item.tag;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFilter(item.tag)}
                    className={`flex items-center justify-between px-6 py-[14px] border-b border-[#F5CDDC] last:border-b-0 text-left transition-all duration-200 cursor-pointer font-[ChulaCharasNew] ${
                      isActive
                        ? 'bg-[#F5CDDC]/20 border-l-4 border-l-[#DE5D8F]'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-[20px] font-bold leading-none ${isActive ? 'text-[#DE5D8F]' : 'text-[#DE5D8F]'}`}>
                      {item.label}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 text-[#404041] ${isActive ? 'rotate-180' : ''}`}
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Area: category sections with FeatureCard rows */}
          <div className="flex-1 w-full space-y-[60px]">
            {searchQuery ? (
              // Search results
              <div>
                <div className="bg-[#F5CDDC] px-5 py-4 rounded-lg flex items-center justify-between min-h-[60px] mb-6 shadow-sm">
                  <h3 className="text-[18px] font-bold text-[#404041] font-[ChulaCharasNew]">
                    ผลลัพธ์การค้นหาสำหรับ: "{searchQuery}" ({filteredServices.length} รายการ)
                  </h3>
                </div>
                {filteredServices.length > 0 ? (
                  <div className="flex flex-wrap gap-5">
                    {filteredServices.map((service, index) => (
                      <ServiceFeatureCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        href={service.href}
                        isExternal={service.isExternal}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Search size={48} className="text-gray-300 mb-4" />
                    <p className="text-gray-500 text-[16px] font-[ChulaCharasNew]">ไม่พบผลลัพธ์ที่ตรงกับคำค้นหาของคุณ</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-4 px-4 py-2 text-[14px] font-bold text-[#DE5D8F] border border-[#DE5D8F] rounded-lg hover:bg-[#F5CDDC]/20 transition-colors font-[ChulaCharasNew] cursor-pointer"
                    >
                      ล้างคำค้นหา
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Category browsing
              renderGroups.map((group) => {
                const groupServices = filteredServices.filter((s) =>
                  selectedFilter === 'all' ? s.category === group.id : s.tags.includes(group.tag)
                );
                if (groupServices.length === 0) return null;

                return (
                  <section key={group.id} className="w-full">
                    {/* Pink section header — "academic tracker curriculum tab" from Figma */}
                    <div className="bg-[#F5CDDC] px-5 rounded-[8px] flex items-end justify-between h-[60px] pb-3 mb-6 shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
                      <h3 className="text-[18px] font-bold text-black font-[ChulaCharasNew]">{group.title}</h3>
                    </div>

                    {/* Horizontal scroll row with arrow buttons */}
                    <div className="relative group/scroll flex items-center w-full">
                      <button
                        onClick={() => handleScroll(group.id, 'left')}
                        className="absolute left-2 z-20 bg-white/95 hover:bg-white text-[#404041] hover:text-[#DE5D8F] p-2.5 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-200 hidden lg:block active:scale-95 cursor-pointer"
                        title="เลื่อนซ้าย"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <div
                        ref={(el) => { scrollRefs.current[group.id] = el; }}
                        className="flex overflow-x-auto gap-5 pb-4 pt-1 px-1 scrollbar-none snap-x snap-mandatory scroll-smooth w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                      >
                        {groupServices.map((service, index) => (
                          <div key={index} className="snap-start shrink-0">
                            <ServiceFeatureCard
                              title={service.title}
                              description={service.description}
                              icon={service.icon}
                              href={service.href}
                              isExternal={service.isExternal}
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleScroll(group.id, 'right')}
                        className="absolute right-2 z-20 bg-white/95 hover:bg-white text-[#404041] hover:text-[#DE5D8F] p-2.5 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-200 hidden lg:block active:scale-95 cursor-pointer"
                        title="เลื่อนขวา"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Modal for KOS services */}
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
                className="px-6 py-2.5 bg-[#E992B4] hover:bg-[#DE5D8F] text-white rounded-lg font-[ChulaCharasNew] text-[14px] font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
