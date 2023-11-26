import type {Theme} from '@emotion/react';
import {NestedKeys} from '../nested-keys';
import {palette} from './palette';

export type ColorKeyPaths = NestedKeys<Theme['colors']>;

const disabled = {
  main: palette.grey300,
  // Oops, we need to review our colors
  intermediate: palette.grey200,
  light: palette.grey100,
  veryPale: palette.grey100,
  inactive: palette.inactiveGrey,
};

const primary = {
  main: palette.purple100,
  light: palette.green70,
  contrastText: palette.white,
  pale: palette.green30,
  veryPale: palette.green10,
};

export const colors = {
  primary,

  positive: primary,
  negative: {
    main: palette.ocre100,
    light: palette.ocre70,
    contrastText: palette.white,
    veryPale: palette.ocre10,
  },

  background: {
    main: palette.beige50,
    light: palette.white,
    dark: palette.black,
  },
  overlay: {
    main: palette.beige300,
    light: palette.beige70,
  },
  validity: {
    valid: palette.validGreen,
    invalid: palette.invalidRed,

    // These can't be classified yet, we'll need to move them around
    positive: palette.healthbarGreen,
    negative: palette.healthbarRed,
  },
  disabled,
};
