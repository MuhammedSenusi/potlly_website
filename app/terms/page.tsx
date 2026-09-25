import type { Metadata } from "next";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & conditions (EULA)",
  description:
    "Potlly's 18+ End User Licence Agreement, including community-safety rules, content controls, reporting, blocking and enforcement.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "customers", label: "3. Using Potlly as a customer" },
  { id: "kitchens", label: "4. Kitchen responsibilities" },
  { id: "listings", label: "5. Listings and content" },
  { id: "ordering", label: "6. Ordering" },
  { id: "payments", label: "7. Payments" },
  { id: "reviews", label: "8. Reviews" },
  { id: "safety", label: "9. Safety and community standards" },
  { id: "prohibited", label: "10. Prohibited activity" },
  { id: "role", label: "11. Our role" },
  { id: "liability", label: "12. Limitation of liability" },
  { id: "termination", label: "13. Suspension and termination" },
  { id: "changes", label: "14. Changes to these terms" },
  { id: "contact", label: "15. Contact and reporting" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & conditions (EULA)"
        lead="These terms explain the rules for using Potlly, an 18+ service, and the safety standards every user must follow."
        meta={`Last updated ${site.legalUpdated}`}
      />
      <LegalLayout toc={toc}>
        {/* <div className="rounded-card border border-line bg-shell px-5 py-4 text-[0.9375rem]">
          <strong className="font-semibold text-ink">Draft for legal review.</strong> This document
          is written to be clear and structured, but it has not been reviewed by a lawyer. Have it
          checked against the law where Potlly operates before launch.
        </div> */}

        <h2 id="introduction">1. Introduction</h2>
        <p>
          Potlly is a marketplace that helps people discover home cooks and small kitchens near them,
          and helps those kitchens publish a profile, a menu and their contact details. These terms
          form the Potlly End User Licence Agreement (EULA). They apply whenever you access or use
          the Potlly website or mobile app, whether or not you have an account.
        </p>
        <p>
          You must affirmatively accept this EULA when the app asks you to do so, including when you
          create an account or use features that let you post content. By tapping or selecting
          &ldquo;I agree&rdquo;, creating an account, posting content, or continuing to use Potlly, you
          agree to these terms. If you do not agree, do not use the service.
        </p>

        <h2 id="eligibility">2. Eligibility</h2>
        <ul>
          <li>
            Potlly is only for people aged 18 or older. You may not access or use the service if you
            are under 18.
          </li>
          <li>
            By using Potlly, you confirm that you are at least 18 and are legally able to enter a
            binding agreement where you live.
          </li>
          <li>
            If you list a kitchen, you confirm that you are entitled to prepare and sell food where
            you operate, and that you will meet any licensing, hygiene or registration requirements
            that apply to you.
          </li>
          <li>
            You may not use Potlly if we have previously removed your account for a breach of these
            terms.
          </li>
        </ul>

        <h2 id="customers">3. Using Potlly as a customer</h2>
        <p>
          You do not need an account to browse kitchens, search dishes, view prices, read reviews or
          contact a kitchen. An optional account exists so that your saved favorites follow you
          between devices.
        </p>
        <p>
          Information about kitchens, dishes, prices, delivery areas and availability is supplied by
          the kitchens themselves. You are responsible for confirming the details of your order,
          including price, delivery time, delivery cost and any allergens or dietary requirements,
          directly with the kitchen before you order.
        </p>

        <h2 id="kitchens">4. Kitchen responsibilities</h2>
        <p>If you operate a kitchen on Potlly, you agree that:</p>
        <ul>
          <li>Your kitchen profile, menu, prices and delivery information are accurate and kept up to date.</li>
          <li>You will prepare and handle food safely and comply with the food-safety rules that apply where you cook.</li>
          <li>You will describe your dishes honestly, including anything a customer would reasonably need to know about ingredients.</li>
          <li>You will honour the prices and delivery terms you publish, or update them before accepting an order.</li>
          <li>The phone number you publish is one you control and monitor, and you accept that customers will contact you on it directly.</li>
          <li>You will respond to customers in a respectful, professional way.</li>
        </ul>
        <p>
          You are the seller of the food you list. The contract for any order is between you and the
          customer.
        </p>

        <h2 id="listings">5. Listings and content</h2>
        <p>
          You keep ownership of the photos, descriptions and other content you upload. By uploading
          it you grant Potlly a non-exclusive licence to display, resize and distribute that content
          for the purpose of running and promoting the marketplace.
        </p>
        <p>
          You must only upload content you have the right to use. We may remove content that is
          misleading, unlawful, objectionable, abusive, or that infringes someone else&rsquo;s rights.
        </p>

        <h2 id="ordering">6. Ordering</h2>
        <p>
          Orders are not placed or processed inside Potlly. When you choose to order, Potlly opens
          WhatsApp or SMS with the kitchen&rsquo;s number and, where possible, the dish and kitchen name
          already filled in. Everything after that, including confirming the order, price, delivery
          time and handover, is arranged directly between you and the kitchen.
        </p>
        <p>
          Potlly does not confirm, track, deliver, refund or cancel orders, and does not act as an
          agent for either party.
        </p>

        <h2 id="payments">7. Payments</h2>
        <p>
          Payment is by Interac e-Transfer or cash on delivery, settled directly with the kitchen.
          Potlly does not process payments, hold funds, or charge customers a service fee. Kitchens
          set their own prices and delivery fees and receive the full amount from the customer.
        </p>
        <p>
          Any refund, discount or dispute about payment is a matter between the customer and the
          kitchen.
        </p>

        <h2 id="reviews">8. Reviews</h2>
        <p>
          Reviews on Potlly are published anonymously: no reviewer name, photo or profile is shown.
          A review should describe a genuine experience with a kitchen.
        </p>
        <p>
          To limit duplicate and fake reviews, a review is linked to the device or session that left
          it, and rate limits apply. That link is used only for abuse prevention and is never shown
          publicly. We may remove reviews that are abusive, off-topic, fabricated, or posted to
          manipulate a kitchen&rsquo;s ranking.
        </p>
        <p>Ratings and review volume influence how kitchens are ranked in search and discovery.</p>

        <h2 id="safety">9. Safety and community standards</h2>
        <p>
          Potlly has zero tolerance for objectionable content or abusive users. Objectionable content
          includes content that is unlawful, threatening, harassing, hateful, discriminatory,
          sexually explicit, violent, exploitative, fraudulent, invasive of another person&rsquo;s
          privacy, or otherwise harmful or seriously offensive. Abuse includes bullying, stalking,
          intimidation, repeated unwanted contact and attempts to evade another user&rsquo;s block.
        </p>
        <p>To help keep Potlly safe:</p>
        <ul>
          <li>
            We use content filters and moderation systems to detect, limit and remove objectionable
            content.
          </li>
          <li>
            You can use the in-app Report action to flag objectionable content, a post, a review,
            a listing or abusive conduct for our review.
          </li>
          <li>
            You can block an abusive user. A blocked user will no longer be able to interact with
            you through the features covered by the block.
          </li>
          <li>
            You can immediately hide or remove any post from your own feed using the control shown
            on that post.
          </li>
          <li>
            You can also report inappropriate activity through the contact option in the app or by
            emailing <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>.
          </li>
        </ul>
        <p>
          We review reports of objectionable content or abusive conduct within 24 hours. When a
          report identifies content or conduct that violates these terms, we will act within that
          24-hour period by removing the offending content and suspending or permanently ejecting
          the user responsible for it. We may preserve information where required for safety, fraud
          prevention, legal compliance or an investigation.
        </p>

        <h2 id="prohibited">10. Prohibited activity</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Post false, misleading or fraudulent listings, prices or reviews.</li>
          <li>Impersonate another person, cook or kitchen.</li>
          <li>Harass, threaten or discriminate against another user.</li>
          <li>Post, share or promote objectionable content.</li>
          <li>Contact or target a user who has blocked you, including through another account.</li>
          <li>Use Potlly to sell anything other than food and drink prepared by the listed kitchen.</li>
          <li>Scrape, copy or resell Potlly&rsquo;s content or data without permission.</li>
          <li>Interfere with, probe or attempt to disrupt the service or its security.</li>
        </ul>

        <h2 id="role">11. Our role</h2>
        <p>
          Potlly is a discovery platform. We are not a restaurant, a food business, a delivery
          company or a payment processor. We do not prepare, inspect, handle, deliver or guarantee
          any food listed on the service, and we do not verify the licensing or hygiene status of
          the kitchens that list on it.
        </p>
        <p>
          Ratings and reviews reflect what customers reported about their own experience. They are
          not a certification or endorsement by Potlly.
        </p>

        <h2 id="liability">12. Limitation of liability</h2>
        <p>
          Potlly is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted by law,
          we are not liable for loss or damage arising from the food you buy, the conduct of a
          kitchen or a customer, the accuracy of a listing, or any agreement reached between a
          customer and a kitchen.
        </p>
        <p>
          Nothing in these terms limits liability that cannot be limited by law, including liability
          for death or personal injury caused by negligence, or for fraud.
        </p>

        <h2 id="termination">13. Suspension and termination</h2>
        <p>
          You may stop using Potlly at any time. Kitchen account holders can request deletion of
          their account and listing on the{" "}
          <a href="/delete-account">delete account</a> page.
        </p>
        <p>
          We may suspend or permanently remove an account, listing or content that breaches these
          terms, misrepresents a kitchen, puts another person at risk, or involves objectionable
          content or abusive conduct. Serious or repeated violations may result in immediate and
          permanent ejection from Potlly. Where it is reasonable to do so, we will tell you why.
        </p>

        <h2 id="changes">14. Changes to these terms</h2>
        <p>
          We may update these terms as the product changes. The date at the top of this page always
          shows when they were last revised. If a change materially affects your rights, we will give
          notice in the app or by email to kitchen account holders before it takes effect.
        </p>

        <h2 id="contact">15. Contact and reporting</h2>
        <p>
          Use the reporting and contact options available in the Potlly app to report inappropriate
          activity. You can also report safety concerns to{" "}
          <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>. Questions about
          these terms can be sent to{" "}
          <a href={`mailto:${site.contact.legal}`}>{site.contact.legal}</a>.
        </p>
      </LegalLayout>
    </>
  );
}
