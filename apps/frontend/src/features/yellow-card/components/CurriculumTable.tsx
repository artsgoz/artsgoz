import { Plus, Trash2 } from 'lucide-react';
import type { YellowCardSubject, YellowCardCategory } from '../types.js';

interface CurriculumTableProps {
  category: YellowCardCategory;
  requiredCredits: number;
  groups: string[];
  subjects: YellowCardSubject[];
  onUpdateSubject: (updatedSubject: YellowCardSubject) => void;
  onAddSubject: (groupName: string) => void;
  onDeleteSubject: (id: string) => void;
}

export function CurriculumTable({
  category,
  requiredCredits,
  groups,
  subjects,
  onUpdateSubject,
  onAddSubject,
  onDeleteSubject,
}: CurriculumTableProps) {
  // Available grade options
  const gradeOptions = ['', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F', 'S', 'U'];

  const getGroupCompletedCredits = (groupName: string) => {
    return subjects
      .filter((s) => s.group === groupName && s.grade && s.grade !== 'F' && s.grade !== 'U')
      .reduce((sum, s) => sum + (parseFloat(s.credits) || 0), 0);
  };

  const getCategoryCompletedCredits = () => {
    return subjects
      .filter((s) => s.category === category && s.grade && s.grade !== 'F' && s.grade !== 'U')
      .reduce((sum, s) => sum + (parseFloat(s.credits) || 0), 0);
  };

  const completedCredits = getCategoryCompletedCredits();

  return (
    <div className="w-full bg-white border border-[#D0D0D1]/30 rounded-[16px] p-6 shadow-sm font-[ChulaCharasNew] mb-8 select-none">
      {/* Category Header Bar (matches Figma) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#F5CDDC] rounded-[8px] py-4 px-6 mb-6">
        <h3 className="text-black text-[20px] font-bold">{category}</h3>
        <span className="text-black text-[18px] font-bold mt-1 sm:mt-0">
          เรียนแล้ว {completedCredits} / {requiredCredits} หน่วยกิต
        </span>
      </div>

      {/* Render each sub-group under this category */}
      <div className="space-y-8">
        {groups.map((groupName) => {
          const groupSubjects = subjects.filter((s) => s.group === groupName);
          const groupCredits = getGroupCompletedCredits(groupName);

          return (
            <div key={groupName} className="flex flex-col gap-4 border-l-2 border-[#E992B4]/40 pl-4 py-1">
              {/* Group Title bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-black text-[17px] font-bold leading-snug max-w-[80%]">
                  {groupName}
                </h4>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-[#6D6D6D] text-[14px]">
                    (ผ่านแล้ว {groupCredits} หน่วยกิต)
                  </span>
                  <button
                    type="button"
                    onClick={() => onAddSubject(groupName)}
                    className="flex items-center gap-1 text-[14px] font-bold text-[#DE5D8F] hover:text-[#ca5582] cursor-pointer transition-colors"
                  >
                    <Plus size={16} />
                    เพิ่มรายวิชา
                  </button>
                </div>
              </div>

              {/* Subjects Editable Table */}
              <div className="w-full overflow-x-auto rounded-[12px] border border-[#D0D0D1]/30">
                <table className="w-full min-w-[700px] border-collapse text-left text-[15px]">
                  <thead>
                    <tr className="bg-[#F7F8F9] border-b border-[#D0D0D1]/30 text-[#6D6D6D] font-bold">
                      <th className="py-3 px-4 w-[130px]">รหัสวิชา</th>
                      <th className="py-3 px-4 min-w-[200px]">ชื่อรายวิชา</th>
                      <th className="py-3 px-4 w-[130px]">ภาค/ปีการศึกษา</th>
                      <th className="py-3 px-4 w-[100px] text-right">หน่วยกิต</th>
                      <th className="py-3 px-4 w-[100px] text-center">เกรด</th>
                      <th className="py-3 px-4 w-[60px] text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D0D0D1]/20">
                    {groupSubjects.map((subject) => (
                      <tr key={subject.id} className="hover:bg-[#FCEFF4]/5 transition-colors">
                        {/* Course Code */}
                        <td className="py-2.5 px-3">
                          <input
                            type="text"
                            value={subject.code}
                            onChange={(e) =>
                              onUpdateSubject({ ...subject, code: e.target.value })
                            }
                            placeholder="............."
                            className="w-full px-2 py-1 border border-transparent hover:border-[#D0D0D1] focus:border-[#DE5D8F] rounded-[4px] bg-transparent text-black font-mono focus:outline-none transition-all placeholder:text-[#BBBBBB]"
                          />
                        </td>

                        {/* Course Name */}
                        <td className="py-2.5 px-3">
                          <input
                            type="text"
                            value={subject.name}
                            onChange={(e) =>
                              onUpdateSubject({ ...subject, name: e.target.value })
                            }
                            placeholder="................................................"
                            className="w-full px-2 py-1 border border-transparent hover:border-[#D0D0D1] focus:border-[#DE5D8F] rounded-[4px] bg-transparent text-black font-bold focus:outline-none transition-all placeholder:text-[#BBBBBB]"
                          />
                        </td>

                        {/* Semester / Year */}
                        <td className="py-2.5 px-3">
                          <input
                            type="text"
                            value={subject.semester}
                            onChange={(e) =>
                              onUpdateSubject({ ...subject, semester: e.target.value })
                            }
                            placeholder="....."
                            className="w-full px-2 py-1 border border-transparent hover:border-[#D0D0D1] focus:border-[#DE5D8F] rounded-[4px] bg-transparent text-black text-center focus:outline-none transition-all placeholder:text-[#BBBBBB]"
                          />
                        </td>

                        {/* Credits */}
                        <td className="py-2.5 px-3">
                          <input
                            type="text"
                            value={subject.credits}
                            onChange={(e) =>
                              onUpdateSubject({ ...subject, credits: e.target.value })
                            }
                            placeholder="..."
                            className="w-full px-2 py-1 border border-transparent hover:border-[#D0D0D1] focus:border-[#DE5D8F] rounded-[4px] bg-transparent text-black text-right font-mono focus:outline-none transition-all placeholder:text-[#BBBBBB]"
                          />
                        </td>

                        {/* Grade */}
                        <td className="py-2.5 px-3">
                          <select
                            value={subject.grade}
                            onChange={(e) =>
                              onUpdateSubject({ ...subject, grade: e.target.value })
                            }
                            className="w-full px-2 py-1 border border-transparent hover:border-[#D0D0D1] focus:border-[#DE5D8F] rounded-[4px] bg-transparent text-black font-bold focus:outline-none transition-all text-center cursor-pointer"
                          >
                            {gradeOptions.map((opt) => (
                              <option key={opt} value={opt} className="bg-white text-black font-normal">
                                {opt === '' ? '...' : opt}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Delete Action */}
                        <td className="py-2.5 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => onDeleteSubject(subject.id)}
                            className="text-[#6D6D6D] hover:text-[#ea234f] transition-colors cursor-pointer"
                            title="ลบวิชานี้"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}

                    {groupSubjects.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#6D6D6D] italic">
                          ไม่มีวิชาลงทะเบียน (คลิกเพิ่มรายวิชาเพื่อเริ่มกรอก)
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
