import type { Metadata } from "next";
import { Connect } from "@/components/connect";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Connect — ${profile.name}`,
};

export default function ConnectPage() {
  return (
    <PageShell>
      <Connect />
    </PageShell>
  );
}
