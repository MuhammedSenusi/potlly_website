# Pottly — marketing site

Marketing site for Pottly, an app that connects people with home cooks and
small kitchens near them. Customers browse without an account and message a
kitchen directly on WhatsApp or SMS to order; kitchens create an account to
publish a profile, a menu and their delivery terms.

Built with Next.js (App Router), React and Tailwind CSS v4. No UI or icon
libraries — the design system, icon set and product mockups are all local.

## Getting started

```bash
bun install      # or npm install
bun run dev      # http://localhost:3000
bun run build
bun run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `app/globals.css` | The design system: colour, type, radius, shadow and motion tokens in a Tailwind v4 `@theme` block. Start here. |
| `constants/theme.ts` | The same tokens in TypeScript, mirroring the mobile app's theme. `docs/mobile-app-theme.reference.ts` is the untouched React Native original. |
| `constants/site.ts` | Brand name, canonical URL, contact addresses, navigation and app-store links. |
| `constants/content.ts` | Every kitchen, dish, price and review shown on the site. Swap this for live data without touching a component. |
| `constants/photo-credits.json` | Attribution for the placeholder photography, rendered at `/credits`. |
| `components/ui/` | Primitives: buttons, layout, badges, ratings, icons. |
| `components/site/` | Header, footer, page masthead, legal layout, scroll-reveal. |
| `components/marketing/` | Landing-page sections. |
| `components/app-ui/` | The phone frame and the four product screens drawn in HTML. |
| `public/food/` | Optimised WebP photography. |

## Deployment

Deploys to **Netlify** as a **static export**. Every route prerenders to HTML,
so `next.config.ts` sets `output: "export"` and the build writes plain files to
`out`. Netlify serves them directly and no Next.js runtime adapter is involved.

`netlify.toml` holds the whole config: the build command, the `out` publish
directory, the Node/Bun versions and two `Content-Type` headers. Those headers
matter: a static export writes the generated metadata images as extensionless
files (`out/opengraph-image`, `out/apple-icon`), and Netlify infers the type
from the extension, so without them both PNGs are served as the wrong type.

The build command runs `bun install --frozen-lockfile` explicitly. Netlify only
detects `bun.lockb` when picking a package manager and this repo commits the
newer text-format `bun.lock`, so otherwise Netlify silently falls back to
`npm install` and ignores the lockfile.

Because the export is unoptimised, `next/image` no longer resizes at request
time. The photography in `public/food/` is already sized and WebP, so it ships
as-is.

To set it up, connect the repo in the Netlify UI (or `netlify init`). Leave the
build settings blank so `netlify.toml` wins; values typed into the UI override
the file and a stale publish directory there will serve Netlify's default 404.

`netlify dev` runs the site through Netlify's local proxy against `bun run dev`.

## Product mockups

The app screens on the site are not screenshots. `components/app-ui/screens.tsx`
reconstructs the customer home, favorites, kitchen profile and kitchen dashboard
in HTML, laid out at a logical 320×660 and scaled to whatever width the frame is
given. They stay sharp at any density and update when the design system does.
Each frame is exposed to assistive technology as a single labelled image.

## Before launch

1. **Replace the photography.** Everything in `public/food/` is openly licensed
   placeholder imagery credited at `/credits`, and several images are
   share-alike. Swap in Pottly's own kitchen and dish photos, then delete
   `constants/photo-credits.json` and the `/credits` route along with its footer
   link.
2. **Replace the sample listings.** The kitchens, cooks, dishes and reviews in
   `constants/content.ts` are illustrative examples, labelled as such on the
   page. Point the site at real data.
3. **Set the canonical URL** in `constants/site.ts` (`site.url`) — it drives
   metadata, Open Graph, the sitemap and robots.txt.
4. **Add the store links** in `site.apps` once the app is listed. The badges
   render as non-clickable "coming soon" plates until then.
5. **Have the legal pages reviewed.** `/terms` and `/privacy` are structured
   drafts and say so on the page. They need a lawyer and a check against the
   third-party services actually in use.
6. **Add social links** in `site.socials` when the accounts exist. The footer
   renders nothing while the array is empty.

## Notes

- The mobile app's brand palette sets white text on `#e85d04`, which is 3.5:1 and
  below WCAG AA. On the web the same brand orange is used for icons and fills,
  while buttons use the app's `primaryDark` (`#c44303`) so white labels reach
  5.1:1. Worth revisiting in the app too.
- Motion is opt-out: scroll reveals only activate once JavaScript confirms
  `IntersectionObserver` support and `prefers-reduced-motion` is not set, so the
  page renders complete without JavaScript.
