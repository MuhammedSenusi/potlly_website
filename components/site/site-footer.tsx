import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "@/components/ui/layout";
import { nav, site } from "@/constants/site";

const columns = [
  { title: "Explore", links: nav.explore },
  { title: "For kitchens", links: nav.kitchens },
  { title: "Company", links: nav.company },
  { title: "Legal", links: nav.legal },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white/70">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/60">
              Potlly connects you with home cooks and small kitchens in your area. Browse menus and
              real prices, then message the kitchen directly to arrange your order.
            </p>
            <p className="mt-5 text-sm text-white/45">
              Questions?{" "}
              <a
                href={`mailto:${site.contact.general}`}
                className="font-semibold text-white/80 underline decoration-white/25 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber/60"
              >
                {site.contact.general}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-headline text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-white/45">
                  {col.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.9375rem] text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} {site.name}. Ordering and payment happen directly between
            you and the kitchen.
          </p>
          {site.socials.length > 0 ? (
            <ul className="flex items-center gap-5">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    rel="me noopener"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-ember/12 blur-3xl"
      />
    </footer>
  );
}
