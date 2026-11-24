/**
 * Per-character flip label (reference "stagger-text"). Each character has an
 * outgoing and an incoming face; hover rotates the outgoing face away and the
 * incoming face in, with a 24ms stagger per character. Pure CSS, no client JS.
 * The full text is exposed via aria-label, and the faces are aria-hidden.
 */
export function FlipText({ text, className = "" }: { text: string; className?: string }) {
  const chars = Array.from(text);
  return (
    <span className={`flip-host ${className}`}>
      <span className="sr-only">{text}</span>
      <span className="flex" aria-hidden="true">
        {chars.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="flip-char"
            style={{ ["--i" as string]: i } as React.CSSProperties}
          >
            <span className="flip-face flip-face--out">{char === " " ? " " : char}</span>
            <span className="flip-face flip-face--in">{char === " " ? " " : char}</span>
          </span>
        ))}
      </span>
    </span>
  );
}
