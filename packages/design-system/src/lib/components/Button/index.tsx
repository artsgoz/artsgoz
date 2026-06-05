import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'error' | 'outline';
  size?: 'default' | 'icon';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Select style based on size prop (icon vs default)
  const baseStyle =
    size === 'icon'
      ? 'flex items-center justify-center rounded-[8px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm shrink-0'
      : 'flex items-center justify-center gap-2 h-[42px] px-4 rounded-[8px] font-serif text-[14px] font-bold transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-sm';

  const variants = {
    primary:
      'bg-[var(--color-background-primary-default,#E992B4)] hover:bg-[var(--color-background-primary-dark,#DE5D8F)] text-white border border-transparent',
    secondary:
      'bg-[var(--color-background-secondary-default,#F8C135)] hover:bg-[var(--color-background-secondary-dark,#B08926)] text-white border border-transparent',
    error:
      'bg-[var(--color-background-error-default,#EE4F72)] hover:bg-[var(--color-background-error-dark,#EA234F)] text-white border border-transparent',
    outline:
      'bg-white hover:bg-gray-50 text-[var(--color-grey-900,#404041)] border border-[var(--color-border-subtle,#D0D0D1)]',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
