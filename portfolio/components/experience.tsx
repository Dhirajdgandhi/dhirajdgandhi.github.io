import { experience } from "@/data/experience";
import { Section } from "./section";
import { Reveal } from "./motion/reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Work experience"
      title="Where I've made an impact"
      intro="A few years of building scalable systems and intelligent features — from payments APIs to Google Ads."
    >
      <ol className="space-y-8">
        {experience.map((job, i) => {
          const isLast = i === experience.length - 1;
          return (
            <Reveal as="li" key={job.id} delayIndex={i} className="group flex gap-5">
              {/* Logo node + connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ boxShadow: `0 0 0 3px var(--background)` }}
                >
                  {job.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <span
                      className="text-sm font-semibold"
                      style={{ color: job.accent ?? "var(--accent)" }}
                    >
                      {job.company[0]}
                    </span>
                  )}
                </div>
                {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {job.role}
                    <span className="text-muted"> · {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.start} — {job.end}
                  </span>
                </div>

                {job.team && (
                  <p className="mt-0.5 text-sm text-muted-strong">{job.team}</p>
                )}
                <p className="text-xs text-muted">{job.location}</p>

                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex gap-2 text-sm leading-relaxed text-muted-strong"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                      {h}
                    </li>
                  ))}
                </ul>

                {job.stack && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-surface px-2 py-0.5 font-mono text-[11px] text-muted-strong"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
