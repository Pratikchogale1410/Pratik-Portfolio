# Motion spec: extracted from https://techwitpro.com/

Source: the reference's JS chunks (`1dtytrekk8a_1.js`, `2brbo-y0ysagn.js`, `324oc4buihprh.js`, `2e701xh4n8een.js`) and CSS bundle `1u1o0sbf58rm6.css`. GSAP and ScrollTrigger are confirmed in the bundles. Lenis is confirmed with its exact constructor options.

## Libraries

- GSAP with ScrollTrigger (registered via `registerGsap()`).
- Lenis: `new Lenis({ duration: 1.05, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })`.
- Lenis sync (exact): `lenis.on("scroll", ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t * 1000))`, `gsap.ticker.lagSmoothing(0)`.
- Lenis is skipped on coarse pointers (`matchMedia("(pointer: coarse)")`) and when reduced motion is requested.
- `data-lenis-prevent="true"` is set on the mobile menu's scroll container.

## Ease map (the reference's named eases)

| Name | GSAP ease |
|---|---|
| `out` | `power4.out` |
| `soft` | `power3.out` |
| `expo` | `expo.out` |
| `back` | `back.out(1.35)` |
| `elastic` | `elastic.out(1, 0.45)` |
| `sine` | `sine.inOut` |

Scrub-linked tweens use `ease: "none"`.

## Scroll-driven hero

- Timeline on the hero: `scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom", scrub: .55, invalidateOnRefresh: true }`.
- Children: title and subtitle `opacity 0`, `y: -80` (`duration .35`, ease `none`); AI badges `opacity 0` (`duration .3`).
- The hero visual expands to full screen: `width: window.innerWidth`, `height: window.innerHeight`, `borderRadius 0`, `duration 1`, ease `none`, starting at position `.05`.

## Parallax (speed-driven)

- `gsap.fromTo(el, { y: -(0.35 * amount) }, { y: amount, ease: "none", scrollTrigger: { start: "top bottom", end: "bottom top", scrub: .85 } })`. Used for floating elements.

## Card hover

- Lift: `y: -6`, `duration .48`, ease `soft` (`power3.out`), `overwrite: "auto"`. Image inside scales to `1.05` (`duration .55`, `soft`).
- Leave: `y: 0` (`duration .5`), image `scale: 1` (`duration .5`).

## Intro (hero load), CSS keyframes

- `intro-rise`: `opacity 0`, `translate3d(0, var(--intro-y, 24px), 0)`, `scale(var(--intro-scale, 1))`, duration `--intro-dur` (default `1.1s`), ease `cubic-bezier(.16, 1, .3, 1)`, delay `--intro-delay` (staggered at 60, 160, 225, 290, 355, 420, 525 ms).
- `intro--pop`: `cubic-bezier(.25, 1.15, .5, 1)`.
- `intro-word`: word slides from `translateY(120%)`, duration `1.15s`, ease `cubic-bezier(.16, 1, .3, 1)`.
- `intro-settle`: `scale(1.08)` to `1`.
- `region-hero-art`: duration `1.3s`, ease `cubic-bezier(.22, 1, .36, 1)`, from `opacity 0` `translateY(36px) scale(.96)`.

## Button text swap (`btn-fx`)

- Icon: `transition: transform .55s cubic-bezier(.76, 0, .24, 1)`.
- Hover: outgoing icon `translate(170%, -170%)`, incoming icon `translate(-170%, 170%)` to `none` with `transition-delay: .1s`.
- Ring pulse on the icon chip (`btn-ring`): `.8s cubic-bezier(.36, 0, .3, 1)`, rotate `-16deg` to `14deg` to `-10deg` to `7deg` to `-3deg` (scale 1.08 to 1.05).

## Text flip (`stagger-text`, nav and button labels)

- Each character is wrapped in an inline-block with two faces. Hover flips the outgoing face `rotateX(90deg)` with `perspective(7em)`.
- Transition: `transform .75s cubic-bezier(.6, 0, .25, 1.35)`, `opacity .4s cubic-bezier(.4, 0, .6, 1)`.
- Per-character delay: `i * 24ms` (`--stagger-step`). Line height `1.4em` (`--stagger-lh`).

## Header (pill nav)

- Modes: `bar` (full width) and `pill` (centered, 62px, `width min(100% - 24px, 760px)`).
- Pill mode: wordmark `opacity 0`, `filter: blur(4px)`, `translate(-14px)`, transition `.6s var(--nav-ease)`. Logo width `45px`.
- Hide and show: `transform .55s cubic-bezier(.16, 1, .3, 1)`, and `background-color`, `backdrop-filter`, `box-shadow` `.35s`. Hidden state delay `.4s`.
- Nav ease: `cubic-bezier(.22, 1, .36, 1)`. Nav spring: `cubic-bezier(.3, 1.12, .5, 1)`.

## Mobile menu

- Full-screen panel with a scrollable list (`data-lenis-prevent`), max-height `min(72dvh, 620px)`.

## Custom cursor (desktop only)

- Class `custom-cursor-enabled` hides the native cursor on `*` and sets `cursor: pointer` on links, buttons, `[role=button]`, `[data-cursor=pointer]`.
- Pen cursor SVG: `19.6px x 32px`, `mix-blend-mode: difference`, `pointer-events: none`, `z-index 9999`, `transition: opacity .2s`, `data-visible` toggles opacity, tilt `rotate(-30deg)` with `transform-origin: 50% 1%`.
- Trail layer: `z-index 9998`, `position: fixed; inset 0`.

## Contact success

- Clip-path reveal: `circle(0% at 50% 86%)` to `circle(150% at 50% 86%)`, `.9s cubic-bezier(.65, 0, .35, 1)`, delay `.55s`.
- Field errors: `contact-error-in`, `.32s cubic-bezier(.22, 1, .36, 1)`.

## Floating and tilt (3D)

- `ai-tilt`: `rotateZ(var(--rz)) rotateX(var(--rx)) rotateY(var(--ry))` through keyframes; per-item durations 5.6s, 6.5s, 7.4s, 8.3s with negative `--tilt-delay` offsets (`0s`, `-1.7s`, `-3.4s`, `-5.1s`).
- `ai-float`: `translateY(-12px)` at 50%.
- `ai-in`: `scale(.7)` to `1` with fade.
- Float durations: 7.4s, 8s, 8.6s, 9.4s with delays `0s`, `-1.2s`, `-2.4s`, `-4.1s`.

## Reveal on scroll (portfolio's own version)

- Fade up 16px to 0, `600ms ease`, IntersectionObserver `threshold .08`, `rootMargin 0 0 -40px 0`.

## Motion this site uses

| Effect | This site |
|---|---|
| Lenis smooth scroll | `duration 1.05`, same easing function |
| Hero intro timeline | GSAP timeline; word rise (`translateY 120% -> 0`, `1.15s`, `cubic-bezier(.16,1,.3,1)`), stagger 60 to 525 ms |
| Parallax on floating cards | `y: -0.35a -> a`, `scrub .85` |
| Hero pin and scrub | `scrub .55`, `start top top`, `end bottom bottom` |
| Sticky stacking cards | **Not verified in the reference.** Taken from the brief: GSAP `pin` plus `scrub`, card scale `1 -> 0.9` |
| Logo zoom | **Not verified in the reference.** Taken from the brief: `scrub`, scale `1 -> 40` |
| Button text flip | CSS `rotateX(90deg)`, `.75s` |
| Pill header hide and show | `.55s cubic-bezier(.16,1,.3,1)` |
