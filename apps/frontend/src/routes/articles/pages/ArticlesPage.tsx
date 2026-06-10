import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { SectionHeading, SearchInput, Pagination } from '@org/design-system';
import { Search } from 'lucide-react';
import {
  ArticleCard,
  CategoryFilterBar,
  MOCK_ARTICLES,
} from '../../../features/articles/index.js';

const ITEMS_PER_PAGE = 6;

export default function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const CATEGORIES = useMemo(() => {
    const cats = Array.from(new Set(MOCK_ARTICLES.map((a) => a.category)));
    return ['ทั้งหมด', ...cats];
  }, []);

  // Sync state from URL parameters
  const searchQuery = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || 'ทั้งหมด';
  const currentPage = Number(searchParams.get('page')) || 1;

  // Handler helpers to update URL params
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams(
      (prev) => {
        if (value) {
          prev.set('search', value);
        } else {
          prev.delete('search');
        }
        prev.set('page', '1');
        return prev;
      },
      { replace: true }
    );
  };

  const handleCategorySelect = (category: string) => {
    setSearchParams(
      (prev) => {
        if (category && category !== 'ทั้งหมด') {
          prev.set('category', category);
        } else {
          prev.delete('category');
        }
        prev.set('page', '1');
        return prev;
      },
      { replace: true }
    );
  };

  const handlePageChange = (page: number) => {
    setSearchParams(
      (prev) => {
        prev.set('page', String(page));
        return prev;
      },
      { replace: true }
    );
  };

  const handleClearFilters = () => {
    setSearchParams(
      (prev) => {
        prev.delete('search');
        prev.delete('category');
        prev.set('page', '1');
        return prev;
      },
      { replace: true }
    );
  };

  // Filter articles by category + search query
  const filteredArticles = useMemo(() => {
    return MOCK_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'ทั้งหมด' || article.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const currentArticles = useMemo(() => {
    return filteredArticles.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredArticles, currentPage]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1282px] mx-auto px-4 lg:px-[50px] w-full py-12 md:py-16 flex flex-col gap-8">

        {/* Page Title */}
        <SectionHeading
          title="บทความจากชมรมสาราณียกร"
          description="อ่านข่าวสาร วารสาร และบทความที่รวบรวมจากชมรมสาราณียกร"
        />

        {/* Search + Category Filter */}
        <div className="flex flex-col gap-4 w-full">
          {/* Full-content-width lg search bar */}
          <SearchInput
            size="lg"
            placeholder="ค้นหาบทความ"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          {/* Category chips as its own component */}
          <CategoryFilterBar
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelect={handleCategorySelect}
          />
        </div>

        {/* Articles Grid */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-6 w-full justify-items-center xl:justify-items-stretch">
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
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-[#F7F8F9] rounded-[24px] border border-dashed border-gray-300 w-full">
            <Search size={64} className="text-gray-300 mb-4" />
            <h3 className="text-[20px] font-bold text-gray-700 font-serif mb-2">
              ไม่พบผลลัพธ์การค้นหา
            </h3>
            <p className="text-gray-500 max-w-md text-[16px] font-serif">
              ไม่พบบทความที่ตรงกับ &ldquo;{searchQuery || selectedCategory}&rdquo; กรุณาลองใช้คำค้นหาอื่นหรือเปลี่ยนหมวดหมู่
            </p>
            {(searchQuery || selectedCategory !== 'ทั้งหมด') && (
              <button
                onClick={handleClearFilters}
                className="mt-6 px-6 py-2.5 bg-[#E992B4] hover:bg-[#DE5D8F] text-white font-bold rounded-[9999px] transition-all cursor-pointer active:scale-95 font-serif text-[14px] shadow-sm"
              >
                ล้างตัวกรองทั้งหมด
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center w-full mt-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

