export interface AcademicProfile {
  major: string;
  minor: string;
  curriculum: string;
}

export type SubjectCategory =
  | 'หมวดวิชาพื้นฐานอักษร'
  | 'หมวดการศึกษาทั่วไป'
  | 'หมวดวิชาเลือกเสรี'
  | 'หมวดวิชาเอก'
  | 'หมวดวิชาโท';

export interface Subject {
  id: string;
  code: string;
  nameTh: string;
  nameEn: string;
  credits: number;
  category: SubjectCategory;
  semester: number; // 1-8 (Year 1 Sem 1 = 1, Year 4 Sem 2 = 8)
  completed: boolean;
}

export interface CategoryProgress {
  category: SubjectCategory;
  completed: number;
  required: number;
}
