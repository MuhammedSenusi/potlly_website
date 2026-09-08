"use client";

import Image from "next/image";
import { useState } from "react";
import { IconHeart, IconPin, IconStar } from "@/components/ui/icons";
import { formatPrice, type Dish, type Kitchen } from "@/constants/content";

/**
 * The favorite toggle is real: it is a proper `aria-pressed` button so the
 * interaction on the marketing page behaves exactly like the one in the app.
 * Nothing is persisted here — saving a kitchen happens in the app.
 */
function FavoriteButton({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => setOn((v) => !v)}
      className={`grid size-9 place-items-center rounded-full border transition-[background-color,color,transform,border-color] duration-200 ease-[var(--ease-spring)] active:scale-90 ${
        on
          ? "border-ember bg-ember text-white"
          : "border-white/70 bg-white/92 text-ink-2 backdrop-blur-sm hover:text-ember-dark"
      }`}
    >
      <IconHeart filled={on} className="size-[1.05rem]" strokeWidth={2} />
      <span className="sr-only">{on ? `Remove ${label} from favorites` : `Save ${label} to favorites`}</span>
    </button>
  );
}

export function DishCard({
  dish,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 68vw, (max-width: 1024px) 34vw, 20rem",
}: {
  dish: Dish;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
        <div className="absolute right-2.5 top-2.5">
          <FavoriteButton label={dish.name} defaultOn={dish.id === "egusi-pounded-yam"} />
        </div>
        <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[0.6875rem] font-bold text-ink shadow-[var(--shadow-xs)] backdrop-blur-sm">
          <IconPin className="size-3 text-ember" strokeWidth={2.2} />
          {dish.distanceKm} km
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-headline text-[1.0625rem] font-bold leading-snug text-ink">
          {dish.name}
        </h3>
        <p className="mt-1 text-[0.8125rem] text-ink-3">{dish.kitchen}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="font-headline text-[1.0625rem] font-bold text-ember-dark">
            {formatPrice(dish.price)}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-ink">
            <IconStar strokeWidth={0} className="size-3.5 text-amber" />
            <span aria-hidden="true">{dish.rating.toFixed(1)}</span>
            <span aria-hidden="true" className="font-medium text-ink-3">({dish.reviews})</span>
            <span className="sr-only">
              Rated {dish.rating.toFixed(1)} out of 5 from {dish.reviews} reviews
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function KitchenCard({
  kitchen,
  className = "",
  sizes = "(max-width: 768px) 88vw, (max-width: 1200px) 44vw, 24rem",
}: {
  kitchen: Kitchen;
  className?: string;
  sizes?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={kitchen.image}
          alt={kitchen.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[600ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(25,20,16,0.6))]" />
        <div className="absolute right-3 top-3">
          <FavoriteButton label={kitchen.name} />
        </div>
        {kitchen.openNow ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.6875rem] font-bold text-leaf shadow-[var(--shadow-xs)]">
            <span className="size-1.5 rounded-full bg-leaf" />
            Open now
          </span>
        ) : (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.6875rem] font-bold text-ink-3 shadow-[var(--shadow-xs)]">
            Opens 4pm
          </span>
        )}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 text-white">
          <div className="min-w-0">
            <h3 className="truncate font-headline text-[1.125rem] font-bold">{kitchen.name}</h3>
            <p className="truncate text-[0.8125rem] text-white/75">
              {kitchen.cook} · {kitchen.area}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[0.75rem] font-bold text-ink">
            <IconStar strokeWidth={0} className="size-3.5 text-amber" />
            <span aria-hidden="true">{kitchen.rating.toFixed(1)}</span>
            <span className="sr-only">Rated {kitchen.rating.toFixed(1)} out of 5</span>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.9375rem] leading-relaxed text-ink-2">{kitchen.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {kitchen.specialties.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line bg-shell px-2.5 py-1 text-[0.75rem] font-semibold text-ink-2"
            >
              {s}
            </li>
          ))}
        </ul>
        <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-4 text-[0.8125rem]">
          <div>
            <dt className="text-ink-3">Distance</dt>
            <dd className="font-semibold text-ink">{kitchen.distanceKm} km</dd>
          </div>
          <div>
            <dt className="text-ink-3">Delivery</dt>
            <dd className="font-semibold text-ink">{formatPrice(kitchen.deliveryFee)}</dd>
          </div>
          <div>
            <dt className="text-ink-3">Reviews</dt>
            <dd className="font-semibold text-ink">{kitchen.reviews}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
