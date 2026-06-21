import { MessageSquareWarning } from 'lucide-react';
import type { Subject, AcademicProfile } from '../types.js';

interface CurriculumViewProps {
  subjects?: Subject[];
  onToggleSubject?: (id: string) => void;
  profile?: AcademicProfile | null;
}

/**
 * CurriculumView — redesigned to match Figma node 6324-22624.
 * Layout:
 *   - Top section: page title + curriculum image/table
 *   - Information section: major name + description,
 *     then a table with ส่วนประกอบ / หน่วยกิต / รายละเอียด,
 *     then an orange warning banner
 */
export function CurriculumView({ profile }: CurriculumViewProps) {
  // Curriculum breakdown data matching Figma (เอกสารสนเทศศึกษา example)
  const majorName = profile?.major ?? 'เอกสารสนเทศศึกษา';
  const minorName = profile?.minor ?? '-';

  const curriculumRows: { part: string; credits: number; detail: string; isIndented?: boolean }[] =
    [
      { part: 'วิชาเอก (Major)', credits: 48, detail: 'แบ่งเป็น 3 กลุ่มวิชาย่อย' },
      { part: 'กลุ่มวิชาข้อกำหนดเฉพาะ', credits: 18, detail: '', isIndented: true },
      { part: 'กลุ่มวิชาพื้นฐาน', credits: 12, detail: '', isIndented: true },
      { part: 'กลุ่มวิชาเชี่ยวชาญ', credits: 18, detail: '', isIndented: true },
      { part: 'วิชาโท (Minor)', credits: 18, detail: minorName !== '-' ? `วิชาโท: ${minorName}` : 'เลือกวิชาโทสาขาอื่น (ในหรือนอกคณะ)' },
    ];

  return (
    <div
      className="w-full space-y-10 select-none"
      style={{ fontFamily: 'ChulaCharasNew, sans-serif' }}
    >
      {/* ───── Top Section: Title + Curriculum Overview ───── */}
      <div className="flex flex-col gap-6" style={{ maxWidth: '744px' }}>
        {/* Title */}
        <div>
          <h1
            className="text-black"
            style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px' }}
          >
            หลักสูตรอักษรศาสตร์บัณทิต
          </h1>
        </div>

        {/* Curriculum overview table — styled to match Figma node 6257:21468 image */}
        <div
          className="w-full overflow-auto rounded-[12px] border border-[#D0D0D1]/30"
          style={{ background: '#F7F8F9' }}
        >
          <table
            className="w-full text-black border-collapse"
            style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', minWidth: '560px' }}
          >
            <thead>
              <tr style={{ backgroundColor: '#FCEFF4' }}>
                <th
                  className="border border-[#D0D0D1]/40 px-3 py-2 text-center font-bold"
                  colSpan={3}
                >
                  หมวดวิชาศึกษาทั่วไป
                  <br />
                  <span style={{ fontWeight: 400 }}>30 หน่วยกิต</span>
                </th>
                <th
                  className="border border-[#D0D0D1]/40 px-3 py-2 text-center font-bold"
                  colSpan={4}
                >
                  หมวดวิชาเฉพาะ
                  <br />
                  <span style={{ fontWeight: 400 }}>93–117, 111* หน่วยกิต</span>
                </th>
                <th className="border border-[#D0D0D1]/40 px-3 py-2 text-center font-bold">
                  หมวดวิชา
                  <br />
                  เลือกเสรี
                  <br />
                  <span style={{ fontWeight: 400 }}>6 หน่วยกิต</span>
                </th>
              </tr>
              <tr style={{ backgroundColor: '#F0F0F0', fontSize: '13px' }}>
                <th className="border border-[#D0D0D1]/40 px-2 py-2 text-center align-top">
                  วิชาศึกษาทั่วไปทั่วไป
                  <br />
                  12 หน่วยกิต
                </th>
                <th className="border border-[#D0D0D1]/40 px-2 py-2 text-center align-top">
                  วิชาศึกษาทั่วไป
                  <br />
                  กลุ่มต่างประเทศ
                  <br />
                  12 หน่วยกิต
                </th>
                <th className="border border-[#D0D0D1]/40 px-2 py-2 text-center align-top">
                  วิชาศึกษาทั่วไป
                  <br />
                  กลุ่มพิเศษ
                  <br />6 หน่วยกิต
                </th>
                <th className="border border-[#D0D0D1]/40 px-2 py-2 text-center align-top">
                  วิชาพื้นฐาน
                  <br />
                  อักษรศาสตร์
                  <br />
                  27 หน่วยกิต
                </th>
                <th
                  className="border border-[#D0D0D1]/40 px-2 py-2 text-center align-top"
                  colSpan={2}
                >
                  สาขาวิชาภาษาอังกฤษ
                </th>
                <th className="border border-[#D0D0D1]/40 px-2 py-2 text-center align-top">
                  สาขาวิชาอื่น ๆ
                </th>
                <th className="border border-[#D0D0D1]/40 px-2 py-2 text-center" rowSpan={2} />
              </tr>
            </thead>
            <tbody style={{ fontSize: '13px' }}>
              <tr>
                <td className="border border-[#D0D0D1]/40 px-2 py-2 align-top text-center" colSpan={3}>
                  วิชาทั่วไปทั้ง 12 หน่วยกิต
                </td>
                <td className="border border-[#D0D0D1]/40 px-2 py-2 align-top text-center">
                  1. วิชาพื้นฐานอักษรศาสตร์ 27 หน่วยกิต
                </td>
                <td className="border border-[#D0D0D1]/40 px-2 py-2 align-top text-center">
                  วิชาเอก (Major)
                  <br />
                  48–60 หน่วยกิต
                </td>
                <td className="border border-[#D0D0D1]/40 px-2 py-2 align-top text-center">
                  วิชาโท (Minor)
                  <br />
                  18 หน่วยกิต
                </td>
                <td className="border border-[#D0D0D1]/40 px-2 py-2 align-top text-center">
                  วิชาเอกสาขาอื่น
                  <br />
                  45 หน่วยกิต
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ───── Information Section ───── */}
      <div className="flex flex-col gap-6 w-full">
        {/* Info Header */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-black"
            style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px' }}
          >
            {majorName}
          </h2>
          <p
            className="text-black"
            style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
          >
            ต้องเก็บหน่วยกิตในส่วนวิชาเอกและวิชาโท รวม 66 หน่วยกิต ดังนี้:
          </p>
        </div>

        {/* Curriculum Breakdown Table */}
        <div style={{ maxWidth: '649px' }}>
          {/* Header row */}
          <div
            className="flex items-center justify-between pb-2 mb-1"
            style={{ borderBottom: '1px solid #D0D0D1' }}
          >
            <span
              className="flex-1 text-black"
              style={{ fontSize: '18px', fontWeight: 700, lineHeight: '24px' }}
            >
              ส่วนประกอบหลักสูตร
            </span>
            <span
              className="w-[100px] text-center text-black"
              style={{ fontSize: '18px', fontWeight: 700, lineHeight: '24px' }}
            >
              หน่วยกิต
            </span>
            <span
              className="flex-1 text-black text-right"
              style={{ fontSize: '18px', fontWeight: 700, lineHeight: '24px' }}
            >
              รายละเอียดเพิ่มเติม
            </span>
          </div>

          {/* Data rows */}
          {curriculumRows.map((row, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3"
              style={{
                borderBottom: idx < curriculumRows.length - 1 ? '1px solid #F0F0F0' : 'none',
              }}
            >
              <span
                className="flex-1 text-black"
                style={{
                  fontSize: '16px',
                  fontWeight: row.isIndented ? 400 : 400,
                  lineHeight: '24px',
                  paddingLeft: row.isIndented ? '32px' : '0',
                  color: row.isIndented ? '#6D6D6D' : '#000000',
                }}
              >
                {row.part}
              </span>
              <span
                className="w-[100px] text-center"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: row.isIndented ? '#6D6D6D' : '#000000',
                }}
              >
                {row.credits}
              </span>
              <span
                className="flex-1 text-right"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#000000',
                }}
              >
                {row.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Orange Warning Banner — matches Figma node 4479:9357 */}
        <div
          className="flex items-center gap-3 w-full"
          style={{
            backgroundColor: '#EE8A50',
            borderRadius: '11px',
            padding: '12px 24px',
          }}
        >
          {/* Icon badge */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: 24,
              height: 24,
              backgroundColor: '#FDF0E9',
              borderRadius: '4px',
            }}
          >
            <MessageSquareWarning size={16} style={{ color: '#EE8A50' }} />
          </div>
          <span
            className="text-white"
            style={{ fontSize: '18px', fontWeight: 700, lineHeight: '24px' }}
          >
            หมายเหตุสำคัญ: กรณีเลือกวิชาโท มนุษย์ศาสตร์ดิจิทัล หรือ บรรณาธิการศึกษา
            ต้องได้รับการอนุมัติจากคณะกรรมการบริหารหลักสูตรก่อน
          </span>
        </div>
      </div>
    </div>
  );
}
