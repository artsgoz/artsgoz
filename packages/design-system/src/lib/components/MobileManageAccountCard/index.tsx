import { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/index.js';

export interface MobileManageAccountCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onBack?: () => void;
}

export function MobileManageAccountCard({
  children,
  className = '',
  onBack,
  ...props
}: MobileManageAccountCardProps) {
  return (
    <div
      className={`absolute left-[39px] top-[92px] w-[297px] h-[661px] bg-[var(--color-background-subtler,#F7F8F9)] border border-[var(--color-border-subtle,#D0D0D1)] rounded-[16px] p-6 shadow-md flex flex-col items-start ${className}`}
      style={{ fontFamily: 'var(--font-serif, ChulaCharasNew, sans-serif)', ...props.style }}
      {...props}
    >
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center"
          aria-label="Back"
        >
          <Icon name="ChevronLeft" sizeVariant="md" />
        </button>
      )}
      {children}
    </div>
  );
}
