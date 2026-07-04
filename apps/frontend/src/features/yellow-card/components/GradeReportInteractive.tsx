import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GradeReportInteractiveProps {
  topicName: string;
  description?: string;
  hasDescription?: boolean;
  onAddSubject: () => void;
  children: React.ReactNode;
}

export function GradeReportInteractive({
  topicName,
  description,
  hasDescription = false,
  onAddSubject,
  children,
}: GradeReportInteractiveProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Redesign:
  // If open: bg-[#F7F8F9] rounded-[12px] p-5
  // If closed: bg-transparent px-5 py-2.5 border-b border-[#D0D0D1]/20 last:border-b-0
  const containerClass = isOpen 
    ? "w-full bg-[#F7F8F9] rounded-[12px] p-5 flex flex-col gap-2 transition-all duration-300 select-none"
    : "w-full bg-transparent px-5 py-2.5 border-b border-[#D0D0D1]/20 last:border-b-0 flex flex-col gap-2 transition-all duration-300 select-none";

  return (
    <div className={containerClass}>
      {/* Header / Toggle Accordion (matches Figma design details) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer group py-2"
      >
        <div className="flex-1 flex flex-col min-w-0 pr-4">
          <span className="text-[16px] font-bold text-black group-hover:text-[#DE5D8F] transition-colors leading-snug">
            {topicName}
          </span>
          {hasDescription && description && (
            <span className="text-[14px] text-[#6D6D6D] mt-0.5 leading-normal">
              {description}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <ChevronDown
            size={20}
            className="text-black shrink-0 transition-transform duration-300 ease-in-out"
            style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
        </div>
      </div>

      {/* Accordion Content with smooth framer-motion slide down */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full overflow-hidden"
          >
            <div className="mt-2 flex flex-col gap-1.5 pb-2">
              {/* Subject Rows */}
              <div className="flex flex-col gap-0.5">
                {children}
              </div>

              {/* Round Plus Add Button at bottom centered */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onAddSubject(); }}
                className="w-[44px] h-[44px] bg-[#E992B4] hover:bg-[#DE5D8F] text-white rounded-full flex items-center justify-center cursor-pointer transition-all mx-auto mt-4"
                title="เพิ่มรายวิชาเพิ่มเติม"
              >
                <Plus size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
