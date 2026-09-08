/**
 * Pottly wordmark. The mark is a pot seen head-on: a warm ember bowl, a lid
 * that reads as a roof — a kitchen at home — and two handles.
 */
export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" fill="var(--color-ember)" />
      <path
        d="M16 5.6 24.4 11H7.6L16 5.6Z"
        fill="var(--color-amber)"
      />
      <path
        d="M6.6 13.2h18.8v6.1a6.8 6.8 0 0 1-6.8 6.8h-5.2a6.8 6.8 0 0 1-6.8-6.8v-6.1Z"
        fill="#fff"
      />
      <path
        d="M25.4 14.6h1.1a2 2 0 0 1 0 4h-1.1M6.6 14.6H5.5a2 2 0 0 0 0 4h1.1"
        stroke="#fff"
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="19.4" r="2.5" fill="var(--color-ember)" />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 shrink-0" />
      <span
        className={`font-headline text-[1.375rem] font-bold tracking-[-0.03em] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        Pottly
      </span>
    </span>
  );
}
