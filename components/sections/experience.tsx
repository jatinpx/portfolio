"use client";

import { experiences } from "@/constants/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 section-padding">
        <Reveal>
          <SectionHeader
            title="Experience"
            description="Roles spanning software development, research, Production grade AI."
          />
        </Reveal>
        <div className="grid gap-6">
          {experiences.map((item, index) => (
            <Reveal
              key={item.role}
              className="relative rounded-[var(--radius-lg)] border border-border/70 bg-card/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-border hover:shadow-xl"
              delay={index * 0.05}
            >
              <div className="absolute left-0 top-6 h-[calc(100%-3rem)] w-px bg-border/70" />
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {item.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {item.summary}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
