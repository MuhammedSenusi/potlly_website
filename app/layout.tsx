import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/constants/site";

const epilogue = localFont({
  variable: "--font-epilogue",
  src: "./_og/epilogue-bold.ttf",
  weight: "700",
  display: "swap",
});

const jakarta = localFont({
  variable: "--font-jakarta",
  src: [
    { path: "../public/fonts/PlusJakartaSans-Regular.ttf", weight: "400" },
    { path: "../public/fonts/PlusJakartaSans-Medium.ttf", weight: "500" },
    { path: "../public/fonts/PlusJakartaSans-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/PlusJakartaSans-Bold.ttf", weight: "700" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Nigerian food Toronto",
    "West African food near me",
    "jollof rice delivery GTA",
    "home cooks Toronto",
    "African home kitchen marketplace",
    "order homemade Nigerian food",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfaf5",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
