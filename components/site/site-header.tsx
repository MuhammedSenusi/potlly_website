"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ButtonLink } from "@/components/ui/button";
import { nav } from "@/constants/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-cream/85 shadow-[0_1px_0_rgba(61,42,24,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[78rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="Pottly home" className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[0.9375rem] font-semibold text-ink-2 transition-colors hover:bg-sand/60 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <ButtonLink href="/become-a-kitchen" variant="secondary" size="md">
            Become a kitchen
          </ButtonLink>
          <ButtonLink href="/#discover" size="md">
            Find food near you
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid size-11 place-items-center rounded-full border border-line-strong bg-white text-ink md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? (
              <>
                <path d="m6 6 12 12" />
                <path d="M18 6 6 18" />
              </>
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-cream px-5 pb-7 pt-4 md:hidden"
      >
        <nav aria-label="Primary mobile" className="flex flex-col">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3.5 font-headline text-lg font-bold text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-5 flex flex-col gap-2.5">
          <ButtonLink href="/#discover" size="lg" onClick={() => setOpen(false)}>
            Find food near you
          </ButtonLink>
          <ButtonLink
            href="/become-a-kitchen"
            variant="secondary"
            size="lg"
            onClick={() => setOpen(false)}
          >
            Become a kitchen
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
