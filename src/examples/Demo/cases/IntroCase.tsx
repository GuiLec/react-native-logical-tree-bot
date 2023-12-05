import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const IntroCase = () => {
  return (
    <Chatbot.Case
      id={Ids.intro}
      clickableAnswerOptions={['Tell me about decision trees', 'I am fine']}
      next={[
        {
          condition: /decision tree/i,
          stepId: Ids.understand_decision_trees,
        },
        {
          stepId: Ids.goodbye,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{'Hey! I am Gui, your Bot assistant!'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{'Anything I can do for you?'}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
