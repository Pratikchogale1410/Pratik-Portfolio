import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";

/**
 * Pinned stacking: the stage pins while each card slides up over the previous
 * one; the card underneath scales to 0.92, dims and lifts. Desktop with a fine
 * pointer only. Returns a cleanup that reverts every trigger it created.
 */
export function pinStack(stage: HTMLElement, cards: HTMLElement[]) {
  const { gsap } = registerGsap();
  const mm = gsap.matchMedia();

  mm.add(DESKTOP_MOTION_QUERY, () => {
    const n = cards.length;
    stage.classList.add("is-pinned");
    cards.forEach((card, i) => {
      card.parentElement!.style.zIndex = String(i + 1);
    });
    gsap.set(cards.slice(1), { yPercent: 110 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top top",
        end: () => `+=${(n - 1) * window.innerHeight * 1.3}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    for (let i = 1; i < n; i++) {
      tl.to(cards[i], { yPercent: 0, duration: 1.3, ease: "power2.out" }, i - 1);
      tl.to(
        cards[i - 1],
        { scale: 0.92, yPercent: -4, opacity: 0.55, duration: 1.3, ease: "power2.out" },
        i - 1
      );
    }

    return () => {
      stage.classList.remove("is-pinned");
      cards.forEach((card) => {
        card.style.transform = "";
        card.style.opacity = "";
        card.parentElement!.style.zIndex = "";
      });
    };
  });

  return () => mm.revert();
}
