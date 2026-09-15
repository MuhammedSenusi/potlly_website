import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { IconMail, IconPot, IconShield, IconUsers } from "@/components/ui/icons";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact & help",
  description:
    "Get help with Potlly, report a listing, ask about listing your kitchen, or make a privacy request.",
  alternates: { canonical: "/contact" },
};

const routes = [
  {
    Icon: IconUsers,
    title: "General questions",
    body: "Anything about how Potlly works, or an idea for the product.",
    email: site.contact.general,
  },
  {
    Icon: IconPot,
    title: "Listing a kitchen",
    body: "Getting set up, editing a listing, or a problem with your kitchen account.",
    email: site.contact.support,
  },
  {
    Icon: IconShield,
    title: "Privacy and data",
    body: "Access, correction and deletion requests, or a question about this policy.",
    email: site.contact.privacy,
  },
];

const help = [
  {
    q: "A kitchen is not replying to me",
    a: "Kitchens set their own hours and reply on their own phones. A profile shows whether the kitchen is open. If nobody answers, try another kitchen nearby — and let us know if a listing looks abandoned so we can check on it.",
  },
  {
    q: "The price or menu on a listing is wrong",
    a: "Kitchens manage their own menus, so the fastest fix is to mention it to the cook when you message them. If a listing is repeatedly misleading, email us with the kitchen name and we will look into it.",
  },
  {
    q: "I want to report a listing or a review",
    a: "Email us with the kitchen name and what you saw. We remove listings that are fraudulent or unsafe, and reviews that are abusive, fabricated, or posted to manipulate a rating.",
  },
  {
    q: "Something went wrong with my order",
    a: "Orders are agreed directly between you and the kitchen, so start there — most issues are sorted in the same conversation. Potlly cannot refund, cancel or re-deliver an order, because it never handled it.",
  },
  {
    q: "I want to delete my kitchen account",
    a: "You can do it in the app, or send us a request. The delete account page explains exactly what is removed and how long it takes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        lead="Potlly is small, and email reaches a person. Pick the address closest to what you need and we will come back to you."
      />

      <Container className="pb-20 sm:pb-24">
        <ul className="grid gap-4 sm:grid-cols-3 lg:gap-5">
          {routes.map((r) => (
            <li
              key={r.email}
              className="flex flex-col rounded-card border border-line bg-white p-6 shadow-[var(--shadow-sm)]"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-ember-soft text-ember ring-1 ring-inset ring-ember-tint">
                <r.Icon className="size-[1.35rem]" />
              </span>
              <h2 className="mt-5 font-headline text-[1.0625rem] font-bold text-ink">{r.title}</h2>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{r.body}</p>
              <a
                href={`mailto:${r.email}`}
                className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ember-dark underline decoration-ember/30 underline-offset-4 transition-colors hover:decoration-ember"
              >
                <IconMail className="size-4" />
                {r.email}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <section id="help" className="scroll-mt-24 bg-shell py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Help</Eyebrow>
              <h2 className="mt-4 text-h2 text-ink">Common situations</h2>
              <p className="mt-5 text-lead text-ink-2">
                Most things come down to one fact: the order is between you and the kitchen, not
                between you and us.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${site.contact.support}`} size="md">
                  <IconMail className="size-[1.05rem]" />
                  Email support
                </ButtonLink>
                <ButtonLink href="/delete-account" variant="secondary" size="md">
                  Delete account
                </ButtonLink>
              </div>
            </div>

            <dl className="flex flex-col gap-4">
              {help.map((h) => (
                <div
                  key={h.q}
                  className="rounded-card border border-line bg-white p-6 shadow-[var(--shadow-sm)]"
                >
                  <dt className="font-headline text-[1.0625rem] font-bold text-ink">{h.q}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-2">{h.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
