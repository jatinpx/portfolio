"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { navLinks } from "@/constants/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between section-padding">
        <Link href="#hero" className="text-lg font-semibold tracking-tight">
          <span className="display-text">JP</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="border-t border-border/50 bg-muted/40">
        <div className="marquee-wrap relative z-10 w-full">
          <div className="marquee px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:px-10 lg:px-16">
            <span>Ethics</span>
            <span>AI</span>
            <span>Frontend</span>
            <span>Engineering</span>
            <span>Trust</span>
            <span>Reliability</span>
            <span>Product Craft</span>
            <span>APIs</span>
            <span>Ethics</span>
            <span>AI</span>
            <span>Frontend</span>
            <span>Engineering</span>
            <span>Trust</span>
            <span>Reliability</span>
            <span>Product Craft</span>
            <span>APIs</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          isOpen ? "border-t border-border/60" : "hidden"
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
