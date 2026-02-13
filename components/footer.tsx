import Link from "next/link";
import { contactLinks } from "@/constants/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 section-padding sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 Jatin Panghal. Crafted for ambitious teams.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
