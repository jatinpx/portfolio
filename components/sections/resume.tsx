"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 section-padding">
        <Reveal>
          <SectionHeader
            title="Resume"
            description="Download a concise overview of experience, research, and impact."
          />
        </Reveal>
        <Reveal className="glass flex flex-col items-start gap-6 rounded-[var(--radius-lg)] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Software Development Engineer Resume
            </p>
            <p className="text-sm text-muted-foreground">
              Updated February 2026 · PDF format
            </p>
          </div>
          <Link
            href="https://drive.google.com/file/d/1LFnMRJ-ikRl8qZyeH7EXzMi5wP1KQfH8/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5"
          >
            Resume
            <Download className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
