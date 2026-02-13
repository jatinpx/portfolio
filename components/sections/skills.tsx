"use client";

import { Brain, MonitorDot, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/constants/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const icons = [Brain, Server, MonitorDot, Wrench];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 section-padding">
        <Reveal>
          <SectionHeader
            title="Skills"
            description="Deep expertise across AI systems, product engineering, and scale."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                key={group.title}
                className="rounded-[var(--radius-lg)] border border-border/70 bg-card/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-border hover:shadow-xl"
                delay={index * 0.05}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
