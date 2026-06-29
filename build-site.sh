#!/usr/bin/env bash
#
# Rebuild the static portfolio and publish it to the repo root.
#
# The site source lives in ./portfolio (a Next.js app). This script statically
# exports it and copies the output to the repo root so GitHub Pages serves it
# directly — no Node/npm needed at runtime, only to regenerate.
#
# Usage:  ./build-site.sh   then commit & push.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT/portfolio"

echo "→ Building static export..."
npm run build

echo "→ Copying export to repo root..."
cp -R out/. "$ROOT/"

# Required so GitHub Pages serves the _next/ assets folder (Jekyll ignores _*).
touch "$ROOT/.nojekyll"

echo "✓ Done. Static site is at the repo root."
echo "  Next: git add -A && git commit -m 'Update site' && git push"
