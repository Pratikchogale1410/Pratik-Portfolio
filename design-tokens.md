# Design tokens: extracted from https://techwitpro.com/

Source: the reference's compiled CSS bundles (`/_next/static/chunks/0oqsdshhug51p.css`, `1u1o0sbf58rm6.css`), fetched with curl on this date. Values marked **(est.)** could not be read from source and were estimated from a 1440px screenshot.

## A. Colors

| Token | Reference value | Used for |
|---|---|---|
| `--background` / `--ink` | `#010d23` | Page background |
| `--surface` | `#071433` | Raised panels |
| `--surface-2` | `#0b1a3d` | Secondary panels |
| `--foreground` | `#ffffff` | Primary text |
| `--muted` | `#d3d5dd` | Body copy |
| `--muted-2` | `#9aa0b4` | Subtle labels |
| `--primary` | `#0056fb` | Brand blue, primary button fill |
| `--primary-bright` | `#1163ff` | Button hover / gradient stop |
| `--border` | `#ffffff1f` (white 12%) | Card and header borders |
| Glass card fill | `#08163059` (navy 35%) + `backdrop-filter: blur(18px)` | `.glass-card` |
| Pill nav fill | `#010d23c7` (ink 78%) | Header in pill mode |
| Pricing banner | `#081630a6`, border `#ffffff14`, inset `#8cb4ff33` | Banner surfaces |
| Accent tones | `#4ade80` (green), `#7aa7ff` (blue), `#ff6b70` (red) | Status tones |
| Hero glow | blue radial gradient centered low on the hero, `#0056fb` family (est.) | Hero backdrop |

Button and CTA: solid `--primary` with a `--primary-bright` hover. White circular icon chip on the right.

## B. Typography

| Role | Family (reference) | Notes |
|---|---|---|
| Sans (all UI and headings) | `HelveticaNowDisplay` (Regular 400, Medium 500, Bold 700, ExtraBold 800), fallback `--font-body` | Licensed font. **Not replicable here**; substituted with Inter (already in project). |
| Display italic accent | `Cormorant` 700 italic (`.text-display-accent`) | Used for the italic accent words in headlines ("SaaS And AI Teams"). Loaded here with `next/font/google`. |
| Mono | `ui-monospace` stack | Not used on the main page. |

Weights: `--font-weight-normal 400`, `medium 500`, `semibold 600`, `bold 700`, `extrabold 800`.
Leading: `--leading-tight 1.25`, `--leading-snug 1.375`. Tracking: `--tracking-wide .025em`.

Responsive sizes (exact `clamp()` values from the bundle):

| Token | Value |
|---|---|
| `--ct-title` | `clamp(1.75rem, 2.99vw, 2.6875rem)` |
| `--ct-title-italic` | `clamp(2rem, 3.33vw, 3rem)` |
| `--ct-body` | `clamp(.9375rem, 1.18vw, 1.0625rem)` |
| `--ct-role` | `clamp(.8125rem, .97vw, .875rem)` |
| `--ct-name` | `clamp(1.125rem, 1.53vw, 1.375rem)` |

Hero H1 size: **(est.)** about 64px at 1440px (the screenshot shows two lines roughly 70px apart). Not in the extracted CSS; treat as an estimate and tune against the screenshot.

## C. Layout

| Token | Value |
|---|---|
| Container | `--container: 1240px` (`max-width`) |
| Card radius | `24px` (`.glass-card`) |
| Card border | 1px, `#ffffff1f` |
| Pill header height | `62px`, width `min(100% - 24px, var(--pill-w, 760px))` |
| Pill header padding | `0 10px 0 22px` |
| Pill logo width | `45px` |
| Gutters | `clamp(1.5rem, 2.64vw, 2.375rem)` gap (`--ct-gap`), `--ct-pad: 6.25rem` on wide screens, `1rem` on mobile |
| Card size | `--ct-card-w: clamp(13.75rem, 19.86vw, 17.875rem)`, `--ct-card-h: clamp(16.8rem, 24.3vw, 21.875rem)` |

Button radius: pill (fully rounded) (est.; the button class is hashed in the bundle, so the exact value is inferred from the screenshot).

## D. Background treatments

- Hero: radial blue glow over `#010d23`, sparse twinkling star dots (`hero-star-twinkle`, opacity .15 to .9, scale .75 to 1.2), faint perspective pixel grid (`#ffffff14` 1px lines), and a blurred blue bottom "marquee" (`filter: blur(64px) saturate(1.2)`, `mix-blend-mode: screen`).
- Sunshine rays (`hero-sunshine-a/b`): blurred, rotated, screen-blended gradients.

## What is replaced on this site

Only styling. Content stays. The reference's logo, avatars, AI-tool icons and case-study art are not copied; the portfolio's own `PPRATIK.DEV` wordmark, profile photo and project screenshots are used instead.
