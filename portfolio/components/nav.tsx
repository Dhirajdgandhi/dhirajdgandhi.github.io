"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/people", label: "People" },
  { href: "/passions", label: "Passions" },
  { href: "/goals", label: "Goals" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/projects", label: "Projects" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || pathname !== "/"
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {profile.shortName}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                isActive(l.href)
                  ? "bg-surface text-foreground"
                  : "text-muted-strong hover:bg-surface hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/connect"
            className="ml-2 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Connect
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition-transform",
                open && "translate-y-[3px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-foreground transition-transform",
                open && "-translate-y-[3px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive(l.href)
                    ? "bg-surface text-foreground"
                    : "text-muted-strong hover:bg-surface hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/connect"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
