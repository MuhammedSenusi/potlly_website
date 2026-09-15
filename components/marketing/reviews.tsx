import { Container, Eyebrow } from "@/components/ui/layout";
import { StarRow } from "@/components/ui/rating";
import { IconShield } from "@/components/ui/icons";
import { kitchens, reviews } from "@/constants/content";

/**
 * Trust section. Reviews are anonymous by design, so there are no avatars,
 * names or "verified buyer" flourishes — the honesty of that is the point, and
 * it is stated in the section rather than papered over.
 */
export function Reviews() {
  const rated = [...kitchens].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <section id="reviews" className="relative scroll-mt-24 bg-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Ratings &amp; reviews</Eyebrow>
            <h2 className="mt-4 text-h2 text-ink">Real kitchens. Real experiences.</h2>
            <p className="mt-5 text-lead text-ink-2">
              Every review on Potlly is anonymous. No name, no photo, no profile — just a rating and
              what the food was like.
            </p>

            <div className="mt-8 rounded-card border border-line bg-white p-5 shadow-[var(--shadow-sm)]">
              <h3 className="font-headline text-[0.9375rem] font-bold text-ink">
                Top rated near you
              </h3>
              <ul className="mt-3.5 flex flex-col divide-y divide-line">
                {rated.map((k) => (
                  <li key={k.id} className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                    <span className="min-w-0">
                      <span className="block truncate text-[0.875rem] font-semibold text-ink">
                        {k.name}
                      </span>
                      <span className="block truncate text-[0.75rem] text-ink-3">{k.area}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2">
                      <StarRow value={k.rating} />
                      <span className="w-7 text-right text-[0.875rem] font-bold text-ink">
                        {k.rating.toFixed(1)}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-3">
              <IconShield className="mt-0.5 size-4 shrink-0 text-ink-3" />
              Potlly does not take, process or deliver orders. Ratings describe experiences people
              had with a kitchen — they are not a guarantee from us.
            </p>
          </div>

          <ul className="columns-1 gap-4 md:columns-2 [&>li]:mb-4 [&>li]:break-inside-avoid">
            {reviews.map((r, i) => (
              <li
                key={r.id}
                data-reveal
                style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
                className="rounded-card border border-line bg-white p-6 shadow-[var(--shadow-sm)]"
              >
                <StarRow value={r.rating} />
                <blockquote className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-2">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <footer className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-line pt-3.5 text-[0.8125rem]">
                  <span className="font-semibold text-ink">Anonymous</span>
                  <span className="text-ink-3">on</span>
                  <span className="font-semibold text-ink">{r.dish}</span>
                  <span className="text-ink-3">·</span>
                  <span className="text-ink-3">{r.kitchen}</span>
                  <span className="text-ink-3">·</span>
                  <span className="text-ink-3">{r.when}</span>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
