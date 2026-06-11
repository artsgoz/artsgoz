import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle, Sparkles, CheckCircle, Info, ExternalLink } from 'lucide-react';
import type { StudentProfile, YellowCardSubject, YellowCardCategory } from '../types.js';
import { DEFAULT_PROFILE, INITIAL_SUBJECTS, CATEGORIES_CONFIG } from '../constants.js';
import { PDPAForm } from './PDPAForm.js';
import { StudentProfileForm } from './StudentProfileForm.js';
import { CurriculumTable } from './CurriculumTable.js';
import { GPATable } from './GPATable.js';

export function YellowCardSection() {
  const navigate = useNavigate();

  // App step: 'pdpa' | 'form'
  const [pdpaAgreed, setPdpaAgreed] = useState<boolean>(false);
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [subjects, setSubjects] = useState<YellowCardSubject[]>(INITIAL_SUBJECTS);
  
  // UI states
  const [showWarningBanner, setShowWarningBanner] = useState<boolean>(true);
  const [showAdvisorModal, setShowAdvisorModal] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedPdpa = localStorage.getItem('yellow_card_pdpa_agreed');
      const savedProfile = localStorage.getItem('yellow_card_profile');
      const savedSubjects = localStorage.getItem('yellow_card_subjects');

      if (savedPdpa === 'true') setPdpaAgreed(true);
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      if (savedSubjects) setSubjects(JSON.parse(savedSubjects));
    } catch (e) {
      console.error('Failed to load yellow card state', e);
    }
  }, []);

  // Save states helper
  const saveState = (updatedProfile: StudentProfile, updatedSubjects: YellowCardSubject[]) => {
    try {
      localStorage.setItem('yellow_card_profile', JSON.stringify(updatedProfile));
      localStorage.setItem('yellow_card_subjects', JSON.stringify(updatedSubjects));
    } catch (e) {
      console.error('Failed to save yellow card state', e);
    }
  };

  const handleConfirmPDPA = () => {
    setPdpaAgreed(true);
    try {
      localStorage.setItem('yellow_card_pdpa_agreed', 'true');
    } catch (e) {
      console.error('Failed to save PDPA consent', e);
    }
  };

  const handleProfileChange = (updatedProfile: StudentProfile) => {
    setProfile(updatedProfile);
    saveState(updatedProfile, subjects);
  };

  const handleUpdateSubject = (updatedSubject: YellowCardSubject) => {
    const nextSubjects = subjects.map((sub) =>
      sub.id === updatedSubject.id ? updatedSubject : sub
    );
    setSubjects(nextSubjects);
    saveState(profile, nextSubjects);
  };

  const handleAddSubject = (groupName: string) => {
    // Determine category based on group name
    let category: YellowCardCategory = 'หมวดวิชาพื้นฐานอักษรศาสตร์';
    const cat = CATEGORIES_CONFIG.find((c) => c.groups.includes(groupName));
    if (cat) {
      category = cat.category;
    }

    const newSubject: YellowCardSubject = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      code: '',
      name: '',
      semester: '',
      credits: '3',
      grade: '',
      category,
      group: groupName,
    };

    const nextSubjects = [...subjects, newSubject];
    setSubjects(nextSubjects);
    saveState(profile, nextSubjects);
  };

  const handleDeleteSubject = (id: string) => {
    const nextSubjects = subjects.filter((sub) => sub.id !== id);
    setSubjects(nextSubjects);
    saveState(profile, nextSubjects);
  };

  // Pull data from credit-tracking (interactive trial planner integration)
  const handleImportFromTracker = () => {
    try {
      const savedTrackerSubjects = localStorage.getItem('tracker_subjects');
      if (!savedTrackerSubjects) {
        alert('ไม่พบข้อมูลแผนการลงทะเบียนในระบบ Credit Tracking กรุณาไปจัดตารางเรียนในระบบ Credit Tracking ก่อน');
        return;
      }

      const trackerSubjects = JSON.parse(savedTrackerSubjects);
      // Map tracker subjects to Yellow Card subject format
      const imported: YellowCardSubject[] = trackerSubjects.map((ts: any) => {
        // Map category
        let category: YellowCardCategory = 'หมวดวิชาพื้นฐานอักษรศาสตร์';
        if (ts.category === 'หมวดการศึกษาทั่วไป') {
          category = 'หมวดการศึกษาทั่วไป';
        } else if (ts.category === 'หมวดวิชาเลือกเสรี') {
          category = 'หมวดวิชาเลือกเสรี';
        }

        // Map group (default to first group in the category)
        let group = '';
        const catConfig = CATEGORIES_CONFIG.find((c) => c.category === category);
        if (catConfig && catConfig.groups.length > 0) {
          group = catConfig.groups[0];
        }

        return {
          id: `tracker-${ts.id}`,
          code: ts.code || '0000000',
          name: ts.nameTh || ts.nameEn || 'ชื่อวิชา',
          semester: ts.semester || '',
          credits: (ts.credits || 3).toString(),
          grade: ts.completed ? 'A' : '', // Default to A if marked completed in credit tracking
          category,
          group,
        };
      });

      // Merge or overwrite? Overwrite but keep custom ones, or just completely replace. Let's merge by code, or replace empty rows.
      // For simplicity and ease, we'll append the imported subjects
      const nextSubjects = [...subjects.filter(s => s.code || s.name), ...imported];
      setSubjects(nextSubjects);
      saveState(profile, nextSubjects);
      
      // Trigger temporary success notification
      setSuccessMessage('ดึงข้อมูลการลงทะเบียนจาก Credit Tracking สำเร็จแล้ว!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (e) {
      console.error('Failed to import tracker subjects', e);
      alert('เกิดข้อผิดพลาดในการดึงข้อมูล');
    }
  };

  const handleSaveYellowCard = () => {
    setShowAdvisorModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowAdvisorModal(false);
    saveState(profile, subjects);
    setSuccessMessage('บันทึกข้อมูลและส่งใบเหลืองให้อาจารย์ที่ปรึกษาเรียบร้อยแล้ว!');
    setTimeout(() => setSuccessMessage(null), 4000);
  };

  // Render PDPA view first if not agreed
  if (!pdpaAgreed) {
    return (
      <div className="w-full flex items-center justify-center min-h-[70vh] px-4 bg-[#F7F8F9]/40 py-10">
        <PDPAForm onConfirm={handleConfirmPDPA} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-[85px] py-10 md:py-16 font-[ChulaCharasNew] select-none">
      
      {/* Dynamic Success Alert Banner */}
      {successMessage && (
        <div className="mb-6 flex items-center gap-3 bg-[#ECF4E7] border border-[#64A93C]/30 text-[#64A93C] p-4 rounded-[12px] shadow-sm animate-fade-in">
          <CheckCircle size={20} />
          <span className="text-[16px] font-bold">{successMessage}</span>
        </div>
      )}

      {/* Top Warning Banner (Figma exact matches) */}
      {showWarningBanner && (
        <div className="w-full bg-[#FCEFF4] border border-[#DE5D8F]/30 rounded-[12px] p-5 md:p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center bg-[#FDECC0] text-[#E2B030] rounded-full w-9 h-9 shrink-0 mt-0.5">
              <AlertTriangle size={18} />
            </div>
            <div>
              <h4 className="text-black text-[18px] font-bold leading-tight mb-1">
                ใบรายงานผลการลงทะเบียนและผลการศึกษา ตลอดหลักสูตร จำนวน 129-153 หน่วยกิต (หลักสูตรปรับปรุง พ.ศ.2566)
              </h4>
              <p className="text-[#6D6D6D] text-[15px]">
                หมายเหตุ: เพื่อการกรอกข้อมูลที่ถูกต้อง สามารถตรวจสอบข้อมูลการลงทะเบียนได้ที่เว็บไซต์{' '}
                <a
                  href="https://www.reg.chula.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DE5D8F] hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  reg chula <ExternalLink size={12} />
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 self-end md:self-center shrink-0">
            <a
              href="https://www.reg.chula.ac.th"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold text-[#6D6D6D] hover:underline px-3 py-1.5"
            >
              เรียนรู้เพิ่มเติม
            </a>
            <button
              type="button"
              onClick={() => setShowWarningBanner(false)}
              className="text-[14px] font-bold text-[#6D6D6D] hover:text-[#404041] px-3 py-1.5 cursor-pointer"
            >
              ไม่สนใจ
            </button>
            <button
              type="button"
              onClick={() => setShowWarningBanner(false)}
              className="bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold text-[14px] px-4 py-1.5 rounded-[8px] cursor-pointer shadow-sm transition-colors"
            >
              ดำเนินการต่อ
            </button>
          </div>
        </div>
      )}

      {/* Main Title Header with Import Button */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-[#D0D0D1]/20 pb-6">
        <div>
          <h1 className="text-black text-[36px] font-bold leading-none mb-2">กรอกใบเหลือง (Study Record Form)</h1>
          <p className="text-[#6D6D6D] text-[18px]">กรอกข้อมูลรายวิชาและเกรดเพื่อนำเสนออาจารย์ที่ปรึกษา</p>
        </div>

        {/* Sync Trial Planner / Import Action */}
        <button
          type="button"
          onClick={handleImportFromTracker}
          className="flex items-center justify-center gap-2 bg-[#FCEFF4] hover:bg-[#FCEFF4]/85 text-[#DE5D8F] border border-[#DE5D8F]/30 font-bold text-[16px] px-5 h-[46px] rounded-[10px] cursor-pointer shadow-sm transition-all"
        >
          <Sparkles size={18} />
          ดึงข้อมูลจากการทดลองจัดตารางเรียน
        </button>
      </div>

      {/* Student Profile Form */}
      <StudentProfileForm profile={profile} onChange={handleProfileChange} />

      {/* Curriculum Tables */}
      {CATEGORIES_CONFIG.map((catConfig) => (
        <CurriculumTable
          key={catConfig.category}
          category={catConfig.category}
          requiredCredits={catConfig.requiredCredits}
          groups={catConfig.groups}
          subjects={subjects}
          onUpdateSubject={handleUpdateSubject}
          onAddSubject={handleAddSubject}
          onDeleteSubject={handleDeleteSubject}
        />
      ))}

      {/* Cumulative GPA calculation grid */}
      <GPATable subjects={subjects} />

      {/* Floating Save Actions Bar at bottom */}
      <div className="mt-10 flex items-center justify-between bg-[#F7F8F9] p-5 rounded-[16px] border border-[#D0D0D1]/30 shadow-sm">
        <div className="flex items-center gap-2 text-[#6D6D6D] text-[15px]">
          <Info size={16} />
          <span>ใบเหลืองนี้ไม่ใช่ระบบลงทะเบียนเรียนหลักของมหาวิทยาลัย</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/forms')}
            className="text-[16px] font-bold text-[#6D6D6D] hover:text-black px-4 py-2 cursor-pointer transition-colors"
          >
            ยกเลิก
          </button>
          <button
            type="button"
            onClick={handleSaveYellowCard}
            className="bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold text-[17px] px-8 h-[48px] rounded-[8px] cursor-pointer shadow-md transition-colors"
          >
            ยืนยันและบันทึก
          </button>
        </div>
      </div>

      {/* Advisor Warning Confirmation Modal */}
      {showAdvisorModal && (
        <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in font-[ChulaCharasNew]">
          <div className="bg-white border border-[#D0D0D1]/30 rounded-[16px] shadow-2xl p-6 md:p-8 max-w-[500px] w-full select-none">
            <div className="flex items-center gap-3 text-[#E2B030] mb-4">
              <AlertTriangle size={28} />
              <h3 className="text-black text-[22px] font-bold">แจ้งเตือน</h3>
            </div>
            
            <p className="text-[#404041] text-[16px] md:text-[17px] leading-relaxed mb-6">
              ข้อมูลที่กรอกในระบบกรอกใบเหลืองออนไลน์นี้จะได้รับการส่งไปยังอาจารย์ที่ปรึกษา หากนิสิตต้องการทดลองจัดตารางเรียนหรือคำนวณหน่วยกิตด้วยตนเอง กรุณาไปยังหน้า Credit Tracking
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="w-full bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold text-[16px] h-[44px] rounded-[8px] cursor-pointer shadow-sm transition-colors"
              >
                ยืนยันการส่งใบเหลือง
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setShowAdvisorModal(false);
                  navigate('/credit-tracking');
                }}
                className="w-full bg-[#FCEFF4] hover:bg-[#FCEFF4]/80 text-[#DE5D8F] border border-[#DE5D8F]/20 font-bold text-[16px] h-[44px] rounded-[8px] cursor-pointer transition-colors"
              >
                ไปที่หน้า Credit Tracking
              </button>

              <button
                type="button"
                onClick={() => setShowAdvisorModal(false)}
                className="w-full text-[#6D6D6D] hover:text-black text-[15px] font-bold py-1.5 cursor-pointer text-center"
              >
                ไม่ใช่ระบบแทร็คกิ้งหน่วยกิต (ดำเนินการกรอกต่อ)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
