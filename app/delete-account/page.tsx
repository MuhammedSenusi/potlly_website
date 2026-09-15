import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { IconCheck, IconClock, IconMail, IconShield, IconTrash } from "@/components/ui/icons";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to request deletion of a Potlly kitchen account, what is removed, what is kept, and how long it takes.",
  alternates: { canonical: "/delete-account" },
};

const subject = encodeURIComponent("Account deletion request");
const body = encodeURIComponent(
  [
    "Please delete my Potlly account.",
    "",
    "Kitchen name:",
    "Account email or phone number:",
    "Reason (optional):",
    "",
    "I understand my kitchen profile and menu will be removed and this cannot be undone.",
  ].join("\n"),
);
const mailto = `mailto:${site.contact.support}?subject=${subject}&body=${body}`;

const removed = [
  "Your kitchen profile, description and photos",
  "Your full menu, dishes and prices",
  "Your delivery areas and delivery fees",
  "The contact number published on your listing",
  "Your login credentials and account settings",
  "Any saved favorites held on the account",
];

const kept = [
  {
    title: "Reviews written about your kitchen",
    body: "Reviews are anonymous and are not linked to your account. They may remain in the system in anonymised form, detached from your removed listing.",
  },
  {
    title: "Records we are required to keep",
    body: "A minimal record of the deletion request itself, and anything a law or a live dispute requires us to retain, is kept for as long as that requirement lasts.",
  },
  {
    title: "Conversations in WhatsApp or SMS",
    body: "Messages between you and customers live in WhatsApp or in your phone's messages, never on Potlly. Deleting your account does not touch them — remove those in the app where they are stored.",
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="Delete your account"
        lead="Account deletion applies to kitchen and cook accounts. Customers can browse, search and order without an account at all, so there is usually nothing to delete."
      />

      <Container className="pb-24 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <h2 className="font-headline text-h3 text-ink">What happens when you delete</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-2">
              Deleting your account removes your kitchen from Potlly. Customers can no longer find
              your listing, open your menu or reach your published number through the app. This
              cannot be undone — to come back you would create a new account and rebuild your
              profile.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-white p-5 shadow-[var(--shadow-sm)]">
                <span className="grid size-10 place-items-center rounded-xl bg-ember-soft text-ember ring-1 ring-inset ring-ember-tint">
                  <IconTrash className="size-5" />
                </span>
                <h3 className="mt-4 font-headline text-[1rem] font-bold text-ink">
                  Deleted permanently
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {removed.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[0.9375rem] leading-snug text-ink-2">
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-leaf" strokeWidth={2.4} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-card border border-line bg-white p-5 shadow-[var(--shadow-sm)]">
                <span className="grid size-10 place-items-center rounded-xl bg-shell text-ink-2 ring-1 ring-inset ring-line">
                  <IconShield className="size-5" />
                </span>
                <h3 className="mt-4 font-headline text-[1rem] font-bold text-ink">
                  What may remain
                </h3>
                <ul className="mt-3 flex flex-col gap-3.5">
                  {kept.map((k) => (
                    <li key={k.title}>
                      <p className="text-[0.9375rem] font-semibold text-ink">{k.title}</p>
                      <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-3">{k.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mt-12 font-headline text-h3 text-ink">How to request deletion</h2>
            <ol className="mt-4 flex flex-col gap-4">
              {[
                {
                  t: "From the app",
                  b: "Open the Potlly app, go to Profile, then Account settings, and choose Delete account. You will be asked to confirm once.",
                },
                {
                  t: "By email",
                  b: "If you cannot sign in, email us from the address on your account using the button below. We will verify that the request comes from the account holder before acting on it.",
                },
                {
                  t: "Confirmation",
                  b: "Your listing is taken down immediately on confirmation. Account data is deleted or irreversibly anonymised within 30 days, and we email you when it is done.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink font-headline text-[0.8125rem] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-headline text-[1rem] font-bold text-ink">{s.t}</p>
                    <p className="mt-1 max-w-lg leading-relaxed text-ink-2">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Action panel */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h2 className="font-headline text-h3 text-ink">Request account deletion</h2>
              <p className="mt-3 leading-relaxed text-ink-2">
                Send us a deletion request from the email address on your kitchen account. The
                message opens pre-filled — just add your kitchen name and send.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={mailto} size="lg" className="w-full">
                  <IconMail className="size-5" />
                  Email a deletion request
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg" className="w-full">
                  Talk to us first
                </ButtonLink>
              </div>

              <p className="mt-5 flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-3">
                <IconClock className="mt-0.5 size-4 shrink-0" />
                Listings come down on confirmation. Deletion of the underlying account data completes
                within 30 days.
              </p>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-[0.875rem] leading-relaxed text-ink-2">
                  Want a break rather than a deletion? You can pause a kitchen instead — your listing
                  is hidden from customers and your menu is waiting when you switch it back on.
                </p>
              </div>
            </div>

            <p className="mt-5 px-1 text-[0.875rem] leading-relaxed text-ink-3">
              Read how account data is handled in the{" "}
              <a
                href="/privacy"
                className="font-semibold text-ember-dark underline decoration-ember/30 underline-offset-4"
              >
                privacy policy
              </a>
              .
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
