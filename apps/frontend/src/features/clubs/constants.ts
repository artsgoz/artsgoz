import { Club } from './types';

export const MOCK_CLUBS: Club[] = [
  // หมวดดนตรี ศิลปะ และการแสดง
  {
    id: 'club-01',
    name: 'Artsband',
    category: 'หมวดดนตรี ศิลปะ และการแสดง',
    description: 'ชมรมดนตรีสากลสำหรับผู้รักเสียงเพลงและการแสดงดนตรี',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-02',
    name: 'อักษราวาทิต',
    category: 'หมวดดนตรี ศิลปะ และการแสดง',
    description: 'ชมรมดนตรีไทยและเครื่องสายไทย สืบสานศิลปวัฒนธรรมอันดีงาม',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-03',
    name: 'Arts Rumthai',
    category: 'หมวดดนตรี ศิลปะ และการแสดง',
    description: 'ชมรมนาฏศิลป์ไทยและการร่ายรำอันงดงามของคณะอักษรศาสตร์',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-04',
    name: 'ชมรมลีลาศ',
    category: 'หมวดดนตรี ศิลปะ และการแสดง',
    description: 'ชมรมลีลาศเพื่อสุขภาพ มิตรภาพ และการออกกำลังกายอย่างมีสไตล์',
    instagram: 'leelartaksorncu',
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&h=600&fit=crop',
    aboutText: 'คุณเบื่อไหมกับการเรียนหนังสือแสนเหนื่อยล้าในคณะอักษรจุฬาอันแสนโหดร้าย ชมรมของเราจะชวนทุกคนมาโยกย้ายส่ายสะโพกโจ๊ะ ๆ ให้ลืม EastCiv WestCiv Reasoning EngII หรืออะไรก็ตามที่ทำร้ายคุณ มาเลยครับพี่น้อง มาสมัครชมรมลีลาศกัน',
    activitiesText: 'คุณเบื่อไหมกับการเรียนหนังสือแสนเหนื่อยล้าในคณะอักษรจุฬาอันแสนโหดร้าย ชมรมของเราจะชวนทุกคนมาโยกย้ายส่ายสะโพกโจ๊ะ ๆ ให้ลืม EastCiv WestCiv Reasoning EngII หรืออะไรก็ตามที่ทำร้ายสภาพจิตใจของคุณ มาเลยครับพี่น้อง มาสมัครชมรมลีลาศกัน',
    facebook: 'https://www.facebook.com/artsgozcu/?locale=th_TH',
    tiktok: 'https://www.tiktok.com/@artsgoz',
    email: 'artgoz@gmail.com',
    galleryImages: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&fit=crop',
      'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&fit=crop',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&fit=crop'
    ],
    activities: [
      {
        title: 'กิจกรรมเต้นลีลาศตึง ๆ ต่อเนื่อง 1,000 ชม.',
        description: 'จะทุกข์ จะทนเท่าไร ความรักจะพาหัวใจไป คิดเอง ว่าต้องทนไหว แต่ยิ่งทุกข์ ยิ่งทนเท่าไร ความรักที่มียิ่งหายไป จะโทษดิน จะโทษน้ำ จะโทษเดือนและดาว กับเรื่องราว ที่ปวดร้าว ที่เธอมาทำแล้วหนีไป\n\nฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ บอกกันสักคำเป็นไร ว่าเหตุใดต้องมาทำร้ายกัน จากนี้ เรื่องราวที่มี ก็ให้ลืมมันไป อย่าจำว่าเคยเป็นใคร ว่ามีใครที่เคยทำร้าย คนอย่างฉัน\n\nทุกวัน จวบจนวันนี้ ชีวิตที่เราต้องมี จากนี้ต้องทำตัวเช่นไร น้ำตา ที่ยังรินไหล จากความรักที่มีทั้งใจ สุดท้ายเขานั้นหายไป',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&fit=crop'
      },
      {
        title: 'กิจกรรมเต้นลีลาศตึง ๆ ต่อเนื่อง 1,000 ชม.',
        description: 'แต่ทำไม ทำไม ต้องจำ เมื่อเธอไม่คิดจริงจังทำไม ทำไม ความรักที่เธอนั้นลืมต้องเก็บไปคิดฟูมฟาย อะไร อะไร ยังย้อนเข้ามา ทุกช่วงเวลา นั้นยังไม่เคยจางหาย วันที่ฉันมีเธอ ไม่ว่าเวลาจะนานเท่าไร ฉันลืมไม่ได้จริง ๆ\n\nอยู่ตรงนี้ ทุกครั้งที่นอนเดียวดายแค่หลับตาก่อนนอนครั้งใด ยังเห็นเธออยู่ เธอยังไม่ลบเลือนไป จากวันนั้น วันนี้ฉันไม่มีใครเก็บอาการซ่อนความเสียใจ ยังรักเธออยู่อีกนานไหม ก็รู้ทั้งรู้ว่ารักเธอคงไม่ย้อนมา รู้ทั้งรู้ต้องใช้เวลาเพื่อลืมเธอ เข้าใจ',
        imageUrl: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=600&fit=crop'
      }
    ],
    achievements: [
      {
        title: 'ชื่อกิจกรรม/ผลงาน',
        subtitle: 'sub heading (สถานที่,รางวัล)',
        description: 'เนื้อความคร่าวๆ ของรางวัลความสามารถพิเศษที่พวกเราได้ทุ่มเทฝึกฝนอย่างหนักจนประสบความสำเร็จในการประกวด',
        imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?q=80&w=1100&h=400&fit=crop'
      },
      {
        title: 'ชื่อกิจกรรม/ผลงาน',
        subtitle: 'sub heading (สถานที่,รางวัล)',
        description: 'เนื้อความคร่าวๆ ของการแสดงโชว์พิเศษในวันสำคัญของมหาวิทยาลัย ที่สร้างรอยยิ้มและความประทับใจให้กับผู้รับชม',
        imageUrl: 'https://images.unsplash.com/photo-1100000000000?q=80&w=1100&h=400&fit=crop' // We'll handle broken image/fallback or use a valid one
      },
      {
        title: 'ชื่อกิจกรรม/ผลงาน',
        subtitle: 'sub heading (สถานที่,รางวัล)',
        description: 'เนื้อความคร่าวๆ ของการจัดเวิร์กช็อปสอนลีลาศขั้นพื้นฐานให้กับบุคคลทั่วไปที่สนใจด้านการลีลาศเพื่อสุขภาพ',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1100&h=400&fit=crop'
      },
      {
        title: 'ชื่อกิจกรรม/ผลงาน',
        subtitle: 'sub heading (สถานที่,รางวัล)',
        description: 'เนื้อความคร่าวๆ ของการจัดแข่งขันกีฬาภายใน เพื่อส่งเสริมสุขภาพและมิตรภาพอันดีงามระหว่างเพื่อนพี่น้องในชมรม',
        imageUrl: 'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=1100&h=400&fit=crop'
      }
    ]
  },
  {
    id: 'club-05',
    name: 'ชมรมผู้นำเชียร์',
    category: 'หมวดดนตรี ศิลปะ และการแสดง',
    description: 'ชมรมผู้นำเชียร์และเชียร์ลีดเดอร์ในกิจกรรมและงานกีฬาต่างๆ',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&h=600&fit=crop',
  },

  // หมวดกีฬาและการออกกำลังกาย
  {
    id: 'club-06',
    name: 'ชมรมวิ่ง (Artsrunnin)',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมสำหรับคนรักการวิ่งและกิจกรรมส่งเสริมสุขภาพทุกระดับ',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-07',
    name: 'ชมรมฟุตซอลหญิง (Arts CU Girl Futsal)',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ทีมฟุตซอลหญิงคณะอักษรศาสตร์ ฝึกซ้อมและเข้าร่วมแข่งขันกระชับมิตร',
    instagram: 'artscu.girlfutsal',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-08',
    name: 'ชมรมวอลเลย์บอล (Arts CU Volleyball)',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมสำหรับผู้เล่นวอลเลย์บอลเพื่อมิตรภาพและการแข่งขันในคณะ',
    instagram: 'artscuvolleyball',
    imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a4506857f?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-09',
    name: 'ชมรมแบดมินตัน (Arts Badminton)',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมแบดมินตันคณะอักษรศาสตร์ ร่วมเล่นและฝึกซ้อมเพื่อสุขภาพ',
    instagram: 'artsbadminton',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-10',
    name: 'ชมรมว่ายน้ำ',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมสำหรับผู้รักการว่ายน้ำและการฝึกทักษะการว่ายน้ำเบื้องต้น',
    imageUrl: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-11',
    name: 'ชมรมเทควันโด',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมศิลปะการต่อสู้เทควันโด ฝึกฝนวินัยและการป้องกันตัว',
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-12',
    name: 'ชมรมบาสเก็ตบอล',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมบาสเก็ตบอลรวมตัวซ้อมแข่งขันและออกกำลังกายร่วมกัน',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-13',
    name: 'ชมรมยิงปืน',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมกีฬายิงปืน ฝึกสมาธิและความแม่นยำอย่างปลอดภัย',
    imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-14',
    name: 'ชมรมเพาะกาย',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมคนรักสุขภาพและการออกกำลังกายสร้างกล้ามเนื้อ',
    imageUrl: 'https://images.unsplash.com/photo-1578762560072-0c694193e91b?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-15',
    name: 'ชมรมฟันดาบ',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมกีฬาฟันดาบสากล ฝึกทักษะไหวพริบและการเคลื่อนไหวรวดเร็ว',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-16',
    name: 'ชมรมเปตอง',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมกีฬาเปตองเพื่อความสนุกสนาน ฝึกสมาธิและทักษะการโยน',
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-17',
    name: 'ชมรมฮอกกี้',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมกีฬาฮอกกี้ ฝึกซ้อมและเรียนรู้การเล่นเป็นทีมอย่างสนุกสนาน',
    imageUrl: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-18',
    name: 'ชมรมมวยสากล',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมฝึกทักษะมวยสากลเพื่อการออกกำลังกายและป้องกันตัว',
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-19',
    name: 'ชมรมฟุตบอล',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมฟุตบอลสำหรับนิสิตที่รักการเตะบอลและการแข่งขันกีฬาสี',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-20',
    name: 'ชมรมเทนนิส',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมเทนนิสสำหรับผู้เริ่มต้นและผู้เล่นทั่วไปเพื่อมิตรภาพ',
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-21',
    name: 'ชมรมปิงปอง',
    category: 'หมวดกีฬาและการออกกำลังกาย',
    description: 'ชมรมเทเบิลเทนนิส ฝึกซ้อมการตอบสนองและออกกำลังกาย',
    imageUrl: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=400&h=600&fit=crop',
  },

  // หมวดเกมและนันทนาการ
  {
    id: 'club-22',
    name: 'ชมรมอีสปอร์ต (E-Sports)',
    category: 'หมวดเกมและนันทนาการ',
    description: 'ชมรมผู้เล่นเกมและแข่งขันอีสปอร์ต ร่วมแลกเปลี่ยนเทคนิคกัน',
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-23',
    name: 'ชมรมหมากกระดาน',
    category: 'หมวดเกมและนันทนาการ',
    description: 'ชมรมหมากรุก หมากฮอส และบอร์ดเกม ฝึกสมองและวางแผน',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=400&h=600&fit=crop',
  },

  // หมวดวิชาการและภาษา
  {
    id: 'club-24',
    name: 'ชมรมประวัติศาสตร์',
    category: 'หมวดวิชาการและภาษา',
    description: 'ชมรมผู้สนใจศึกษาประวัติศาสตร์ ศิลปวัฒนธรรม และโบราณคดี',
    imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-25',
    name: 'ชมรมภาษาไทย',
    category: 'หมวดวิชาการและภาษา',
    description: 'ชมรมอนุรักษ์ ส่งเสริม และเรียนรู้ความงดงามของภาษาไทย',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&h=600&fit=crop',
  },
  {
    id: 'club-26',
    name: 'ชมรมภาษาตะวันออก',
    category: 'หมวดวิชาการและภาษา',
    description: 'ชมรมเรียนรู้และแบ่งปันวัฒนธรรมภาษาฝั่งตะวันออกอย่างลึกซึ้ง',
    imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=400&h=600&fit=crop',
  },
];
