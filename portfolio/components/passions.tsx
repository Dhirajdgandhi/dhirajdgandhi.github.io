"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { passions } from "@/data/passions";
import { cn } from "@/lib/utils";
import { Section } from "./section";

/** Pull the 11-char video id out of any common YouTube URL (or a bare id). */
function youTubeId(input: string): string {
  const direct = input.match(/^[\w-]{11}$/);
  if (direct) return input;
  const m = input.match(
    /(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/
  );
  return m ? m[1] : input;
}

function Media({
  media,
  title,
}: {
  media: (typeof passions)[number]["media"];
  title: string;
}) {
  const [errored, setErrored] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!media || errored) {
    return (
      <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface to-background">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {title}
        </span>
      </div>
    );
  }

  if (media.type === "youtube") {
    const id = youTubeId(media.src);
    const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
    if (media.start != null) params.set("start", String(Math.floor(media.start)));
    if (media.end != null) params.set("end", String(Math.floor(media.end)));
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}?${params.toString()}`}
        title={media.alt ?? title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  if (media.type === "video") {
    // Resolve a trim bound: values in (0,1] are a fraction of duration.
    const resolve = (v: number | undefined, dur: number, fallback: number) => {
      if (v == null || Number.isNaN(dur) || dur <= 0) return fallback;
      return v > 0 && v <= 1 ? v * dur : v;
    };

    const applyStart = () => {
      const el = videoRef.current;
      if (!el) return;
      const start = resolve(media.start, el.duration, 0);
      if (Number.isFinite(start) && start > 0) el.currentTime = start;
    };

    const enforceTrim = () => {
      const el = videoRef.current;
      if (!el) return;
      const start = resolve(media.start, el.duration, 0);
      const end = resolve(media.end, el.duration, el.duration);
      if (el.currentTime >= end || el.currentTime < start) {
        el.currentTime = start;
        void el.play();
      }
    };

    return (
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={applyStart}
        onTimeUpdate={enforceTrim}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        media.fit === "contain" && "bg-surface"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={media.src}
        alt={media.alt ?? title}
        className={cn(
          "h-full w-full",
          media.fit === "contain" ? "object-contain" : "object-cover"
        )}
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export function Passions() {
  const [active, setActive] = useState(passions[0]?.id);
  const current = passions.find((p) => p.id === active) ?? passions[0];

  return (
    <Section
      id="passions"
      eyebrow="What I'm passionate about"
      title="Life beyond the keyboard"
      intro="The things that keep me curious, balanced, and connected. Pick one."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {passions.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-all",
              active === p.id
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-strong hover:border-border-strong hover:text-foreground"
            )}
          >
            {p.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="aspect-[4/3] w-full">
                <Media media={current.media} title={current.title} />
              </div>
              {current.media?.caption && (
                <p className="border-t border-border bg-surface px-4 py-2.5 text-xs text-muted-strong">
                  {current.media.caption}
                </p>
              )}
            </div>

            {current.media?.gallery && current.media.gallery.length > 0 && (
              <div
                className={cn(
                  "grid gap-3",
                  current.media.gallery.length > 1 ? "grid-cols-2" : "grid-cols-1"
                )}
              >
                {current.media.gallery.map((g) => (
                  <div
                    key={g.src}
                    className="aspect-[2/1] overflow-hidden rounded-xl border border-border"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.src}
                      alt={g.alt ?? current.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold tracking-tight">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{current.tagline}</p>
            <p className="mt-4 leading-relaxed text-muted-strong">
              {current.story}
            </p>

            {current.links && current.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {current.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-strong transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            )}

            {current.stats.length > 0 && (
              <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-6">
                {current.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs text-muted">{s.label}</dt>
                    <dd className="mt-1 text-lg font-semibold tracking-tight">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
