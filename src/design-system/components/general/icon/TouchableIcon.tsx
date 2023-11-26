import styled from '@emotion/native';
import {useTheme} from '@emotion/react';

import {TouchableOpacity} from 'react-native';
import {Icon, IconProps} from './Icon';

type TouchableIconProps = IconProps & {onPress: () => void; testID?: string};

// For small icons, we ensure the touchable area still respects a minimum size of 44x44px to inline recommended UX standards.
const MIN_TOUCHABLE_SIZE_PX = 44;

export function TouchableIcon({
  onPress,
  testID,
  ...iconProps
}: TouchableIconProps) {
  const theme = useTheme();
  const {size: iconSize = Icon.defaultSize} = iconProps;
  const iconSizePx = theme.sizes.icons[iconSize];
  const touchableOffset = Math.max(MIN_TOUCHABLE_SIZE_PX - iconSizePx, 0) / 2;

  return (
    <StyledTouchable
      onPress={onPress}
      testID={testID}
      hitSlop={{
        bottom: touchableOffset,
        right: touchableOffset,
        left: touchableOffset,
        top: touchableOffset,
      }}>
      <Icon {...iconProps} />
    </StyledTouchable>
  );
}

const StyledTouchable = styled(TouchableOpacity)({
  alignSelf: 'flex-start',
  justifyContent: 'center',
  alignItems: 'center',
});
