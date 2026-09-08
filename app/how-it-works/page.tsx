import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { KitchenProfileShowcase } from "@/components/marketing/product-showcase";
import { PhoneFrame } from "@/components/app-ui/phone-frame";
import { KitchenDashboardScreen } from "@/components/app-ui/screens";
import { IconArrowRight, IconCamera, IconMenuList, IconStar, IconWhatsApp } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Pottly works for customers and for kitchens: discover home cooks near you, browse menus and prices, and message the kitchen directly to order. Cash on delivery.",
  alternates: { canonical: "/how-it-works" },
};

const cookSteps = [
  {
    Icon: IconCamera,
    title: "Create your kitchen",
    body: "Sign up with your name, the number customers should reach you on, and where you cook. Add a photo of your kitchen and a description that says what you are known for.",
  },
  {
    Icon: IconMenuList,
    title: "Build your menu",
    body: "Add each dish with a price, a photo and a short note. Set your delivery areas and your delivery fee. Everything goes live on your profile immediately.",
  },
  {
    Icon: IconWhatsApp,
    title: "Take orders on WhatsApp",
    body: "Customers who find you tap Message to order and land in your WhatsApp or SMS with the dish already named. You confirm the details and the price yourself.",
  },
  {
    Icon: IconStar,
    title: "Grow through reviews",
    body: "Customers leave anonymous ratings after ordering. Good ratings raise where you appear in search, Near You and Top Rated.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Find a cook near you. Message them. Eat."
        lead="Pottly is deliberately simple: it helps you find the right kitchen, then gets out of the way so you can talk to a person."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/#discover" size="lg">
            Find food near you
            <IconArrowRight className="size-[1.15rem]" />
          </ButtonLink>
          <ButtonLink href="/become-a-kitchen" variant="secondary" size="lg">
            List your kitchen
          </ButtonLink>
        </div>
      </PageHero>

      <HowItWorks />
      <KitchenProfileShowcase />

      {/* Cook side */}
      <section className="bg-shell py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>For kitchens</Eyebrow>
              <h2 className="mt-4 text-h2 text-ink">And if you are the one cooking</h2>
              <p className="mt-5 max-w-lg text-lead text-ink-2">
                Four steps from a WhatsApp status to a listing people can actually find.
              </p>
              <ol className="mt-9 flex flex-col gap-7">
                {cookSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-ember shadow-[var(--shadow-sm)] ring-1 ring-inset ring-line">
                      <s.Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-headline text-[1.0625rem] font-bold text-ink">
                        <span className="mr-2 text-[0.8125rem] font-bold text-ember-dark">
                          0{i + 1}
                        </span>
                        {s.title}
                      </h3>
                      <p className="mt-1.5 max-w-lg leading-relaxed text-ink-2">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <ButtonLink href="/become-a-kitchen" size="lg">
                  List your kitchen
                  <IconArrowRight className="size-[1.15rem]" />
                </ButtonLink>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div data-reveal>
                <PhoneFrame
                  label="The kitchen dashboard in the Pottly app, showing kitchen status, rating, menu management and the latest review"
                  width={300}
                >
                  <KitchenDashboardScreen />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Questions */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="mt-4 text-h2 text-ink">The questions people ask first</h2>
          </div>
          <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5">
            {[
              [
                "Do I need an account?",
                "Not to browse, search, read reviews or message a kitchen. An account only exists so your saved favorites follow you between devices.",
              ],
              [
                "How do I pay?",
                "Cash, when the food arrives. Pottly does not process payments and adds nothing to the cook's price.",
              ],
              [
                "Who delivers the food?",
                "The kitchen does, or arranges it. Delivery areas and fees are set by each kitchen and shown on its profile.",
              ],
              [
                "What if a kitchen does not reply?",
                "Kitchens are independent and set their own hours. Profiles show when a kitchen is open, and you can always message another one nearby.",
              ],
              [
                "Are reviews anonymous?",
                "Yes. No reviewer name, photo or profile is shown to anyone, including the kitchen.",
              ],
              [
                "Does it cost anything to list a kitchen?",
                "No. Listing is free and kitchens keep the full price of every order they take.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-card border border-line bg-white p-6 shadow-[var(--shadow-sm)]"
              >
                <dt className="font-headline text-[1.0625rem] font-bold text-ink">{q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2">{a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
