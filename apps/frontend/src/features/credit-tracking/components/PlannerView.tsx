import { useState } from 'react';
import { ChevronDown, Plus, Trash2, Check, X, Sparkles } from 'lucide-react';
import type { Subject, SubjectCategory, AcademicProfile } from '../types.js';
import { SystemBanner } from '../../../components/SystemBanner/index.js';
import { motion, AnimatePresence } from 'framer-motion';

interface PlannerViewProps {
  subjects: Subject[];
  onToggleSubject: (id: string) => void;
  onAddSubject: (newSubject: Subject) => void;
  onDeleteSubject: (id: string) => void;
  profile: AcademicProfile;
  onConfirmPlan?: () => void;
}

export function PlannerView({
  subjects,
  onToggleSubject,
  onAddSubject,
  onDeleteSubject,
  profile,
  onConfirmPlan,
}: PlannerViewProps) {
  // Collapse/Expand state for sub-groups (defaults to expanded unless false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('planner_expanded_groups');
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to load planner_expanded_groups', e);
      }
    }
    return {};
  });

  // Active custom subject deletion confirmation ID state
  const [deletingId, setDeletingId] = useState<string | null>(null);


  // Add custom subject modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [targetCategory, setTargetCategory] = useState<SubjectCategory>('หมวดการศึกษาทั่วไป');
  const [targetGroup, setTargetGroup] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseNameTh, setCourseNameTh] = useState('');
  const [courseNameEn, setCourseNameEn] = useState('');
  const [courseCredits, setCourseCredits] = useState('3');
  const [courseSemester, setCourseSemester] = useState('1');

  // Confirmation modal states
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  // Group helper
  const getSubjectGroup = (subject: Subject): string => {
    if (subject.group) return subject.group;

    if (subject.category === 'หมวดวิชาพื้นฐานอักษร') {
      if (subject.code === '2201111' || subject.code === '2201121') {
        return 'กลุ่มที่ 1 ทักษะการแสวงหาความรู้และการจัดการในโลกดิจิทัล';
      }
      if (subject.code === '2201112' || subject.code === '2201122') {
        return 'กลุ่มที่ 2 วิจารณญาณเพื่อการดำรงตนในโลกร่วมสมัย';
      }
      if (subject.code === '2201211') {
        return 'กลุ่มที่ 3 การเรียนรู้และการตระหนักความเป็นไทย';
      }
      if (subject.code === '2201221') {
        return 'กลุ่มที่ 4 ความรู้เรื่องโลก/การเสริมสร้างความเป็นพลเมืองโลก';
      }
      return 'กลุ่มที่ 5 ภูมิปัญญาและการแสดงออกของมนุษย์';
    }
    if (subject.category === 'หมวดการศึกษาทั่วไป') {
      return '1. วิชาการศึกษาทั่วไป 12 หน่วยกิต (จากกลุ่มวิชาสังคมศาสตร์ มนุษยศาสตร์ วิทยาศาสตร์และคณิตศาสตร์ และสหศาสตร์)';
    }
    if (subject.category === 'หมวดวิชาเลือกเสรี') {
      return 'วิชาเลือกเสรี';
    }
    if (subject.category === 'หมวดวิชาเอก') {
      if (subject.code === '2202231' || subject.code === '2202232') {
        return '1. กลุ่มวิชาพื้นฐาน (บังคับ) 18 หน่วยกิต';
      }
      if (subject.code === '2202311' || subject.code === '2202312') {
        return '2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก) 12 หน่วยกิต';
      }
      return '3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก) 18 หน่วยกิต';
    }
    if (subject.category === 'หมวดวิชาโท') {
      if (subject.code === '2209111' || subject.code === '2209211') {
        return '1. วิชาบังคับ 12 หน่วยกิต';
      }
      return '2. วิชาเลือก 6 หน่วยกิต';
    }
    return '';
  };

  const getGroupSubhead = (groupName: string): string => {
    if (groupName.includes('วิชาการศึกษาทั่วไป')) {
      return 'ให้เลือกเรียนรายวิชาการศึกษาทั่วไปในหมวดใดก็ได้ จำนวน 12 หน่วยกิต กรณีเลือกเรียนรายวิชากลุ่มมนุษยศาสตร์ของคณะฯ ต้องเป็นไปตามประกาศ ข้อกำหนดการลงทะเบียนเรียนรายวิชาการศึกษาทั่วไปสำหรับนิสิตคณะอักษรศาสตร์';
    }
    if (groupName.includes('วิชาเลือกเสรี')) {
      return 'ให้นิสิตสังกัดเอกวิชาเอกภาษาอังกฤษ เลือกเรียนรายวิชาภาษาต่างประเทศอื่น ๆ ที่ไม่ใช่ภาษาอังกฤษ จำนวน 4 รายวิชา';
    }
    return '';
  };

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => {
      const next = {
        ...prev,
        [groupName]: prev[groupName] === false ? true : false,
      };
      try {
        localStorage.setItem('planner_expanded_groups', JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save planner_expanded_groups', e);
      }
      return next;
    });
  };

  const isGroupExpanded = (groupName: string): boolean => {
    return expandedGroups[groupName] !== false; // defaults to true (open)
  };


  const openAddCourse = (category: SubjectCategory, groupName: string) => {
    setTargetCategory(category);
    setTargetGroup(groupName);
    setCourseCode('');
    setCourseNameTh('');
    setCourseNameEn('');
    setCourseCredits('3');
    setCourseSemester('1');
    setShowAddModal(true);
  };

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseCode.trim() || !courseNameTh.trim()) {
      alert('กรุณากรอกรหัสวิชาและชื่อวิชาภาษาไทย');
      return;
    }

    const newSubject: Subject = {
      id: `custom-${Date.now()}`,
      code: courseCode.trim(),
      nameTh: courseNameTh.trim(),
      nameEn: courseNameEn.trim() || 'Custom Course',
      credits: Number(courseCredits) || 3,
      category: targetCategory,
      group: targetGroup,
      completed: false,
      isCustom: true,
      semester: Number(courseSemester) || 1,
    };

    onAddSubject(newSubject);
    setShowAddModal(false);
  };

  const handleConfirmAction = () => {
    setShowConfirmModal(false);
    setSuccessBanner('บันทึกแผนการลงทะเบียนและจัดตารางเรียนสำเร็จแล้ว!');
    setTimeout(() => setSuccessBanner(null), 4000);
    if (onConfirmPlan) {
      setTimeout(() => {
        onConfirmPlan();
      }, 800);
    }
  };

  // Categories requirements config matching columns
  const getCategoryCredits = (cat: SubjectCategory): string => {
    if (cat === 'หมวดวิชาพื้นฐานอักษร') return '27 หน่วยกิต';
    if (cat === 'หมวดการศึกษาทั่วไป') return '30 หน่วยกิต';
    if (cat === 'หมวดวิชาเลือกเสรี') return '6 หน่วยกิต';
    if (cat === 'หมวดวิชาเอก') return '48 หน่วยกิต';
    if (cat === 'หมวดวิชาโท') return '18 หน่วยกิต';
    return '';
  };

  // Sub-sections definition for left & right columns
  const leftSections: { category: SubjectCategory; instructions?: string[]; groups: string[] }[] = [
    {
      category: 'หมวดวิชาพื้นฐานอักษร',
      instructions: [
        '1. ให้เลือกเรียนจากกลุ่มวิชาต่อไปนี้อย่างน้อยกลุ่มละ 1 รายวิชา รวมเป็น 5 วิชา',
        '2. เลือกอิสระตามความสนใจอีกจำนวน 4 รายวิชา (เลือกเรียนซ้ำกลุ่มรายวิชาได้)',
      ],
      groups: [
        'กลุ่มที่ 1 ทักษะการแสวงหาความรู้และการจัดการในโลกดิจิทัล',
        'กลุ่มที่ 2 วิจารณญาณเพื่อการดำรงตนในโลกร่วมสมัย',
        'กลุ่มที่ 3 การเรียนรู้และการตระหนักความเป็นไทย',
        'กลุ่มที่ 4 ความรู้เรื่องโลก/การเสริมสร้างความเป็นพลเมืองโลก',
        'กลุ่มที่ 5 ภูมิปัญญาและการแสดงออกของมนุษย์',
      ],
    },
    {
      category: 'หมวดการศึกษาทั่วไป',
      groups: [
        '1. วิชาการศึกษาทั่วไป 12 หน่วยกิต (จากกลุ่มวิชาสังคมศาสตร์ มนุษยศาสตร์ วิทยาศาสตร์และคณิตศาสตร์ และสหศาสตร์)',
      ],
    },
    {
      category: 'หมวดวิชาเลือกเสรี',
      groups: ['วิชาเลือกเสรี'],
    },
  ];

  const rightSections: { category: SubjectCategory; groups: string[] }[] = [
    {
      category: 'หมวดวิชาเอก',
      groups: [
        '1. กลุ่มวิชาพื้นฐาน (บังคับ) 18 หน่วยกิต',
        '2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก) 12 หน่วยกิต',
        '3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก) 18 หน่วยกิต',
      ],
    },
    {
      category: 'หมวดวิชาโท',
      groups: ['1. วิชาบังคับ 12 หน่วยกิต', '2. วิชาเลือก 6 หน่วยกิต'],
    },
  ];

  // Helper to determine if a group supports custom additions
  const canAddCustom = (category: SubjectCategory, group: string): boolean => {
    if (category === 'หมวดการศึกษาทั่วไป') return true;
    if (category === 'หมวดวิชาเลือกเสรี') return true;
    if (category === 'หมวดวิชาเอก' && (group.includes('เลือก') || group.includes('เชี่ยวชาญ'))) return true;
    if (category === 'หมวดวิชาโท' && group.includes('เลือก')) return true;
    return false;
  };

  // Helper to calculate total credits for column headers
  const getColTotalCredits = (categoriesList: SubjectCategory[]): number => {
    return subjects
      .filter((s) => categoriesList.includes(s.category))
      .reduce((sum, s) => sum + s.credits, 0);
  };

  // Helper to resolve dynamic remark strings based on user's image
  const getSubjectRemark = (sub: Subject): string => {
    if (sub.isCustom) return 'วิชาเลือกที่เพิ่มเอง';
    return '';
  };

  // Render subject row with Checked, Unchecked, and Inline Deleting states in CSS Grid
  const renderSubjectRow = (sub: Subject) => {
    const isDeleting = deletingId === sub.id;

    if (isDeleting) {
      return (
        <div
          key={sub.id}
          className="grid grid-cols-[20px_90px_1fr] gap-x-6 items-start py-3.5 bg-[#FFF5F7] rounded-[6px] px-2 border border-[#D52048]/10 animate-fade-in"
        >
          {/* Column 1: Spacer */}
          <span></span>

          {/* Column 2: Code */}
          <span className="font-mono text-[#D52048] text-[16px] font-bold pt-0.5">
            {sub.code}
          </span>

          {/* Column 3: Names + Cancel/Delete Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex flex-col">
              <span className="text-[#D52048] text-[16px] font-bold leading-snug">
                {sub.nameTh}
              </span>
              <span className="text-[#D52048]/85 text-[15px] leading-snug">
                {sub.nameEn}
              </span>
              <span className="text-[#EA6D24] text-[14px] italic mt-0.5 font-bold">
                {getSubjectRemark(sub)}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-center">
              <button
                type="button"
                onClick={() => setDeletingId(null)}
                className="flex items-center justify-center bg-[#A6CE8F] hover:bg-[#92b87c] text-[#000000] rounded-[8px] h-[36px] px-4 text-[14px] font-bold transition-colors cursor-pointer"
              >
                cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onDeleteSubject(sub.id);
                  setDeletingId(null);
                }}
                className="flex items-center justify-center bg-[#EE4F72] hover:bg-[#d94363] text-white rounded-[8px] h-[36px] px-4 gap-1.5 text-[14px] font-bold transition-colors cursor-pointer"
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        key={sub.id}
        className="grid grid-cols-[20px_90px_1fr_60px] gap-x-6 items-start py-3.5 hover:bg-black/[0.02] rounded-[6px] px-1 transition-colors text-[16px]"
      >
        {/* Column 1: Checkbox */}
        <button
          type="button"
          onClick={() => onToggleSubject(sub.id)}
          className={`w-[20px] h-[20px] shrink-0 border rounded flex items-center justify-center transition-all mt-1 cursor-pointer ${
            sub.completed
              ? 'bg-white border-[#8B8B8C] text-black'
              : 'border-[#D0D0D1] bg-white hover:border-[#DE5D8F]'
          }`}
        >
          {sub.completed && <Check size={12} strokeWidth={3} className="text-black" />}
        </button>

        {/* Column 2: Code */}
        <span className="font-mono text-[#000000] text-[16px] pt-0.5">
          {sub.code}
        </span>

        {/* Column 3: Names */}
        <div className="flex flex-col min-w-0">
          <span className="text-black text-[16px] font-normal leading-snug">
            {sub.nameTh}
          </span>
          <span className="text-[#6D6D6D] text-[15px] leading-snug">
            {sub.nameEn}
          </span>
          <span className="text-[#EA6D24] text-[15px] italic mt-0.5">
            {getSubjectRemark(sub)}
          </span>
        </div>

        {/* Column 4: Credits & Custom actions */}
        <div className="flex items-start justify-end gap-2 text-right">
          <span className="font-mono text-black text-[16px] pt-0.5 pr-1">
            {sub.credits}
          </span>
          {sub.isCustom && (
            <button
              type="button"
              onClick={() => setDeletingId(sub.id)}
              className="text-[#6D6D6D] hover:text-[#EE4F72] cursor-pointer transition-colors p-0.5 mt-0.5"
              aria-label="ลบวิชานี้"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    );
  };


  return (
    <div className="w-full font-[ChulaCharasNew] select-none pb-20 text-black">
      {/* Success Banner Notification */}
      {successBanner && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 shadow-lg animate-fade-in min-w-[320px] md:min-w-[480px]">
          <SystemBanner
            type="success"
            emphasis="subtle"
            message={successBanner}
          />
        </div>
      )}

      {/* Top Controller Row with green confirm button */}
      <div className="w-full flex items-center justify-between border-b border-[#D0D0D1]/30 pb-6 mb-8">
        <div>
          <h3 className="text-black text-[28px] font-bold">แผนการเรียนส่วนบุคคล</h3>
          <p className="text-[#6D6D6D] text-[18px]">เลือกรายวิชาเพื่อจัดทำตารางเรียนหลักสูตร</p>
        </div>

        <button
          type="button"
          onClick={() => setShowConfirmModal(true)}
          className="flex items-center justify-center bg-[#64A93C] hover:bg-[#528f2e] text-white rounded-[8px] h-[52px] px-8 gap-2 text-[16px] font-bold shadow-md cursor-pointer transition-all shrink-0"
        >
          <span>ยืนยันข้อมูล</span>
        </button>
      </div>

      {/* Dropdown 2-Column Columns Workspace Container */}
      <div className="w-full flex flex-col xl:flex-row gap-8 justify-center items-start">
        {/* Left Column (หลักสูตรอักษรศาสตร์บัณฑิต) */}
        <div className="w-full xl:w-[518px] flex flex-col gap-8 shrink-0">
          {/* Main Dark Pink Column Header */}
          <div className="w-full h-[60px] bg-[#E992B4] rounded-[8px] px-5 flex items-end justify-between pb-3">
            <span className="text-[#000000] text-[18px] font-bold">หลักสูตรอักษรศาสตร์บัณฑิต</span>
            <span className="text-[#000000] text-[16px] font-bold">
              รวม {getColTotalCredits(['หมวดวิชาพื้นฐานอักษร', 'หมวดการศึกษาทั่วไป', 'หมวดวิชาเลือกเสรี'])} นก.
            </span>
          </div>

          {/* Left Column Sections */}
          {leftSections.map((sec) => (
            <div key={sec.category} className="w-full flex flex-col gap-6">
              {/* Soft Pink Header */}
              <div className="w-full h-[60px] bg-[#F5CDDC] rounded-[8px] px-5 flex items-end justify-between pb-3">
                <span className="text-black text-[18px] font-bold">{sec.category}</span>
                <span className="text-black text-[18px] font-bold">
                  {getCategoryCredits(sec.category)}
                </span>
              </div>

              {/* Detail Content (Instructions + Accordions) */}
              <div className="flex flex-col gap-6 mt-2">
                {sec.instructions && (
                  <div className="flex flex-col gap-2 text-black text-[16px] leading-relaxed">
                    {sec.instructions.map((inst, idx) => (
                      <p key={idx}>{inst}</p>
                    ))}
                  </div>
                )}

                {/* Collapsible Accordion Groups */}
                {sec.groups.map((group) => {
                  const groupSubjects = subjects.filter(
                    (s) => s.category === sec.category && getSubjectGroup(s) === group
                  );
                  const isExpanded = isGroupExpanded(group);

                  return (
                    <div key={group} className="w-full flex flex-col">
                      {/* Accordion Toggle Bar */}
                      <div
                        onClick={() => toggleGroup(group)}
                        className="flex items-center justify-between cursor-pointer py-3 hover:opacity-80 transition-opacity"
                      >
                        <span className="text-[16px] font-bold text-black flex-1 pr-4">
                          {group}
                        </span>
                        <ChevronDown
                          size={20}
                          className="text-black shrink-0 transition-transform duration-300 ease-in-out"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </div>

                      {/* Accordion Content (Subjects Table) */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="w-full overflow-hidden"
                          >
                            <div className="w-full mt-2 flex flex-col pb-3">
                              {getGroupSubhead(group) && (
                                <p className="text-[#000000] text-[16px] leading-relaxed mb-4 pr-2">
                                  {getGroupSubhead(group)}
                                </p>
                              )}

                              {groupSubjects.length > 0 && (
                                <div className="w-full flex flex-col">
                                  {/* Header row */}
                                  <div className="grid grid-cols-[20px_90px_1fr_60px] gap-x-6 items-center text-black font-bold text-[16px] pb-2 border-b border-[#D0D0D1]/30">
                                    <span></span>
                                    <span className="text-left">รหัสวิชา</span>
                                    <span className="text-left">ชื่อรายวิชา</span>
                                    <span className="text-right">หน่วยกิต</span>
                                  </div>

                                  {/* Subject Rows */}
                                  <div className="flex flex-col gap-0.5 mt-2">
                                    {groupSubjects.map((sub) => renderSubjectRow(sub))}
                                  </div>
                                </div>
                              )}

                              {groupSubjects.length === 0 && (
                                <p className="text-center text-[#99999A] py-3 text-[14px] italic">
                                  ยังไม่มีรายวิชาลงทะเบียนในกลุ่มนี้
                                </p>
                              )}

                              {/* Plus Add Custom Course Button */}
                              {canAddCustom(sec.category, group) && (
                                <button
                                  type="button"
                                  onClick={() => openAddCourse(sec.category, group)}
                                  className="w-[48px] h-[48px] bg-[#E992B4] hover:bg-[#DE5D8F] text-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-md mx-auto mt-4"
                                  title="เพิ่มรายวิชาเพิ่มเติม"
                                >
                                  <Plus size={24} />
                                </button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (วิชาเอก + วิชาโท) */}
        <div className="w-full xl:w-[518px] flex flex-col gap-8 shrink-0">
          {/* Main Dark Pink Column Header */}
          <div className="w-full h-[60px] bg-[#E992B4] rounded-[8px] px-5 flex items-end justify-between pb-3">
            <span className="text-[#000000] text-[18px] font-bold truncate max-w-[320px]">
              วิชาเอก: {profile.major && profile.major !== 'เลือกวิชาเอก' ? profile.major : 'สารสนเทศศึกษา'}
            </span>
            <span className="text-[#000000] text-[16px] font-bold shrink-0">
              รวม {getColTotalCredits(['หมวดวิชาเอก', 'หมวดวิชาโท'])} นก.
            </span>
          </div>

          {/* Right Column Sections */}
          {rightSections.map((sec) => (
            <div key={sec.category} className="w-full flex flex-col gap-6">
              {/* Soft Pink Header */}
              <div className="w-full h-[60px] bg-[#F5CDDC] rounded-[8px] px-5 flex items-end justify-between pb-3">
                <span className="text-black text-[18px] font-bold">{sec.category}</span>
                <span className="text-black text-[18px] font-bold">
                  {getCategoryCredits(sec.category)}
                </span>
              </div>

              {/* Detail Content (Accordions) */}
              <div className="flex flex-col gap-6 mt-2">
                {/* Collapsible Accordion Groups */}
                {sec.groups.map((group) => {
                  const groupSubjects = subjects.filter(
                    (s) => s.category === sec.category && getSubjectGroup(s) === group
                  );
                  const isExpanded = isGroupExpanded(group);

                  return (
                    <div key={group} className="w-full flex flex-col">
                      {/* Accordion Toggle Bar */}
                      <div
                        onClick={() => toggleGroup(group)}
                        className="flex items-center justify-between cursor-pointer py-3 hover:opacity-80 transition-opacity"
                      >
                        <span className="text-[16px] font-bold text-black flex-1 pr-4">
                          {group}
                        </span>
                        <ChevronDown
                          size={20}
                          className="text-black shrink-0 transition-transform duration-300 ease-in-out"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </div>

                      {/* Accordion Content (Subjects Table) */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="w-full overflow-hidden"
                          >
                            <div className="w-full mt-2 flex flex-col pb-3">
                              {getGroupSubhead(group) && (
                                <p className="text-[#000000] text-[16px] leading-relaxed mb-4 pr-2">
                                  {getGroupSubhead(group)}
                                </p>
                              )}

                              {groupSubjects.length > 0 && (
                                <div className="w-full flex flex-col">
                                  {/* Header row */}
                                  <div className="grid grid-cols-[20px_90px_1fr_60px] gap-x-6 items-center text-black font-bold text-[16px] pb-2 border-b border-[#D0D0D1]/30">
                                    <span></span>
                                    <span className="text-left">รหัสวิชา</span>
                                    <span className="text-left">ชื่อรายวิชา</span>
                                    <span className="text-right">หน่วยกิต</span>
                                  </div>

                                  {/* Subject Rows */}
                                  <div className="flex flex-col gap-0.5 mt-2">
                                    {groupSubjects.map((sub) => renderSubjectRow(sub))}
                                  </div>
                                </div>
                              )}

                              {groupSubjects.length === 0 && (
                                <p className="text-center text-[#99999A] py-3 text-[14px] italic">
                                  ยังไม่มีรายวิชาลงทะเบียนในกลุ่มนี้
                                </p>
                              )}

                              {/* Plus Add Custom Course Button */}
                              {canAddCustom(sec.category, group) && (
                                <button
                                  type="button"
                                  onClick={() => openAddCourse(sec.category, group)}
                                  className="w-[48px] h-[48px] bg-[#E992B4] hover:bg-[#DE5D8F] text-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-md mx-auto mt-4"
                                  title="เพิ่มรายวิชาเพิ่มเติม"
                                >
                                  <Plus size={24} />
                                </button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Add Custom Subject Overlay Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs font-[ChulaCharasNew]">
          <div className="bg-white border border-[#D0D0D1]/30 rounded-[16px] shadow-2xl p-6 md:p-8 max-w-[500px] w-full select-none text-black">
            <div className="flex items-center justify-between border-b border-[#D0D0D1]/20 pb-4 mb-6">
              <h3 className="text-[22px] font-bold flex items-center gap-2 text-[#DE5D8F]">
                <Sparkles size={20} />
                <span>เพิ่มรายวิชาในกลุ่ม</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-[#6D6D6D] hover:text-black cursor-pointer p-1"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-bold text-[#6D6D6D]">กลุ่มที่เลือก</label>
                <div className="bg-[#F7F8F9] px-3 py-2.5 rounded-[8px] text-[15px] font-bold text-black border border-[#D0D0D1]/30 truncate">
                  {targetGroup}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-course-code" className="text-[14px] font-bold text-[#6D6D6D]">รหัสวิชา *</label>
                <input
                  type="text"
                  id="modal-course-code"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="เช่น 2206212"
                  required
                  className="w-full border border-[#D0D0D1] hover:border-[#DE5D8F]/50 focus:border-[#DE5D8F] focus:ring-1 focus:ring-[#DE5D8F] rounded-[8px] px-3 h-[42px] outline-none text-[16px] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-course-name-th" className="text-[14px] font-bold text-[#6D6D6D]">ชื่อรายวิชาภาษาไทย *</label>
                <input
                  type="text"
                  id="modal-course-name-th"
                  value={courseNameTh}
                  onChange={(e) => setCourseNameTh(e.target.value)}
                  placeholder="เช่น ภูมิทัศน์สารสนเทศ"
                  required
                  className="w-full border border-[#D0D0D1] hover:border-[#DE5D8F]/50 focus:border-[#DE5D8F] focus:ring-1 focus:ring-[#DE5D8F] rounded-[8px] px-3 h-[42px] outline-none text-[16px] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-course-name-en" className="text-[14px] font-bold text-[#6D6D6D]">ชื่อรายวิชาภาษาอังกฤษ</label>
                <input
                  type="text"
                  id="modal-course-name-en"
                  value={courseNameEn}
                  onChange={(e) => setCourseNameEn(e.target.value)}
                  placeholder="เช่น Information Landscapes"
                  className="w-full border border-[#D0D0D1] hover:border-[#DE5D8F]/50 focus:border-[#DE5D8F] focus:ring-1 focus:ring-[#DE5D8F] rounded-[8px] px-3 h-[42px] outline-none text-[16px] transition-all"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label htmlFor="modal-course-credits" className="text-[14px] font-bold text-[#6D6D6D]">หน่วยกิต</label>
                  <select
                    id="modal-course-credits"
                    value={courseCredits}
                    onChange={(e) => setCourseCredits(e.target.value)}
                    className="w-full border border-[#D0D0D1] hover:border-[#DE5D8F]/50 focus:border-[#DE5D8F] focus:ring-1 focus:ring-[#DE5D8F] rounded-[8px] px-3 h-[42px] outline-none text-[16px] transition-all bg-white"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label htmlFor="modal-course-semester" className="text-[14px] font-bold text-[#6D6D6D]">ปี/ภาคการศึกษา</label>
                  <select
                    id="modal-course-semester"
                    value={courseSemester}
                    onChange={(e) => setCourseSemester(e.target.value)}
                    className="w-full border border-[#D0D0D1] hover:border-[#DE5D8F]/50 focus:border-[#DE5D8F] focus:ring-1 focus:ring-[#DE5D8F] rounded-[8px] px-3 h-[42px] outline-none text-[16px] transition-all bg-white"
                  >
                    <option value="1">ปี 1 เทอม 1</option>
                    <option value="2">ปี 1 เทอม 2</option>
                    <option value="3">ปี 2 เทอม 1</option>
                    <option value="4">ปี 2 เทอม 2</option>
                    <option value="5">ปี 3 เทอม 1</option>
                    <option value="6">ปี 3 เทอม 2</option>
                    <option value="7">ปี 4 เทอม 1</option>
                    <option value="8">ปี 4 เทอม 2</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D0D0D1]/20 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 h-[42px] rounded-[8px] font-bold text-[#6D6D6D] hover:text-black transition-colors cursor-pointer"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold px-6 h-[42px] rounded-[8px] shadow-sm transition-colors cursor-pointer"
                >
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs font-[ChulaCharasNew]">
          <div className="bg-white border border-[#D0D0D1]/30 rounded-[16px] shadow-2xl p-6 md:p-8 max-w-[480px] w-full select-none text-black">
            <h3 className="text-black text-[22px] font-bold mb-4">ยืนยันการจัดทำแผนการเรียน</h3>
            <p className="text-[#6D6D6D] text-[16px] leading-relaxed mb-6">
              คุณต้องการบันทึกแผนการจัดตารางเรียนทั้งหมดใช่หรือไม่?
              ข้อมูลนี้จะใช้เพื่อติดตามหน่วยกิตสะสมและรายงานผลการศึกษาตลอดหลักสูตรของคุณ
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-5 h-[42px] rounded-[8px] font-bold text-[#6D6D6D] hover:text-black transition-colors cursor-pointer"
              >
                ยกเลิก
              </button>
              <button
                type="button"
                onClick={handleConfirmAction}
                className="bg-[#64A93C] hover:bg-[#528f2e] text-white font-bold px-6 h-[42px] rounded-[8px] shadow-md transition-colors cursor-pointer"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
