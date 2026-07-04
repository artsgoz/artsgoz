import { ReactNode } from 'react';

export type AgendaBadgeVariant = 'today' | 'tomorrow' | 'important' | 'dont-forget' | 'default';

interface AgendaBadgeProps {
  variant?: AgendaBadgeVariant;
  children: ReactNode;
  className?: string;
}

export function AgendaBadge({ variant, children, className = '' }: AgendaBadgeProps) {
  // Auto-detect variant from children if variant is not explicitly provided
  let resolvedVariant: AgendaBadgeVariant = variant || 'default';
  
  if (!variant && typeof children === 'string') {
    const text = children.trim();
    if (text === 'วันนี้') resolvedVariant = 'today';
    else if (text === 'พรุ่งนี้') resolvedVariant = 'tomorrow';
    else if (text === 'สำคัญ') resolvedVariant = 'important';
    else if (text === 'ห้ามลืม') resolvedVariant = 'dont-forget';
  }

  // Premium outline design styling classes (colorless background with colored borders/text)
  const variantClasses: Record<AgendaBadgeVariant, string> = {
    today: 'bg-transparent text-[#DE5D8F] border border-[#DE5D8F]',
    tomorrow: 'bg-transparent text-indigo-600 border border-indigo-500',
    important: 'bg-transparent text-red-600 border border-red-500',
    'dont-forget': 'bg-transparent text-amber-600 border border-amber-500',
    default: 'bg-transparent text-gray-500 border border-gray-300',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-serif text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider select-none transition-all duration-200 ${variantClasses[resolvedVariant]} ${className}`}
    >
      {children}
    </span>
  );
}
