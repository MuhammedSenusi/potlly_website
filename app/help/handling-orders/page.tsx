import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { GuideNav } from "@/components/site/guide-nav";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Handling orders — kitchen guide",
  description:
    "How Potlly orders reach your kitchen, and how to accept, prepare, deliver and get paid so every customer comes back.",
  alternates: { canonical: "/help/handling-orders" },
};

const toc = [
  { id: "how", label: "How orders reach you" },
  { id: "reply", label: "1. Respond quickly" },
  { id: "confirm", label: "2. Check the details" },
  { id: "payment", label: "3. Get paid" },
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
        lead="Orders come to you in the Potlly app. Here is how to turn each one into a smooth delivery and a customer who orders again."
      />
      <LegalLayout toc={toc}>
        <h2 id="how">How orders reach you</h2>
        <p>
          When a customer orders from your kitchen, the request arrives in the app as a new order
          with its own order number. It shows the dishes, the delivery address, when the customer
          wants it — now, or a pre-order for a later day and time — the payment method, and the
          total including your delivery fee.
        </p>
        <p>
          You move each order through the same steps the customer sees:{" "}
          <strong>Requested, Accepted, Preparing, Out for delivery</strong> and{" "}
          <strong>Completed</strong>. Potlly never holds payment, so you keep the full amount.
        </p>

        <h2 id="reply">1. Respond quickly</h2>
        <p>
          A hungry customer can order from more than one kitchen. The one that responds first usually
          keeps the order.
        </p>
        <ul>
          <li>Aim to respond to a new request within 15 minutes during the hours you are open.</li>
          <li>
            If you cannot take an order, say so straight away so the customer can try somewhere
            else.
          </li>
          <li>
            Mark your kitchen as closed in the app when you are away or fully booked, rather than
            leaving requests unanswered.
          </li>
          <li>
            For a pre-order, check that you can make the date and time before you accept it.
          </li>
        </ul>

        <h2 id="confirm">2. Check the details</h2>
        <p>Before you accept and start cooking, read the whole order:</p>
        <ul>
          <li>Each dish and the quantity</li>
          <li>The delivery address, and the day and time the customer wants it</li>
          <li>The subtotal, your delivery fee and the total</li>
          <li>How the customer plans to pay</li>
        </ul>
        <p>
          Prices on an order come from your listing. If a price or a dish has changed, update it in
          the app before you accept new orders, so what customers see is what you charge.
        </p>

        <h2 id="payment">3. Get paid</h2>
        <p>
          Customers pay you directly, by Interac e-Transfer or cash on delivery. The order shows
          which they chose.
        </p>
        <ul>
          <li>
            For large orders, party trays or anything you need to buy ingredients for, it is
            reasonable to ask for a deposit or full payment by e-Transfer before you start. Make
            sure the customer knows before you accept.
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
          <li>Check the packed order against the order in the app before it leaves.</li>
          <li>Keep hot food hot and cold food cold until it reaches the customer.</li>
        </ul>

        <h2 id="deliver">5. Deliver</h2>
        <ul>
          <li>
            Move the order to <strong>Out for delivery</strong> when it leaves your kitchen, so the
            customer knows it is on its way.
          </li>
          <li>If you are going to be late, let the customer know before the time they asked for — not after.</li>
          <li>Check the delivery address on the order, including any buzzer or unit number, before you set off.</li>
          <li>
            Mark the order <strong>Completed</strong> once the food has been handed over and you have
            been paid.
          </li>
        </ul>

        <h2 id="after">6. After the order</h2>
        <p>
          Once an order is completed, the customer can review your kitchen. Reviews raise your
          ranking, so great food and a smooth delivery are the best way to earn them. Never offer
          discounts or free food in exchange for a rating, and never review your own kitchen.
        </p>
        <p>
          Every order stays in the app with its number, so you have a record of what was ordered and
          agreed if a question comes up later.
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
            example, deposits are non-refundable within 24 hours — and make sure customers know it
            before you accept an order.
          </li>
          <li>
            <strong>Nobody answers at delivery.</strong> Try to reach the customer, wait a reasonable
            time, and keep a note of your attempts.
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
            Never share login codes or passwords. Potlly will never ask you for them.
          </li>
          <li>
            Report harassment, threats or suspicious customers to{" "}
            <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>.
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
