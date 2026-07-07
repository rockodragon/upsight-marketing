#!/usr/bin/env bash
# Create a new video project from _template-video
# Usage: ./scripts/new-video.sh upsight-my-new-video

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SLUG="${1:-}"

if [[ -z "$SLUG" ]]; then
  echo "Usage: ./scripts/new-video.sh <video-slug>"
  echo "Example: ./scripts/new-video.sh upsight-sales-followup"
  exit 1
fi

if [[ "$SLUG" == _* ]]; then
  echo "Error: slug cannot start with underscore (reserved for _template-video, _shared)."
  exit 1
fi

DEST="$ROOT/$SLUG"
TEMPLATE="$ROOT/_template-video"

if [[ -e "$DEST" ]]; then
  echo "Error: $DEST already exists."
  exit 1
fi

cp -R "$TEMPLATE" "$DEST"

# Personalize script id/title
if command -v sed &>/dev/null; then
  sed -i '' "s/VIDEO_SLUG/$SLUG/g" "$DEST/01-script/hero.script.json" 2>/dev/null || \
    sed -i "s/VIDEO_SLUG/$SLUG/g" "$DEST/01-script/hero.script.json"
  sed -i '' "s/VIDEO_SLUG/$SLUG/g" "$DEST/05-remotion/package.json" 2>/dev/null || \
    sed -i "s/VIDEO_SLUG/$SLUG/g" "$DEST/05-remotion/package.json"
fi

# Symlink assets → remotion public
ln -sf ../04-assets "$DEST/05-remotion/public"

echo "Created: $DEST"
echo ""
echo "Next steps:"
echo "  1. Edit $SLUG/01-script/hero.script.json"
echo "  2. Edit $SLUG/01-script/hero.prompt.md"
echo "  3. cd $SLUG/05-remotion && npm install && npm run studio"
