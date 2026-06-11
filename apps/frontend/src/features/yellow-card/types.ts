export interface StudentProfile {
  name: string;
  studentId: string;
  major: string;
  minor: string;
  curriculum: string;
  advisor: string;
  address: string;
  phone: string;
}

export type YellowCardCategory =
  | 'หมวดวิชาพื้นฐานอักษรศาสตร์'
  | 'หมวดการศึกษาทั่วไป'
  | 'หมวดวิชาเลือกเสรี';

export interface YellowCardSubject {
  id: string;
  code: string;
  name: string;
  semester: string;
  credits: string; // Keep as string for easy form input editing, parse to float for calculations
  grade: string;   // A, B+, B, C+, C, D+, D, F, S, U, etc.
  category: YellowCardCategory;
  group: string;   // e.g. "กลุ่มที่ 1 ทักษะการแสวงหาความรู้...", "หมวดเลือกเสรี"
}

export interface GPATermData {
  semester: string; // e.g. "1/2566"
  ca: number;       // Credits Attempted
  cg: number;       // Credits Earned
  gpa: number;      // Term GPA
  cax: number;      // Cumulative Credits Attempted
  cgx: number;      // Cumulative Credits Earned
  gpax: number;     // Cumulative GPA
}
