import { HTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  children: ReactNode;
}

export function Chip({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ChipProps) {
  // Base style utilizing spacing/radius/typography design tokens
  const baseStyle =
    'flex gap-[12px] items-center overflow-hidden px-[24px] py-[12px] rounded-[11px] shrink-0 text-[16px] font-normal leading-none whitespace-nowrap font-serif';

  const variants = {
    primary:
      'bg-[var(--color-pink-50,#FCEFF4)] text-[var(--color-text-primary,#DE5D8F)]',
    secondary:
      'bg-[var(--color-yellow-50,#FEF9EB)] text-[var(--color-background-secondary-dark,#B08926)]',
    success:
      'bg-[var(--color-green-50,#ECF4E7)] text-[var(--color-text-success,#64A93C)]',
    warning:
      'bg-[var(--color-orange-50,#FDF0E9)] text-[var(--color-text-warning,#EA6D24)]',
    error:
      'bg-[var(--color-red-50,#FDE9ED)] text-[var(--color-text-error,#D52048)]',
    info:
      'bg-[var(--color-blue-50,#E6F0FE)] text-[var(--color-text-information,#0165F8)]',
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
