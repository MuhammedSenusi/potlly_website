import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Pottly exists: a simple way to find home cooks and small kitchens nearby, without commissions, checkouts or anything standing between a cook and a customer.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "The cook sets the price",
    body: "Pottly adds no commission and no service fee. What a kitchen charges is what a customer pays, and the kitchen keeps all of it.",
  },
  {
    title: "Browsing should never need an account",
    body: "Being asked to sign up before you can see what food exists near you is the fastest way to lose someone who is hungry. So we do not ask.",
  },
  {
    title: "Let people talk to people",
    body: "Ordering from a home cook is a conversation, not a checkout. Pottly hands you off to WhatsApp or SMS and stays out of it.",
  },
  {
    title: "Say only what is true",
    body: "No invented user counts, no borrowed logos, no badges we did not earn. If a number is not real, it does not go on the page.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A front door for the kitchens already cooking around you."
        lead="Pottly started from a simple observation: the best food in most neighbourhoods is being cooked by someone with no website, no listing and no way to be found beyond a WhatsApp group."
      />

      <Container className="pb-20 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="max-w-2xl text-[1.0625rem] leading-[1.75] text-ink-2">
            <p>
              Home cooks and small kitchens are everywhere. They cook to order, in portions people
              can afford, and they are usually within a few streets of the person who wants the food.
              What they do not have is a way to be discovered by anyone who is not already in the
              group chat.
            </p>
            <p className="mt-5">
              The delivery apps did not solve this. Their economics are built for restaurants with
              margin to give away, and a home cook selling a plate of jollof cannot hand over a third
              of it to a platform. So the cooks stayed on WhatsApp, and the customers stayed unable
              to find them.
            </p>
            <p className="mt-5">
              Pottly is the smallest thing that fixes that. A cook gets a real profile, a real menu
              and a real price list. A customer gets to search by dish, by kitchen or by area, see
              what is actually near them, and then message the cook directly. No account to browse,
              no checkout, no commission, cash at the door.
            </p>
            <p className="mt-5">
              We are deliberately not a delivery company. Pottly does not take your order, hold your
              money, or promise you a delivery window. It gets you to the right kitchen and then
              gets out of the way — which is exactly how ordering from a neighbour has always
              worked.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
            <figure className="relative aspect-[5/4] overflow-hidden rounded-card bg-sand shadow-[var(--shadow-sm)] lg:aspect-[4/3]">
              <Image
                src="/food/story-hands.webp"
                alt="Hands preparing ingredients on a kitchen counter"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 45vw, 26rem"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[5/4] overflow-hidden rounded-card bg-sand shadow-[var(--shadow-sm)] lg:aspect-[4/3]">
              <Image
                src="/food/story-table.webp"
                alt="A table set with several dishes of home-cooked food"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 45vw, 26rem"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </Container>

      <section className="bg-shell py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we hold to</Eyebrow>
            <h2 className="mt-4 text-h2 text-ink">Four rules we do not bend.</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {principles.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
                className="rounded-card border border-line bg-white p-7 shadow-[var(--shadow-sm)]"
              >
                <span
                  aria-hidden="true"
                  className="font-headline text-[0.8125rem] font-bold tracking-[0.1em] text-ember"
                >
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-headline text-h3 text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-lg border border-line bg-white p-8 shadow-[var(--shadow-sm)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <h2 className="font-headline text-h3 text-ink">Cooking something worth finding?</h2>
              <p className="mt-2 leading-relaxed text-ink-2">
                List your kitchen and let the people already living around you know you exist.
              </p>
            </div>
            <ButtonLink href="/become-a-kitchen" size="lg" className="shrink-0">
              Become a kitchen
              <IconArrowRight className="size-[1.15rem]" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
