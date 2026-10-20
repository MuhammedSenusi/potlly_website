import Link from "next/link";
import { IconArrowRight } from "@/components/ui/icons";
import { guidePath, guides, type GuideSlug } from "@/constants/guides";
import { site } from "@/constants/site";

/** Closing block for each kitchen guide: links to the other guides and to support. */
export function GuideNav({ current }: { current: GuideSlug }) {
  const others = guides.filter((g) => g.slug !== current);

  return (
    <div className="mt-16 border-t border-line pt-10">
      <h2 className="!mt-0 font-headline text-[1.125rem] font-bold text-ink">More guides for kitchens</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {others.map((g) => (
          <Link
            key={g.slug}
            href={guidePath(g.slug)}
            className="group rounded-card border border-line bg-white p-5 !no-underline shadow-[var(--shadow-sm)] transition-colors hover:border-ink/25"
          >
            <span className="flex items-center justify-between gap-3 font-headline text-[1rem] font-bold text-ink">
              {g.title}
              <IconArrowRight className="size-4 shrink-0 text-ember-dark transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="mt-2 block text-[0.9375rem] font-normal leading-relaxed text-ink-2">
              {g.summary}
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-[0.9375rem]">
        Still stuck? Email <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a> and a
        person will get back to you.
      </p>
    </div>
  );
}
