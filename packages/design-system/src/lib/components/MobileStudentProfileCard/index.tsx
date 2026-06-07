import { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/index.js';

export interface MobileStudentProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClose?: () => void;
}

export function MobileStudentProfileCard({
  children,
  className = '',
  onClose,
  ...props
}: MobileStudentProfileCardProps) {
  return (
    <div
      className={`absolute left-[39px] top-[92px] w-[297px] h-[661px] bg-[var(--color-background-subtler,#F7F8F9)] border border-[var(--color-border-subtle,#D0D0D1)] rounded-[16px] p-6 shadow-md flex flex-col items-start ${className}`}
      style={{ fontFamily: 'var(--font-serif, ChulaCharasNew, sans-serif)', ...props.style }}
      {...props}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center"
          aria-label="Close"
        >
          <Icon name="X" sizeVariant="md" />
        </button>
      )}
      {children}
    </div>
  );
}
