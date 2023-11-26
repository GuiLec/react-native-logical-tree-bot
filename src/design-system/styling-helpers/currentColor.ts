import {createContext, useContext} from 'react';
import {ColorKeyPaths} from '../theme/colors';

/**
 * Emulates the CSS color property inheritance which doesn't exist in React Native.
 * If you give 'current-color' as a prop to components that support it, then we will get the current-color defined in the theme
 * otherwise use the given specific color
 */
const CurrentColorContext = createContext<ColorKeyPaths>('primary.main');

const CURRENT_COLOR_NAME = 'current-color' as const;

export type CurrentColor = typeof CURRENT_COLOR_NAME;

export const CurrentColorProvider = CurrentColorContext.Provider;

export function useCurrentColor(
  prioritisedColor: ColorKeyPaths | CurrentColor,
): ColorKeyPaths {
  const currentColor = useContext(CurrentColorContext);

  return prioritisedColor === CURRENT_COLOR_NAME
    ? currentColor
    : prioritisedColor;
}
