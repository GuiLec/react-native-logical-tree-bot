import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const WhatCase = () => {
  return (
    <Chatbot.Case id={Ids.what} clickableAnswerOptions={[]} next={[]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Wait, what???'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
