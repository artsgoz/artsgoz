import { motion } from 'framer-motion';
import { HomeBanner } from '../../../features/banner-carousel/index.js';
import { AgendaWidgets } from '../../../features/agenda/index.js';
import { QuickAccessSection } from '../../../features/quick-access/index.js';
import { ArticlesSection } from '../../../features/articles/index.js';
import { ClubsSection } from '../../../features/clubs/index.js';
import { Footer } from '../../../components/Footer/index.js';

function NoiseOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.018] mix-blend-overlay">
      <svg className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 select-none pointer-events-none animate-[noiseShift_0.6s_infinite_steps(8)]">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <style>{`
        @keyframes noiseShift {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 1%); }
          30% { transform: translate(1%, -2%); }
          40% { transform: translate(-1%, 3%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(1%, 2%); }
          70% { transform: translate(2%, -2%); }
          80% { transform: translate(-1%, 1%); }
          90% { transform: translate(1%, 3%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
}

export function HomePage() {
  const sectionTransition = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1] as const, // Premium custom cubic bezier easing
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(16px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  return (
    <div className="mt-[-65px] lg:mt-[-81px] pt-[65px] lg:pt-[81px] w-full bg-background-default overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col">
      {/* Section 1: Hero Banner — full viewport height */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[calc(100vh-81px)] bg-white shrink-0 relative overflow-hidden"
      >
        <HomeBanner />
        <NoiseOverlay />
      </motion.div>

      {/* Section 2: บริการนิสิต — Left: title+description, Right: 3×2 QuickAccess grid */}
      <motion.div 
        id="student-services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        transition={sectionTransition}
        className="w-full bg-white py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="max-w-[1282px] mx-auto px-4 lg:px-6 w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative z-10">
          {/* Left: Section title + description */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col justify-start lg:pt-4">
            <h2 className="font-serif text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#404041] mb-4">
              บริการนิสิต
            </h2>
            <p className="font-serif text-[16px] leading-[24px] text-[#6D6D6D]">
              เมนูลัดสำหรับเข้าถึงระบบต่างๆ ของคณะอักษรศาสตร์ ครบครันในที่เดียว
            </p>
          </div>
          {/* Right: Quick Access cards grid */}
          <div className="flex-1 min-w-0">
            <QuickAccessSection hideHeading />
          </div>
        </div>
        <NoiseOverlay />
      </motion.div>

      {/* Section 3: ปฏิทินกิจกรรมและกำหนดการ */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        transition={sectionTransition}
        className="w-full bg-[var(--blog-banner-background-color-default,#F7F8F9)] py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="max-w-[1282px] mx-auto px-4 lg:px-6 w-full relative z-10">
          <AgendaWidgets />
        </div>
        <NoiseOverlay />
      </motion.div>

      {/* Section 4: Articles (White Band) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        transition={sectionTransition}
        className="w-full bg-white py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="max-w-[1282px] mx-auto px-4 lg:px-6 w-full relative z-10">
          <ArticlesSection />
        </div>
        <NoiseOverlay />
      </motion.div>

      {/* Section 5: Clubs (Light Gray Band) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        transition={sectionTransition}
        className="w-full bg-[var(--blog-banner-background-color-default,#F7F8F9)] py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="max-w-[1282px] mx-auto px-4 lg:px-6 w-full relative z-10">
          <ClubsSection />
        </div>
        <NoiseOverlay />
      </motion.div>

      {/* Section 6: Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
