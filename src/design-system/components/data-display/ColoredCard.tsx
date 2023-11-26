import styled from '@emotion/native';

import {type PropsWithChildren} from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {CurrentColorProvider} from '../../styling-helpers/currentColor';
import {GenericCard} from './GenericCard';
import {ColorKeyPaths} from '../../theme/colors';
import {getColorWithKey} from '../../styling-helpers/getColorWithKey';

export interface CardProps extends BaseCardProps {
  onPress?: (e: GestureResponderEvent) => void;
}

export function ColoredCard({
  color = 'positive',
  testID,
  children,
  minWidth,
  onPress,
}: CardProps) {
  if (!onPress) {
    return (
      <BaseCard color={color} testID={testID} minWidth={minWidth}>
        {children}
      </BaseCard>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <BaseCard color={color} testID={testID} minWidth={minWidth}>
        {children}
      </BaseCard>
    </TouchableOpacity>
  );
}

type BaseCardProps = PropsWithChildren<{
  color?: 'positive' | 'negative';
  minWidth?: number;
  testID?: string;
}>;

function BaseCard({
  color = 'positive',
  testID,
  children,
  minWidth,
}: BaseCardProps) {
  return (
    <CurrentColorProvider value={`${color}.contrastText`}>
      <StyledGenericCard
        minWidth={minWidth}
        backgroundColorKey={`${color}.light`}
        testID={testID}>
        {children}
      </StyledGenericCard>
    </CurrentColorProvider>
  );
}

const StyledGenericCard = styled(GenericCard)<{
  backgroundColorKey?: ColorKeyPaths;
}>(({backgroundColorKey, theme}) => {
  return {
    backgroundColor:
      backgroundColorKey && getColorWithKey(theme, backgroundColorKey),
  };
});
