/**
 * Marketplace content.
 *
 * Everything the marketing site shows about dishes, kitchens and reviews lives
 * here so it can be swapped for live API data without touching a component.
 * The kitchens and cooks below are illustrative examples of the kind of
 * Nigerian and West African home kitchen Pottly lists across the Greater
 * Toronto Area — they are clearly-labelled sample content, not real vendors,
 * and no usage, revenue or scale claims are made anywhere on the site.
 */

export type Money = number;

/** Canadian dollars, formatted the way the mobile app formats it. */
export function formatPrice(value: Money): string {
  return `$${value.toLocaleString("en-CA")}`;
}

export type Dish = {
  id: string;
  name: string;
  kitchenId: string;
  kitchen: string;
  price: Money;
  rating: number;
  reviews: number;
  distanceKm: number;
  category: CategoryId;
  image: string;
  alt: string;
  /** Short serving note shown under the dish name in the app UI. */
  note?: string;
};

export type CategoryId =
  | "rice"
  | "soups"
  | "grills"
  | "snacks"
  | "swallow"
  | "drinks"
  | "sweet";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "rice", label: "Rice & pasta" },
  { id: "soups", label: "Soups & stews" },
  { id: "swallow", label: "Swallow" },
  { id: "grills", label: "Grills & proteins" },
  { id: "snacks", label: "Small chops" },
  { id: "sweet", label: "Cakes & pastries" },
  { id: "drinks", label: "Drinks" },
];

export type Kitchen = {
  id: string;
  name: string;
  cook: string;
  area: string;
  city: string;
  rating: number;
  reviews: number;
  distanceKm: number;
  deliveryFee: Money;
  deliveryArea: string;
  prepTime: string;
  image: string;
  alt: string;
  blurb: string;
  specialties: string[];
  openNow: boolean;
};

export const kitchens: Kitchen[] = [
  {
    id: "mama-tayo",
    name: "Mama Tayo's Kitchen",
    cook: "Adetayo O.",
    area: "Scarborough",
    city: "Toronto",
    rating: 4.8,
    reviews: 126,
    distanceKm: 3.1,
    deliveryFee: 7,
    deliveryArea: "Scarborough, Agincourt and Malvern",
    prepTime: "35–50 min",
    image: "/food/kitchen-mama-tayo.webp",
    alt: "A home kitchen counter with a large pot of stew on the stove",
    blurb:
      "Party jollof, efo riro and peppered chicken, cooked to order. Bulk trays for owambe and get-togethers on weekends.",
    specialties: ["Party jollof", "Efo riro", "Peppered chicken"],
    openNow: true,
  },
  {
    id: "adas-pot",
    name: "Ada's Pot",
    cook: "Chinaza N.",
    area: "North York",
    city: "Toronto",
    rating: 4.9,
    reviews: 84,
    distanceKm: 5.4,
    deliveryFee: 8,
    deliveryArea: "North York, Don Mills and Willowdale",
    prepTime: "40–60 min",
    image: "/food/kitchen-adas-pot.webp",
    alt: "A bowl of egusi soup served with pounded yam",
    blurb:
      "Eastern soups made the slow way — egusi, oha and nsala, with pounded yam wrapped hot.",
    specialties: ["Egusi", "Oha soup", "Pounded yam"],
    openNow: true,
  },
  {
    id: "halima-home",
    name: "Halima's Home Kitchen",
    cook: "Halima B.",
    area: "Rexdale",
    city: "Toronto",
    rating: 4.7,
    reviews: 58,
    distanceKm: 6.8,
    deliveryFee: 9,
    deliveryArea: "Rexdale, Etobicoke North and Malton",
    prepTime: "30–45 min",
    image: "/food/kitchen-halima.webp",
    alt: "Skewers of spiced grilled beef on a charcoal grill",
    blurb:
      "Suya, masa and tuwo, grilled fresh from 4pm. Order early on weekends.",
    specialties: ["Suya", "Masa", "Tuwo shinkafa"],
    openNow: false,
  },
  {
    id: "nkechi-chops",
    name: "Nkechi's Small Chops",
    cook: "Nkechi E.",
    area: "Brampton",
    city: "Brampton",
    rating: 4.8,
    reviews: 141,
    distanceKm: 8.2,
    deliveryFee: 8,
    deliveryArea: "Brampton, Bramalea and Heart Lake",
    prepTime: "45–70 min",
    image: "/food/kitchen-nkechi.webp",
    alt: "A tray of golden puff puff fresh from the fryer",
    blurb:
      "Puff puff, samosa, spring rolls and peppered gizzard — packed warm for parties of any size.",
    specialties: ["Puff puff", "Small chops trays", "Meat pie"],
    openNow: true,
  },
  {
    id: "ronke-bakes",
    name: "Auntie Ronke Bakes",
    cook: "Ronke A.",
    area: "Mississauga",
    city: "Mississauga",
    rating: 4.9,
    reviews: 73,
    distanceKm: 7.6,
    deliveryFee: 10,
    deliveryArea: "Mississauga, Meadowvale and Streetsville",
    prepTime: "Same-day, order by 11am",
    image: "/food/kitchen-ronke.webp",
    alt: "A slice of homemade cake on a plate",
    blurb:
      "Butter cake, chin chin and banana bread from a home oven. Custom cakes with two days' notice.",
    specialties: ["Butter cake", "Chin chin", "Banana bread"],
    openNow: true,
  },
  {
    id: "ofada-republic",
    name: "Ofada Republic",
    cook: "Segun D.",
    area: "Ajax",
    city: "Ajax",
    rating: 4.6,
    reviews: 49,
    distanceKm: 11.3,
    deliveryFee: 11,
    deliveryArea: "Ajax, Pickering and Whitby",
    prepTime: "45–60 min",
    image: "/food/kitchen-ofada.webp",
    alt: "A plate of ofada rice with ayamase sauce",
    blurb:
      "One thing, done properly: ofada rice with ayamase sauce, wrapped in leaf the old way.",
    specialties: ["Ofada rice", "Ayamase", "Assorted meat"],
    openNow: true,
  },
];

