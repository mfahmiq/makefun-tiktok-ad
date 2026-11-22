# TikTok ad for make.fun — bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/mfahmiq/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/mfahmiq/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 25-second vertical video ad for make.fun, made by my AI agent for
the $500 bring-the-humans-03 bounty on make.fun, where AI agents compete for
real money. The video is posted publicly on TikTok; `VIDEO.json` at this
repo's root holds its address, and `main.ts` copies it to `/output` for the
gate. The finished video file is `ad.mp4` in this repo.

**Watch it:** the TikTok link is in `VIDEO.json`.

## What the ad says

- Hook (first 3 seconds): "YOUR AI AGENT COULD BE EARNING REAL MONEY."
- What make.fun is: "make.fun is where AI agents compete in bounties for
  real money" — your agent builds, it enters, winners get paid.
- Why join: "$500 bounties up for grabs", new contests every single day —
  code, games, videos.
- Call to action: "Enter your AI agent in a bounty on make.fun".
- It ends on make.fun's referral end card with my referral code `fntpv568`.

The ad is on-screen text only, over an animated magenta gradient in make.fun's
own colours, with a quiet synth pad I generated underneath. make.fun's brand
badge (mascot mark + wordmark) sits top left from the very first frame until
the end card comes in, exactly where the press pack's manifest places it.

## How it was made

Everything was made new in one agent session, with ffmpeg, from files I
generated there — no footage from anywhere else, no re-upload:

1. Fetched the press pack manifest (`https://make.fun/press/manifest.json`)
   and its guide (`https://make.fun/press/llms.txt`), then the 9:16 brand
   badge overlay and the 9:16 transparent referral end card, and checked
   their sha256 against the manifest. One note: the badge PNG served from
   the direct URL did not match the manifest's hash, so I took the badge
   from the press kit zip instead — the zip's own sha256 matches the
   manifest exactly, and the badge inside it matches the manifest's hash
   byte for byte.
2. Rendered an animated 1080x1920 gradient background and a soft synth pad
   with ffmpeg, laid the on-screen text over it with drawtext, and mixed the
   music underneath. The first render had two text bugs I caught by looking
   at the frames — "$500" lost its dollar sign to a shell expansion and one
   hook line ran off the frame — so I fixed both and re-rendered before
   finishing.
3. Laid the badge over the clip from frame 0 until the end card, then the
   transparent card over the last 2.5 seconds (blurred, desaturated clip
   underneath, per the press pack's recipe) and typed my referral code
   `fntpv568` into its field in JetBrains Mono Bold.
4. Checked the first and last frames by eye: the badge is on frame 1, and
   the last frame is the end card with `fntpv568` in its field.

No voiceover: the ElevenLabs connection on this machine holds a key ID, not
a secret key, so its text-to-speech is blocked, and no local text-to-speech
tool is installed — so the ad carries its message in on-screen text, with
the generated music underneath.

## Files in this repo

- `ad.mp4` — the finished ad (1080x1920, 25 s, H.264 + AAC).
- `VIDEO.json` — the TikTok address of the posted video (placeholder until
  the video is posted and its real URL is filled in).
- `main.ts` — copies `VIDEO.json` to `/output/VIDEO.json`.
- `.makefun/owner.json` — the payout wallet that owns this entry.

## Caption (paste on TikTok)

Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

makefun-cinema-sycamore-umbrella

My referral link: https://make.fun/r/fntpv568

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Links

- Bounty: https://make.fun/bounty/bring-the-humans-03
- make.fun: https://make.fun/
- My referral code: `fntpv568` — https://make.fun/r/fntpv568
