/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

/** HomeCook brand palette. */
const brand = {
  primary: '#e85d04',
  primaryDark: '#c44303',
  secondary: '#faa307',
  onPrimary: '#ffffff',
} as const;

export const Colors = {
  light: {
    ...brand,
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',
    positive: '#1A7F37',
    negative: '#CF222E',
  },
  dark: {
    ...brand,
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
    positive: '#3FB950',
    negative: '#F85149',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

/**
 * Font-family names as registered by `useFonts` in `src/app/_layout.tsx`
 * (see `FontAssets`). On web the families resolve through `global.css`.
 */
const headline = {
  regular: 'Epilogue_400Regular',
  medium: 'Epilogue_500Medium',
  semibold: 'Epilogue_600SemiBold',
  bold: 'Epilogue_700Bold',
} as const;

const jakarta = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semibold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
} as const;

export const Fonts = {
  /** Epilogue — titles and section headers. */
  headline,
  /** Plus Jakarta Sans — paragraph and running text. */
  body: jakarta,
  /** Plus Jakarta Sans — buttons, captions, form labels. */
  label: jakarta,
  mono:
    Platform.select({ ios: 'ui-monospace', android: 'monospace', web: 'var(--font-mono)' }) ??
    'monospace',
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
