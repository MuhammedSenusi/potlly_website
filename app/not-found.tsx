import { Container } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { nav } from "@/constants/site";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_70%_-15%,#ffe9d2_0%,#fdf6ec_40%,#fdfaf5_72%)]"
      />
      <Container>
        <p className="font-headline text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ember">
          404
        </p>
        <h1 className="mt-4 max-w-2xl text-h1 text-ink">
          Nothing cooking at this address.
        </h1>
        <p className="mt-5 max-w-xl text-lead text-ink-2">
          The page you were after has moved or never existed. The kitchens are all still here
          though.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/#discover" size="lg">
            Find food near you
            <IconArrowRight className="size-[1.15rem]" />
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" size="lg">
            Back to home
          </ButtonLink>
        </div>
        <nav aria-label="Helpful links" className="mt-12 border-t border-line pt-7">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.primary.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-semibold text-ink-2 underline decoration-line-strong underline-offset-4 transition-colors hover:text-ember hover:decoration-ember/50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
