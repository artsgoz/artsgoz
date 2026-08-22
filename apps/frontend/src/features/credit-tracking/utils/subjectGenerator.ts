import type { Subject } from '../types.js';
import { MAJOR_CURRICULUMS, MINOR_CURRICULUMS } from '@org/yellow-card-shared';

export function generateSubjectsForProfile(majorKeyRaw: string, minorKeyRaw: string): Subject[] {
  const majorKey = majorKeyRaw ? majorKeyRaw.replace('credit_tracking.majors.', '') : 'thai';
  const minorKey = minorKeyRaw ? minorKeyRaw.replace('credit_tracking.minors.', '') : '';

  const majorInfo = MAJOR_CURRICULUMS[majorKey];
  const minorInfo = MINOR_CURRICULUMS[minorKey];

  const subjects: Subject[] = [];

  // 1. หมวดวิชาพื้นฐานอักษร (27 หน่วยกิต)
  const basicArtsDefaults = [
    { id: 'b1', code: '2201111', nameKey: 'ภาษาอังกฤษ 1', credits: 3, semester: 1 },
    { id: 'b2', code: '2201112', nameKey: 'ภาษาอังกฤษ 2', credits: 3, semester: 1 },
    { id: 'b3', code: '2201121', nameKey: 'การใช้ภาษาไทย', credits: 3, semester: 1 },
    { id: 'b4', code: '2201122', nameKey: 'การแปลขั้นต้น', credits: 3, semester: 2 },
    { id: 'b5', code: '2201211', nameKey: 'วรรณคดีวิจารณ์', credits: 3, semester: 2 },
    { id: 'b6', code: '2201221', nameKey: 'อารยธรรมตะวันออก', credits: 3, semester: 3 },
    { id: 'b7', code: '2201222', nameKey: 'อารยธรรมตะวันตก', credits: 3, semester: 3 },
  ];

  basicArtsDefaults.forEach((b) => {
    subjects.push({
      id: b.id,
      code: b.code,
      nameKey: b.nameKey,
      credits: b.credits,
      category: 'categories.basic',
      group: 'planner.groups.basic.g1',
      completed: true,
      semester: b.semester,
    });
  });

  // 2. หมวดการศึกษาทั่วไป (30 หน่วยกิต)
  const genEdDefaults = [
    { id: 'g1', code: '5500111', nameKey: 'ภาษาอังกฤษพื้นฐาน 1', credits: 3, semester: 1 },
    { id: 'g2', code: '2200181', nameKey: 'การใช้เหตุผล', credits: 3, semester: 2 },
    { id: 'g3', code: '2200234', nameKey: 'การอ่านเชิงวิเคราะห์', credits: 3, semester: 3 },
    { id: 'g4', code: '2200256', nameKey: 'วิทยาศาสตร์และเทคโนโลยีในโลกสมัยใหม่', credits: 3, semester: 4 },
  ];

  genEdDefaults.forEach((g) => {
    subjects.push({
      id: g.id,
      code: g.code,
      nameKey: g.nameKey,
      credits: g.credits,
      category: 'categories.general',
      group: 'planner.groups.general.g1',
      completed: true,
      semester: g.semester,
    });
  });

  // 3. หมวดวิชาเอก (48 หน่วยกิต) - Generated from MAJOR_CURRICULUMS
  if (majorInfo && majorInfo.courses.length > 0) {
    const compulsoryCourses = majorInfo.courses.filter(c => c.group.includes('1.') || c.group.includes('บังคับ'));
    const specifiedCourses = majorInfo.courses.filter(c => c.group.includes('2.') || c.group.includes('ข้อกำหนดเฉพาะ'));
    const specializedCourses = majorInfo.courses.filter(c => c.group.includes('3.') || c.group.includes('เชี่ยวชาญ'));

    const activeMajorCourses = [
      ...compulsoryCourses.slice(0, 6).map((c, i) => ({ ...c, groupType: 'planner.groups.major.g1', completed: i < 4 })),
      ...specifiedCourses.slice(0, 4).map((c, i) => ({ ...c, groupType: 'planner.groups.major.g2', completed: i < 2 })),
      ...specializedCourses.slice(0, 6).map((c, i) => ({ ...c, groupType: 'planner.groups.major.g3', completed: i < 2 })),
    ];

    activeMajorCourses.forEach((c, index) => {
      subjects.push({
        id: `major-${index}-${c.code}`,
        code: c.code,
        nameKey: c.nameTh,
        credits: c.credits || 3,
        category: 'categories.major',
        group: c.groupType,
        completed: c.completed,
        semester: 3 + (index % 5),
      });
    });
  }

  // 4. หมวดวิชาโท (18 หน่วยกิต) - Generated from MINOR_CURRICULUMS
  if (minorInfo && minorInfo.courses.length > 0) {
    minorInfo.courses.slice(0, 6).forEach((c, index) => {
      const isCompulsory = index < 4;
      subjects.push({
        id: `minor-${index}-${c.code}`,
        code: c.code,
        nameKey: c.nameTh,
        credits: c.credits || 3,
        category: 'categories.minor',
        group: isCompulsory ? 'planner.groups.minor.g1' : 'planner.groups.minor.g2',
        completed: index < 3,
        semester: 4 + (index % 4),
      });
    });
  }

  // 5. หมวดวิชาเลือกเสรี (6 หน่วยกิต)
  const freeDefaults = [
    { id: 'f1', code: '2207111', nameKey: 'ภาษาญี่ปุ่นเบื้องต้น', credits: 3, semester: 7, completed: true },
    { id: 'f2', code: '2207222', nameKey: 'ภาษาเกาหลีเบื้องต้น', credits: 3, semester: 8, completed: false },
  ];

  freeDefaults.forEach((f) => {
    subjects.push({
      id: f.id,
      code: f.code,
      nameKey: f.nameKey,
      credits: f.credits,
      category: 'categories.free',
      group: 'planner.groups.free.g1',
      completed: f.completed,
      semester: f.semester,
    });
  });

  return subjects;
}
