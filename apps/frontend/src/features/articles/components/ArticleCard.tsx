import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { Button, Chip } from '@org/design-system';
import mockImage from '../../../assets/ArticleBannerMock.jpg';

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export function ArticleCard({
  title,
  author,
  date,
  category,
  imageUrl,
}: ArticleCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="
      snap-start shrink-0 relative
      bg-[var(--blog-banner-background-color-default,#F7F8F9)]
      rounded-[16px]
      shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05),0px_4px_3px_0px_rgba(0,0,0,0.1)]
      overflow-hidden
      flex flex-col
      w-[280px] h-[420px]
      lg:w-[530px] lg:h-[356px]
      hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer
    ">
      {/* Image — inset with gap on mobile, absolutely positioned on desktop */}
      <div className="
        mx-auto mt-[16px] shrink-0
        w-[248px] h-[260px] rounded-[12px] overflow-hidden
        lg:absolute lg:left-[32px] lg:top-[22px] lg:w-[248px] lg:h-[312px] lg:m-0
      ">
        <img
          src={imageUrl || mockImage}
          alt={title}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Tags & Bookmark — top-right overlay (both mobile and desktop) */}
      <div className="absolute right-[24px] top-[24px] flex gap-[8px] items-center z-10 lg:right-[22px] lg:top-[22px]">
        <Chip variant="primary" className="!px-3 !py-1.5 !text-[13px] !rounded-[8px]">
          {category}
        </Chip>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setIsBookmarked((prev) => !prev)}
          className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]"
          aria-label="Bookmark article"
        >
          <Bookmark
            size={18}
            fill={isBookmarked ? 'currentColor' : 'none'}
            className="text-white"
          />
        </Button>
      </div>

      {/* Text content — below image on mobile, right panel on desktop */}
      <div className="
        flex flex-col gap-[10px] items-start
        px-[16px] pt-[12px] pb-[16px] flex-1
        lg:absolute lg:w-[194px] lg:left-[304px] lg:top-[107px] lg:gap-[17px] lg:p-0
      ">
        {/* Title */}
        <h3 className="
          overflow-hidden text-ellipsis line-clamp-2 lg:line-clamp-3
          font-serif text-[16px] lg:text-[20px]
          text-[var(--blog-banner-label-header,#000)]
          font-bold leading-[24px] lg:leading-[28px] break-words
          w-full lg:h-[84px]
        ">
          {title}
        </h3>

        {/* Author / Date */}
        <div className="bg-[rgba(255,255,255,0.26)] flex flex-col gap-[4px] items-start justify-center py-[4px] px-[12px] w-full rounded-[8px]">
          <span className="font-serif text-[12px] lg:text-[14px] text-[var(--blog-banner-label-sub-head,#6D6D6D)] font-bold leading-[18px] lg:leading-[20px] whitespace-nowrap">
            {'เขียนโดย ' + author}
          </span>
          <span className="font-serif text-[12px] lg:text-[14px] text-[var(--blog-banner-label-caption,#99999A)] font-bold leading-[18px] lg:leading-[20px] whitespace-nowrap">
            {'เผยแพร่ ' + date}
          </span>
        </div>
      </div>
    </div>
  );
}
