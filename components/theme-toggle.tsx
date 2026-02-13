"use client";

import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    { label: "System", value: "system" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Sand", value: "sand" },
    { label: "Ocean", value: "ocean" },
    { label: "Forest", value: "forest" },
    { label: "Rose", value: "rose" },
    { label: "Slate", value: "slate" },
  ];

  return (
    <div ref={menuRef} className="relative z-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-10 items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3 text-foreground transition hover:-translate-y-0.5 hover:border-border hover:bg-muted/80",
          className
        )}
        aria-label="Theme options"
      >
        <span className="relative flex h-4 w-4 items-center justify-center">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 w-44 rounded-[var(--radius-lg)] border border-border/70 bg-background p-2 shadow-xl">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setTheme(option.value);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-[var(--radius-lg)] px-3 py-2 text-left text-sm transition",
                theme === option.value
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              <span>{option.label}</span>
              {theme === option.value ? (
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  On
                </span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
