import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpFromLine } from 'lucide-react';
import { SectionHeading, Pagination, Button } from '@org/design-system';
import { ClubCard } from './ClubCard.js';
import { MOCK_CLUBS } from '../constants.js';
import { PATHS } from '../../../routes/paths.js';

const ITEMS_PER_PAGE = 4;

export function ClubsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MOCK_CLUBS.length / ITEMS_PER_PAGE);
  const currentClubs = MOCK_CLUBS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleScrollToTop = () => {
    const container = document.querySelector('.overflow-y-auto') || window;
    container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">
        <SectionHeading title="ชมรมในคณะอักษรศาสตร์" description="ค้นหาและทำความรู้จักกับชมรมต่างๆ ที่น่าสนใจ" />
        <Link to={PATHS.CLUBS} className="shrink-0">
          <Button variant="outline">ดูชมรมทั้งหมด</Button>
        </Link>
      </div>
      
      {/* Mobile: horizontal scroll row */}
      <div className="
        lg:hidden
        flex flex-row gap-4
        overflow-x-auto snap-x snap-mandatory
        pb-3
        w-full
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
      ">
        {MOCK_CLUBS.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>

      {/* Desktop: paginated wrap grid */}
      <div className="hidden lg:flex flex-row flex-wrap justify-center gap-6 w-full">
        {currentClubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>

      <div className="hidden lg:flex relative items-center justify-center w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <button
          onClick={handleScrollToTop}
          className="absolute right-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg text-white hover:opacity-90"
          style={{
            display: 'flex',
            width: 'var(--icon-button-sizing-button-size-lg, 48px)',
            height: '48px',
            padding: 'var(--icon-button-spacing-lg-padding-y, 12px) var(--icon-button-spacing-lg-padding-x, 12px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--icon-button-spacing-lg-gap, 8px)',
            aspectRatio: '1/1',
            borderRadius: 'var(--icon-button-radius-xl, 9999px)',
            background: 'var(--icon-button-color-default-background-secondary-default, #F8C135)',
            border: 'none',
          }}
          aria-label="Go to top"
        >
          <ArrowUpFromLine size={20} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
