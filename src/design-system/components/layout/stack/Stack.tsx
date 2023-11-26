import styled from '@emotion/native';
import React, {type ReactNode} from 'react';
import {View} from 'react-native';
import {Theme} from '@emotion/react';

import {Spacer} from '../spacer/Spacer';

type StackDirection = 'vertical' | 'horizontal';

interface Props {
  direction?: StackDirection;
  gap: keyof Theme['spacings'];
  children: ReactNode;
  stretches?: boolean;
}

export const Stack = ({
  direction = 'vertical',
  stretches = false,
  children,
  gap,
}: Props) => {
  return (
    <StackContainer stretches={stretches} direction={direction}>
      {React.Children.map(children, (child, index) =>
        child ? (
          <>
            {index > 0 && <Spacer direction={direction} gap={gap} />}
            {child}
          </>
        ) : null,
      )}
    </StackContainer>
  );
};

const StackContainer = styled(View, {
  // direction prop is a reserved prop in React Native and should therefore not be forwarded !
  shouldForwardProp: propName => propName !== 'direction',
})<{direction: StackDirection; stretches: boolean}>(
  ({direction, stretches}) => ({
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    ...(stretches && {alignSelf: 'stretch'}),
  }),
);
