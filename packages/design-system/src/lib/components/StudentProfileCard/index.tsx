import { HTMLAttributes, ReactNode } from 'react';

export interface StudentProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function StudentProfileCard({ children, className = '', ...props }: StudentProfileCardProps) {
  return (
    <div
      className={`absolute left-[628px] top-[111px] w-[613px] h-[585px] bg-[var(--color-background-subtler,#F7F8F9)] border border-[var(--color-border-subtle,#D0D0D1)] rounded-[16px] p-8 ${className}`}
      style={{ fontFamily: 'var(--font-serif, ChulaCharasNew, sans-serif)', ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
}
