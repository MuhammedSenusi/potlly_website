import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { GuideNav } from "@/components/site/guide-nav";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Handling orders — kitchen guide",
  description:
    "How Potlly orders reach your kitchen on WhatsApp or SMS, and how to confirm, prepare, deliver and get paid so every customer comes back.",
  alternates: { canonical: "/help/handling-orders" },
};

const toc = [
  { id: "how", label: "How orders reach you" },
  { id: "reply", label: "1. Reply quickly" },
  { id: "confirm", label: "2. Confirm the details" },
  { id: "payment", label: "3. Agree on payment" },
  { id: "prepare", label: "4. Prepare and pack" },
  { id: "deliver", label: "5. Deliver or hand over" },
  { id: "after", label: "6. After the order" },
  { id: "problems", label: "When something goes wrong" },
  { id: "safety", label: "Staying safe" },
];

export default function HandlingOrdersGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchen guide"
        title="Handling orders"
        lead="Orders come to you as a message on the phone you already use. Here is how to turn each one into a smooth delivery and a customer who orders again."
      />
      <LegalLayout toc={toc}>
        <h2 id="how">How orders reach you</h2>
        <p>
          When a customer taps <strong>Message to order</strong> on your profile or a dish, Potlly
          opens WhatsApp — or SMS if they don&rsquo;t have WhatsApp — with your number and, where
          possible, the dish and your kitchen name already filled in. From that point the
          conversation is between you and the customer.
        </p>
        <p>
          Potlly does not take, track, cancel or refund orders, and never holds payment. You are in
          charge of the whole order, which also means you keep the full amount.
        </p>

        <h2 id="reply">1. Reply quickly</h2>
        <p>
          A hungry customer will message more than one kitchen. The one that replies first usually
          gets the order.
        </p>
        <ul>
          <li>Aim to reply within 15 minutes during the hours you are open.</li>
          <li>
            Even if you are busy, a short &ldquo;Hi! Got your message, I&rsquo;ll confirm in 10
            minutes&rdquo; keeps the customer with you.
          </li>
          <li>
            If you cannot take the order, say so straight away so they can try somewhere else.
          </li>
          <li>
            Mark your kitchen as closed in the app when you are away or fully booked, rather than
            leaving messages unanswered.
          </li>
        </ul>
        <p>
          WhatsApp Business is free and lets you set an away message and save quick replies for
          things you send often, like your menu or payment details.
        </p>

        <h2 id="confirm">2. Confirm the details</h2>
        <p>
          Before you start cooking, send one message that sums up the order and ask the customer to
          reply to confirm it. Include:
        </p>
        <ul>
          <li>Each dish, the quantity and the portion size</li>
          <li>The price of each item, the delivery fee and the total</li>
          <li>Delivery or pickup, the address, and a time window</li>
          <li>How they will pay</li>
          <li>Any allergies or special requests, in their words</li>
        </ul>
        <p>For example:</p>
        <p className="rounded-card border border-line bg-shell px-5 py-4">
          &ldquo;Thanks Ade! To confirm: 2 × party jollof with chicken ($18 each) and 1 litre egusi
          ($25). Delivery to Malton is $7, so $68 total. Arriving between 6 and 6:30pm today. Payment by
          e-Transfer to the email I&rsquo;ll send. Any allergies? Reply YES to confirm.&rdquo;
        </p>
        <p>
          A written summary prevents almost every dispute about what was ordered or what it cost.
          Always charge the prices on your listing — if a price has changed, update it in the app
          first.
        </p>

        <h2 id="payment">3. Agree on payment</h2>
        <p>
          Customers pay you directly, by Interac e-Transfer or cash on delivery. Say which you accept
          up front.
        </p>
        <ul>
          <li>
            For large orders, party trays or anything you need to buy ingredients for, it is
            reasonable to ask for a deposit or full payment by e-Transfer before you start. State
            this clearly when you confirm.
          </li>
          <li>
            Before you cook, check an e-Transfer has actually landed in your bank account — not just
            a screenshot of one.
          </li>
          <li>For cash, let the customer know if you cannot give change.</li>
        </ul>

        <h2 id="prepare">4. Prepare and pack</h2>
        <ul>
          <li>
            Cook only at your approved facility, and follow safe food-handling practice for
            temperature, storage and hygiene.
          </li>
          <li>Use sealed, leak-proof containers. Tape or bag soups and stews.</li>
          <li>
            Label each container with the dish and the date it was made, and flag anything containing
            common allergens.
          </li>
          <li>Check the order against your confirmation message before it leaves.</li>
          <li>Keep hot food hot and cold food cold until it reaches the customer.</li>
        </ul>

        <h2 id="deliver">5. Deliver or hand over</h2>
        <ul>
          <li>Send a message when the food is on its way, with an estimated arrival time.</li>
          <li>If you are going to be late, tell the customer before the time you promised — not after.</li>
          <li>Confirm the address and any buzzer or unit number before you set off.</li>
          <li>For pickup, share the exact meeting point and a time window.</li>
        </ul>

        <h2 id="after">6. After the order</h2>
        <p>
          A quick follow-up — &ldquo;Hope you enjoyed it! If you did, a review on Potlly really helps
          us&rdquo; — is welcome. Reviews raise your ranking, so they are worth asking for. Never
          offer discounts or free food in exchange for a rating, and never review your own kitchen.
        </p>
        <p>
          Keep the chat. It is your record of what was ordered and agreed if a question comes up
          later.
        </p>

        <h2 id="problems">When something goes wrong</h2>
        <ul>
          <li>
            <strong>A mistake in the order.</strong> Apologise, and offer to fix it — replace the
            missing item, refund the difference or take it off their next order. Customers remember
            how a problem was handled more than the problem itself.
          </li>
          <li>
            <strong>The customer cancels.</strong> Decide your cancellation policy in advance — for
            example, deposits are non-refundable within 24 hours — and state it when you confirm.
          </li>
          <li>
            <strong>Nobody answers at delivery.</strong> Call or message, wait a reasonable time, and
            keep a record of your attempts in the chat.
          </li>
          <li>
            <strong>An unfair or abusive review.</strong> Email{" "}
            <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a> with your kitchen
            name and the review. We remove reviews that are fake, abusive or not about a real order.
          </li>
        </ul>
        <p>
          If a customer reports feeling unwell after eating your food, take it seriously: stop
          serving the dish until you know what happened, and follow your local public health
          reporting requirements.
        </p>

        <h2 id="safety">Staying safe</h2>
        <ul>
          <li>Only deliver to addresses you are comfortable with. You can always offer pickup instead.</li>
          <li>Be cautious of anyone who overpays and asks you to send the difference back — it is a common scam.</li>
          <li>
            Never share login codes or passwords. Potlly will never ask for them by message.
          </li>
          <li>
            Report harassment, threats or suspicious customers to{" "}
            <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>, and block them on
            WhatsApp.
          </li>
        </ul>
        <p>
          Our <Link href="/terms#safety">community standards</Link> apply to customers and kitchens
          alike.
        </p>

        <GuideNav current="handling-orders" />
      </LegalLayout>
    </>
  );
}
