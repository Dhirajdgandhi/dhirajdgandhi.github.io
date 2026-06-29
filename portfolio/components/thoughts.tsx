import { ArrowUpRight, PenLine } from "lucide-react";
import { thoughts } from "@/data/thoughts";
import { Section } from "./section";
import { Reveal } from "./motion/reveal";

export function Thoughts() {
  return (
    <Section
      id="thoughts"
      eyebrow="Thoughts"
      title="Things on my mind"
      intro="Short notes on engineering, people, and everything in between."
      contentClassName="divide-y divide-border border-y border-border"
    >
      {thoughts.map((t, i) => {
        const isLink = t.href && t.href !== "#";
        const Wrapper = isLink ? "a" : "div";
        return (
          <Reveal key={t.id} delayIndex={i}>
            <Wrapper
              {...(isLink ? { href: t.href, target: "_blank", rel: "noreferrer" } : {})}
              className="group flex items-start gap-4 py-6 transition-colors hover:bg-surface/60"
            >
              <PenLine className="mt-1 h-4 w-4 shrink-0 text-accent/70" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-accent">
                    {t.title}
                  </h3>
                  {isLink && (
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-strong">
                  {t.excerpt}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="font-mono">{t.date}</span>
                  {t.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface px-1.5 py-0.5 font-mono text-[11px]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Wrapper>
          </Reveal>
        );
      })}
    </Section>
  );
}
