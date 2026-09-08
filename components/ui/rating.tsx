import { IconStar } from "./icons";

/**
 * Compact rating pill used on food and kitchen cards.
 * The numeric value carries the meaning; the stars are decorative, so the
 * accessible name is spelled out once on the wrapper.
 */
export function Rating({
  value,
  count,
  className = "",
  size = "sm",
  tone = "default",
}: {
  value: number;
  count?: number;
  className?: string;
  size?: "sm" | "md";
  tone?: "default" | "onImage";
}) {
  const label = count
    ? `Rated ${value.toFixed(1)} out of 5 from ${count} reviews`
    : `Rated ${value.toFixed(1)} out of 5`;
  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold ${
        size === "sm" ? "text-[0.75rem]" : "text-sm"
      } ${tone === "onImage" ? "text-ink" : "text-ink"} ${className}`}
      title={label}
    >
      <IconStar
        className={`${size === "sm" ? "size-3.5" : "size-4"} text-amber`}
        strokeWidth={0}
        aria-hidden="true"
      />
      <span aria-hidden="true">{value.toFixed(1)}</span>
      {count ? (
        <span aria-hidden="true" className="font-medium text-ink-3">
          ({count})
        </span>
      ) : null}
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Five-star row for the reviews section. */
export function StarRow({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <IconStar
          key={i}
          strokeWidth={0}
          className={`size-4 ${i <= Math.round(value) ? "text-amber" : "text-sand"}`}
        />
      ))}
      <span className="sr-only">{value.toFixed(1)} out of 5 stars</span>
    </span>
  );
}
