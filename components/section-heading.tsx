import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">{title}</h2>
        {description && <p className="prose-copy mt-3 max-w-xl text-sm sm:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}
