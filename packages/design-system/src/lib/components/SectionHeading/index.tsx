interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col w-full">
      <h2 className="w-full text-black text-left font-serif text-[24px] font-bold leading-[30px] lg:font-[family:var(--font-desktop-heading-2xl,ChulaCharasNew)] lg:text-[length:var(--typography-desktop-heading-2xl-size,36px)] lg:font-[var(--typography-desktop-heading-2xl-weight-bold,700)] lg:leading-[var(--leading-desktop-heading-2xl,48px)]">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--color-text-subtle,#6D6D6D)] font-serif text-[16px] mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
