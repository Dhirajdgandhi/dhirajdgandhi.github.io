import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into `out/` so GitHub Pages can
  // serve it directly with no Node/npm at runtime.
  output: "export",
  // Route folders (e.g. /experience/index.html) so paths resolve on Pages.
  trailingSlash: true,
  // We use plain <img>, so disable the Image Optimization API (needs a server).
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
