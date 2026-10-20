import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, LegalLayout } from "@/components/site/page-hero";
import { GuideNav } from "@/components/site/guide-nav";

export const metadata: Metadata = {
  title: "Taking great food photos — kitchen guide",
  description:
    "Phone photography tips for Potlly kitchens: use natural light, pick the right angle, plate simply and show your food honestly so customers want to order.",
  alternates: { canonical: "/help/great-photos" },
};

const toc = [
  { id: "why", label: "Why photos matter" },
  { id: "light", label: "1. Use daylight" },
  { id: "angle", label: "2. Pick the right angle" },
  { id: "plating", label: "3. Plate it simply" },
  { id: "background", label: "4. Keep the background clean" },
  { id: "phone", label: "5. Get the most from your phone" },
  { id: "honest", label: "6. Show it honestly" },
  { id: "kitchen", label: "Your cover and kitchen photos" },
  { id: "checklist", label: "Quick checklist" },
];

export default function GreatPhotosGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchen guide"
        title="Taking great food photos"
        lead="You do not need a camera or a studio. A phone, a window and a few minutes are enough to make your food look as good as it tastes."
      />
      <LegalLayout toc={toc}>
        <h2 id="why">Why photos matter</h2>
        <p>
          On Potlly, customers decide with their eyes first. A clear, appetising photo is usually the
          reason someone taps into your kitchen — and a dark or blurry one is the reason they scroll
          past. Photos also set expectations: when the food that arrives looks like the picture,
          customers trust you and leave better reviews.
        </p>

        <h2 id="light">1. Use daylight</h2>
        <p>Light makes the biggest difference of anything on this page.</p>
        <ul>
          <li>Shoot next to a window during the day. Soft, indirect light is best.</li>
          <li>
            Turn off kitchen ceiling lights. Mixing them with daylight makes food look yellow or
            grey.
          </li>
          <li>Never use the flash. It flattens food and creates harsh shine on sauces and oil.</li>
          <li>
            If direct sun is too strong, hang a thin white curtain or sheet over the window to soften
            it.
          </li>
          <li>
            If one side of the plate is too dark, prop up a piece of white card or paper opposite the
            window to bounce light back.
          </li>
        </ul>

        <h2 id="angle">2. Pick the right angle</h2>
        <ul>
          <li>
            <strong>From directly above</strong> works best for flat dishes and spreads — soups in a
            bowl, rice with sides, a full tray, platters of small chops.
          </li>
          <li>
            <strong>From a 45° angle</strong>, roughly where you would sit to eat, works for dishes
            with height or layers — stacked meat pies, a skewer of suya, a sliced cake.
          </li>
          <li>
            <strong>Close up</strong> works when the texture sells the dish — the char on grilled
            meat, the oil on stew, the crumb of puff-puff.
          </li>
        </ul>
        <p>Take a few shots from each angle, then pick the best one later.</p>

        <h2 id="plating">3. Plate it simply</h2>
        <ul>
          <li>Use plain plates and bowls — white or a solid, neutral colour lets the food stand out.</li>
          <li>Wipe drips and splashes from the rim before you shoot.</li>
          <li>
            Don&rsquo;t overfill. Leave a little space around the food so the plate has a clean
            edge.
          </li>
          <li>
            Show what makes the dish: let the protein sit on top of the rice, spoon some sauce where
            it can be seen, add the garnish you actually serve.
          </li>
          <li>Photograph food while it is fresh and hot. Rice dries out and sauces skin over fast.</li>
        </ul>

        <h2 id="background">4. Keep the background clean</h2>
        <p>
          Clear away bottles, packaging, cloths and utensils you are not using. A wooden board, a
          plain table or a clean countertop makes a good surface. A simple prop or two — a napkin, a
          small bowl of pepper, a spoon — can add warmth, but the dish should always be the main thing
          in the frame.
        </p>

        <h2 id="phone">5. Get the most from your phone</h2>
        <ul>
          <li>Wipe your camera lens first. Kitchen grease is the most common cause of hazy photos.</li>
          <li>Tap the food on your screen to focus on it before you take the photo.</li>
          <li>Hold the phone with both hands, or rest your elbows on the table, to avoid blur.</li>
          <li>
            Avoid zooming in. Move the phone closer instead — digital zoom makes photos grainy.
          </li>
          <li>
            Keep editing light: a small bump in brightness and a crop is plenty. Avoid heavy filters
            that change the colour of the food.
          </li>
        </ul>

        <h2 id="honest">6. Show it honestly</h2>
        <p>
          Every photo must be of food you made and serve, at the portion a customer will actually
          receive. Do not use stock images, photos from the internet or another kitchen&rsquo;s
          pictures. Besides breaking our{" "}
          <Link href="/terms#listings">terms</Link>, it is the quickest way to an unhappy customer and a
          bad review. If a recipe or portion changes, update the photo.
        </p>

        <h2 id="kitchen">Your cover and kitchen photos</h2>
        <p>
          Your cover photo is the image customers see first in search, so choose your strongest,
          most recognisable dish. If you add photos of your workspace, make sure it is clean, tidy and
          well lit — people are reassured by seeing where their food is made.
        </p>
        <p>
          Avoid photos that show customers&rsquo; faces, addresses, or anyone who has not agreed to
          be photographed.
        </p>

        <h2 id="checklist">Quick checklist</h2>
        <ul>
          <li>Shot by a window, in daylight, with no flash</li>
          <li>Lens wiped and the food in focus</li>
          <li>Clean plate and an uncluttered background</li>
          <li>The real dish, at the real portion size</li>
          <li>Bright and true to colour, with no heavy filters</li>
        </ul>

        <GuideNav current="great-photos" />
      </LegalLayout>
    </>
  );
}
