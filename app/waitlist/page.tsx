import type { Metadata } from "next";
import { WaitlistForm } from "@/components/site/waitlist-form";
import { Container, Eyebrow } from "@/components/ui/layout";
import { IconCheck, IconClock, IconHeart, IconPot } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Be the first to know when Pottly launches near you — local Nigerian and West African home cooking, made by people nearby.",
  alternates: { canonical: "/waitlist" },
};

const reasons = [
  { Icon: IconPot, text: "Discover meals made in real home kitchens" },
  { Icon: IconHeart, text: "Find cooks and dishes worth coming back to" },
  { Icon: IconClock, text: "Hear when Pottly opens near you" },
];

export default function WaitlistPage() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_12%_0%,#ffe9d2_0%,#fdf6ec_42%,#fdfaf5_76%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />

      <Container className="grid min-h-[calc(100dvh-5rem)] items-center gap-14 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] lg:gap-24 lg:py-24">
        <section aria-labelledby="waitlist-title" className="max-w-2xl">
          <Eyebrow>Coming soon</Eyebrow>
          <h1 id="waitlist-title" className="mt-5 max-w-xl text-h1 text-ink">
            Good food is closer than you think.
          </h1>
          <p className="mt-6 max-w-xl text-lead text-ink-2">
            Pottly brings Nigerian and West African home cooking from local cooks to your table.
            Join the list and be first to know when we launch near you.
          </p>

          <ul className="mt-9 flex max-w-lg flex-col gap-4">
            {reasons.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-[0.9375rem] font-semibold text-ink">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-ember shadow-[var(--shadow-xs)] ring-1 ring-inset ring-line">
                  <Icon className="size-[1.05rem]" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-3 border-t border-line pt-5 text-[0.8125rem] text-ink-3">
            <IconCheck className="size-4 text-leaf" />
            No account needed to join. Just a heads-up when it&rsquo;s time.
          </div>
        </section>

        <div className="w-full lg:justify-self-end">
          <WaitlistForm />
        </div>
      </Container>
    </main>
  );
}
