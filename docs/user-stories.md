# Home Kitchen Marketplace App

## User Stories — Product Requirements Draft

A marketplace connecting home cooks and small food vendors with customers looking for affordable, generously portioned home-cooked meals.

---

## Key Product Decisions

| Area | Decision |
| --- | --- |
| **Customer accounts** | Optional — browsing, search, viewing kitchens and the order handoff never require an account. An account only unlocks the **Favorites** and **Profile** tabs (saved kitchens/dishes synced across devices). Leaving a review stays anonymous and account-free. |
| **Cook / vendor accounts** | Required — cooks must create an account to manage their kitchen profile and menu. |
| **Tenancy** | Kitchens are the tenants — many independent kitchens on one platform, each with isolated data. No region/market tenant layer. |
| **Ordering** | Handled outside the app — the app hands off to SMS or WhatsApp using the cook's contact number. |
| **Payment** | Cash on delivery — no in-app payment processing. |
| **Reviews** | Anonymous — no reviewer identity is shown publicly. Ranking is influenced by positive review volume/score. |

---

## Customer (Buyer) — No Account Needed

### 1. Browse without signup

As a customer, I want to open the app and browse meals/kitchens without creating an account, so that I can quickly check what's available before committing to anything.

**Acceptance Criteria**

- App opens directly to a browsable home/discovery screen.
- No login wall blocks viewing meals, kitchens, prices, or photos.

### 2. Search by meal, location, or kitchen name

As a customer, I want to search by dish, location/proximity, or kitchen name, so that I can find something specific or something nearby.

**Acceptance Criteria**

- Search bar supports free-text queries.
- Filters available for location/distance and kitchen name.
- Results update live or on search submit.

### 3. View a kitchen/cook profile

As a customer, I want to view a cook's profile with kitchen photo, description, delivery fee info, and dishes with prices, so that I can decide if I want to order.

**Acceptance Criteria**

- Profile displays kitchen photo(s), bio/description, delivery fee & area, and menu with prices.
- Aggregate rating/review summary is visible on the profile.

### 4. Hand off to SMS/WhatsApp to order

As a customer, I want to tap a "Message to Order" button on a meal or profile, so that it opens SMS or WhatsApp — pre-filled with the cook's number and ideally the meal name — where I can finalize the order directly with the cook.

**Acceptance Criteria**

- Button uses `sms:` or `https://wa.me/` deep links.
- Pre-filled message includes meal name and/or kitchen name where possible.
- The app does not manage the conversation itself; it only hands off.

### 5. Cash on delivery

As a customer, I want to pay cash when my food is delivered, so that I don't need to enter payment info or trust an unfamiliar app with a transaction.

**Acceptance Criteria**

- No in-app payment flow exists.
- Cook's profile or chat handoff clearly states payment is cash on delivery.

### 6. Leave an anonymous review

As a customer, I want to leave an anonymous review after ordering, so that I can give honest feedback without my identity attached.

**Acceptance Criteria**

- No reviewer name or profile is shown publicly.
- Review includes a star rating and optional comment.
- Lightweight abuse-prevention (e.g., device/session-based limit) applies even without accounts.

---

## Customer (Buyer) — Discovery & Optional Account

### 6a. Home discovery sections

As a customer, I want the Home tab to surface **Near You**, **Popular**, **Top Rated**, and **Categories**, so that I can find something without typing a search.

**Acceptance Criteria**

- Home shows each section with a few items and a "See all" into a full list.
- "Near You" uses current location; "Top Rated" uses the ranking score; "Popular" uses recent order-intent volume.
- Works fully without an account.

### 6b. Browse by category

As a customer, I want to open a category (e.g. Soups & Stews) and see kitchens and dishes in it, so that I can browse by what I feel like eating.

**Acceptance Criteria**

- Category list screen; tapping a category shows matching kitchens/dishes.
- Category results respect the current location and filters.

