#!/usr/bin/env bash
# Trim an interview MP4 to an evidence window using UpSight millisecond anchors.
#
# Usage:
#   ./clip-evidence.sh \
#     --input ../02-capture/full-interview.mp4 \
#     --start-ms 245000 \
#     --end-ms 258000 \
#     --output ../04-assets/video/speakers/speaker-1.mp4
#
# Optional padding (seconds, default 1.5):
#   --pad 2

set -euo pipefail

INPUT=""
OUTPUT=""
START_MS=""
END_MS=""
PAD="1.5"

usage() {
  echo "Usage: $0 --input FILE --start-ms MS --end-ms MS --output FILE [--pad SECONDS]"
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --input) INPUT="$2"; shift 2 ;;
    --output) OUTPUT="$2"; shift 2 ;;
    --start-ms) START_MS="$2"; shift 2 ;;
    --end-ms) END_MS="$2"; shift 2 ;;
    --pad) PAD="$2"; shift 2 ;;
    -h|--help) usage ;;
    *) echo "Unknown arg: $1"; usage ;;
  esac
done

[[ -n "$INPUT" && -n "$OUTPUT" && -n "$START_MS" && -n "$END_MS" ]] || usage
[[ -f "$INPUT" ]] || { echo "Input not found: $INPUT"; exit 1; }

if ! command -v ffmpeg &>/dev/null; then
  echo "ffmpeg not found. Install: brew install ffmpeg"
  echo "Or trim manually in QuickTime / ScreenStudio and skip this script."
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT")"

# ms → seconds with padding
START_SEC=$(awk -v ms="$START_MS" -v pad="$PAD" 'BEGIN { s = ms/1000 - pad; print (s < 0 ? 0 : s) }')
END_SEC=$(awk -v ms="$END_MS" -v pad="$PAD" 'BEGIN { print ms/1000 + pad }')

echo "Trimming ${START_SEC}s → ${END_SEC}s from $(basename "$INPUT")"

ffmpeg -hide_banner -y \
  -ss "$START_SEC" \
  -to "$END_SEC" \
  -i "$INPUT" \
  -c:v libx264 -crf 18 -preset fast \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "$OUTPUT"

echo "Wrote: $OUTPUT"
