import { ArrowUpRight, Quote } from "lucide-react";
import { people } from "@/data/people";
import { Section } from "./section";
import { Reveal } from "./motion/reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function People() {
  return (
    <Section
      id="people"
      eyebrow="People I worked with"
      title="The people behind the work"
      intro="Work is a team sport. Here are a few of the people I've been lucky to build alongside."
      contentClassName="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((p, i) => (
        <Reveal key={p.id} delayIndex={i} className="h-full">
          <figure className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
            <Quote className="h-5 w-5 text-accent/60" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-strong">
              “{p.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent-soft text-xs font-semibold text-accent">
                {p.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.avatar} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  initials(p.name)
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-sm font-medium">
                  {p.href && p.href !== "#" ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 hover:text-accent"
                    >
                      {p.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    p.name
                  )}
                </div>
                <div className="truncate text-xs text-muted">
                  {p.title} · {p.relationship}
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </Section>
  );
}
