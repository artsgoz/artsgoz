import { BannerCarouselProps } from '../types.js';
import { useBannerCarousel } from '../hooks/useBannerCarousel.js';

export function BannerCarousel({
  banners,
  autoPlayInterval = 5000,
}: BannerCarouselProps) {
  const {
    displayIndex,
    isTransitioning,
    goToSlide,
    handleTransitionEnd,
  } = useBannerCarousel(banners.length, autoPlayInterval);

  if (!banners || banners.length === 0) return null;

  const hasMultiple = banners.length > 1;
  const slides = hasMultiple
    ? [banners[banners.length - 1], ...banners, banners[0]]
    : banners;

  const handleScrollDown = () => {
    const nextSection = document.getElementById('student-services-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Generic fallback: Find the container of the banner and scroll to its next sibling
    const bannerContainer = document.querySelector('section.w-full.h-full')?.parentElement;
    if (bannerContainer) {
      const fallbackSection = bannerContainer.nextElementSibling;
      if (fallbackSection) {
        fallbackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Absolute fallback: Scroll by viewport height
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="relative overflow-hidden w-full h-full group bg-background-subtle">
        <div
          className="absolute inset-0 flex transition-transform"
          style={{
            transform: `translateX(-${displayIndex * 100}%)`,
            transitionDuration: isTransitioning ? '800ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((banner, index) => (
            <a
              key={`${banner.id}-${index}`}
              href={banner.linkUrl}
              className="min-w-full h-full relative block shrink-0"
            >
              {!banner.desktopImageUrl && !banner.mobileImageUrl ? (
                <div className="w-full h-full bg-[var(--color-grey-200,#D0D0D1)] flex items-center justify-center text-[var(--color-grey-600,#8B8B8C)] font-bold text-2xl font-serif">
                  {banner.altText}
                </div>
              ) : (
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={banner.desktopImageUrl}
                  />
                  <img
                    src={banner.mobileImageUrl}
                    alt={banner.altText}
                    className="w-full h-full object-cover"
                  />
                </picture>
              )}
            </a>
          ))}
        </div>

        {/* Top Premium Pagination: Circles expanding to progress capsules */}
        {hasMultiple && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center max-w-[90%] justify-center select-none">
            {banners.map((_, idx) => {
              const activeIndex = (displayIndex - 1 + banners.length) % banners.length;
              const isActive = idx === activeIndex;

              let widthStyle = '0%';
              let durationStyle = '0ms';

              if (isActive) {
                widthStyle = isTransitioning ? '0%' : '100%';
                durationStyle = isTransitioning ? '0ms' : `${autoPlayInterval}ms`;
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`transition-all cursor-pointer focus:outline-none rounded-full ${
                    isActive
                      ? 'h-2 w-12 sm:w-16 md:w-20 bg-white/20 overflow-hidden relative'
                      : 'h-2 w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  style={{
                    transitionDuration: '800ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {isActive && (
                    <div
                      className="h-full bg-white"
                      style={{
                        width: widthStyle,
                        transitionProperty: 'width',
                        transitionDuration: durationStyle,
                        transitionTimingFunction: 'linear',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* "ชมเว็บไซต์" CTA button — centered at bottom of banner */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleScrollDown();
            }}
            className="
              group/cta relative overflow-hidden
              flex items-center gap-2
              h-[52px] px-10
              rounded-[10px]
              font-serif text-[16px] font-bold tracking-wide
              text-white border-2 border-[#E992B4]
              bg-[#E992B4]
              transition-colors duration-300
              hover:text-[#DE5D8F]
              active:scale-95 cursor-pointer
            "
            aria-label="ชมเว็บไซต์"
          >
            {/* Left-to-right white fill */}
            <span
              className="
                absolute inset-0
                bg-white
                -translate-x-full
                group-hover/cta:translate-x-0
                transition-transform duration-300 ease-in-out
                z-0
              "
            />
            <span className="relative z-10 flex items-center gap-2">
              ชมเว็บไซต์
              {/* Animated chevron */}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-y-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
