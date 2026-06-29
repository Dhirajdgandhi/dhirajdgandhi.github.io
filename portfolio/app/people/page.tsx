import type { Metadata } from "next";
import { People } from "@/components/people";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `People — ${profile.name}`,
};

export default function PeoplePage() {
  return (
    <PageShell>
      <People />
    </PageShell>
  );
}
