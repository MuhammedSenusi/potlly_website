/** Single place to change brand-level facts, links and contact details. */
export const site = {
  name: "Potlly",
  tagline: "Nigerian & West African home cooking, made by people near you",
  description:
    "Find Nigerian and West African home-cooked meals from local cooks and small kitchens across the Greater Toronto Area. Browse menus, see real prices, and message the kitchen directly to order.",
  /** Update before launch — used for canonical URLs, sitemap and Open Graph. */
  url: "https://potlly.com",
  locale: "en_CA",
  contact: {
    general: "hello@potlly.com",
    support: "support@potlly.com",
    privacy: "privacy@potlly.com",
    legal: "legal@potlly.com",
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
  legalUpdated: "25 September 2026",
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
    { label: "List your kitchen", href: "/become-a-kitchen" },
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
