import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description: React.ReactNode;
  className?: string;
};

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </p>
      <h2 className="display-text text-3xl font-semibold text-foreground sm:text-4xl">
        {description}
      </h2>
    </div>
  );
}
