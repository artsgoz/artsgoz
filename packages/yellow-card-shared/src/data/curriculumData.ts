// Auto-generated from official curriculum documents in packages/ข้อมูลหลักสูตร ไฟล์ Text

export interface CourseDetail {
  code: string;
  nameTh: string;
  nameEn: string;
  credits: number;
  group: string;
}

export interface MajorCurriculumInfo {
  id: string;
  nameTh: string;
  nameEn: string;
  totalCredits: string;
  revision: string;
  breakdown: {
    generalEd: number;
    basicArts: number;
    major: number;
    majorCompulsory: number;
    majorSpecified: number;
    majorSpecialized: number;
    minor: number;
    freeElective: number;
  };
  courses: CourseDetail[];
}

export interface MinorCurriculumInfo {
  id: string;
  nameTh: string;
  nameEn: string;
  totalCredits: string;
  revision: string;
  breakdown: {
    compulsory: number;
    requiredElective?: number;
    elective: number;
  };
  courses: CourseDetail[];
}

export const MAJOR_CURRICULUMS: Record<string, MajorCurriculumInfo> = {
  "thai": {
    "id": "thai",
    "nameTh": "สาขาวิชาภาษาไทย",
    "nameEn": "Thai Major",
    "totalCredits": "129-131",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2201201",
        "nameTh": "ลักษณะภาษาไทย",
        "nameEn": "Characteristics of Thai Language",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2201251",
        "nameTh": "ววิวัฒนาการวรรณคดิไทย",
        "nameEn": "Survey of Thai Literature",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2201252",
        "nameTh": "วิวัฒนาการวรรณกรรมไทย",
        "nameEn": "Survey of Thai Literary Works",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2201326",
        "nameTh": "ภาษาเขมรที่สัมพันธ์กับภาษาไทย",
        "nameEn": "Cambodian in Relation to Thai",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2201394",
        "nameTh": "คติชนวิทยา",
        "nameEn": "Folklore",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2201324",
        "nameTh": "การสร้างคําและการบัญญัติศัพท์",
        "nameEn": "Word Formation and Word Coining",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201352",
        "nameTh": "วิวัฒนาการร้อยกรอง",
        "nameEn": "Survey of Thai Poetry",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201353",
        "nameTh": "วรรณกรรมวิจารณ์",
        "nameEn": "Literary Criticism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201401",
        "nameTh": "กการวิเคราะห์ภาษาไทย",
        "nameEn": "Analysis of the Thai Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201414",
        "nameTh": "ศิลปะการใช้ภาษาไทย",
        "nameEn": "The Art of Thai Usage",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201431",
        "nameTh": "ภาษาไทยถิน",
        "nameEn": "Thai Dialects",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201435",
        "nameTh": "ภาษาไทยสมัยต่าง ๆ",
        "nameEn": "Thai Language in Different Periods",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2244101",
        "nameTh": "ภาษาเขมร 1",
        "nameEn": "Cambodian |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2245101",
        "nameTh": "ภาษาลาว 1",
        "nameEn": "Lao |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201214",
        "nameTh": "ภาษาสื่อสารมวลชน",
        "nameEn": "Language for the Mass Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201215",
        "nameTh": "กการเล่นทางภาษาในภาษาไทย",
        "nameEn": "Speech Play in Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201230",
        "nameTh": "วิวัฒนาการอักษรและอักขรวิธีไทย",
        "nameEn": "Evolution of Thai Scripts and Orthography",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201253",
        "nameTh": "วรรณคดีไทยกับสื่อร่วมสมัย",
        "nameEn": "Thai Literature and Contemporary Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201260",
        "nameTh": "ลิลิต นิราศ และเพลงยาว",
        "nameEn": "Lilit, Nirat and Phleng Yau",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201264",
        "nameTh": "ว)วรรณคดีนิทาน",
        "nameEn": "Literary Tales",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201266",
        "nameTh": "ว)>วรรณคดีคําสอน",
        "nameEn": "Didactic Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201274",
        "nameTh": "พระราชนิพนธ์ในพระบาทสมเด็จพระพุทธเลิศหล้านภาลัย",
        "nameEn": "King Rama ll",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201275",
        "nameTh": "งานสุนทรภู่",
        "nameEn": "Sunthon Phu",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201303",
        "nameTh": "การศึกษางานวิจัยภาษาไทยเชิงภาษาศาสตร์",
        "nameEn": "Study of Linguistic Research Works on Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201304",
        "nameTh": "ภาษาไทยในมุมมองแบบลักษณ์ภาษา",
        "nameEn": "Typological Perspectives on Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201314",
        "nameTh": "ลีลาในภาษาไทย",
        "nameEn": "Styles in Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201315",
        "nameTh": "การศึกษาภาษาไทยในฐานะภาษาที่สอง",
        "nameEn": "Study of Thai as a Second Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201316",
        "nameTh": "ภาษาไทยกับการสือสารองค์กร",
        "nameEn": "Thai for Communication in Enterprises",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201323",
        "nameTh": "แนามวิทยาภาษาไทย",
        "nameEn": "Thai Onomastics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201335",
        "nameTh": "แนบบเรียนภาษาและวรรณคดิไทย",
        "nameEn": "Textbooks on Thai Language and Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201336",
        "nameTh": "อักษรไทยเหนือและไทยอิสาน",
        "nameEn": "Northern and North-Eastern Thai Scripts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201337",
        "nameTh": "ภาษาในบริบทสังคมและวัฒนธรรมไทย",
        "nameEn": "Thai Language in Thai Socio-cultural Context",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201355",
        "nameTh": "ศิลปะการอ่านและแต่งคําประพันธ์ไทย",
        "nameEn": "Art of Reading and Composing Thai Versification",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201362",
        "nameTh": "กวรรณคดีพระราชหัตถเลขา",
        "nameEn": "Royal Letters",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201364",
        "nameTh": "กวรรณคดีกับการแสดง",
        "nameEn": "Literature and the Performing Arts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201370",
        "nameTh": "พระราชนิพนธ์ในพระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดช3 (3-0-6)",
        "nameEn": "King Rama IX",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201372",
        "nameTh": "พระราชนิพนธ์ในพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว",
        "nameEn": "King Rama V",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201373",
        "nameTh": "งานเสจียรโกเศศและนาคะประทีป",
        "nameEn": "Sathiankoset and Nakhaprathip",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201374",
        "nameTh": "พระนิพนธ์พระราชวรวงศ์เธอกรมหมื่นพิทยาลงกรณ",
        "nameEn": "Prince Ratchani",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2201385",
        "nameTh": "การศึกษาวัฒนธรรมวรรณศิลป์ไทย",
        "nameEn": "Studies of Thai Literary Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "english": {
    "id": "english",
    "nameTh": "สาขาวิชาภาษาอังกฤษ",
    "nameEn": "English Major",
    "totalCredits": "147",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2202111",
        "nameTh": "ภาษาอังกฤษ 1",
        "nameEn": "English |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2202112",
        "nameTh": "ภาษาอังกฤษ 2",
        "nameEn": "English II",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2202224",
        "nameTh": "ระบบเสียงและโครงสร้างภาษาอังกฤษขั้นต้น",
        "nameEn": "Introduction to English Sound System and Structure",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2202234",
        "nameTh": "การศึกษาวรรณกรรมอังกฤษเบื้องต้น",
        "nameEn": "Introduction to the Study of English Literature",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2202266",
        "nameTh": "ภูมิหลังของวรรณคดีอังกฤษ",
        "nameEn": "Background to British Literature",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2202267",
        "nameTh": "ภูมิหลังของวรรณคดีอเมริกัน",
        "nameEn": "Background to American Literature",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2209261",
        "nameTh": "พื้นฐานการเขียนโปรแกรมเพื่อการประมวลผลภาษาธรรมชาติ",
        "nameEn": "Basic Programming for Natural Language Processing",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2207102",
        "nameTh": "ปรัชญาทั่วไป",
        "nameEn": "General Philosophy",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2209161",
        "nameTh": "ภาษาทัศนา",
        "nameEn": "Introduction to Language",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2201152",
        "nameTh": "กว)วรรณคดิไทย",
        "nameEn": "Thai Literature",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2204182",
        "nameTh": "อารยธรรมตะวันตก",
        "nameEn": "Western Civilization",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2204181",
        "nameTh": "อารยธรรมตะวันออก",
        "nameEn": "Eastern Civilization",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2205200",
        "nameTh": "มนุษย์กับภูมิศาสตร์",
        "nameEn": "Man and Geography",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2208102",
        "nameTh": "ศิลปะการละครกับชีวิตประจําวัน",
        "nameEn": "Introduction to Dramatic Arts",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2202201",
        "nameTh": "ทักษะการพูดภาษาอังกฤษเชิงวิชาการ",
        "nameEn": "Academic English Oral Skills",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202202",
        "nameTh": "เรียงความอังกฤษ 1",
        "nameEn": "English Composition |",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202208",
        "nameTh": "การสนทนาและอภิปรายภาษาอังกฤษ",
        "nameEn": "English Conversation and Discussion",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202217",
        "nameTh": "ทักษะการอ่านอังกฤษ",
        "nameEn": "English Reading Skills",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202302",
        "nameTh": "เรียงความอังกฤษ 2",
        "nameEn": "English Composition II",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202304",
        "nameTh": "การเขียนภาษาอังกฤษธุรกิจ",
        "nameEn": "English Business Writing",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202374",
        "nameTh": "เรื่องแต่งและเรื่องจริงในร้อยแก้วภาษาอังกฤษ",
        "nameEn": "Fiction and Fact in English Prose",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2202324",
        "nameTh": "สัทศาสตร์เพื่อการออกเสียงภาษาอังกฤษ",
        "nameEn": "Phonetics for English Pronunciation",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202326",
        "nameTh": "กวทากยสัมพันธ์ภาษาอังกฤษ",
        "nameEn": "English Syntax",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202327",
        "nameTh": "อรรถศาสตร์และวัจนปฏิบัติศาสตร์ภาษาอังกฤษเบื้องต้น",
        "nameEn": "Introduction to English Semantics and Pragmatics",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202328",
        "nameTh": "ปริจเฉทภาษาอังกฤษ",
        "nameEn": "English Discourse",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202124",
        "nameTh": "แปลอังกฤษขั้นต้น",
        "nameEn": "Introduction to Translation",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202313",
        "nameTh": "แปลอังกฤษ-ไทย",
        "nameEn": "แปลอังกฤษ-ไทย",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202314",
        "nameTh": "แปลไทย-อังกฤษ 1",
        "nameEn": "Translation: Thai - English |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202263",
        "nameTh": "ภูมิหลังทางเทวตํานานและคัมภีร์ไบเบิลในวรรณกรรมอังกฤษ",
        "nameEn": "Mythological and Biblical Background to English Literature",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202340",
        "nameTh": "วรรณกรรมร้อยแก้วอังกฤษศตวรรษที่ 19",
        "nameEn": "Nineteenth—Century British Fiction",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202341",
        "nameTh": "วรรณกรรมอเมริกันศตวรรษที่ 19",
        "nameEn": "Nineteenth-Century American Literature",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202342",
        "nameTh": "บทละครศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "Drama from the Twentieth Century to the Present",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202344",
        "nameTh": "วรรณกรรมโลกร่วมสมัยที่ประพันธ์เป็นภาษาอังกฤษ",
        "nameEn": "Contemporary World Literature in English",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202345",
        "nameTh": "กวีนิพนธ์อังกฤษตั้งแต่ยุคอลิซาบีธันถึงยุคออกัสต้น",
        "nameEn": "British Poetry from the Elizabethans to the Augustans",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202349",
        "nameTh": "กกวีนิพนธ์แห่งการขบถจากยุคโรแมนติกถึงยุควิกตอเรียน",
        "nameEn": "The Poetry of Rebellion: The Romantics to the Victorians",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202441",
        "nameTh": "วรรณกรรมร้อยแก้วอังกฤษศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "British Fiction from the Twentieth Century to the Present",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202442",
        "nameTh": "วรรณกรรมร้อยแก้วอเมริกันศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "American Fiction from the Twentieth Century to the Present",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202445",
        "nameTh": "กวีนิพนธ์อังกฤษศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "British Poetry from the Twentieth Century to the Present",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202446",
        "nameTh": "กวีนิพนธ์อเมริกันศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "American Poetry from the Twentieth Century to the Present",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2202450",
        "nameTh": "เชกสเปียร์",
        "nameEn": "Shakespeare",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      }
    ]
  },
  "history": {
    "id": "history",
    "nameTh": "สาขาวิชาประวัติศาสตร์",
    "nameEn": "History Major",
    "totalCredits": "129-153",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2204591",
        "nameTh": "เอกัตศึกษา 1        3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 1        3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2204592",
        "nameTh": "เอกัตศึกษา 2        3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 2        3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2204593",
        "nameTh": "เอกัตศึกษา 3        3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 3        3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2204594",
        "nameTh": "เอกัตศึกษา 4        3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 4        3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2204597",
        "nameTh": "ปริญญานิพนธ์ 1        4 หน่วยกิต",
        "nameEn": "ปริญญานิพนธ์ 1        4 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2204598",
        "nameTh": "ปริญญานิพนธ์ 2        4 หน่วยกิต",
        "nameEn": "ปริญญานิพนธ์ 2        4 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2204201",
        "nameTh": "ประวัติศาสตร์ไทยก่อนสมัยใหม่",
        "nameEn": "Pre-Modern Thai History",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2204202",
        "nameTh": "ประวัติศาสตร์ไทยสมัยใหม่",
        "nameEn": "Modern Thai History",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2204351",
        "nameTh": "ประวัติศาสตร์ตะวันออกกลาง",
        "nameEn": "History of the Middle East",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204370",
        "nameTh": "ประวัติศาสตร์เอเชียตะวันออกเฉียงใต้",
        "nameEn": "ประวัติศาสตร์เอเชียตะวันออกเฉียงใต้",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204378",
        "nameTh": "ประวัติศาสตร์ยุโรปตั้งแต่คริสต์ศตวรรษที่ 19 ถึงปัจจุบัน",
        "nameEn": "European History from the Nineteenth Century",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204388",
        "nameTh": "ประวัติศาสตร์อเมริกาตั้งแต่ ค.ศ. 1898  ถึงปัจจุบัน",
        "nameEn": "American History from 1898 to the Present",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204392",
        "nameTh": "ประวัติศาสตร์เอเชียใต้ตั้งแต่สมัยอาณานิคมถึงปัจจุบัน",
        "nameEn": "History of South Asia from the Colonial Period",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204395",
        "nameTh": "จีน ญี่ปุ่น เกาหลี สมัยคริสต์ศตวรรษที่ 20",
        "nameEn": "China, Japan, and Korea in the Twentieth Century",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204307",
        "nameTh": "ความคิดและวิธีการทางประวัติศาสตร์",
        "nameEn": "Historical Thoughts and Historical Methods",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2204409",
        "nameTh": "ส้ัมมนาประวัติศาสตร์ไทย",
        "nameEn": "Seminar in Thai History",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2204495",
        "nameTh": "หหัวข้อที่น่าสนใจในประวัติศาสตร์ยุโรป",
        "nameEn": "Selected Topics in European History",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204496",
        "nameTh": "หัวข้อที่น่าสนใจในประวัติศาสตร์เอเชียตะวันออก",
        "nameEn": "Selected Topics in East Asian History",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204497",
        "nameTh": "ทหัวข้อที่น่าสนใจในประวัติศาสตร์เอเชียตะวันออกเฉียงใต้",
        "nameEn": "Selected Topics in Southeast Asian History",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204498",
        "nameTh": "หัวข้อที่น่าสนใจในประวัติศาสตร์ไทย",
        "nameEn": "Selected Topics in Thai History",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204499",
        "nameTh": "ทหัวข้อที่น่าสนใจในประวัติศาสตร์",
        "nameEn": "Selected Topics in History",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2204204",
        "nameTh": "ประวัติศาสตร์การท่องเที่ยว",
        "nameEn": "History of Tourism",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204309",
        "nameTh": "ประวัติศาสตร์เอเชียตะวันออกเฉียงใต้ร่วมสมัย",
        "nameEn": "Contemporary History of Southeast Asia",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204351",
        "nameTh": "ประวัติศาสตร์ตะวันออกกลาง",
        "nameEn": "History of the Middle East",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204352",
        "nameTh": "ประวัติศาสตร์สังคมและวัฒนธรรมโลกมุสลิม",
        "nameEn": "Social and Cultural History of Islamic World",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204362",
        "nameTh": "ประวัติศาสตร์ท้องถิ่นไทย",
        "nameEn": "Local History of Thailand",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204363",
        "nameTh": "ประวัติศาสตร์สังคมไทย",
        "nameEn": "Social History of Thailand",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204365",
        "nameTh": "%ประวัติศาสตร์ศิลปะของประเทศไทย",
        "nameEn": "Art History of Thailand",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204366",
        "nameTh": "ประวัติศาสตร์ความสัมพันธ์ระหว่างไทยกับต่างประเทศ",
        "nameEn": "History of Relations between Thailand and Other Countries",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204371",
        "nameTh": "ประวัติศาสตร์เอเชียตะวันออกเฉียงใต้",
        "nameEn": "ประวัติศาสตร์เอเชียตะวันออกเฉียงใต้",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204373",
        "nameTh": "ประวัติศาสตร์เอเชียตะวันออกเฉียงใต้ถึงคริสต์ศตวรรษที่ 13",
        "nameEn": "Southeast Asian History to the Thirteenth Century",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204374",
        "nameTh": "โประวัติศาสตร์ศิลปะเอเชียตะวันออกเฉียงใต้",
        "nameEn": "Art History of Southeast Asia",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204375",
        "nameTh": "ประวัติศาสตร์พหุสังคมในเอเชียตะวันออกเฉียงใต้",
        "nameEn": "History of Plural Society in Southeast Asia",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204376",
        "nameTh": "ประวัติศาสตร์ยุโรปตั้งแต่คริสต์ศตวรรษที่ 5",
        "nameEn": "ประวัติศาสตร์ยุโรปตั้งแต่คริสต์ศตวรรษที่ 5",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204377",
        "nameTh": "ประวัติศาสตร์ยุโรปตั้งแต่คริสต์ศตวรรษที่ 16",
        "nameEn": "ประวัติศาสตร์ยุโรปตั้งแต่คริสต์ศตวรรษที่ 16",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204382",
        "nameTh": "ยุโรปหลังสงครามโลกครั้งที่ 2",
        "nameEn": "Europe after World War II",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204387",
        "nameTh": "ประวัติศาสตร์อเมริกาตั้งแต่สมัยอาณานิคมถึง",
        "nameEn": "ประวัติศาสตร์อเมริกาตั้งแต่สมัยอาณานิคมถึง",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204390",
        "nameTh": "ประวัติศาสตร์และอารยธรรมเอเชียใต้ก่อนสมัยอาณานิคม »3 (3-0-6)",
        "nameEn": "History and Civilization of South Asia before",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204396",
        "nameTh": "ประวัติศาสตร์สังคมจีน ญีปุ่น เกาหลี",
        "nameEn": "Social History of China, Japan and Korea",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2204407",
        "nameTh": "จีนหลังสงครามโลกครั้งที่ 2",
        "nameEn": "China after the Second World War",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      }
    ]
  },
  "geography": {
    "id": "geography",
    "nameTh": "สาขาวิชาภูมิศาสตร์และภูมิสารสนเทศ",
    "nameEn": "Geography and Geoinformatics Major",
    "totalCredits": "135",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2205211",
        "nameTh": "ระบบกายภาพในสภาพแวดล้อม",
        "nameEn": "Physical Systems of the Environment",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2205221",
        "nameTh": "ภูมิศาสตร์มนุษย์เบื้องต้น",
        "nameEn": "Introduction to Human Geography",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2205314",
        "nameTh": "ทรัพยากรและสิ่งแวดล้อม",
        "nameEn": "Resources and Environment",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2205341",
        "nameTh": "ภูมิศาสตร์ประเทศไทย",
        "nameEn": "Geography of Thailand",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2205352",
        "nameTh": "หลักการทําแผนที่",
        "nameEn": "Principles of Cartography",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2205215",
        "nameTh": "กการรับรู้จากระยะไกล 1",
        "nameEn": "Remote Sensing |",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2205216",
        "nameTh": "ระบบสารสนเทศภูมิศาสตร์ 1",
        "nameEn": "Geographic Information System |",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2205223",
        "nameTh": "ภูมิศาสตร์การตั้งถิ่นฐานขั้นต้น",
        "nameEn": "Introduction to Geography of Settlement",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2205375",
        "nameTh": "แนแนวความคิดทางภูมิศาสตร์",
        "nameEn": "Geographic Thoughts",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2205477",
        "nameTh": "สถิติศาสตร์เซชิงพื้นที่สําหรับนักภูมิศาสตร์",
        "nameEn": "Spatial Statistics for Geographers",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2205310",
        "nameTh": "การเปลี่ยนแปลงภูมิอากาศและการจัดการสิ่งแวดล้อม",
        "nameEn": "Climate Change and Environmental Management",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205311",
        "nameTh": "อุทกวิทยาเชิงภูมิศาสตร์",
        "nameEn": "Geographical Hydrology",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205312",
        "nameTh": "หลักการธรณีสัณฐานวิทยา",
        "nameEn": "Principles of Geomorphology",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205313",
        "nameTh": "อากาศวิทยา",
        "nameEn": "Climatology",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205315",
        "nameTh": "กการรับรู้จากระยะไกล 2",
        "nameEn": "Remote Sensing Il",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205316",
        "nameTh": "ระบบสารสนเทศภูมิศาสตร์ 2",
        "nameEn": "Geographic Information System II",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205317",
        "nameTh": "การเขียนโปรแกรมคอมพิวเตอร์สําหรับนักภูมิศาสตร์ 1",
        "nameEn": "Computer Programming for Geographers |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205349",
        "nameTh": "พลวัตธรณีสัณฐานบริเวณชายฝัง",
        "nameEn": "Coastal Morphodynamics",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205364",
        "nameTh": "โฟโตแกรมเมตรีสําหรับนักภูมิศาสตร์",
        "nameEn": "Photogrammetry for Geographers",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205417",
        "nameTh": "การเขียนโปรแกรมคอมพิวเตอร์สําหรับนักภูมิศาสตร์ 2",
        "nameEn": "Computer Programming for Geographers II",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205476",
        "nameTh": "ฐานข้อมูลเชิงพื้นที่สําหรับนักภูมิศาสตร์",
        "nameEn": "Spatial Database for Geographers",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205479",
        "nameTh": "ระบบภูมิสารสนเทศเพื่อการจัดการภัยธรรมชาติ",
        "nameEn": "Geoinformatics for Natural Hazard Management",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205222",
        "nameTh": "ภภูมิศาสตร์เศรษฐกิจ",
        "nameEn": "Economic Geography",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205231",
        "nameTh": "ภูมิศาสตร์การท่องเที่ยว",
        "nameEn": "Geography of Tourism",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205232",
        "nameTh": "ภูมิศาสตร์การท่องเที่ยวในกลุ่มประชาคมอาเซียน",
        "nameEn": "Geography of ASEAN Tourism",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205315",
        "nameTh": "กการรับรู้จากระยะไกล 2",
        "nameEn": "Remote Sensing Il",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205316",
        "nameTh": "ระบบสารสนเทศภูมิศาสตร์ 2",
        "nameEn": "Geographic Information System II",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205317",
        "nameTh": "การเขียนโปรแกรมคอมพิวเตอร์สําหรับนักภูมิศาสตร์ 1",
        "nameEn": "Computer Programming for Geographers |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205318",
        "nameTh": "กภูมิศาสตร์อาเซียน",
        "nameEn": "Geography of ASEAN",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205324",
        "nameTh": "ภูมิศาสตร์อุตสาหกรรม",
        "nameEn": "Geography of Manufacturing",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205332",
        "nameTh": "ภูมิศาสตร์การเมือง",
        "nameEn": "Political Geography",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205333",
        "nameTh": "ภูมิศาสตร์ประชากร",
        "nameEn": "Geography of Population",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205334",
        "nameTh": "ภูมิศาสตร์กับการจัดการทรัพยากรท่องเที่ยว",
        "nameEn": "Geography and Tourist Resources Management",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205337",
        "nameTh": "ภูมิศาสตร์เมือง 1",
        "nameEn": "Urban Geography |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205338",
        "nameTh": "การพัฒนาเมืองของภูมิภาคเอเชียตะวันออกเฉียงใต้",
        "nameEn": "Southeast Asian Urban Development",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205339",
        "nameTh": "ภูมิรัฐศาสตร์",
        "nameEn": "Geopolitics",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205345",
        "nameTh": "ภูมิยุทธศาสตร์ของอาเซียน",
        "nameEn": "Geostrategy of ASEAN",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205347",
        "nameTh": "ภูมิโบราณคดี",
        "nameEn": "Geo — Archaeology",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205364",
        "nameTh": "โฟโตแกรมเมตรีสําหรับนักภูมิศาสตร์",
        "nameEn": "Photogrammetry for Geographers",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2205417",
        "nameTh": "การเขียนโปรแกรมคอมพิวเตอร์สําหรับนักภูมิศาสตร์ 2",
        "nameEn": "Computer Programming for Geographers II",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      }
    ]
  },
  "information_studies": {
    "id": "information_studies",
    "nameTh": "สาขาวิชาสารสนเทศศึกษา",
    "nameEn": "Information Studies Major",
    "totalCredits": "129",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2206212",
        "nameTh": "ภูมิทัศน์สารสนเทศ",
        "nameEn": "Information Landscapes",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2205317",
        "nameTh": "กการเขียนโปรแกรมคอมพิวเตอร์สําหรับนักภูมิศาสตร์ 1",
        "nameEn": "Computer Programming for Geographers |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206214",
        "nameTh": "สังคมสารสนเทศ",
        "nameEn": "Information Society",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206249",
        "nameTh": "การคิดเชิงระบบสําหรับประเด็นทางมนุษยศาสตร์",
        "nameEn": "Systematic Thinking for Issues in Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206283",
        "nameTh": "ระบบค้นคืนสารสนเทศ",
        "nameEn": "Information Retrieval System",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206289",
        "nameTh": "การสื่อสารข้อมูลและเครือข่ายในงานสารสนเทศ",
        "nameEn": "Data Communications and Networking in",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206290",
        "nameTh": "/พื้นฐานมนุษยศาสตร์ดิจิทัล",
        "nameEn": "Introduction to Digital Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206386",
        "nameTh": "การออกแบบส่วนต่อประสานกับผู้ใช้ในงานสารสนเทศ",
        "nameEn": "User Interface Design in Information Work",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206415",
        "nameTh": "การตลาดและการประชาสัมพันธ์สําหรับองค์กรสารสนเทศ »3 (3-0-6)",
        "nameEn": "Marketing and Public Relations for",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206484",
        "nameTh": "การประมวลสารสนเทศสําเร็จรูป",
        "nameEn": "Information Repackaging",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206285",
        "nameTh": "การแปลงทรัพยากรสารสนเทศเให้อยู่ในรูปดิจิทัล",
        "nameEn": "Digitization of Information Resouces",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206313",
        "nameTh": "การสอนการรู้สารสนเทศ",
        "nameEn": "Information Literacy Instructions",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206315",
        "nameTh": "=. gananrsWawWadieluy",
        "nameEn": "The Modern Publishing Trade",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206352",
        "nameTh": "ววิชาชีพบรรณาธิการ",
        "nameEn": "Editorial Profession",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206353",
        "nameTh": "เสวนาบรรณาธิการ",
        "nameEn": "Editorial Discussion",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206358",
        "nameTh": "แหล่งสารสนเทศทางธุรกิจ",
        "nameEn": "Business Information Sources",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206366",
        "nameTh": "สถิติเพื่อการวิจัยด้านมนุษยศาสตร์",
        "nameEn": "Statistics for Humanities Research",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206375",
        "nameTh": "การจัดการจดหมายเหตุ",
        "nameEn": "Archives Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206376",
        "nameTh": "การจัดการสารสนเทศมรดกทางวัฒนธรรม",
        "nameEn": "Cultural Heritage Information Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206385",
        "nameTh": "การจัดการฐานข้อมูลสําหรับมนุษยศาสตร์",
        "nameEn": "Database Management for the Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206437",
        "nameTh": "การจัดการความรู้ในองค์กร",
        "nameEn": "Knowledge Management in Organizations",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206439",
        "nameTh": "การจัดการข้อมูลวิจัย",
        "nameEn": "Research Data Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206442",
        "nameTh": "เครื่องมือสําหรับมนุษยศาสตร์ดิจิทัล",
        "nameEn": "Tools for Digital Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206489",
        "nameTh": "กการศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206212",
        "nameTh": "ภูมิทัศน์สารสนเทศ",
        "nameEn": "Information Landscapes",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206214",
        "nameTh": "สังคมสารสนเทศ",
        "nameEn": "Information Society",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206249",
        "nameTh": "การคิดเชิงระบบสําหรับประเด็นทางมนุษยศาสตร์",
        "nameEn": "Systematic Thinking for Issues in Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206283",
        "nameTh": "ระบบค้นคืนสารสนเทศ",
        "nameEn": "Information Retrieval System",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206285",
        "nameTh": "การแปลงทรัพยากรสารสนเทศเให้อยู่ในรูปดิจิทัล",
        "nameEn": "Digitization of Information Resouces",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206289",
        "nameTh": "การสื่อสารข้อมูลและเครือข่ายในงานสารสนเทศ",
        "nameEn": "Data Communications and Networking in",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206290",
        "nameTh": "/พื้นฐานมนุษยศาสตร์ดิจิทัล",
        "nameEn": "Introduction to Digital Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206313",
        "nameTh": "การสอนการรู้สารสนเทศ",
        "nameEn": "Information Literacy Instructions",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206315",
        "nameTh": "=. gananrsWawWadieluy",
        "nameEn": "The Modern Publishing Trade",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206352",
        "nameTh": "ววิชาชีพบรรณาธิการ",
        "nameEn": "Editorial Profession",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206353",
        "nameTh": "เสวนาบรรณาธิการ",
        "nameEn": "Editorial Discussion",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206358",
        "nameTh": "แหล่งสารสนเทศทางธุรกิจ",
        "nameEn": "Business Information Sources",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206366",
        "nameTh": "สถิติเพื่อการวิจัยด้านมนุษยศาสตร์",
        "nameEn": "Statistics for Humanities Research",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206375",
        "nameTh": "การจัดการจดหมายเหตุ",
        "nameEn": "Archives Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206376",
        "nameTh": "การจัดการสารสนเทศมรดกทางวัฒนธรรม",
        "nameEn": "Cultural Heritage Information Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206385",
        "nameTh": "การจัดการฐานข้อมูลสําหรับมนุษยศาสตร์",
        "nameEn": "Database Management for the Humanities",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "philosophy": {
    "id": "philosophy",
    "nameTh": "สาขาวิชาปรัชญา",
    "nameEn": "Philosophy Major",
    "totalCredits": "129-131",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2207591",
        "nameTh": "เอกัตศึกษา 1            3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 1            3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2207592",
        "nameTh": "เอกัตศึกษา 2        3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 2        3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2207593",
        "nameTh": "เอกัตศึกษา 3        3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 3        3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2207594",
        "nameTh": "เอกัตศึกษา 4            3 หน่วยกิต",
        "nameEn": "เอกัตศึกษา 4            3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2207597",
        "nameTh": "ปริญญานิพนธ์ 1        4 หน่วยกิต",
        "nameEn": "ปริญญานิพนธ์ 1        4 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2207598",
        "nameTh": "ปริญญานิพนธ์ 2           4 หน่วยกิต",
        "nameEn": "ปริญญานิพนธ์ 2           4 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2207201",
        "nameTh": "ไประวัติปรัชญาตะวันตก",
        "nameEn": "History of Western Philosophy",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2207202",
        "nameTh": "ประวัติปรัชญาตะวันออก",
        "nameEn": "History of Eastern Philosophy",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2207341",
        "nameTh": "ตรรกวิทยาสัญลักษณ์",
        "nameEn": "Symbolic Logic",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2207363",
        "nameTh": "จจริยศาสตร์",
        "nameEn": "Ethics",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2207422",
        "nameTh": "อภิปรัชญาและญาณวิทยา",
        "nameEn": "Metaphysics and Epistemology",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2207203",
        "nameTh": "ปรัชญากับภาพยนตร์",
        "nameEn": "Philosophy and Films",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207301",
        "nameTh": "ปรัชญากรีก",
        "nameEn": "Greek Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207361",
        "nameTh": "สุนทรียศาสตร์",
        "nameEn": "Aesthetics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207365",
        "nameTh": "#ปรัชญาการเมือง",
        "nameEn": "Political Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207371",
        "nameTh": "ปรัชญาและวรรณคดี",
        "nameEn": "Philosophy and Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207385",
        "nameTh": "ปรัชญาอเมริกัน",
        "nameEn": "American Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207387",
        "nameTh": "ปรัชญาสตรี",
        "nameEn": "Philosophy of Women",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207423",
        "nameTh": "การศึกษาเฉพาะเรืองในปรัชญาร่วมสมัย",
        "nameEn": "Special Topics in Contemporary Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207424",
        "nameTh": "การศึกษาเฉพาะเรื่องในสุนทรียศาสตร์",
        "nameEn": "Special Topics in Aesthetics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207425",
        "nameTh": "การศึกษาเฉพาะเรื่องในปรัชญาสังคม",
        "nameEn": "Special Topics in Social Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207444",
        "nameTh": "พุทธปรัชญา",
        "nameEn": "Buddhist Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207459",
        "nameTh": "ระเบียบวิธีวิทยาทางปรัชญา",
        "nameEn": "Philosophical Methology",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207460",
        "nameTh": "การติความและความเข้าใจ",
        "nameEn": "Interpretation and Understanding",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207461",
        "nameTh": "ปรัชญาเยอรมัน",
        "nameEn": "German Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207462",
        "nameTh": "ปรัชญาฝรั่งเศส",
        "nameEn": "French Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207463",
        "nameTh": "ปรัชญาสังคมศาสตร์",
        "nameEn": "Philosophy of Social Sciences",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207464",
        "nameTh": "ปรัชญาสารสนเทศ",
        "nameEn": "Philosophy of Information",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207465",
        "nameTh": "ญาณวิทยาสังคม",
        "nameEn": "Social Epistemology",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207466",
        "nameTh": "ปรัชญาจิต",
        "nameEn": "Philosophy of Mind",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207467",
        "nameTh": "%ปรัชญาภาษา",
        "nameEn": "Philosophy of Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207472",
        "nameTh": "ปปรัชญาญี่ปุ่น",
        "nameEn": "Japanese Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207474",
        "nameTh": "ปรัชญาจีน",
        "nameEn": "Chinese Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207475",
        "nameTh": "การศึกษาเฉพาะเรื่องในปรัชญาตะวันออก",
        "nameEn": "Special Topics in Eastern Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207476",
        "nameTh": "การศึกษาเฉพาะเรื่องในพุทธปรัชญา",
        "nameEn": "Special Topics in Buddhist Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207477",
        "nameTh": "การศึกษาเฉพาะเรื่องในประวัติปรัชญา",
        "nameEn": "Special Topics in History of Philosophy",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207478",
        "nameTh": "การศึกษาเฉพาะเรื่องในจริยศาสตร์",
        "nameEn": "Special Topics in Ethics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207479",
        "nameTh": "การศึกษาเฉพาะเรื่องในอภิปรัชญาและญาณวิทยา",
        "nameEn": "Special Topics in Metaphysics and Epistemology",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207480",
        "nameTh": "การศึกษาเฉพาะเรื่องในตรรกวิทยา",
        "nameEn": "Special Topics in Logic",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2207483",
        "nameTh": "ปรัชญาเพศและความรัก",
        "nameEn": "Philosophy of Sex and Love",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "dramatic_arts": {
    "id": "dramatic_arts",
    "nameTh": "สาขาวิชาศิลปการละคร",
    "nameEn": "Dramatic Arts Major",
    "totalCredits": "129-153",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2208202",
        "nameTh": "กการวิเคราะห์บทละคร",
        "nameEn": "Play Analysis",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2208212",
        "nameTh": "การแสดง 1",
        "nameEn": "Acting |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2208249",
        "nameTh": "การจัดแสดงและจัดการละครเวที",
        "nameEn": "Theatre Production and Management",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2208305",
        "nameTh": "ประวัติการละคร 1",
        "nameEn": "History of Theatre |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2208214",
        "nameTh": "การกํากับการแสดง 1",
        "nameEn": "Directing |",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2208349",
        "nameTh": "การกํากับเวที",
        "nameEn": "Stage Management",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2208206",
        "nameTh": "วรรณกรรมการละครสากล 1",
        "nameEn": "World Dramatic Literature |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208207",
        "nameTh": "วรรณกรรมการละครสากล 2",
        "nameEn": "World Dramatic Literature II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208208",
        "nameTh": "วรรณกรรมการละครสากล 3",
        "nameEn": "World Dramatic Literature Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208243",
        "nameTh": "ภาพและเสียงในละครเวที",
        "nameEn": "Sight and Sound in Theatre",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208246",
        "nameTh": "งานด้านฉากและเวที",
        "nameEn": "Stagecraft",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208316",
        "nameTh": "การเต้น-รําในละคร",
        "nameEn": "Dance in Theatre",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208317",
        "nameTh": "กการละครไทย",
        "nameEn": "Thai Theatre",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208337",
        "nameTh": "การเขียนบทละคร 1",
        "nameEn": "Playwriting |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208361",
        "nameTh": "การออกแบบฉาก 1",
        "nameEn": "Scene Design |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208362",
        "nameTh": "การออกแบบเครื่องแต่งกายสําหรับละคร 1",
        "nameEn": "Costume Design |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208306",
        "nameTh": "ประวัติการละคร 2",
        "nameEn": "History of Theatre II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208312",
        "nameTh": "การแสดง 2",
        "nameEn": "Acting II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208314",
        "nameTh": "การกํากับการแสดง 2",
        "nameEn": "Directing II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208318",
        "nameTh": "กการละครเอเชีย",
        "nameEn": "Asian Theatre",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208319",
        "nameTh": "การละครสําหรับเยาวชน",
        "nameEn": "Theatre for Young Audience",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208338",
        "nameTh": "งานด้านฉากและเวทีขั้นสูง",
        "nameEn": "Advanced Stagecraft",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208412",
        "nameTh": "การแสดง 3",
        "nameEn": "Acting Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208414",
        "nameTh": "การกํากับการแสดง 3",
        "nameEn": "Directing Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208437",
        "nameTh": "การเขียนบทละคร 2",
        "nameEn": "Playwriting II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208461",
        "nameTh": "การออกแบบฉาก 2",
        "nameEn": "Scene Design I",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208462",
        "nameTh": "การออกแบบเครื่องแต่งกายสําหรับละคร 2",
        "nameEn": "Costume Design Il",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208488",
        "nameTh": "กการเขียนบทสําหรับโทรทัศน์",
        "nameEn": "Writing for Television",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208489",
        "nameTh": "การเขียนบทสําหรับภาพยนตร์",
        "nameEn": "การเขียนบทสําหรับภาพยนตร์",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208471",
        "nameTh": "ศิลปนิพนธ์: การบริหารจัดการละคร",
        "nameEn": "Senior Project : Theatre Management",
        "credits": 4,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208472",
        "nameTh": "กการศึกษาอิสระ: กํากับการแสดง",
        "nameEn": "Independent Study: Directing",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208473",
        "nameTh": "การศึกษาอิสระ: การแสดง",
        "nameEn": "Independent Study: Acting",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208474",
        "nameTh": "การศึกษาอิสระ: เขียนบท",
        "nameEn": "Independent Study: Playwriting",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208475",
        "nameTh": "กการศึกษาอิสระ: การออกแบบ",
        "nameEn": "Independent Study: Design",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208476",
        "nameTh": "การศึกษาอิสระ: การจัดการแสดงและจัดการละครเวที",
        "nameEn": "Independent Study:Theatre Production and Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208477",
        "nameTh": "กการศึกษาอิสระ: การกํากับเวที",
        "nameEn": "Independent Study: Stage Management",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208478",
        "nameTh": "การศึกษาอิสระ: วรรณกรรมการละครและการวิจารณ์",
        "nameEn": "Independent Study: Dramatic Literature and Criticism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208490",
        "nameTh": "ศิลปนิพนธ์: การออกแบบฉากสําหรับละคร",
        "nameEn": "Senior Project: Scene Design",
        "credits": 4,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208491",
        "nameTh": "ศิลปนิพนธ์: การออกแบบเครื่องแต่งกายสําหรับละคร",
        "nameEn": "Senior Project: Costume Design",
        "credits": 4,
        "group": "วิชาเลือก"
      },
      {
        "code": "2208492",
        "nameTh": "ศิลปนิพนธ์: การเขียนบทละคร",
        "nameEn": "Senior Project: Playwriting",
        "credits": 4,
        "group": "วิชาเลือก"
      }
    ]
  },
  "south_asian_languages": {
    "id": "south_asian_languages",
    "nameTh": "สาขาวิชาภาษาเอเชียใต้",
    "nameEn": "South Asian Languages Major",
    "totalCredits": "129-153",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2221251",
        "nameTh": "สันสกฤต 1",
        "nameEn": "Sanskrit |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2221252",
        "nameTh": "สันสกฤต 2",
        "nameEn": "Sanskrit II",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2221389",
        "nameTh": "อารยธรรมอินเดีย",
        "nameEn": "Indian Civilization",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2221101",
        "nameTh": "บาลี1",
        "nameEn": "Pali |",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221102",
        "nameTh": "บาลิ2",
        "nameEn": "Pali Il",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221111",
        "nameTh": "ภาษาฮินดี 1",
        "nameEn": "Hindi |",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221112",
        "nameTh": "ภาษาฮินดี 2",
        "nameEn": "Hindi II",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221213",
        "nameTh": "ไประวัติวรรณกรรมฮินดี",
        "nameEn": "History of Hindi Literature",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221334",
        "nameTh": "ซปริทัศน์วรรณคดีบาลี",
        "nameEn": "Survey of Pali Literature",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221385",
        "nameTh": "%ปริทัศน์วรรณคดีสันสกฤต",
        "nameEn": "Survey of Sanskrit Literature",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221215",
        "nameTh": "ภาษาฮินดี 3",
        "nameEn": "Hindi Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221216",
        "nameTh": "ภาษาฮินดี 4",
        "nameEn": "Hindi IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221311",
        "nameTh": "การอ่านบาลี 1",
        "nameEn": "Pali Reading |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221312",
        "nameTh": "การอ่านบาลี 2",
        "nameEn": "Pali Reading I",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221313",
        "nameTh": "การอ่านสันสกฤต 1",
        "nameEn": "Sanskrit Reading |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221314",
        "nameTh": "การอ่านสันสกฤต 2",
        "nameEn": "Sanskrit Reading Il",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221315",
        "nameTh": "เทพปกรณัมอินเดีย",
        "nameEn": "Indian Mythology",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221433",
        "nameTh": "พุทธธรรมในพระไตรปิฎกบาลิ",
        "nameEn": "Buddhist Teaching in the Pali Canon",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221485",
        "nameTh": "อารยธรรมพุทธศาสนา",
        "nameEn": "Buddhist Civilization",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221212",
        "nameTh": "ภาษาฮินดีในสื่อ",
        "nameEn": "Hindi in Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221321",
        "nameTh": "วรรณกรรมฮินดียุคต้นและยุคกลาง",
        "nameEn": "Hindi Literature in the Earliest and Medieval Periods",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221402",
        "nameTh": "การอ่านบาลิ 3",
        "nameEn": "Pali Reading Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221404",
        "nameTh": "การอ่านบาลิ 4",
        "nameEn": "Pali Reading IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221405",
        "nameTh": "กการอ่านสันสกฤต 3",
        "nameEn": "Sanskrit Reading Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221406",
        "nameTh": "กการอ่านสันสกฤต 4",
        "nameEn": "Sanskrit Reading IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221421",
        "nameTh": "บทละครสันสกฤต",
        "nameEn": "Sanskrit Drama",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221422",
        "nameTh": "วรรณคดีพุทธศาสนาภาษาสันสกฤต",
        "nameEn": "Buddhist Sanskrit Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221423",
        "nameTh": "ภาษาอินโดอารยันยุคกลาง",
        "nameEn": "Middle Indo-Aryan Languages",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221430",
        "nameTh": "ภาษาฮินดีสําหรับการท่องเที่ยว",
        "nameEn": "Hindi for Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221432",
        "nameTh": "การแปลภาษาฮินดีเพื่อวิชาชีพ",
        "nameEn": "Hindi Translation for Profession",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221492",
        "nameTh": "วรรณคดีบาลีที่แต่งในศรีลังกา ไทย และพม่า",
        "nameEn": "Pali Literature Composed in Sri Lanka,",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221494",
        "nameTh": "ภาษาศาสตร์ภาษาบาลีสันสกฤต",
        "nameEn": "Pali-Sanskrit Linguistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221497",
        "nameTh": "วรรณกรรมอินเดียปัจจุบัน",
        "nameEn": "Modern Indian Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221499",
        "nameTh": "งานวิจัยอิสระ",
        "nameEn": "Independent Research",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2221389",
        "nameTh": "อารยธรรมอินเดีย",
        "nameEn": "Indian Civilization",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2221101",
        "nameTh": "บาลิ1",
        "nameEn": "Pali |",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221102",
        "nameTh": "ula 2",
        "nameEn": "Pali Il",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221111",
        "nameTh": "ภาษาฮินดี 1",
        "nameEn": "Hindi |",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221112",
        "nameTh": "ภาษาฮินดี 2",
        "nameEn": "Hindi II",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2221251",
        "nameTh": "สันสกฤต 1",
        "nameEn": "Sanskrit |",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      }
    ]
  },
  "chinese": {
    "id": "chinese",
    "nameTh": "สาขาวิชาภาษาจีน",
    "nameEn": "Chinese Major",
    "totalCredits": "135-137",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2222342",
        "nameTh": "วิวัฒนาการตัวอักษรจีน",
        "nameEn": "Evolution of the Chinese Characters",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2222221",
        "nameTh": "ทักษะการฟังและการพูดภาษาจีน 1",
        "nameEn": "Chinese Listening and Speaking Skills |",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2222222",
        "nameTh": "ทักษะการฟังและการพูดภาษาจีน 2",
        "nameEn": "Chinese Listening and Speaking Skills II",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2222121",
        "nameTh": "ภาษาจีนกลางสําหรับผู้เริ่มเรียน 1",
        "nameEn": "Chinese for Beginners |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222122",
        "nameTh": "ภาษาจีนกลางสําหรับผู้เริ่มเรียน 2",
        "nameEn": "Chinese for Beginners II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222203",
        "nameTh": "กภาษาจีนกลาง 3",
        "nameEn": "Chinese Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222204",
        "nameTh": "ภาษาจีนกลาง 4",
        "nameEn": "Chinese IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222311",
        "nameTh": "การพูดภาษาจีนในที่ชุมนุมชน",
        "nameEn": "Chinese Public Speaking",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2222437",
        "nameTh": "การเขียนภาษาจีน 1",
        "nameEn": "Chinese Writing |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2222417",
        "nameTh": "ภาษาจีนจากสื่อโสตทัศน์",
        "nameEn": "Chinese from Audio-Visual Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222438",
        "nameTh": "การเขียนภาษาจีน 2",
        "nameEn": "Chinese Writing II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222341",
        "nameTh": "ไวยากรณ์จีนกลาง",
        "nameEn": "Chinese Grammar",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222343",
        "nameTh": "สัทศาสตร์ภาษาจีนกลาง",
        "nameEn": "Chinese Phonetics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222480",
        "nameTh": "กการศึกษาเปรียบต่างภาษาจีน-ไทย",
        "nameEn": "Chinese-Thai Contrastive Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222451",
        "nameTh": "/ประวัติวรรณคดีจีน 1",
        "nameEn": "History of Chinese Literature |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222452",
        "nameTh": "ประวัติวรรณคดิจีน 2",
        "nameEn": "History of Chinese Literature I",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222453",
        "nameTh": "สัมมนาเรื่องสั้นและนวนิยายจีนสมัยใหม่",
        "nameEn": "Seminar in Modern Chinese Fiction",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222361",
        "nameTh": "ภาษาจีนด้านความสัมพันธ์ระหว่างประเทศ",
        "nameEn": "Chinese for International Relations",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222362",
        "nameTh": "ภาษาจีนธุรกิจ",
        "nameEn": "Chinese for Business",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222461",
        "nameTh": "ภาษาจีนสําหรับการท่องเที่ยว",
        "nameEn": "Chinese for Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222112",
        "nameTh": "ภาษาจีนเพื่อการสื่อสาร 2",
        "nameEn": "Chinese for Communication II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222213",
        "nameTh": "ภาษาจีนเพื่อการสื่อสาร 3",
        "nameEn": "Chinese for Communication III",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222214",
        "nameTh": "ภาษาจีนเพื่อการสื่อสาร 4",
        "nameEn": "Chinese for Communication IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222111",
        "nameTh": "ภาษาจีนเพื่อการสื่อสาร 1",
        "nameEn": "Chinese for Communication |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222227",
        "nameTh": "7ทักษะการอ่านภาษาจีน 1",
        "nameEn": "Chinese Reading Skill |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222228",
        "nameTh": "กทักษะการอ่านภาษาจีน 2",
        "nameEn": "Chinese Reading Skill II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222229",
        "nameTh": "การฟังและการพูดภาษาจีนเพื่อการสื่อสาร 1",
        "nameEn": "Chinese Listening and Speaking for Communication |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222231",
        "nameTh": "การฟังและการพูดภาษาจีนเพื่อการสื่อสาร 2",
        "nameEn": "Chinese Listening and Speaking for Communication II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222232",
        "nameTh": "%ปูริทัศน์วัฒนธรรมจีน",
        "nameEn": "Introduction to Chinese Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222331",
        "nameTh": "ทักษะการเขียนภาษาจีน",
        "nameEn": "Chinese Writing Skill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222332",
        "nameTh": "ภาษาจีนเพื่อการต่างประเทศ",
        "nameEn": "Chinese for Foreign Affairs",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222333",
        "nameTh": "ภาษาจีนเพื่อการสือสารทางธุรกิจ",
        "nameEn": "Chinese for Business Communication",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222334",
        "nameTh": "ภาษาจีนเพื่อการทดสอบมาตรฐาน",
        "nameEn": "Chinese for Standardized Tests",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222335",
        "nameTh": "ภาพยนตร์จีน",
        "nameEn": "Chinese Cinema",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222591",
        "nameTh": "เอกัตศึกษา 1",
        "nameEn": "Independent Study |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222592",
        "nameTh": "'เเอกัตศึกษา 2",
        "nameEn": "Independent Study |!",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222593",
        "nameTh": "เอกัตศึกษา 3",
        "nameEn": "Independent Study Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222594",
        "nameTh": "เอกัตศึกษา 4                       3 (1-6-2",
        "nameEn": "Independent Study IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222597",
        "nameTh": "ปริญญานิพนธ์ 1                     4 หน่วยกิต",
        "nameEn": "Senior Project |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2222598",
        "nameTh": "ปริญญานิพนธ์ 2                      4 หน่วยกิต",
        "nameEn": "Senior Project Il",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "japanese": {
    "id": "japanese",
    "nameTh": "สาขาวิชาภาษาญี่ปุ่น",
    "nameEn": "Japanese Major",
    "totalCredits": "129-153",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2223105",
        "nameTh": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 1",
        "nameEn": "Basic Japanese Conversation |",
        "credits": 1,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2223106",
        "nameTh": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 2",
        "nameEn": "Basic Japanese Conversation ||",
        "credits": 1,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2223131",
        "nameTh": "ภาษาญี่ปุ่น 1",
        "nameEn": "Japanese |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2223132",
        "nameTh": "ภาษาญี่ปุ่น 2",
        "nameEn": "Japanese ll",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2223231",
        "nameTh": "ภาษาญี่ปุ่น 3",
        "nameEn": "Japanese Ill",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2223232",
        "nameTh": "ภาษาญี่ปุ่น 4",
        "nameEn": "Japanese IV",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2223224",
        "nameTh": "การฟังและจดบันทึกภาษาญี่ปุ่น",
        "nameEn": "Japanese Listening and Note-taking",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2223281",
        "nameTh": "ปปริทัศน์วัฒนธรรมญีปุ่น",
        "nameEn": "Introduction to Japanese Culture",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2223331",
        "nameTh": "ภาษาศาสตร์ภาษาญี่ปุ่นเบื้องต้น",
        "nameEn": "Introduction to Japanese Linguistics",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2223380",
        "nameTh": "ประวัติวรรณคดีญี่ปุ่น",
        "nameEn": "History of Japanese Literature",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2223283",
        "nameTh": "ศิลปวัฒนธรรมดั้งเดิมของญี่ปุ่นในโลกปัจจุบัน",
        "nameEn": "Japanese Traditional Art and Culture in the Modern World",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223385",
        "nameTh": "วรรณคดีคลาสสิกญี่ปุ่น",
        "nameEn": "Japanese Classic Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223386",
        "nameTh": "วรรณกรรมญี่ปุ่นกับภาพยนตร์",
        "nameEn": "Japanese Literature and Film",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223403",
        "nameTh": "ภาษาญี่ปุ่นธุรกิจ 1",
        "nameEn": "Business Japanese |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223481",
        "nameTh": "นวนิยายญี่ปุ่นสมัยใหม่",
        "nameEn": "Modern Japanese Novels",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223482",
        "nameTh": "นวนิยายญี่ปุ่นร่วมสมัย",
        "nameEn": "Contemporary Japanese Novels",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223332",
        "nameTh": "ภาษาศาสตร์ภาษาญี่ปุ่นประยุกต์",
        "nameEn": "Applied Japanese Linguistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223391",
        "nameTh": "หัวข้อคัดสรรเกี่ยวกับญี่ปุ่น 1",
        "nameEn": "Selected Topics in Japanese |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223392",
        "nameTh": "หัวข้อคัดสรรเกี่ยวกับญี่ปุ่น 2",
        "nameEn": "Selected Topics in Japanese II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223465",
        "nameTh": "การแปลญี่ปุ่น -ไทย",
        "nameEn": "Translation : Japanese — Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223466",
        "nameTh": "การแปลไทย - ญี่ปุ่น",
        "nameEn": "Translation : Thai — Japanese",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223467",
        "nameTh": "การล่ามภาษาญี่ปุ่น",
        "nameEn": "Japanese Interpretation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223499",
        "nameTh": "การศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223143",
        "nameTh": "การอ่านภาษาญี่ปุ่น",
        "nameEn": "Japanese Reading",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2223251",
        "nameTh": "ภาษาญี่ปุ่นเพื่อวิชาชีพ",
        "nameEn": "Japanese for Profession",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2223181",
        "nameTh": "ปริทัศน์วรรณกรรมญี่ปุ่น",
        "nameEn": "Introduction to Japanese Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223224",
        "nameTh": "การฟังและจดบันทึกภาษาญี่ปุ่น",
        "nameEn": "Japanese Listening and Note-taking",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223243",
        "nameTh": "ญี่ปุ่นปัจจุบัน",
        "nameEn": "Japan Today",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223283",
        "nameTh": "ศิลปวัฒนธรรมดั้งเดิมของญี่ปุ่นในโลกปัจจุบัน",
        "nameEn": "Japanese Traditional Art and Culture in the Modern World",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223386",
        "nameTh": "วรรณกรรมญี่ปุ่นกับภาพยนตร์",
        "nameEn": "Japanese Literature and Film",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223391",
        "nameTh": "หัวข้อคัดสรรเกี่ยวกับญี่ปุ่น 1",
        "nameEn": "Selected Topics in Japanese |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223392",
        "nameTh": "หัวข้อคัดสรรเกี่ยวกับญี่ปุ่น 2",
        "nameEn": "Selected Topics in Japanese ||",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223482",
        "nameTh": "นวนิยายญี่ปุ่นร่วมสมัย",
        "nameEn": "Contemporary Japanese Novels",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223105",
        "nameTh": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 1",
        "nameEn": "Basic Japanese Conversation |",
        "credits": 1,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223106",
        "nameTh": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 2",
        "nameEn": "Basic Japanese Conversation ||",
        "credits": 1,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223131",
        "nameTh": "ภาษาญี่ปุ่น 1",
        "nameEn": "Japanese |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223132",
        "nameTh": "ภาษาญี่ปุ่น 2",
        "nameEn": "Japanese ll",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223105",
        "nameTh": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 1         1 หน่วยกิต",
        "nameEn": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 1         1 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223131",
        "nameTh": "ภาษาญี่ปุ่น 1                   3 หน่วยกิต",
        "nameEn": "ภาษาญี่ปุ่น 1                   3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2223106",
        "nameTh": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 2         1 หน่วยกิต",
        "nameEn": "การสนทนาภาษาญี่ปุ่นเบื้องต้น 2         1 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "korean": {
    "id": "korean",
    "nameTh": "สาขาวิชาภาษาเกาหลี",
    "nameEn": "Korean Major",
    "totalCredits": "135",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2225206",
        "nameTh": "วัฒนธรรมเกาหลิ",
        "nameEn": "Korean Culture",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2225323",
        "nameTh": "กวรรณคดีเกาหลิ",
        "nameEn": "Korean Literature",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2225412",
        "nameTh": "ไวยากรณ์ภาษาเกาหลี",
        "nameEn": "Korean Grammar",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2225101",
        "nameTh": "ภาษาเกาหลี 1",
        "nameEn": "Korean |",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2225102",
        "nameTh": "ภาษาเกาหลี 2",
        "nameEn": "Korean Il",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2225201",
        "nameTh": "ภาษาเกาหลี 3",
        "nameEn": "Korean Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225202",
        "nameTh": "ภาษาเกาหลี 4",
        "nameEn": "Korean IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225301",
        "nameTh": "ภาษาเกาหลี 5",
        "nameEn": "Korean V",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225302",
        "nameTh": "ภาษาเกาหลี 6",
        "nameEn": "Korean VI",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225401",
        "nameTh": "ภาษาเกาหลี 7",
        "nameEn": "Korean VII",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225402",
        "nameTh": "ภาษาเกาหลี 8",
        "nameEn": "Korean VIII",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225312",
        "nameTh": "ภาษาเกาหลีธุรกิจ",
        "nameEn": "Korean for Business",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225314",
        "nameTh": "ระบบเสียงภาษาเกาหลี",
        "nameEn": "Korean Sound System",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225317",
        "nameTh": "ระบบหน่วยคําภาษาเกาหลี",
        "nameEn": "Korean Morphology",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225415",
        "nameTh": "ภาษาเกาหลีเพื่อมัคคุเทศก์",
        "nameEn": "Korean for Tour Guides",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225416",
        "nameTh": "ภาษาเกาหลีทางสื่อโสตทัศน์",
        "nameEn": "Korean from Audio Visual Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225417",
        "nameTh": "ภาษาเกาหลีเป็นภาษาต่างประเทศ",
        "nameEn": "Korean as a Foreign Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225418",
        "nameTh": "ภาษาเกาหลีสําหรับการท่องเที่ยว",
        "nameEn": "Korean for Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2225217",
        "nameTh": "ภาษาศาสตร์ภาษาเกาหลีเบืองต้น                      3 หน่วยกิต",
        "nameEn": "ภาษาศาสตร์ภาษาเกาหลีเบืองต้น                      3 หน่วยกิต",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225206",
        "nameTh": "วัฒนธรรมเกาหลิ                                       3 หน่วยกิต",
        "nameEn": "วัฒนธรรมเกาหลิ                                       3 หน่วยกิต",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225323",
        "nameTh": "วรรณคดีิเกาหลี                                         3 หน่วยกิต",
        "nameEn": "วรรณคดีิเกาหลี                                         3 หน่วยกิต",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225412",
        "nameTh": "ไวยากรณ์ภาษาเกาหลี                                  3 หน่วยกิต",
        "nameEn": "XXXXXXX กลุ่มวิชาเชียวชาญ                                   6-9 หน่วยกิต",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225101",
        "nameTh": "ภาษาเกาหลี 1",
        "nameEn": "ภาษาเกาหลี 1",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225102",
        "nameTh": "ภาษาเกาหลี 2",
        "nameEn": "ภาษาเกาหลี 2",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225201",
        "nameTh": "ภาษาเกาหลี 3",
        "nameEn": "ภาษาเกาหลี 3",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225202",
        "nameTh": "ภาษาเกาหลี 4",
        "nameEn": "ภาษาเกาหลี 4",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225206",
        "nameTh": "ววัฒนธรรมเกาหลี",
        "nameEn": "ววัฒนธรรมเกาหลี",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225301",
        "nameTh": "ภาษาเกาหลี 5",
        "nameEn": "ภาษาเกาหลี 5",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225302",
        "nameTh": "ภาษาเกาหลี 6",
        "nameEn": "ภาษาเกาหลี 6",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225312",
        "nameTh": "ภาษาเกาหลีธุรกิจ",
        "nameEn": "ภาษาเกาหลีธุรกิจ",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225314",
        "nameTh": "ระบบเสียงภาษาเกาหลี",
        "nameEn": "ระบบเสียงภาษาเกาหลี",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225317",
        "nameTh": "ระบบหน่วยคําภาษาเกาหลี",
        "nameEn": "ระบบหน่วยคําภาษาเกาหลี",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225323",
        "nameTh": "วรรณคดีเกาหลี",
        "nameEn": "วรรณคดีเกาหลี",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225401",
        "nameTh": "ภาษาเกาหลี 7",
        "nameEn": "ภาษาเกาหลี 7",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225402",
        "nameTh": "ภาษาเกาหลี 8",
        "nameEn": "ภาษาเกาหลี 8",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225412",
        "nameTh": "ไวยากรณ์ภาษาเกาหลี",
        "nameEn": "ไวยากรณ์ภาษาเกาหลี",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225415",
        "nameTh": "ภาษาเกาหลีเพื่อมัคคุเทศก์",
        "nameEn": "ภาษาเกาหลีเพื่อมัคคุเทศก์",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225416",
        "nameTh": "ภาษาเกาหลีทางสื่อโสตทัศน์",
        "nameEn": "ภาษาเกาหลีทางสื่อโสตทัศน์",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225417",
        "nameTh": "ภาษาเกาหลีเป็นภาษาต่างประเทศ",
        "nameEn": "ภาษาเกาหลีเป็นภาษาต่างประเทศ",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2225418",
        "nameTh": "ภาษาเกาหลีสําหรับการท่องเที่ยว",
        "nameEn": "ภาษาเกาหลีสําหรับการท่องเที่ยว",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      }
    ]
  },
  "french": {
    "id": "french",
    "nameTh": "สาขาวิชาภาษาฝรั่งเศส",
    "nameEn": "French Major",
    "totalCredits": "129-153",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2231359",
        "nameTh": "การอ่านตัวบทภาษาฝรั่งเศส",
        "nameEn": "Reading of French Texts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231361",
        "nameTh": "วรรณคดีวิจารณ์ฝรั่งเศส",
        "nameEn": "French Literary Criticism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231370",
        "nameTh": "ทัศนศิลป์ฝรั่งเศส",
        "nameEn": "French Visual Arts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231373",
        "nameTh": "วัจนลีลาภาษาฝรั่งเศส",
        "nameEn": "French Stylistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231377",
        "nameTh": "บทละครฝรั่งเศส",
        "nameEn": "French Drama",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231378",
        "nameTh": "กวีนิพนธ์ฝรั่งเศส",
        "nameEn": "French Poetry",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231379",
        "nameTh": "นวนิยายฝรั่งเศส",
        "nameEn": "French Novel",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231380",
        "nameTh": "การศึกษาเฉพาะเรืองด้านวัฒนธรรมฝรั่งเศส",
        "nameEn": "Selected Study in French Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231473",
        "nameTh": "ปปริทัศน์ภาษาศาสตร์ฝรั่งเศส",
        "nameEn": "Introduction to French Linguistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231474",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านภาษาฝรั่งเศส",
        "nameEn": "Selected Study in French Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231475",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านวรรณคดีฝรั่งเศส",
        "nameEn": "Selected Study in French Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231476",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านความคิดฝรั่งเศส",
        "nameEn": "Selected Study in French Ideas",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231477",
        "nameTh": "นักประพันธ์ฝรั่งเศสที่เลือกสรร",
        "nameEn": "Selected French Authors",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231485",
        "nameTh": "ภาษาฝรั่งเศสด้านธุรกิจ",
        "nameEn": "French for Business",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231486",
        "nameTh": "ภาษาฝรั่งเศสด้านการท่องเที่ยว",
        "nameEn": "French for Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231410",
        "nameTh": "การค้นคว้าและเขียนรายงานภาษาฝรั่งเศส",
        "nameEn": "French Research Writing",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2231359",
        "nameTh": "การอ่านตัวบทภาษาฝรั่งเศส",
        "nameEn": "Reading of French Texts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231361",
        "nameTh": "วรรณคดีวิจารณ์ฝรั่งเศส",
        "nameEn": "French Literary Criticism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231370",
        "nameTh": "ทัศนศิลป์ฝรั่งเศส",
        "nameEn": "French Visual Arts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231373",
        "nameTh": "วัจนลีลาภาษาฝรั่งเศส",
        "nameEn": "French Stylistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231377",
        "nameTh": "บทละครฝรั่งเศส",
        "nameEn": "French Drama",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231378",
        "nameTh": "กวีนิพนธ์ฝรั่งเศส",
        "nameEn": "French Poetry",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231379",
        "nameTh": "นวนิยายฝรั่งเศส",
        "nameEn": "French Novel",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231380",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านวัฒนธรรมฝรั่งเศส",
        "nameEn": "Selected Study in French Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231473",
        "nameTh": "ปปริทัศน์ภาษาศาสตร์ฝรั่งเศส",
        "nameEn": "Introduction to French Linguistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231474",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านภาษาฝรั่งเศส",
        "nameEn": "Selected Study in French Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231475",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านวรรณคดีฝรั่งเศส",
        "nameEn": "Selected Study in French Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231476",
        "nameTh": "การศึกษาเฉพาะเรื่องด้านความคิดฝรั่งเศส",
        "nameEn": "Selected Study in French Ideas",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231477",
        "nameTh": "กนักประพันธ์ฝรั่งเศสที่เลือกสรร",
        "nameEn": "Selected French Authors",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231485",
        "nameTh": "ภาษาฝรั่งเศสด้านธุรกิจ",
        "nameEn": "French for Business",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231486",
        "nameTh": "ภาษาฝรั่งเศสด้านการท่องเที่ยว",
        "nameEn": "French for Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231245",
        "nameTh": "สัทศาสตร์ภาษาฝรั่งเศส",
        "nameEn": "French Phonetics",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2231360",
        "nameTh": "กวรรณคดีฝรั่งเศส",
        "nameEn": "French Literature",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2231359",
        "nameTh": "การอ่านตัวบทภาษาฝรั่งเศส",
        "nameEn": "Reading of French Texts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231361",
        "nameTh": "วรรณคดีวิจารณ์ฝรั่งเศส",
        "nameEn": "French Literary Criticism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231370",
        "nameTh": "ทัศนศิลป์ฝรั่งเศส",
        "nameEn": "French Visual Arts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231373",
        "nameTh": "วัจนลีลาภาษาฝรั่งเศส",
        "nameEn": "French Stylistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231377",
        "nameTh": "บทละครฝรั่งเศส",
        "nameEn": "French Drama",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231378",
        "nameTh": "กวีนิพนธ์ฝรั่งเศส",
        "nameEn": "French Poetry",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2231379",
        "nameTh": "นวนิยายฝรั่งเศส",
        "nameEn": "French Novel",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "german": {
    "id": "german",
    "nameTh": "สาขาวิชาภาษาเยอรมัน",
    "nameEn": "German Major",
    "totalCredits": "141",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2232121",
        "nameTh": "ภาษาเยอรมันระดับกลาง 1",
        "nameEn": "Upper Intermediate German |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2232122",
        "nameTh": "ภาษาเยอรมันระดับกลาง 2",
        "nameEn": "Upper Intermediate German !!",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2232223",
        "nameTh": "ภาษาเยอรมันระดับกลาง 3",
        "nameEn": "Upper Intermediate German Ill",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2232224",
        "nameTh": "ภาษาเยอรมันระดับกลาง 4",
        "nameEn": "Upper Intermediate German IV",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2232321",
        "nameTh": "ภาษาเยอรมันระดับสูง",
        "nameEn": "Advanced German",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2232314",
        "nameTh": "การเขียนเยอรมัน 2",
        "nameEn": "German Writing Il",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232332",
        "nameTh": "ไวยากรณ์เยอรมัน",
        "nameEn": "German Grammar",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232333",
        "nameTh": "ภาษาเยอรมันจากสือโสตทัศน์",
        "nameEn": "German from Audio-Visual Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232356",
        "nameTh": "ปริทัศน์วรรณคดีเยอรมันยุคภูมิธรรมถึงยุคจินตนิยม",
        "nameEn": "Introduction to German Literature from",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232368",
        "nameTh": "วรรณกรรมเยาวชนเยอรมัน",
        "nameEn": "German Youth Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232380",
        "nameTh": "การแปลเยอรมัน",
        "nameEn": "German Translation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232381",
        "nameTh": "การแปลเยอรมัน-ไทย",
        "nameEn": "Translation: German-Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232421",
        "nameTh": "การใช้ภาษาเยอรมันระดับสูง",
        "nameEn": "Advanced German Usage",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232453",
        "nameTh": "ภาษาเยอรมันปัจจุบัน",
        "nameEn": "German Today",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232456",
        "nameTh": "การสนทนาภาษาเยอรมันขั้นสูง",
        "nameEn": "Advanced German Conversation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232478",
        "nameTh": "การศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232495",
        "nameTh": "นักประพันธ์เอกเยอรมัน",
        "nameEn": "Major German Author",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232497",
        "nameTh": "การศึกษาเฉพาะเรื่องทางภาษาศาสตร์เยอรมัน",
        "nameEn": "Selected Topics in German Linguistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232498",
        "nameTh": "การศึกษาเฉพาะเรื่องทางวรรณคดีเยอรมัน",
        "nameEn": "Selected Topics in German Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232499",
        "nameTh": "การศึกษาเฉพาะเรื่องทางวัฒนธรรมเยอรมัน",
        "nameEn": "Selected Topics in German Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232214",
        "nameTh": "การเขียนเยอรมัน 1",
        "nameEn": "German Writing |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232250",
        "nameTh": "เยอรมนี้ในปัจจุบัน",
        "nameEn": "Present Day Germany",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232312",
        "nameTh": "การอ่านบทวรรณกรรมเยอรมัน",
        "nameEn": "Reading of German Literary Texts",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232350",
        "nameTh": "ปริทัศน์อารยธรรมเยอรมัน",
        "nameEn": "Introduction to German Civilization",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232383",
        "nameTh": "กวกากยสัมพันธ์ภาษาเยอรมัน",
        "nameEn": "German Syntax",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232121",
        "nameTh": "ภาษาเยอรมันระดับกลาง 1",
        "nameEn": "Upper Intermediate German |",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232122",
        "nameTh": "ภาษาเยอรมันระดับกลาง 2",
        "nameEn": "Upper Intermediate German II",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232223",
        "nameTh": "ภาษาเยอรมันระดับกลาง 3",
        "nameEn": "Upper Intermediate German Ill",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232224",
        "nameTh": "ภาษาเยอรมันระดับกลาง 4",
        "nameEn": "Upper Intermediate German IV",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2232214",
        "nameTh": "การเขียนเยอรมัน 1",
        "nameEn": "German Writing |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232250",
        "nameTh": "เยอรมนี้ในปัจจุบัน",
        "nameEn": "Present Day Germany",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232312",
        "nameTh": "กการอ่านบทวรรณกรรมเยอรมัน",
        "nameEn": "Reading of German Literary Texts",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232321",
        "nameTh": "ภาษาเยอรมันระดับสูง",
        "nameEn": "Advanced German",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232333",
        "nameTh": "ภาษาเยอรมันจากสือโสตทัศน์",
        "nameEn": "German from Audio-Visual Media",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232350",
        "nameTh": "ปริทัศน์อารยธรรมเยอรมัน",
        "nameEn": "Introduction to German Civilization",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232380",
        "nameTh": "การแปลเยอรมัน",
        "nameEn": "German Translation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232121",
        "nameTh": "ภาษาเยอรมันระดับกลาง 1                  3 หน่วยกิต",
        "nameEn": "ภาษาเยอรมันระดับกลาง 1                  3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232122",
        "nameTh": "ภาษาเยอรมันระดับกลาง 2                   3 หน่วยกิต",
        "nameEn": "ภาษาเยอรมันระดับกลาง 2                   3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232223",
        "nameTh": "ภาษาเยอรมันระดับกลาง 3                   3 หน่วยกิต",
        "nameEn": "ภาษาเยอรมันระดับกลาง 3                   3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2232214",
        "nameTh": "การเขียนเยอรมัน 1                                3 หน่วยกิต",
        "nameEn": "การเขียนเยอรมัน 1                                3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "spanish": {
    "id": "spanish",
    "nameTh": "สาขาวิชาภาษาสเปน",
    "nameEn": "Spanish Major",
    "totalCredits": "138",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2233011",
        "nameTh": "ภาษาสเปน 1 และ 2233012 ภาษาสเปน",
        "nameEn": "ภาษาสเปน 1 และ 2233012 ภาษาสเปน",
        "credits": 2,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233011",
        "nameTh": "ภาษาสเปน 1",
        "nameEn": "Spanish |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2233012",
        "nameTh": "ภาษาสเปน 2",
        "nameEn": "Spanish II",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2233021",
        "nameTh": "ภาษาสเปน 3",
        "nameEn": "SPANISH III",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2233022",
        "nameTh": "ภาษาสเปน 4",
        "nameEn": "SPANISH IV",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2233226",
        "nameTh": "วัฒนธรรมกลุ่มประเทศที่ใช้ภาษาสเปน",
        "nameEn": "Hispanic Cultures",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233227",
        "nameTh": "เรียงความและสนทนาภาษาสเปน 1",
        "nameEn": "Spanish Composition and Conversation |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233250",
        "nameTh": "อารยธรรมสเปน",
        "nameEn": "Spanish Civilization",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233322",
        "nameTh": "ปริทัศน์วรรณกรรมสเปน",
        "nameEn": "Panorama of Spanish Literature",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233323",
        "nameTh": "ปริทัศน์วรรณกรรมลาตินอเมริกา",
        "nameEn": "Panorama of Latin American Literature",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233372",
        "nameTh": "อารยธรรมลาตินอเมริกา",
        "nameEn": "Latin American Civilization",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233260",
        "nameTh": "สัทศาสตร์และสัทวิทยาสเปน",
        "nameEn": "Spanish Phonetics and Phonolog",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233321",
        "nameTh": "วัฒนธรรมมวลชนของกลุ่มประเทศที่ใช้ภาษาสเปน",
        "nameEn": "Pop Culture in Hispanic Countries",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233327",
        "nameTh": "เรียงความและสนทนาภาษาสเปน 2",
        "nameEn": "Spanish Composition and Conversation I",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233363",
        "nameTh": "วิทยาหน่วยคําและวากยสัมพันธ์สเปน",
        "nameEn": "Spanish Morphology and Syntax",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233414",
        "nameTh": "สเปนและลาตินอเมริกาในโลกปัจจุบัน",
        "nameEn": "Contemporary Spain and Latin America",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233415",
        "nameTh": "ทักษะการอภิปรายและนําเสนอเป็นภาษาสเปน",
        "nameEn": "Discussion and Presentation Skills in Spanish",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233421",
        "nameTh": "ภาพยนตร์สเปนและลาตินอเมริกา",
        "nameEn": "Spanish and Latin American Films",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233422",
        "nameTh": "สื่อสารมวลชนภาษาสเปน",
        "nameEn": "Mass Media in Spanish",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233031",
        "nameTh": "ภาษาสเปน 5",
        "nameEn": "SPANISH V",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2233320",
        "nameTh": "การอ่านภาษาสเปนเชิงวิจารณ์",
        "nameEn": "Spanish Critical Reading Skills",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233328",
        "nameTh": "ภาษาสเปนสําหรับการท่องเที่ยว",
        "nameEn": "Spanish for Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233390",
        "nameTh": "การล่ามภาษาสเปนขั้นพื้นฐาน",
        "nameEn": "Basic Spanish Interpretation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233429",
        "nameTh": "วรรณกรรมเอกของกลุ่มประเทศที่ใช้ภาษาสเปน",
        "nameEn": "Masterpieces of Hispanic Literatures",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233435",
        "nameTh": "หัวข้อเฉพาะด้านสเปนและลาตินอเมริกาศึกษา 1",
        "nameEn": "Selected Topics in Hispanic Studies |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233436",
        "nameTh": "หัวข้อเฉพาะด้านสเปนและลาตินอเมริกาศึกษา 2",
        "nameEn": "Selected Topics in Hispanic Studies II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233450",
        "nameTh": "ภาษาสเปนด้านธุรกิจ",
        "nameEn": "Spanish for Business",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233460",
        "nameTh": "ภาษาสเปนด้านกฎหมาย",
        "nameEn": "Spanish for Law",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233490",
        "nameTh": "การค้นคว้าอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233491",
        "nameTh": "ภาษาสเปนเป็นภาษาต่างประเทศ",
        "nameEn": "Spanish as a Foreign Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233021",
        "nameTh": "ภาษาสเปน 3",
        "nameEn": "SPANISH Ill",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2233022",
        "nameTh": "ภาษาสเปน 4",
        "nameEn": "SPANISH IV",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2233226",
        "nameTh": "วัฒนธรรมกลุ่มประเทศที่ใช้ภาษาสเปน",
        "nameEn": "Hispanic Cultures",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233227",
        "nameTh": "เรียงความและสนทนาภาษาสเปน 1",
        "nameEn": "Spanish Composition and Conversation |",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233250",
        "nameTh": "อารยธรรมสเปน",
        "nameEn": "Spanish Civilization",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233322",
        "nameTh": "ปริทัศน์วรรณกรรมสเปน",
        "nameEn": "Panorama of Spanish Literature",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233323",
        "nameTh": "=: USvietassaunsauaiewalsnn",
        "nameEn": "Panorama of Latin American Literature",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233372",
        "nameTh": "อารยธรรมลาตินอเมริกา",
        "nameEn": "Latin American Civilization",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2233260",
        "nameTh": "สัทศาสตร์และสัทวิทยาสเปน",
        "nameEn": "Spanish Phonetics and Phonology",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2233321",
        "nameTh": "วัฒนธรรมมวลชนของกลุ่มประเทศที่ใช้ภาษาสเปน",
        "nameEn": "Pop Culture in Hispanic Countries",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "italian": {
    "id": "italian",
    "nameTh": "สาขาวิชาภาษาอิตาเลียน",
    "nameEn": "Italian Major",
    "totalCredits": "135-137",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2234101",
        "nameTh": "ภาษาอิตาเลียน 1                                   3, (2-3-4)",
        "nameEn": "Italian |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2234102",
        "nameTh": "ภาษาอิตาเลียน 2                                           3, (2-3-4)",
        "nameEn": "Italian II",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2234201",
        "nameTh": "ภาษาอิตาเลียน 3                                         3, (2-3-4)",
        "nameEn": "Italian III",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2234211",
        "nameTh": "แปลอิตาเลียนเบื้องต้น",
        "nameEn": "Introduction to Italian Translation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234214",
        "nameTh": "การพูดภาษาอิตาเลียนและวัฒนธรรมอิตาเลียน",
        "nameEn": "Italian Speaking and Italian Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234218",
        "nameTh": "กภาษาอิตาเลียนด้านศิลปะ",
        "nameEn": "Italian for Art",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234250",
        "nameTh": "อิตาลีปัจจุบัน",
        "nameEn": "Italy Today",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234202",
        "nameTh": "ภาษาอิตาเลียน 4",
        "nameEn": "Italian IV",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2234301",
        "nameTh": "ภาษาอิตาเลียน 5",
        "nameEn": "Italian V",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2234302",
        "nameTh": "ภาษาอิตาเลียน 6",
        "nameEn": "Italian VI",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2234314",
        "nameTh": "การเขียนภาษาอิตาเลียนและการคิดอย่างมีวิจารณญาณ",
        "nameEn": "Italian Writing and Critical Thinking",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2234370",
        "nameTh": "ภูมิหลังเพื่อการศึกษาศิลปะและวรรณคดีอิตาเลียน",
        "nameEn": "Background for Studying Italian Art and Literature",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2234373",
        "nameTh": "การอ่านภาษาอิตาเลียนเชิงวิจารณ์",
        "nameEn": "Italian Critical Reading",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2234410",
        "nameTh": "การเขียนภาษาอิตาเลียนเชิงวิชาการ",
        "nameEn": "Italian Academic Writing",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2234499",
        "nameTh": "การศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2234206",
        "nameTh": "ระบบเสียงภาษาอิตาเลียน",
        "nameEn": "The Sound System of Italian",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234211",
        "nameTh": "แปลอิตาเลียนเบื้องต้น",
        "nameEn": "Introduction to Italian Translation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234218",
        "nameTh": "กภาษาอิตาเลียนด้านศิลปะ",
        "nameEn": "Italian for Art",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234250",
        "nameTh": "อิตาลีปัจจุบัน",
        "nameEn": "Italy Today",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234255",
        "nameTh": "ปูริทัศน์อารยธรรมอิตาเลียน 1",
        "nameEn": "Survey of Italian Civilization",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234256",
        "nameTh": "ปริทัศน์อารยธรรมอิตาเลียน 2",
        "nameEn": "Survey of Italian Civilization II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234257",
        "nameTh": "ปูริทัศน์อารยธรรมอิตาเลียน 3",
        "nameEn": "Survey of Italian Civilization III",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234275",
        "nameTh": "วรรณกรรมอิตาเลียนเบื้องต้น",
        "nameEn": "Introduction to Italian Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234320",
        "nameTh": "ภาษาอิตาเลียนเพื่อธุรกิจท่องเที่ยวและบริการ",
        "nameEn": "Italian for Tourism and Hospitality",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234325",
        "nameTh": "วรรณกรรมร้อยแก้วอิตาเลียนร่วมสมัย",
        "nameEn": "Contemporary Italian Fiction",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234361",
        "nameTh": "วรรณกรรมเอกอิตาเลียน 1",
        "nameEn": "Italian Literary Masterpieces |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234362",
        "nameTh": "วรรณกรรมเอกอิตาเลียน 2",
        "nameEn": "Italian Literary Masterpieces ||",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234382",
        "nameTh": "ศิลปะอิตาเลียนสมัยใหม่",
        "nameEn": "Modern Italian Art",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234385",
        "nameTh": "ปริทัศน์ศิลปะอิตาเลียน",
        "nameEn": "Survey of Italian Art",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234387",
        "nameTh": "คดนตรีและโอเปราอิตาเลียน",
        "nameEn": "Italian Music and Opera",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234408",
        "nameTh": "การพูดภาษาอิตาเลียนขั้นสูง",
        "nameEn": "Advanced Italian Speaking",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234411",
        "nameTh": "แปลอิตาเลียน - ไทย",
        "nameEn": "Translation: Italian- Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234412",
        "nameTh": "แปลไทย - อิตาเลียน",
        "nameEn": "Translation: Thai-ltalian",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234418",
        "nameTh": "ภาษาอิตาเลียนด้านธุรกิจและอุตสาหกรรม",
        "nameEn": "Italian for Business and Industrial Sectors",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234420",
        "nameTh": "การศึกษาข้ามวัฒนธรรมอิตาเลียน-ไทยด้านการท่องเที่ยว",
        "nameEn": "Italian-Thai Cross-Cultural Study in Tourism",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234422",
        "nameTh": "การเขียนภาษาอิตาเลียนเชิงสร้างสรรค์",
        "nameEn": "Italian Creative Writing",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234431",
        "nameTh": "กกวีนิพนธ์อิตาเลียนสมัยใหม่",
        "nameEn": "Modern Italian Poetry",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234441",
        "nameTh": "วรรณกรรมการละครอิตาเลียนชิ้นเอก",
        "nameEn": "Masterpieces of Italian Drama",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234455",
        "nameTh": "ประวัติภาษาอิตาเลียน",
        "nameEn": "History of Italian Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2234459",
        "nameTh": "ประวัติความคิดอิตาเลียน",
        "nameEn": "History of Italian Ideas",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "russian": {
    "id": "russian",
    "nameTh": "สาขาวิชาภาษารัสเซีย",
    "nameEn": "Russian Major",
    "totalCredits": "135",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2236101",
        "nameTh": "กภาษารัสเซีย 1",
        "nameEn": "Russian |",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2236102",
        "nameTh": "กภาษารัสเซีย 2",
        "nameEn": "Russian Il",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2236201",
        "nameTh": "กภาษารัสเซีย 3",
        "nameEn": "Russian Ill",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2236202",
        "nameTh": "กภาษารัสเซีย 4",
        "nameEn": "Russian IV",
        "credits": 3,
        "group": "1. กลุ่มวิชาพื้นฐาน (บังคับ)"
      },
      {
        "code": "2236211",
        "nameTh": "การพูดภาษารัสเซีย",
        "nameEn": "Russian Speaking",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236212",
        "nameTh": "กการเขียนภาษารัสเซีย",
        "nameEn": "Russian Writing",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236213",
        "nameTh": "การอ่านภาษารัสเซีย",
        "nameEn": "Russian Reading",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236301",
        "nameTh": "กภาษารัสเซีย 5",
        "nameEn": "Russian V",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2236302",
        "nameTh": "กภาษารัสเซีย 6",
        "nameEn": "Russian VI",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2236242",
        "nameTh": "วัฒนธรรมรัสเซีย",
        "nameEn": "Russian Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236499",
        "nameTh": "การศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236101",
        "nameTh": "กภาษารัสเซีย 1",
        "nameEn": "Russian |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236102",
        "nameTh": "กภาษารัสเซีย 2",
        "nameEn": "Russian Il",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236201",
        "nameTh": "กภาษารัสเซีย 3",
        "nameEn": "Russian Ill",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236202",
        "nameTh": "กภาษารัสเซีย 4",
        "nameEn": "Russian IV",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236211",
        "nameTh": "การพูดภาษารัสเซีย",
        "nameEn": "Russian Speaking",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236212",
        "nameTh": "กการเขียนภาษารัสเซีย",
        "nameEn": "Russian Writing",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236213",
        "nameTh": "การอ่านภาษารัสเซีย",
        "nameEn": "Russian Reading",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236242",
        "nameTh": "วัฒนธรรมรัสเซีย",
        "nameEn": "Russian Culture",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236301",
        "nameTh": "กภาษารัสเซีย 5",
        "nameEn": "Russian V",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236302",
        "nameTh": "กภาษารัสเซีย 6",
        "nameEn": "Russian VI",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236339",
        "nameTh": "ภาพยนตร์และซีรีส์ดิจิทัลรัสเซีย",
        "nameEn": "Russian Film and Digital Series",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236499",
        "nameTh": "กการศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236101",
        "nameTh": "ภาษารัสเซีย 1                          3 หน่วยกิต",
        "nameEn": "ภาษารัสเซีย 1                          3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236102",
        "nameTh": "ภาษารัสเซีย 2                           3 หน่วยกิต",
        "nameEn": "ภาษารัสเซีย 2                           3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236201",
        "nameTh": "ภาษารัสเซีย 3                           3 หน่วยกิต",
        "nameEn": "ภาษารัสเซีย 3                           3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236202",
        "nameTh": "ภาษารัสเซีย 4                           3 หน่วยกิต",
        "nameEn": "ภาษารัสเซีย 4                           3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236301",
        "nameTh": "ภาษารัสเซีย 5                           3 หน่วยกิต",
        "nameEn": "ภาษารัสเซีย 5                           3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236302",
        "nameTh": "ภาษารัสเซีย 6                           3 หน่วยกิต",
        "nameEn": "ภาษารัสเซีย 6                           3 หน่วยกิต",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236101",
        "nameTh": "ภาษารัสเซีย 1",
        "nameEn": "ภาษารัสเซีย 1",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236102",
        "nameTh": "ภาษารัสเซีย 2",
        "nameEn": "ภาษารัสเซีย 2",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236201",
        "nameTh": "กภาษารัสเซีย 3",
        "nameEn": "กภาษารัสเซีย 3",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236202",
        "nameTh": "กภาษารัสเซีย 4",
        "nameEn": "กภาษารัสเซีย 4",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236211",
        "nameTh": "การพูดภาษารัสเซีย",
        "nameEn": "การพูดภาษารัสเซีย",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236212",
        "nameTh": "การเขียนภาษารัสเซีย",
        "nameEn": "การเขียนภาษารัสเซีย",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236213",
        "nameTh": "การอ่านภาษารัสเซีย",
        "nameEn": "การอ่านภาษารัสเซีย",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236242",
        "nameTh": "ววัฒนธรรมรัสเซีย",
        "nameEn": "ววัฒนธรรมรัสเซีย",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236301",
        "nameTh": "กภาษารัสเซีย 5",
        "nameEn": "กภาษารัสเซีย 5",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236302",
        "nameTh": "กภาษารัสเซีย 6",
        "nameEn": "กภาษารัสเซีย 6",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2236499",
        "nameTh": "การศึกษาอิสระ",
        "nameEn": "การศึกษาอิสระ",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "world_literature": {
    "id": "world_literature",
    "nameTh": "สาขาวิชาวรรณกรรมโลกและการเขียนเชิงสร้างสรรค์",
    "nameEn": "World Literature and Creative Writing Major",
    "totalCredits": "129",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2210214",
        "nameTh": "วรรณคดีกับสิ่งแวดล้อม",
        "nameEn": "Literature and Environment",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210215",
        "nameTh": "กว)วรรณคดีกับสตรี",
        "nameEn": "Literature and Women",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210216",
        "nameTh": "ว)วรรณคดีสัจนิยมมหัศจรรย์",
        "nameEn": "Magical Realist Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210217",
        "nameTh": "บันเทิงคดีร่วมสมัย",
        "nameEn": "Contemporary Fiction",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210221",
        "nameTh": "ซปริทัศน์อาชญนิยายและภาพยนตร์",
        "nameEn": "Introduction to Crime Fiction and Film",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210225",
        "nameTh": "กวิทยาศาสตร์และเทคโนโลยีในบันเทิงคดีร่วมสมัย",
        "nameEn": "Science and Technology in Contemporary Fiction",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210227",
        "nameTh": "“นอนฮิวแมน” ในบันเทิงคดีแนววิทยาศาสตร์",
        "nameEn": "“นอนฮิวแมน” ในบันเทิงคดีแนววิทยาศาสตร์",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210235",
        "nameTh": "วรรณคดีกับการดัดแปลงเป็นภาพยนตร์",
        "nameEn": "Literature and Film Adaptations",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210301",
        "nameTh": "แนวคิดพื้นฐานวรรณคดีศึกษา",
        "nameEn": "Fundamentals of Literary Study",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210314",
        "nameTh": "วรรณกรรมเยาวชน",
        "nameEn": "Juvenile Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210335",
        "nameTh": "ปริทัศน์วัฒนธรรมศึกษา",
        "nameEn": "Introduction to Cultural Studies",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210420",
        "nameTh": "นักเขียนเอกกับผลงาน",
        "nameEn": "Major Writers and Their Works",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210426",
        "nameTh": "วรรณคดีเอเชียตะวันออกเฉียงใต้",
        "nameEn": "Southeast Asian Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210427",
        "nameTh": "วรรณกรรมเอเชียตะวันออกเฉียงใต้ร่วมสมัย",
        "nameEn": "Contemporary Southeast Asian Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202234",
        "nameTh": "การศึกษาวรรณกรรมอังกฤษเบื้องต้น",
        "nameEn": "Introduction to the Study of English Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202263",
        "nameTh": "ภูมิหลังทางเทวตํานานและคัมภีร์ไบเบิลในวรรณกรรมอังกฤษ",
        "nameEn": "Mythological and Biblical Background to English Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202266",
        "nameTh": "ภูมิหลังของวรรณคดีอังกฤษ",
        "nameEn": "Background to British Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202267",
        "nameTh": "ภูมิหลังของวรรณคดีอเมริกัน",
        "nameEn": "Background to American Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202340",
        "nameTh": "กวรรณกรรมร้อยแก้วอังกฤษศตวรรษที่ 19",
        "nameEn": "Nineteenth—Century British Fiction",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202341",
        "nameTh": "วรรณกรรมอเมริกันศตวรรษที่ 19",
        "nameEn": "Nineteenth-Century American Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202342",
        "nameTh": "บทละครศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "Drama from the Twentieth Century to the Present",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202344",
        "nameTh": "วรรณกรรมโลกร่วมสมัยที่ประพันธ์เป็นภาษาอังกฤษ",
        "nameEn": "Contemporary World Literature in English",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202345",
        "nameTh": "กวีนิพนธ์อังกฤษตั้งแต่ยุคอลิซาบีธันถึงยุคออกัสต้น",
        "nameEn": "British Poetry from the Elizabethans to the Augustans",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202349",
        "nameTh": "กกวีนิพนธ์แห่งการขบถจากยุคโรแมนติกถึงยุควิกตอเรียน",
        "nameEn": "The Poetry of Rebellion: The Romantics to the Victorians",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202365",
        "nameTh": "วรรณกรรมร้อยแก้วภาษาอังกฤษยอดนิยม",
        "nameEn": "Popular Fiction in English",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202370",
        "nameTh": "วรรณกรรมฉบับแปลภาษาอังกฤษ",
        "nameEn": "Literature in English Translation",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202371",
        "nameTh": "วรรณกรรมเด็ก",
        "nameEn": "Children’s Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202372",
        "nameTh": "ว)วรรณกรรมกับภาพยนตร์",
        "nameEn": "Literature and Film",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202373",
        "nameTh": "วรรณกรรมสิงแวดล้อม",
        "nameEn": "Environmental Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202374",
        "nameTh": "เรื่องแต่งและเรื่องจริงในร้อยแก้วภาษาอังกฤษ",
        "nameEn": "Fiction and Fact in English Prose",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202428",
        "nameTh": "หัวข้อคัดสรรในวรรณกรรมอังกฤษ 1",
        "nameEn": "Selected Topics in English Literature |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202429",
        "nameTh": "หัวข้อคัดสรรในวรรณกรรมอังกฤษ 2",
        "nameEn": "Selected Topics in English Literature I",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202441",
        "nameTh": "วรรณกรรมร้อยแก้วอังกฤษศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "British Fiction from the Twentieth Century to the Present",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202442",
        "nameTh": "วรรณกรรมร้อยแก้วอเมริกันศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "American Fiction from the Twentieth Century to the Present",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202445",
        "nameTh": "กวีนิพนธ์อังกฤษศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "British Poetry from the Twentieth Century to the Present",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202446",
        "nameTh": "กวีนิพนธ์อเมริกันศตวรรษที่ 20 ถึงปัจจุบัน",
        "nameEn": "American Poetry from the Twentieth Century to the Present",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202449",
        "nameTh": "ทหทฤษฎีวรรณกรรมวิจารณ์สมัยใหม่เบื้องต้น",
        "nameEn": "Introduction to Modern Critical Theory",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2202450",
        "nameTh": "เชกสเปียร์",
        "nameEn": "Shakespeare",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210218",
        "nameTh": "ศาสนาและจิตวิญญาณในวรรณคดี",
        "nameEn": "Religion and Spirituality in Literature",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2210226",
        "nameTh": "วรรณกรรมชายขอบ",
        "nameEn": "Literature of Marginality",
        "credits": 3,
        "group": "วิชาเลือก"
      }
    ]
  },
  "language_technology": {
    "id": "language_technology",
    "nameTh": "สาขาวิชาเทคโนโลยีภาษาและสารสนเทศ",
    "nameEn": "Language Technology and Information Major",
    "totalCredits": "129",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": {
      "generalEd": 30,
      "basicArts": 27,
      "major": 48,
      "majorCompulsory": 18,
      "majorSpecified": 12,
      "majorSpecialized": 18,
      "minor": 18,
      "freeElective": 6
    },
    "courses": [
      {
        "code": "2209304",
        "nameTh": "ระบบไวยากรณ์",
        "nameEn": "Grammatical System",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2209305",
        "nameTh": "ความหมายในภาษา",
        "nameEn": "Meaning in Language",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2209308",
        "nameTh": "ระบบเสียง",
        "nameEn": "Sound System",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2209368",
        "nameTh": "กการวิเคราะห์ภาษาไทยตามแนวภาษาศาสตร์",
        "nameEn": "Linguistic Analysis of Thai",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2209372",
        "nameTh": "ภาษาศาสตร์คอมพิวเตอร์เบื้องต้น",
        "nameEn": "Introduction to Computational Linguistics",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206366",
        "nameTh": "สถิติเพื่อการวิจัยด้านมนุษยศาสตร์",
        "nameEn": "Statistics for Humanities Research",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2206385",
        "nameTh": "การจัดการฐานข้อมูลสําหรับมนุษยศาสตร์",
        "nameEn": "Database Management for the Humanities",
        "credits": 3,
        "group": "2. กลุ่มวิชาข้อกำหนดเฉพาะ (วิชาเลือก)"
      },
      {
        "code": "2206491",
        "nameTh": "โครงการสารสนเทศศึกษา 1",
        "nameEn": "Project in Information Studies |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2206492",
        "nameTh": "โครงการสารสนเทศศึกษา 2",
        "nameEn": "Project in Information Studies II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2209491",
        "nameTh": "'โครงการเทคโนโลยีภาษา 1",
        "nameEn": "Project in Language Technology |",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2209492",
        "nameTh": "โครงการเทคโนโลยีภาษา 2",
        "nameEn": "Project in Language Technology II",
        "credits": 3,
        "group": "วิชาเลือก"
      },
      {
        "code": "2200158",
        "nameTh": "ภาษาศาสตร์ประยุกต์เพื่อการสอนภาษาไทย",
        "nameEn": "ภาษาศาสตร์ประยุกต์เพื่อการสอนภาษาไทย",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206285",
        "nameTh": "การแปลงทรัพยากรสารสนเทศให้อยู่ในรูปดิจิทัล",
        "nameEn": "Digitization of Information Resources",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206289",
        "nameTh": "การสื่อสารข้อมูลและเครือข่ายในงานสารสนเทศ",
        "nameEn": "Data Communications and Networking in Information Work",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206290",
        "nameTh": "/พื้นฐานมนุษยศาสตร์ดิจิทัล",
        "nameEn": "Introduction to Digital Humanities",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206384",
        "nameTh": "การจัดการสารสนเทศในสํานักงาน",
        "nameEn": "Office Information Management",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206386",
        "nameTh": "การออกแบบส่วนต่อประสานกับผู้ใช้ในงานสารสนเทศ",
        "nameEn": "User Interface Design in Information Work",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206415",
        "nameTh": "การตลาดและการประชาสัมพันธ์สําหรับองค์กรสารสนเทศ »3 (3-0-6)",
        "nameEn": "Marketing and Public Relations for Information Organizations",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206442",
        "nameTh": "เครื่องมือสําหรับมนุษยศาสตร์ดิจิทัล",
        "nameEn": "Tools for Digital Humanities",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2206489",
        "nameTh": "การศึกษาอิสระ",
        "nameEn": "Independent Study",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209309",
        "nameTh": "การแปรและการเปลี่ยนแปลงในภาษา",
        "nameEn": "Variation and Change in Language",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209344",
        "nameTh": "ภาษาศาสตร์กับการแปล",
        "nameEn": "Linguistics and Translation",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209369",
        "nameTh": "ภาษาตระกูลขร้า-ไท",
        "nameEn": "Kra-Dai Languages",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209370",
        "nameTh": "ภาษาและความคิด",
        "nameEn": "Language and Mind",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209371",
        "nameTh": "ภาษาศาสตร์ภาษาโรมานช์เบื้องต้น",
        "nameEn": "Introduction to Romance Linguistics",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209373",
        "nameTh": "ภาษากับวัฒนธรรม",
        "nameEn": "Language and Culture",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209376",
        "nameTh": "คลังข้อมูลภาษา",
        "nameEn": "Language Corpora",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209377",
        "nameTh": "ภาษาศาสตร์ภาคสนาม",
        "nameEn": "Field Linguistics",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209378",
        "nameTh": "ภาษากับการสื่อสารทางการตลาด",
        "nameEn": "Language and Marketing Communications",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209379",
        "nameTh": "ภาษากับเพศ",
        "nameEn": "Language and Sex",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209381",
        "nameTh": "เทคโนโลยีวัจนะ",
        "nameEn": "Speech Technology",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209382",
        "nameTh": "การแปลภาษาด้วยคอมพิวเตอร์",
        "nameEn": "Machine Translation",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209384",
        "nameTh": "การเข้าใจภาษาธรรมชาติ",
        "nameEn": "Natural Language Understanding",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209390",
        "nameTh": "เรรื่องคัดเฉพาะทางเทคโนโลยีภาษา",
        "nameEn": "Selected Topics in Language Technology",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209607",
        "nameTh": "ภาษาศาสตร์เชิงคลินิก",
        "nameEn": "Clinical Linguistics",
        "credits": 3,
        "group": "วิชาบังคับเลือก"
      },
      {
        "code": "2209308",
        "nameTh": "ระบบเสียง                                              3 หน่วยกิต",
        "nameEn": "ระบบเสียง                                              3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2209304",
        "nameTh": "ระบบไวยากรณ์                                        3 หน่วยกิต",
        "nameEn": "ระบบไวยากรณ์                                        3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2206385",
        "nameTh": "การจัดการฐานข้อมูลสําหรับมนุษยศาสตร์              3 หน่วยกิต",
        "nameEn": "การจัดการฐานข้อมูลสําหรับมนุษยศาสตร์              3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2209305",
        "nameTh": "ความหมายในภาษา                                    3 หน่วยกิต",
        "nameEn": "ความหมายในภาษา                                    3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      },
      {
        "code": "2209372",
        "nameTh": "ภาษาศาสตร์คอมพิวเตอร์เบื้องต้น                      3 หน่วยกิต",
        "nameEn": "ภาษาศาสตร์คอมพิวเตอร์เบื้องต้น                      3 หน่วยกิต",
        "credits": 3,
        "group": "3. กลุ่มวิชาเชี่ยวชาญ (วิชาเลือก)"
      }
    ]
  }
};

export const MINOR_CURRICULUMS: Record<string, MinorCurriculumInfo> = {
  "vietnamese": {
    "id": "vietnamese",
    "nameTh": "วิชาโทภาษาเวียดนาม",
    "nameEn": "Vietnamese Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 15, "requiredElective": 0, "elective": 3 },
    "courses": [
      { "code": "2226101", "nameTh": "ภาษาเวียดนาม 1", "nameEn": "Vietnamese I", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2226102", "nameTh": "ภาษาเวียดนาม 2", "nameEn": "Vietnamese II", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2226201", "nameTh": "ภาษาเวียดนาม 3", "nameEn": "Vietnamese III", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2226202", "nameTh": "ภาษาเวียดนาม 4", "nameEn": "Vietnamese IV", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2226301", "nameTh": "ภาษาเวียดนาม 5", "nameEn": "Vietnamese V", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2226001", "nameTh": "ปริทัศน์วัฒนธรรมเวียดนาม", "nameEn": "Introduction to Vietnamese Culture", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2226211", "nameTh": "การอ่านภาษาเวียดนาม", "nameEn": "Vietnamese Reading", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2226311", "nameTh": "ภาษาเวียดนามสำหรับการท่องเที่ยว", "nameEn": "Vietnamese for Tourism", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2226322", "nameTh": "การแปลเวียดนาม-ไทย", "nameEn": "Translation: Vietnamese-Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2226323", "nameTh": "ภาพยนตร์เวียดนาม", "nameEn": "Vietnamese Movies", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2226411", "nameTh": "การศึกษาอิสระ", "nameEn": "Independent Study", "credits": 3, "group": "วิชาเลือก" }
    ]
  },
  "arabic": {
    "id": "arabic",
    "nameTh": "วิชาโทภาษาอาหรับ",
    "nameEn": "Arabic Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 0, "requiredElective": 6, "elective": 12 },
    "courses": [
      { "code": "2228101", "nameTh": "ภาษาอาหรับ 1", "nameEn": "Arabic I", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2228102", "nameTh": "ภาษาอาหรับ 2", "nameEn": "Arabic II", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2228104", "nameTh": "ภาษาอาหรับ 3", "nameEn": "Arabic III", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2228202", "nameTh": "ภาษาอาหรับ 4", "nameEn": "Arabic IV", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2228105", "nameTh": "การสนทนาภาษาอาหรับ 1", "nameEn": "Arabic Conversation I", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228106", "nameTh": "การสนทนาภาษาอาหรับ 2", "nameEn": "Arabic Conversation II", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228107", "nameTh": "ปริทัศน์วัฒนธรรมอาหรับ", "nameEn": "Introduction to Arabic Culture", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228201", "nameTh": "การสนทนาภาษาอาหรับ 3", "nameEn": "Arabic Conversation III", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228203", "nameTh": "อารยธรรมอาหรับ", "nameEn": "Arab Civilization", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228204", "nameTh": "ภาษาศาสตร์อาหรับเบื้องต้น", "nameEn": "Introduction to Arabic Linguistics", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228205", "nameTh": "ภาษาอาหรับเพื่อการสื่อสารด้านการแพทย์", "nameEn": "Arabic for Medical Communication", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228206", "nameTh": "ภาษาอาหรับด้านธุรกิจ", "nameEn": "Arabic for Business", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2228207", "nameTh": "ภาษาอาหรับสำหรับการท่องเที่ยว", "nameEn": "Arabic for Tourism", "credits": 3, "group": "วิชาเลือก" }
    ]
  },
  "portuguese": {
    "id": "portuguese",
    "nameTh": "วิชาโทภาษาโปรตุเกส",
    "nameEn": "Portuguese Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 0, "requiredElective": 0, "elective": 18 },
    "courses": [
      { "code": "2235101", "nameTh": "ภาษาโปรตุเกส 1", "nameEn": "Portuguese I", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235102", "nameTh": "ภาษาโปรตุเกส 2", "nameEn": "Portuguese II", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235201", "nameTh": "ภาษาโปรตุเกส 3", "nameEn": "Portuguese III", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235202", "nameTh": "ภาษาโปรตุเกส 4", "nameEn": "Portuguese IV", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235310", "nameTh": "การแปลโปรตุเกสเบื้องต้น", "nameEn": "Introduction to Portuguese Translation", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235320", "nameTh": "โปรตุเกสและบราซิลในโลกปัจจุบัน", "nameEn": "Contemporary Portugal and Brazil", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235325", "nameTh": "วรรณกรรมภาษาโปรตุเกสเบื้องต้น", "nameEn": "Introduction to Portuguese Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235327", "nameTh": "การพูดภาษาโปรตุเกส", "nameEn": "Portuguese Speaking", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235329", "nameTh": "การเขียนภาษาโปรตุเกส", "nameEn": "Portuguese Writing", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2235410", "nameTh": "การอ่านงานเขียนภาษาโปรตุเกสที่ไม่ใช่วรรณคดี", "nameEn": "Reading of Portuguese Non-Literary Texts", "credits": 3, "group": "วิชาเลือก" }
    ]
  },
  "linguistics": {
    "id": "linguistics",
    "nameTh": "วิชาโทภาษาศาสตร์",
    "nameEn": "Linguistics Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 3, "requiredElective": 3, "elective": 12 },
    "courses": [
      { "code": "2209161", "nameTh": "ภาษาทัศนา", "nameEn": "Introduction to Language", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2209304", "nameTh": "ระบบไวยากรณ์", "nameEn": "Grammatical System", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2209305", "nameTh": "ความหมายในภาษา", "nameEn": "Meaning in Language", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2209308", "nameTh": "ระบบเสียง", "nameEn": "Sound System", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2209261", "nameTh": "พื้นฐานการเขียนโปรแกรมเพื่อการประมวลผลภาษาธรรมชาติ", "nameEn": "Basic Programming for NLP", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209309", "nameTh": "การแปรและการเปลี่ยนแปลงในภาษา", "nameEn": "Variation and Change in Language", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209344", "nameTh": "ภาษาศาสตร์กับการแปล", "nameEn": "Linguistics and Translation", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209368", "nameTh": "การวิเคราะห์ภาษาไทยตามแนวภาษาศาสตร์", "nameEn": "Linguistic Analysis of Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209369", "nameTh": "ภาษาตระกูลขร้า-ไท", "nameEn": "Kra-Dai Languages", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209370", "nameTh": "ภาษาและความคิด", "nameEn": "Language and Mind", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209371", "nameTh": "ภาษาศาสตร์ภาษาโรมานซ์เบื้องต้น", "nameEn": "Introduction to Romance Linguistics", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209372", "nameTh": "ภาษาศาสตร์คอมพิวเตอร์เบื้องต้น", "nameEn": "Introduction to Computational Linguistics", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209373", "nameTh": "ภาษากับวัฒนธรรม", "nameEn": "Language and Culture", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209375", "nameTh": "ภาษาในกลุ่มประเทศอาเซียน+3", "nameEn": "Languages in ASEAN Plus+3", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209376", "nameTh": "คลังข้อมูลภาษา", "nameEn": "Language Corpora", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209377", "nameTh": "ภาษาศาสตร์ภาคสนาม", "nameEn": "Field Linguistics", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209378", "nameTh": "ภาษากับการสื่อสารทางการตลาด", "nameEn": "Language and Marketing Communications", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209379", "nameTh": "ภาษากับเพศ", "nameEn": "Language and Sex", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209380", "nameTh": "เรื่องคัดเฉพาะทางภาษาศาสตร์", "nameEn": "Selected Topics in Linguistics", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209381", "nameTh": "เทคโนโลยีวัจนะ", "nameEn": "Speech Technology", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209382", "nameTh": "การแปลภาษาด้วยคอมพิวเตอร์", "nameEn": "Machine Translation", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209384", "nameTh": "การเข้าใจภาษาธรรมชาติ", "nameEn": "Natural Language Understanding", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209390", "nameTh": "เรื่องคัดเฉพาะทางเทคโนโลยีภาษา", "nameEn": "Selected Topics in Language Technology", "credits": 3, "group": "วิชาเลือก" }
    ]
  },
  "comparative_literature": {
    "id": "comparative_literature",
    "nameTh": "วิชาโทวรรณคดีเปรียบเทียบ",
    "nameEn": "Comparative Literature Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 0, "requiredElective": 0, "elective": 18 },
    "courses": [
      { "code": "2210214", "nameTh": "วรรณคดีกับสิ่งแวดล้อม", "nameEn": "Literature and Environment", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210215", "nameTh": "วรรณคดีกับสตรี", "nameEn": "Literature and Women", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210216", "nameTh": "วรรณคดีสัจนิยมมหัศจรรย์", "nameEn": "Magical Realist Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210217", "nameTh": "บันเทิงคดีร่วมสมัย", "nameEn": "Contemporary Fiction", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210218", "nameTh": "ศาสนาและจิตวิญญาณในวรรณคดี", "nameEn": "Religion and Spirituality in Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210221", "nameTh": "ปริทัศน์อาชญนิยายและภาพยนตร์", "nameEn": "Introduction to Crime Fiction and Film", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210225", "nameTh": "วิทยาศาสตร์และเทคโนโลยีในบันเทิงคดีร่วมสมัย", "nameEn": "Science and Technology in Contemporary Fiction", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210226", "nameTh": "วรรณกรรมชายขอบ", "nameEn": "Literature of Marginality", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210227", "nameTh": "นอนฮิวแมนในบันเทิงคดีแนววิทยาศาสตร์", "nameEn": "Nonhuman in Science Fiction", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210228", "nameTh": "การแปล วรรณกรรม และวัฒนธรรม", "nameEn": "Translation, Literature and Culture", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210235", "nameTh": "วรรณคดีกับการดัดแปลงเป็นภาพยนตร์", "nameEn": "Literature and Film Adaptations", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210239", "nameTh": "วรรณคดีกับความพิการ", "nameEn": "Literature and Disability", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210301", "nameTh": "แนวคิดพื้นฐานวรรณคดีศึกษา", "nameEn": "Fundamentals of Literary Study", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210313", "nameTh": "อารมณ์ขันในวรรณคดี", "nameEn": "Humour in Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210314", "nameTh": "วรรณกรรมเยาวชน", "nameEn": "Juvenile Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210315", "nameTh": "วรรณคดีกับอัตลักษณ์ชาติพันธุ์", "nameEn": "Literature and Ethnic Identity", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210316", "nameTh": "วรรณคดีกับสำนึกทางสังคมและการเมือง", "nameEn": "Literature and Socio-political Consciousness", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210320", "nameTh": "เวลาในวรรณกรรม", "nameEn": "Time in Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210323", "nameTh": "วรรณคดีกับสิทธิมนุษยชน", "nameEn": "Literature and Human Rights", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210335", "nameTh": "ปริทัศน์วัฒนธรรมศึกษา", "nameEn": "Introduction to Cultural Studies", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210410", "nameTh": "วรรณคดีแนวหลังอาณานิคม", "nameEn": "Postcolonial Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210420", "nameTh": "นักเขียนเอกกับผลงาน", "nameEn": "Major Writers and Their Works", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210423", "nameTh": "วรรณคดีกับจิตวิทยา", "nameEn": "Literature and Psychology", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210426", "nameTh": "วรรณคดีเอเชียตะวันออกเฉียงใต้", "nameEn": "Southeast Asian Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210427", "nameTh": "วรรณกรรมเอเชียตะวันออกเฉียงใต้ร่วมสมัย", "nameEn": "Contemporary Southeast Asian Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210488", "nameTh": "การศึกษาเฉพาะเรื่องด้านวรรณคดีศึกษา", "nameEn": "Selected Topics in Literary Studies", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2210489", "nameTh": "การศึกษาอิสระ", "nameEn": "Independent Study", "credits": 3, "group": "วิชาเลือก" }
    ]
  },
  "khmer": {
    "id": "khmer",
    "nameTh": "วิชาโทภาษาเขมร",
    "nameEn": "Khmer Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 9, "requiredElective": 0, "elective": 9 },
    "courses": [
      { "code": "2244101", "nameTh": "ภาษาเขมร 1", "nameEn": "Cambodian I", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2244102", "nameTh": "ภาษาเขมร 2", "nameEn": "Cambodian II", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2244221", "nameTh": "การอ่านภาษาเขมร", "nameEn": "Cambodian Reading", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2201326", "nameTh": "ภาษาเขมรที่สัมพันธ์กับภาษาไทย", "nameEn": "Cambodian in Relation to Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244151", "nameTh": "ปริทัศน์วัฒนธรรมเขมร", "nameEn": "Introduction to Cambodian Culture", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244211", "nameTh": "สนทนาภาษาเขมร", "nameEn": "Cambodian Conversation", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244291", "nameTh": "จารึกภาษาเขมร", "nameEn": "Khmer Epigraphy", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244341", "nameTh": "การแปลเขมร-ไทย", "nameEn": "Translation: Cambodian-Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244361", "nameTh": "ประวัติวรรณคดีเขมร", "nameEn": "History of Cambodian Literature", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244411", "nameTh": "ไวยากรณ์เขมร", "nameEn": "Cambodian Grammar", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2244461", "nameTh": "นวนิยายเขมรสมัยใหม่", "nameEn": "Modern Cambodian Novel", "credits": 3, "group": "วิชาเลือก" }
    ]
  },
  "editorial_studies": {
    "id": "editorial_studies",
    "nameTh": "วิชาโทบรรณาธิการศึกษา",
    "nameEn": "Editorial Studies Minor",
    "totalCredits": "18",
    "revision": "หลักสูตรปรับปรุง พ.ศ. 2566",
    "breakdown": { "compulsory": 6, "requiredElective": 3, "elective": 9 },
    "courses": [
      { "code": "2206352", "nameTh": "วิชาชีพบรรณาธิการ", "nameEn": "Editorial Profession", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2206353", "nameTh": "เสวนาบรรณาธิการ", "nameEn": "Editorial Discussion", "credits": 3, "group": "วิชาบังคับ" },
      { "code": "2206214", "nameTh": "สังคมสารสนเทศ", "nameEn": "Information Society", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2313226", "nameTh": "เทคโนโลยีสื่อสิ่งพิมพ์", "nameEn": "Print Media Technology", "credits": 3, "group": "วิชาบังคับเลือก" },
      { "code": "2201214", "nameTh": "ภาษาสื่อสารมวลชน", "nameEn": "Language for the Mass Media", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201215", "nameTh": "การเล่นทางภาษาในภาษาไทย", "nameEn": "Speech Play in Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201304", "nameTh": "ภาษาไทยในมุมมองแบบลักษณ์ภาษา", "nameEn": "Typological Perspectives on Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201314", "nameTh": "ลีลาในภาษาไทย", "nameEn": "Styles in Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201324", "nameTh": "การสร้างคำและการบัญญัติศัพท์", "nameEn": "Word Formation and Word Coining", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201337", "nameTh": "ภาษาในบริบทสังคมและวัฒนธรรมไทย", "nameEn": "Thai Language in Thai Socio-cultural Context", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201353", "nameTh": "วรรณกรรมวิจารณ์", "nameEn": "Literary Criticism", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201393", "nameTh": "วรรณกรรมกับสังคม", "nameEn": "Literary Works and Society", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201414", "nameTh": "ศิลปะการใช้ภาษาไทย", "nameEn": "The Arts of Thai Usage", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201425", "nameTh": "ศัพทมูลวิทยาภาษาไทย", "nameEn": "Thai Etymology", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201431", "nameTh": "ภาษาไทยถิ่น", "nameEn": "Thai Dialects", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2201435", "nameTh": "ภาษาไทยสมัยต่าง ๆ", "nameEn": "Thai Language in Different Periods", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2202313", "nameTh": "แปลอังกฤษ-ไทย", "nameEn": "Translation: English-Thai", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2202314", "nameTh": "แปลไทย-อังกฤษ 1", "nameEn": "Translation: Thai-English I", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2202327", "nameTh": "อรรถศาสตร์และวัจนปฏิบัติศาสตร์ภาษาอังกฤษเบื้องต้น", "nameEn": "Intro to English Semantics and Pragmatics", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2202328", "nameTh": "ปริจเฉทภาษาอังกฤษ", "nameEn": "English Discourse", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2204307", "nameTh": "ความคิดและวิธีการทางประวัติศาสตร์", "nameEn": "Historical Thoughts and Historical Method", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2206285", "nameTh": "การแปลงทรัพยากรสารสนเทศให้อยู่ในรูปดิจิทัล", "nameEn": "Digitization of Information Resources", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2206315", "nameTh": "ธุรกิจการพิมพ์สมัยใหม่", "nameEn": "The Modern Publishing Trade", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2206376", "nameTh": "การจัดการสารสนเทศมรดกทางวัฒนธรรม", "nameEn": "Cultural Heritage Information Management", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2206415", "nameTh": "การตลาดและการประชาสัมพันธ์สำหรับองค์กรสารสนเทศ", "nameEn": "Marketing and PR for Information Organizations", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2206484", "nameTh": "การประมวลสารสนเทศสำเร็จรูป", "nameEn": "Information Repackaging", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209305", "nameTh": "ความหมายในภาษา", "nameEn": "Meaning in Language", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209344", "nameTh": "ภาษาศาสตร์กับการแปล", "nameEn": "Linguistics and Translation", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209373", "nameTh": "ภาษากับวัฒนธรรม", "nameEn": "Language and Culture", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209376", "nameTh": "คลังข้อมูลภาษา", "nameEn": "Language Corpora", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2209378", "nameTh": "ภาษากับการสื่อสารการตลาด", "nameEn": "Language and Marketing Communications", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2313345", "nameTh": "การออกแบบสิ่งพิมพ์", "nameEn": "Print Media Design", "credits": 2, "group": "วิชาเลือก" },
      { "code": "2801200", "nameTh": "กราฟิกสารสนเทศและการจัดหน้า", "nameEn": "Infographic and Layout", "credits": 2, "group": "วิชาเลือก" },
      { "code": "2801203", "nameTh": "การผลิตสื่อใหม่", "nameEn": "New Media Production", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2801318", "nameTh": "การเขียนและการบรรณาธิกรนิตยสาร", "nameEn": "Magazine Writing and Editing", "credits": 3, "group": "วิชาเลือก" },
      { "code": "2804344", "nameTh": "การวิเคราะห์พฤติกรรมภาษา", "nameEn": "Analysis of Language Behavior", "credits": 3, "group": "วิชาเลือก" }
    ]
  }
};
