"use client";

import { useMemo, useRef } from "react";
import { Container, Eyebrow } from "@/components/ui/layout";
import { IconArrowLeft, IconArrowRight, IconPin, IconSearch } from "@/components/ui/icons";
import { categories, dishes } from "@/constants/content";
import { DishCard } from "./cards";
import { useDiscovery } from "./discovery-context";

/**
 * The marketplace preview. Category chips and the hero search both filter this
 * grid for real, so the section behaves like the product it is advertising.
 */
export function Discovery() {
  const { query, area, category, setQuery, setCategory } = useDiscovery();
  const railRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter((d) => {
      const inCategory = category === "all" || d.category === category;
      const inQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.kitchen.toLowerCase().includes(q) ||
        (d.note ?? "").toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  const scrollRail = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="discover" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Nearby right now</Eyebrow>
            <h2
              tabIndex={-1}
              data-results-heading
              className="mt-4 text-h2 text-ink outline-none"
            >
              What&rsquo;s cooking near you?
            </h2>
            <p className="mt-4 text-lead text-ink-2">
              A live look at the kind of listings on Pottly. Every dish shows the kitchen, the real
              price and how far away it is.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <p className="mr-1 hidden items-center gap-1.5 text-[0.875rem] font-semibold text-ink-2 sm:flex">
              <IconPin className="size-4 text-ember" />
              {area}
            </p>
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              className="grid size-11 place-items-center rounded-full border border-line-strong bg-white text-ink transition-colors hover:border-ink/25 lg:hidden"
            >
              <IconArrowLeft className="size-5" />
              <span className="sr-only">Scroll dishes left</span>
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              className="grid size-11 place-items-center rounded-full border border-line-strong bg-white text-ink transition-colors hover:border-ink/25 lg:hidden"
            >
              <IconArrowRight className="size-5" />
              <span className="sr-only">Scroll dishes right</span>
            </button>
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-8 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
          <Chip active={category === "all"} onClick={() => setCategory("all")}>
            All dishes
          </Chip>
          {categories.map((c) => (
            <Chip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
              {c.label}
            </Chip>
          ))}
        </div>

        {/* Active search summary */}
        {query.trim() ? (
          <p className="mt-5 flex flex-wrap items-center gap-2 text-[0.9375rem] text-ink-2">
            <IconSearch className="size-4 text-ink-3" />
            <span>
              {results.length} {results.length === 1 ? "result" : "results"} for{" "}
              <strong className="font-semibold text-ink">&ldquo;{query.trim()}&rdquo;</strong> near{" "}
              {area}
            </span>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full border border-line-strong bg-white px-3 py-1 text-[0.8125rem] font-semibold text-ink transition-colors hover:border-ink/25"
            >
              Clear
            </button>
          </p>
        ) : null}
      </Container>

      {/* Rail on small screens, grid from lg up */}
      {results.length > 0 ? (
        <>
          <div
            ref={railRef}
            className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 no-scrollbar sm:px-8 lg:hidden"
          >
            {results.map((d, i) => (
              <DishCard
                key={d.id}
                dish={d}
                priority={i < 2}
                className="w-[16.5rem] shrink-0 snap-start"
                sizes="16.5rem"
              />
            ))}
          </div>

          <Container className="mt-8 hidden lg:block">
            <div className="grid grid-cols-3 gap-6 xl:grid-cols-4">
              {results.map((d, i) => (
                <DishCard key={d.id} dish={d} priority={i < 4} sizes="18rem" />
              ))}
            </div>
          </Container>
        </>
      ) : (
        <Container className="mt-8">
          <div className="rounded-lg border border-dashed border-line-strong bg-shell/70 px-6 py-14 text-center">
            <p className="font-headline text-h3 text-ink">Nothing matched that search.</p>
            <p className="mx-auto mt-3 max-w-md text-ink-2">
              Try a dish name like jollof or egusi, or clear the filters to see everything cooking
              near {area}.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-6 rounded-full bg-ink px-5 py-2.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-charcoal-2"
            >
              Show everything
            </button>
          </div>
        </Container>
      )}

      <Container className="mt-8">
        <p className="text-[0.8125rem] text-ink-3">
          Sample listings shown to illustrate the marketplace. Prices, distances and availability
          are set by each kitchen.
        </p>
      </Container>
    </section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-[0.875rem] font-semibold transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.97] ${
        active
          ? "border-ink bg-ink text-white"
          : "border-line-strong bg-white text-ink-2 hover:border-ink/25 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
