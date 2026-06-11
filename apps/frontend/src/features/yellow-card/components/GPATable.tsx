import { useMemo } from 'react';
import type { YellowCardSubject, GPATermData } from '../types.js';

interface GPATableProps {
  subjects: YellowCardSubject[];
}

// Convert grade string to numeric value for GPA calculation
const GRADE_POINTS: Record<string, number> = {
  'A': 4.0,
  'B+': 3.5,
  'B': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D+': 1.5,
  'D': 1.0,
  'F': 0.0,
};

export function GPATable({ subjects }: GPATableProps) {
  // Normalize and group courses by semester
  const termCalculations = useMemo<GPATermData[]>(() => {
    const termMap: Record<string, YellowCardSubject[]> = {};

    // Group subjects by semester field (normalized)
    subjects.forEach((sub) => {
      let sem = sub.semester.trim();
      if (!sem) return;

      // Normalize common formats like "1/66" or "ภาคต้น / 2566"
      // Let's standardise the key
      termMap[sem] = termMap[sem] || [];
      termMap[sem].push(sub);
    });

    const semesters = Object.keys(termMap);
    if (semesters.length === 0) {
      // Return 8 default empty terms if no data entered yet to match Figma visual style
      const defaultTerms: GPATermData[] = [];
      const termsLabels = [
        'ภาคต้น / 2566',
        'ภาคปลาย / 2566',
        'ภาคต้น / 2567',
        'ภาคปลาย / 2567',
        'ภาคต้น / 2568',
        'ภาคปลาย / 2568',
        'ภาคต้น / 2569',
        'ภาคปลาย / 2569',
      ];
      termsLabels.forEach((label) => {
        defaultTerms.push({
          semester: label,
          ca: 0,
          cg: 0,
          gpa: 0,
          cax: 0,
          cgx: 0,
          gpax: 0,
        });
      });
      return defaultTerms;
    }

    // Helper to sort semesters chronologically
    // E.g., "2/57" vs "1/66" vs "2/66"
    // Let's parse semesters to a sortable key
    const parseSemesterSortKey = (semStr: string) => {
      // Match formats like "1/66", "2/57", "1/2566", "2/2557"
      const parts = semStr.split('/');
      if (parts.length === 2) {
        const term = parseInt(parts[0]) || 0;
        let year = parseInt(parts[1]) || 0;
        if (year < 100) {
          // 57 -> 2557, 66 -> 2566
          year += 2500;
        }
        return year * 10 + term;
      }

      // Check for Thai terms like "ภาคต้น / 2566"
      if (semStr.includes('ภาคต้น')) {
        const yr = parseInt(semStr.replace(/[^0-9]/g, '')) || 0;
        return yr * 10 + 1;
      }
      if (semStr.includes('ภาคปลาย')) {
        const yr = parseInt(semStr.replace(/[^0-9]/g, '')) || 0;
        return yr * 10 + 2;
      }
      if (semStr.includes('ภาคฤดูร้อน')) {
        const yr = parseInt(semStr.replace(/[^0-9]/g, '')) || 0;
        return yr * 10 + 3;
      }

      return 999999; // Fallback
    };

    const sortedSemesters = semesters.sort((a, b) => parseSemesterSortKey(a) - parseSemesterSortKey(b));

    let cumulativeGradePointsSum = 0;
    let cumulativeCaSum = 0;
    let cumulativeCgSum = 0;

    return sortedSemesters.map((sem) => {
      const termSubjects = termMap[sem];
      let termCa = 0; // Credits Attempted (A-F)
      let termCg = 0; // Credits Earned (A-D, S)
      let termGradePoints = 0;

      termSubjects.forEach((sub) => {
        const credit = parseFloat(sub.credits) || 0;
        const grade = sub.grade.trim().toUpperCase();

        if (!grade) return;

        // Determine if grade counts towards GPA calculations
        if (GRADE_POINTS[grade] !== undefined) {
          termCa += credit;
          termGradePoints += credit * GRADE_POINTS[grade];
          if (grade !== 'F') {
            termCg += credit;
          }
        } else if (grade === 'S') {
          termCg += credit; // S counts for credits earned, but not GPA
        }
      });

      const termGpa = termCa > 0 ? termGradePoints / termCa : 0;

      cumulativeCaSum += termCa;
      cumulativeCgSum += termCg;
      cumulativeGradePointsSum += termGradePoints;

      const cumulativeGpax = cumulativeCaSum > 0 ? cumulativeGradePointsSum / cumulativeCaSum : 0;

      // Render readable semester label
      let displayLabel = sem;
      const parts = sem.split('/');
      if (parts.length === 2) {
        const term = parts[0];
        let year = parseInt(parts[1]) || 0;
        if (year < 100) year += 2500;
        displayLabel = term === '1' 
          ? `ภาคต้น / ${year}` 
          : term === '2' 
            ? `ภาคปลาย / ${year}` 
            : `ภาคฤดูร้อน / ${year}`;
      }

      return {
        semester: displayLabel,
        ca: termCa,
        cg: termCg,
        gpa: termGpa,
        cax: cumulativeCaSum,
        cgx: cumulativeCgSum,
        gpax: cumulativeGpax,
      };
    });
  }, [subjects]);

  return (
    <div className="w-full bg-white border border-[#D0D0D1]/30 rounded-[16px] p-6 shadow-sm font-[ChulaCharasNew] mb-8 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D0D0D1]/20 pb-4 mb-6">
        <h3 className="text-black text-[22px] font-bold">ตารางเกรด</h3>
        <span className="text-[#6D6D6D] text-[14px]">
          หมายเหตุ: สามารถตรวจสอบข้อมูลส่วนนี้ได้ที่เว็บไซต์ reg chula
        </span>
      </div>

      <div className="w-full overflow-x-auto rounded-[12px] border border-[#D0D0D1]/30">
        <table className="w-full min-w-[700px] border-collapse text-center text-[15px]">
          <thead>
            <tr className="bg-[#F7F8F9] border-b border-[#D0D0D1]/30 text-[#6D6D6D] font-bold text-center">
              <th className="py-3 px-4 text-left">ภาค/ปีการศึกษา</th>
              <th className="py-3 px-4 w-[100px]">CA</th>
              <th className="py-3 px-4 w-[100px]">CG</th>
              <th className="py-3 px-4 w-[100px]">GPA</th>
              <th className="py-3 px-4 w-[100px]">CAX</th>
              <th className="py-3 px-4 w-[100px]">CGX</th>
              <th className="py-3 px-4 w-[100px]">GPAX</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D0D0D1]/20">
            {termCalculations.map((calc, index) => {
              const hasData = calc.ca > 0 || calc.cg > 0;
              return (
                <tr key={index} className="hover:bg-[#FCEFF4]/5 transition-colors">
                  <td className="py-3.5 px-4 text-left font-bold text-black">{calc.semester}</td>
                  <td className="py-3.5 px-4 font-mono text-black">
                    {hasData ? calc.ca.toFixed(2) : '..........'}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-black">
                    {hasData ? calc.cg.toFixed(2) : '..........'}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#DE5D8F]">
                    {hasData && calc.ca > 0 ? calc.gpa.toFixed(2) : '..........'}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-black">
                    {hasData ? calc.cax.toFixed(2) : '..........'}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-black">
                    {hasData ? calc.cgx.toFixed(2) : '..........'}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#DE5D8F]">
                    {hasData && calc.cax > 0 ? calc.gpax.toFixed(2) : '..........'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
