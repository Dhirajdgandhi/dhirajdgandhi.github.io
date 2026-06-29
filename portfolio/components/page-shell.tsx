import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps a routed section page so its content clears the fixed nav and the page
 * fills the viewport (footer stays at the bottom on short sections).
 */
export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-svh pt-16", className)}>{children}</div>
  );
}
