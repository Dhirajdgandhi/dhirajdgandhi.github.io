import type { Metadata } from "next";
import { Passions } from "@/components/passions";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Passions — ${profile.name}`,
};

export default function PassionsPage() {
  return (
    <PageShell>
      <Passions />
    </PageShell>
  );
}