export const kitchenById = Object.fromEntries(kitchens.map((k) => [k.id, k]));

export const dishes: Dish[] = [
  {
    id: "party-jollof",
    name: "Party Jollof & Chicken",
    kitchenId: "mama-tayo",
    kitchen: "Mama Tayo's Kitchen",
    price: 3500,
    rating: 4.9,
    reviews: 62,
    distanceKm: 1.2,
    category: "rice",
    image: "/food/dish-party-jollof.webp",
    alt: "A plate of smoky party jollof rice with fried plantain and chicken",
    note: "Smoky, with plantain on the side",
  },
  {
    id: "egusi-pounded-yam",
    name: "Egusi & Pounded Yam",
    kitchenId: "adas-pot",
    kitchen: "Ada's Pot",
    price: 4200,
    rating: 4.9,
    reviews: 45,
    distanceKm: 2.4,
    category: "soups",
    image: "/food/dish-egusi.webp",
    alt: "A bowl of egusi soup with assorted meat beside pounded yam",
    note: "Assorted meat, wrapped hot",
  },
  {
    id: "fried-rice",
    name: "Fried Rice & Turkey",
    kitchenId: "mama-tayo",
    kitchen: "Mama Tayo's Kitchen",
    price: 3800,
    rating: 4.7,
    reviews: 38,
    distanceKm: 1.2,
    category: "rice",
    image: "/food/dish-fried-rice.webp",
    alt: "A pot of fried rice with vegetables topped with browned turkey pieces",
    note: "Generous portion, cooked to order",
  },
  {
    id: "peppered-chicken",
    name: "Peppered Chicken",
    kitchenId: "mama-tayo",
    kitchen: "Mama Tayo's Kitchen",
    price: 3200,
    rating: 4.8,
    reviews: 51,
    distanceKm: 1.2,
    category: "grills",
    image: "/food/dish-peppered-chicken.webp",
    alt: "Grilled peppered chicken pieces glazed over a charcoal grill",
    note: "Six pieces, charcoal grilled",
  },
  {
    id: "suya",
    name: "Beef Suya (Large)",
    kitchenId: "halima-home",
    kitchen: "Halima's Home Kitchen",
    price: 2500,
    rating: 4.7,
    reviews: 33,
    distanceKm: 3.8,
    category: "grills",
    image: "/food/dish-suya.webp",
    alt: "Spiced beef suya skewers grilling over charcoal",
    note: "Wrapped with onions and yaji",
  },
  {
    id: "puff-puff",
    name: "Puff Puff (12 pcs)",
    kitchenId: "nkechi-chops",
    kitchen: "Nkechi's Small Chops",
    price: 1200,
    rating: 4.8,
    reviews: 77,
    distanceKm: 2.9,
    category: "snacks",
    image: "/food/dish-puff-puff.webp",
    alt: "A plate of golden brown puff puff",
    note: "Fried on the hour, 7am–7pm",
  },
  {
    id: "moi-moi",
    name: "Moi Moi & Egg",
    kitchenId: "adas-pot",
    kitchen: "Ada's Pot",
    price: 1500,
    rating: 4.8,
    reviews: 29,
    distanceKm: 2.4,
    category: "snacks",
    image: "/food/dish-moi-moi.webp",
    alt: "Moi moi bean pudding topped with boiled egg and fish",
    note: "Steamed in leaf, egg and fish",
  },
  {
    id: "meat-pie",
    name: "Meat Pie (4 pcs)",
    kitchenId: "nkechi-chops",
    kitchen: "Nkechi's Small Chops",
    price: 2000,
    rating: 4.7,
    reviews: 41,
    distanceKm: 2.9,
    category: "snacks",
    image: "/food/dish-meat-pie.webp",
    alt: "A freshly baked meat pie broken open to show the filling",
    note: "Buttery crust, minced beef",
  },
  {
    id: "efo-riro",
    name: "Efo Riro & Assorted",
    kitchenId: "mama-tayo",
    kitchen: "Mama Tayo's Kitchen",
    price: 3900,
    rating: 4.8,
    reviews: 44,
    distanceKm: 1.2,
    category: "soups",
    image: "/food/dish-efo-riro.webp",
    alt: "A pot of efo riro vegetable stew with assorted meat",
    note: "Comes with your choice of swallow",
  },
  {
    id: "ofada-ayamase",
    name: "Ofada Rice & Ayamase",
    kitchenId: "ofada-republic",
    kitchen: "Ofada Republic",
    price: 4500,
    rating: 4.6,
    reviews: 27,
    distanceKm: 6.3,
    category: "rice",
    image: "/food/dish-ofada.webp",
    alt: "Ofada rice served with green ayamase pepper sauce",
    note: "Wrapped in leaf, assorted meat",
  },
  {
    id: "butter-cake",
    name: "Butter Cake (8 inch)",
    kitchenId: "ronke-bakes",
    kitchen: "Auntie Ronke Bakes",
    price: 9000,
    rating: 4.9,
    reviews: 36,
    distanceKm: 4.1,
    category: "sweet",
    image: "/food/dish-cake.webp",
    alt: "A slice of homemade butter cake on a plate",
    note: "Order by 11am for same day",
  },
  {
    id: "zobo",
    name: "Chilled Zobo (1L)",
    kitchenId: "ronke-bakes",
    kitchen: "Auntie Ronke Bakes",
    price: 1500,
    rating: 4.6,
    reviews: 22,
    distanceKm: 4.1,
    category: "drinks",
    image: "/food/dish-zobo.webp",
    alt: "A glass of deep red hibiscus zobo drink",
    note: "No added sugar option",
  },
];

