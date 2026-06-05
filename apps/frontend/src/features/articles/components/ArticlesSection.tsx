import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpFromLine } from 'lucide-react';
import { SectionHeading, Pagination, Button } from '@org/design-system';
import { ArticleCard } from './ArticleCard.js';
import { MOCK_ARTICLES } from '../constants.js';
import { PATHS } from '../../../routes/paths.js';

const ITEMS_PER_PAGE = 2;

export function ArticlesSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MOCK_ARTICLES.length / ITEMS_PER_PAGE);
  const currentArticles = MOCK_ARTICLES.slice(
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
        <SectionHeading title="บทความจากชมรมสาราณียกรณ์" description="อัปเดตข่าวสาร บทความ และกิจกรรมล่าสุดจากในรั้วคณะ" />
        <Link to={PATHS.ARTICLES} className="shrink-0">
          <Button variant="outline">ดูบทความทั้งหมด</Button>
        </Link>
      </div>

      {/* Mobile: horizontal scroll row — Desktop: paginated 2-col grid */}
      <div className="
        lg:hidden
        flex flex-row gap-4
        overflow-x-auto snap-x snap-mandatory
        pb-3
        w-full
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
      ">
        {MOCK_ARTICLES.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            author={article.author}
            date={article.date}
            category={article.category}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 gap-6 w-full">
        {currentArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            author={article.author}
            date={article.date}
            category={article.category}
            imageUrl={article.imageUrl}
          />
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
