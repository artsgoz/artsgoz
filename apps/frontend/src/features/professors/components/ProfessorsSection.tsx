import { useState, useMemo } from 'react';
import type { Professor } from '../types.js';
import {
  MOCK_PROFESSORS,
  DEPARTMENT_OPTIONS,
  STATUS_OPTIONS,
  PROFESSORS_PER_PAGE,
} from '../constants.js';
import { ProfessorCard } from './ProfessorCard.js';
import { ProfessorDetailPanel } from './ProfessorDetailPanel.js';
import { ProfessorSearchBar } from './ProfessorSearchBar.js';
import { FilterDropdown } from './FilterDropdown.js';
import { ProfessorPagination } from './ProfessorPagination.js';

/**
 * ProfessorsSection — the main container component.
 *
 * Implements two states from Figma:
 *
 * STATE 1 — No professor selected (node 5120:15553):
 *   Layout: Full-width page (1280px)
 *   - Title "สืบค้นชื่อบุคลากร" at top — 32px w700 #000000
 *   - Full-width search bar (Frame 6175) — 1086px
 *   - Filter dropdowns (Frame 6346) right-aligned — ภาควิชา + สถานภาพบุคลากร
 *   - Professor list (Frame 6390) centered — 784px wide, 13 cards
 *   - Pagination (Component 14) centered
 *
 * STATE 2 — Professor selected (node 5479:14908):
 *   Layout: Split view
 *   - Left column (434px): title + compact search + narrow list + pagination
 *   - Right column (737px): detail panel with back button
 */
