import { Container, Eyebrow } from "@/components/ui/layout";
import { PhoneFrame } from "@/components/app-ui/phone-frame";
import { CustomerHomeScreen, KitchenProfileScreen } from "@/components/app-ui/screens";
import { IconCheck } from "@/components/ui/icons";
import { site } from "@/constants/site";

/**
 * Store badges. Neither listing is live yet, so these render as clearly
 * non-clickable "coming soon" plates rather than links to nowhere — as soon as
 * `site.apps.ios` / `site.apps.android` hold real URLs they become links.
 */
function StoreBadge({
  platform,
  href,
}: {
  platform: "ios" | "android";
  href: string | null;
}) {
  const label = platform === "ios" ? "App Store" : "Google Play";
  const inner = (
    <>
      <span className="grid size-8 shrink-0 place-items-center text-white/90">
        {platform === "ios" ? (
          <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
            <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.9-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 3 2.3 1.2 0 1.6-.7 3.1-.7 1.4 0 1.8.7 3 .7 1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.5-1-2.6-3.7ZM14.2 5.9c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
            <path d="M3.6 2.3a1 1 0 0 0-.4.9v17.6a1 1 0 0 0 .4.9l9.3-9.7L3.6 2.3Zm10.7 8.1 2.9-3-9.6-5.5c-.3-.2-.6-.2-.9-.1l7.6 8.6Zm0 3.2-7.6 8.6c.3.1.6.1.9-.1l9.6-5.5-2.9-3Zm1.2-1.3 3.3-1.9c.7-.4.7-1.4 0-1.8l-3.3-1.9-3.2 3.4 3.2 3.4Z" />
          </svg>
        )}
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[0.6875rem] uppercase tracking-[0.08em] text-white/50">
          {href ? "Download on" : "Coming soon to"}
        </span>
        <span className="block font-headline text-[1rem] font-bold text-white">{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span className="inline-flex cursor-default items-center gap-3 rounded-2xl border border-white/15 bg-white/6 px-4 py-3 opacity-80">
        {inner}
      </span>
    );
  }
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 transition-colors hover:bg-white/18"
    >
      {inner}
    </a>
  );
}

export function AppPromo() {
  return (
    <section id="app" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(140deg,#241b14,#12100e_60%)] px-7 pb-0 pt-14 sm:rounded-[2.5rem] sm:px-12 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-[30rem] rounded-full bg-ember/18 blur-[110px]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
            <div className="pb-12 lg:pb-24">
              <Eyebrow tone="light">Get the app</Eyebrow>
              <h2 className="mt-4 text-h2 text-white">
                Your next favorite meal is closer than you think.
              </h2>
              <p className="mt-5 max-w-md text-lead text-white/65">
                Search dishes, open kitchen profiles, save what you love and message a cook — all
                from your phone.
              </p>

              <ul className="mt-7 flex flex-col gap-2.5">
                {[
                  "Browse and order without an account",
                  "Favorites that follow you across devices",
                  "Kitchen tools for cooks, in the same app",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[0.9375rem] text-white/70">
                    <IconCheck className="size-4 shrink-0 text-amber" strokeWidth={2.4} />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <StoreBadge platform="ios" href={site.apps.ios} />
                <StoreBadge platform="android" href={site.apps.android} />
              </div>
              {!site.apps.ios && !site.apps.android ? (
                <p className="mt-4 text-[0.8125rem] text-white/45">
                  Store listings are not live yet. In the meantime, everything on this page works in
                  your browser.
                </p>
              ) : null}
            </div>

            <div className="relative flex justify-center gap-5 lg:justify-end">
              <div
                data-reveal
                className="hidden translate-y-24 sm:block"
                style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              >
                <PhoneFrame
                  label="A kitchen profile in the Potlly app"
                  width={210}
                  className="rotate-[-4deg]"
                >
                  <KitchenProfileScreen />
                </PhoneFrame>
              </div>
              <div data-reveal className="translate-y-16">
                <PhoneFrame
                  label="The Potlly home screen showing nearby dishes"
                  width={248}
                  className="rotate-[2deg]"
                >
                  <CustomerHomeScreen />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
