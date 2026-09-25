import type { Metadata } from "next";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & conditions (EULA)",
  description:
    "Potlly's 18+ End User Licence Agreement, including vendor permits, approved food-preparation facilities, verification, community safety and enforcement.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "customers", label: "3. Using Potlly as a customer" },
  { id: "kitchens", label: "4. Kitchen responsibilities" },
  { id: "verification", label: "5. Verification and documents" },
  { id: "listings", label: "6. Listings and content" },
  { id: "ordering", label: "7. Ordering" },
  { id: "payments", label: "8. Payments" },
  { id: "reviews", label: "9. Reviews" },
  { id: "safety", label: "10. Safety and community standards" },
  { id: "prohibited", label: "11. Prohibited activity" },
  { id: "role", label: "12. Our role" },
  { id: "liability", label: "13. Limitation of liability" },
  { id: "termination", label: "14. Suspension and termination" },
  { id: "changes", label: "15. Changes to these terms" },
  { id: "contact", label: "16. Contact and reporting" },
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
          Potlly is a marketplace that helps people discover local food entrepreneurs and cooks who
          prepare food through facilities permitted for their operations, and helps those vendors
          publish a profile, menu and contact details. In these terms, a vendor profile is called a
          &ldquo;kitchen&rdquo;. These terms form the Potlly End User Licence Agreement (EULA). They
          apply whenever you access or use the Potlly website or mobile app, whether or not you have
          an account.
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
            If you list a kitchen, you confirm that you are legally entitled to operate the food
            business, prepare each listed product at a facility approved for that product and
            process, and hold every permit, licence, registration, inspection approval and food-safety
            qualification required where you operate.
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
          including price, delivery time, delivery cost, preparation location and any allergens or
          dietary requirements, directly with the kitchen before you order. A verification label is
          not a guarantee that food is allergen-free or suitable for a particular dietary or medical
          need.
        </p>

        <h2 id="kitchens">4. Kitchen responsibilities</h2>
        <p>If you operate a kitchen on Potlly, you agree that:</p>
        <ul>
          <li>Your kitchen profile, menu, prices and delivery information are accurate and kept up to date.</li>
          <li>
            You will prepare, store, package, transport and handle food safely and comply with all
            food-safety, labelling, allergen, business, tax and consumer-protection rules that apply
            to you.
          </li>
          <li>
            You will prepare every product only at the approved food-handling establishment or other
            facility identified in your current documentation. You will not prepare listed food in a
            private residential kitchen where doing so is prohibited.
          </li>
          <li>
            You will hold and maintain all permits and approvals required for your business, facility,
            products and preparation methods before listing food or accepting an order.
          </li>
          <li>
            You will promptly tell Potlly if a permit or approval expires, is suspended, revoked,
            restricted or otherwise changes, or if you change your preparation facility, products or
            processes.
          </li>
          <li>You will describe your dishes honestly, including anything a customer would reasonably need to know about ingredients.</li>
          <li>You will honour the prices and delivery terms you publish, or update them before accepting an order.</li>
          <li>The phone number you publish is one you control and monitor, and you accept that customers will contact you on it directly.</li>
          <li>You will respond to customers in a respectful, professional way.</li>
        </ul>
        <p>
          If you operate in Manitoba, food offered through Potlly must not be prepared in a
          residential home kitchen. Unless a lawful exception specifically applies to your activity,
          you must use an inspected commercial or community kitchen or another approved food-handling
          establishment and obtain your own applicable Food Service Establishment permit before
          operating. A food-handler training certificate by itself is not a permit.
        </p>
        <p>
          You are the seller of the food you list. The contract for any order is between you and the
          customer. You, not Potlly or the facility owner, remain responsible for confirming which
          requirements apply to your products and preparation methods.
        </p>

        <h2 id="verification">5. Verification and documents</h2>
        <p>
          Before a kitchen can accept orders, Potlly may require the operator to provide information
          and current documents such as government-issued identification, business registration,
          the preparation facility&rsquo;s name and address, a food-handling establishment permit,
          the operator&rsquo;s own permit, inspection information, food-handler training records or
          other evidence reasonably needed for the products and location involved.
        </p>
        <p>
          You authorise Potlly to review the information you provide and, where reasonably necessary,
          confirm it with the issuing authority, facility operator or another appropriate source. You
          must provide truthful, complete and unaltered documents, keep them current, and supply
          updated evidence when requested. We may require renewed verification periodically or when
          your facility, menu, processes or legal requirements change.
        </p>
        <p>
          A &ldquo;Verified&rdquo; label means only that Potlly reviewed the specified documentation and
          found it satisfactory at the time of review. It does not mean that Potlly or a government
          authority endorses the vendor, has inspected every preparation activity, guarantees ongoing
          compliance, or guarantees the safety, quality or legality of any food. We may withhold,
          remove or correct a verification label at any time if information is missing, outdated,
          inaccurate or cannot be confirmed.
        </p>

        <h2 id="listings">6. Listings and content</h2>
        <p>
          You keep ownership of the photos, descriptions and other content you upload. By uploading
          it you grant Potlly a non-exclusive licence to display, resize and distribute that content
          for the purpose of running and promoting the marketplace.
        </p>
        <p>
          You must only upload content you have the right to use. We may remove content that is
          misleading, unlawful, objectionable, abusive, or that infringes someone else&rsquo;s rights.
        </p>

        <h2 id="ordering">7. Ordering</h2>
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

        <h2 id="payments">8. Payments</h2>
        <p>
          Payment is by Interac e-Transfer or cash on delivery, settled directly with the kitchen.
          Potlly does not process payments, hold funds, or charge customers a service fee. Kitchens
          set their own prices and delivery fees and receive the full amount from the customer.
        </p>
        <p>
          Any refund, discount or dispute about payment is a matter between the customer and the
          kitchen.
        </p>

        <h2 id="reviews">9. Reviews</h2>
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

        <h2 id="safety">10. Safety and community standards</h2>
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
        <p>
          Food-safety concerns, suspected foodborne illness, undeclared allergens and regulatory
          action should be reported to Potlly promptly. Vendors must cooperate with reasonable
          investigations, recalls and requests from public-health or other competent authorities.
          Potlly may immediately hide affected listings or suspend ordering while a concern is
          investigated. Potlly reporting does not replace contacting emergency services or the
          appropriate public-health authority when urgent help is needed.
        </p>

        <h2 id="prohibited">11. Prohibited activity</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Post false, misleading or fraudulent listings, prices or reviews.</li>
          <li>Impersonate another person, cook or kitchen.</li>
          <li>Harass, threaten or discriminate against another user.</li>
          <li>Post, share or promote objectionable content.</li>
          <li>Contact or target a user who has blocked you, including through another account.</li>
          <li>Use Potlly to sell anything other than food and drink prepared by the listed kitchen.</li>
          <li>
            List or sell food prepared at an undisclosed, unapproved or unpermitted location, or
            outside the scope of the permits and approvals that apply to you.
          </li>
          <li>
            Submit altered, expired, borrowed or misleading compliance documents, or claim that you
            or your kitchen is government-approved merely because Potlly displays a verification
            label.
          </li>
          <li>Scrape, copy or resell Potlly&rsquo;s content or data without permission.</li>
          <li>Interfere with, probe or attempt to disrupt the service or its security.</li>
        </ul>

        <h2 id="role">12. Our role</h2>
        <p>
          Potlly is a discovery platform. We are not a restaurant, a food business, a delivery
          company or a payment processor. We do not prepare, inspect, handle, deliver or guarantee
          any food listed on the service. We may review or confirm documents as described above, but
          we are not a regulator or public-health inspector and do not replace official permitting,
          inspection or enforcement. Vendors remain responsible for their food, facilities and legal
          compliance at all times.
        </p>
        <p>
          Verification labels, ratings and reviews are limited marketplace information. They are not
          a government approval, food-safety certification, warranty or endorsement by Potlly.
        </p>

        <h2 id="liability">13. Limitation of liability</h2>
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

        <h2 id="termination">14. Suspension and termination</h2>
        <p>
          You may stop using Potlly at any time. Kitchen account holders can request deletion of
          their account and listing on the{" "}
          <a href="/delete-account">delete account</a> page.
        </p>
        <p>
          We may suspend or permanently remove an account, listing or content that breaches these
          terms, misrepresents a kitchen, puts another person at risk, or involves objectionable
          content or abusive conduct. Serious or repeated violations may result in immediate and
          permanent ejection from Potlly. We may also suspend a kitchen or disable ordering while we
          verify documents, investigate a food-safety concern or respond to regulatory action. Where
          it is reasonable and lawful to do so, we will tell you why.
        </p>

        <h2 id="changes">15. Changes to these terms</h2>
        <p>
          We may update these terms as the product changes. The date at the top of this page always
          shows when they were last revised. If a change materially affects your rights, we will give
          notice in the app or by email to kitchen account holders before it takes effect.
        </p>

        <h2 id="contact">16. Contact and reporting</h2>
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
