import type { Metadata } from "next";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What information Pottly collects, how location and kitchen account data are used, what happens when you message a kitchen, and how to exercise your rights.",
  alternates: { canonical: "/privacy" },
};

const toc = [
  { id: "collected", label: "1. Information we collect" },
  { id: "use", label: "2. How we use information" },
  { id: "location", label: "3. Location information" },
  { id: "kitchen-accounts", label: "4. Kitchen account information" },
  { id: "device", label: "5. Device information" },
  { id: "storage", label: "6. Cookies and local storage" },
  { id: "reviews", label: "7. Reviews" },
  { id: "handoff", label: "8. WhatsApp and SMS handoff" },
  { id: "third-parties", label: "9. Third-party services" },
  { id: "retention", label: "10. Data retention" },
  { id: "security", label: "11. Security" },
  { id: "rights", label: "12. Your rights" },
  { id: "children", label: "13. Children" },
  { id: "changes", label: "14. Changes" },
  { id: "contact", label: "15. Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="Pottly is designed to need as little information about you as possible. This page explains what is collected and why."
        meta={`Last updated ${site.legalUpdated}`}
      />
      <LegalLayout toc={toc}>
        <div className="rounded-card border border-line bg-shell px-5 py-4 text-[0.9375rem]">
          <strong className="font-semibold text-ink">Draft for legal review.</strong> This policy
          describes how the product is designed to work. Confirm it against the live implementation
          and the data-protection law that applies to Pottly before publishing.
        </div>

        <h2 id="collected">1. Information we collect</h2>
        <p>
          <strong>Customers browsing without an account.</strong> You can search, open kitchen
          profiles, read reviews and contact a kitchen without giving us any personal details. In
          that case we hold no name, email address or phone number for you.
        </p>
        <p>
          <strong>Customers with an optional account.</strong> If you create an account so your
          favorites sync across devices, we store the identifier you signed up with and the list of
          kitchens and dishes you have saved.
        </p>
        <p>
          <strong>Kitchen account holders.</strong> We store the information needed to run a public
          listing: kitchen name, cook name, description, photos, menu and prices, delivery area and
          fees, the contact number you publish, and your login details.
        </p>
        <p>
          <strong>Everyone.</strong> We collect basic technical information described under device
          information below, and the content of any review left through the app.
        </p>

        <h2 id="use">2. How we use information</h2>
        <ul>
          <li>To show kitchens, dishes and prices, and to sort them by distance from your area.</li>
          <li>To publish kitchen listings so customers can find them.</li>
          <li>To keep saved favorites available on your account.</li>
          <li>To calculate ratings and rank kitchens in search and discovery.</li>
          <li>To detect and limit fake or duplicate reviews and other abuse.</li>
          <li>To fix problems, keep the service running, and respond when you contact us.</li>
        </ul>
        <p>We do not sell personal information.</p>

        <h2 id="location">3. Location information</h2>
        <p>
          Location drives almost everything in Pottly, so it is worth being precise about it. You can
          set your area in two ways: by granting device location permission, or by typing an area or
          address by hand. Manual entry always works — location permission is optional and can be
          declined or revoked without losing access to the service.
        </p>
        <p>
          Your chosen area is used to sort and filter results by distance. It is stored on your
          device, and on your account if you have one, so you do not have to set it every visit.
        </p>

        <h2 id="kitchen-accounts">4. Kitchen account information</h2>
        <p>
          Kitchen profiles are public by design. The kitchen name, description, photos, menu, prices,
          delivery area and the contact number you publish are visible to anyone using Pottly,
          including people who are not signed in. Do not publish a phone number or address you do not
          want to be public.
        </p>
        <p>
          Login credentials and any private notes on your account are not shown publicly.
        </p>

        <h2 id="device">5. Device information</h2>
        <p>
          We collect standard technical information such as device or browser type, operating system
          version, app version, general region, and error diagnostics. This is used to keep the
          service working and to investigate problems.
        </p>
        <p>
          A device or session identifier is also used to rate-limit reviews, so that one source
          cannot flood a kitchen with ratings.
        </p>

        <h2 id="storage">6. Cookies and local storage</h2>
        <p>
          Pottly uses cookies and local storage on your device for things the product needs in order
          to work: keeping you signed in if you have an account, remembering the area you set, and
          keeping the list of kitchens and dishes you recently viewed.
        </p>
        <p>
          Recently viewed items are stored on your device and are not tied to an account. Clearing
          your browser or app storage removes them.
        </p>

        <h2 id="reviews">7. Reviews</h2>
        <p>
          Reviews are published anonymously. No reviewer name, photo, handle or account is shown with
          a review, and kitchens cannot see who left one.
        </p>
        <p>
          Behind the scenes, a review is associated with the device or session that submitted it,
          purely to prevent duplicate and fraudulent reviews. That association is never displayed and
          is not used to build a profile of you.
        </p>

        <h2 id="handoff">8. WhatsApp and SMS handoff</h2>
        <p>
          When you choose to order, Pottly opens WhatsApp or SMS on your device with the
          kitchen&rsquo;s number and a suggested message. From that moment the conversation happens
          in that app, between you and the kitchen.
        </p>
        <p>
          Pottly does not host, read, store or have access to those messages. What happens in
          WhatsApp is covered by WhatsApp&rsquo;s own privacy policy, and what happens over SMS is
          covered by your mobile network. The kitchen will see the phone number you message from.
        </p>

        <h2 id="third-parties">9. Third-party services</h2>
        <p>
          Running Pottly requires a small number of service providers — for example hosting,
          storage of uploaded kitchen photos, and error reporting. These providers process data only
          to provide their service to us.
        </p>
        <p>
          The current list of providers should be published here before launch. We do not claim any
          certification or compliance programme that Pottly has not actually completed.
        </p>

        <h2 id="retention">10. Data retention</h2>
        <ul>
          <li>Kitchen listings and account data are kept while the account is active.</li>
          <li>
            When a kitchen account is deleted, the public listing is removed and the account data is
            deleted or irreversibly anonymised. See the{" "}
            <a href="/delete-account">delete account</a> page for what that involves.
          </li>
          <li>
            Reviews left about a kitchen may remain visible after that kitchen is removed, in
            anonymised form, because they are not attached to a reviewer identity.
          </li>
          <li>
            Limited records may be retained where the law requires it, or to prevent abuse and
            fraud.
          </li>
        </ul>

        <h2 id="security">11. Security</h2>
        <p>
          We use reasonable technical and organisational measures to protect the information we hold,
          including encrypted connections and access controls on administrative tools. No service can
          promise perfect security, and we will not claim otherwise.
        </p>

        <h2 id="rights">12. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to ask for a copy of the personal
          information we hold about you, to correct it, to delete it, or to object to certain uses.
        </p>
        <p>
          Kitchen account holders can update most information directly in the app, and can request
          deletion at any time. To make any other request, email{" "}
          <a href={`mailto:${site.contact.privacy}`}>{site.contact.privacy}</a>.
        </p>

        <h2 id="children">13. Children</h2>
        <p>
          Pottly is not directed at children. We do not knowingly collect personal information from
          a child. If you believe a child has given us information, contact us and we will remove it.
        </p>

        <h2 id="changes">14. Changes</h2>
        <p>
          If this policy changes, the date at the top of the page is updated. Material changes will
          be communicated in the app or by email to kitchen account holders.
        </p>

        <h2 id="contact">15. Contact</h2>
        <p>
          Privacy questions and requests go to{" "}
          <a href={`mailto:${site.contact.privacy}`}>{site.contact.privacy}</a>.
        </p>
      </LegalLayout>
    </>
  );
}
