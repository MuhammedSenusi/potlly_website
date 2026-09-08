/** Single place to change brand-level facts, links and contact details. */
export const site = {
  name: "Pottly",
  tagline: "Real home-cooked food, made by people near you",
  description:
    "Discover home-cooked meals from local home cooks and small kitchens. Browse menus, see real prices, and message the kitchen directly to order.",
  /** Update before launch — used for canonical URLs, sitemap and Open Graph. */
  url: "https://pottly.app",
  locale: "en_NG",
  contact: {
    general: "hello@pottly.app",
    support: "support@pottly.app",
    privacy: "privacy@pottly.app",
    legal: "legal@pottly.app",
  },
  /**
   * Social profiles are intentionally empty until real accounts exist —
   * add `{ label, href }` entries here and the footer renders them.
   */
  socials: [] as { label: string; href: string }[],
  /** Store listings are not live yet, so the buttons render as "coming soon". */
  apps: {
    ios: null as string | null,
    android: null as string | null,
  },
  legalUpdated: "8 September 2026",
} as const;

export const nav = {
  primary: [
    { label: "Find food", href: "/#discover" },
    { label: "How it works", href: "/how-it-works" },
    { label: "For kitchens", href: "/become-a-kitchen" },
    { label: "About", href: "/about" },
  ],
  explore: [
    { label: "Find food", href: "/#discover" },
    { label: "Kitchens", href: "/#kitchens" },
    { label: "Popular dishes", href: "/#discover" },
    { label: "Top rated", href: "/#reviews" },
  ],
  kitchens: [
    { label: "Become a kitchen", href: "/become-a-kitchen" },
    { label: "Kitchen login", href: "/become-a-kitchen#login" },
    { label: "How it works", href: "/how-it-works" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/contact#help" },
  ],
  legal: [
    { label: "Terms & conditions", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Delete account", href: "/delete-account" },
    { label: "Photo credits", href: "/credits" },
  ],
} as const;
