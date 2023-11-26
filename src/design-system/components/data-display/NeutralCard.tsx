import styled from '@emotion/native';

import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {GenericCard} from './GenericCard';
import {getColorWithKey} from '../../styling-helpers/getColorWithKey';

export interface CardProps {
  testID?: string;
  children: React.ReactNode;
  minWidth?: number;
  onPress?: (e: GestureResponderEvent) => void;
  stretches?: boolean;
}

export function NeutralCard({
  testID,
  children,
  minWidth,
  onPress,
  stretches,
}: CardProps) {
  if (!onPress)
    return (
      <StyledGenericCard
        stretches={stretches}
        minWidth={minWidth}
        testID={testID}>
        {children}
      </StyledGenericCard>
    );

  return (
    <StyledGenericCard
      stretches={stretches}
      minWidth={minWidth}
      testID={testID}>
      {/* TouchableOpacity has to be INSIDE the card otherwise shadows make it super ugly on Android :( */}
      <StyledTouchableOpacity onPress={onPress}>
        {children}
      </StyledTouchableOpacity>
    </StyledGenericCard>
  );
}

const StyledGenericCard = styled(GenericCard)<{stretches?: boolean}>(
  ({theme, minWidth, stretches}) => ({
    // Strangely, this props is not propagated to GenericCard...
    minWidth,
    width: stretches ? '100%' : undefined,

    // For now, we use the primary contrastText color as the background color
    // It feels like these cards are actually a primary color card in an inverted version
    // We'll confirm this with more design
    backgroundColor: getColorWithKey(theme, 'primary.contrastText'),
    ...theme.boxShadow.level1,
  }),
);

const StyledTouchableOpacity = styled(TouchableOpacity)({
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
