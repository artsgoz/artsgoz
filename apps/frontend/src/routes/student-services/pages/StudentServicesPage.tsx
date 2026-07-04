import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import {
  BookOpen, Users, Bookmark, ListTodo, FileText, Search,
  GraduationCap, Globe, ClipboardList, Umbrella, Heart, Pill,
  Brain, HeartHandshake, Dumbbell, Smile, Bus, Lightbulb,
  X, Compass,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@org/design-system';
import { FeatureCard } from '../../../features/quick-access/index.js';
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
  subtitle: string;
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  { id: 'general', title: 'บริการทั่วไป', tag: 'general', subtitle: 'ข้อมูลทั่วไปและชมรมต่าง ๆ ในคณะ' },
  { id: 'academic', title: 'บริการวิชาการ', tag: 'academic', subtitle: 'ใบคำร้อง ทุนการศึกษา และหลักสูตร' },
  { id: 'learning', title: 'วางแผนการเรียน', tag: 'learning', subtitle: 'เครื่องมืออำนวยความสะดวกการเรียน' },
  { id: 'kos', title: 'บริการโดย กอศ.', tag: 'kos', subtitle: 'สวัสดิการนิสิตโดยคณะกรรมการนิสิต' },
  { id: 'mental', title: 'สุขภาพจิต', tag: 'mental', subtitle: 'แหล่งปรึกษาและพื้นที่ดูแลสุขภาพใจ' },
  { id: 'university', title: 'บริการจากมหาวิทยาลัย', tag: 'university', subtitle: 'รถโดยสาร ศูนย์กีฬา และบริการส่วนกลาง' },
];

