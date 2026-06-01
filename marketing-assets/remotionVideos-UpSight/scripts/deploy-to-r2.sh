#!/bin/bash
# Upload rendered videos to Cloudflare R2
# Usage: ./scripts/deploy-to-r2.sh [specific-file.mp4]

export CLOUDFLARE_ACCOUNT_ID=1bde90f07a6fb51a2c287bf052f90e76
BUCKET="upsight-assets"
PUBLIC_URL="https://pub-0332ea3a4c2e45899d4c374547d95427.r2.dev"

if [ -n "$1" ]; then
  FILES=("out/$1")
else
  FILES=(out/*.mp4)
fi

for file in "${FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "⚠️  Not found: $file"
    continue
  fi
  name=$(basename "$file")
  echo "📤 Uploading $name..."
  wrangler r2 object put "$BUCKET/videos/$name" \
    --file="$file" \
    --content-type="video/mp4" \
    --remote
  echo "✅ $PUBLIC_URL/videos/$name"
  echo ""
done

echo "🎉 Done!"
