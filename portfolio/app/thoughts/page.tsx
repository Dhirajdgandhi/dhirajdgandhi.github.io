import type { Metadata } from "next";
import { Thoughts } from "@/components/thoughts";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Thoughts — ${profile.name}`,
};

export default function ThoughtsPage() {
  return (
    <PageShell>
      <Thoughts />
    </PageShell>
  );
}
