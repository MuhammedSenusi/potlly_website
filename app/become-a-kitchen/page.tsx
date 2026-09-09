import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { KitchenBenefits } from "@/components/marketing/benefits";
import { PhoneFrame } from "@/components/app-ui/phone-frame";
import { KitchenProfileScreen } from "@/components/app-ui/screens";
import { IconArrowRight, IconCheck, IconMail } from "@/components/ui/icons";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Become a kitchen",
  description:
    "List your Nigerian or West African home kitchen on Pottly and reach hungry people across the GTA. Create a profile, publish your menu and prices, set your delivery area, and take orders on WhatsApp. Free to list, no commission.",
  alternates: { canonical: "/become-a-kitchen" },
};

const checklist = [
  "A phone number you use for WhatsApp or SMS",
  "A few clear photos of your food and your kitchen",
  "The dishes you want to sell, with prices",
  "The areas you are willing to deliver to",
];

const mailto = `mailto:${site.contact.general}?subject=${encodeURIComponent("I want to list my kitchen")}`;

export default function BecomeAKitchenPage() {
  return (
    <>
      <PageHero
        eyebrow="For kitchens"
        title="Turn your kitchen into a local food business."
        lead="You already cook. Pottly gives that cooking a front door: a profile people can find, a menu they can read, and a rating that grows with every good plate you send out."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#start" size="lg">
            List your kitchen
            <IconArrowRight className="size-[1.15rem]" />
          </ButtonLink>
          <ButtonLink href="/how-it-works" variant="secondary" size="lg">
            See how it works
          </ButtonLink>
        </div>
        <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9375rem] font-medium text-ink-2">
          {["Free to list", "No commission on orders", "You set your own prices"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <IconCheck className="size-4 text-leaf" strokeWidth={2.4} />
              {t}
            </span>
          ))}
        </p>
      </PageHero>

      <KitchenBenefits
        eyebrow="What you get"
        title="Everything you need to run a listing."
        lead="A kitchen account is a small set of tools that do one job each — describe your kitchen, publish your menu, and let people reach you on the number you already use."
      />

      {/* What your listing looks like */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div className="flex justify-center">
              <div data-reveal>
                <PhoneFrame
                  label="How a kitchen listing appears to customers: cover photo, name, rating, description, delivery details, menu and a Message to order button"
                  width={306}
                >
                  <KitchenProfileScreen />
                </PhoneFrame>
              </div>
            </div>
            <div>
              <Eyebrow>Your listing</Eyebrow>
              <h2 className="mt-4 text-h2 text-ink">This is what customers see.</h2>
              <p className="mt-5 max-w-lg text-lead text-ink-2">
                One screen with your photo, your rating, your description, your delivery terms and
                your full menu — then a button that opens your WhatsApp.
              </p>
              <p className="mt-5 max-w-lg leading-relaxed text-ink-2">
                Nothing sits between you and the customer. Pottly does not take the order, does not
                hold the money and does not talk to your customer on your behalf. It gets people to
                your door and lets you do the rest the way you always have.
              </p>
              <div className="mt-8 rounded-card border border-line bg-shell p-6">
                <h3 className="font-headline text-[1rem] font-bold text-ink">
                  What you need to get started
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {checklist.map((c) => (
                    <li key={c} className="flex gap-2.5 text-[0.9375rem] text-ink-2">
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-leaf" strokeWidth={2.4} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Start / login */}
      <section id="start" className="scroll-mt-24 pb-24 sm:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-[var(--shadow-card)] sm:rounded-[2.5rem]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <Eyebrow>Get started</Eyebrow>
                <h2 className="mt-4 text-h2 text-ink">Ready to list?</h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink-2">
                  Kitchen accounts are created in the Pottly app, where you upload photos, build your
                  menu and set your delivery areas. The app is not on the stores yet — tell us about
                  your kitchen and we will get you set up as soon as it is.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={mailto} size="lg">
                    <IconMail className="size-5" />
                    Tell us about your kitchen
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary" size="lg">
                    Ask a question
                  </ButtonLink>
                </div>

                <div id="login" className="mt-10 scroll-mt-24 border-t border-line pt-7">
                  <h3 className="font-headline text-[1rem] font-bold text-ink">
                    Already have a kitchen account?
                  </h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
                    Sign in from the Pottly app to manage your profile, menu and photos. There is no
                    separate web login yet. If you cannot get in, email{" "}
                    <a
                      href={`mailto:${site.contact.support}`}
                      className="font-semibold text-ember-dark underline decoration-ember/30 underline-offset-4"
                    >
                      {site.contact.support}
                    </a>{" "}
                    and we will help.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[18rem] lg:min-h-full">
                <Image
                  src="/food/story-kitchen.webp"
                  alt="A home kitchen counter with pots on the stove and ingredients laid out"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 36rem"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.85),rgba(255,255,255,0)_38%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,255,255,0)_22%)]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
