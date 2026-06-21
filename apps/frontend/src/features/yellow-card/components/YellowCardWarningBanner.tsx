import { ExternalLink } from 'lucide-react';
import { SystemBanner } from '../../../components/SystemBanner/index.js';

interface YellowCardWarningBannerProps {
  onClose: () => void;
}

export function YellowCardWarningBanner({ onClose }: YellowCardWarningBannerProps) {
  return (
    <SystemBanner
      type="warning"
      emphasis="outlined"
      message={
        <span className="text-black font-bold">
          หมายเหตุ: เพื่อการกรอกข้อมูลที่ถูกต้อง สามารถตรวจสอบข้อมูลการลงทะเบียนได้ที่เว็บไซต์{' '}
          <a
            href="https://www.reg.chula.ac.th"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DE5D8F] hover:underline font-bold inline-flex items-center gap-0.5"
          >
            reg chula <ExternalLink size={12} />
          </a>
        </span>
      }
      onClose={onClose}
      className="mb-8 font-[ChulaCharasNew]"
    />
  );
}
