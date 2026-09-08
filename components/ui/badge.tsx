import type { ReactNode } from "react";

type Tone = "neutral" | "ember" | "leaf" | "onImage" | "dark";

const tones: Record<Tone, string> = {
  neutral: "bg-shell text-ink-2 border-line",
  ember: "bg-ember-soft text-ember-dark border-ember-tint",
  leaf: "bg-leaf-soft text-leaf border-leaf/15",
  onImage: "bg-white/95 text-ink border-white/60 backdrop-blur-sm shadow-[var(--shadow-xs)]",
  dark: "bg-white/10 text-white/90 border-white/15",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-semibold leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
