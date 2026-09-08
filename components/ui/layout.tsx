import type { ElementType, ReactNode } from "react";

export function Container({
  className = "",
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: ReactNode;
  as?: ElementType;
}) {
  return <Tag className={`mx-auto w-full max-w-[78rem] px-5 sm:px-8 ${className}`}>{children}</Tag>;
}

export function Section({
  id,
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative py-20 sm:py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

/** Small uppercase kicker that sits above every section heading. */
export function Eyebrow({ children, tone = "ember" }: { children: ReactNode; tone?: "ember" | "light" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] ${
        tone === "ember" ? "text-ember-dark" : "text-amber"
      }`}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" />
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  action,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={`flex flex-col gap-4 ${centered ? "items-center max-w-2xl" : "max-w-2xl"}`}>
        {eyebrow ? <Eyebrow tone={tone === "light" ? "light" : "ember"}>{eyebrow}</Eyebrow> : null}
        <h2
          id={id}
          className={`text-h2 ${tone === "light" ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`text-lead ${tone === "light" ? "text-white/70" : "text-ink-2"} ${
              centered ? "" : "max-w-xl"
            }`}
          >
            {lead}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
