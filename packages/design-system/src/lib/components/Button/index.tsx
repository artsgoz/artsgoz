// packages/design-system/src/lib/components/Button/index.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    'px-spacing-400 py-spacing-200 rounded-all-radius font-serif text-body-16 transition-all duration-200 cursor-pointer font-bold';

  const variants = {
    primary:
      'bg-background-primary-default hover:bg-background-primary-dark text-text-default',
    secondary:
      'bg-background-secondary-default hover:bg-background-secondary-dark text-text-default',
    error:
      'bg-background-error-default hover:bg-background-error-dark text-text-default',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
