export type ActiveTab = 'curriculum' | 'planner' | 'summary';

interface AcademicTrackerNavBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  showSummary: boolean;
}

/**
 * AcademicTrackerNavBar — matches Figma node 4903-12381
 * Gray background bar (F7F8F9, h=38px, rounded-8px).
 * Active tab: pink fill (#E992B4), white bold text, rounded-top (12px 12px 0 0),
 *   box-shadow: 0 0 4px rgba(0,0,0,0.25), py-12px px-64px.
 * Inactive tab: white fill, pink text (#DE5D8F), same shadow + rounded-top shape.
 * Tabs sit slightly above the bar baseline (absolute positioned -5px up).
 */
export function AcademicTrackerNavBar({ activeTab, onTabChange, showSummary }: AcademicTrackerNavBarProps) {
  const tabs: { key: ActiveTab; label: string }[] = [
    { key: 'curriculum', label: 'หลักสูตร' },
    { key: 'planner', label: 'วางแผน' },
    ...(showSummary ? [{ key: 'summary' as ActiveTab, label: 'สรุปข้อมูลหลักสูตร' }] : []),
  ];

  return (
    <div
      className="relative w-full"
      style={{ height: '38px' }}
    >
      {/* Background bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '38px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
        }}
      />

      {/* Tabs row — floats over the bar */}
      <div
        className="absolute left-0 flex items-end gap-[16px]"
        style={{ bottom: 0, transform: 'translateY(0)' }}
      >
        {tabs.map(({ key, label }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              id={`tab-${key}`}
              onClick={() => onTabChange(key)}
              className="cursor-pointer transition-all"
              style={{
                padding: '12px 64px',
                fontFamily: 'ChulaCharasNew, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: '28px',
                color: isActive ? '#FFFFFF' : '#DE5D8F',
                backgroundColor: isActive ? '#E992B4' : '#FFFFFF',
                borderRadius: '12px 12px 0px 0px',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                border: 'none',
                outline: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
