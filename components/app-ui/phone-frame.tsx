import type { ReactNode } from "react";

/** Logical size every screen in `screens.tsx` is authored against. */
const SCREEN_W = 320;
const SCREEN_H = 660;
/** Bezel: 3px outer rim + 7px inner cushion on each side. */
const BEZEL = 20;

/**
 * Device shell for the in-page product previews.
 *
 * The screens inside are a faithful reconstruction of the Pottly mobile UI
 * rather than flat screenshots, so they stay sharp at any density and can be
 * updated alongside the app. Each screen is laid out once at 320×660 and then
 * scaled to the requested frame width, so type, spacing and radii keep their
 * exact proportions whether the phone is rendered at 214px or 320px.
 *
 * The whole frame is exposed to assistive tech as a single labelled image —
 * reading out a simulated interface would otherwise be announced as if it were
 * operable.
 */
export function PhoneFrame({
  children,
  label,
  width = 320,
  className = "",
  glare = true,
}: {
  children: ReactNode;
  label: string;
  width?: number;
  className?: string;
  glare?: boolean;
}) {
  const inner = width - BEZEL;
  const scale = inner / SCREEN_W;

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative shrink-0 select-none ${className}`}
      style={{ width }}
    >
      <div className="relative rounded-[2.6rem] bg-[linear-gradient(150deg,#3b3129,#151009_45%,#2a221b)] p-[3px] shadow-[var(--shadow-device)]">
        <div className="rounded-[2.45rem] bg-charcoal p-[7px]">
          <div
            aria-hidden="true"
            className="relative overflow-hidden rounded-[2rem] bg-white"
            style={{ width: inner, height: inner * (SCREEN_H / SCREEN_W) }}
          >
            <div
              style={{
                width: SCREEN_W,
                height: SCREEN_H,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <StatusBar />
              <div className="h-[626px] overflow-hidden">{children}</div>
            </div>
            {glare ? (
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(115deg,rgba(255,255,255,0.26),rgba(255,255,255,0)_38%)]" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="relative z-20 flex h-[34px] items-center justify-between px-5 pt-1 text-[10px] font-semibold text-ink">
      <span>9:41</span>
      <span className="absolute left-1/2 top-[3px] h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-charcoal" />
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 18 12" className="h-[9px] w-[13px]" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="9" y="3" width="3" height="9" rx="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 16 12" className="h-[9px] w-[12px]" fill="currentColor" aria-hidden="true">
          <path d="M8 11.2 5.6 8.6a3.4 3.4 0 0 1 4.8 0Z" />
          <path d="M8 6.1c1.5 0 2.9.6 3.9 1.6l1.4-1.5A7.6 7.6 0 0 0 8 4a7.6 7.6 0 0 0-5.3 2.2l1.4 1.5A5.4 5.4 0 0 1 8 6.1Z" />
          <path d="M8 1.6c2.5 0 4.8 1 6.5 2.6l1.3-1.4A11 11 0 0 0 8 0 11 11 0 0 0 .2 2.8l1.3 1.4A9.3 9.3 0 0 1 8 1.6Z" />
        </svg>
        <span className="relative inline-flex h-[10px] w-[20px] items-center rounded-[3px] border border-ink/40 px-[1.5px]">
          <span className="h-[5px] w-[12px] rounded-[1px] bg-ink" />
          <span className="absolute -right-[3px] h-[4px] w-[1.5px] rounded-r bg-ink/40" />
        </span>
      </span>
    </div>
  );
}

/** Bottom tab bar shared by the customer-facing screens. */
export function TabBar({ active }: { active: "home" | "search" | "favorites" | "profile" }) {
  const tabs = [
    { id: "home", label: "Home", d: "M3.2 8.6 10 3.2l6.8 5.4V16a1.2 1.2 0 0 1-1.2 1.2H4.4A1.2 1.2 0 0 1 3.2 16Z" },
    { id: "search", label: "Search", d: "M9.2 3.4a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6ZM13.6 13.6 17 17" },
    { id: "favorites", label: "Saved", d: "M10 16.8s-6.2-3.8-6.2-8.1a3.6 3.6 0 0 1 6.2-2.4 3.6 3.6 0 0 1 6.2 2.4c0 4.3-6.2 8.1-6.2 8.1Z" },
    { id: "profile", label: "Profile", d: "M10 3.6a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM4 17a6 6 0 0 1 12 0" },
  ] as const;
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-start justify-around border-t border-line/80 bg-white/95 px-2 pb-4 pt-2 backdrop-blur">
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <span key={t.id} className="flex flex-col items-center gap-[3px]">
            <svg
              viewBox="0 0 20 20"
              className={`size-[19px] ${on ? "text-ember" : "text-ink-3"}`}
              fill={on && t.id === "favorites" ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={t.d} />
            </svg>
            <span className={`text-[8.5px] font-semibold ${on ? "text-ember" : "text-ink-3"}`}>
              {t.label}
            </span>
          </span>
        );
      })}
    </div>
  );
}
