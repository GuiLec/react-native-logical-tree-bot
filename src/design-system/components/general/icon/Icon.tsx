import {Theme, useTheme} from '@emotion/react';

import {type IconName, icons} from './icons';
import {ColorKeyPaths} from '../../../theme/colors';
import {getColorWithKey} from '../../../styling-helpers/getColorWithKey';
import {
  CurrentColor,
  useCurrentColor,
} from '../../../styling-helpers/currentColor';

export type IconProps = {
  name: IconName;
  size?: keyof Theme['sizes']['icons'];
  colorKey?: ColorKeyPaths | CurrentColor;
  opacity?: number;
};

const DEFAULT_SIZE: NonNullable<IconProps['size']> = '$6';

export const Icon = ({
  name,
  size = DEFAULT_SIZE,
  colorKey: prioritisedColorKey = 'current-color',
  opacity,
}: IconProps) => {
  const theme = useTheme();
  const colorKey = useCurrentColor(prioritisedColorKey);
  const IconElement = icons[name];

  return (
    <IconElement
      width={theme.sizes.icons[size]}
      height={theme.sizes.icons[size]}
      color={colorKey && getColorWithKey(theme, colorKey)}
      opacity={opacity}
    />
  );
};

Icon.defaultSize = DEFAULT_SIZE;
