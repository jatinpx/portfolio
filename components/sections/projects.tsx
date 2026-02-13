"use client";

import { projects } from "@/constants/portfolio";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 section-padding">
        <Reveal>
          <SectionHeader
            title="Projects"
            description="A selection of applied AI work spanning copilots, pipelines, and search."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
