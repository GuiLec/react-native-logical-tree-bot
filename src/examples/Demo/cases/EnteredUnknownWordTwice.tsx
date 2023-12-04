import {Typography} from 'src/design-system/components/general/typography/Typography';
import {Ids} from 'src/examples/Demo/cases/ids';
import {Chatbot} from 'src/modules/chatbot/components/ChatBot/ChatBot';

export const EnteredUnknownWordTwice = () => {
  return (
    <Chatbot.Case
      id={Ids.entered_unknown_word_twice}
      clickableAnswerOptions={['Yes', 'No']}
      next={[
        {
          stepId: Ids.not_a_question,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'So you just entered an unknown word twice!'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
