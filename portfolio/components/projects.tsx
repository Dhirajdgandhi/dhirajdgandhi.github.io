import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "./section";
import { Reveal } from "./motion/reveal";
import { SocialIcon } from "./icon";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Side quests"
      title="Technical projects"
      intro="Things I've built for fun and learning, outside the day job."
      contentClassName="grid gap-5 sm:grid-cols-2"
    >
      {projects.map((p, i) => (
        <Reveal key={p.id} delayIndex={i} className="h-full">
          <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.18)]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              {p.year && (
                <span className="font-mono text-xs text-muted">{p.year}</span>
              )}
            </div>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-strong">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted-strong"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} repository`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-strong transition-colors hover:text-foreground"
                >
                  <SocialIcon name="github" className="h-4 w-4" />
                  Code
                </a>
              )}
              {p.demo && p.demo !== "#" && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} live demo`}
                  className="inline-flex items-center gap-1 text-sm text-muted-strong transition-colors hover:text-foreground"
                >
                  Live
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  );
}
