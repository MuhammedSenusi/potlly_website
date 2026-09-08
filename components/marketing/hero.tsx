import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { IconArrowRight, IconCheck, IconStar, IconWhatsApp } from "@/components/ui/icons";
import { PhoneFrame } from "@/components/app-ui/phone-frame";
import { CustomerHomeScreen } from "@/components/app-ui/screens";
import { formatPrice, dishes } from "@/constants/content";
import { HeroSearch } from "./hero-search";

const assurances = ["No account needed to browse", "Real prices, no markup", "Cash on delivery"];

export function Hero() {
  const featured = dishes[0];

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      {/* Warm light falling from the top-right, plus paper grain over the field. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_85%_at_78%_-10%,#ffe9d2_0%,#fdf6ec_38%,#fdfaf5_70%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          {/* ---------------------------------------------------------- copy */}
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-ember-tint bg-ember-soft px-3.5 py-1.5 text-[0.75rem] font-bold text-ember-dark">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-ember" />
              </span>
              Home kitchens cooking in Lagos today
            </p>

            <h1 className="mt-6 text-display text-ink">
              Real home-cooked food, made by{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">people near you.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[0.11em] -z-0 h-[0.26em] rounded-full bg-amber/35"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lead text-ink-2">
              Discover delicious meals from local home cooks and small kitchens. Browse menus, see
              prices, and message the kitchen directly to order.
            </p>

            <div className="mt-8 max-w-xl">
              <HeroSearch />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink href="#discover" size="lg">
                Find food near you
                <IconArrowRight className="size-[1.15rem]" />
              </ButtonLink>
              <ButtonLink href="/become-a-kitchen" variant="secondary" size="lg">
                Become a kitchen
              </ButtonLink>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
              {assurances.map((a) => (
                <li key={a} className="flex items-center gap-2 text-[0.875rem] font-medium text-ink-2">
                  <IconCheck className="size-4 shrink-0 text-leaf" strokeWidth={2.4} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------ composition
              A photograph, the app over its left edge, and two chips lifted off
              the surface. Padding on the wrapper keeps every floating element
              inside the section, so nothing is ever clipped. */}
          <div className="relative mx-auto w-full max-w-[34rem] px-2 pb-14 pt-8 sm:px-8 sm:pb-16 lg:mx-0 lg:max-w-none lg:px-0 xl:pl-24 xl:pr-4">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-sand shadow-[var(--shadow-lift)] sm:aspect-[4/5]">
              <Image
                src="/food/hero-main.webp"
                alt="A plate of smoky jollof rice served with fried plantain, salad and grilled fish"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 30rem"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(200deg,rgba(25,20,16,0)_50%,rgba(25,20,16,0.5))]"
              />
            </div>

            {/* Dish card, floated off the photograph's bottom-right corner */}
            <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center gap-3 rounded-[1.15rem] border border-line bg-white/96 p-2.5 shadow-[var(--shadow-lift)] backdrop-blur-md sm:left-auto sm:right-3 sm:w-[18.5rem] lg:right-0 lg:w-[19rem]">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
                <Image src={featured.image} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.875rem] font-bold text-ink">{featured.name}</p>
                <p className="truncate text-[0.75rem] text-ink-3">
                  {featured.kitchen} · {featured.distanceKm} km
                </p>
              </div>
              <span className="shrink-0 font-headline text-[0.9375rem] font-bold text-ember-dark">
                {formatPrice(featured.price)}
              </span>
            </div>

            {/* The app itself, overlapping the photograph's left edge */}
            <div className="pointer-events-none absolute -left-10 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
              <PhoneFrame
                label="The Pottly app home screen, showing nearby dishes and top-rated kitchens in Yaba, Lagos"
                width={232}
                className="rotate-[-6deg]"
              >
                <CustomerHomeScreen />
              </PhoneFrame>
            </div>

            {/* Floating rating chip */}
            <div className="animate-float absolute right-0 top-0 z-20 hidden rounded-[1.1rem] border border-line bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:block">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <IconStar key={i} strokeWidth={0} className="size-3.5 text-amber" />
                ))}
              </div>
              <p className="mt-1.5 text-[0.8125rem] font-bold text-ink">4.8 average</p>
              <p className="text-[0.75rem] text-ink-3">across kitchens near Yaba</p>
            </div>

            {/* Floating order chip */}
            <div
              className="animate-float absolute left-0 top-2 z-20 flex items-center gap-2.5 rounded-full border border-line bg-white py-2.5 pl-2.5 pr-4 shadow-[var(--shadow-card)] sm:bottom-0 sm:left-2 sm:top-auto lg:left-6"
              style={{ animationDelay: "-3.2s" }}
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
                <IconWhatsApp className="size-[1.05rem]" />
              </span>
              <span>
                <span className="block text-[0.8125rem] font-bold leading-tight text-ink">
                  Message to order
                </span>
                <span className="block text-[0.75rem] text-ink-3">WhatsApp or SMS</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
