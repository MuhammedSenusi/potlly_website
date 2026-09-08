import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/layout";
import { IconPin, IconSearch, IconStar, IconWhatsApp } from "@/components/ui/icons";
import { dishes, formatPrice, kitchenMenu } from "@/constants/content";

/**
 * Three steps, each illustrated with a fragment of the real interface rather
 * than a generic icon — the point is to show the product, not describe it.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 bg-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-h2 text-ink">
            Three steps between you and a hot plate of food.
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          <Step
            n="01"
            title="Discover"
            body="Set your area and see the home cooks and kitchens actually near you."
          >
            <DiscoverArt />
          </Step>
          <Step
            n="02"
            title="Choose"
            body="Open a kitchen to see its dishes, prices, ratings and delivery details."
          >
            <ChooseArt />
          </Step>
          <Step
            n="03"
            title="Message & order"
            body="Tap once to open WhatsApp or SMS with your order ready to send. Pay cash on delivery."
          >
            <MessageArt />
          </Step>
        </ol>
      </Container>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  children,
}: {
  n: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <li
      data-reveal
      className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[var(--shadow-sm)]"
      style={{ "--reveal-delay": `${(Number(n) - 1) * 110}ms` } as React.CSSProperties}
    >
      <div className="relative h-[14.5rem] overflow-hidden border-b border-line bg-[linear-gradient(165deg,#fff6ec,#fdfaf5)] p-5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-1 -top-3 z-0 font-headline text-[4.5rem] font-bold leading-none text-ember-dark/[0.07]"
        >
          {n}
        </span>
        <div className="relative z-10 h-full">{children}</div>
      </div>
      <div className="p-6">
        <h3 className="font-headline text-h3 text-ink">
          <span className="mr-2 text-[0.8125rem] font-bold tracking-[0.08em] text-ember-dark align-middle">
            {n}
          </span>
          {title}
        </h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">{body}</p>
      </div>
    </li>
  );
}

/* ------------------------------- step artwork ----------------------------- */

function DiscoverArt() {
  const picks = dishes.slice(0, 2);
  return (
    <div className="relative flex h-full flex-col gap-3">
      <div className="flex h-11 items-center gap-2.5 rounded-full border border-line bg-white px-4 shadow-[var(--shadow-xs)]">
        <IconSearch className="size-4 text-ink-3" />
        <span className="text-[0.8125rem] text-ink-3">Jollof rice</span>
      </div>
      <div className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-ink-2">
        <IconPin className="size-3.5 text-ember" />
        Yaba, Lagos · 6 kitchens
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {picks.map((d) => (
          <div
            key={d.id}
            className="min-w-0 overflow-hidden rounded-xl border border-line bg-white shadow-[var(--shadow-xs)]"
          >
            <div className="relative h-[3.75rem]">
              <Image src={d.image} alt="" fill sizes="140px" className="object-cover" />
            </div>
            <p className="truncate px-2 pb-1.5 pt-1.5 text-[0.6875rem] font-bold text-ink">
              {d.kitchen}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChooseArt() {
  const menu = kitchenMenu["mama-tayo"].slice(0, 3);
  return (
    <div className="relative flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="font-headline text-[0.875rem] font-bold text-ink">Mama Tayo&rsquo;s Kitchen</p>
        <span className="inline-flex items-center gap-1 text-[0.75rem] font-bold text-ink">
          <IconStar strokeWidth={0} className="size-3.5 text-amber" />
          4.8
        </span>
      </div>
      {menu.map((m) => (
        <div
          key={m.name}
          className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-2 shadow-[var(--shadow-xs)]"
        >
          <div className="relative size-9 shrink-0 overflow-hidden rounded-lg">
            <Image src={m.image} alt="" fill sizes="36px" className="object-cover" />
          </div>
          <p className="min-w-0 flex-1 truncate text-[0.75rem] font-semibold text-ink">{m.name}</p>
          <span className="text-[0.75rem] font-bold text-ember-dark">{formatPrice(m.price)}</span>
        </div>
      ))}
    </div>
  );
}

function MessageArt() {
  return (
    <div className="relative flex h-full flex-col justify-between">
      <div className="ml-auto max-w-[87%] rounded-[1rem] rounded-br-[0.3rem] bg-[#dcf8c6] px-3 py-2.5 shadow-[var(--shadow-xs)]">
        <p className="text-[0.75rem] leading-relaxed text-[#14311b]">
          Hi Mama Tayo, I&rsquo;d like <strong className="font-semibold">1× Party Jollof &amp; Chicken</strong>{" "}
          (₦3,500) delivered to Akoka today.
        </p>
        <p className="mt-1 text-right text-[0.625rem] text-[#14311b]/45">12:04 ✓✓</p>
      </div>
      <div className="mr-auto mt-2 max-w-[75%] rounded-[1rem] rounded-bl-[0.3rem] border border-line bg-white px-3 py-2.5 shadow-[var(--shadow-xs)]">
        <p className="text-[0.75rem] leading-relaxed text-ink-2">
          Received! It will be with you by 1:30. ₦800 delivery, cash on arrival.
        </p>
      </div>
      <div className="mt-3 flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] text-[0.8125rem] font-bold text-white">
        <IconWhatsApp className="size-4" />
        Message to order
      </div>
    </div>
  );
}
