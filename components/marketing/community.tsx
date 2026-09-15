import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/layout";
import { kitchens } from "@/constants/content";

/**
 * The human middle of the page: an editorial photo grid, not a feature list.
 * Photography carries this section, so the copy stays out of its way.
 */
export function Community() {
  return (
    <section id="community" className="relative scroll-mt-24 overflow-hidden bg-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow>The people cooking</Eyebrow>
            <h2 className="mt-4 text-h2 text-ink">Good food starts at home.</h2>
            <p className="mt-5 text-lead text-ink-2">
              Behind every kitchen is someone who cares about what they serve. Discover local cooks,
              support small kitchens, and enjoy food made with care.
            </p>
            <p className="mt-5 text-[1rem] leading-relaxed text-ink-2">
              Most of the kitchens on Potlly started the same way — cooking for family, then for
              friends, then for a WhatsApp group that got too big to manage. Potlly gives that
              cooking a proper front door: a profile, a menu, a price list and a way to be found by
              the people who want a plate of home.
            </p>

            <ul className="mt-9 grid gap-5 sm:grid-cols-3">
              {[
                ["Cooked to order", "Nothing sits under a heat lamp."],
                ["Priced by the cook", "Potlly does not mark anything up."],
                ["Paid direct", "e-Transfer or cash, settled with the cook."],
              ].map(([t, s]) => (
                <li key={t}>
                  <p className="font-headline text-[1rem] font-bold text-ink">{t}</p>
                  <p className="mt-1 text-[0.875rem] text-ink-3">{s}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 pt-8 sm:gap-4">
              <Photo
                src="/food/story-pot.webp"
                alt="A wide pot of egusi soup simmering on a gas burner"
                ratio="aspect-[4/5]"
              />
              <Photo
                src="/food/story-table.webp"
                alt="Serving bowls of rice and salad laid out for a gathering"
                ratio="aspect-square"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Photo
                src="/food/story-hands.webp"
                alt="Hands preparing ingredients on a kitchen counter"
                ratio="aspect-square"
              />
              <Photo
                src="/food/story-kitchen.webp"
                alt="A home kitchen counter with pots on the stove and ingredients laid out"
                ratio="aspect-[4/5]"
              />
            </div>
          </div>
        </div>

        {/* Kitchens rail — real listings, so the story lands on something concrete */}
        <div className="mt-16 sm:mt-20" id="kitchens">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-headline text-h3 text-ink">Kitchens across the GTA</h3>
            <p className="text-[0.875rem] text-ink-3">Six of the kitchens currently listed</p>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kitchens.map((k) => (
              <li
                key={k.id}
                className="flex items-center gap-3.5 rounded-card border border-line bg-white p-3 shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-sand">
                  <Image src={k.image} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-headline text-[1rem] font-bold text-ink">{k.name}</p>
                  <p className="truncate text-[0.8125rem] text-ink-3">
                    {k.cook} · {k.area}
                  </p>
                  <p className="mt-1 truncate text-[0.8125rem] font-semibold text-ink-2">
                    {k.specialties[0]} · {k.rating.toFixed(1)} ★
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Photo({
  src,
  alt,
  ratio,
  caption,
}: {
  src: string;
  alt: string;
  ratio: string;
  caption?: string;
}) {
  return (
    <figure
      data-reveal
      className={`relative ${ratio} overflow-hidden rounded-card bg-sand shadow-[var(--shadow-sm)]`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 17rem"
        className="object-cover"
      />
      {caption ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(25,20,16,0.65))]"
          />
          <figcaption className="absolute bottom-3 left-3.5 text-[0.8125rem] font-semibold text-white">
            {caption}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}
