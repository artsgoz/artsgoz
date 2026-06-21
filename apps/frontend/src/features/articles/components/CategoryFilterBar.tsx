import { Chip } from '@org/design-system';

interface CategoryFilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilterBar({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterBarProps) {
  return (
    <div className="flex gap-[12px] overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">
      {categories.map((category) => (
        <Chip
          key={category}
          size="large"
          selected={selectedCategory === category}
          onClick={() => onSelect(category)}
          className="snap-start"
        >
          {category}
        </Chip>
      ))}
    </div>
  );
}
