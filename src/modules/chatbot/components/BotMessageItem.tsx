import styled from '@emotion/native';
import {ReactNode, useEffect} from 'react';
import {Box} from '../../../design-system/components/layout/box/Box';
import {Spacer} from '../../../design-system/components/layout/spacer/Spacer';
import {Typography} from '../../../design-system/components/general/typography/Typography';

interface Props {
  children: ReactNode;
  isNextMessage: boolean;
  isMessageDisplayed: boolean;
  showChoiceButtons: () => void;
  isLastItem?: boolean;
}

export const BotMessageItem = ({
  children,
  isMessageDisplayed,
  isNextMessage,
  showChoiceButtons,
  isLastItem,
}: Props) => {
  if (isMessageDisplayed) {
    return (
      <Box>
        <RoundedBox backgroundColorKeyPath="primary.veryPale" padding="$2">
          {children}
        </RoundedBox>
        <Spacer direction="vertical" gap="$2" />
      </Box>
    );
  }
  if (isNextMessage) {
    return (
      <WaitingDots
        isLastItem={isLastItem}
        showChoiceButtons={showChoiceButtons}
      />
    );
  }
  return null;
};

const RoundedBox = styled(Box)(({theme}) => ({
  borderRadius: theme.borderRadius.$2,
  flexShrink: 1,
}));

const WaitingDots = ({
  showChoiceButtons,
  isLastItem,
}: {
  showChoiceButtons: () => void;
  isLastItem?: boolean;
}) => {
  useEffect(() => {
    return () => {
      if (isLastItem) {
        showChoiceButtons();
      }
    };
  }, [showChoiceButtons, isLastItem]);
  return (
    <Box>
      <RoundedBox backgroundColorKeyPath="primary.veryPale" padding="$2">
        <Typography>{'...'}</Typography>
      </RoundedBox>
      <Spacer direction="vertical" gap="$2" />
    </Box>
  );
};
