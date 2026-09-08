import type { SVGProps } from "react";

/**
 * One inline icon set for the whole site — no icon dependency.
 * All icons are drawn on a 24×24 grid with a 1.75 stroke so they optically
 * match the Epilogue/Jakarta type at label sizes.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Base>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Base>
  );
}

export function IconHeart({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <Base {...props} fill={filled ? "currentColor" : "none"}>
      <path d="M12 20.2s-7.4-4.6-7.4-9.7A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.4 2.9c0 5.1-7.4 9.7-7.4 9.7Z" />
    </Base>
  );
}

export function IconStar({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.8l5.9-.8Z" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.36-1.4a9.8 9.8 0 0 0 4.58 1.15h.01c5.43 0 9.84-4.4 9.84-9.84A9.78 9.78 0 0 0 12.04 2Zm0 17.9h-.01a8.2 8.2 0 0 1-4.15-1.13l-.3-.18-3.18.83.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.36c0-4.5 3.68-8.17 8.2-8.17a8.16 8.16 0 0 1 8.18 8.18c0 4.5-3.67 8.16-8.14 8.16Zm4.48-6.11c-.24-.13-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.97-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7.58.26 1.04.4 1.4.51.58.19 1.11.16 1.53.1.47-.07 1.45-.6 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}

export function IconMessage(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 12.5c0 3.6-3.6 6.5-8 6.5a9.7 9.7 0 0 1-2.6-.35L4.5 20.5l1.2-3.3A6.2 6.2 0 0 1 4 12.5C4 8.9 7.6 6 12 6s8 2.9 8 6.5Z" />
    </Base>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </Base>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M19.5 12h-15" />
      <path d="m10.5 6-6 6 6 6" />
    </Base>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Base>
  );
}

export function IconWallet(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h11.5A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M3.5 9.5h13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-13" />
      <circle cx="15" cy="12.5" r="1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function IconTag(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M11.6 3.5H19a1.5 1.5 0 0 1 1.5 1.5v7.4a2 2 0 0 1-.6 1.4l-6.4 6.4a1.5 1.5 0 0 1-2.2 0l-6.6-6.6a1.5 1.5 0 0 1 0-2.2l6.4-6.4a2 2 0 0 1 1.5-.5Z" />
      <circle cx="16" cy="8" r="1.4" />
    </Base>
  );
}

export function IconPot(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 9.5h16v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
      <path d="M20 11h1.5a1.5 1.5 0 0 1 0 3H20M4 11H2.5a1.5 1.5 0 0 0 0 3H4" />
      <path d="M9 6c0-1 1-1.3 1-2.3M13.5 6c0-1 1-1.3 1-2.3" />
    </Base>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M3.5 19.5a6 6 0 0 1 12 0" />
      <path d="M16.5 5.4a3.2 3.2 0 0 1 0 5.2M18 14.3a6 6 0 0 1 2.5 5.2" />
    </Base>
  );
}

export function IconMenuList(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 6.5h11M9 12h11M9 17.5h11" />
      <circle cx="4.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 8.5h3l1.4-2.2a1 1 0 0 1 .85-.47h6.5a1 1 0 0 1 .85.47L17.5 8.5h3v10h-17Z" />
      <circle cx="12" cy="13" r="3.2" />
    </Base>
  );
}

export function IconBell(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.5 10.5a5.5 5.5 0 0 1 11 0c0 3.4 1.2 4.6 1.7 5.2.2.3 0 .8-.4.8H5.2c-.4 0-.6-.5-.4-.8.5-.6 1.7-1.8 1.7-5.2Z" />
      <path d="M10 19.5a2.2 2.2 0 0 0 4 0" />
    </Base>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.2 19 6v5.5c0 4.3-3 7.6-7 9.3-4-1.7-7-5-7-9.3V6Z" />
      <path d="m9 12 2 2 4-4.2" />
    </Base>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Base>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 5.5v13M5.5 12h13" />
    </Base>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 10.4 12 4l8 6.4V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19Z" />
    </Base>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 7h15M9.5 7V5.2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V7" />
      <path d="M6.5 7 7.4 19a1.5 1.5 0 0 0 1.5 1.4h6.2a1.5 1.5 0 0 0 1.5-1.4L17.5 7" />
    </Base>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </Base>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="m3.8 7 7.1 5.3a2 2 0 0 0 2.2 0L20.2 7" />
    </Base>
  );
}
