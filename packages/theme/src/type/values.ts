import type { Fonts, FontSizes, FontWeights, LineHeights } from './types';

const systemFontStack = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`;
const systemMonoFontStack = `SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace`;

export const fonts: Fonts = {
  body: systemFontStack,
  heading: systemFontStack,
  mono: systemMonoFontStack,
};

export const fontSizes: FontSizes = [
  12,
  14,
  16,
  18,
  21,
  24,
  28,
  32,
  36,
  42,
  48,
  56,
  64,
];

export const fontWeights: FontWeights = {
  body: 400,
  heavy: 700,
  black: 900,
};

export const lineHeights: LineHeights = {
  regular: 1.5,
  tight: 1.125,
};
