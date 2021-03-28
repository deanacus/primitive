import { radii, borderWidths, borders } from './borders';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { spaces } from './spaces';
import { fonts, fontSizes, fontWeights, lineHeights } from './type';

const primitiveTheme = {
  radii,
  borderWidths,
  borders,
  breakpoints,
  colors,
  shadows,
  sizes,
  spaces,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
};

export type PrimitiveTheme = typeof primitiveTheme;
