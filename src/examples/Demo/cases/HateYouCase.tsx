import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const HateYouCase = () => {
  return (
    <Chatbot.Case id={Ids.hate_you} answerOptions={[]} next={[]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Listen...'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{'I hate you!'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
