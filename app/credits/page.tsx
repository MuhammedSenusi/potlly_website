import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/layout";
import credits from "@/constants/photo-credits.json";

export const metadata: Metadata = {
  title: "Photo credits",
  description:
    "Attribution for the sample photography used across the Pottly marketing site, with the creator, licence and original source for each image.",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Photo credits"
        lead="The photography on this site is placeholder imagery, used under open licences while Pottly builds its own library of kitchen and dish photos. Each image is credited below."
      />

      <Container className="pb-24 sm:pb-28">
        <div className="overflow-x-auto rounded-card border border-line bg-white shadow-[var(--shadow-sm)]">
          <table className="w-full min-w-[46rem] text-left text-[0.9375rem]">
            <caption className="sr-only">
              Photography used on this site, with creator, licence and source
            </caption>
            <thead>
              <tr className="border-b border-line bg-shell/70 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-ink-3">
                <th scope="col" className="px-5 py-3.5">Image</th>
                <th scope="col" className="px-5 py-3.5">Creator</th>
                <th scope="col" className="px-5 py-3.5">Licence</th>
                <th scope="col" className="px-5 py-3.5">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {credits.map((c) => (
                <tr key={c.file} className="align-top">
                  <td className="px-5 py-4">
                    <span className="block font-semibold text-ink">{c.title}</span>
                    <span className="mt-0.5 block font-mono text-[0.75rem] text-ink-3">
                      {c.file}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink-2">{c.creator}</td>
                  <td className="px-5 py-4">
                    <a
                      href={c.licenseUrl}
                      rel="license noopener"
                      className="font-semibold text-ember-dark underline decoration-ember/30 underline-offset-4 hover:decoration-ember"
                    >
                      {c.license}
                    </a>
                  </td>
                  <td className="px-5 py-4">
                    {c.source ? (
                      <a
                        href={c.source}
                        rel="noopener"
                        className="text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-ink"
                      >
                        Original
                      </a>
                    ) : (
                      <span className="text-ink-3">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-3">
          Some images are licensed share-alike, which carries obligations on reuse. Replace them with
          Pottly&rsquo;s own photography before launch, or confirm the terms of each licence still fit
          how the image is being used.
        </p>
      </Container>
    </>
  );
}
