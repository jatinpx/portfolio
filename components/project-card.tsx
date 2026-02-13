import Image from "next/image";
import Link from "next/link";
import { Tilt } from "@/components/tilt";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  live: string;
  notes?: string;
};

export function ProjectCard({
  title,
  description,
  stack,
  image,
  github,
  live,
  notes,
}: ProjectCardProps) {
  return (
    <Tilt className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-card/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex h-full flex-col gap-4 p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {notes ? (
              <p className="text-xs text-muted-foreground">{notes}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm font-medium">
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 px-4 py-2 text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-4 py-2 text-background transition hover:bg-foreground/90"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </article>
    </Tilt>
  );
}
