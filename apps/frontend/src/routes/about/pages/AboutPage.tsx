import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Download, Target, Shield, BookOpen, Layers } from 'lucide-react';
import { Footer } from '../../../components/Footer/index.js';

// Assets
import logoGoz from '../../../assets/about/logo_goz.png';
import gozDisbursement from '../../../assets/about/goz_disbursement.png';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionItem({ title, icon, isOpen, onToggle, children }: AccordionItemProps) {
  return (
    <div className="w-full border-b border-[#ECECEC] overflow-hidden py-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 cursor-pointer bg-transparent text-[#404041] hover:text-[#DE5D8F] transition-colors duration-200 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <div className="text-[#DE5D8F] shrink-0">
            {icon}
          </div>
          <span className="text-[20px] md:text-[24px] font-bold font-serif leading-none transition-colors duration-200 group-hover:text-[#DE5D8F]">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#DE5D8F] shrink-0"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<string | null>('vision');

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const visionPoints = [
    'จัดกิจกรรมที่เข้าถึงความสนใจของนิสิตภายในคณะมากขึ้น และเพิ่มกิจกรรมภายนอกที่ร่วมมือกับหลากหลายคณะ แต่ยังคงเอกลักษณ์ความเป็นอักษรศาสตร์ และสร้างประโยชน์ เข้าถึงนิสิตภายในคณะ',
    'สร้างพื้นที่การทำงานที่เป็น พื้นที่ปลอดภัยและสบายใจที่จะร่วมงานด้วยกัน สามารถพูดคุยและแสดงความคิดเห็นกันได้อย่างเท่าเทียมและเปิดใจรับฟังกัน',
    'เป็นศูนย์กลางและกระบอกเสียงเพื่อประโยชน์สูงสุดของชาวอักษร'
  ];

  const policyPoints = [
    'เปิดโอกาสให้นิสิตได้แสดงความคิดเห็น',
    'สร้างสภาพแวดล้อมที่ดีในการทำงาน',
    'เป็นตัวแทนรักษาสิทธิและสวัสดิการของนิสิตในคณะ',
    'สนับสนุนการจัดกิจกรรมที่เป็นประโยชน์ต่อนิสิตในคณะสำหรับการเตรียมความพร้อมให้นิสิตในอนาคต',
    'ให้ความสำคัญกับสุขภาพจิตของสมาชิก ก.อศ. และนิสิตอักษรศาสตร์ทุกคน'
  ];

  const downloadForms = [
    {
      name: 'แบบฟอร์มขออนุมัติจัดโครงการ (Project Approval Form)',
      desc: 'ใช้สำหรับเสนอโครงการกิจกรรมต่อสโมสรนิสิต เพื่อขออนุมัติจัดกิจกรรมและของบประมาณ ก.อศ.',
      format: 'PDF / DOCX',
      size: '1.2 MB'
    },
    {
      name: 'แบบฟอร์มใบเบิกเงิน ก.อศ. (Disbursement Claim Form)',
      desc: 'ใช้สำหรับยื่นเบิกจ่ายเงินงบประมาณค่าใช้จ่ายตามใบเสร็จรับเงินที่ได้รับการอนุมัติ',
      format: 'PDF / XLSX',
      size: '980 KB'
    },
    {
      name: 'คู่มือระเบียบการเงินและบัญชีนิสิต (Financial Regulation Handbook)',
      desc: 'สรุปขั้นตอน กฎเกณฑ์ และเกณฑ์การประเมินราคาในการทำเรื่องเบิกจ่าย ก.อศ.',
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      name: 'ใบสมัครเข้าร่วมคณะอนุกรรมการ (Subcommittee Application Form)',
      desc: 'แบบฟอร์มสมัครคัดเลือกเข้าทำงานในตำแหน่งคณะอนุกรรมการฝ่ายต่างๆ',
      format: 'PDF',
      size: '640 KB'
    }
  ];

  return (
    <>
      <div className="w-full bg-white min-h-screen">
        
        {/* ── Banner Header ── */}
        <div 
          className="w-full h-20 flex items-center justify-center relative shadow-xs"
          style={{
            background: 'linear-gradient(90deg, rgba(240, 180, 203, 1) 0%, rgba(252, 239, 244, 1) 12%, rgba(255, 255, 255, 1) 23%, rgba(255, 255, 255, 1) 40%, rgba(245, 205, 220, 1) 69%, rgba(239, 175, 200, 1) 88%)'
          }}
        >
          <h1 className="text-[32px] md:text-[40px] font-bold text-black font-serif tracking-wide leading-none select-none">
            เกี่ยวกับ ก.อศ.
          </h1>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-[1097px] mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
          
          {/* ── Hero / Intro Row ── */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
            {/* Logo Image */}
            <div className="w-[220px] md:w-[254px] aspect-[254/239] shrink-0 overflow-hidden">
              <img 
                src={logoGoz} 
                alt="GOZ Logo" 
                className="w-full h-full object-contain drop-shadow-sm select-none"
              />
            </div>
            
            {/* Description Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#404041] font-serif leading-tight">
                คณะกรรมการนิสิตอักษรศาสตร์ (ก.อศ.)
              </h2>
              <p className="text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-serif leading-relaxed text-justify">
                เป็นสโมสรนิสิตที่ช่วยอำนวยความสะดวกด้านวิชาการ สวัสดิการ และกิจกรรมแก่นิสิตอักษรศาสตร์ 
                โดยในปีการศึกษา 2568 นี้มีวิสัยทัศน์และนโยบาย ดังนี้
              </p>
            </div>
          </div>

          {/* ── Accordion Collapse Sections ── */}
          <div className="max-w-[902px] w-full mx-auto flex flex-col gap-5">
            
            {/* 1. วิสัยทัศน์ */}
            <AccordionItem
              title="วิสัยทัศน์"
              icon={<Target size={26} />}
              isOpen={openSection === 'vision'}
              onToggle={() => toggleSection('vision')}
            >
              <ul className="flex flex-col gap-4 font-serif text-[16px] md:text-[18px] text-[#404041] leading-relaxed py-2">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-[#6D6D6D] shrink-0">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>

            {/* 2. นโยบาย */}
            <AccordionItem
              title="นโยบาย"
              icon={<Shield size={26} />}
              isOpen={openSection === 'policy'}
              onToggle={() => toggleSection('policy')}
            >
              <ul className="flex flex-col gap-4 font-serif text-[16px] md:text-[18px] text-[#404041] leading-relaxed py-2">
                {policyPoints.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-[#6D6D6D] shrink-0">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>

            {/* 3. ดาวน์โหลด */}
            <AccordionItem
              title="ดาวน์โหลดเอกสาร"
              icon={<BookOpen size={26} />}
              isOpen={openSection === 'downloads'}
              onToggle={() => toggleSection('downloads')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                {downloadForms.map((form, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl border border-gray-100 bg-[#FDF8FA]/50 hover:bg-[#FDF8FA] transition-colors flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-start gap-2.5">
                        <FileText size={20} className="text-[#DE5D8F] shrink-0 mt-0.5" />
                        <h4 className="font-bold text-[15px] md:text-[16px] text-[#404041] font-serif leading-tight">
                          {form.name}
                        </h4>
                      </div>
                      <p className="text-[13px] text-gray-500 font-serif leading-normal pl-7">
                        {form.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pl-7 border-t border-gray-50 pt-2.5">
                      <span className="text-[12px] text-gray-400 font-sans">
                        {form.format} • {form.size}
                      </span>
                      <a 
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-1 text-[13px] font-bold text-[#DE5D8F] hover:text-[#CA5582] transition-colors"
                      >
                        <Download size={14} />
                        ดาวน์โหลด
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* 4. ระเบียบการเบิกจ่าย ก.อศ. */}
            <AccordionItem
              title="ระเบียบการเบิกจ่าย ก.อศ."
              icon={<Layers size={26} />}
              isOpen={openSection === 'regulations'}
              onToggle={() => toggleSection('regulations')}
            >
              <div className="flex flex-col items-center gap-6 py-4">
                {/* Regulations flowchart image */}
                <div className="w-full max-w-[580px] rounded-xl overflow-hidden border border-[#ECECEC] shadow-sm">
                  <img 
                    src={gozDisbursement} 
                    alt="ระเบียบการเบิกจ่าย ก.อศ." 
                    className="w-full object-cover select-none"
                  />
                </div>
                
                {/* Download Flowchart Button */}
                <a
                  href={gozDisbursement}
                  download="goz_disbursement_regulations.png"
                  className="flex items-center gap-2 px-6 h-[46px] rounded-xl border border-[#DE5D8F] bg-white hover:bg-[#FDF8FA] text-[#DE5D8F] font-bold font-serif text-[15px] transition-all active:scale-[0.98] shadow-2xs cursor-pointer select-none"
                >
                  <Download size={16} />
                  ดาวน์โหลดแผนผังขั้นตอนการเบิกจ่าย
                </a>
              </div>
            </AccordionItem>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
