import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const WhatCase = () => {
  return (
    <Chatbot.Case id={Ids.what} clickableAnswerOptions={[]} next={[]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Wait, what???'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
