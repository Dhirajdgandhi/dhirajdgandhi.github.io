import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "./icon";
import { Reveal } from "./motion/reveal";

export function Connect() {
  return (
    <section id="connect" className="px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Connect
          </span>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something, or just say hi.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            I&apos;m always up for a good conversation — about intelligent systems,
            a side project, or where to ski next.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-1">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-strong transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
