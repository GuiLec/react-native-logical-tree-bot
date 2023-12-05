import type {FlexAlignType, ViewStyle} from 'react-native';

import styled from '@emotion/native';
import {type ReactNode} from 'react';
import {View} from 'react-native';
import {Theme} from '@emotion/react';
import {ColorKeyPaths} from '../../../theme/colors';
import {SizesKeyPaths} from '../../../theme/sizes';
import {getColorWithKey} from '../../../styling-helpers/getColorWithKey';
import {getSizeWithKey} from '../../../styling-helpers/getSizeWithKey';

type BoxDirection = 'vertical' | 'horizontal';

/*
 * @todo Ideally, each props should be either a number OR the spacing/size variant.
 * We should probably get rid of the spacings grid anyway, and make these all numbers.
 */
export interface BoxProps {
  direction?: BoxDirection;
  flex?: ViewStyle['flex'];
  flexWrap?: ViewStyle['flexWrap'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  paddingHorizontal?: keyof Theme['spacings'];
  paddingVertical?: keyof Theme['spacings'];
  paddingBottom?: keyof Theme['spacings'];
  paddingRight?: keyof Theme['spacings'];
  paddingLeft?: keyof Theme['spacings'];
  paddingTop?: keyof Theme['spacings'];
  padding?: keyof Theme['spacings'];
  testID?: string;
  children?: ReactNode;
  backgroundColorKeyPath?: ColorKeyPaths;
  alignSelf?: 'auto' | FlexAlignType | undefined;
  shadowVariant?: keyof Theme['boxShadow'];

  height?: number | SizesKeyPaths;
  width?: number | SizesKeyPaths;
}

export const Box = ({
  direction = 'vertical',
  alignSelf,
  children,
  ...otherProps
}: BoxProps) => {
  return (
    <StyledView direction={direction} alignSelf={alignSelf} {...otherProps}>
      {children}
    </StyledView>
  );
};

const StyledView = styled(View, {
  // direction prop is a reserved prop in React Native and should therefore not be forwarded !
  shouldForwardProp: propName => propName !== 'direction',
})<BoxProps & {direction: BoxDirection}>(
  ({
    direction,
    flex,
    flexWrap,
    alignItems,
    justifyContent,
    paddingHorizontal,
    paddingVertical,
    paddingBottom,
    paddingRight,
    paddingLeft,
    paddingTop,
    padding,
    theme,
    backgroundColorKeyPath,
    alignSelf,
    shadowVariant,
    width,
    height,
  }) => ({
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    ...(flex && {flex}),
    ...(flexWrap && {flexWrap}),
    ...(alignItems && {alignItems}),
    ...(justifyContent && {justifyContent}),
    ...(paddingHorizontal && {
      paddingHorizontal: theme.spacings[paddingHorizontal],
    }),
    ...(paddingVertical && {
      paddingVertical: theme.spacings[paddingVertical],
    }),
    ...(paddingBottom && {paddingBottom: theme.spacings[paddingBottom]}),
    ...(paddingRight && {paddingRight: theme.spacings[paddingRight]}),
    ...(paddingLeft && {paddingLeft: theme.spacings[paddingLeft]}),
    ...(paddingTop && {paddingTop: theme.spacings[paddingTop]}),
    ...(padding && {padding: theme.spacings[padding]}),
    ...(alignSelf && {alignSelf}),
    ...(backgroundColorKeyPath && {
      backgroundColor: getColorWithKey(theme, backgroundColorKeyPath),
    }),
    ...(shadowVariant && {...theme.boxShadow[shadowVariant]}),
    ...(width && {
      width: typeof width === 'number' ? width : getSizeWithKey(theme, width),
    }),
    ...(height && {
      height:
        typeof height === 'number' ? height : getSizeWithKey(theme, height),
    }),
  }),
);
