import React, {ReactNode} from 'react';
import {Box} from '../../../design-system/components/layout/box/Box';
import {BotMessage} from './BotMessage';
import {Spacer} from '../../../design-system/components/layout/spacer/Spacer';
import {UserMessage} from './UserMessage';

interface Props {
  answer: string | null;
  paragraphs: ReactNode[];
  showChoiceButtons: () => void;
}

const DialogStepToMemoize = ({
  answer,
  paragraphs,
  showChoiceButtons,
}: Props) => {
  return (
    <Box>
      <BotMessage
        showChoiceButtons={showChoiceButtons}
        paragraphs={paragraphs}
      />
      <Spacer gap="$3" />
      {answer && <UserMessage text={answer} />}
    </Box>
  );
};

export const DialogStep = React.memo(DialogStepToMemoize);