const SIDEBAR_ITEMS = [
  { id: 'all', label: 'บริการทั้งหมด', tag: 'all' },
  { id: 'general', label: 'บริการทั่วไป', tag: 'general' },
  { id: 'academic', label: 'บริการวิชาการ', tag: 'academic' },
  { id: 'learning', label: 'วางแผนการเรียน', tag: 'learning' },
  { id: 'kos', label: 'บริการโดย กอศ.', tag: 'kos' },
  { id: 'mental', label: 'สุขภาพจิต', tag: 'mental' },
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


// ── Main Page ──────────────────────────────────────────────────────────────────
export default function StudentServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const activeService = searchParams.get('service');

  // Scrollspy effect to highlight the category link on scroll
  useEffect(() => {
    if (searchQuery) return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;

      if (window.scrollY < 200) {
        setSelectedFilter('all');
        return;
      }

      let currentFilter = 'all';
      for (const group of CATEGORY_GROUPS) {
        const el = document.getElementById(`section-${group.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentFilter = group.id;
            break;
          }
        }
      }
      setSelectedFilter(currentFilter);
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [searchQuery]);

  const renderServicesGrid = (groupServices: ServiceItem[]) => {
    const count = groupServices.length;

    if (count === 3) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2 w-full">
          <div className="md:row-span-2 h-full">
            <FeatureCard
              title={groupServices[0].title}
              description={groupServices[0].description}
              icon={groupServices[0].icon}
              href={groupServices[0].href}
              isExternal={groupServices[0].isExternal}
              size="lg"
            />
          </div>
          <div className="h-[180px] md:h-[189px]">
            <FeatureCard
              title={groupServices[1].title}
              description={groupServices[1].description}
              icon={groupServices[1].icon}
              href={groupServices[1].href}
              isExternal={groupServices[1].isExternal}
              size="sm"
            />
          </div>
          <div className="h-[180px] md:h-[189px]">
            <FeatureCard
              title={groupServices[2].title}
              description={groupServices[2].description}
              icon={groupServices[2].icon}
              href={groupServices[2].href}
              isExternal={groupServices[2].isExternal}
              size="sm"
            />
          </div>
        </div>
      );
    }

    if (count === 5) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2 w-full">
          <div className="h-full">
            <FeatureCard
              title={groupServices[0].title}
              description={groupServices[0].description}
              icon={groupServices[0].icon}
              href={groupServices[0].href}
              isExternal={groupServices[0].isExternal}
              size="lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-2">
            {groupServices.slice(1).map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                isExternal={service.isExternal}
                size="sm"
              />
            ))}
          </div>
        </div>
      );
    }

    // Default (e.g. 6 items or any other count)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-2 w-full">
        {groupServices.map((service, index) => (
          <FeatureCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={service.href}
            isExternal={service.isExternal}
            size="sm"
          />
        ))}
      </div>
    );
  };

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('service');
    setSearchParams(newParams);
  };

  // Clicks in sidebar categories do not filter main services right side.
  // We only filter right-side services by the search query.
  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Always show all category groups on the right side
  const renderGroups = CATEGORY_GROUPS;

  const modalData = activeService ? getModalContent(activeService) : null;
  const ModalIcon = modalData?.icon;

  return (
    <div className="w-full bg-[#FFF] flex flex-col min-h-screen relative">
      {/* Main Container: Wrap all content side-by-side */}
      <div className="flex-1 w-full bg-white flex flex-col pt-12 pb-16">
        <div className="max-w-[1282px] w-full mx-auto px-4 lg:px-6 flex-1 flex flex-col">
          {/* Page Title — matches Figma "ค้นหาบริการนิสิต" at top */}
          <SectionHeading title="ค้นหาบริการนิสิต" description="เมนูลัดสำหรับเข้าถึงระบบต่างๆ ของคณะอักษรศาสตร์ ครบครันในที่เดียว" />

          {/* Search bar — matches Figma search row below title */}
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
                        if (item.tag === 'all') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const el = document.getElementById(`section-${item.tag}`);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
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

            {/* Right Area: category sections with FeatureCard rows */}
            <div className="flex-1 min-w-0">
              {/* Mobile text-link navigation */}
              <div className="w-full lg:hidden overflow-x-auto flex gap-6 pb-4 scrollbar-none snap-x mb-6">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = selectedFilter === item.tag;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedFilter(item.tag);
                        if (item.tag === 'all') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const el = document.getElementById(`section-${item.tag}`);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      }}
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

              {/* Main Sections Grid */}
              <div className="space-y-[60px] w-full">
                {searchQuery ? (
                  // Search results
                  <div>
                    <div className="flex items-baseline justify-between pb-3 mb-6">
                      <h3 className="text-[26px] font-bold text-gray-900 font-serif leading-none">
                        ผลลัพธ์การค้นหาสำหรับ: "{searchQuery}"
                      </h3>
                      <span className="text-[13px] font-semibold text-gray-400 font-serif tracking-wide">
                        {filteredServices.length} รายการ
                      </span>
                    </div>
                    {filteredServices.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-2 w-full">
                        {filteredServices.map((service, index) => (
                          <FeatureCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            href={service.href}
                            isExternal={service.isExternal}
                            size="sm"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <Search size={48} className="text-gray-300 mb-4" />
                        <p className="text-gray-500 text-[16px] font-[ChulaCharasNew]">ไม่พบผลลัพธ์ที่ตรงกับคำค้นหาของคุณ</p>
                        <button
                          onClick={() => setSearchQuery('')}
                          className="mt-4 px-4 py-2 text-[14px] font-bold text-[#DE5D8F] border border-[#DE5D8F] rounded-lg hover:bg-[#DE5D8F]/10 transition-colors font-[ChulaCharasNew] cursor-pointer"
                        >
                          ล้างคำค้นหา
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  // Category browsing — always show all categories
                  renderGroups.map((group) => {
                    const groupServices = filteredServices.filter((s) => {
                      if (group.id === 'general') return s.category === 'general';
                      return s.tags.includes(group.id);
                    });
                    if (groupServices.length === 0) return null;

                    return (
                      <section
                        key={group.id}
                        id={`section-${group.id}`}
                        className="w-full scroll-mt-28"
                      >
                        <div className="flex items-baseline justify-between pb-3 mb-6 select-none">
                          <h3 className="text-[26px] font-bold text-gray-900 font-serif leading-none">
                            {group.title}
                          </h3>
                          <span className="text-[13px] font-semibold text-gray-400 font-serif tracking-wide">
                            {group.subtitle}
                          </span>
                        </div>

                        {renderServicesGrid(groupServices)}
                      </section>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom of the viewport below both sidebar and content */}
      <div className="relative z-30">
        <Footer />
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
