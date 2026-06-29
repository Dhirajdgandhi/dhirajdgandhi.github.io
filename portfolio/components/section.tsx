import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion/reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  contentClassName,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-6 py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <header className="mb-12 max-w-2xl">
            {eyebrow && (
              <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </span>
            )}
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {intro}
              </p>
            )}
          </header>
        </Reveal>
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
