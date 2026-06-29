import type { Metadata } from "next";
import { Projects } from "@/components/projects";
import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <Projects />
    </PageShell>
  );
}
