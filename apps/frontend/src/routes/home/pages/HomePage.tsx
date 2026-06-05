import { HomeBanner } from '../../../features/banner-carousel/index.js';
import { AgendaWidgets } from '../../../features/agenda/index.js';
import { QuickAccessSection } from '../../../features/quick-access/index.js';
import { ArticlesSection } from '../../../features/articles/index.js';
import { ClubsSection } from '../../../features/clubs/index.js';
import { Footer } from '../../../components/Footer/index.js';

export function HomePage() {
  return (
    <div className="h-[calc(100vh-81px)] w-full bg-background-default overflow-y-auto snap-y snap-proximity scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col">
      {/* Section 1: Hero Banner (White) */}
      <div className="w-full bg-white pb-12 snap-start shrink-0">
        <div className="max-w-[1282px] mx-auto px-4 lg:px-[50px] w-full">
          <HomeBanner />
        </div>
      </div>

      {/* Section 2: Tools (Light Gray Band - Calendar & Quick Access) */}
      <div className="w-full bg-[var(--blog-banner-background-color-default,#F7F8F9)] py-16 border-y border-gray-100 snap-start shrink-0">
        <div className="max-w-[1282px] mx-auto px-4 lg:px-[50px] w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="w-full lg:w-[58%] shrink-0">
            <AgendaWidgets />
          </div>
          <div className="w-full lg:w-[38%] shrink-0">
            <QuickAccessSection />
          </div>
        </div>
      </div>

      {/* Section 3: Articles (White Band) */}
      <div className="w-full bg-white py-16 snap-start shrink-0">
        <div className="max-w-[1282px] mx-auto px-4 lg:px-[50px] w-full">
          <ArticlesSection />
        </div>
      </div>

      {/* Section 4: Clubs (Light Gray Band) */}
      <div className="w-full bg-[var(--blog-banner-background-color-default,#F7F8F9)] py-16 border-t border-gray-100">
        <div className="max-w-[1282px] mx-auto px-4 lg:px-[50px] w-full">
          <ClubsSection />
        </div>
      </div>

      {/* Section 5: Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
