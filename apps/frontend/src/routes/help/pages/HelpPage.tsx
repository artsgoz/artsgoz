import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Plus, Minus, Send } from 'lucide-react';
import { Chip, SearchInput, Button } from '@org/design-system';

interface FAQItem {
  id: string;
  category: 'general' | 'registration' | 'tracker' | 'website';
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'บริการนิสิตของ ก.อศ. มีอะไรบ้าง และสามารถเข้าใช้บริการได้ที่ไหน?',
    answer:
      'ก.อศ. มีบริการยืมร่ม กล่องผ้าอนามัยฉุกเฉินฟรี และยาสามัญประจำบ้านปฐมพยาบาลเบื้องต้น นิสิตสามารถติดต่อขอรับบริการได้ที่ ห้อง ก.อศ. ชั้น M1 อาคารมหาจักรีสิรินธร คณะอักษรศาสตร์ ในวันจันทร์-ศุกร์ เวลา 09:00 - 17:00 น.',
  },
  {
    id: 'faq-2',
    category: 'registration',
    question: 'หากต้องการตรวจสอบรายวิชาในหลักสูตรอักษรศาสตร์ ต้องตรวจสอบอย่างไร?',
    answer:
      'นิสิตสามารถเข้าไปที่แท็บ "หลักสูตร" บนแถบเมนูหลักของเว็บไซต์ เพื่อดูวิชาบังคับ วิชาเลือก และรายละเอียดหน่วยกิตของกลุ่มวิชาต่าง ๆ ในหลักสูตรอักษรศาสตรบัณฑิตฉบับล่าสุดได้โดยตรง',
  },
  {
    id: 'faq-3',
    category: 'tracker',
    question: 'ฟังก์ชัน Academic Tracker คืออะไร และช่วยคำนวณหน่วยกิตอย่างไร?',
    answer:
      'Academic Tracker เป็นเครื่องมือส่วนตัวที่ช่วยให้นิสิตบันทึกรายวิชาที่เรียนผ่านแล้ว ระบบจะคำนวณหน่วยกิตสะสม แยกระดับวิชาบังคับคณะ วิชาบังคับเอก และวิชาเลือกเสรีโดยอัตโนมัติ เพื่อตรวจสอบว่านิสิตเรียนครบตามเกณฑ์สำเร็จการศึกษาหรือไม่',
  },
  {
    id: 'faq-4',
    category: 'website',
    question: 'เมื่อพบปัญหาระบบหรือต้องการแจ้งข้อผิดพลาดบนเว็บไซต์ ต้องทำอย่างไร?',
    answer:
      'หากพบบั๊กหรือข้อมูลที่ไม่ถูกต้อง สามารถคลิกที่ปุ่ม "แจ้งปัญหาใช้งานเว็บไซต์" บริเวณด้านล่างของหน้าหลัก หรือกดปุ่ม "ส่งคำถามเพิ่มเติม" เพื่อติดต่อผู้พัฒนาโดยตรง',
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'จะติดตามข่าวสารและตารางกิจกรรมของคณะได้อย่างไร?',
    answer:
      'นิสิตสามารถติดตามได้ผ่าน "ปฏิทินกิจกรรมและกำหนดการ" บนหน้าแรก ซึ่งจะมีวันเวลาของกิจกรรมต่าง ๆ พร้อมแถบสถานะ (เช่น วันนี้, พรุ่งนี้, สำคัญ, ห้ามลืม) เพื่อให้นิสิตไม่พลาดกิจกรรมสำคัญ',
  },
];

// Figma Chip data — no "ทั้งหมด" prefix in Figma, but we add for convenience
const CATEGORIES = [
  { value: 'all',          label: 'ทั้งหมด' },
  { value: 'general',      label: 'ทั่วไป' },
  { value: 'registration', label: 'ลงทะเบียนเรียน' },
  { value: 'tracker',      label: 'Academic Tracker' },
  { value: 'website',      label: 'เกี่ยวกับเว็บไซต์' },
] as const;

