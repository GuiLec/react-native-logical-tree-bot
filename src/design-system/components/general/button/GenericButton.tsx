import styled from '@emotion/native';
import {Pressable, StyleProp, StyleSheet, type ViewStyle} from 'react-native';
import {NestedKeys} from '../../../nested-keys';
import {Icon} from '../icon/Icon';
import {IconName} from '../icon/icons';
import {Typography} from '../typography/Typography';
import {IconPosition} from './button.types';
import {Theme} from '@emotion/react';
import {Spacer} from '../../layout/spacer/Spacer';
import {Loader} from '../../feedback/loader/Loader';

type GenericButtonProps = {
  label?: string;
  icon?: IconName;
  iconPosition?: IconPosition;
  shouldDisplayLoader: boolean;
  isDisabled: boolean;
  isStretched?: boolean;
  testID?: string;
  onPress?: () => void;
  isTextUnderlined?: boolean;

  containerStyle: ViewStyle;
  textColor: NestedKeys<Theme['colors']>;
  iconColor: NestedKeys<Theme['colors']>;
  iconSize: keyof Theme['sizes']['icons'];
  style?: StyleProp<ViewStyle>;
};

/*
 * This generic button layer is not useful, as it is used only once.
 * It could've been in the button directly.
 */
export const GenericButton = ({
  label,
  icon,
  iconPosition,
  isDisabled,
  shouldDisplayLoader,
  onPress,
  containerStyle,
  iconSize,
  iconColor,
  textColor,
  isStretched = false,
  testID,
  isTextUnderlined = false,
  style,
}: GenericButtonProps) => {
  const isIconButton = !label && !!icon;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      testID={testID}
      style={({pressed}) => {
        // Cannot use styled component here because we are using the style callback function pattern of Pressable
        return [
          styles.buttonContainer,
          containerStyle,
          pressed && styles.pressed,
          isStretched && styles.stretched,
          style,
        ];
      }}>
      <>
        <ContentContainer isVisible={!shouldDisplayLoader}>
          {iconPosition === 'left' && !isIconButton && !!icon && (
            <>
              <Icon name={icon} colorKey={iconColor} size={iconSize} />
              <Spacer gap="$2" direction="horizontal" />
            </>
          )}
          {label && (
            <NotSelectableTypography
              variant="bodySmall"
              fontWeight="strong"
              color={textColor}
              underlined={isTextUnderlined}>
              {label}
            </NotSelectableTypography>
          )}
          {iconPosition === 'right' && !isIconButton && !!icon && (
            <>
              <Spacer gap="$1" direction="horizontal" />
              <Icon name={icon} colorKey={iconColor} size={iconSize} />
            </>
          )}
          {isIconButton && (
            <Icon name={icon} colorKey={iconColor} size={iconSize} />
          )}
        </ContentContainer>
        {shouldDisplayLoader && (
          <LoadingContainer>
            <Loader color={iconColor} />
          </LoadingContainer>
        )}
      </>
    </Pressable>
  );
};

const ContentContainer = styled.View<{
  isVisible: boolean;
}>(({isVisible}) => ({
  opacity: isVisible ? 1 : 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LoadingContainer = styled.View({
  position: 'absolute',
});

const NotSelectableTypography = styled(Typography)({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO weird, this should be ok
  userSelect: 'none',
  textAlign: 'center',
});

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5, // @todo : This is a temporary feedback on user press. Remove this when hover and correct press color have been developed
  },
  stretched: {
    alignSelf: 'stretch',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
