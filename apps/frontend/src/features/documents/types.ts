export type DocumentStatus = 'failed' | 'pending' | 'neutral' | 'none';

export interface DocumentItem {
  id: string;
  name: string;
  details: string;
  category: string;
  status: DocumentStatus;
  downloadUrl: string;
}

export const DOCUMENT_CATEGORIES = [
  'ที่บันทึกไว้',
  'เกี่ยวกับวิชาเรียน',
  'ทุนการศึกษา',
  'เกี่ยวกับฝึกงาน',
  'ฟอร์มต่าง ๆ ของกอศ.',
  'อื่น ๆ',
] as const;
