import {Theme} from '@emotion/react';
import get from 'lodash.get';
import {SizesKeyPaths} from '../theme/sizes';

export const getSizeWithKey = (theme: Theme, sizeKey: SizesKeyPaths) => {
  return get(theme.sizes, sizeKey);
};
