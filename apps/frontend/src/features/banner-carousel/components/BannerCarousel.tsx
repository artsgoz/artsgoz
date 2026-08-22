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

  return (
    <div className="w-full h-full flex justify-center relative min-w-0">
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
          {slides.map((banner, index) => {
            const getBannerGradient = (id: string) => {
              switch (id) {
                case 'banner-01':
                  return {
                    gradient: 'from-[#f7f8f9] via-[#ececec] to-[#d0d0d1]',
                    dotColor: 'bg-[#99999a]/20'
                  };
                case 'banner-02':
                  return {
                    gradient: 'from-[#f0f1f2] via-[#dfdfe0] to-[#c5c5c7]',
                    dotColor: 'bg-[#8b8b8c]/20'
                  };
                case 'banner-03':
                  return {
                    gradient: 'from-[#e8e9ea] via-[#d0d0d1] to-[#b0b0b2]',
                    dotColor: 'bg-[#99999a]/25'
                  };
                default:
                  return {
                    gradient: 'from-gray-100 to-gray-200',
                    dotColor: 'bg-gray-300/20'
                  };
              }
            };

            const details = getBannerGradient(banner.id);

            return (
              <a
                key={`${banner.id}-${index}`}
                href={banner.linkUrl}
                className="min-w-full h-full relative block shrink-0 overflow-hidden"
              >
                {!banner.desktopImageUrl && !banner.mobileImageUrl ? (
                  <div className={`w-full h-full relative flex items-center justify-start bg-gradient-to-br ${details.gradient} transition-all duration-500 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden`}>
                    {/* Glowing Ambient Blobs */}
                    <div className={`absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-60 ${details.dotColor} animate-pulse`} />
                    <div className={`absolute bottom-[-10%] left-[10%] w-[35vw] h-[35vw] rounded-full blur-[90px] opacity-40 ${details.dotColor}`} />
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
            );
          })}
        </div>

        {/* Top Premium Pagination */}
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
                  className={`transition-all cursor-pointer focus:outline-none rounded-full border-none p-0 ${
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
      </div>
    </div>
  );
}
