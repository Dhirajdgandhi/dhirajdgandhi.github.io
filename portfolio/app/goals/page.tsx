import type { Metadata } from "next";
import { Goals } from "@/components/goals";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Goals — ${profile.name}`,
};

export default function GoalsPage() {
  return (
    <PageShell>
      <Goals />
    </PageShell>
  );
}
