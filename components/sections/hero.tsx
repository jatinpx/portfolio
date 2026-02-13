"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { heroCopy } from "@/constants/portfolio";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24">
      <div className="mx-auto grid max-w-6xl gap-10 section-padding lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {heroCopy.location}
          </p>
          <h1 className="display-text text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {heroCopy.name}
            <span className="block text-muted-foreground">{heroCopy.role}</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {heroCopy.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <Tilt>
            <div className="glass flex flex-col gap-6 rounded-[var(--radius-lg)] p-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Currently
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Designing trustworthy AI systems for high-stakes teams.
                </p>
                <p className="text-sm text-muted-foreground">
                  {heroCopy.availability}
                </p>
              </div>
              <div className="grid gap-4 rounded-[var(--radius-lg)] bg-muted/70 p-4">
                <div>
                  <p className="text-xs text-muted-foreground">Specialties</p>
                  <p className="text-sm font-semibold text-foreground">
                    Gen-AI, Retrieval, Product Design
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="text-sm font-semibold text-foreground">
                    Building with integrity, reliability, and polish.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
