import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const ButCanReadNoCase = () => {
  return (
    <Chatbot.Case
      id={Ids.but_can_read_no}
      clickableAnswerOptions={['Yes', 'No']}
      next={[
        {
          condition: /no/i,
          stepId: Ids.hate_you,
        },
        {
          stepId: Ids.what,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'But you can read "No", can\'t you ?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
