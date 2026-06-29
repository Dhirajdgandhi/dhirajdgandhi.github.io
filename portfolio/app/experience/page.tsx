import type { Metadata } from "next";
import { Experience } from "@/components/experience";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <Experience />
    </PageShell>
  );
}
