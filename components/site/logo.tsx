import Image from "next/image";

/**
 * Pottly wordmark. The mark is the brand app icon: a steaming pot with a spoon
 * and fork on a red tile. Source art lives in `public/logo/`; the header uses
 * a cropped 96px WebP so it stays sharp at 3x without shipping the 1024px file.
 */
export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <Image
      src="/logo/pottly-mark.webp"
      alt=""
      width={96}
      height={96}
      className={className}
    />
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
