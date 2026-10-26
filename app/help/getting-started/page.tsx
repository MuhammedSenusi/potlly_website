import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { GuideNav } from "@/components/site/guide-nav";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Getting started — kitchen guide",
  description:
    "How to set up your Potlly kitchen: create your account, verify your documents, build a profile and menu customers trust, and set your delivery area.",
  alternates: { canonical: "/help/getting-started" },
};

const toc = [
  { id: "before", label: "Before you start" },
  { id: "account", label: "1. Create your account" },
  { id: "verification", label: "2. Get verified" },
  { id: "profile", label: "3. Build your profile" },
  { id: "menu", label: "4. Add your menu" },
  { id: "delivery", label: "5. Set delivery and payment" },
  { id: "live", label: "6. Go live" },
  { id: "reviews", label: "Growing with reviews" },
];

export default function GettingStartedGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchen guide"
        title="Getting started on Potlly"
        lead="Everything you need to go from a new account to a listing customers can find, read and order from — in about an hour."
      />
      <LegalLayout toc={toc}>
        <h2 id="before">Before you start</h2>
        <p>Have these ready. It makes setup quick and means you will not need to come back later.</p>
        <ul>
          <li>
            <strong>A phone number you watch.</strong> Use one you can answer throughout the day, so you
            can be reached about an order.
          </li>
          <li>
            <strong>Your documents.</strong> Government ID, and the permits and approvals for the
            facility where you prepare food.
          </li>
          <li>
            <strong>A few good photos</strong> of your best dishes. Our{" "}
            <Link href="/help/great-photos">photo guide</Link> shows how to take them on a phone.
          </li>
          <li>
            <strong>Your menu and prices</strong>, including portion sizes.
          </li>
          <li>
            <strong>Your delivery area and fee</strong>, or whether customers can pick up.
          </li>
        </ul>

        <h2 id="account">1. Create your account</h2>
        <p>
          Download the Potlly app and choose to sign up as a kitchen. You will be asked for your
          name, phone number, email and location. Confirm your email from the link we send you,
          then sign back in to the app.
        </p>
        <p>
          Customers can browse without an account but need one to place an order. Your kitchen account
          is what lets you manage your listing and your orders.
        </p>

        <h2 id="verification">2. Get verified</h2>
        <p>
          Before your kitchen can take orders, we review your documents. Depending on where you
          operate and what you sell, we may ask for:
        </p>
        <ul>
          <li>Government-issued photo ID</li>
          <li>Your business registration, if you have one</li>
          <li>The name and address of the facility where you prepare food</li>
          <li>The facility&rsquo;s food-handling establishment permit, and your own permit</li>
          <li>Food-handler training certificates and recent inspection information</li>
        </ul>
        <p>
          Upload clear, complete photos or scans — every corner visible, nothing cropped or edited.
          Blurry or partial documents are the most common reason verification takes longer.
        </p>
        <p>
          Food listed on Potlly must be prepared at an approved facility, not a home kitchen where
          that is not allowed. The <Link href="/terms#kitchens">kitchen responsibilities</Link> in
          our terms set out exactly what you are agreeing to.
        </p>

        <h2 id="profile">3. Build your profile</h2>
        <p>Your profile is the first thing a customer sees. Make it answer their questions.</p>
        <h3>Cover photo</h3>
        <p>
          Use your single best dish, bright and close up. This one image decides whether people tap
          into your kitchen.
        </p>
        <h3>Kitchen name</h3>
        <p>
          Short and easy to remember. If customers already know you by a name, use it.
        </p>
        <h3>Description</h3>
        <p>
          Two or three sentences: what you cook, what you are known for, and anything that makes you
          different. For example:
        </p>
        <p className="rounded-card border border-line bg-shell px-5 py-4 italic">
          &ldquo;Lagos-style home cooking from Brampton. Known for smoky party jollof and peppered
          turkey. Large portions, made fresh to order — please order a day ahead for trays.&rdquo;
        </p>

        <h2 id="menu">4. Add your menu</h2>
        <p>Every dish needs a name and a price. The best listings also add:</p>
        <ul>
          <li>
            <strong>A photo.</strong> Dishes with photos get far more orders than dishes without.
          </li>
          <li>
            <strong>The portion size.</strong> &ldquo;1 litre&rdquo;, &ldquo;serves 2&rdquo; or
            &ldquo;half tray (feeds 10–12)&rdquo; stops back-and-forth before an order.
          </li>
          <li>
            <strong>What comes with it.</strong> Is the rice served with protein? Is the soup sold
            with swallow?
          </li>
          <li>
            <strong>Allergens and heat.</strong> Mention nuts, shellfish, egg, dairy and how spicy it
            is.
          </li>
        </ul>
        <p>
          Start with the dishes you make best and most often. A focused menu of eight dishes you can
          always deliver beats thirty you can rarely make. You can edit prices and remove dishes at
          any time, and changes appear on your profile straight away.
        </p>

        <h2 id="delivery">5. Set delivery and payment</h2>
        <p>Spell out how food gets to the customer so nobody is surprised when they order.</p>
        <ul>
          <li>The areas or neighbourhoods you deliver to</li>
          <li>Your delivery fee, or how it changes with distance</li>
          <li>Whether pickup is available, and roughly where</li>
          <li>Your minimum order, if you have one</li>
          <li>How much notice you need — same day, or a day ahead for larger orders</li>
        </ul>
        <p>
          Customers pay you directly by Interac e-Transfer or cash on delivery. Potlly takes no
          commission and never handles the money.
        </p>

        <h2 id="live">6. Go live</h2>
        <p>
          Once you are verified and your profile and menu are filled in, your kitchen appears to
          customers nearby. Before you share it, open your listing as a customer would and check:
        </p>
        <ul>
          <li>Your phone number is right and your kitchen shows as open</li>
          <li>Every dish has a price, and the prices are current</li>
          <li>Your delivery details answer &ldquo;do you deliver to me, and how much?&rdquo;</li>
        </ul>
        <p>
          Keep your status up to date. If you are away or fully booked, mark your kitchen as closed so
          customers are not left waiting for a reply.
        </p>

        <h2 id="reviews">Growing with reviews</h2>
        <p>
          Customers can leave an anonymous star rating and comment after ordering. Kitchens with
          more positive reviews rank higher in search and in the Top Rated section, so every good
          order helps you get found.
        </p>
        <p>
          The simplest way to earn them: food that matches its photo, replies that come quickly, and
          delivery when you said it would arrive. Our{" "}
          <Link href="/help/handling-orders">guide to handling orders</Link> covers this in detail.
          Never post reviews for your own kitchen or offer something in exchange for a rating — we
          remove them, and it can cost you your listing.
        </p>
        <p>
          If something on your listing needs changing that you cannot do in the app, email{" "}
          <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>.
        </p>

        <GuideNav current="getting-started" />
      </LegalLayout>
    </>
  );
}
