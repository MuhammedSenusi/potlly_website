import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "whitespace-nowrap transition-[transform,background-color,color,box-shadow,border-color] " +
  "duration-200 ease-[var(--ease-out-soft)] active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "bg-ember text-white shadow-[var(--shadow-ember)] hover:bg-ember-dark hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink border border-line-strong shadow-[var(--shadow-sm)] " +
    "hover:border-ink/25 hover:-translate-y-0.5",
  ghost: "text-ink hover:bg-sand/70",
  onDark:
    "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/18 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const external = /^(https?:|mailto:|tel:|sms:)/.test(href);
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, size, className)} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant; size?: Size }) {
  return <button className={buttonClass(variant, size, className)} {...rest} />;
}
