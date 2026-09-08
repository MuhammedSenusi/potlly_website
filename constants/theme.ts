/**
 * Pottly design tokens — the web mirror of the mobile app's theme.
 *
 * The mobile (React Native) source of truth is preserved verbatim at
 * `docs/mobile-app-theme.reference.ts`. This file is the web-safe port: same
 * palette, same type ramp, no React Native imports. The values below are also
 * emitted as CSS custom properties in `app/globals.css` (`@theme`) — change
 * them in both places, or import from here in TS and read the CSS vars in CSS.
 */

/** Brand palette shared with the mobile app. */
export const Brand = {
  primary: '#e85d04',
  primaryDark: '#c44303',
  secondary: '#faa307',
  onPrimary: '#ffffff',
} as const;

export const Colors = {
  ...Brand,
  /** Warm near-black used for headings and body copy. */
  ink: '#191410',
  inkSecondary: '#4a423b',
  inkTertiary: '#857c73',
  /** Page and section surfaces, warmest first. */
  surface: '#ffffff',
  cream: '#fdfaf5',
  shell: '#f7f1e8',
  sand: '#efe5d7',
  charcoal: '#1d1611',
  line: '#e9dfd1',
  emberSoft: '#fff2e8',
  positive: '#1a7f37',
  negative: '#cf222e',
} as const;

export const Fonts = {
  /** Epilogue — titles and section headers. */
  headline: 'var(--font-headline)',
  /** Plus Jakarta Sans — paragraph and running text. */
  body: 'var(--font-body)',
  /** Plus Jakarta Sans — buttons, captions, form labels. */
  label: 'var(--font-body)',
} as const;

/** 4px base scale, matching the mobile Spacing tokens. */
export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  sm: 10,
  md: 14,
  card: 20,
  lg: 28,
  pill: 999,
} as const;

export const MaxContentWidth = 1200;
