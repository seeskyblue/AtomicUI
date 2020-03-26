import { hex2rgba } from 'helper/style';

import * as palette from './palette';

const ALPHA_TONAL = 0.24;
const ALPHA_DISABLED = 0.38;
const ALPHA_INACTIVE = 0.54;
const ALPHA_EMPHASIS_MEDIUM = 0.6;
const ALPHA_EMPHASIS_HIGH = 0.87;

export const white = '#FFFFFF';
export const black = '#000000';

const surfacePalette = palette.Grey;

export const primary = '#1565c0';
export const primaryTonal = hex2rgba(primary, ALPHA_TONAL);
export const primaryLight = '#1e88e5';
export const primaryDark = '#0d47a1';
export const secondary = '#28b5f6';
export const secondaryLight = '#81d3fa';
export const secondaryDark = '#039ae5';
export const secondaryDarkTonal = hex2rgba(secondaryDark, ALPHA_TONAL);

export const surface = surfacePalette['50'].hex;
export const surfaceLight = white;
export const surfaceDark = surfacePalette['200'].hex;
export const surfaceDisabled = surfacePalette['300'].hex;

export const textWhiteInactive = hex2rgba(white, ALPHA_INACTIVE);
export const textWhiteDisabled = hex2rgba(white, ALPHA_DISABLED);
export const textBlackInactive = hex2rgba(black, ALPHA_INACTIVE);
export const textBlackDisabled = hex2rgba(black, ALPHA_DISABLED);

export const textOnPrimaryEmphasisHigh = '#fcfcfc';
export const textOnPrimaryEmphasisMedium = textOnPrimaryEmphasisHigh;
export const textOnPrimary = textOnPrimaryEmphasisHigh;
export const textOnPrimaryInactive = hex2rgba(
  textOnPrimaryEmphasisHigh,
  ALPHA_INACTIVE
);
export const textOnPrimaryDisabled = hex2rgba(white, ALPHA_DISABLED);

// export const textOnSecondaryEmphasisHigh = '#222222';
export const textOnSecondaryEmphasisHigh = '#222222';
export const textOnSecondaryEmphasisMedium = textOnSecondaryEmphasisHigh;
export const textOnSecondary = textOnSecondaryEmphasisHigh;
export const textOnSecondaryInactive = hex2rgba(
  textOnSecondaryEmphasisHigh,
  ALPHA_INACTIVE
);
export const textOnSecondaryDisabled = hex2rgba(black, ALPHA_DISABLED);

export const textOnSurfaceEmphasisHigh = hex2rgba(black, ALPHA_EMPHASIS_HIGH);
export const textOnSurfaceEmphasisMedium = hex2rgba(
  black,
  ALPHA_EMPHASIS_MEDIUM
);
export const textOnSurface = textOnSurfaceEmphasisHigh;
export const textOnSurfaceInactive = hex2rgba(black, ALPHA_INACTIVE);
export const textOnSurfaceDisabled = hex2rgba(black, ALPHA_DISABLED);

export const divider = surfacePalette['300'].hex;
export const error = '#B00020';
