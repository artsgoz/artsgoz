import { Plus, Settings } from 'lucide-react';
import { SectionHeading, Button } from '@org/design-system';
import { FeatureCard } from './FeatureCard.js';
import { QUICK_ACCESS_MENUS } from '../constants.js';

export function QuickAccessSection() {
  return (
    <section className="w-full flex flex-col">
      <SectionHeading title="บริการนิสิต" description="เมนูลัดสำหรับเข้าถึงระบบต่างๆ ของคณะอักษรศาสตร์" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-start mt-6">
        {QUICK_ACCESS_MENUS.map((feature, idx) => (
          <FeatureCard key={idx} title={feature.title} description={feature.description} icon={feature.icon} href={feature.href} />
        ))}
      </div>
      <div className="flex flex-row justify-end items-center gap-4 mt-8 w-full border-t border-gray-100 pt-5">
        <Button variant="outline">
          <Settings size={16} />
          จัดการเมนู
        </Button>
        <Button variant="outline">
          <Plus size={16} />
          เพิ่มเมนูลัด
        </Button>
      </div>
    </section>
  );
}
