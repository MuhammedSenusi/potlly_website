import type { Metadata } from "next";
import { DiscoveryProvider } from "@/components/marketing/discovery-context";
import { Hero } from "@/components/marketing/hero";
import { Discovery } from "@/components/marketing/discovery";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ProductShowcase, KitchenProfileShowcase } from "@/components/marketing/product-showcase";
import { Community } from "@/components/marketing/community";
import { CustomerBenefits, KitchenBenefits, FinalCta } from "@/components/marketing/benefits";
import { Reviews } from "@/components/marketing/reviews";
import { AppPromo } from "@/components/marketing/app-promo";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

/** Structured data describing what Potlly is, for search results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description:
        "A marketplace that helps people across the Greater Toronto Area find local Nigerian and West African food entrepreneurs and small kitchens nearby, and helps those kitchens list their menus.",
      email: site.contact.general,
      sameAs: site.apps.ios ? [site.apps.ios] : [],
    },
    {
      "@type": "MobileApplication",
      "@id": `${site.url}/#mobile-app`,
      name: site.name,
      operatingSystem: "iOS",
      applicationCategory: "FoodApplication",
      url: site.apps.ios,
      downloadUrl: site.apps.ios,
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need an account to browse or order Nigerian food on Potlly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can search dishes, browse kitchen profiles and read reviews without an account. You need an account to place an order, so you can follow it from request to delivery, and so your saved favorites follow you between devices.",
          },
        },
        {
          "@type": "Question",
          name: "How do I place an order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose your dishes from a kitchen's menu in the app, add your delivery address and pick when you want it, now or as a pre-order for later. The kitchen accepts your request and you follow the order from preparing to out for delivery to completed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You pay the kitchen directly by Interac e-Transfer or cash on delivery. Potlly does not process payments and does not add a service fee to the food entrepreneur's price.",
          },
        },
        {
          "@type": "Question",
          name: "How do I list my kitchen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local food entrepreneurs and small kitchens create a free account, add a kitchen profile with photos and delivery details, then build a menu with their own prices. Listing is free and kitchens keep the full price of every order.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiscoveryProvider>
        <Hero />
        <Discovery />
      </DiscoveryProvider>
      <HowItWorks />
      <ProductShowcase />
      <KitchenProfileShowcase />
      <Community />
      <CustomerBenefits />
      <KitchenBenefits />
      <Reviews />
      <AppPromo />
      <FinalCta />
    </>
  );
}
