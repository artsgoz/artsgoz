import type { YellowCardSubject, YellowCardCategory, TrackerSubject } from '../types.js';
import { CATEGORIES_CONFIG } from '../constants.js';

/**
 * Calculates the total completed credits for the given categories.
 * A subject is counted as completed if it has a grade and the grade is not 'F' or 'U'.
 */
export function calculateTotalCredits(
  subjects: YellowCardSubject[],
  categoriesList: YellowCardCategory[]
): number {
  return subjects
    .filter((s) => categoriesList.includes(s.category) && s.grade && s.grade !== 'F' && s.grade !== 'U')
    .reduce((sum, s) => sum + (parseFloat(s.credits) || 0), 0);
}

/**
 * Maps a TrackerSubject (from the Credit Tracking system) to a YellowCardSubject.
 */
export function mapTrackerSubjectToYellowCard(
  ts: TrackerSubject,
  studentId: string
): YellowCardSubject {
  // Map category
  let category: YellowCardCategory = 'หมวดวิชาพื้นฐานอักษรศาสตร์';
  if (ts.category === 'หมวดการศึกษาทั่วไป') {
    category = 'หมวดการศึกษาทั่วไป';
  } else if (ts.category === 'หมวดวิชาเลือกเสรี') {
    category = 'หมวดวิชาเลือกเสรี';
  } else if (ts.category === 'หมวดวิชาเอก') {
    category = 'หมวดวิชาเอก';
  } else if (ts.category === 'หมวดวิชาโท') {
    category = 'หมวดวิชาโท';
  } else if (ts.category === 'หมวดวิชาพื้นฐานอักษร') {
    category = 'หมวดวิชาพื้นฐานอักษรศาสตร์';
  }

  // Map group (default to first group in the category, or find match)
  let group = '';
  const catConfig = CATEGORIES_CONFIG.find((c) => c.category === category);
  if (catConfig) {
    const matchedGroup = catConfig.groups.find(
      (g) =>
        g.includes(ts.group || '') ||
        (ts.group && ts.group.includes(g)) ||
        (ts.category === 'หมวดวิชาเลือกเสรี' && g === 'หมวดเลือกเสรี')
    );
    group = matchedGroup || catConfig.groups[0] || '';
  }

  // Convert tracker semester number (1-8) to academic year/term format (e.g., "1/67", "2/67")
  let semesterString = '';
  if (ts.semester !== undefined && ts.semester !== null) {
    const semNum = Number(ts.semester) || 1;
    const studentIdStr = String(studentId || '67');
    const entryYearShort = parseInt(studentIdStr.substring(0, 2)) || 67;

    const term = ((semNum - 1) % 2) + 1;
    const yearOffset = Math.floor((semNum - 1) / 2);
    const semesterYear = entryYearShort + yearOffset;
    semesterString = `${term}/${semesterYear}`;
  }

  return {
    id: `tracker-${ts.id}`,
    code: ts.code || '0000000',
    name: ts.nameTh || ts.nameEn || 'ชื่อวิชา',
    semester: semesterString,
    credits: (ts.credits || 3).toString(),
    grade: ts.completed ? 'A' : '', // Default to A if marked completed in credit tracking
    category,
    group,
  };
}

/**
 * Merges newly imported subjects from Credit Tracking with current subjects.
 * Keeps non-empty current subjects and appends the imported ones.
 */
export function mergeImportedSubjects(
  currentSubjects: YellowCardSubject[],
  importedSubjects: YellowCardSubject[]
): YellowCardSubject[] {
  return [...currentSubjects.filter((s) => s.code || s.name), ...importedSubjects];
}
