import { useState, useMemo, useEffect } from 'react';
import type { AcademicProfile, Subject, CategoryProgress } from '../types.js';
import { MOCK_SUBJECTS, CATEGORIES_CONFIG } from '../constants.js';
import { PDPAForm } from './PDPAForm.js';
import { ProfileSetupForm } from './ProfileSetupForm.js';
import { CreditsSummaryCard } from './CreditsSummaryCard.js';
import { CurriculumView } from './CurriculumView.js';
import { PlannerView } from './PlannerView.js';

type AppStep = 'pdpa' | 'setup' | 'dashboard';
type ActiveTab = 'curriculum' | 'planner';

export function CreditTrackingSection() {
  const [step, setStep] = useState<AppStep>('pdpa');
  const [profile, setProfile] = useState<AcademicProfile | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('curriculum');
  const [subjects, setSubjects] = useState<Subject[]>(MOCK_SUBJECTS);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedStep = localStorage.getItem('tracker_step');
      const savedProfile = localStorage.getItem('tracker_profile');
      const savedSubjects = localStorage.getItem('tracker_subjects');

      if (savedStep) setStep(savedStep as AppStep);
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      if (savedSubjects) setSubjects(JSON.parse(savedSubjects));
    } catch (e) {
      console.error('Failed to load tracker state', e);
    }
  }, []);

  // Save states helper
  const saveState = (newStep: AppStep, newProfile: AcademicProfile | null, newSubjects: Subject[]) => {
    try {
      localStorage.setItem('tracker_step', newStep);
      if (newProfile) {
        localStorage.setItem('tracker_profile', JSON.stringify(newProfile));
      } else {
        localStorage.removeItem('tracker_profile');
      }
      localStorage.setItem('tracker_subjects', JSON.stringify(newSubjects));
    } catch (e) {
      console.error('Failed to save tracker state', e);
    }
  };

  const handleConfirmPDPA = () => {
    setStep('setup');
    saveState('setup', profile, subjects);
  };

  const handleConfirmSetup = (setupProfile: AcademicProfile) => {
    setProfile(setupProfile);
    setStep('dashboard');
    saveState('dashboard', setupProfile, subjects);
  };

  const handleToggleSubject = (id: string) => {
    const nextSubjects = subjects.map((sub) =>
      sub.id === id ? { ...sub, completed: !sub.completed } : sub
    );
    setSubjects(nextSubjects);
    saveState(step, profile, nextSubjects);
  };

  // Reset helper to let user input profile again
  const handleResetProfile = () => {
    setStep('setup');
    saveState('setup', null, subjects);
  };

  // Calculate live progress for each category
  const progressList = useMemo<CategoryProgress[]>(() => {
    return CATEGORIES_CONFIG.map((cfg) => {
      const catCompleted = subjects
        .filter((sub) => sub.category === cfg.category && sub.completed)
        .reduce((sum, sub) => sum + sub.credits, 0);

      return {
        category: cfg.category,
        completed: catCompleted,
        required: cfg.required,
      };
    });
  }, [subjects]);

  // Handle rendering of current step
  if (step === 'pdpa') {
    return (
      <div className="w-full flex items-center justify-center min-h-[60vh] px-4">
        <PDPAForm onConfirm={handleConfirmPDPA} />
      </div>
    );
  }

  if (step === 'setup' || !profile) {
    return (
      <div className="w-full flex items-center justify-center min-h-[60vh] px-4">
        <ProfileSetupForm onSetupComplete={handleConfirmSetup} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-[85px] py-10 md:py-16 font-[ChulaCharasNew] select-none">
      {/* Top Header Section with profile display & selector filters (Figma Frame 6429 / 6079) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-black text-[36px] font-bold leading-none mb-2">Academic Tracker</h1>
          <p className="text-[#6D6D6D] text-[20px]">ตารางรวมหน่วยกิตหลักสูตร</p>
        </div>

        {/* Selected Major/Minor/Curriculum details (Figma Frame 5942) */}
        <div className="flex flex-wrap items-center gap-4 bg-[#F7F8F9] p-4 rounded-[12px] border border-[#D0D0D1]/20">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-bold text-[#6D6D6D]">เอก</span>
            <span className="text-black text-[16px] font-bold">{profile.major}</span>
          </div>
          <div className="h-[24px] w-[1px] bg-[#D0D0D1] self-center" />
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-bold text-[#6D6D6D]">โท</span>
            <span className="text-black text-[16px] font-bold">{profile.minor}</span>
          </div>
          <div className="h-[24px] w-[1px] bg-[#D0D0D1] self-center" />
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-bold text-[#6D6D6D]">หลักสูตร</span>
            <span className="text-black text-[16px] font-bold truncate max-w-[200px]" title={profile.curriculum}>
              {profile.curriculum}
            </span>
          </div>
          <button
            type="button"
            onClick={handleResetProfile}
            className="ml-4 text-[14px] font-bold text-[#DE5D8F] hover:text-[#ca5582] transition-colors cursor-pointer border border-[#DE5D8F]/20 hover:border-[#DE5D8F] rounded-[6px] py-1 px-3 bg-white"
          >
            แก้ไขข้อมูล
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar (Figma navigation bar) */}
      <div className="w-full max-w-[1062px] bg-[#F7F8F9] h-[48px] rounded-[8px] flex items-center p-1 gap-2 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab('curriculum')}
          className={`flex-1 h-full rounded-[6px] text-[18px] font-bold transition-all cursor-pointer flex items-center justify-center
            ${
              activeTab === 'curriculum'
                ? 'bg-[#E992B4] text-white shadow-sm'
                : 'text-[#DE5D8F] hover:bg-white/40'
            }`}
        >
          หลักสูตร
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('planner')}
          className={`flex-1 h-full rounded-[6px] text-[18px] font-bold transition-all cursor-pointer flex items-center justify-center
            ${
              activeTab === 'planner'
                ? 'bg-[#E992B4] text-white shadow-sm'
                : 'text-[#DE5D8F] hover:bg-white/40'
            }`}
        >
          วางแผน
        </button>
      </div>

      {/* Top Credit Summary Grid Cards */}
      <CreditsSummaryCard progressList={progressList} />

      {/* Main Tab Views Switch */}
      <div className="mt-8">
        {activeTab === 'curriculum' ? (
          <CurriculumView subjects={subjects} onToggleSubject={handleToggleSubject} />
        ) : (
          <PlannerView subjects={subjects} onToggleSubject={handleToggleSubject} />
        )}
      </div>
    </div>
  );
}
