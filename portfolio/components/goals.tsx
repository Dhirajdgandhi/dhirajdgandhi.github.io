import { Target } from "lucide-react";
import { goals } from "@/data/goals";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { Reveal } from "./motion/reveal";

const statusStyles: Record<string, string> = {
  exploring: "bg-amber-50 text-amber-700",
  "in-progress": "bg-accent-soft text-accent",
  done: "bg-emerald-50 text-emerald-700",
};

const statusLabel: Record<string, string> = {
  exploring: "Exploring",
  "in-progress": "In progress",
  done: "Done",
};

export function Goals() {
  return (
    <Section
      id="goals"
      eyebrow="Goals"
      title="What I'm working toward"
      intro="Direction over destination — the things I'm intentionally chasing right now."
      contentClassName="grid gap-4 sm:grid-cols-2"
    >
      {goals.map((g, i) => (
        <Reveal key={g.id} delayIndex={i} className="h-full">
          <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Target size={18} />
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                  statusStyles[g.status]
                )}
              >
                {statusLabel[g.status]}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {g.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-strong">
              {g.description}
            </p>
            <span className="mt-4 font-mono text-xs text-muted">{g.horizon}</span>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}
