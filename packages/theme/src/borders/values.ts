import { Radii, BorderWidths, Borders } from './types';

export const radii: Radii = [1, 2, 3, 4, 5, 7, 9, 999];

export const borderWidths: BorderWidths = [1, 2, 3, 5];

export const borders: Borders = {
  thin: `${borderWidths[0]} solid currentColor`,
  medium: `${borderWidths[1]} solid currentColor`,
  bold: `${borderWidths[2]} solid currentColor`,
  black: `${borderWidths[3]} solid currentColor`,
};
