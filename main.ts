// makefun-tiktok-ad — bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the video itself: an original 25-second vertical ad for make.fun
// (1080x1920, H.264 + AAC), made in this session with ffmpeg from graphics and
// text I generated here, carrying make.fun's brand badge from its first frame
// and ending on the press pack's referral end card with my referral code
// fntpv568 typed into its field. The video is posted publicly on TikTok and
// its address is what this program hands in.
//
// What this program does is small on purpose: it reads VIDEO.json from the
// repository root, checks it is a JSON object with a string `url` naming the
// TikTok video, and copies it byte for byte to /output/VIDEO.json, where the
// gate reads it. Nothing this program writes about the video is scored — the
// house reads the video itself from TikTok and counts its views.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');

// Read the address first so a malformed VIDEO.json fails loudly instead of
// silently copying a bad entry through to the gate.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  ((parsed as { url: string }).url.length === 0)
) {
  console.error('VIDEO.json must be a JSON object with a non-empty string `url`.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
