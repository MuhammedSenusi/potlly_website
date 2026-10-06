"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Container, Eyebrow } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { IconArrowRight, IconCheck, IconClock, IconMail } from "@/components/ui/icons";
import { site } from "@/constants/site";

type Outcome =
  | { status: "confirmed"; type: string | null }
  | { status: "error"; code: string | null };

/**
 * Supabase appends the result of the verification to the redirect: tokens or
 * an `error` in the hash for the implicit flow, a `code` or `error` in the
 * query string for PKCE. The URL is captured once, before it is cleaned up,
 * so the outcome stays stable for the life of the page.
 */
let capturedUrl: string | undefined;
function readUrl() {
  capturedUrl ??= window.location.search + "|" + window.location.hash;
  return capturedUrl;
}
const noopSubscribe = () => () => {};

function parseOutcome(url: string): Outcome {
  const [search, hash] = url.split("|");
  const query = new URLSearchParams(search);
  const fragment = new URLSearchParams(hash.replace(/^#/, ""));
  const get = (key: string) => fragment.get(key) ?? query.get(key);

  if (get("error") || get("error_code")) {
    return { status: "error", code: get("error_code") };
  }
  return { status: "confirmed", type: get("type") };
}

export function AuthConfirmation() {
  // `null` during prerender and hydration, so the static HTML never claims an
  // outcome it cannot know.
  const url = useSyncExternalStore(noopSubscribe, readUrl, () => null);
  const outcome = url === null ? null : parseOutcome(url);

  // The hash can carry a live session token. Nothing on this site uses it, so
  // drop it from the address bar and history rather than leave it lying around.
  useEffect(() => {
    if (window.location.search || window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <section className="relative isolate flex-1 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_70%_-15%,#ffe9d2_0%,#fdf6ec_40%,#fdfaf5_72%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />
      <Container>
        <div aria-live="polite" className="max-w-2xl">
          {outcome === null ? (
            <Checking />
          ) : outcome.status === "confirmed" ? (
            <Confirmed emailChange={outcome.type === "email_change"} />
          ) : (
            <LinkError expired={outcome.code === "otp_expired"} />
          )}
        </div>
      </Container>
    </section>
  );
}

function Checking() {
  return (
    <>
      <Eyebrow>Account</Eyebrow>
      <h1 className="mt-4 text-h1 text-ink">Checking your link…</h1>
    </>
  );
}

function Confirmed({ emailChange }: { emailChange: boolean }) {
  return (
    <>
      <span className="grid size-14 place-items-center rounded-2xl bg-leaf-soft text-leaf ring-1 ring-inset ring-leaf/15">
        <IconCheck className="size-7" strokeWidth={2.4} />
      </span>
      <div className="mt-7">
        <Eyebrow>Account</Eyebrow>
      </div>
      <h1 className="mt-4 text-h1 text-ink">
        {emailChange ? "Your new email is confirmed." : "You’re confirmed."}
      </h1>
      <p className="mt-5 text-lead text-ink-2">
        {emailChange
          ? "Your Potlly account now uses this address. Go back to the app and sign in with it next time."
          : "Your Potlly account is ready. Go back to the app and sign in to find food near you, or to finish setting up your kitchen."}
      </p>

      <AppButtons />

      <p className="mt-8 flex gap-2.5 border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-ink-3">
        <IconCheck className="mt-1 size-4 shrink-0 text-leaf" strokeWidth={2.4} />
        Opened this on a computer? That’s fine. Your account is confirmed everywhere, so sign in on
        your phone.
      </p>
    </>
  );
}

function LinkError({ expired }: { expired: boolean }) {
  return (
    <>
      <span className="grid size-14 place-items-center rounded-2xl bg-ember-soft text-ember-dark ring-1 ring-inset ring-ember-tint">
        <IconClock className="size-7" />
      </span>
      <div className="mt-7">
        <Eyebrow>Account</Eyebrow>
      </div>
      <h1 className="mt-4 text-h1 text-ink">
        {expired ? "This link has expired." : "We couldn’t confirm this link."}
      </h1>
      <p className="mt-5 text-lead text-ink-2">
        Confirmation links work only once and only for a limited time. If you’ve already
        confirmed, just sign in to the Potlly app. If not, open the app and ask for a new
        confirmation email.
      </p>

      <AppButtons />

      <p className="mt-8 flex gap-2.5 border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-ink-3">
        <IconMail className="mt-1 size-4 shrink-0" />
        <span>
          Still stuck? Email{" "}
          <a
            href={`mailto:${site.contact.support}?subject=${encodeURIComponent("Email confirmation problem")}`}
            className="font-semibold text-ember-dark underline decoration-ember/30 underline-offset-4"
          >
            {site.contact.support}
          </a>{" "}
          and we’ll sort it out.
        </span>
      </p>
    </>
  );
}

function AppButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {site.apps.ios ? (
        <ButtonLink href={site.apps.ios} size="lg">
          Open Potlly on iPhone
          <IconArrowRight className="size-[1.15rem]" />
        </ButtonLink>
      ) : null}
      {site.apps.android ? (
        <ButtonLink href={site.apps.android} size="lg">
          Open Potlly on Android
          <IconArrowRight className="size-[1.15rem]" />
        </ButtonLink>
      ) : null}
      <ButtonLink href="/" variant="secondary" size="lg">
        Back to home
      </ButtonLink>
    </div>
  );
}