export function ProfessorsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [departmentFilter, setDepartmentFilter] = useState('ทั้งหมด');
  const [statusFilter, setStatusFilter] = useState('ทั้งหมด');

  // Filter professors based on search and filters
  const filteredProfessors = useMemo(() => {
    return MOCK_PROFESSORS.filter((prof) => {
      const matchesSearch =
        !searchQuery ||
        prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prof.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prof.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept =
        departmentFilter === 'ทั้งหมด' || prof.department === departmentFilter;

      return matchesSearch && matchesDept;
    });
  }, [searchQuery, departmentFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredProfessors.length / PROFESSORS_PER_PAGE));

  const paginatedProfessors = useMemo(() => {
    const start = (currentPage - 1) * PROFESSORS_PER_PAGE;
    return filteredProfessors.slice(start, start + PROFESSORS_PER_PAGE);
  }, [filteredProfessors, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1);
    setSelectedProfessor(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedProfessor(null);
  };

  const handleSelectProfessor = (professor: Professor) => {
    setSelectedProfessor(professor);
  };

  const handleBack = () => {
    setSelectedProfessor(null);
  };

  const isDetailOpen = selectedProfessor !== null;

  return (
    /*
     * Outer page container — max-width 1280px, centered with px padding.
     * This is the area within the page frame (below navbar, above footer).
     * The Figma page is 1280px wide. The content starts at x:85 (so ~85px padding each side).
     */
    <div className="w-full max-w-[1280px] mx-auto px-8">
      {/*
       * Title — "สืบค้นชื่อบุคลากร"
       * Page 1: y:155, width:1086, 32px w700 #000000
       * Page 2: y:155, width:434, 24px w700 #000000
       */}
      <h1
        className="font-[ChulaCharasNew] text-[#000000]"
        style={{
          fontSize: isDetailOpen ? '24px' : '32px',
          fontWeight: 700,
          marginTop: '74px', /* navbar is 81px, title y:155, so 155-81=74px margin */
          marginBottom: '22px', /* gap between title and search: 251-155-40≈56px → ~22px after title */
          lineHeight: 1.25,
        }}
      >
        สืบค้นชื่อบุคลากร
      </h1>

      {/*
       * Main content area — changes layout based on state:
       * STATE 1: single column
       * STATE 2: two columns (list left, detail right)
       */}
      <div className={`flex gap-0 ${isDetailOpen ? 'items-start' : ''}`}>
        {/* LEFT COLUMN — search + filters + list + pagination */}
        <div
          className="flex flex-col"
          style={{
            width: isDetailOpen ? '434px' : '100%',
            flexShrink: 0,
          }}
        >
          {/*
           * Frame 6175 — Search bar area
           * Page 1: 1086×41 (full width)
           * Page 2: 434×41 (narrow)
           */}
          <ProfessorSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            mode={isDetailOpen ? 'compact' : 'full'}
          />

          {/*
           * Frame 6346 — Filter dropdowns
           * Page 1: 410×192 positioned right-aligned (x:761 from left = 1171-410=761)
           * Page 2: 410×192 positioned at x:109 relative (from page 2 it's at x:109)
           * Both cases: HORIZONTAL gap:18 justify:MAX
           * The height:192 is odd — it may represent the filter section including space below
           * Actually looking at the data: gap:18 HORIZONTAL with justify:MAX means
           * the filters are right-aligned within their container
           */}
          <div
            className={`flex items-center mt-[16px] ${isDetailOpen ? 'justify-start' : 'justify-end'}`}
            style={{ gap: '18px' }}
          >
            <FilterDropdown
              label=" ภาควิชา"
              options={DEPARTMENT_OPTIONS}
              value={departmentFilter}
              onChange={(v) => { setDepartmentFilter(v); setCurrentPage(1); }}
            />
            <FilterDropdown
              label=" สถานภาพบุคลากร"
              options={STATUS_OPTIONS}
              value={statusFilter}
              onChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}
            />
          </div>

          {/*
           * Frame 6390 — Professor list
           * Page 1: x:248,y:382 width:784, gap:12, VERTICAL — centered within 1280px page
           * Page 2: x:85,y:382 width:434, gap:12, VERTICAL — left-aligned
           *
           * In page 1 state, the list is centered (x:248 from left edge means 248px left margin).
           * The page container is 1280px, content starts at x:85.
           * So the list sits at x:248-85=163px from the content area edge,
           * i.e. it's not full width — it's centered in the available 1086px space.
           * 1086 - 784 = 302px remaining → 151px on each side of the list.
           * So in full state, the list should be centered in the available width.
           */}
          <div
            className={`flex flex-col mt-[16px] ${!isDetailOpen ? 'mx-auto' : 'w-full'}`}
            style={{
              gap: '12px',
              width: isDetailOpen ? '100%' : '784px',
            }}
          >
            {paginatedProfessors.map((professor) => (
              <ProfessorCard
                key={professor.id}
                professor={professor}
                isSelected={selectedProfessor?.id === professor.id}
                onClick={handleSelectProfessor}
              />
            ))}

            {paginatedProfessors.length === 0 && (
              <div
                className="flex items-center justify-center py-16 font-[ChulaCharasNew] text-[#6D6D6D]"
                style={{ fontSize: '20px' }}
              >
                ไม่พบผลการค้นหา
              </div>
            )}
          </div>

          {/*
           * Pagination — Component 14/15
           * Page 1: x:477,y:1595 — centered
           * Page 2: x:121,y:1595 — left side
           */}
          {totalPages > 1 && (
            <div
              className={`mt-8 ${!isDetailOpen ? 'flex justify-center' : 'flex justify-center'}`}
            >
              <ProfessorPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — detail panel (only visible in STATE 2) */}
        {isDetailOpen && (
          <div
            className="flex-1 ml-0"
            style={{
              /* Frame 6388 starts at x:543 (from page left=0), left col ends at 85+434=519.
                 So the detail panel has ~24px gap from the left column. */
              paddingLeft: '24px',
              /* Frame 6388 top: y:80 (absolute from page top), navbar is 81px.
                 So the panel starts slightly above the content (at the nav level).
                 In practice, we align it to the top of the page content area. */
              marginTop: '-74px', /* align to top of page (compensate for title margin) */
            }}
          >
            {selectedProfessor && (
              <ProfessorDetailPanel professor={selectedProfessor} onBack={handleBack} />
            )}
          </div>
        )}
      </div>

      {/* Bottom spacing to match footer gap */}
      <div style={{ height: '74px' }} />
    </div>
  );
}
