import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { PhoneFrame } from "@/components/app-ui/phone-frame";
import { KitchenDashboardScreen } from "@/components/app-ui/screens";
import {
  IconArrowRight,
  IconCamera,
  IconCheck,
  IconHeart,
  IconMenuList,
  IconPin,
  IconShield,
  IconStar,
  IconTag,
  IconUsers,
  IconWallet,
  IconWhatsApp,
} from "@/components/ui/icons";

const customerBenefits = [
  {
    Icon: IconPin,
    title: "Food that is actually nearby",
    body: "Results are ordered by distance from the area you set, so a 15-minute delivery never sits below one across the city.",
  },
  {
    Icon: IconUsers,
    title: "Browse without signing up",
    body: "No account is needed to search, open a kitchen, read reviews or message a cook. An account only syncs your favorites.",
  },
  {
    Icon: IconTag,
    title: "See the real price",
    body: "The price on the card is the cook's price. Pottly adds no service fee and no commission on top of it.",
  },
  {
    Icon: IconHeart,
    title: "Save your favorite kitchens",
    body: "Heart a dish or a kitchen and it is on your Favorites tab the next time you are deciding what to eat.",
  },
  {
    Icon: IconWhatsApp,
    title: "Talk to the cook directly",
    body: "Ask for less pepper, an earlier drop-off, a bigger tray. It is a conversation, not a form.",
  },
  {
    Icon: IconWallet,
    title: "Pay cash on delivery",
    body: "No card details, no wallet to top up. You settle with the person handing you the food.",
  },
];

export function CustomerBenefits() {
  return (
    <section id="for-customers" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>For customers</Eyebrow>
          <h2 className="mt-4 text-h2 text-ink">
            Built for how people actually order from a home cook.
          </h2>
          <p className="mt-5 text-lead text-ink-2">
            Pottly is a way to find someone, not a system to route your food through.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {customerBenefits.map((b, i) => (
            <li
              key={b.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
              className="group rounded-card border border-line bg-white p-6 shadow-[var(--shadow-sm)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-ember-tint hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-ember-soft text-ember ring-1 ring-inset ring-ember-tint transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                <b.Icon className="size-[1.35rem]" />
              </span>
              <h3 className="mt-5 font-headline text-[1.0625rem] font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{b.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const kitchenTools = [
  { Icon: IconCamera, label: "Create your kitchen profile", body: "Photos, description, and the areas you deliver to." },
  { Icon: IconMenuList, label: "Add and edit your menu", body: "Dishes, prices and notes. Changes go live immediately." },
  { Icon: IconWallet, label: "Set your own prices and fees", body: "Your price, your delivery fee. Pottly takes no cut." },
  { Icon: IconWhatsApp, label: "Take orders where you already are", body: "Customers reach you on WhatsApp or SMS on your own number." },
  { Icon: IconStar, label: "Build a reputation", body: "Anonymous reviews add up to a rating that lifts your visibility." },
  { Icon: IconShield, label: "Stay in control", body: "Pause your kitchen, hide a dish, or update your hours any time." },
];

export function KitchenBenefits() {
  return (
    <section
      id="for-kitchens"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 size-[34rem] rounded-full bg-ember/14 blur-[120px]"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow tone="light">For kitchens</Eyebrow>
            <h2 className="mt-4 text-h2 text-white">
              Turn your kitchen into a local food business.
            </h2>
            <p className="mt-5 max-w-lg text-lead text-white/65">
              If you already cook for people, you already have the hard part. Pottly gives you the
              shopfront: a profile people can find, a menu they can read, and a rating that grows
              with every good plate you send out.
            </p>

            <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {kitchenTools.map((t) => (
                <li key={t.label} className="flex gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-white/8 text-amber ring-1 ring-inset ring-white/12">
                    <t.Icon className="size-4" />
                  </span>
                  <div>
                    <p className="font-headline text-[0.9375rem] font-bold text-white">{t.label}</p>
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-white/55">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/become-a-kitchen" size="lg">
                List your kitchen
                <IconArrowRight className="size-[1.15rem]" />
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="onDark" size="lg">
                How it works
              </ButtonLink>
            </div>
            <p className="mt-5 flex items-center gap-2 text-[0.875rem] text-white/50">
              <IconCheck className="size-4 text-leaf" strokeWidth={2.4} />
              Free to list. You keep the full price of every order.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-4 top-10 -z-10 rounded-[3rem] bg-[radial-gradient(65%_55%_at_50%_45%,rgba(232,93,4,0.28),transparent_72%)]"
            />
            <div data-reveal>
              <PhoneFrame
                label="The kitchen owner's dashboard in the Pottly app: kitchen status, rating, review count, dish count, add-dish and photo shortcuts, the menu with live and hidden dishes, and the latest review"
                width={296}
                className="rotate-[-2deg]"
              >
                <KitchenDashboardScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

/** Closing conversion band, with a photograph doing the persuading. */
export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-charcoal sm:rounded-[2.5rem]">
          <Image
            src="/food/cta-spread.webp"
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 1200px) 100vw, 72rem"
            className="object-cover opacity-45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,15,11,0.94)_18%,rgba(20,15,11,0.72)_55%,rgba(20,15,11,0.35))]"
          />
          <div className="relative grid gap-8 px-7 py-16 sm:px-12 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-end lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <Eyebrow tone="light">Ready when you are</Eyebrow>
              <h2 className="mt-4 text-h1 text-white">Ready to find something delicious?</h2>
              <p className="mt-5 text-lead text-white/70">
                Discover home-cooked food from kitchens near you. Browsing is free and takes no
                account at all.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#discover" size="lg">
                Explore kitchens
                <IconArrowRight className="size-[1.15rem]" />
              </ButtonLink>
              <ButtonLink href="/become-a-kitchen" variant="onDark" size="lg">
                List your kitchen
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
