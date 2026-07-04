import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_CLUBS } from '../constants.js';

interface ClubDetailProps {
  clubId: string;
}

export function ClubDetail({ clubId }: ClubDetailProps) {
  const selectedClub = MOCK_CLUBS.find((c) => c.id === clubId) || MOCK_CLUBS.find((c) => c.id === 'club-04') || MOCK_CLUBS[0];

  // Dynamic Fallbacks for clubs that don't have detailed fields populated
  const aboutText = selectedClub.aboutText || selectedClub.description;
  const activitiesText = selectedClub.activitiesText || 
    `พวกเราคือชมรมในหมวด ${selectedClub.category} คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ก่อตั้งขึ้นเพื่อให้เพื่อนๆ พี่ๆ น้องๆ นิสิตที่รักและมีความสนใจเรื่องเดียวกัน ได้มีโอกาสทำกิจกรรมร่วมกันอย่างสร้างสรรค์ แลกเปลี่ยนองค์ความรู้ และผ่อนคลายจากการเรียนอันหนักหน่วง`;
  
  const instagramUsername = selectedClub.instagram || 'arts_goz';
  const facebookUrl = selectedClub.facebook || 'https://www.facebook.com/artsgozcu/';
  const tiktokUrl = selectedClub.tiktok || 'https://www.tiktok.com/@artsgoz';
  const emailAddress = selectedClub.email || 'artsgoz@gmail.com';

  const galleryImages = selectedClub.galleryImages && selectedClub.galleryImages.length > 0 
    ? selectedClub.galleryImages 
    : [
        selectedClub.imageUrl,
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&fit=crop',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&fit=crop'
      ];

  const activities = selectedClub.activities && selectedClub.activities.length > 0
    ? selectedClub.activities
    : [
        {
          title: `กิจกรรมซ้อมประจำสัปดาห์ของ ${selectedClub.name}`,
          description: `การรวมตัวฝึกฝน พัฒนาทักษะ และสร้างสายสัมพันธ์ประจำสัปดาห์ของสมาชิกในชมรม เพื่อเตรียมความพร้อมสำหรับจัดแสดงผลงานและเข้าร่วมกิจกรรมกีฬา/ศิลปะของคณะ\n\nพวกเราจัดกิจกรรมทุกสัปดาห์ บรรยากาศเป็นกันเอง สนุกสนาน และไม่มีความเครียดเลย มาเข้าร่วมกับเราได้ตลอดเวลาไม่ว่าจะมีพื้นฐานมาก่อนหรือไม่ก็ตาม!`,
          imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&fit=crop'
        },
        {
          title: `กิจกรรมเวิร์กช็อปแนะนำชมรมให้กับเพื่อนๆ นิสิต`,
          description: `งานสัมมนาเชิงปฏิบัติการและเวิร์กช็อปพิเศษที่ชมรมตั้งใจจัดขึ้น เพื่อเปิดโอกาสให้นิสิตนอกชมรมหรือผู้ที่สนใจทั่วไป ได้เข้ามาทดลองและทำความเข้าใจเกี่ยวกับการทำกิจกรรมของพวกเรา\n\nเราจัดงานขึ้นเทอมละครั้ง และได้รับการตอบรับที่ดีจากเหล่านิสิตคณะอักษรฯ มากมายเสมอมา จากความทุ่มเทเตรียมงานของชาวสมาชิกชมรมทุกคน`,
          imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&fit=crop'
        }
      ];

  const achievements = selectedClub.achievements && selectedClub.achievements.length > 0
    ? selectedClub.achievements
    : [
        {
          title: 'กิจกรรมเปิดบ้านต้อนรับนิสิตใหม่ (Arts Open House)',
          subtitle: 'คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
          description: 'การนำเสนอจุดเด่นของชมรม กิจกรรม และความสนุกสนานในการเป็นส่วนหนึ่งของชมรม ซึ่งสามารถดึงดูดความสนใจจากน้องๆ นิสิตใหม่ได้อย่างล้นหลาม',
          imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1100&h=400&fit=crop'
        },
        {
          title: 'นิทรรศการผลงานและงานแสดงโชว์ประจำปีของชมรม',
          subtitle: 'ลานเกียร์ คณะวิศวกรรมศาสตร์ (งานร่วมคณะ)',
          description: 'การได้รับเกียรติเข้าร่วมงานแสดงผลงานของชมรมในกิจกรรมร่วมสถาบัน/ร่วมคณะ เพื่อเผยแพร่ภาพลักษณ์และมิตรภาพของชาวอักษรศาสตร์ให้เป็นที่รู้จักอย่างกว้างขวาง',
          imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1100&h=400&fit=crop'
        }
      ];

  // Gallery slider state
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [prevClubId, setPrevClubId] = useState(clubId);

  if (clubId !== prevClubId) {
    setPrevClubId(clubId);
    setActiveImgIndex(0);
  }

  const handlePrevImg = () => {
    setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImg = () => {
    setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Expandable sections state
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  const displayedActivities = showAllActivities ? activities : activities.slice(0, 2);
  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, 2);

  return (
    <div className="w-full flex flex-col gap-14 font-[ChulaCharasNew] text-black">
      {/* SECTION 1: Club Title & Hero (Gallery + About Panels) */}
      <div className="flex flex-col gap-8 w-full">
        {/* Club Title */}
        <h1 className="text-[32px] md:text-[36px] font-bold leading-tight select-none flex items-center gap-3">
          <span className="w-2.5 h-8 bg-[#DE5D8F] rounded-full shrink-0" />
          {selectedClub.name}อักษร
        </h1>

        {/* Gallery Carousel & Info Boxes Row */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full">
          {/* Gallery Carousel (Framer Motion) */}
          <div className="w-full lg:w-[60%] flex flex-col gap-3 min-h-[300px]">
            <div className="relative overflow-hidden w-full aspect-[2.1/1] rounded-[12px] bg-gray-100 shadow-xs group">
              <div className="absolute inset-0 w-full h-full bg-[#D0D0D1]" />

              {/* Slider Arrows */}
              <button
                onClick={handlePrevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 hover:bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 hover:bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>

              {/* Indicator dots at the bottom */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeImgIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* About & Info Panel */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 justify-between">
            {/* Box 1: What is this club about? */}
            <div className="flex flex-col gap-2 bg-white border-l-4 border-[#DE5D8F] pl-4 py-1">
              <h3 className="text-[20px] font-bold text-black flex items-center gap-2">
                {selectedClub.name}เกี่ยวกับอะไร
              </h3>
              <p className="text-[15px] leading-relaxed text-[#404041] font-sans font-medium text-justify">
                {aboutText}
              </p>
            </div>

            {/* Box 2: What do we do? */}
            <div className="flex flex-col gap-2 bg-white border-l-4 border-[#DE5D8F] pl-4 py-1">
              <h3 className="text-[20px] font-bold text-black flex items-center gap-2">
                พวกเราทำอะไรกันบ้าง
              </h3>
              <p className="text-[15px] leading-relaxed text-[#404041] font-sans font-medium text-justify">
                {activitiesText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Social Media & Contacts */}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#DE5D8F] rounded-full shrink-0" />
          <h2 className="text-[20px] font-bold">ช่องทางการติดต่อพวกเรา</h2>
        </div>

        <div className="flex flex-wrap gap-4 items-center w-full">
          {/* Instagram Badge */}
          {instagramUsername && (
            <a
              href={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-[12px] border border-[#E992B4] hover:border-[#DE5D8F] bg-[#FDF8FA] transition-all duration-300 hover:scale-[1.03] active:scale-95 group shadow-xs cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#E992B4] group-hover:bg-[#DE5D8F] transition-colors flex items-center justify-center text-white">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[13px] text-gray-500 font-sans">Instagram</span>
                <span className="text-[15px] font-sans font-bold text-black group-hover:text-[#DE5D8F] transition-colors">
                  @{instagramUsername}
                </span>
              </div>
            </a>
          )}

          {/* Facebook Badge */}
          {facebookUrl && (
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-[12px] border border-[#E992B4] hover:border-[#DE5D8F] bg-[#FDF8FA] transition-all duration-300 hover:scale-[1.03] active:scale-95 group shadow-xs cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#E992B4] group-hover:bg-[#DE5D8F] transition-colors flex items-center justify-center text-white">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[13px] text-gray-500 font-sans">Facebook</span>
                <span className="text-[15px] font-sans font-bold text-black group-hover:text-[#DE5D8F] transition-colors">
                  {selectedClub.name} อักษรฯ
                </span>
              </div>
            </a>
          )}

          {/* TikTok Badge */}
          {tiktokUrl && (
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-[12px] border border-[#E992B4] hover:border-[#DE5D8F] bg-[#FDF8FA] transition-all duration-300 hover:scale-[1.03] active:scale-95 group shadow-xs cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#E992B4] group-hover:bg-[#DE5D8F] transition-colors flex items-center justify-center text-white">
                <Globe size={18} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[13px] text-gray-500 font-sans">TikTok</span>
                <span className="text-[15px] font-sans font-bold text-black group-hover:text-[#DE5D8F] transition-colors">
                  @{selectedClub.name.toLowerCase()}goz
                </span>
              </div>
            </a>
          )}

          {/* Email Badge */}
          {emailAddress && (
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-[12px] border border-[#E992B4] hover:border-[#DE5D8F] bg-[#FDF8FA] transition-all duration-300 hover:scale-[1.03] active:scale-95 group shadow-xs cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#E992B4] group-hover:bg-[#DE5D8F] transition-colors flex items-center justify-center text-white">
                <Mail size={18} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[13px] text-gray-500 font-sans">Email</span>
                <span className="text-[15px] font-sans font-bold text-black group-hover:text-[#DE5D8F] transition-colors">
                  {emailAddress}
                </span>
              </div>
            </a>
          )}
        </div>
      </div>

      {/* SECTION 3: Club Activities */}
      <div className="flex flex-col gap-8 w-full border-t border-gray-100 pt-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#DE5D8F] rounded-full shrink-0" />
          <h2 className="text-[24px] font-bold">กิจกรรมของชมรม</h2>
        </div>

        {/* Staggered Grid of Activities */}
        <div className="flex flex-col gap-10 w-full">
          {displayedActivities.map((activity, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  flex flex-col lg:flex-row gap-8 items-center w-full
                  ${isEven ? '' : 'lg:flex-row-reverse'}
                `}
              >
                {/* Text Block */}
                <div className="w-full lg:w-[48%] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-5 bg-[#DE5D8F] shrink-0 rounded-full" />
                    <h3 className="text-[18px] md:text-[20px] font-bold text-black">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-[#404041] leading-relaxed font-sans font-medium whitespace-pre-line text-justify pl-4 border-l border-gray-200">
                    {activity.description}
                  </p>
                </div>

                {/* Image Block */}
                <div className="w-full lg:w-[52%]">
                  <div className="w-full aspect-[16/10] rounded-[12px] bg-[#D0D0D1]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Outlined See More Button for Activities */}
        {activities.length > 2 && (
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => setShowAllActivities(!showAllActivities)}
              className="
                w-full max-w-[1056px] py-3 px-6 text-center rounded-[11px] border border-[#DE5D8F] bg-white
                text-[16px] font-bold text-black transition-all cursor-pointer hover:bg-[#DE5D8F]/5 active:scale-[0.99]
                flex items-center justify-center gap-2 select-none
              "
            >
              {showAllActivities ? 'แสดงน้อยลง' : 'ดูเพิ่มเติม'}
            </button>
          </div>
        )}
      </div>

      {/* SECTION 4: Club Achievements */}
      <div className="flex flex-col gap-8 w-full border-t border-gray-100 pt-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#DE5D8F] rounded-full shrink-0" />
          <h2 className="text-[24px] font-bold">ผลงานของชมรม</h2>
        </div>

        {/* achievements Card List */}
        <div className="flex flex-col gap-6 w-full items-center">
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                relative overflow-hidden w-full max-w-[1055px] min-h-[192px] rounded-[12px] shadow-xs hover:shadow-md
                hover:scale-[1.005] active:scale-[0.995] transition-all duration-300 cursor-pointer border border-gray-100
                bg-[#D0D0D1] flex flex-col justify-center p-6 md:p-8
              "
            >
              {/* Fallback check inside inline style could be nice or we handle overlay */}
              <div 
                className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 via-80% md:via-60% to-transparent" 
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(255, 255, 255, 0.9) 70%, rgba(255, 255, 255, 0) 100%)'
                }}
              />

              <div className="relative z-10 flex flex-col gap-2 max-w-[85%] md:max-w-[65%]">
                <h3 className="text-[20px] md:text-[22px] font-bold text-black leading-tight flex items-center gap-2.5">
                  <Award className="text-[#DE5D8F] shrink-0" size={22} />
                  {achievement.title}
                </h3>
                <span className="text-[14px] md:text-[15px] font-bold text-[#DE5D8F] leading-none">
                  {achievement.subtitle}
                </span>
                <p className="text-[14px] leading-relaxed text-[#6D6D6D] font-sans font-medium text-justify mt-1">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outlined See More Button for Achievements */}
        {achievements.length > 2 && (
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => setShowAllAchievements(!showAllAchievements)}
              className="
                w-full max-w-[1056px] py-3 px-6 text-center rounded-[11px] border border-[#DE5D8F] bg-white
                text-[16px] font-bold text-black transition-all cursor-pointer hover:bg-[#DE5D8F]/5 active:scale-[0.99]
                flex items-center justify-center gap-2 select-none
              "
            >
              {showAllAchievements ? 'แสดงน้อยลง' : 'ดูเพิ่มเติม'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
