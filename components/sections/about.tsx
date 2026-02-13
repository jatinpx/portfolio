"use client";

import { aboutCopy, aboutStats } from "@/constants/portfolio";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Tilt } from "@/components/tilt";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 section-padding lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6">
          <SectionHeader title="About" description={aboutCopy.headline} />
          <p className="text-base text-muted-foreground">{aboutCopy.summary}</p>
          <div className="flex flex-wrap gap-2">
            {aboutCopy.chips.map((item) => (
              <motion.span
                key={item}
                drag
                dragConstraints={{ left: -8, right: 8, top: -6, bottom: 6 }}
                dragElastic={0.2}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Reveal>
        <Reveal className="grid gap-5">
          <div className="grid gap-4">
            {aboutCopy.highlights.map((item) => (
              <Tilt key={item}>
                <div className="group flex items-center gap-3 rounded-[var(--radius-lg)] border border-border/70 bg-card/70 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              </Tilt>
            ))}
          </div>
          <Tilt>
            <div className="grid gap-3 rounded-[var(--radius-lg)] border border-border/70 bg-muted/50 p-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold text-foreground">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
