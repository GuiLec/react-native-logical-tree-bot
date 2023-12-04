import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const CanReadYesCase = () => {
  return (
    <Chatbot.Case
      id={Ids.can_read_yes}
      answerOptions={['Yes', 'No']}
      next={[
        {
          condition: /yes/i,
          stepId: Ids.and_can_read_no,
        },
        {
          stepId: Ids.but_can_read_no,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Okay, can you read the word "Yes"?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
