/**
 * Fixed, non-interactive film-grain texture over the page. Sits below the nav
 * and mobile menu so chrome stays crisp. Hidden under reduced motion is not
 * needed (it does not animate); it is purely decorative.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 z-[45] opacity-[0.04] mix-blend-soft-light"
    />
  );
}