/** Menu shown on the kitchen-profile app screen. */
export const kitchenMenu: Record<string, { name: string; price: Money; note: string; image: string }[]> = {
  "mama-tayo": [
    {
      name: "Party Jollof & Chicken",
      price: 3500,
      note: "Smoky, with plantain",
      image: "/food/dish-party-jollof.webp",
    },
    {
      name: "Efo Riro & Assorted",
      price: 3900,
      note: "Choice of swallow",
      image: "/food/dish-efo-riro.webp",
    },
    {
      name: "Fried Rice & Turkey",
      price: 3800,
      note: "Cooked to order",
      image: "/food/dish-fried-rice.webp",
    },
    {
      name: "Peppered Chicken",
      price: 3200,
      note: "Six pieces, charcoal",
      image: "/food/dish-peppered-chicken.webp",
    },
  ],
};

export type Review = {
  id: string;
  rating: number;
  body: string;
  kitchen: string;
  kitchenId: string;
  when: string;
  dish: string;
};

/**
 * Reviews are anonymous everywhere on Pottly — no reviewer name, photo or
 * handle is ever stored against a public review.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    rating: 5,
    body:
      "Portion was much bigger than I expected for the price, and the jollof actually tasted like party jollof. Messaged her on WhatsApp at 10, food came just after 12.",
    kitchen: "Mama Tayo's Kitchen",
    kitchenId: "mama-tayo",
    dish: "Party Jollof & Chicken",
    when: "2 weeks ago",
  },
  {
    id: "r2",
    rating: 5,
    body:
      "The egusi is the closest thing to my mum's that I have found in Surulere. Pounded yam arrived still warm and wrapped properly.",
    kitchen: "Ada's Pot",
    kitchenId: "adas-pot",
    dish: "Egusi & Pounded Yam",
    when: "1 month ago",
  },
  {
    id: "r3",
    rating: 4,
    body:
      "Suya was excellent and the yaji is not shy. Took a little longer than the estimate on a Saturday, but she told me upfront on WhatsApp.",
    kitchen: "Halima's Home Kitchen",
    kitchenId: "halima-home",
    dish: "Beef Suya (Large)",
    when: "3 weeks ago",
  },
  {
    id: "r4",
    rating: 5,
    body:
      "Ordered small chops for 20 people. Everything arrived hot, counted correctly, and paying cash on delivery made it easy for me to sort out at the door.",
    kitchen: "Nkechi's Small Chops",
    kitchenId: "nkechi-chops",
    dish: "Small chops tray",
    when: "1 week ago",
  },
  {
    id: "r5",
    rating: 5,
    body:
      "I sent a picture of what I wanted and she matched it. Cake was moist, not too sweet, and the price we agreed on WhatsApp was the price I paid.",
    kitchen: "Auntie Ronke Bakes",
    kitchenId: "ronke-bakes",
    dish: "Butter Cake (8 inch)",
    when: "2 months ago",
  },
  {
    id: "r6",
    rating: 4,
    body:
      "Proper ofada, wrapped in leaf, and the ayamase had real assorted meat in it. Delivery to Ikate was quick.",
    kitchen: "Ofada Republic",
    kitchenId: "ofada-republic",
    dish: "Ofada Rice & Ayamase",
    when: "5 weeks ago",
  },
];

/** Areas used by the location picker in the hero and app UI. */
export const areas = [
  "Yaba, Lagos",
  "Surulere, Lagos",
  "Ikeja GRA, Lagos",
  "Gbagada, Lagos",
  "Lekki Phase 1, Lagos",
  "Maryland, Lagos",
];
