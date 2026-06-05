import { Link } from 'react-router';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function FeatureCard({
  title,
  description,
  icon: IconComponent,
  href,
}: FeatureCardProps) {
  return (
    <Link
      to={href}
      className="group relative block w-[150px] h-[150px] rounded-[12px] border border-[#D0D0D1] bg-[#FFF] shadow-[2px_3px_6px_0_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 hover:scale-[1.02] shrink-0"
    >
      {/* Icon Area perfectly centered both vertically and horizontally in the available space above bottom label (height 107px) */}
      <div className="absolute top-0 left-0 w-full h-[107px] flex items-center justify-center">
        <IconComponent 
          size={56} 
          strokeWidth={1.5}
          className="text-[#E992B4] transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-[0.9]" 
        />
      </div>

      {/* Bottom Label Container */}
      <div className="absolute bottom-0 left-0 w-full h-[43px] group-hover:h-[85px] bg-[#E992B4] rounded-b-[12px] flex flex-col items-center justify-center group-hover:justify-start group-hover:pt-[10px] px-2 transition-all duration-300 ease-in-out z-10">
        <span className="text-white text-[18px] font-semibold font-serif leading-none text-center w-[135px] z-10">
          {title}
        </span>
        <p className="text-white text-[11px] text-center leading-snug mt-0 group-hover:mt-1 opacity-0 max-h-0 group-hover:max-h-[36px] group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden w-[135px] line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
