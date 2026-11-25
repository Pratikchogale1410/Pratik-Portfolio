# Palette

**Status: not sampled from the video.** The brief asked for pixel sampling from `/home/kalpesh/Downloads/screen-capture.webm`, but that file does not exist on this machine (the search found no `screen-capture*` file), and no frame extraction tool (ffmpeg) is installed. The values below are the brief's estimates. Sample them from the real recording before treating them as final.

## Colours in use

| Token | Hex | Use |
|---|---|---|
| `--hm-navy` | `#0A1030` | Hero, Impact, How I Build, Footer, mobile menu |
| `--hm-royal` | `#1F4BFF` | Impact block, zoom circle, badges, buttons' arrow chips, cursor trail |
| `--hm-lime` | `#C8F04A` | Accent italic word in hero, `.DEV` mark, Impact "after" figure, footer wordmark glow |
| `--hm-ink` | `#0B0B0F` | Body text on light sections, primary buttons |
| `--hm-white` | `#FFFFFF` | Light section background, hero text on navy |
| `--hm-ink-muted` | `rgba(11,11,15,0.56)` | Secondary text on light sections |
| `--hm-on-navy-muted` | `rgba(255,255,255,0.64)` | Secondary text on navy |
| `--hm-lavender` | `#E8E6FF` | Pastel card tint |
| `--hm-peach` | `#FFD9C4` | Pastel card tint |
| `--hm-cream` | `#FFF1D6` | Pastel card tint (Experience) |
| `--hm-mint` | `#D7F5C8` | Pastel card tint |
| `--hm-pink` | `#FFD0E8` | Pastel card tint |
| `--hm-sky` | `#CFE0FF` | Pastel card tint, Developer card |

## Contrast checks still to do

- Royal `#1F4BFF` with white text: about 4.6:1 (passes AA for normal text). Recheck once sampled values replace the estimates.
- Lime `#C8F04A` on navy: well above 4.5:1, used for accents only.
- `--hm-ink-muted` on pastel tints: about 4.5:1 on white, lower on peach and pink. Check before release.

## Where the values live

- Tokens: `app/styles/home.css`, `:root` block at the top.
- Pastel tints are also in `app/components/home/*.tsx` as `hm-tint-*` classes.
