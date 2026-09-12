import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is a fully static marketing site. Export plain files so Netlify does
  // not depend on the Next.js runtime adapter to serve the root route.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
