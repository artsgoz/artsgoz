import { BannerCarouselProps } from '../types.js';
import { useBannerCarousel } from '../hooks/useBannerCarousel.js';
import { CarouselButton } from './CarouselButton.js';

export function BannerCarousel({
  banners,
  autoPlayInterval = 5000,
}: BannerCarouselProps) {
  const {
    displayIndex,
    isTransitioning,
    nextSlide,
    prevSlide,
    handleTransitionEnd,
  } = useBannerCarousel(banners.length, autoPlayInterval);

  if (!banners || banners.length === 0) return null;

  const hasMultiple = banners.length > 1;
  const slides = hasMultiple
    ? [banners[banners.length - 1], ...banners, banners[0]]
    : banners;

  return (
    <div className="w-full flex justify-center py-4">
      <div className="relative overflow-hidden w-full h-[349px] md:h-[400px] rounded-[16px] shadow-sm group bg-background-subtle">
        <div
          className="absolute inset-0 flex transition-transform ease-in-out"
          style={{
            transform: `translateX(-${displayIndex * 100}%)`,
            transitionDuration: isTransitioning ? '500ms' : '0ms',
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

        {hasMultiple && (
          <>
            <CarouselButton direction="left" onClick={prevSlide} />
            <CarouselButton direction="right" onClick={nextSlide} />
          </>
        )}
      </div>
    </div>
  );
}
