import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { PhoneFrame } from "@/components/app-ui/phone-frame";
import { CustomerHomeScreen, FavoritesScreen, KitchenProfileScreen } from "@/components/app-ui/screens";
import {
  IconArrowRight,
  IconHeart,
  IconPin,
  IconSearch,
  IconStar,
  IconTag,
  IconWallet,
  IconWhatsApp,
} from "@/components/ui/icons";

/** Customer-side product tour, set on a dark panel so the screens carry the light. */
export function ProductShowcase() {
  return (
    <section
      id="product"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-ember/14 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-32 size-[32rem] rounded-full bg-amber/10 blur-[110px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Eyebrow tone="light">The app</Eyebrow>
            <h2 className="mt-4 text-h2 text-white">
              Find food. Meet your local cooks.
            </h2>
            <p className="mt-5 max-w-lg text-lead text-white/65">
              Open Pottly and you are already browsing. Set your area, search a dish, and see who
              is cooking it within walking distance — no sign-up, no wall.
            </p>

            <ul className="mt-9 flex flex-col gap-6">
              <Point
                Icon={IconPin}
                title="Discovery built around where you are"
                body="Near You, Popular and Top Rated are all sorted by the area you set — by GPS or typed in by hand."
              />
              <Point
                Icon={IconSearch}
                title="Search by dish, kitchen or area"
                body="Looking for egusi specifically? Search it and see every kitchen near you that makes it, with prices side by side."
              />
              <Point
                Icon={IconHeart}
                title="Save what you love"
                body="Tap the heart on any dish or kitchen. Found something you love? Save it for later and it is waiting on your next visit."
              />
            </ul>

            <div className="mt-10">
              <ButtonLink href="#kitchen-profile" variant="onDark" size="lg">
                See a kitchen profile
                <IconArrowRight className="size-[1.15rem]" />
              </ButtonLink>
            </div>
          </div>

          <div className="relative flex items-end justify-center gap-5 sm:gap-8 lg:justify-end">
            <div data-reveal className="hidden sm:block" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
              <PhoneFrame
                label="The Favorites screen, showing saved dishes with a filled heart on each card"
                width={244}
                className="mb-8 rotate-[-5deg]"
              >
                <FavoritesScreen />
              </PhoneFrame>
            </div>
            <div data-reveal>
              <PhoneFrame
                label="The Pottly home screen, showing a location picker, search, category chips, nearby dishes and top-rated kitchens"
                width={288}
                className="rotate-[2deg]"
              >
                <CustomerHomeScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Point({
  Icon,
  title,
  body,
}: {
  Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-white/8 text-amber ring-1 ring-inset ring-white/12">
        <Icon className="size-5" />
      </span>
      <div>
        <h3 className="font-headline text-[1.0625rem] font-bold text-white">{title}</h3>
        <p className="mt-1.5 max-w-md text-[0.9375rem] leading-relaxed text-white/60">{body}</p>
      </div>
    </li>
  );
}

/* -------------------------------------------------------------------------- */

const profileFacts = [
  {
    Icon: IconStar,
    title: "Rating and reviews up front",
    body: "An average from anonymous reviews, so you can judge a kitchen before you commit.",
  },
  {
    Icon: IconTag,
    title: "The full menu with real prices",
    body: "Every dish the kitchen makes, priced the way the cook prices it. Nothing added on top.",
  },
  {
    Icon: IconWallet,
    title: "Delivery area, fee and how to pay",
    body: "You see where they deliver, what it costs and that it's e-Transfer or cash before you type a single message.",
  },
  {
    Icon: IconWhatsApp,
    title: "One tap to WhatsApp or SMS",
    body: "The message opens pre-filled with the dish and the kitchen. You finish the order with a person, not a checkout.",
  },
];

/** The kitchen profile — the single most important screen in the product. */
export function KitchenProfileShowcase() {
  return (
    <section id="kitchen-profile" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-20">
          <div className="relative order-2 flex justify-center lg:order-1">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 top-10 -z-10 h-[80%] rounded-[3rem] bg-[radial-gradient(70%_60%_at_50%_40%,#ffe3c8,transparent_70%)]"
            />
            <div data-reveal>
              <PhoneFrame
                label="A kitchen profile in the Pottly app: cover photo, kitchen name, rating, description, delivery fee, ready-in time, payment method, the menu, and a Message to order button"
                width={310}
              >
                <KitchenProfileScreen />
              </PhoneFrame>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Kitchen profile</Eyebrow>
            <h2 className="mt-4 text-h2 text-ink">
              Everything you need to decide, on one screen.
            </h2>
            <p className="mt-5 max-w-lg text-lead text-ink-2">
              A kitchen profile is the whole pitch: who cooks, what they make, what it costs, how
              far they deliver, and what other people thought.
            </p>

            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {profileFacts.map((f) => (
                <li key={f.title} className="flex flex-col gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-ember-soft text-ember ring-1 ring-inset ring-ember-tint">
                    <f.Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-headline text-[1rem] font-bold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
