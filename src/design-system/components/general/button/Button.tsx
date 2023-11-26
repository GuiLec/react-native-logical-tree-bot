import {Theme, useTheme} from '@emotion/react';

import {
  type ColorVariant,
  DEFAULT_ICON_SIZE,
  type ShapeVariant,
  type SizeVariant,
  getButtonColors,
  iconButtonIconSizes,
  iconButtonSize,
  textButtonPaddingHorizontal,
  textButtonPaddingVertical,
} from './button.styles';
import {GenericButton} from './GenericButton';

import {type IconName} from '../icon/icons';

import {type IconPosition} from './button.types';
import {getColorWithKey} from '../../../styling-helpers/getColorWithKey';
import {StyleProp, ViewStyle} from 'react-native';

type ButtonProps = {
  color?: ColorVariant;
  variant?: ShapeVariant;
  size?: SizeVariant;
  label?: string;
  icon?: IconName;
  iconPosition?: IconPosition;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  isStretched?: boolean;
  testID?: string;
  isTextUnderlined?: boolean;
  style?: StyleProp<ViewStyle>;
};

/**
 * This Button handles both buttons with only an icon and buttons in general
 * It should probably be split as it complexifies the code a lot
 *
 * If needed it could still be unified afterwards in a unified interface, but the underlying
 * implementation should not mix the two...
 */
export const Button = ({
  color = 'primary',
  variant = 'plain',
  size = 'M',
  label,
  icon,
  iconPosition = 'left',
  isDisabled = false,
  isLoading = false,
  onPress,
  isStretched = false,
  testID,
  isTextUnderlined = false,
  style,
}: ButtonProps) => {
  const theme = useTheme();

  const isIconButton = !label && !!icon;

  const iconSize: keyof Theme['sizes']['icons'] = isIconButton
    ? iconButtonIconSizes[size]
    : DEFAULT_ICON_SIZE;

  const {contentColor, backgroundColor, borderColor} = getButtonColors({
    color,
    variant,
    isDisabled,
  });

  const containerStyle = {
    backgroundColor: getColorWithKey(theme, backgroundColor),
    borderColor:
      borderColor === 'transparent'
        ? 'transparent'
        : getColorWithKey(theme, borderColor),
    borderWidth: 1,
    borderRadius: 1000, // This value is equivalent to '50%' (React native does not handle strings for borderRadius). This allow to have a circular border without specifying an exact value
    ...(isIconButton
      ? {
          width: iconButtonSize[size],
          height: iconButtonSize[size],
        }
      : {
          paddingHorizontal: theme.spacings[textButtonPaddingHorizontal[size]],
          paddingVertical: theme.spacings[textButtonPaddingVertical[size]],
        }),
  };

  return (
    <GenericButton
      label={label}
      icon={icon}
      iconPosition={iconPosition}
      isDisabled={isLoading || isDisabled}
      shouldDisplayLoader={isLoading}
      onPress={onPress}
      containerStyle={containerStyle}
      textColor={contentColor}
      iconSize={iconSize}
      iconColor={contentColor}
      isStretched={isStretched}
      testID={testID}
      isTextUnderlined={isTextUnderlined}
      style={style}
    />
  );
};
