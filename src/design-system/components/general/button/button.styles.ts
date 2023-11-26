import {Theme} from '@emotion/react';
import {NestedKeys} from '../../../nested-keys';

export type ColorVariant = 'primary' | 'negative';

export type ShapeVariant = 'plain' | 'outline' | 'inverted';

export type SizeVariant =
  | 'XXS'
  | 'XS'
  | 'S'
  | 'MS'
  | 'M'
  | 'L'
  /** Specific size for the regform - it does not match the design system */
  | 'regform-next';

export const getButtonColors = ({
  color,
  variant,
  isDisabled,
}: {
  color: ColorVariant;
  variant: ShapeVariant;
  isDisabled: boolean;
}): {
  backgroundColor: NestedKeys<Theme['colors']>;
  contentColor: NestedKeys<Theme['colors']>;
  borderColor: NestedKeys<Theme['colors']> | 'transparent';
} => {
  if (isDisabled) {
    return {
      backgroundColor: `disabled.light`,
      contentColor: `${color}.main`,
      borderColor: 'transparent',
    };
  }

  switch (variant) {
    case 'plain':
      return {
        backgroundColor: `${color}.main`,
        contentColor: `${color}.contrastText`,
        borderColor: 'transparent',
      };
    case 'outline':
      return {
        backgroundColor: `${color}.contrastText`,
        contentColor: `${color}.main`,
        borderColor: `${color}.main`,
      };
    case 'inverted':
      return {
        backgroundColor: `${color}.contrastText`,
        contentColor: `${color}.main`,
        borderColor: `${color}.contrastText`,
      };
  }
};

export const textButtonPaddingHorizontal: Record<
  SizeVariant,
  keyof Theme['spacings']
> = {
  L: '$10',
  M: '$8',
  MS: '$8',
  S: '$6',
  XS: '$4',
  XXS: '$4',
  'regform-next': '$4',
};

export const textButtonPaddingVertical: Record<
  SizeVariant,
  keyof Theme['spacings']
> = {
  L: '$4',
  M: '$3',
  MS: '$3',
  S: '$2',
  XS: '$1',
  XXS: '$1',
  'regform-next': '$4',
};

export const DEFAULT_ICON_SIZE = '$6';

export const iconButtonSize: Record<SizeVariant, number> = {
  L: 68,
  M: 64,
  MS: 40,
  S: 40,
  XS: 32,
  XXS: 32,
  'regform-next': 56,
};
export const iconButtonIconSizes: Record<
  SizeVariant,
  keyof Theme['sizes']['icons']
> = {
  L: '$9',
  M: '$8',
  MS: '$6',
  S: '$5',
  XS: '$6',
  XXS: '$4',
  'regform-next': '$6',
};
