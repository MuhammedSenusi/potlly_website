import type { Metadata } from "next";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What information Potlly collects, including information used for accounts, safety reports, content moderation, blocking and age confirmation.",
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
  { id: "safety", label: "8. Safety, reports and moderation" },
  { id: "handoff", label: "9. WhatsApp and SMS handoff" },
  { id: "third-parties", label: "10. Third-party services and disclosure" },
  { id: "retention", label: "11. Data retention" },
  { id: "security", label: "12. Security" },
  { id: "rights", label: "13. Your rights" },
  { id: "age", label: "14. Age eligibility" },
  { id: "changes", label: "15. Changes" },
  { id: "contact", label: "16. Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="Potlly is designed to need as little information about you as possible. This page explains what is collected and why."
        meta={`Last updated ${site.legalUpdated}`}
      />
      <LegalLayout toc={toc}>
        {/* <div className="rounded-card border border-line bg-shell px-5 py-4 text-[0.9375rem]">
          <strong className="font-semibold text-ink">Draft for legal review.</strong> This policy
          describes how the product is designed to work. Confirm it against the live implementation
          and the data-protection law that applies to Potlly before publishing.
        </div> */}

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
          information below, the content you submit through the app, and any confirmation that you
          are at least 18 and have accepted the current version of our terms.
        </p>
        <p>
          <strong>People who use safety features.</strong> If you report content or another user, we
          collect the report, the reason you select, any details you provide, the content and account
          involved, and relevant account, device or activity information needed to investigate. If
          you block someone or remove a post from your feed, we store the information needed to apply
          that choice.
        </p>

        <h2 id="use">2. How we use information</h2>
        <ul>
          <li>To show kitchens, dishes and prices, and to sort them by distance from your area.</li>
          <li>To publish kitchen listings so customers can find them.</li>
          <li>To keep saved favorites available on your account.</li>
          <li>To calculate ratings and rank kitchens in search and discovery.</li>
          <li>To filter, detect and limit objectionable content, fake reviews and abusive activity.</li>
          <li>To investigate reports, enforce our terms and prevent repeat violations.</li>
          <li>To apply your blocks and keep content you remove from reappearing in your feed.</li>
          <li>To record that you confirmed you are at least 18 and accepted our terms.</li>
          <li>To fix problems, keep the service running, and respond when you contact us.</li>
        </ul>
        <p>We do not sell personal information.</p>

        <h2 id="location">3. Location information</h2>
        <p>
          Location drives almost everything in Potlly, so it is worth being precise about it. You can
          set your area in two ways: by granting device location permission, or by typing an area or
          address by hand. Manual entry always works. Location permission is optional and can be
          declined or revoked without losing access to the service.
        </p>
        <p>
          Your chosen area is used to sort and filter results by distance. It is stored on your
          device, and on your account if you have one, so you do not have to set it every visit.
        </p>

        <h2 id="kitchen-accounts">4. Kitchen account information</h2>
        <p>
          Kitchen profiles are public by design. The kitchen name, description, photos, menu, prices,
          delivery area and the contact number you publish are visible to anyone using Potlly,
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
          Potlly uses cookies and local storage on your device for things the product needs in order
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

        <h2 id="safety">8. Safety, reports and moderation</h2>
        <p>
          Potlly uses automated filters and human review to identify and respond to objectionable
          content and abusive conduct. These processes may examine submitted text, images, listings,
          reviews, report details, account identifiers, device or session identifiers, and relevant
          activity on the service. Automated filters can limit or flag content for review, but
          enforcement decisions may also be made by an authorised reviewer.
        </p>
        <p>
          When you report content or conduct, we use the report and related information to investigate,
          contact the people involved when appropriate, remove content, restrict or eject accounts,
          prevent repeat abuse, and meet legal or safety obligations. We do not publicly identify the
          person who made a report, but we cannot promise anonymity where disclosure is required by law
          or is necessary to address an immediate safety risk.
        </p>
        <p>
          Blocking creates a record between your account and the blocked account so that Potlly can
          prevent the interactions covered by the block. Removing a post from your feed records that
          preference so the post can be hidden from your view. These controls do not delete content
          from another person&rsquo;s account or from records we must keep for safety or legal reasons.
        </p>

        <h2 id="handoff">9. WhatsApp and SMS handoff</h2>
        <p>
          When you choose to order, Potlly opens WhatsApp or SMS on your device with the
          kitchen&rsquo;s number and a suggested message. From that moment the conversation happens
          in that app, between you and the kitchen.
        </p>
        <p>
          Potlly does not host, read, store or have access to those messages. What happens in
          WhatsApp is covered by WhatsApp&rsquo;s own privacy policy, and what happens over SMS is
          covered by your mobile network. The kitchen will see the phone number you message from.
        </p>

        <h2 id="third-parties">10. Third-party services and disclosure</h2>
        <p>
          Running Potlly requires a small number of service providers, for example hosting,
          storage of uploaded kitchen photos, and error reporting. These providers process data only
          to provide their service to us.
        </p>
        <p>
          Information connected with a safety report may be shared with authorised moderators and
          service providers that help us operate reporting and moderation tools. We may also disclose
          information where required by law, to respond to lawful requests, or where reasonably
          necessary to protect a person from serious harm, investigate fraud or abuse, or protect the
          security of Potlly. We do not sell personal information.
        </p>
        <p>
          The current list of providers should be published here before launch. We do not claim any
          certification or compliance programme that Potlly has not actually completed.
        </p>

        <h2 id="retention">11. Data retention</h2>
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
            Safety reports, moderation decisions, blocks and enforcement records are kept only as
            long as reasonably necessary to investigate the matter, apply your safety choices,
            prevent repeat abuse, resolve an appeal or dispute, or meet legal obligations.
          </li>
          <li>
            Records showing acceptance of the terms and confirmation of 18+ eligibility may be kept
            while the account is active and for a reasonable period afterward where needed to
            demonstrate compliance or resolve a dispute.
          </li>
          <li>
            Limited records may also be retained where the law requires it, or to prevent abuse and
            fraud. When information is no longer needed, it is deleted or irreversibly anonymised.
          </li>
        </ul>

        <h2 id="security">12. Security</h2>
        <p>
          We use reasonable technical and organisational measures to protect the information we hold,
          including encrypted connections and access controls on administrative tools. No service can
          promise perfect security, and we will not claim otherwise.
        </p>

        <h2 id="rights">13. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to ask for a copy of the personal
          information we hold about you, to correct it, to delete it, or to object to certain uses.
        </p>
        <p>
          Kitchen account holders can update most information directly in the app, and can request
          deletion at any time. To make any other request, email{" "}
          <a href={`mailto:${site.contact.privacy}`}>{site.contact.privacy}</a>.
        </p>

        <h2 id="age">14. Age eligibility</h2>
        <p>
          Potlly is an 18+ service and is not directed to anyone under 18. We may record whether a
          person confirmed that they are at least 18, but this policy does not authorise the collection
          of government identification, facial images or biometric information for age checks. If our
          age-assurance method changes, we will update this policy before collecting additional data.
        </p>
        <p>
          We do not knowingly collect personal information from anyone under 18. If you believe a
          person under 18 has provided personal information to Potlly, contact us so we can investigate
          and delete it where appropriate.
        </p>

        <h2 id="changes">15. Changes</h2>
        <p>
          If this policy changes, the date at the top of the page is updated. Material changes will
          be communicated in the app or by email to kitchen account holders.
        </p>

        <h2 id="contact">16. Contact</h2>
        <p>
          Potlly is responsible for the personal information described in this policy. Privacy
          questions, requests or complaints can be submitted through the contact option in the app
          or sent to{" "}
          <a href={`mailto:${site.contact.privacy}`}>{site.contact.privacy}</a>.
        </p>
        <p>
          Reports about inappropriate content or abusive conduct can be submitted through the in-app
          Report action or sent to{" "}
          <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>.
        </p>
      </LegalLayout>
    </>
  );
}
