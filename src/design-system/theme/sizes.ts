import {NestedKeys} from '../nested-keys';

export type SizesKeyPaths = NestedKeys<typeof sizes>;

/**
 * The spacings object defines the sizes of commonly used spaces in the application.
 *
 * Developers are encouraged to use the predefined spacing values in their styles,
 * and add new spacing values to this object if needed.
 */
export const sizes = {
  icons: {
    $2: 8,
    $3: 12,
    $4: 16,
    $5: 20,
    $6: 24,
    $8: 32,
    $9: 36,
    $10: 40,
    $12: 48,
    $18: 72,
    $21: 84,
    $25: 100,
  },
  illustrations: {
    $12: 48,
    $20: 80,
    $25: 100,
    $40: 160,
    $50: 200,
  },
  circularIcons: {
    $6: 24,
    $9: 36,
    $18: 72,
    $27: 108,
  },
  avatar: {
    $9: 36,
    $12: 48,
    $17: 68,
    $24: 96,
    $33: 132,
    $54: 216,
    $64: 256,
  },
  switch: {
    circle: 28,
    padding: 2,
    width: 70,
  },
};
