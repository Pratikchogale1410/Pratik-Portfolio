import type Lenis from "lenis";

// Module-level handle so the mobile menu and other UI can pause smooth scroll.
let current: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  current = instance;
}

export function getLenis() {
  return current;
}
