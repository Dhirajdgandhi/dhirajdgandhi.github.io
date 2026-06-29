"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "./icon";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16"
      >
        {profile.photo && (
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-52 overflow-hidden rounded-3xl border border-border shadow-[0_24px_70px_-24px_rgba(0,0,0,0.35)] sm:w-64 lg:w-full lg:max-w-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        )}

        <div>
        {profile.availability && (
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-strong"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.div>
        )}

        <motion.p
          variants={item}
          className="mb-4 flex items-center gap-2 text-sm text-muted"
        >
          {profile.role}
          <span className="text-border-strong">·</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </span>
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.summary.split(/\n{2,}/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/connect"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Résumé
            </a>
          )}

          <div className="ml-1 flex items-center gap-1">
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
        </motion.div>
        </div>
      </motion.div>

      <Link
        href="/experience"
        aria-label="Go to experience"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </Link>
    </section>
  );
}
