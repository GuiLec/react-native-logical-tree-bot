import styled from '@emotion/native';
import {type ReactNode} from 'react';
import {type TextProps} from 'react-native';

import {FontWeight, TypographyVariant} from '../../../theme/typography';
import {ColorKeyPaths} from '../../../theme/colors';
import {getColorWithKey} from '../../../styling-helpers/getColorWithKey';
import {
  CurrentColor,
  useCurrentColor,
} from '../../../styling-helpers/currentColor';

export type TypographyProps = TextProps & {
  variant?: TypographyVariant;
  fontWeight?: FontWeight;
  children?: ReactNode;
  color?: ColorKeyPaths | CurrentColor;
  underlined?: boolean;
  italic?: boolean;
  maxLinesBeforeEllipsis?: number;
};

export const Typography = ({
  variant = 'body',
  fontWeight = 'regular',
  children,
  color: prioritisedColor = 'current-color',
  underlined,
  italic,
  maxLinesBeforeEllipsis,
  ...textProps
}: TypographyProps) => {
  const color = useCurrentColor(prioritisedColor);

  return (
    <StyledText
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      underlined={underlined}
      italic={italic}
      numberOfLines={maxLinesBeforeEllipsis}
      {...textProps}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<{
  variant: TypographyVariant;
  fontWeight: FontWeight;
  color: ColorKeyPaths;
  underlined?: boolean;
  italic?: boolean;
  maxLinesBeforeEllipsis?: number;
}>(({variant, fontWeight, color, underlined, italic, theme}) => ({
  ...theme.typography[variant][fontWeight],
  color: getColorWithKey(theme, color),
  textDecorationLine: underlined ? 'underline' : 'none',
  fontStyle: italic ? 'italic' : 'normal',
}));
