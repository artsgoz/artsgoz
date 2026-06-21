import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTopButton — shared floating "Go up" button.
 * Fixed position, bottom-right corner.
 * Pink arrow up, "Go up" label, white circular background with shadow.
 */
export function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      id="scroll-to-top-btn"
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 flex flex-col items-center justify-center bg-white border border-[#D0D0D1]/30 hover:border-[#DE5D8F]/30 rounded-full w-[64px] h-[64px] shadow-lg cursor-pointer transition-all select-none hover:scale-105 z-40 group"
    >
      <ArrowUp className="text-[#DE5D8F] w-6 h-6 group-hover:animate-bounce" />
      <span className="text-[#6D6D6D] text-[10px] font-bold mt-0.5">Go up</span>
    </button>
  );
}
