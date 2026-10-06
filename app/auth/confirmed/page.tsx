import type { Metadata } from "next";
import { AuthConfirmation } from "@/components/site/auth-confirmation";

/**
 * Landing page for Supabase auth emails sent by the mobile app.
 *
 * This URL is the project's Site URL in Supabase, which is where any auth
 * email without its own `redirectTo` ends up after verification. The account
 * is already confirmed by the time anyone arrives here, so the page only
 * tells them so and sends them back to the app.
 */
export const metadata: Metadata = {
  title: "Email confirmed",
  description: "Your Potlly account is confirmed. Head back to the app to the app.",
  alternates: { canonical: "/auth/confirmed" },
  robots: { index: false, follow: false },
};

export default function AuthConfirmedPage() {
  return <AuthConfirmation />;
}
