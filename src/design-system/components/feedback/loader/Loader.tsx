import {useTheme} from '@emotion/react';
import {ActivityIndicator} from 'react-native';
import {ColorKeyPaths} from '../../../theme/colors';
import {getColorWithKey} from '../../../styling-helpers/getColorWithKey';
import {
  CurrentColor,
  useCurrentColor,
} from '../../../styling-helpers/currentColor';

export const Loader = ({
  color: prioritizedColor = 'current-color',
  size,
}: {
  color?: ColorKeyPaths | CurrentColor;
  size?: 'small' | 'large';
}) => {
  const color = useCurrentColor(prioritizedColor);
  const theme = useTheme();

  return (
    <ActivityIndicator
      size={size}
      color={color && getColorWithKey(theme, color)}
    />
  );
};
