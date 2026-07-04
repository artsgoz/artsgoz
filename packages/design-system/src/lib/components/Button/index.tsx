import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
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
      ? 'flex items-center justify-center rounded-[10px] cursor-pointer transition-colors duration-200 shrink-0'
      : 'relative overflow-hidden flex items-center justify-center gap-2 h-[52px] px-7 rounded-[10px] font-serif text-[16px] font-bold tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const motionProps = {
    whileHover: { scale: size === 'icon' ? 1.05 : 1.02 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
  };

  if (variant === 'outline') {
    return (
      <motion.button
        className={`${baseStyle} group bg-[#E992B4] text-white border-2 border-[#E992B4] hover:text-[#DE5D8F] transition-colors duration-300 ${className}`}
        {...motionProps}
        {...props}
      >
        {/* Left-to-right white fill on hover */}
        <span
          className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }

  const variants = {
    primary:
      'bg-[var(--color-background-primary-default,#E992B4)] hover:bg-[var(--color-background-primary-dark,#DE5D8F)] text-white border border-transparent',
    secondary:
      'bg-[var(--color-background-secondary-default,#F8C135)] hover:bg-[var(--color-background-secondary-dark,#B08926)] text-white border border-transparent',
    error:
      'bg-[var(--color-background-error-default,#EE4F72)] hover:bg-[var(--color-background-error-dark,#EA234F)] text-white border border-transparent',
    outline: '', // handled above
  };

  return (
    <motion.button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}

