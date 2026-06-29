import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // This repo lives next to other lockfiles; pin the workspace root so Next
  // doesn't infer the parent directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
