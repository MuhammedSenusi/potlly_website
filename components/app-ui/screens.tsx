import Image from "next/image";
import { TabBar } from "./phone-frame";
import { dishes, formatPrice, kitchenById, kitchenMenu, kitchens, reviews } from "@/constants/content";
import {
  IconBell,
  IconCamera,
  IconChevronDown,
  IconHeart,
  IconMenuList,
  IconPin,
  IconPlus,
  IconSearch,
  IconStar,
  IconWhatsApp,
} from "@/components/ui/icons";

/* -------------------------------------------------------------------------- */
/*  Shared in-screen pieces                                                    */
/* -------------------------------------------------------------------------- */

function ScreenScroll({ children, pad = true }: { children: React.ReactNode; pad?: boolean }) {
  return (
    <div className={`h-full overflow-hidden bg-cream ${pad ? "pb-[62px]" : ""}`}>{children}</div>
  );
}

function MiniRating({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[3px] text-[9.5px] font-bold ${className}`}>
      <IconStar strokeWidth={0} className="size-[10px] text-amber" />
      {value.toFixed(1)}
    </span>
  );
}

function HeartChip({ filled = false }: { filled?: boolean }) {
  return (
    <span
      className={`grid size-[22px] place-items-center rounded-full shadow-[0_1px_3px_rgba(61,42,24,0.25)] ${
        filled ? "bg-ember text-white" : "bg-white/92 text-ink-2"
      }`}
    >
      <IconHeart filled={filled} className="size-[12px]" strokeWidth={2} />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. Customer home                                                           */
/* -------------------------------------------------------------------------- */

export function CustomerHomeScreen() {
  const rail = dishes.slice(0, 3);
  const list = kitchens.slice(0, 2);
  return (
    <ScreenScroll>
      <div className="px-4 pt-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-3">
              Delivering to
            </p>
            <p className="mt-[2px] flex items-center gap-1 text-[13px] font-bold text-ink">
              <IconPin className="size-[13px] text-ember" />
              Yaba, Lagos
              <IconChevronDown className="size-[12px] text-ink-3" />
            </p>
          </div>
          <span className="relative grid size-[30px] place-items-center rounded-full border border-line bg-white text-ink-2">
            <IconBell className="size-[15px]" />
            <span className="absolute right-[6px] top-[6px] size-[6px] rounded-full bg-ember ring-2 ring-white" />
          </span>
        </div>

        <div className="mt-3 flex h-[38px] items-center gap-2 rounded-full border border-line bg-white px-3.5 shadow-[0_1px_2px_rgba(61,42,24,0.05)]">
          <IconSearch className="size-[15px] text-ink-3" />
          <span className="text-[11.5px] text-ink-3">Search jollof, egusi, a kitchen…</span>
        </div>

        <div className="mt-3 flex gap-[6px] overflow-hidden">
          {[
            { l: "All", on: true },
            { l: "Rice", on: false },
            { l: "Soups", on: false },
            { l: "Grills", on: false },
            { l: "Swallow", on: false },
          ].map((c) => (
            <span
              key={c.l}
              className={`whitespace-nowrap rounded-full px-3 py-[6px] text-[10.5px] font-semibold ${
                c.on ? "bg-ink text-white" : "border border-line bg-white text-ink-2"
              }`}
            >
              {c.l}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-baseline justify-between">
          <h3 className="font-headline text-[14px] font-bold text-ink">Near you</h3>
          <span className="text-[10px] font-semibold text-ember">See all</span>
        </div>
      </div>

      <div className="mt-2 flex gap-[10px] overflow-hidden pl-4">
        {rail.map((d) => (
          <div
            key={d.id}
            className="w-[132px] shrink-0 overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_1px_2px_rgba(61,42,24,0.05)]"
          >
            <div className="relative h-[86px]">
              <Image
                src={d.image}
                alt=""
                fill
                sizes="132px"
                className="object-cover"
              />
              <span className="absolute right-[6px] top-[6px]">
                <HeartChip filled={d.id === "egusi-pounded-yam"} />
              </span>
              <span className="absolute bottom-[6px] left-[6px] rounded-full bg-white/95 px-[6px] py-[2px] text-[9px] font-bold text-ink">
                {d.distanceKm} km
              </span>
            </div>
            <div className="p-[9px]">
              <p className="truncate text-[11px] font-bold leading-tight text-ink">{d.name}</p>
              <p className="mt-[2px] truncate text-[9.5px] text-ink-3">{d.kitchen}</p>
              <div className="mt-[6px] flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-ember">{formatPrice(d.price)}</span>
                <MiniRating value={d.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 px-4">
        <div className="flex items-baseline justify-between">
          <h3 className="font-headline text-[14px] font-bold text-ink">Top rated kitchens</h3>
          <span className="text-[10px] font-semibold text-ember">See all</span>
        </div>
        <div className="mt-2 flex flex-col gap-[8px]">
          {list.map((k) => (
            <div
              key={k.id}
              className="flex items-center gap-[10px] rounded-[14px] border border-line bg-white p-[8px] shadow-[0_1px_2px_rgba(61,42,24,0.05)]"
            >
              <div className="relative size-[46px] shrink-0 overflow-hidden rounded-[10px]">
                <Image src={k.image} alt="" fill sizes="46px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] font-bold text-ink">{k.name}</p>
                <p className="truncate text-[9.5px] text-ink-3">
                  {k.specialties.slice(0, 2).join(" · ")}
                </p>
                <div className="mt-[3px] flex items-center gap-[6px]">
                  <MiniRating value={k.rating} />
                  <span className="text-[9px] text-ink-3">· {k.distanceKm} km</span>
                  {k.openNow ? (
                    <span className="rounded-full bg-leaf-soft px-[5px] py-[1px] text-[8.5px] font-bold text-leaf">
                      Open
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="home" />
    </ScreenScroll>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. Favorites                                                               */
/* -------------------------------------------------------------------------- */

export function FavoritesScreen() {
  const saved = [dishes[1], dishes[5], dishes[0]];
  return (
    <ScreenScroll>
      <div className="px-4 pt-2">
        <h2 className="font-headline text-[17px] font-bold text-ink">Favorites</h2>
        <div className="mt-3 flex rounded-full bg-shell p-[3px]">
          <span className="flex-1 rounded-full bg-white py-[6px] text-center text-[10.5px] font-bold text-ink shadow-[0_1px_2px_rgba(61,42,24,0.08)]">
            Dishes
          </span>
          <span className="flex-1 py-[6px] text-center text-[10.5px] font-semibold text-ink-3">
            Kitchens
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-[9px]">
          {saved.map((d) => (
            <div
              key={d.id}
              className="flex gap-[10px] rounded-[14px] border border-line bg-white p-[8px] shadow-[0_1px_2px_rgba(61,42,24,0.05)]"
            >
              <div className="relative size-[62px] shrink-0 overflow-hidden rounded-[11px]">
                <Image src={d.image} alt="" fill sizes="62px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-[11.5px] font-bold text-ink">{d.name}</p>
                  <HeartChip filled />
                </div>
                <p className="truncate text-[9.5px] text-ink-3">{d.kitchen}</p>
                <div className="mt-[6px] flex items-center justify-between">
                  <span className="text-[11.5px] font-extrabold text-ember">
                    {formatPrice(d.price)}
                  </span>
                  <span className="flex items-center gap-[5px]">
                    <MiniRating value={d.rating} />
                    <span className="text-[9px] text-ink-3">· {d.distanceKm} km</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[14px] border border-dashed border-line-strong bg-ember-soft/60 px-3 py-[10px]">
          <p className="text-[10px] font-semibold leading-snug text-ink-2">
            Saved on this device. Create a free account to keep your favorites when you change
            phones.
          </p>
        </div>
      </div>
      <TabBar active="favorites" />
    </ScreenScroll>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. Kitchen profile                                                         */
/* -------------------------------------------------------------------------- */

export function KitchenProfileScreen() {
  const k = kitchenById["mama-tayo"];
  const menu = kitchenMenu["mama-tayo"];
  return (
    <div className="relative h-full overflow-hidden bg-cream">
      <div className="relative h-[132px]">
        <Image src={k.image} alt="" fill sizes="320px" className="object-cover" priority={false} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,20,16,0.35)_0%,rgba(25,20,16,0)_45%,rgba(25,20,16,0.55)_100%)]" />
        <span className="absolute left-3 top-3 grid size-[26px] place-items-center rounded-full bg-white/92 text-ink">
          <svg viewBox="0 0 20 20" className="size-[13px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4.5 6.5 10l5.5 5.5" />
          </svg>
        </span>
        <span className="absolute right-3 top-3">
          <HeartChip filled />
        </span>
        <span className="absolute bottom-[9px] left-3 inline-flex items-center gap-[5px] rounded-full bg-white/95 px-[7px] py-[3px] text-[9px] font-bold text-leaf">
          <span className="size-[5px] rounded-full bg-leaf" />
          Open now
        </span>
      </div>

      <div className="px-4 pt-3">
        <h2 className="font-headline text-[16px] font-bold leading-tight text-ink">{k.name}</h2>
        <div className="mt-[4px] flex items-center gap-[7px] text-[9.5px] text-ink-3">
          <MiniRating value={k.rating} className="text-ink" />
          <span>({k.reviews})</span>
          <span>·</span>
          <span>
            {k.area} · {k.distanceKm} km
          </span>
        </div>
        <p className="mt-[7px] text-[10px] leading-[1.5] text-ink-2">{k.blurb}</p>

        <div className="mt-[9px] grid grid-cols-3 gap-[6px]">
          {[
            { l: "Delivery", v: formatPrice(k.deliveryFee) },
            { l: "Ready in", v: "35–50 min" },
            { l: "Payment", v: "Cash" },
          ].map((s) => (
            <div key={s.l} className="rounded-[10px] border border-line bg-white px-[7px] py-[6px]">
              <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                {s.l}
              </p>
              <p className="mt-[1px] text-[10.5px] font-bold text-ink">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-[11px] flex items-baseline justify-between">
          <h3 className="font-headline text-[13px] font-bold text-ink">Menu</h3>
          <span className="text-[9.5px] text-ink-3">{menu.length} dishes</span>
        </div>

        <div className="mt-[7px] flex flex-col gap-[7px]">
          {menu.slice(0, 3).map((m) => (
            <div key={m.name} className="flex items-center gap-[9px] rounded-[12px] border border-line bg-white p-[7px]">
              <div className="relative size-[42px] shrink-0 overflow-hidden rounded-[9px]">
                <Image src={m.image} alt="" fill sizes="42px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-ink">{m.name}</p>
                <p className="truncate text-[9px] text-ink-3">{m.note}</p>
              </div>
              <span className="text-[11px] font-extrabold text-ember">{formatPrice(m.price)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-line/80 bg-white/95 px-4 pb-4 pt-[9px] backdrop-blur">
        <div className="flex gap-[7px]">
          <span className="flex h-[36px] flex-1 items-center justify-center gap-[6px] rounded-full bg-[#25D366] text-[11.5px] font-bold text-white">
            <IconWhatsApp className="size-[14px]" />
            Message to order
          </span>
          <span className="grid h-[36px] w-[42px] place-items-center rounded-full border border-line-strong bg-white text-ink">
            <svg viewBox="0 0 20 20" className="size-[15px]" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.7 10.4c0 3-3 5.4-6.7 5.4a8 8 0 0 1-2.2-.3L4.2 17l1-2.7a5.2 5.2 0 0 1-1.6-3.9C3.6 7.4 6.6 5 10.3 5s6.4 2.4 6.4 5.4Z" />
            </svg>
          </span>
        </div>
        <p className="mt-[5px] text-center text-[8.5px] text-ink-3">
          Cash on delivery · You arrange directly with the kitchen
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. Kitchen owner dashboard                                                 */
/* -------------------------------------------------------------------------- */

export function KitchenDashboardScreen() {
  const k = kitchenById["mama-tayo"];
  const menu = kitchenMenu["mama-tayo"];
  const r = reviews[0];
  return (
    <ScreenScroll pad={false}>
      <div className="h-full overflow-hidden bg-shell px-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="relative size-[30px] overflow-hidden rounded-full ring-2 ring-white">
              <Image src={k.image} alt="" fill sizes="30px" className="object-cover" />
            </div>
            <div>
              <p className="text-[9px] text-ink-3">Kitchen</p>
              <p className="text-[11.5px] font-bold leading-tight text-ink">{k.name}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-[5px] rounded-full bg-leaf-soft px-[7px] py-[4px] text-[9px] font-bold text-leaf">
            <span className="size-[5px] rounded-full bg-leaf" />
            Accepting
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-[6px]">
          {[
            { l: "Rating", v: k.rating.toFixed(1) },
            { l: "Reviews", v: String(k.reviews) },
            { l: "Dishes", v: String(menu.length) },
          ].map((s) => (
            <div key={s.l} className="rounded-[12px] border border-line bg-white px-[8px] py-[8px]">
              <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                {s.l}
              </p>
              <p className="mt-[1px] font-headline text-[15px] font-bold text-ink">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-[6px]">
          {[
            { l: "Add dish", Icon: IconPlus, primary: true },
            { l: "Kitchen photos", Icon: IconCamera, primary: false },
          ].map(({ l, Icon, primary }) => (
            <span
              key={l}
              className={`flex h-[34px] items-center justify-center gap-[5px] rounded-full text-[10.5px] font-bold ${
                primary
                  ? "bg-ember text-white"
                  : "border border-line-strong bg-white text-ink"
              }`}
            >
              <Icon className="size-[13px]" />
              {l}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <h3 className="flex items-center gap-[5px] font-headline text-[12.5px] font-bold text-ink">
            <IconMenuList className="size-[13px] text-ink-3" />
            Your menu
          </h3>
          <span className="text-[9.5px] font-semibold text-ember">Manage</span>
        </div>

        <div className="mt-[6px] flex flex-col gap-[6px]">
          {menu.slice(0, 3).map((m, i) => (
            <div
              key={m.name}
              className="flex items-center gap-[8px] rounded-[12px] border border-line bg-white p-[6px]"
            >
              <div className="relative size-[34px] shrink-0 overflow-hidden rounded-[8px]">
                <Image src={m.image} alt="" fill sizes="34px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10.5px] font-bold text-ink">{m.name}</p>
                <p className="text-[9px] text-ink-3">{formatPrice(m.price)}</p>
              </div>
              <span
                className={`rounded-full px-[6px] py-[2px] text-[8.5px] font-bold ${
                  i === 2 ? "bg-shell text-ink-3" : "bg-leaf-soft text-leaf"
                }`}
              >
                {i === 2 ? "Hidden" : "Live"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[12px] border border-line bg-white p-[9px]">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-ink">Latest review</p>
            <span className="inline-flex items-center gap-[2px] text-[9px] font-bold text-ink">
              {[1, 2, 3, 4, 5].map((i) => (
                <IconStar key={i} strokeWidth={0} className="size-[9px] text-amber" />
              ))}
            </span>
          </div>
          <p className="mt-[4px] line-clamp-2 text-[9.5px] leading-[1.5] text-ink-2">
            &ldquo;{r.body}&rdquo;
          </p>
          <p className="mt-[4px] text-[8.5px] text-ink-3">Anonymous · {r.when}</p>
        </div>
      </div>
    </ScreenScroll>
  );
}