### 6c. Recently viewed

As a customer, I want to see kitchens and dishes I looked at recently, so that I can get back to something without searching again.

**Acceptance Criteria**

- Recently viewed is stored on-device and available without an account.
- Each entry links back to the kitchen/dish and can start a review.

### 6d. Save favorites (account required)

As a customer with an account, I want to save kitchens and dishes and see them under Favorites, so that I can keep a shortlist across devices.

**Acceptance Criteria**

- Favorites and Profile tabs prompt sign-in when there is no account; all other browsing is unaffected.
- Saved kitchens and saved dishes are listed separately.
- Favorites sync to the account (not just the device).

### 6e. Set / change location

As a customer, I want to set my location by GPS or by typing an address/area, so that distance-based results are accurate.

**Acceptance Criteria**

- Location can be set without granting GPS permission (manual entry).
- The chosen location drives distance sorting across Home, Search, and Categories.

---

## Cook / Vendor — Account Required

### 7. Create a cook account

As a home cook, I want to sign up and create an account, so that I can manage my kitchen profile, menu, and stay verified/trusted on the platform.

**Acceptance Criteria**

- Signup requires basic info: name, phone number (for SMS/WhatsApp handoff), and location.
- Login is required to edit profile or menu.

### 8. Build kitchen profile

As a home cook, I want to upload a kitchen photo and write a description (including delivery fees/area), so that customers know what I offer and how delivery works.

**Acceptance Criteria**

- Profile supports a kitchen photo upload.
- Free-text description field covers delivery fee and delivery area.

### 9. Manage menu/dishes

As a home cook, I want to add, edit, and remove dishes with prices, so that my menu stays accurate and up to date.

**Acceptance Criteria**

- Add/edit/delete dish entries, each with name, price, and optional photo/description.
- Changes reflect immediately on the public profile.

### 10. Receive orders via SMS/WhatsApp

As a home cook, I want customer orders to come to me through SMS or WhatsApp, so that I can confirm and manage orders using tools I already use daily.

**Acceptance Criteria**

- Cook's phone/WhatsApp number is linked in profile settings.
- The app does not need to build or maintain in-app chat.

### 11. Ranking visibility

As a home cook, I want my ranking to improve with more positive anonymous reviews, so that I get more visibility in search and discovery.

**Acceptance Criteria**

- Ranking/sort algorithm factors in review score (and possibly volume/recency).
- Top-ranked kitchens are surfaced by default or via a "Top Rated" filter.

---

## Platform / System

### 12. Anti-abuse on reviews

As a platform, we want to limit fake or duplicate anonymous reviews, so that the ranking system stays trustworthy despite anonymity.

**Acceptance Criteria**

- Reviews are tied to a device/session token even though displayed anonymously.
- Rate-limiting prevents repeated reviews from the same source.

### 13. Location-based discovery

As a customer, I want the app to use my location (GPS or manually entered), so that nearby kitchens are prioritized in results.

**Acceptance Criteria**

- Optional GPS permission or manual address/zip entry.
- Results are sortable/filterable by distance.

### 14. Deep-link fallback

As a customer without WhatsApp installed, I want the order button to fall back to SMS automatically, so that I'm never stuck unable to contact the cook.

**Acceptance Criteria**

- App detects whether WhatsApp is installed before attempting a `wa.me` link.
- Falls back to `sms:` link automatically if WhatsApp is unavailable.

---

## Open Questions

Worth resolving before development, since they affect scope:

1. Since orders happen over SMS/WhatsApp with no in-app order tracking, how do we confirm a customer actually ordered before allowing a review? Options: trust-based (anyone can review), a self-report "did you order this?" checkbox, or no verification with reliance on moderation/reporting.
2. Should cook accounts require any verification (ID, address, food safety) before going live?
3. What happens if a cook's phone number changes or they stop responding — is there a way for customers to flag inactive kitchens?
