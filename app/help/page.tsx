import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/layout";
import { IconArrowRight } from "@/components/ui/icons";
import { guidePath, guides } from "@/constants/guides";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Kitchen guides",
  description:
    "Practical guides for Potlly kitchens: getting set up, taking great food photos and handling orders on WhatsApp or SMS.",
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchen guides"
        title="Help for kitchens"
        lead="Short, practical guides for running your kitchen on Potlly — from your first listing to your hundredth order."
      />
      <Container className="pb-24 pt-4 sm:pb-28">
        <ul className="grid gap-5 md:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={guidePath(g.slug)}
                className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-[var(--shadow-sm)] transition-colors hover:border-ink/25"
              >
                <h2 className="font-headline text-[1.125rem] font-bold text-ink">{g.title}</h2>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{g.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-ember-dark">
                  Read the guide
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-[0.9375rem] text-ink-2">
          Can&rsquo;t find what you need? Email{" "}
          <a
            href={`mailto:${site.contact.support}`}
            className="font-semibold text-ember-dark underline decoration-ember/30 underline-offset-4"
          >
            {site.contact.support}
          </a>
          .
        </p>
      </Container>
    </>
  );
}
