import {Theme} from '@emotion/react';
import get from 'lodash.get';
import {ColorKeyPaths} from '../theme/colors';

export const getColorWithKey = (theme: Theme, colorKey: ColorKeyPaths) => {
  return get(theme.colors, colorKey);
};
