import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/layout";

/** Shared masthead for every page other than the landing page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  meta,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
  meta?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-14 sm:pb-16 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_70%_-15%,#ffe9d2_0%,#fdf6ec_40%,#fdfaf5_72%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-h1 text-ink">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-lead text-ink-2">{lead}</p> : null}
        {meta ? <p className="mt-6 text-[0.875rem] text-ink-3">{meta}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}

/**
 * Readable measure for legal and long-form pages, with a sticky contents rail
 * on wide screens.
 */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-[46rem] text-[1rem] leading-[1.72] text-ink-2
        [&_a]:font-semibold [&_a]:text-ember [&_a]:underline [&_a]:decoration-ember/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-ember
        [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:font-headline [&_h2]:text-[1.5rem] [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink
        [&_h3]:mt-9 [&_h3]:font-headline [&_h3]:text-[1.125rem] [&_h3]:font-bold [&_h3]:text-ink
        [&_li]:mt-2
        [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-5
        [&_p]:mt-4
        [&_strong]:font-semibold [&_strong]:text-ink
        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5
        [&_h2+p]:mt-4
      "
    >
      {children}
    </div>
  );
}

export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-28">
      <h2 className="font-headline text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-3">
        On this page
      </h2>
      <ol className="mt-4 flex flex-col gap-2.5 border-l border-line pl-4">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className="text-[0.875rem] text-ink-2 transition-colors hover:text-ember"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalLayout({
  toc,
  children,
}: {
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <Container className="pb-24 pt-4 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <div className="order-2 lg:order-1">
          <TableOfContents items={toc} />
        </div>
        <div className="order-1 lg:order-2">
          <Prose>{children}</Prose>
        </div>
      </div>
    </Container>
  );
}
