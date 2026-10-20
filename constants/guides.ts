/**
 * Guides for kitchens, served under /help. The mobile app links straight to
 * these paths, so keep the slugs stable.
 */
export const guides = [
  {
    slug: "getting-started",
    title: "Getting started on Potlly",
    summary: "Set up your kitchen account, profile, menu and delivery details so customers can find and order from you.",
  },
  {
    slug: "great-photos",
    title: "Taking great food photos",
    summary: "Simple phone techniques for photos that make people want to order — light, angles, plating and what to avoid.",
  },
  {
    slug: "handling-orders",
    title: "Handling orders",
    summary: "How orders reach you on WhatsApp or SMS, and how to confirm, deliver and get paid without surprises.",
  },
] as const;

export type GuideSlug = (typeof guides)[number]["slug"];

export const guidePath = (slug: GuideSlug) => `/help/${slug}`;
