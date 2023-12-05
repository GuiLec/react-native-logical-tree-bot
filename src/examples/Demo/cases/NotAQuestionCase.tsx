import Chatbot from '../../../../lib';
import {Typography} from '../../../design-system/components/general/typography/Typography';
import {Ids} from './ids';

export const NotAQuestionCase = () => {
  return (
    <Chatbot.Case
      id={Ids.not_a_question}
      clickableAnswerOptions={['Gulp, gulp']}
      next={[
        {
          stepId: Ids.try_rn_logical_tree_bot,
        },
      ]}>
      <Chatbot.Case.Paragraph>
        <Typography>{"That wasn't a question!"}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{'Screw it!'}</Typography>
      </Chatbot.Case.Paragraph>
      <Chatbot.Case.Paragraph>
        <Typography>{"Let's go for a drink!"}</Typography>
      </Chatbot.Case.Paragraph>
    </Chatbot.Case>
  );
};