export default function HelpPage() {
  const [searchQuery, setSearchQuery]     = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId]       = useState<string | null>(null);

  // Modal
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const [name, setName]                 = useState('');
  const [email, setEmail]               = useState('');
  const [question, setQuestion]         = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleAccordion = (id: string) =>
    setExpandedId(prev => (prev === id ? null : id));

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !question) return;
    setSubmitSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setName('');
      setEmail('');
      setQuestion('');
      setSubmitSuccess(false);
    }, 2000);
  };

  const filteredFAQs = FAQ_DATA.filter(faq => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white min-h-screen font-[ChulaCharasNew]">
      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pt-10 pb-16">

        {/* Row: left title "ช่วยเหลือ"  |  right title "คำถามที่พบบ่อย (FAQ)" */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-0 mb-4">
          {/* Left title — same x as the image below (Figma x=75) */}
          <div className="lg:w-[40%] shrink-0">
            <h1 className="text-[40px] lg:text-[48px] font-bold text-[#404041] leading-[1.2] font-serif">
              ช่วยเหลือ
            </h1>
          </div>

          {/* Right title — Figma x=690 out of 1280 ≈ 54% */}
          <div className="lg:flex-1">
            <h2 className="text-[40px] lg:text-[48px] font-bold text-[#404041] leading-[1.2] font-serif mt-6 lg:mt-0">
              คำถามที่พบบ่อย (FAQ)
            </h2>
          </div>
        </div>

        {/* Row: left image  |  right FAQ section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

          {/* ── LEFT: Link Tree image ────────────────────────────── */}
          {/* Figma: width=521, height=679, placed at x=85 in 1280px canvas → ≈44% of content width */}
          <div className="w-full lg:w-[40%] shrink-0">
            <div className="w-full aspect-[521/679] rounded-[20px] bg-[#D0D0D1]" />
          </div>

          {/* ── RIGHT: Search + Chips + FAQ + Button ─────────────── */}
          {/* Figma: search at x=693, width=485; chips at x=640,w=612; faq at x=709,w=405 */}
          <div className="w-full lg:flex-1 flex flex-col gap-0 pt-0 lg:pt-1">

            {/* Search Field */}
            <div className="mb-4">
              <SearchInput
                size="lg"
                placeholder="ค้นหา"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Categories — Figma: row, centered, gap=20px, Chip fill=#F7F8F9, text=#6D6D6D bold 16px */}
            <div className="flex flex-row justify-center items-end gap-5 flex-wrap mb-4">
              {CATEGORIES.map(cat => (
                <Chip
                  key={cat.value}
                  size="large"
                  selected={selectedCategory === cat.value}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setExpandedId(null);
                  }}
                  className="font-[ChulaCharasNew]"
                >
                  {cat.label}
                </Chip>
              ))}
            </div>

            {/* FAQ Accordion — Figma node 5752:27756 */}
            {/* Column, gap=16px, width=405px (we let it fill right panel) */}
            <div className="flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map(faq => {
                    const isExpanded = expandedId === faq.id;
                    return (
                      <div key={faq.id} className="group">
                        {/* Question row */}
                        <button
                          onClick={() => toggleAccordion(faq.id)}
                          className="w-full flex items-start justify-between gap-4 py-1 cursor-pointer focus:outline-none text-left"
                        >
                          <span
                            className="text-[18px] md:text-[20px] font-bold text-[#404041] leading-[28px] font-serif"
                          >
                            {faq.question} ?
                          </span>
                          <span className="shrink-0 mt-1 text-[#404041] transition-transform duration-300">
                            {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                          </span>
                        </button>

                        {/* Answer */}
                        <motion.div
                          initial="collapsed"
                          animate={isExpanded ? 'open' : 'collapsed'}
                          exit="collapsed"
                          variants={{
                            open:      { opacity: 1, height: 'auto', marginTop: 0 },
                            collapsed: { opacity: 0, height: 0,    marginTop: 0 },
                          }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {/* Divider */}
                          <div className="w-full h-px bg-[#ECECEC] mt-[8px] mb-[10px]" />
                          {/* Answer text */}
                          <p
                            className="text-[15px] md:text-[16px] font-normal text-[#6D6D6D] leading-[24px] font-serif"
                          >
                            {faq.answer}
                          </p>
                        </motion.div>

                        {/* Bottom divider between FAQ items */}
                        <div className="w-full h-px bg-[#ECECEC] mt-4" />
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <Search size={36} className="text-gray-300 mb-3" />
                    <p className="text-gray-500 text-[18px]">
                      ไม่พบคำถามที่ตรงกับการค้นหาของคุณ
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* ส่งคำถาม Button — directly under FAQ list */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                className="font-serif shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                ส่งคำถาม
                <Send size={16} />
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Modal ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative z-10 border border-gray-100"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none cursor-pointer"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-[ChulaCharasNew]">
                ส่งคำถามเพิ่มเติม
              </h3>
              <p className="text-gray-500 text-[15px] mb-6 font-[ChulaCharasNew]">
                ระบุชื่อ อีเมล และข้อสงสัยของคุณเพื่อติดต่อรับการช่วยเหลือจาก ก.อศ.
              </p>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1 font-[ChulaCharasNew]">ส่งข้อความสำเร็จ!</h4>
                  <p className="text-gray-500 text-[15px] font-[ChulaCharasNew]">เราจะรีบตอบกลับคุณโดยเร็วที่สุด</p>
                </motion.div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[15px] font-bold text-gray-700 mb-1.5 font-[ChulaCharasNew]">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="สมชาย ใจดี"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE5D8F]/30 focus:border-[#DE5D8F] transition-all text-[15px] font-[ChulaCharasNew]"
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-bold text-gray-700 mb-1.5 font-[ChulaCharasNew]">อีเมล</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="student@chula.ac.th"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE5D8F]/30 focus:border-[#DE5D8F] transition-all text-[15px] font-[ChulaCharasNew]"
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-bold text-gray-700 mb-1.5 font-[ChulaCharasNew]">ข้อคำถาม / ข้อเสนอแนะ</label>
                    <textarea
                      required
                      rows={4}
                      value={question}
                      onChange={e => setQuestion(e.target.value)}
                      placeholder="กรอกรายละเอียดความประสงค์หรือข้อคำถามของคุณ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE5D8F]/30 focus:border-[#DE5D8F] transition-all text-[15px] resize-none font-[ChulaCharasNew]"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-2 font-serif shadow-md"
                  >
                    ส่งข้อความ
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
